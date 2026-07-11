import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "../../../data/blogPosts.js";

import NavbarES from "../../componentsES/NavbarES/NavbarES.jsx";
import FooterES from "../../componentsES/FooterES/FooterES.jsx";

import "./BlogES.css";

const BlogES = () => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>Blog | Spanish With Raúl</title>
        <meta
          name="description"
          content="Read articles about Mexican Spanish, literature, culture and Spanish learning."
        />
      </Helmet>

      <NavbarES />

      <main className="blog">
        <section className="blog-intro">
          <h1>Blog</h1>
          <div className="blog-divider"></div>

          <p>
            Artículos sobre el español de México, la literatura, la cultura y
            consejos prácticos para ayudarte a aprender español con mayor
            confianza.
          </p>
        </section>

        <section className="blog-grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <span className="blog-category">{post.category}</span>

              <h2>{post.title}</h2>

              <p>{post.introduction}</p>

              <Link to={`/es/blog/${post.slug}`} className="blog-link">
                Leer Articulo
              </Link>
            </article>
          ))}
        </section>
      </main>

      <FooterES />
    </>
  );
};

export default BlogES;
