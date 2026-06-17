import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import NavbarPT from "../../componentsPT/NavbarPT/NavbarPT.jsx";
import FooterPT from "../../componentsPT/FooterPT/FooterPT.jsx";
import raul from "../../../assets/images/raulramirez.jpeg";
import "./AboutPT.css";

const AboutPT = () => {
  return (
    <>
      <Helmet>
        <title>
          Sobre Raúl Ramírez | Professor de Espanhol com Doutorado pela UNAM
        </title>

        <meta
          name="description"
          content="Conheça Raúl Ramírez, professor de espanhol com doutorado pela UNAM e mais de vinte anos de experiência em ensino, literatura, comunicação e redação acadêmica."
        />

        <link rel="canonical" href="https://spanishwithraul.com/pt/sobre-mim" />

        <meta
          property="og:title"
          content="Sobre Raúl Ramírez | Spanish With Raul"
        />

        <meta
          property="og:description"
          content="Professor de espanhol com doutorado pela UNAM e mais de vinte anos de experiência no ensino universitário."
        />

        <meta
          property="og:url"
          content="https://spanishwithraul.com/pt/sobre-mim"
        />
      </Helmet>
      <NavbarPT />

      <main className="about">
        <section className="about-intro">
          <div className="about-image">
            <img
              src={raul}
              alt="Raul Ramirez, Profesor de Español con Doctorado por la UNAM"
            />
          </div>

          <div className="about-content">
            <h1>Sobre mim</h1>
            <div className="about-divider"></div>
            <p>
              Olá, sou Raúl Ramírez, professor de espanhol da Cidade do México e
              doutor em Língua e Literatura Hispânicas pela Universidade
              Nacional Autônoma do México (UNAM).{" "}
            </p>
            <p>
              Há mais de duas décadas, leciono língua, literatura, comunicação e
              redação acadêmica em universidades do México e do Brasil,
              incluindo a Universidade de São Paulo, uma das instituições de
              ensino superior mais prestigiadas da América Latina.
            </p>
            <p>
              Meu trabalho acadêmico tem se concentrado no estudo da língua, da
              literatura, da retórica e da comunicação. Ao longo dos anos, tenho
              me interessado cada vez mais por uma questão que também está no
              centro da aprendizagem de idiomas: como as pessoas compreendem,
              interpretam e expressam ideias com clareza.
            </p>
            <p>
              Ensinar espanhol me permite reunir todos esses interesses. Gosto
              de ajudar meus alunos não apenas a se comunicarem em espanhol, mas
              também a compreender como a língua funciona e a desenvolver a
              confiança necessária para utilizá-la de forma eficaz.
            </p>
            <p>
              Atualmente, trabalho principalmente com profissionais e estudantes
              universitários que buscam uma abordagem estruturada, reflexiva e
              personalizada para aprender espanhol.
            </p>
            <Link to="/pt/contato" className="cta-button">
              Agende uma aula experimental gratuita{" "}
            </Link>{" "}
          </div>
        </section>
      </main>

      <FooterPT />
    </>
  );
};

export default AboutPT;
