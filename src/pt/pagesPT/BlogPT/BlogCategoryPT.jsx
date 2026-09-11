import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "../../../data/blogPosts.js";

import NavbarPT from "../../componentsPT/NavbarPT/NavbarPT.jsx";
import FooterPT from "../../componentsPT/FooterPT/FooterPT.jsx";

import "./BlogCategoryPT.css";
import { blogPostsPT } from "../../../data/blogPostsPT.js";

const categories = {
  "escutei-no-mexico": {
    title: "Escutei No Mexico",
    description:
      "Expressões, palavras e linguagem do dia a dia que você provavelmente ouvirá no México.",
  },

  "minuto-literario": {
    title: "Minuto Literario",
    description:
      "Breves reflexões sobre literatura em espanhol e cultura literária.",
  },

  "literatura-en-voz-alta": {
    title: "Literatura en Voz Alta",
    description:
      "Ouça literatura em espanhol e descubra obras da tradição literária hispânica.",
  },
};

const BlogCategoryPT = () => {
  const { seriesType } = useParams();

  const category = categories[seriesType];

  const posts = blogPostsPT
    .filter((post) => post.seriesType === seriesType)
    .reverse();

  if (!category) {
    return (
      <>
        <NavbarPT />

        <main className="bc-not-found">
          <h1>Series not found</h1>

          <Link to="/pt/blog" className="bc-back-link">
            Back to Blog
          </Link>
        </main>

        <FooterPT />
      </>
    );
  }

  return (
    <>
      <Helmet htmlAttributes={{ lang: "pt-br" }}>
        <title>{category.title} | Spanish With Raúl</title>

        <meta name="description" content={category.description} />
      </Helmet>

      <NavbarPT />

      <main className="bc-page">
        <section className="bc-intro">
          <Link to="/pt/blog" className="bc-intro-back">
            ← Back to Blog
          </Link>

          <span className="bc-label">Series</span>

          <h1>{category.title}</h1>

          <div className="bc-divider"></div>

          <p>{category.description}</p>
        </section>

        <section className="bc-posts">
          <div className="bc-posts-header">
            <span>
              {posts.length} {posts.length === 1 ? "article" : "articles"}
            </span>
          </div>

          <div className="bc-grid">
            {posts.map((post) => (
              <article className="bc-card" key={post.slug}>
                <span className="bc-card-number">
                  {String(
                    blogPostsPT.findIndex((item) => item.slug === post.slug) +
                      1,
                  ).padStart(2, "0")}
                </span>

                <div className="bc-card-content">
                  <h2>{post.title}</h2>

                  <p>{post.introduction}</p>

                  <Link to={`/pt/blog/${post.slug}`} className="bc-card-link">
                    Read article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <FooterPT />
    </>
  );
};

export default BlogCategoryPT;
