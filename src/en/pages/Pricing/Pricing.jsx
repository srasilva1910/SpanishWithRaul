import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import pricing from "../../../assets/images/pricing.jpeg";
import "./Pricing.css";

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Spanish Courses and Pricing | Spanish With Raul</title>
        <meta
          name="description"
          content="Explore online Spanish courses, lesson packages and a free trial lesson with Raul Ramirez, a PhD Spanish professor from UNAM."
        />
        <link rel="canonical" href="https://spanishwithraul.com/pricing" />
      </Helmet>
      <Navbar />

      <main className="pricing-page">
        <section className="pricing-intro">
          <h1>Courses and Pricing</h1>

          <div className="pricing-divider"></div>

          <p className="pricing-subtitle">
            Clear structure. Personalized lessons. Real progress.
          </p>

          <div className="pricing-includes">
            <p>All lessons include:</p>
            <div className="pricing-list">
              <div className="pricing-item">
                <div className="benefit-icon">
                  <FaCheck />
                </div>
                <p>Structured lessons based on CEFR levels</p>
              </div>

              <div className="pricing-item">
                <div className="benefit-icon">
                  <FaCheck />
                </div>
                <p>Personalized learning plan</p>
              </div>

              <div className="pricing-item">
                <div className="benefit-icon">
                  <FaCheck />
                </div>
                <p>Digital textbooks and materials</p>
              </div>

              <div className="pricing-item">
                <div className="benefit-icon">
                  <FaCheck />
                </div>
                <p>Level assessment</p>
              </div>

              <div className="pricing-item">
                <div className="benefit-icon">
                  <FaCheck />
                </div>
                <p>Progress tracking and feedback</p>
              </div>
            </div>{" "}
          </div>
        </section>

        <section className="courses-image-section">
          <h2>Courses</h2>

          <img src={pricing} alt="Spanish course packages and pricing" />
        </section>

        <section className="packages-section">
          <h2>Why packages?</h2>

          <p>
            Learning Spanish requires consistency.
            <br />
            Packages help you:
          </p>

          <div className="pricing-list">
            <div className="pricing-item">
              <div className="benefit-icon">
                <FaCheck />
              </div>
              <p>Build a regular learning routine</p>
            </div>

            <div className="pricing-item">
              <div className="benefit-icon">
                <FaCheck />
              </div>
              <p>Follow a structured plan</p>
            </div>

            <div className="pricing-item">
              <div className="benefit-icon">
                <FaCheck />
              </div>
              <p>See real progress over time</p>
            </div>
          </div>
        </section>

        <section className="trial-section">
          <h2>Free trial lesson</h2>
          <p>
            You can start with a free trial lesson.
            <br />
            In this session:
          </p>
          <div className="pricing-list">
            <div className="pricing-item">
              <div className="benefit-icon">
                <FaCheck />
              </div>
              <p>I evaluate your level</p>
            </div>

            <div className="pricing-item">
              <div className="benefit-icon">
                <FaCheck />
              </div>
              <p>I understand your goals</p>
            </div>

            <div className="pricing-item">
              <div className="benefit-icon">
                <FaCheck />
              </div>
              <p>I explain your learning plan</p>
            </div>
          </div>
          <p className="trial-note">
            This helps you see how the lessons work before committing.
          </p>
          <Link to="/contact" className="cta-button">
            Book a Free Trial Lesson
          </Link>{" "}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Pricing;
