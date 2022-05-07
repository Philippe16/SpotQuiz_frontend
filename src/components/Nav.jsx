
import { Link } from "react-router-dom"

// CSS
import '../css/nav.css';

// FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { faUserLarge } from '@fortawesome/free-solid-svg-icons'

const Nav = props => {
  return (
    <nav id="nav" className="flexColumn posFixed">
        <div className="nav_icon">
          <Link to="/home">
            <FontAwesomeIcon icon={ faHouse } className="navIcon" />
          </Link>
        </div>
        
        <div className="nav_icon">
          <Link to="/home">
            <FontAwesomeIcon icon={ faMagnifyingGlass } className="navIcon" />
          </Link>
        </div>

        <div className='nav_icon'>
          <Link to="/home">
            <FontAwesomeIcon icon={ faCirclePlus } className="navIcon" />
          </Link>
        </div>
        
        <div className="nav_icon">
          <Link to="/home">
            <FontAwesomeIcon icon={ faMusic } className="navIcon" />
          </Link>
        </div>
        
        <div className="nav_icon">
          <Link to="/home">
            <FontAwesomeIcon icon={ faUserLarge } className="navIcon" />
          </Link>
        </div>
    </nav>
  )
}

export default Nav