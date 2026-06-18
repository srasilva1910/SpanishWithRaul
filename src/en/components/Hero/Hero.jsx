import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import "./Hero.css";
import raul from "../../../assets/images/raulramirez.jpeg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img
          src={raul}
          alt="Raul Ramirez, Spanish professor with
              a PhD in Hispanic Language and Literature from the National
              Autonomous University of Mexico (UNAM)"
        />
      </div>

      <div className="hero-content">
        <h1>
          The structure of a university course.
          <br />
          The attention of a private tutor.
        </h1>

        <div className="hero-divider"></div>

        <p>
          Based on the Common European Framework of Reference for Languages
          (CEFR) and on the academic programs of the National Autonomous
          University of Mexico (UNAM).
        </p>
        <p>
          For professionals and university students at all levels, from beginner
          to advanced (A1 to C2). Spanish professor with a PhD from UNAM.
        </p>

        <div className="hero-actions">
          <Link to="/contact" className="cta-button">
            Book a Free Trial Lesson
          </Link>

          <a
            href="https://wa.me/5213313635768"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            <FaWhatsapp />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
