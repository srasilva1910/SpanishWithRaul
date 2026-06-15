import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavbarES.css";

const NavbarES = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <h1>Spanish With Raul</h1>

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
          <Link to="/es" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/es/about" onClick={closeMenu}>
            About Me
          </Link>
          <Link to="/es/method" onClick={closeMenu}>
            Method
          </Link>
          <Link to="/es/pricing" onClick={closeMenu}>
            Courses & Pricing
          </Link>
          <Link to="/es/contact" onClick={closeMenu}>
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

export default NavbarES;
