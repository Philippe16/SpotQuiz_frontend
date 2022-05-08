
import PropTypes from 'prop-types'

// CSS
import '../css/questionForm.css';


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
      </div>
    </div>
  )
}

QuestionForm.propTypes = {
  questionNum: PropTypes.number.isRequired
}

export default QuestionForm
