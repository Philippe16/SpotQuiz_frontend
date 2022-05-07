
import { useState } from 'react';

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
  // Non-chosen img
  const num3_nonChosen = "../src/images/icons/numOfQuestions/num3.png";
  const num5_nonChosen = "../src/images/icons/numOfQuestions/num5.png";
  const num10_nonChosen = "../src/images/icons/numOfQuestions/num10.png";
  const allNonChosen = [num3_nonChosen, num5_nonChosen, num10_nonChosen];

  // Non-chosen img
  const num3_Chosen = "../src/images/icons/numOfQuestions/num3_chosen.png";
  const num5_Chosen = "../src/images/icons/numOfQuestions/num5_chosen.png";
  const num10_Chosen = "../src/images/icons/numOfQuestions/num10_chosen.png";

  const [num3, setNum3] = useState(num3_nonChosen);
  const [num5, setNum5] = useState(num5_Chosen);
  const [num10, setNum10] = useState(num10_nonChosen);

  const allSetNum = [setNum3, setNum5, setNum10];

  const [currentlyChosenNum, setCurrentlyChosenNum] = useState(num5);

  const handleChosenNum = (e) => {
    for(let i = 0; i < allSetNum.length; i ++){
      allSetNum[i](allNonChosen[i]);
    }

    if(e.target.id === "num3"){
      setNum3(num3_Chosen);
      setCurrentlyChosenNum(num3);
    } else if(e.target.id === "num5"){
      setNum5(num5_Chosen);
      setCurrentlyChosenNum(num5);
    } else if(e.target.id === "num10"){
      setNum10(num10_Chosen);
      setCurrentlyChosenNum(num10);
    }
  }

  // ---------------------------------- return ----------------------------------
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
              <section className="formDivider">
                <input id="quizTitle_input" name="quizTitle" type="text" placeholder="Give your quiz a title"/>
              </section>

              <section id="numOfQuestion_container" className="formDivider">
                <h2>Choose number of questions</h2>
                  <div id="num_container" className="flexRow">
                    <div className="num">
                      <img id="num3" onClick={ e => handleChosenNum(e) } src={ num3 } alt="A circular gradient colored icon with the number 3 in the middle"/>
                    </div>
                    
                    <div className="num">
                      <img id="num5" onClick={ e => handleChosenNum(e) } src={ num5 } alt="A circular gradient colored icon with the number 5 in the middle"/>
                    </div>
                    
                    <div className="num">
                      <img id="num10" onClick={ e => handleChosenNum(e) } src={ num10 } alt="A circular gradient colored icon with the number 10 in the middle"/>
                    </div>
                </div>
              </section>
            </div> {/* .flexRow .formSection END */}

          </form>
        </main>
      </ div>
    </div>
  )
}

export default CreateQuiz_Page
