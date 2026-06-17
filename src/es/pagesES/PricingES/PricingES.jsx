import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import NavbarES from "../../componentsES/NavbarES/NavbarES.jsx";
import FooterES from "../../componentsES/FooterES/FooterES.jsx";
import pricing from "../../../assets/images/pricingES.jpeg";
import "./PricingES.css";

const PricingES = () => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "es" }}>
        <title>Cursos y Precios | Spanish With Raul</title>

        <meta
          name="description"
          content="Descubre los cursos de español, paquetes de clases y clase de prueba gratuita con Raúl Ramírez. Aprendizaje estructurado, materiales incluidos y seguimiento personalizado."
        />

        <link rel="canonical" href="https://spanishwithraul.com/es/precios" />

        <meta
          property="og:title"
          content="Cursos y Precios | Spanish With Raul"
        />

        <meta
          property="og:description"
          content="Cursos de español estructurados, materiales incluidos y clase de prueba gratuita. Aprende con un profesor de español con doctorado por la UNAM."
        />

        <meta
          property="og:url"
          content="https://spanishwithraul.com/es/precios"
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
      <NavbarES />

      <main className="pricing-page">
        <section className="pricing-intro">
          <h1>Cursos y Precios</h1>

          <div className="pricing-divider"></div>

          <p className="pricing-subtitle">
            Estructura clara. Clases personalizadas. Progreso real.{" "}
          </p>

          <div className="pricing-includes">
            <p>Todas las clases incluyen:</p>
            <div className="pricing-list">
              <div className="pricing-item">
                <div className="benefit-icon">
                  <FaCheck />
                </div>
                <p>Clases estructuradas basadas en los niveles del MCER</p>
              </div>

              <div className="pricing-item">
                <div className="benefit-icon">
                  <FaCheck />
                </div>
                <p>Plan de aprendizaje personalizado</p>
              </div>

              <div className="pricing-item">
                <div className="benefit-icon">
                  <FaCheck />
                </div>
                <p>Libros digitales y materiales de estudio</p>
              </div>

              <div className="pricing-item">
                <div className="benefit-icon">
                  <FaCheck />
                </div>
                <p>Evaluación de nivel</p>
              </div>

              <div className="pricing-item">
                <div className="benefit-icon">
                  <FaCheck />
                </div>
                <p>Seguimiento del progreso y retroalimentación</p>
              </div>
            </div>{" "}
          </div>
        </section>

        <section className="courses-image-section">
          <h2>Cursos</h2>

          <img src={pricing} alt="Spanish course packages and pricing" />
        </section>

        <section className="packages-section">
          <h2>¿Por qué elegir un paquete?</h2>

          <p>
            Aprender español requiere constancia. <br />
            Los paquetes te ayudan a:{" "}
          </p>

          <div className="pricing-list">
            <div className="pricing-item">
              <div className="benefit-icon">
                <FaCheck />
              </div>
              <p>Crear una rutina de aprendizaje regular</p>
            </div>

            <div className="pricing-item">
              <div className="benefit-icon">
                <FaCheck />
              </div>
              <p>Seguir un plan estructurado</p>
            </div>

            <div className="pricing-item">
              <div className="benefit-icon">
                <FaCheck />
              </div>
              <p>Ver un progreso real a lo largo del tiempo</p>
            </div>
          </div>
        </section>

        <section className="trial-section">
          <h2>Clase de prueba gratuita</h2>
          <p>
            Puedes comenzar con una clase de prueba gratuita. <br />
            Durante esta sesión:{" "}
          </p>
          <div className="pricing-list">
            <div className="pricing-item">
              <div className="benefit-icon">
                <FaCheck />
              </div>
              <p>Evalúo tu nivel</p>
            </div>

            <div className="pricing-item">
              <div className="benefit-icon">
                <FaCheck />
              </div>
              <p>Conozco tus objetivos</p>
            </div>

            <div className="pricing-item">
              <div className="benefit-icon">
                <FaCheck />
              </div>
              <p>Te explico tu plan de aprendizaje</p>
            </div>
          </div>
          <p className="trial-note">
            Esto te permite comprender cómo funcionan las clases antes de tomar
            una decisión.{" "}
          </p>
          <Link to="/es/contacto" className="cta-button">
            Reserva una clase de prueba gratuita
          </Link>{" "}
        </section>
      </main>

      <FooterES />
    </>
  );
};

export default PricingES;
