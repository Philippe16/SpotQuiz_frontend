
// Components
import Header from "../components/Header";
import Nav from "../components/Nav";
import QuestionForm from "../components/QuestionForm";

// FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMusic } from '@fortawesome/free-solid-svg-icons';

// CSS
import "../css/createQuiz_page.css";

const CreateQuiz_Page = props => {
  return (
    <div>
      <Header />
      
      <div className="flexRow">
        <Nav />

        <main>
          <h1>Create a quiz</h1>
          <h2>
            And share your
            <FontAwesomeIcon icon={ faMusic } className="h2_icon" />
          </h2>

          <form id="createQuiz_form">
            <div className="flexRow formSection">

              <div className="formDivider">
                <input id="quizTitle_input" name="quizTitle" type="text" placeholder="Give your quiz a title"/>
              </div>

              <div id="numOfQuestion_container" className="formDivider">
                <h2>Choose number of questions</h2>
                  <div id="num_container" className="flexRow">
                    <div className="num">
                      3
                    </div>
                    
                    <div className="num">
                      5
                    </div>
                    
                    <div className="num">
                      10
                    </div>
                </div>
              </div>
            </div>

            <div className="formSection">
              <QuestionForm />
              <QuestionForm />
            </div>
          </form>
        </main>
      </ div>
    </div>
  )
}

export default CreateQuiz_Page

/*
  haha idk xD

  
*/