import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import "./FooterPT.css";

const FooterPT = () => {
  return (
    <footer className="footer">
      <div className="footer-divider"></div>

      <div className="footer-content">
        <h2>Spanish With Raul</h2>

        <p>
          A estrutura de um curso universitário.
          <br />A atenção de um professor particular.{" "}
        </p>

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
        © 2026 · Raul Ramirez · Doutor em Letras Hispanicas pela UNAM
      </p>
    </footer>
  );
};

export default FooterPT;
