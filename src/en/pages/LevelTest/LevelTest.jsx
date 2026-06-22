import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaChartLine, FaUserCheck, FaLaptop } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./LevelTest.css";

const LevelTest = () => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>Free Spanish Level Test (A1–C2) | Spanish With Raúl</title>
        <meta
          name="description"
          content="Take a free Spanish placement test and discover your CEFR level from A1 to C2. Receive personalized guidance from a university-trained Spanish professor."
        />
        <link rel="canonical" href="https://spanishwithraul.com/level-test" />

        <link
          rel="alternate"
          hrefLang="en"
          href="https://spanishwithraul.com/level-test"
        />
        <link
          rel="alternate"
          hrefLang="es"
          href="https://spanishwithraul.com/es/examen-de-nivel"
        />
        <link
          rel="alternate"
          hrefLang="pt-BR"
          href="https://spanishwithraul.com/pt/teste-de-nivel"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://spanishwithraul.com/level-test"
        />
      </Helmet>

      <Navbar />

      <main className="level-test">
        <section className="level-test-intro">
          <h1>Spanish Level Test</h1>

          <div className="level-test-divider"></div>

          <p>
            Discover your Spanish level according to the CEFR scale (A1–C2).
            Complete this free placement test and receive personalized guidance
            before starting your Spanish learning journey.
          </p>
        </section>

        <section className="level-test-sections">
          <article className="level-test-block">
            <div className="level-test-icon">
              <FaChartLine />
            </div>

            <div>
              <h2>Understand Your Current Level</h2>
              <p>
                Find out whether your Spanish corresponds to A1, A2, B1, B2, C1,
                or C2.
              </p>
            </div>
          </article>

          <article className="level-test-block">
            <div className="level-test-icon">
              <FaUserCheck />
            </div>

            <div>
              <h2>Receive Personalized Guidance</h2>
              <p>
                Your answers help identify the best learning path based on your
                current level, goals, and areas for improvement.
              </p>
            </div>
          </article>

          <article className="level-test-block">
            <div className="level-test-icon">
              <FaLaptop />
            </div>

            <div>
              <h2>Free and Online</h2>
              <p>
                Complete the test below from anywhere and take the first step
                toward a structured Spanish course.
              </p>
            </div>
          </article>
        </section>

        <section className="level-test-form">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeRpf3As68jyV7SRxnKS3gncZWpaEqJ8_ucN9lyUysj-Al6ag/viewform?embedded=true"
            title="Spanish Level Test"
            loading="lazy"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
          >
            Loading…
          </iframe>
        </section>

        <section className="level-test-cta">
          <Link to="/contact" className="cta-button">
            Book a Free Trial Lesson
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default LevelTest;
