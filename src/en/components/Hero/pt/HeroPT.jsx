import { Link } from "react-router-dom";
import "./HeroPT.css";
import raul from "../../../../assets/images/raulramirez.jpeg";

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
          (UNAM).
        </p>
        <p>
          Para profissionais e estudantes universitários de todos os níveis, do
          iniciante ao avançado (A1 a C2). Professor de espanhol com doutorado
          pela UNAM.
        </p>

        <Link to="/contact" className="cta-button">
          Agende uma aula experimental gratuita{" "}
        </Link>
      </div>
    </section>
  );
};

export default HeroPT;
