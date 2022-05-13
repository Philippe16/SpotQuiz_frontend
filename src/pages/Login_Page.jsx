import "../css/login_page.css";
import logo from '../images/logo/full_logo/full_logo_500w.png'
import { Link } from "react-router-dom";
import { useState } from 'react';
import facade from "../js/apiFacade.js";

/* 
  Hvad var der galt? :O
  idk O:
  login er bare sort ah, den mangler error state hook
*/

const Login_Page = props => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [noEmail, setNoEmail] = useState(null);
  const [noPassword, setNoPassword] = useState(null);

  const handleSubmit = (e) => {
   e.preventDefault();
   checkInput();
       
  //  facade.login(email, password)
  //  .then(() => {
  //    setSignedIn(true);
  //    setError(null);
  //  })
  //  .catch(err => {
  //    setSignedIn(false);
  //    setError(err);
  //    console.log(err);
  //  });
  }

  const checkInput = () => {
    let containsError = false;

    setNoEmail(null);
    setNoPassword(null);
    setError(null);
    
    
    //Check for the Email
    if (email.trim() === "") {
        containsError = true;
        setNoEmail('Please enter email');
    }

    //Check for the password
    if (password.trim() === "") {
        containsError = true;
        setNoPassword('Please enter a password');
      }

      if(containsError === true){
        setError("Error, please check your inputs");       
    }else{
        alert('Success'); 
    }
  };

  
  return (
    <main>
      <div className="logo_container">
        <img src={logo} alt="Full SpotQuiz logo" />
      </div>
      <form onSubmit={e => handleSubmit(e)} id="login_form">     
          <h1 id="title">Login</h1>

          <div className="formContent">
            <div className="login_input_container">
              <label className="login_label" htmlFor="email">Email:</label>
              <input name="email" id="email" className="login_input" type="text" onChange={e => setEmail(e.target.value)} > 
              </input>
                
              {noEmail && (
                <div className="error_container">
                    { noEmail }
                </div>
              )}   
            </div>

            <div className="login_input_container">
              <label className="login_label" htmlFor="password">Password:</label>
              <input name="password" id="password" className="login_input" type="password" onChange={e => setPassword(e.target.value)} >
              </input>

              {noPassword && (
                <div className="error_container">
                    { noPassword }
                </div>
              )}   
            </div> 

            {error && (
              <div className="error_container" id="error_message">
                { error }
              </div>
            )}

            <div id="login_button_container">  
              <button id="login_button">Submit</button>
            </div>    

            <div id="createLink_container">
              <div id="createLink_text">
                  No account yet? Join for free!
              </div> 

              <Link id="createLink_link" to="/createAccount">
                Create account
              </Link>
            </div>
          </div> 
      </form>
    </main>
  )
}

export default Login_Page
