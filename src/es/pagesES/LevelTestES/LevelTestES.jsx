import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaChartLine, FaUserCheck, FaLaptop } from "react-icons/fa";
import NavbarES from "../../componentsES/NavbarES/NavbarES.jsx";
import FooterES from "../../componentsES/FooterES/FooterES.jsx";
import "./LevelTestES.css";

const LevelTestES = () => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "es" }}>
        <title>
          Examen de Nivel de Español Gratis (A1–C2) | Spanish With Raúl
        </title>

        <meta
          name="description"
          content="Haz un examen de nivel de español gratis y descubre tu nivel según el MCER, de A1 a C2. Recibe orientación personalizada de un profesor de español con formación universitaria."
        />

        <link
          rel="canonical"
          href="https://spanishwithraul.com/es/examen-de-nivel"
        />

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
      <NavbarES />

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

      <FooterES />
    </>
  );
};

export default LevelTestES;
