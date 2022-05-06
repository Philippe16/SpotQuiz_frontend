import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Home_Page from "./pages/Home_Page";

// Components
import Header from "./components/Header";

function App() {

  return (
      <div id="wrapper" className="App">
        <BrowserRouter>
          <Header />

            <Routes>
              <Route path="/" element={<Home_Page />} />
            </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App

/*

*/