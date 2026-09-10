import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "../../../data/blogPosts.js";

import NavbarES from "../../componentsES/NavbarES/NavbarES.jsx";
import FooterES from "../../componentsES/FooterES/FooterES.jsx";

import "./BlogES.css";

const categories = [
  {
    id: "heard-in-mexico",
    title: "Heard in Mexico",
    description:
      "Expressions, words, and everyday language you are likely to hear in Mexico.",
  },
  {
    id: "minuto-literario",
    title: "Minuto Literario",
    description:
      "Short reflections on Spanish-language literature, ideas, and literary culture.",
  },
  {
    id: "literatura-en-voz-alta",
    title: "Literatura en Voz Alta",
    description:
      "Listen to literature in Spanish and discover works from the Hispanic literary tradition.",
  },
];

const BlogES = () => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "es" }}>
        <title>Blog | Spanish With Raúl</title>
        <meta
          name="description"
          content="Read about Mexican Spanish, literature, culture, and Spanish language learning with Spanish With Raúl."
        />
      </Helmet>

      <NavbarES />

      <main className="blog">
        <section className="blog-intro">
          <h1>Blog</h1>

          <div className="blog-divider"></div>

          <p>
            Artículos sobre el español de México, literatura, cultura y consejos
            prácticos para que aprendas español con mayor confianza.
          </p>
        </section>

        <div className="blog-categories">
          {categories.map((category) => {
            const posts = blogPosts
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
                    to={`/es/blog/series/${category.id}`}
                    className="category-link"
                  >
                    View all
                  </Link>
                </div>

                <div className="blog-preview-grid">
                  {posts.map((post) => (
                    <article className="blog-card" key={post.slug}>
                      <span className="blog-card-number">
                        {String(
                          blogPosts.findIndex(
                            (item) => item.slug === post.slug,
                          ) + 1,
                        ).padStart(2, "0")}
                      </span>

                      <div className="blog-card-content">
                        <h3>{post.title}</h3>

                        <p>{post.introduction}</p>

                        <Link
                          to={`/es/blog/${post.slug}`}
                          className="blog-link"
                        >
                          Read article
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

      <FooterES />
    </>
  );
};

export default BlogES;
