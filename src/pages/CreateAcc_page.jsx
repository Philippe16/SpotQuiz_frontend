import "../css/createAcc_page.css";
import logo from '../images/logo/full_logo/full_logo_500w.png'
import { Link } from "react-router-dom";
import { useState } from 'react';
import facade from "../js/apiFacade.js";

const CreateAcc_page = props => {
  
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
    let newUser = {
        username: username,
        email: email,
        password: password
      };
    
    if(containsError === false){
      const options = facade.makeOptions("POST", false, newUser);
    
      return fetch("http://localhost:8080/SpotQuiz_backend_war_exploded/api/SpotQuiz/createAccount", options)
        .then(facade.handleHttpErrors)
        .then(res => {
          facade.setToken(res.token);
          facade.setUsername(res.username);
        })
        .catch(err => {
          console.log(err.message);
          throw new Error("Something went wrong...");
        })
    }
  }

  /* 
  
    Har btw tilføjet en console.log til vores catch.
    Kan lige prøve at sende igen
    Den laver post fejl igen :O Hvilken post fejl? :O
    CreateAcc_page.jsx:36          POST http://localhost:8080/SpotQuiz_backend_war_exploded/api/SpotQuiz/createAccount 409
    Den skal da lige googles :P

    409 Conflict

    Tror den virker :O
    Har sat den til at give 409, hvis man prøver at oprette en bruger med en email, som allerede er i db...
    Tjek lige om der er noget i db under User xD
    Uh der er kommet en user ind xD
    Prøv så lige igen med en ny user xD
    username og email skal være unik xD

    Det er vel altid noget xD
    Hmm, så skal vi bare lige finde ud af, hvad den fejl er.
    Står der noget i din IntelliJ console?

    Men det vi skal lave:
    - Lave et fetch til vores create acc. endpoint
    - Hvis man logger på succesfully, så bliver man redirected til Home page
    - Hvis ikke, så bliver man på create acc. page og får en fejlbesked (dem vi lavede sidst)
  */
    
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