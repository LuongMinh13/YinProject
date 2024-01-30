import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Work from "./pages/Work";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portraits" element={<Work />} />
          {/* <Route path="/commercial" element={<Work />} />
          <Route path="/wedding" element={<Work />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
