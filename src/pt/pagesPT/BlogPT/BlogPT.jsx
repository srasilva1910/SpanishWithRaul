import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "../../../data/blogPostsPT.js";

import NavbarPT from "../../componentsPT/NavbarPT/NavbarPT.jsx";
import FooterPT from "../../componentsPT/FooterPT/FooterPT.jsx";

import "./BlogPT.css";

const BlogPT = () => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>Blog | Spanish With Raúl</title>
        <meta
          name="description"
          content="Read articles about Mexican Spanish, literature, culture and Spanish learning."
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

        <section className="blog-grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <span className="blog-category">{post.category}</span>

              <h2>{post.title}</h2>

              <p>{post.introduction}</p>

              <Link to={`/pt/blog/${post.slug}`} className="blog-link">
                Read article
              </Link>
            </article>
          ))}
        </section>
      </main>

      <FooterPT />
    </>
  );
};

export default BlogPT;
