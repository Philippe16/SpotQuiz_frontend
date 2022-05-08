
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


const QuestionForm = ({ questionNum }) => {
  const [chosenMusic, setChosenMusic] = useState(null);

  const handleChosenMusic = e => {
    let music = new Music("1", "Bois Lie", "Avril Lavigne", "../src/images/logo/logo_100x100.png");

    setChosenMusic({music: {
      songID: music.songId,
      title: music.title,
      artist: music.artist,
      imgLink: music.img_link
    }});
  }

  const handleRemoveChosenMusic= e => {
    setChosenMusic(null);
  }

  return (
    <div className="questionForm">
      <h2 className="formTitle">Question {questionNum}</h2>

      <div className="create_question_input_container">
        <input name={"question" + questionNum} className="create_question_input" type="text" placeholder="E.g. Who is the artist of this song?" />
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

          <div className="flexRow musicSearch_input_container">
            <input className="musicSearch_input" type="text" placeholder="Search by music title" />

            <button className="musicSearch_btn" type="button">
              <FontAwesomeIcon icon={ faMagnifyingGlass } className="musicSearch_icon" />
            </button>
          </div>

          <div className="posRelative create_music_container">
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
  questionNum: PropTypes.number.isRequired
}

export default QuestionForm
