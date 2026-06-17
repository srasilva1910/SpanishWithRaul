import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaUniversity, FaUserGraduate, FaBookOpen } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./Method.css";

const Method = () => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>Spanish Teaching Method | CEFR-Based Learning</title>
        <meta
          name="description"
          content="Discover a structured Spanish learning method based on CEFR levels, UNAM academic programs and personalized one-on-one instruction."
        />
        <link rel="canonical" href="https://spanishwithraul.com/method" />

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
      </Helmet>
      <Navbar />

      <main className="method">
        <section className="method-intro">
          <h1>Method</h1>

          <div className="method-divider"></div>

          <p>
            My Spanish courses combine the structure of a university language
            program with the flexibility of one-on-one instruction.
          </p>
        </section>

        <section className="method-sections">
          <article className="method-block">
            <div className="method-icon">
              <FaUniversity />
            </div>

            <div>
              <h2>Structured Learning</h2>

              <p>
                Every student follows a clear learning path based on the CEFR
                levels (A1–C2).
              </p>

              <p>
                My courses and materials are based on the academic Spanish
                programs of the National Autonomous University of Mexico (UNAM),
                providing a structured and academically solid foundation for
                your learning.
              </p>

              <p>
                Before starting, I assess your level and create a learning plan
                tailored to your needs. Throughout the course, we monitor your
                progress and use regular feedback to help you move confidently
                from one level to the next.
              </p>
            </div>
          </article>

          <article className="method-block">
            <div className="method-icon">
              <FaUserGraduate />
            </div>

            <div>
              <h2>Personalized Instruction</h2>

              <p>
                While the learning path is structured, every course is adapted
                to the individual student.
              </p>

              <p>
                Lessons can be tailored to professional communication, academic
                Spanish, DELE examination preparation, heritage Spanish,
                cultural enrichment, travel, or any combination of these areas,
                depending on your goals and needs.
              </p>
            </div>
          </article>

          <article className="method-block">
            <div className="method-icon">
              <FaBookOpen />
            </div>

            <div>
              <h2>Materials and Trial Lesson</h2>

              <p>
                All students receive digital textbooks and course materials at
                no additional cost.
              </p>

              <p>
                You can begin with a free trial lesson, during which I will
                assess your current level, discuss your goals, and explain the
                learning plan that best fits your needs.
              </p>
            </div>
          </article>
        </section>

        <section className="method-cta">
          <Link to="/contact" className="cta-button">
            Book a Free Trial Lesson
          </Link>{" "}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Method;
