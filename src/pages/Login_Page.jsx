import "../css/login_page.css";
import logo from '../images/logo/full_logo/full_logo_500w.png'
import { Link } from "react-router-dom";


const Login_Page = props => {
  return (
    <main>
      <div className="logo_container">
        <img src={logo} alt="Full SpotQuiz logo" />
      </div>
      <form id="login_form">
          <h1 id="title">Login</h1>

          <div className="formContent">
            <div className="login_input_container">
                <label className="login_label" htmlFor="email">Email:</label>
                <input name="email" id="email" className="login_input" type="text" >
                </input>
            </div>

            <div className="login_input_container">
                <label className="login_label" htmlFor="password">Password:</label>
                <input name="password" id="password" className="login_input" type="password" >
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

/* 
  Hmm, vores tekst skal nok lige have en div.
  Så bliver det lettere at style

  id createLink_text
  
  Og vores link skal have createLink_link
*/