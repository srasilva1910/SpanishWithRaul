import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "../../../data/blogPosts.js";

import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import "./BlogCategory.css";

const categories = {
  "heard-in-mexico": {
    title: "Heard in Mexico",
    description:
      "Expressions, words, and everyday language you are likely to hear in Mexico.",
  },

  "minuto-literario": {
    title: "Minuto Literario",
    description:
      "Short reflections on Spanish-language literature, ideas, and literary culture.",
  },

  "literatura-en-voz-alta": {
    title: "Literatura en Voz Alta",
    description:
      "Listen to literature in Spanish and discover works from the Hispanic literary tradition.",
  },
};

const BlogCategory = () => {
  const { seriesType } = useParams();

  const category = categories[seriesType];

  const posts = blogPosts
    .filter((post) => post.seriesType === seriesType)
    .reverse();

  if (!category) {
    return (
      <>
        <Navbar />

        <main className="category-not-found">
          <h1>Series not found</h1>

          <Link to="/blog" className="back-link">
            Back to Blog
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>{category.title} | Spanish With Raúl</title>

        <meta name="description" content={category.description} />
      </Helmet>

      <Navbar />

      <main className="blog-category">
        <section className="category-intro">
          <Link to="/blog" className="category-back-link">
            ← Back to Blog
          </Link>

          <span className="category-label">Series</span>

          <h1>{category.title}</h1>

          <div className="category-divider"></div>

          <p>{category.description}</p>
        </section>

        <section className="category-posts">
          <div className="category-posts-header">
            <span>
              {posts.length} {posts.length === 1 ? "article" : "articles"}
            </span>
          </div>

          <div className="category-post-grid">
            {posts.map((post, index) => (
              <article className="category-post-card" key={post.slug}>
                <span className="category-post-number">
                  {String(posts.length - index).padStart(2, "0")}
                </span>

                <div className="category-post-content">
                  <h2>{post.title}</h2>

                  <p>{post.introduction}</p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="category-post-link"
                  >
                    Read article
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BlogCategory;
