
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// CSS
import '../css/splash_page.css';

const Splash_Page = props => {
  const navigate = useNavigate();

  // todo: Adjust later:  If not logged in, go to login. If logged in, go to home
  useEffect(() => {
    setTimeout(() => {
      navigate('/home')
    }, 1000)
  }, [])

  return (
    <main>
      Splash_Page
    </main>
  )
}

export default Splash_Page