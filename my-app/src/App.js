import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import Snap from "./Components/Snap";
import Home from "./Components/Home";
import Noughts from "./Components/Noughts";

function App() {
  return (
    <div className="App">
      <Link to="">Home</Link>
      <Link to="/snap">Snap</Link>
      <Link to="/noughts">Noughts</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/snap" element={<Snap />} />
        <Route path="/noughts" element={<Noughts />} />
      </Routes>
    </div>
  );
}

export default App;
