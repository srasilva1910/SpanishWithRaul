import { FaCheck } from "react-icons/fa";
import "./BenefitsPT.css";

const BenefitsPT = () => {
  return (
    <section className="benefits">
      <h2>Ao estudar comigo, você terá:</h2>

      <div className="benefits-list">
        <div className="benefit-item">
          <div className="benefit-icon">
            <FaCheck />
          </div>
          <p>Formação estruturada em nível universitário</p>
        </div>

        <div className="benefit-item">
          <div className="benefit-icon">
            <FaCheck />
          </div>
          <p>Aulas adaptadas aos seus objetivos</p>
        </div>

        <div className="benefit-item">
          <div className="benefit-icon">
            <FaCheck />
          </div>
          <p>Avaliações periódicas e feedback contínuo</p>
        </div>

        <div className="benefit-item">
          <div className="benefit-icon">
            <FaCheck />
          </div>
          <p>Todos os materiais incluídos</p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsPT;
