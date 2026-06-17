import { Link } from "react-router-dom";
import "./CTAPT.css";

const CTAPT = () => {
  return (
    <section className="cta">
      <Link to="/pt/contato" className="cta-button">
        Agende uma aula experimental gratuita{" "}
      </Link>{" "}
    </section>
  );
};

export default CTAPT;
