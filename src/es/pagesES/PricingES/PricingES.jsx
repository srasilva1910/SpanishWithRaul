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
      <Helmet>
        <title> Cursos y Precios | Spanish With Raul</title>
        <meta
          name="description"
          content="Descubre los cursos de español, paquetes de clases y clase de prueba gratuita con Raúl Ramírez. Aprendizaje estructurado, materiales incluidos y seguimiento personalizado."
        />
        <link rel="canonical" href="https://spanishwithraul.com/es/precios" />
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
          <Link to="/contact" className="cta-button">
            Reserva una clase de prueba gratuita
          </Link>{" "}
        </section>
      </main>

      <FooterES />
    </>
  );
};

export default PricingES;
