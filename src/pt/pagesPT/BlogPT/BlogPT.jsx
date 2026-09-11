import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogPostsPT } from "../../../data/blogPostsPT.js";

import NavbarPT from "../../componentsPT/NavbarPT/NavbarPT.jsx";
import FooterPT from "../../componentsPT/FooterPT/FooterPT.jsx";

import "./BlogPT.css";

const categories = [
  {
    id: "escutei-no-mexico",
    title: "Escutei no Mexico",
    description:
      "Expressões, palavras e linguagem do dia a dia que você provavelmente ouvirá no México.",
  },
  {
    id: "minuto-literario",
    title: "Minuto Literario",
    description:
      "Breves reflexões sobre literatura em espanhol e cultura literária.",
  },
  {
    id: "literatura-en-voz-alta",
    title: "Literatura en Voz Alta",
    description:
      "Ouça literatura em espanhol e descubra obras da tradição literária hispânica.",
  },
];

const BlogPT = () => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "pt-br" }}>
        <title>Blog | Spanish With Raúl</title>
        <meta
          name="description"
          content="Read about Mexican Spanish, literature, culture, and Spanish language learning with Spanish With Raúl."
        />
      </Helmet>

      <NavbarPT />

      <main className="blog">
        <section className="blog-intro">
          <h1>Blog</h1>

          <div className="blog-divider"></div>

          <p>
            Artigos sobre o espanhol do México, literatura, cultura e dicas
            práticas para ajudar você a aprender espanhol com mais confiança.
          </p>
        </section>

        <div className="blog-categories">
          {categories.map((category) => {
            const posts = blogPostsPT
              .filter((post) => post.seriesType === category.id)
              .slice(-3)
              .reverse();

            return (
              <section className="blog-category-section" key={category.id}>
                <div className="category-header">
                  <div>
                    <span className="category-label">Series</span>

                    <h2>{category.title}</h2>

                    <p>{category.description}</p>
                  </div>

                  <Link
                    to={`/pt/blog/series/${category.id}`}
                    className="category-link"
                  >
                    Ver todos
                  </Link>
                </div>

                <div className="blog-preview-grid">
                  {posts.map((post) => (
                    <article className="blog-card" key={post.slug}>
                      <span className="blog-card-number">
                        {String(
                          blogPostsPT.findIndex(
                            (item) => item.slug === post.slug,
                          ) + 1,
                        ).padStart(2, "0")}
                      </span>

                      <div className="blog-card-content">
                        <h3>{post.title}</h3>

                        <p>{post.introduction}</p>

                        <Link
                          to={`/pt/blog/${post.slug}`}
                          className="blog-link"
                        >
                          Ler mais
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </main>

      <FooterPT />
    </>
  );
};

export default BlogPT;
