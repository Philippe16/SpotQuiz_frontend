import PropTypes from 'prop-types'
import { useState } from 'react'

// CSS
import "../css/musicSearchItem.css";

// FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCirclePlay, faCircleStop } from '@fortawesome/free-regular-svg-icons';

const MusicSearchItem = ({ elementID, isPlaying, setIsPlaying }) => {
  const [thisIsPlaying, setThisIsPlaying] = useState(false);

  const handlePlaySong = e => {  
    if(e.target === document.querySelector("#play_btn_icon_" + elementID)){
      if(!thisIsPlaying){
        setThisIsPlaying(true);
      }else{
        setThisIsPlaying(false);
      }
    }else if(e.target !== document.querySelector("#play_btn_icon_" + elementID)){
      setThisIsPlaying(false);
    }
  }

  document.addEventListener('mouseup', function(e) {
    let musicSearcResult_container_elements = document.querySelectorAll(".musicSearchResult_container");
    
    musicSearcResult_container_elements.forEach(element => {
      if (!element.contains(e.target)) {
        element.style.display = 'none';
      }
    });
  });

  return (
    <div id={ elementID } className="flexRow searchItem">
      <div className="flexRow music_info_container">
        <div className="music_info_img_container">
          <img src="../src/images/logo/logo_100x100.png" alt="Album cover"/>
        </div>

        <div className="flexColumn trackInfo_container">
          <div>
            Song title
          </div>

          <div>
            Artist
          </div>
        </div>
      </div>

      <div className="play_btn_container"> 
        <button id={ "play_btn_" + elementID } className="play_btn" type="button">
          {!thisIsPlaying && (
            <FontAwesomeIcon id={ "play_btn_icon_" + elementID } icon={ faCirclePlay } onClick={ e => handlePlaySong(e) } />
          )}

          {thisIsPlaying && (
            <FontAwesomeIcon id={ "play_btn_icon_" + elementID } icon={ faCircleStop } onClick={ e => handlePlaySong(e) } />
          )}
        </button>
      </div>
    </div>
  )
}

MusicSearchItem.propTypes = {
  elementID: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  setIsPlaying: PropTypes.func.isRequired
}

export default MusicSearchItem