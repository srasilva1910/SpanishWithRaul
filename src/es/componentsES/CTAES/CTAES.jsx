import { Link } from "react-router-dom";
import "./CTAES.css";

const CTAES = () => {
  return (
    <section className="cta">
      <Link to="/contact" className="cta-button">
        Reserva una clase de prueba gratuita{" "}
      </Link>{" "}
    </section>
  );
};

export default CTAES;
