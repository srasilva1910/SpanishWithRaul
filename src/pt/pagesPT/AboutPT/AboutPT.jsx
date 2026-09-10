import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import NavbarPT from "../../componentsPT/NavbarPT/NavbarPT.jsx";
import FooterPT from "../../componentsPT/FooterPT/FooterPT.jsx";
import raul from "../../../assets/images/raulramirez.jpeg";
import "./AboutPT.css";

const AboutPT = () => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "pt-BR" }}>
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
              Nacional Autônoma do México (UNAM). Há mais de vinte anos, ensino
              língua espanhola, literatura, comunicação e escrita acadêmica em
              universidades do México e do Brasil, entre elas a Universidade de
              São Paulo, uma das principais universidades da América
              Latina.{" "}
            </p>
            <p>
              Minha experiência em programas universitários me permitiu ensinar
              a partir de uma tradição acadêmica construída ao longo de décadas
              de pesquisa, colaboração e experiência em sala de aula. Essa
              abordagem oferece um caminho claro e progressivo para o
              desenvolvimento de sólidas habilidades de comunicação, desde as
              interações do dia a dia até contextos acadêmicos e profissionais.
            </p>
            <p>
              Hoje, acompanho pessoas que precisam do espanhol para alcançar
              objetivos pessoais, acadêmicos ou profissionais importantes e que
              buscam o tipo de ensino estruturado e de alta qualidade
              tradicionalmente encontrado em universidades e institutos de
              idiomas, mas em um formato on-line flexível e personalizado.
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
