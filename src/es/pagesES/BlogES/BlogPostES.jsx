import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../../../data/blogPosts.js";

import NavbarES from "../../componentsES/NavbarES/NavbarES.jsx";
import FooterES from "../../componentsES/FooterES/FooterES.jsx";

import HeardInMexicoPostES from "./HeardInMexicoPostES.jsx";
import MinutoLiterarioPostES from "./MinutoLiterarioPostES.jsx";
import LiteraturaVozAltaPostES from "./LiteraturaVozAltaPostES.jsx";

import "./BlogPostES.css";

const BlogPostES = () => {
  const { slug } = useParams();

  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <>
        <NavbarES />

        <main className="post-not-found">
          <h1>Article not found</h1>
          <Link to="/es/blog" className="back-link">
            Back to Blog
          </Link>
        </main>

        <FooterES />
      </>
    );
  }

  if (post.seriesType === "heard-in-mexico") {
    return <HeardInMexicoPostES post={post} />;
  }

  if (post.seriesType === "minuto-literario") {
    return <MinutoLiterarioPostES post={post} />;
  }

  if (post.seriesType === "literatura-en-voz-alta") {
    return <LiteraturaVozAltaPostES post={post} />;
  }

  return null;
};

export default BlogPostES;
