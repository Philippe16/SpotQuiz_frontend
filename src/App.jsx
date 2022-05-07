import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Splash_Page from "./pages/Splash_Page";
import Home_Page from "./pages/Home_Page";

// CSS
import './css/base.css'

function App() {

  return (
      <div id="wrapper" className="App">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Splash_Page />} />
              <Route path="/home" element={<Home_Page />} />
            </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App