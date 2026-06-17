import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import NavbarPT from "../../componentsPT/NavbarPT/NavbarPT.jsx";
import FooterPT from "../../componentsPT/FooterPT/FooterPT.jsx";
import pricing from "../../../assets/images/pricingPT.jpeg";
import "./PricingPT.css";

const PricingPT = () => {
  return (
    <>
      <Helmet>
        <title>Cursos e Preços | Spanish With Raul</title>

        <meta
          name="description"
          content="Conheça os cursos de espanhol, pacotes de aulas e aula experimental gratuita com Raúl Ramírez. Aprendizagem estruturada, materiais incluídos e acompanhamento personalizado."
        />

        <link
          rel="canonical"
          href="https://spanishwithraul.com/pt/cursos-e-precos"
        />

        <meta
          property="og:title"
          content="Cursos e Preços | Spanish With Raul"
        />

        <meta
          property="og:description"
          content="Cursos de espanhol estruturados, materiais incluídos e aula experimental gratuita. Aprenda com um professor de espanhol com doutorado pela UNAM."
        />

        <meta
          property="og:url"
          content="https://spanishwithraul.com/pt/cursos-e-precos"
        />

        <link
          rel="alternate"
          hrefLang="en"
          href="https://spanishwithraul.com/pricing"
        />

        <link
          rel="alternate"
          hrefLang="es"
          href="https://spanishwithraul.com/es/cursos-y-precios"
        />

        <link
          rel="alternate"
          hrefLang="pt-BR"
          href="https://spanishwithraul.com/pt/cursos-e-precos"
        />

        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://spanishwithraul.com/pricing"
        />
      </Helmet>
      <NavbarPT />

      <main className="pricing-page">
        <section className="pricing-intro">
          <h1>Cursos e Preços</h1>

          <div className="pricing-divider"></div>

          <p className="pricing-subtitle">
            Estrutura clara. Aulas personalizadas. Progresso real.{" "}
          </p>

          <div className="pricing-includes">
            <p>Todas as aulas incluem:</p>
            <div className="pricing-list">
              <div className="pricing-item">
                <div className="benefit-icon">
                  <FaCheck />
                </div>
                <p>Aulas estruturadas com base nos níveis do QECR</p>
              </div>

              <div className="pricing-item">
                <div className="benefit-icon">
                  <FaCheck />
                </div>
                <p>Plano de aprendizagem personalizado</p>
              </div>

              <div className="pricing-item">
                <div className="benefit-icon">
                  <FaCheck />
                </div>
                <p>Livros digitais e materiais de estudo</p>
              </div>

              <div className="pricing-item">
                <div className="benefit-icon">
                  <FaCheck />
                </div>
                <p>Avaliação de nível</p>
              </div>

              <div className="pricing-item">
                <div className="benefit-icon">
                  <FaCheck />
                </div>
                <p>Acompanhamento do progresso e feedback</p>
              </div>
            </div>{" "}
          </div>
        </section>

        <section className="courses-image-section">
          <h2>Cursos</h2>

          <img src={pricing} alt="Pacotes de cursos de espanhol e preços" />
        </section>

        <section className="packages-section">
          <h2>Por que escolher um pacote?</h2>

          <p>
            Aprender espanhol exige consistência. <br />
            Os pacotes ajudam você a:{" "}
          </p>

          <div className="pricing-list">
            <div className="pricing-item">
              <div className="benefit-icon">
                <FaCheck />
              </div>
              <p>Criar uma rotina regular de aprendizagem</p>
            </div>

            <div className="pricing-item">
              <div className="benefit-icon">
                <FaCheck />
              </div>
              <p>Seguir um plano estruturado</p>
            </div>

            <div className="pricing-item">
              <div className="benefit-icon">
                <FaCheck />
              </div>
              <p>Observar um progresso real ao longo do tempo</p>
            </div>
          </div>
        </section>

        <section className="trial-section">
          <h2>Aula experimental gratuita</h2>
          <p>
            Você pode começar com uma aula experimental gratuita.
            <br />
            Durante esta sessão:{" "}
          </p>
          <div className="pricing-list">
            <div className="pricing-item">
              <div className="benefit-icon">
                <FaCheck />
              </div>
              <p>Avalio seu nível</p>
            </div>

            <div className="pricing-item">
              <div className="benefit-icon">
                <FaCheck />
              </div>
              <p>Compreendo seus objetivos</p>
            </div>

            <div className="pricing-item">
              <div className="benefit-icon">
                <FaCheck />
              </div>
              <p>Explico seu plano de aprendizagem</p>
            </div>
          </div>
          <p className="trial-note">
            Isso permite que você entenda como as aulas funcionam antes de tomar
            uma decisão.{" "}
          </p>
          <Link to="/pt/contato" className="cta-button">
            Agende uma aula experimental gratuita{" "}
          </Link>{" "}
        </section>
      </main>

      <FooterPT />
    </>
  );
};

export default PricingPT;
