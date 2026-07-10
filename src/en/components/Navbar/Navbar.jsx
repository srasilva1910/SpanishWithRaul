import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.jpeg";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Spanish With Raul" />
      </Link>

      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
        <div className="links">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" onClick={closeMenu}>
            About Me
          </Link>
          <Link to="/method" onClick={closeMenu}>
            Method
          </Link>
          <Link to="/level-test" onClick={closeMenu}>
            Check Your Level{" "}
          </Link>
          <Link to="/pricing" onClick={closeMenu}>
            Courses & Pricing
          </Link>
          <Link to="/blog" onClick={closeMenu}>
            Blog
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </div>

        <div className="language-dropdown">
          <button className="language-btn">🇺🇸 EN ▾</button>

          <div className="language-menu">
            <Link to="/">🇺🇸 EN</Link>
            <Link to="/es">🇲🇽 ES</Link>
            <Link to="/pt">🇧🇷 PT</Link>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
