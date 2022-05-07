
import { Link } from "react-router-dom"

// CSS
import '../css/header.css';

// Images
import logo from '../images/logo/full_logo/full_logo_500w.png'


const Header = props => {
  return (
    <header>
      <div id="header_logo_container">
        <Link to="/home">
          <img src={ logo } alt="SpotQuiz logo" />
        </ Link>   
      </div>
    </header>
  )
}

export default Header
