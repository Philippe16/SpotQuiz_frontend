import "../css/createAcc_page.css";
import logo from '../images/logo/full_logo/full_logo_500w.png'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import facade from "../js/apiFacade.js";

const CreateAcc_page = props => {
  const navigate = useNavigate();

  // Form input fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypedEmail, setRetypedEmail] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");

  // Error variables
  const [error, setError] = useState(null);
  const [noUsername, setNoUsername] = useState(null);
  const [noEmail, setNoEmail] = useState(null);
  const [noRetypedEmail, setNoRetypedEmail] = useState(null);
  const [noPassword, setNoPassword] = useState(null);
  const [noRetypedPassword, setNoRetypedPassword] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    let containsError = checkInput(); 
    
    if(containsError === false){
      let newUser = {
        username: username,
        email: email,
        password: password
      };

      const options = facade.makeOptions("POST", false, newUser);
    
      fetch("http://localhost:8080/SpotQuiz_backend_war_exploded/api/SpotQuiz/createAccount", options)
      .then(res => {
        return res.json();
      })
      .then(data => {
        facade.login(newUser.email, newUser.password);

        if(localStorage.getItem('jwtToken') !== null){
          navigate('/home')
        }
      })
      .catch(err => {
        console.log(err.message);
      })
    }
  }
    
  const checkInput = () => {
    let containsError = false;

    setNoUsername(null);
    setNoEmail(null);
    setNoRetypedEmail(null);
    setNoPassword(null); 
    setNoRetypedPassword(null);
    setError(null);
    
    if (username.trim() === "") {
        containsError = true;
        setNoUsername('Please enter username');
    }
    
    //Check for the Email
    if (email.trim() === "") {
        containsError = true;
        setNoEmail('Please enter email');
    }

    if (retypedEmail !== email) {
        containsError = true;
        setNoRetypedEmail('Please enter the same email');
      }


    //Check for the password
    if (password.trim() === "") {
        containsError = true;
        setNoPassword('Please enter a password');
      }

    if (retypedPassword !== password) {
        containsError = true;
        setNoRetypedPassword('Please enter the same password');
    }  

    if(containsError === true){
        setError("Error, please check your inputs");       
    }
    
    return containsError;    
  };

  return (
    <main>
      <div className="logo_container">
        <img src={logo} alt="Full SpotQuiz logo" />
      </div>
      <form onSubmit={e => handleSubmit(e)} id="acc_form">     
          <h1 id="title">Create Account</h1>
    
          <div className="formContent">
            <div className="acc_input_container">
              <label className="acc_label" htmlFor="email">Username:</label>
              <input name="username" id="username" className="acc_input" type="text" onChange={e => setUsername(e.target.value)} > 
              </input>

              {noUsername && (
                <div className="error_container">
                  { noUsername }
                </div>
              )}
            </div>

            <div className="acc_input_container">
              <label className="acc_label" htmlFor="email">Email:</label>
              <input name="email" id="email" className="acc_input" type="text" onChange={e => setEmail(e.target.value)} > 
              </input>
              
              {noEmail && (
                <div className="error_container">
                    { noEmail }
                </div>
              )}   
            </div>

            <div className="acc_input_container">
              <label className="acc_label" htmlFor="reEmail">Re-type email:</label>
              <input name="retypedEmail" id="retypedEmail" className="acc_input" type="text" onChange={e => setRetypedEmail(e.target.value)} > 
              </input>

              {noRetypedEmail && (
                <div className="error_container">
                    { noRetypedEmail }
                </div>
              )}   
            </div>

            <div className="acc_input_container">
              <label className="acc_label" htmlFor="password">Password:</label>
              <input name="password" id="password" className="acc_input" type="password" onChange={e => setPassword(e.target.value)} >
              </input>

              {noPassword && (
                <div className="error_container">
                    { noPassword }
                </div>
              )}   
            </div> 

            <div className="acc_input_container">
              <label className="acc_label" htmlFor="rePassword">Re-type password:</label>
              <input name="retypedPassword" id="retypedPassword" className="acc_input" type="password" onChange={e => setRetypedPassword(e.target.value)} >
              </input>
              
              {noRetypedPassword && (
                <div className="error_container">
                    { noRetypedPassword }
                </div>
              )}   
            </div> 

            {error && (
              <div className="error_container" id="error_message">
                { error }
              </div>
            )}
          
            <div id="acc_button_container">  
              <button id="acc_button">Join</button>
            </div>    

            <div id="createLink_container">
              <div id="createLink_text">
                  Already have an account?
              </div> 

              <Link id="createLink_link" to="/login">
                Go to login
              </Link>
            </div>
          </div>
      </form>
    </main>
  )
}

export default CreateAcc_page