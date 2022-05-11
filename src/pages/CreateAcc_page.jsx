import "../css/createAcc_page.css";
import logo from '../images/logo/full_logo/full_logo_500w.png'
import { Link } from "react-router-dom";
import { useState } from 'react';


const CreateAcc_page = props => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
   e.preventDefault();
       
  }



  return (
    <main>
      <div className="logo_container">
        <img src={logo} alt="Full SpotQuiz logo" />
      </div>
      <form onSumbit={e => handleSubmit(e)} id="acc_form">     
          <h1 id="title">Create Account</h1>

          

          <div className="formContent">
            <div className="acc_input_container">
                <label className="acc_label" htmlFor="email">Username:</label>
                <input name="username" id="username" className="acc_input" type="text" onChange={e => setUsername(e.target.value)} > 
                </input>
            </div>

            <div className="acc_input_container">
                <label className="acc_label" htmlFor="email">Email:</label>
                <input name="email" id="email" className="acc_input" type="text" onChange={e => setEmail(e.target.value)} > 
                </input>
            </div>

            <div className="acc_input_container">
                <label className="acc_label" htmlFor="reEmail">Re-type email:</label>
                <input name="email" id="email" className="acc_input" type="text" onChange={e => setEmail(e.target.value)} > 
                </input>
            </div>

            <div className="acc_input_container">
                <label className="acc_label" htmlFor="password">Password:</label>
                <input name="password" id="password" className="acc_input" type="password" onChange={e => setPassword(e.target.value)} >
                </input>
            </div> 

            <div className="acc_input_container">
                <label className="acc_label" htmlFor="password">Re-type password:</label>
                <input name="password" id="password" className="acc_input" type="password" onChange={e => setPassword(e.target.value)} >
                </input>
            </div> 

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