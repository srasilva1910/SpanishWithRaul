import { Link } from "react-router-dom";
import "./CTAES.css";

const CTAES = () => {
  return (
    <section className="cta">
      <Link to="/contact" className="cta-button">
        Book a Free Trial Lesson
      </Link>{" "}
    </section>
  );
};

export default CTAES;
