import { FaCheck } from "react-icons/fa";
import "./BenefitsPT.css";

const BenefitsPT = () => {
  return (
    <section className="benefits">
      <h2>Cuando estudias conmigo, tendrás:</h2>

      <div className="benefits-list">
        <div className="benefit-item">
          <div className="benefit-icon">
            <FaCheck />
          </div>
          <p>Formación estructurada de nivel universitario</p>
        </div>

        <div className="benefit-item">
          <div className="benefit-icon">
            <FaCheck />
          </div>
          <p>Clases adaptadas a tus objetivos</p>
        </div>

        <div className="benefit-item">
          <div className="benefit-icon">
            <FaCheck />
          </div>
          <p>Evaluaciones periódicas y retroalimentación</p>
        </div>

        <div className="benefit-item">
          <div className="benefit-icon">
            <FaCheck />
          </div>
          <p>Todos los materiales incluidos</p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsPT;
