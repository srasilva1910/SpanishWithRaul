import { FaCheck } from "react-icons/fa";
import "./Benefits.css";

const Benefits = () => {
  return (
    <section className="benefits">
      <h2>When you study with me, you will have:</h2>

      <div className="benefits-list">
        <div className="benefit-item">
          <div className="benefit-icon">
            <FaCheck />
          </div>
          <p>Structured university-level training</p>
        </div>

        <div className="benefit-item">
          <div className="benefit-icon">
            <FaCheck />
          </div>
          <p>Lessons tailored to your goals</p>
        </div>

        <div className="benefit-item">
          <div className="benefit-icon">
            <FaCheck />
          </div>
          <p>Regular assessments and feedback</p>
        </div>

        <div className="benefit-item">
          <div className="benefit-icon">
            <FaCheck />
          </div>
          <p>All materials included</p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
