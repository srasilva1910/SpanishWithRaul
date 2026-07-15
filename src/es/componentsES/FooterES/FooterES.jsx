import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import "./FooterES.css";

const FooterES = () => {
  return (
    <footer className="footer">
      <div className="footer-divider"></div>

      <div className="footer-content">
        <h2>Spanish With Raul</h2>

        <p>Programa Universitario con Tutoría Personal </p>

        <div className="footer-socials">
          <a href="#">
            <FaInstagram />
          </a>

          <a href="https://www.facebook.com/profile.php?id=61584364967010">
            <FaFacebook />
          </a>

          <a href="#">
            <FaYoutube />
          </a>
        </div>
      </div>

      <p className="footer-copy">
        © 2026 · Raul Ramirez · Doctor en Letras Hispanicas por la UNAM
      </p>
    </footer>
  );
};

export default FooterES;
