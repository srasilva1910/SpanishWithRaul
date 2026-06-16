import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaUniversity, FaUserGraduate, FaBookOpen } from "react-icons/fa";
import NavbarES from "../../componentsES/NavbarES/NavbarES.jsx";
import FooterES from "../../componentsES/FooterES/FooterES.jsx";
import "./MethodES.css";

const MethodES = () => {
  return (
    <>
      <Helmet>
        <title>Método de Enseñanza del Español | Spanish With Raul</title>
        <meta
          name="description"
          content="Aprende español con un método estructurado basado en los niveles MCER (A1–C2) y en los programas académicos de la UNAM. Clases personalizadas, materiales incluidos y clase de prueba gratuita."
        />
        <link rel="canonical" href="https://spanishwithraul.com/es/metodo" />
      </Helmet>
      <NavbarES />

      <main className="method">
        <section className="method-intro">
          <h1>Método</h1>

          <div className="method-divider"></div>

          <p>
            Mis cursos de español combinan la estructura de un programa
            universitario de idiomas con la flexibilidad de la enseñanza
            personalizada.{" "}
          </p>
        </section>

        <section className="method-sections">
          <article className="method-block">
            <div className="method-icon">
              <FaUniversity />
            </div>

            <div>
              <h2>Aprendizaje estructurado</h2>

              <p>
                Cada estudiante sigue una ruta de aprendizaje clara basada en
                los niveles del Marco Común Europeo de Referencia para las
                Lenguas (MCER) (A1–C2).
              </p>

              <p>
                Mis cursos y materiales se basan en los programas académicos de
                español de la Universidad Nacional Autónoma de México (UNAM), lo
                que proporciona una base estructurada y académicamente sólida
                para tu aprendizaje.
              </p>

              <p>
                Antes de comenzar, evalúo tu nivel y diseño un plan de
                aprendizaje adaptado a tus necesidades. A lo largo del curso,
                supervisamos tu progreso y utilizamos retroalimentación
                periódica para ayudarte a avanzar con confianza de un nivel al
                siguiente.{" "}
              </p>
            </div>
          </article>

          <article className="method-block">
            <div className="method-icon">
              <FaUserGraduate />
            </div>

            <div>
              <h2>Enseñanza personalizada</h2>

              <p>
                Aunque la ruta de aprendizaje es estructurada, cada curso se
                adapta a las necesidades individuales de cada estudiante.
              </p>

              <p>
                Las clases pueden orientarse a la comunicación profesional, el
                español académico, la preparación para el examen DELE, el
                español de herencia, el enriquecimiento cultural, los viajes o
                cualquier combinación de estas áreas, según tus objetivos y
                necesidades.{" "}
              </p>
            </div>
          </article>

          <article className="method-block">
            <div className="method-icon">
              <FaBookOpen />
            </div>

            <div>
              <h2>Materiales y clase de prueba</h2>

              <p>
                Todos los estudiantes reciben libros digitales y materiales de
                estudio sin costo adicional.
              </p>

              <p>
                Puedes comenzar con una clase de prueba gratuita, durante la
                cual evaluaré tu nivel actual, conversaremos sobre tus objetivos
                y te explicaré el plan de aprendizaje que mejor se adapte a tus
                necesidades.
              </p>
            </div>
          </article>
        </section>

        <section className="method-cta">
          <Link to="/contact" className="cta-button">
            Reserva una clase de prueba gratuita{" "}
          </Link>{" "}
        </section>
      </main>

      <FooterES />
    </>
  );
};

export default MethodES;
