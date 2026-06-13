import { Link } from "react-router-dom";
import "./Hero.css";
import raul from "../../assets/images/raulramirez.jpg";

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

        <Link to="/contact" className="cta-button">
          Book a Free Trial Lesson
        </Link>
      </div>
    </section>
  );
};

export default Hero;
