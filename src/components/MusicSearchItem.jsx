import PropTypes from 'prop-types'

// CSS
import "../css/musicSearchItem.css";

const MusicSearchItem = ({ elementID }) => {
  return (
    <div id={ elementID } className="flexRow searchItem">
      <div className="flexRow music_info_container">
        <div className="music_info_img_container">
          <img src="../src/images/logo/logo_100x100.png" alt="Album cover"/>
        </div>
      </div>

      <div className="snippet_container">
      </div>
    </div>
  )
}

MusicSearchItem.propTypes = {
  elementID: PropTypes.string.isRequired
}

export default MusicSearchItem