import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-divider"></div>

      <div className="footer-content">
        <h2>Spanish With Raul</h2>

        <p>
          University-level Spanish lessons with the attention of a private
          tutor.
        </p>

        <div className="footer-socials">
          <a href="#">
            <FaInstagram />
          </a>

          <a href="#">
            <FaFacebook />
          </a>

          <a href="#">
            <FaYoutube />
          </a>
        </div>
      </div>

      <p className="footer-copy">
        © 2026 Spanish With Raul · PhD in Hispanic Language and Literature
        (UNAM)
      </p>
    </footer>
  );
};

export default Footer;
