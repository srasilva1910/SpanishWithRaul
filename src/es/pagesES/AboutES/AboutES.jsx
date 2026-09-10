import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import NavbarES from "../../componentsES/NavbarES/NavbarES.jsx";
import FooterES from "../../componentsES/FooterES/FooterES.jsx";
import raul from "../../../assets/images/raulramirez.jpeg";
import "./AboutES.css";

const AboutES = () => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "es" }}>
        <title>
          Sobre Raúl Ramírez | Profesor de Español con Doctorado por la UNAM
        </title>

        <meta
          name="description"
          content="Conoce a Raúl Ramírez, profesor de español con doctorado por la UNAM y más de veinte años de experiencia en enseñanza, literatura y comunicación."
        />

        <link rel="canonical" href="https://spanishwithraul.com/es/sobre-mi" />

        <meta
          property="og:title"
          content="Sobre Raúl Ramírez | Spanish With Raul"
        />

        <meta
          property="og:description"
          content="Profesor de español con doctorado por la UNAM y más de veinte años de experiencia en enseñanza universitaria."
        />

        <meta
          property="og:url"
          content="https://spanishwithraul.com/es/sobre-mi"
        />

        <link
          rel="alternate"
          hrefLang="en"
          href="https://spanishwithraul.com/about"
        />

        <link
          rel="alternate"
          hrefLang="es"
          href="https://spanishwithraul.com/es/sobre-mi"
        />

        <link
          rel="alternate"
          hrefLang="pt-BR"
          href="https://spanishwithraul.com/pt/sobre-mim"
        />

        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://spanishwithraul.com/about"
        />
      </Helmet>
      <NavbarES />

      <main className="about">
        <section className="about-intro">
          <div className="about-image">
            <img
              src={raul}
              alt="Raul Ramirez, Profesor de Español con Doctorado por la UNAM"
            />
          </div>

          <div className="about-content">
            <h1>Sobre mí</h1>
            <div className="about-divider"></div>
            <p>
              Hola, soy Raúl Ramírez, profesor de español originario de Ciudad
              de México y doctor en Lengua y Literatura Hispánicas por la
              Universidad Nacional Autónoma de México (UNAM). Durante más de
              veinte años, he enseñado lengua española, literatura, comunicación
              y escritura académica en universidades de México y Brasil, entre
              ellas la Universidad de São Paulo, una de las principales
              universidades de América Latina.{" "}
            </p>
            <p>
              Mi experiencia en programas universitarios me ha permitido enseñar
              a partir de una tradición académica respaldada por décadas de
              investigación, colaboración y experiencia en el aula. Este enfoque
              ofrece un camino claro y progresivo para desarrollar sólidas
              habilidades de comunicación, desde las interacciones cotidianas
              hasta los contextos académicos y profesionales.
            </p>
            <p>
              Hoy acompaño a personas que necesitan el español para alcanzar
              objetivos personales, académicos o profesionales importantes y que
              buscan el tipo de enseñanza estructurada y de alta calidad que
              tradicionalmente se encuentra en universidades e institutos de
              idiomas, pero en un formato en línea flexible y personalizado.
            </p>
            <Link to="/es/contacto" className="cta-button">
              Reserva una clase de prueba gratuita{" "}
            </Link>{" "}
          </div>
        </section>
      </main>

      <FooterES />
    </>
  );
};

export default AboutES;
