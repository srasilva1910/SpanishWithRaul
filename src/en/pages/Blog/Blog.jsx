import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "../../../data/blogPosts.js";

import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import "./Blog.css";

const Blog = () => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>Blog | Spanish With Raúl</title>
        <meta
          name="description"
          content="Read articles about Mexican Spanish, literature, culture and Spanish learning."
        />
      </Helmet>

      <Navbar />

      <main className="blog">
        <section className="blog-intro">
          <h1>Blog</h1>
          <div className="blog-divider"></div>

          <p>
            Articles about Mexican Spanish, literature, culture, and practical
            tips to help you learn Spanish with more confidence.
          </p>
        </section>

        <section className="blog-grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <span className="blog-category">{post.category}</span>

              <h2>{post.title}</h2>

              <p>{post.introduction}</p>

              <Link to={`/blog/${post.slug}`} className="blog-link">
                Read article
              </Link>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
