
// CSS
import '../css/nav.css';

// FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

const Nav = props => {
  return (
    <nav id="nav" className="flexColumn">
        <div className="nav_icon">
          <FontAwesomeIcon icon={ faHouse } className="navIcon" />
        </div>
        
        <div className="nav_icon">
          <FontAwesomeIcon icon={ faMagnifyingGlass } className="navIcon" />
        </div>

        <div className='nav_icon'>
          <FontAwesomeIcon icon={ faCirclePlus } className="navIcon" />  
        </div>
        
        <div className="nav_icon">
          <FontAwesomeIcon icon={ faMusic } className="navIcon" />
        </div>
        
        <div className="nav_icon">
          <FontAwesomeIcon icon={ faCircleUser } className="navIcon" /> 
        </div>
    </nav>
  )
}

export default Nav

/*  
  Så kan vi godt fjerne den hvide farve. For den bliver sat inde i base.
*/