
import PropTypes from 'prop-types'

// CSS
import '../css/questionForm.css';

// FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const QuestionForm = ({ questionNum }) => {
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
        </div>
      </div> {/* .flexRow .options_container END */}
    </div>
  )
}

QuestionForm.propTypes = {
  questionNum: PropTypes.number.isRequired
}

export default QuestionForm
