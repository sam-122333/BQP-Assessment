import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

//components
import ListCart from "./Component/ListCart";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ListCart />} />
        <Route exact path="/about" element={<ListCart />} />
        <Route exact path="/features" element={<ListCart />} />
        <Route exact path="/fashion" element={<ListCart />} />
        <Route exact path="/contact" element={<ListCart />} />
      </Routes>
    </Router>
  );
}
export default App;
