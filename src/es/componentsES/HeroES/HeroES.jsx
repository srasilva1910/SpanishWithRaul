import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
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
          Programa Universitario <br /> con Tutoría Personal
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

        <div className="hero-actions">
          <Link to="/es/contacto" className="cta-button">
            Reserva una clase de prueba gratuita{" "}
          </Link>
          <a
            href="https://wa.me/5213313635768"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
            onClick={() => {
              window.dataLayer = window.dataLayer || [];

              window.dataLayer.push({
                event: "whatsapp_click",
                location: "hero",
              });
            }}
          >
            <FaWhatsapp />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroES;
