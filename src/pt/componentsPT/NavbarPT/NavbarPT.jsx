import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.jpeg";
import "./NavbarPT.css";

const NavbarPT = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <Link to="/pt" className="logo">
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
          <Link to="/pt" onClick={closeMenu}>
            Inicio
          </Link>
          <Link to="/pt/sobre-mim" onClick={closeMenu}>
            Sobre mim
          </Link>
          <Link to="/pt/metodo" onClick={closeMenu}>
            Método
          </Link>
          <Link to="/pt/teste-de-nivel" onClick={closeMenu}>
            Teste seu Nível
          </Link>

          <Link to="/pt/precos" onClick={closeMenu}>
            Cursos e Preços
          </Link>
          <Link to="/pt/contato" onClick={closeMenu}>
            Contato
          </Link>
        </div>

        <div className="language-dropdown">
          <button className="language-btn">🇧🇷 PT ▾</button>

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

export default NavbarPT;
