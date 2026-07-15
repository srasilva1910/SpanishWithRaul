import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import raul from "../../../assets/images/raulramirez.jpeg";
import "./About.css";

const About = () => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>About Raul Ramirez | PhD Spanish Professor</title>
        <meta
          name="description"
          content="Learn about Raul Ramirez, a Spanish professor with a PhD from UNAM and more than twenty years of experience teaching language, literature and academic writing."
        />
        <link rel="canonical" href="https://spanishwithraul.com/about" />

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
      <Navbar />

      <main className="about">
        <section className="about-intro">
          <div className="about-image">
            <img
              src={raul}
              alt="Raul Ramirez, Spanish professor with
              a PhD in Hispanic Language and Literature from the National
              Autonomous University of Mexico (UNAM)"
            />
          </div>

          <div className="about-content">
            <h1>About me</h1>
            <div className="about-divider"></div>
            <p>
              Hello, I'm Raúl Ramírez, a Spanish professor from Mexico City with
              a PhD in Hispanic Language and Literature from the National
              Autonomous University of Mexico (UNAM). For more than twenty
              years, I have taught Spanish language, literature, communication,
              and academic writing at universities in Mexico and Brazil,
              including the University of São Paulo, one of Latin America's
              leading universities.
            </p>
            <p>
              Working within university programs has allowed me to teach through
              an academic tradition built on decades of research, collaboration,
              and classroom experience. This approach provides a clear and
              progressive path for developing strong communication skills, from
              everyday interactions to academic and professional contexts.
            </p>
            <p>
              Today, I help people who need Spanish for important personal,
              academic, or professional goals and are looking for the kind of
              structured, high-quality instruction typically found in
              universities and language institutes, but in a flexible,
              personalized online format.
            </p>
            <Link to="/contact" className="cta-button">
              Book a Free Trial Lesson
            </Link>{" "}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
