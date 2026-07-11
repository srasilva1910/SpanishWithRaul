import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import NavbarPT from "../../componentsPT/NavbarPT/NavbarPT.jsx";
import FooterPT from "../../componentsPT/FooterPT/FooterPT.jsx";

const HeardInMexicoPostPT = ({ post }) => {
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
        <article className="post-container">
          <span className="post-category">{post.category}</span>

          <h1>{post.title}</h1>

          <div className="post-divider"></div>

          {post.media?.type === "image" && (
            <div className="post-image-wrapper">
              <img src={post.media.src} alt={post.media.alt} />
            </div>
          )}

          {post.media?.type === "facebook" && (
            <div
              className={`post-video ${
                post.media.orientation === "portrait" ? "portrait" : "landscape"
              }`}
            >
              <iframe
                src={post.media.src}
                title={post.title}
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          )}

          <Link to="/pt/blog" className="back-link">
            ← Voltar ao Blog
          </Link>
        </article>
      </main>

      <FooterPT />
    </>
  );
};

export default HeardInMexicoPostPT;
