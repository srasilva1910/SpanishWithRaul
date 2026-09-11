import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "../../../data/blogPosts.js";

import NavbarES from "../../componentsES/NavbarES/NavbarES.jsx";
import FooterES from "../../componentsES/FooterES/FooterES.jsx";

import "./BlogCategoryES.css";

const categories = {
  "heard-in-mexico": {
    title: "Heard in Mexico",
    description:
      "Expresiones, palabras y lenguaje cotidiano que probablemente escucharás en México.",
  },

  "minuto-literario": {
    title: "Minuto Literario",
    description:
      "Breves reflexiones sobre la literatura en español y la cultura literaria.",
  },

  "literatura-en-voz-alta": {
    title: "Literatura en Voz Alta",
    description:
      "Escucha literatura en español y descubre obras de la tradición literaria hispánica.",
  },
};

const BlogCategoryES = () => {
  const { seriesType } = useParams();

  const category = categories[seriesType];

  const posts = blogPosts
    .filter((post) => post.seriesType === seriesType)
    .reverse();

  if (!category) {
    return (
      <>
        <NavbarES />

        <main className="bc-not-found">
          <h1>Series not found</h1>

          <Link to="/es/blog" className="bc-back-link">
            Back to Blog
          </Link>
        </main>

        <FooterES />
      </>
    );
  }

  return (
    <>
      <Helmet htmlAttributes={{ lang: "es" }}>
        <title>{category.title} | Spanish With Raúl</title>

        <meta name="description" content={category.description} />
      </Helmet>

      <NavbarES />

      <main className="bc-page">
        <section className="bc-intro">
          <Link to="/es/blog" className="bc-intro-back">
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
                    blogPosts.findIndex((item) => item.slug === post.slug) + 1,
                  ).padStart(2, "0")}
                </span>

                <div className="bc-card-content">
                  <h2>{post.title}</h2>

                  <p>{post.introduction}</p>

                  <Link to={`/es/blog/${post.slug}`} className="bc-card-link">
                    Read article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <FooterES />
    </>
  );
};

export default BlogCategoryES;
