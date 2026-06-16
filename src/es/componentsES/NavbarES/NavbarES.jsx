import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.jpeg";
import "./NavbarES.css";

const NavbarES = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Spanish With Raul" />
      </Link>{" "}
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
            Inicio
          </Link>
          <Link to="/es/sobre-mi" onClick={closeMenu}>
            Sobre mí
          </Link>
          <Link to="/es/metodo" onClick={closeMenu}>
            Método
          </Link>
          <Link to="/es/precios" onClick={closeMenu}>
            Cursos y Precios
          </Link>
          <Link to="/es/contacto" onClick={closeMenu}>
            Contacto
          </Link>
        </div>

        <div className="language-dropdown">
          <button className="language-btn">🇲🇽 ES ▾</button>

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
