
// Components
import Header from "../components/Header";
import Nav from "../components/Nav";

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

          </form>
        </main>
      </ div>
    </div>
  )
}

export default CreateQuiz_Page