import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaUniversity, FaUserGraduate, FaBookOpen } from "react-icons/fa";
import NavbarPT from "../../componentsPT/NavbarPT/NavbarPT.jsx";
import FooterPT from "../../componentsPT/FooterPT/FooterPT.jsx";
import "./MethodPT.css";

const MethodPT = () => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "pt-BR" }}>
        <title>Método de Ensino de Espanhol | Spanish With Raul</title>

        <meta
          name="description"
          content="Aprenda espanhol com um método estruturado baseado nos níveis do QECR (A1–C2) e nos programas acadêmicos da UNAM. Aulas personalizadas, materiais incluídos e aula experimental gratuita."
        />

        <link rel="canonical" href="https://spanishwithraul.com/pt/metodo" />

        <meta
          property="og:title"
          content="Método de Ensino de Espanhol | Spanish With Raul"
        />

        <meta
          property="og:description"
          content="Aprendizagem estruturada, ensino personalizado e materiais incluídos. Baseado nos programas acadêmicos da UNAM e nos níveis do QECR."
        />

        <meta
          property="og:url"
          content="https://spanishwithraul.com/pt/metodo"
        />

        <link
          rel="alternate"
          hrefLang="en"
          href="https://spanishwithraul.com/method"
        />

        <link
          rel="alternate"
          hrefLang="es"
          href="https://spanishwithraul.com/es/metodo"
        />

        <link
          rel="alternate"
          hrefLang="pt-BR"
          href="https://spanishwithraul.com/pt/metodo"
        />

        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://spanishwithraul.com/method"
        />
      </Helmet>{" "}
      <NavbarPT />
      <main className="method">
        <section className="method-intro">
          <h1>Método</h1>

          <div className="method-divider"></div>

          <p>
            Meus cursos de espanhol combinam a estrutura de um programa
            universitário de idiomas com a flexibilidade do ensino
            personalizado.{" "}
          </p>
        </section>

        <section className="method-sections">
          <article className="method-block">
            <div className="method-icon">
              <FaUniversity />
            </div>

            <div>
              <h2>Aprendizagem estruturada</h2>

              <p>
                Cada aluno segue uma trajetória de aprendizagem clara, baseada
                nos níveis do Quadro Europeu Comum de Referência para Línguas
                (QECR) (A1–C2).
              </p>

              <p>
                Meus cursos e materiais são baseados nos programas acadêmicos de
                espanhol da Universidade Nacional Autônoma do México (UNAM),
                proporcionando uma base estruturada e academicamente sólida para
                o seu aprendizado.
              </p>

              <p>
                Antes de começar, avalio seu nível e elaboro um plano de
                aprendizagem adaptado às suas necessidades. Ao longo do curso,
                acompanhamos seu progresso e utilizamos feedback periódico para
                ajudá-lo a avançar com confiança de um nível para o
                seguinte.{" "}
              </p>
            </div>
          </article>

          <article className="method-block">
            <div className="method-icon">
              <FaUserGraduate />
            </div>

            <div>
              <h2>Ensino personalizado</h2>

              <p>
                Embora a trajetória de aprendizagem seja estruturada, cada curso
                é adaptado às necessidades individuais de cada aluno.
              </p>

              <p>
                As aulas podem ser direcionadas para comunicação profissional,
                espanhol acadêmico, preparação para o exame DELE, espanhol de
                herança, enriquecimento cultural, viagens ou qualquer combinação
                dessas áreas, de acordo com seus objetivos e necessidades.{" "}
              </p>
            </div>
          </article>

          <article className="method-block">
            <div className="method-icon">
              <FaBookOpen />
            </div>

            <div>
              <h2>Materiais e aula experimental</h2>

              <p>
                Todos os alunos recebem livros digitais e materiais de estudo
                sem custo adicional.
              </p>

              <p>
                Você pode começar com uma aula experimental gratuita, durante a
                qual avaliarei seu nível atual, conversaremos sobre seus
                objetivos e explicarei o plano de aprendizagem que melhor se
                adapta às suas necessidades.
              </p>
            </div>
          </article>
        </section>

        <section className="method-cta">
          <Link to="/pt/contato" className="cta-button">
            Agende uma aula experimental gratuita{" "}
          </Link>{" "}
        </section>
      </main>
      <FooterPT />
    </>
  );
};

export default MethodPT;
