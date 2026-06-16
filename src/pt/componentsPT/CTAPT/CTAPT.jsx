import { Link } from "react-router-dom";
import "./CTAPT.css";

const CTAPT = () => {
  return (
    <section className="cta">
      <Link to="/pt/contato" className="cta-button">
        Reserva una clase de prueba gratuita{" "}
      </Link>{" "}
    </section>
  );
};

export default CTAPT;
