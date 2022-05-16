const URL = "http://localhost:8080/SpotQuiz_backend_war_exploded"; 

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() })
  }
  return res.json();
}

function apiFacade() {
  const setToken = (token) => {
    localStorage.setItem("jwtToken", token);
  }

  const setUsername = (username) => {
    localStorage.setItem("username", username);
  }

  const getToken = () => {
    return localStorage.getItem('jwtToken');
  }

  const loggedIn = () => {
    const loggedIn = getToken() != null;
    return loggedIn;
  }

  const logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("username");
  }
 
  const login = (user, password) => {
    const options = makeOptions("POST", true,{username: user, password: password });
    
    return fetch(URL + "/api/login", options)
      .then(handleHttpErrors)
      .then(res => {
        setToken(res.token);
        setUsername(res.username);
      })
      .catch(err => {
        throw new Error("Something went wrong...");
      })
 
  }

  const fetchData = (path) => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + path, options).then((handleHttpErrors))
    .catch((err)=>{
      throw new Error("Something went wrong...");
    });
  }

  const makeOptions= (method, addToken, body) =>{
   var opts = {
     method: method,
     headers: {
       "Content-type": "application/json",
       'Accept': 'application/json',
     }
   }
   if (addToken && loggedIn()) {
     opts.headers["x-access-token"] = getToken();
   }
   if (body) {
     opts.body = JSON.stringify(body);
   }
    return opts;
  }

  return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    fetchData
  }
}

const facade = apiFacade();
export default facade;
