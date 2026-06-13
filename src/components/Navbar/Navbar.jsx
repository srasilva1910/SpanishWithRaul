import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Spanish with Raul</h1>

      <div className="navbar-right">
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/method">Method</Link>
          <Link to="/pricing">Courses & Pricing</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="language-dropdown">
          <button className="language-btn">
            🇺🇸 EN <span>▾</span>
          </button>

          <div className="language-menu">
            <button>🇺🇸 EN</button>
            <button>🇲🇽 ES</button>
            <button>🇧🇷 PT</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
