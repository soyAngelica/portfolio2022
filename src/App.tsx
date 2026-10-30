import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import DanielaFacefit from "./components/Proposals/DanielaFacefit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/propuestas/facefit" element={<DanielaFacefit />} />
      </Routes>
    </Router>
  );
}

export default App;
