import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { FaChartLine, FaUserCheck, FaLaptop } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./LevelTest.css";

const LevelTest = () => {
  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "level_test_view", {
        event_category: "Engagement",
        event_label: "Spanish Level Test",
      });
    }
  }, []);

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
