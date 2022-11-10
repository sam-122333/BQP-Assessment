import logo from "./logo.png";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <img src={logo} alt="" />
          </li>
          <li className="liClass">
            <a href="/">Home</a>
          </li>
          <li className="liClass">
            <a href="/">About</a>
          </li>
          <li className="liClass">
            <a href="/">features</a>
          </li>
          <li className="liClass">
            <a href="/">fashion</a>
          </li>
          <li className="liClass">
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
