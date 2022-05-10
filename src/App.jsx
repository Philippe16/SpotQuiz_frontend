import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Splash_Page from "./pages/Splash_Page";
import Home_Page from "./pages/Home_Page";
import CreateQuiz_Page from "./pages/CreateQuiz_Page";
import Login_Page from "./pages/Login_Page";

// CSS
import './css/base.css'

function App() {

  return (
      <div id="wrapper" className="App">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Splash_Page />} />
              <Route path="/login" element={<Login_Page />} />
              <Route path="/home" element={<Home_Page />} />
              <Route path="/createQuiz" element={<CreateQuiz_Page />} />
            </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App