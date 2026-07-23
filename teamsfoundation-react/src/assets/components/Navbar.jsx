import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h2>T.E.A.M.S.</h2>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <a href="#participants">Participants</a>
          </li>

          <li>
            <a href="#impact">Impact</a>
          </li>

          <li>
            <a href="#mentor">Mentor</a>
          </li>

          <li>
            <a href="#testimonials">Testimonials</a>
          </li>

          <li>
            <Link to="/register" className="join-btn">
              Join
            </Link>
          </li>
        </ul>

        <div className="menu-btn">
          ☰
        </div>
      </nav>
    </header>
  );
}

export default Navbar;