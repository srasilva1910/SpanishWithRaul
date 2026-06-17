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
              Autonomous University of Mexico (UNAM).
            </p>
            <p>
              For more than two decades, I have taught language, literature,
              communication, and academic writing at universities in Mexico and
              Brazil, including the University of São Paulo, one of the leading
              universities in Latin America.
            </p>
            <p>
              My academic work has focused on language, literature, rhetoric,
              and communication. Throughout the years, I have become
              increasingly interested in a question that also lies at the heart
              of language learning: how people understand, interpret, and
              express ideas clearly.
            </p>
            <p>
              Teaching Spanish allows me to bring together these interests. I
              enjoy helping students not only communicate in Spanish, but also
              understand how the language works and develop confidence in using
              it effectively.
            </p>
            <p>
              Today, I work primarily with professionals and university students
              who are looking for a structured, thoughtful, and personalized
              approach to learning Spanish.
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
