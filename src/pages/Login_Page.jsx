import "../css/login_page.css";
import logo from '../images/logo/full_logo/full_logo_500w.png'
import { Link } from "react-router-dom";
import { useState } from 'react';
import facade from "../js/apiFacade.js";

/* 
Er færdig, det var min mor - hun har fødselsdag i dag xD
    Taaak i:
    
  Skal du ikke over og fejre? :3 :O
  Der er da tid til også at fejre hende :O Oooki, men ville ellers ikke have noget imod
  , hvis du var taget over idag :P Oki doki :P
  Ville bare være ked af, hvis du ikke tog afsted bare pga. projektet xD Goodie goodie

  Men ja, den burde være færdig nu. Jeg kan bare teste senere :P
  Du kan bare commit og push :D Også kan vi se på outsourcing -.-'

  Den skal nok fin-tunes lidt og self. testes (med kørende backend),
  men det burde være det.

  Url inde i apiFacade.js skal måske også ændres, men der skal jeg så lige ind i vores backend
  og tjekke den. Det kan gøres senere :P
*/

const Login_Page = props => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
   e.preventDefault();
       
   facade.login(email, password)
   .then(() => {
     setSignedIn(true);
     setError(null);
   })
   .catch(err => {
     setSignedIn(false);
     setError(err);
     console.log(err);
   });
  }
  
  return (
    <main>
      <div className="logo_container">
        <img src={logo} alt="Full SpotQuiz logo" />
      </div>
      <form onSumbit={e => handleSubmit(e)} id="login_form">     
          <h1 id="title">Login</h1>

          <div className="formContent">
            <div className="login_input_container">
                <label className="login_label" htmlFor="email">Email:</label>
                <input name="email" id="email" className="login_input" type="text" onChange={e => setEmail(e.target.value)} > 
                </input>
            </div>

            <div className="login_input_container">
                <label className="login_label" htmlFor="password">Password:</label>
                <input name="password" id="password" className="login_input" type="password" onChange={e => setPassword(e.target.value)} >
                </input>
            </div> 

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
