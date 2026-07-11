import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import NavbarES from "../../componentsES/NavbarES/NavbarES.jsx";
import FooterES from "../../componentsES/FooterES/FooterES.jsx";

const HeardInMexicoPostES = ({ post }) => {
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

      <NavbarES />

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

          <Link to="/es/blog" className="back-link">
            ← Regresar al Blog
          </Link>
        </article>
      </main>

      <FooterES />
    </>
  );
};

export default HeardInMexicoPostES;
