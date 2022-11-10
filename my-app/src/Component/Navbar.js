import logo from "./logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <img src={logo} alt="" />
          </li>
          <li className="liClass">
            <Link to="/">Home</Link>
          </li>
          <li className="liClass">
            <Link to="/about">About</Link>
          </li>
          <li className="liClass">
            <Link to="/features">features</Link>
          </li>
          <li className="liClass">
            <Link to="/fashion">fashion</Link>
          </li>
          <li className="liClass">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
