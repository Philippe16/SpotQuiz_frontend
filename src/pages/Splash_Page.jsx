
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


// CSS
import '../css/splash_page.css';

// Images
import logo from '../images/logo/full_logo/spotquiz_logo_1000w.png';
import banner from '../images/spotify_logo/spotify_banner.png';

const Splash_Page = props => {
  const navigate = useNavigate();

  // todo: Adjust later:  If not logged in, go to login. If logged in, go to home
  useEffect(() => {
    setTimeout(() => {
      navigate('/home')
    }, 1000)
  }, []);

  return (
    <main className='flexColumn'>
      <div id="logo_container">
        <img src={ logo } alt="SpotQuiz logo" />
      </div>

      <div id="spotify_banner_container" className='flexRow'>
        <div>
        Content provided by
        </div>
        
        <img src={banner} alt="Spotify banner" />
      </div>
    </main>
  )
}

export default Splash_Page
