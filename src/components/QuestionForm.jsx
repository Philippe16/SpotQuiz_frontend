
import { useState } from 'react';
import PropTypes from 'prop-types';

// JS
import Music from "../js/objects/Music";

// CSS
import '../css/questionForm.css';

// FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// Components
import MusicSearchItem from "../components/MusicSearchItem";

const QuestionForm = ({ questionNum, isPlaying, setIsPlaying}) => {
  let musicItems = [1, 2, 3, 4, 5];

  const handleMusicSearch = e => {
    document.querySelector("#musicSearchResult" + questionNum).style.display = "block";
  }


  const [chosenMusic, setChosenMusic] = useState(null);

  const handleChosenMusic = e => {
    let music = new Music("1", "Bois Lie", "Avril Lavigne", "../src/images/logo/logo_100x100.png", "SnippetLink");

    setChosenMusic({music: {
      songID: music.songId,
      title: music.title,
      artist: music.artist,
      imgLink: music.img_link,
      snippetLink: music.snippet_link
    }});
  }


  document.addEventListener('mouseup', function(e) {
    let musicSearcResult_container_elements = document.querySelectorAll(".musicSearchResult_container");
    
    musicSearcResult_container_elements.forEach(element => {
      if (!element.contains(e.target)) {
        element.style.display = 'none';
      }
    });
  });


  const handleRemoveChosenMusic= e => {
    setChosenMusic(null);
  }


  return (
    <div className="questionForm">
      <h2 className="formTitle">Question { questionNum }</h2>

      <div className="create_question_input_container">
        <input name={ "question" + questionNum } className="create_question_input" type="text" placeholder="E.g. Who is the artist of this song?" />
      </div>

      <div className="flexRow options_container">
        <div className="option_container">
          <h3 className="opTitle">Answer</h3>

          <input name={ "question" + questionNum + "op1" } type="text" className="option_input" />
        </div>

        <div className="option_container">
          <h3 className="opTitle">Option 2</h3>

          <input name={ "question" + questionNum + "op2" } type="text" className="option_input" />
        </div>

        <div className="option_container">
          <h3 className="opTitle">Option3</h3>

          <input name={ "question" + questionNum + "op3" } type="text" className="option_input" />
        </div>

        <div className="option_container">
          <h3 className="opTitle">Option4</h3>

          <input name={ "question" + questionNum + "op4" } type="text" className="option_input" />
        </div>
      </div> {/* .flexRow .options_container END */}

      <div className="musicSearch_container">
          <div className="flexRow musicSearch_title_container">
            <h3 className="opTitle">Choose the music for this question </h3>

            <div className="musicSearch_title_img_container">
              <img className="musicSearch_title_img" src="../src/images/spotify_logo/Spotify_Icon_RGB_Green.png" alt="The spotify logo" />
            </div>
          </div>

          <div className="flexColumn musicSearch_container">
            <div className="flexRow musicSearch_input_container">
              <input id={ "musicSearch_title_input_" + questionNum } className="musicSearch_input" type="text" placeholder="Song title"/>
              <input id={ "musicSearch_artist_input_" + questionNum } className="musicSearch_input" type="text" placeholder="Artist"/>
            </div>

            <div className="musicSearch_btn_container">
              <button id={ "musicSearch_btn" + questionNum } className="musicSearch_btn" type="button" onClick={ e => handleMusicSearch(e) }>
                Search &nbsp; <FontAwesomeIcon icon={ faMagnifyingGlass } className="musicSearch_icon" />
              </button>
            </div>
          </div>

          <div className="posRelative create_music_container">
            <div id={ "musicSearchResult" + questionNum } className="posAbsolute musicSearchResult_container">
              <div className="musicSearchResult_title">
                Result(s)
              </div>

              { musicItems.map((index) => {
                return(<MusicSearchItem key={ index } elementID = { "resultItem_q" + index } isPlaying={ isPlaying } setIsPlaying={ setIsPlaying }/>)
              })}

              {/* <MusicSearchItem elementID = { "resultItem_q" + questionNum } isPlaying={ isPlaying } setIsPlaying={ setIsPlaying }/>
              <MusicSearchItem elementID = { "resultItem_q" + questionNum } isPlaying={ isPlaying } setIsPlaying={ setIsPlaying }/>
              <MusicSearchItem elementID = { "resultItem_q" + questionNum } isPlaying={ isPlaying } setIsPlaying={ setIsPlaying }/>
              <MusicSearchItem elementID = { "resultItem_q" + questionNum } isPlaying={ isPlaying } setIsPlaying={ setIsPlaying }/> */}
            </div>

            { !chosenMusic && (
              <div onClick={e=> handleChosenMusic(e)} className="noChosenMusic_container">
                No music, yet...
              </div>
            )}

            { chosenMusic && (
              <div className="posRelative flexRow chosenMusic_container">
                <div className="chosenMusic_img_container">
                  <img src={chosenMusic.music.imgLink} alt="Album cover image" />
                </div>

                <div className="flexColumn chosenMusic_info_container">
                  <div className="chosenMusic_info">
                    {chosenMusic.music.title}
                  </div>

                  <div className="chosenMusic_info">
                    {chosenMusic.music.artist}
                  </div>
                </div>

                <button type="button" onClick={e => handleRemoveChosenMusic(e)} className="posAbsolute remove_chosenMusic_container">
                  <FontAwesomeIcon icon={ faXmark } className="remove_chosenMusic_icon" />
                </button>
              </div>
            )}
          </div>
        </div> {/* .musicSearch_container END */}
    </div>
  )
}

QuestionForm.propTypes = {
  questionNum: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  setIsPlaying: PropTypes.func.isRequired
}

export default QuestionForm
