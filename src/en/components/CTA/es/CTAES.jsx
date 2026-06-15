import { Link } from "react-router-dom";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta">
      <Link to="/contact" className="cta-button">
        Book a Free Trial Lesson
      </Link>{" "}
    </section>
  );
};

export default CTA;
