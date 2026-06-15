import { Link } from "react-router-dom";
import "./HeroES.css";
import raul from "../../../assets/images/raulramirez.jpeg";

const HeroES = () => {
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
          La estructura de un curso universitario.
          <br />
          La atención de un profesor particular.
        </h1>

        <div className="hero-divider"></div>

        <p>
          Basado en el Marco Común Europeo de Referencia para las Lenguas (MCER)
          y en los programas académicos de la Universidad Nacional Autónoma de
          México (UNAM).
        </p>
        <p>
          Para profesionales y estudiantes universitarios de todos los niveles,
          desde principiante hasta avanzado (A1 a C2). Profesor de español con
          doctorado por la UNAM.
        </p>

        <Link to="/contact" className="cta-button">
          Reserva una clase de prueba gratuita{" "}
        </Link>
      </div>
    </section>
  );
};

export default HeroES;
