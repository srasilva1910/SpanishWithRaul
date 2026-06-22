import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { FaChartLine, FaUserCheck, FaLaptop } from "react-icons/fa";
import NavbarPT from "../../componentsPT/NavbarPT/NavbarPT.jsx";
import FooterPT from "../../componentsPT/FooterPT/FooterPT.jsx";
import "./LevelTestPT.css";

const LevelTestPT = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "level_test_view",
    });
  }, []);

  return (
    <>
      <Helmet htmlAttributes={{ lang: "pt-BR" }}>
        <title>
          Teste de Nível de Espanhol Gratuito (A1–C2) | Spanish With Raúl
        </title>

        <meta
          name="description"
          content="Faça um teste de nível de espanhol gratuito e descubra seu nível de acordo com o QECR, de A1 a C2. Receba orientação personalizada de um professor de espanhol com formação universitária."
        />

        <link
          rel="canonical"
          href="https://spanishwithraul.com/pt/teste-de-nivel"
        />

        <link
          rel="alternate"
          hrefLang="en"
          href="https://spanishwithraul.com/spanish-level-test"
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
          href="https://spanishwithraul.com/spanish-level-test"
        />
      </Helmet>
      <NavbarPT />

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

      <FooterPT />
    </>
  );
};

export default LevelTestPT;
