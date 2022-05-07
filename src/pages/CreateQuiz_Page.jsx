
// Components
import Header from "../components/Header";
import Nav from "../components/Nav";

// CSS
import "../css/createQuiz_page.css";

const CreateQuiz_Page = props => {
  return (
    <div>
      <Header />
      
      <div className="flexRow">
        <Nav />

        <main>
          Create Quiz
        </main>
      </ div>
    </div>
  )
}

export default CreateQuiz_Page