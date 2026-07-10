import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import NavbarPT from "../../componentsPT/NavbarPT/NavbarPT.jsx";
import FooterPT from "../../componentsPT/FooterPT/FooterPT.jsx";

const MinutoLiterarioPostPT = ({ post }) => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>{post.seoTitle}</title>
        <meta name="description" content={post.seoDescription} />
        <link
          rel="canonical"
          href={`https://spanishwithraul.com/blog/${post.slug}`}
        />
      </Helmet>

      <NavbarPT />

      <main className="blog-post">
        <article className="post-container post-literary">
          <span className="post-category">{post.category}</span>

          <h1>{post.title}</h1>

          <div className="post-divider"></div>

          <p className="post-intro">{post.introduction}</p>

          {post.sections.map((section, index) => (
            <section className="post-section" key={index}>
              <h2>{section.title}</h2>

              {section.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </section>
          ))}

          <Link to="/pt/blog" className="back-link">
            ← Back to Blog
          </Link>
        </article>
      </main>

      <FooterPT />
    </>
  );
};

export default MinutoLiterarioPostPT;
