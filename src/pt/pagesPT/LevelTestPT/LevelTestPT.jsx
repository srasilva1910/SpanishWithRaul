import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaChartLine, FaUserCheck, FaLaptop } from "react-icons/fa";
import NavbarPT from "../../componentsPT/NavbarPT/NavbarPT.jsx";
import FooterPT from "../../componentsPT/FooterPT/FooterPT.jsx";
import "./LevelTestPT.css";

const LevelTestPT = () => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "pt" }}>
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
      <NavbarPT />

      <main className="level-test">
        <section className="level-test-intro">
          <h1>Teste de Nível de Espanhol</h1>

          <div className="level-test-divider"></div>

          <p>
            Descubra seu nível de espanhol de acordo com a escala do QECR
            (A1–C2). Complete este teste de nível gratuito e receba orientação
            personalizada antes de iniciar sua jornada de aprendizagem do
            espanhol.
          </p>
        </section>

        <section className="level-test-sections">
          <article className="level-test-block">
            <div className="level-test-icon">
              <FaChartLine />
            </div>

            <div>
              <h2>Conheça seu nível atual</h2>
              <p>
                Descubra se o seu nível de espanhol corresponde a A1, A2, B1,
                B2, C1 ou C2.
              </p>
            </div>
          </article>

          <article className="level-test-block">
            <div className="level-test-icon">
              <FaUserCheck />
            </div>

            <div>
              <h2>Receba orientação personalizada</h2>
              <p>
                Suas respostas ajudam a identificar o melhor caminho de
                aprendizagem com base no seu nível atual, nos seus objetivos e
                nas áreas em que você pode melhorar.
              </p>
            </div>
          </article>

          <article className="level-test-block">
            <div className="level-test-icon">
              <FaLaptop />
            </div>

            <div>
              <h2>Gratuito e online</h2>
              <p>
                Complete o teste abaixo de qualquer lugar e dê o primeiro passo
                rumo a um curso de espanhol estruturado.
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

      <FooterPT />
    </>
  );
};

export default LevelTestPT;
