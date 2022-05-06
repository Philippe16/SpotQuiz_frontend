// CSS
import '../css/header.css';

// Images
import logo from '../images/logo/full_logo.png'

    
const Header = props => {
  return (
    <header>
      <div id="header_logo_container">
        <img src={ logo } alt="SpotQuiz logo" />   
      </div>
    </header>
  )
}

export default Header

/*
  Og nu er vi done med header xD oki xD
  Tænker nu er et godt tidspunkt lige at commit'e og pushe
*/