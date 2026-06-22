import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import "./HeroPT.css";
import raul from "../../../assets/images/raulramirez.jpeg";

const HeroPT = () => {
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
          A estrutura de um curso universitário. <br />A atenção de um professor
          particular.{" "}
        </h1>

        <div className="hero-divider"></div>

        <p>
          Baseado no Quadro Europeu Comum de Referência para Línguas (QECR) e
          nos programas acadêmicos da Universidade Nacional Autônoma do México
          (UNAM).{" "}
        </p>
        <p>
          Para profissionais e estudantes universitários de todos os níveis, do
          iniciante ao avançado (A1 a C2). Professor de espanhol com doutorado
          pela UNAM.
        </p>

        <div className="hero-actions">
          <Link to="/pt/contato" className="cta-button">
            Agende uma aula experimental gratuita{" "}
          </Link>
          <a
            href="https://wa.me/5213313635768"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
            onClick={() => {
              if (window.gtag) {
                window.gtag("event", "whatsapp_click", {
                  event_category: "Lead",
                  event_label: "Hero WhatsApp",
                });
              }
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

export default HeroPT;
