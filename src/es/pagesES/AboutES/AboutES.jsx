import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import NavbarES from "../../componentsES/NavbarES/NavbarES.jsx";
import FooterES from "../../componentsES/FooterES/FooterES.jsx";
import raul from "../../../assets/images/raulramirez.jpeg";
import "./AboutES.css";

const AboutES = () => {
  return (
    <>
      <Helmet>
        <title>
          Sobre Raúl Ramírez | Profesor de Español con Doctorado por la UNAM
        </title>
        <meta
          name="description"
          content="Conoce a Raúl Ramírez, profesor de español con doctorado por la UNAM y más de veinte años de experiencia en enseñanza, literatura y comunicación."
        />
        <link rel="canonical" href="https://spanishwithraul.com/es/sobre-mi" />
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
              Hola, soy Raúl Ramírez, profesor de español de la Ciudad de México
              y doctor en Lengua y Literatura Hispánicas por la Universidad
              Nacional Autónoma de México (UNAM).{" "}
            </p>
            <p>
              Durante más de dos décadas he impartido cursos de lengua,
              literatura, comunicación y redacción académica en universidades de
              México y Brasil, incluyendo la Universidad de São Paulo, una de
              las instituciones de educación superior más prestigiosas de
              América Latina.
            </p>
            <p>
              Mi trabajo académico se ha centrado en el estudio de la lengua, la
              literatura, la retórica y la comunicación. Con el paso de los
              años, me ha interesado cada vez más una pregunta que también se
              encuentra en el centro del aprendizaje de idiomas: cómo las
              personas comprenden, interpretan y expresan ideas con claridad.
            </p>
            <p>
              La enseñanza del español me permite integrar todos estos
              intereses. Disfruto ayudando a mis estudiantes no solo a
              comunicarse en español, sino también a comprender cómo funciona el
              idioma y a desarrollar la confianza necesaria para utilizarlo de
              manera efectiva.
            </p>
            <p>
              Actualmente trabajo principalmente con profesionales y estudiantes
              universitarios que buscan un enfoque estructurado, reflexivo y
              personalizado para aprender español.
            </p>
            <Link to="/contact" className="cta-button">
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
