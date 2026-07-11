import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../../../data/blogPostsPT.js";

import NavbarPT from "../../componentsPT/NavbarPT/NavbarPT.jsx";
import FooterPT from "../../componentsPT/FooterPT/FooterPT.jsx";

import HeardInMexicoPostPT from "./HeardInMexicoPostPT.jsx";
import MinutoLiterarioPostPT from "./MinutoLiterarioPostPT.jsx";
import LiteraturaVozAltaPostPT from "./LiteraturaVozAltaPostPT.jsx";

import "./BlogPostPT.css";

const BlogPostPT = () => {
  const { slug } = useParams();

  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <>
        <NavbarPT />

        <main className="post-not-found">
          <h1>Artigo nao encontrado</h1>
          <Link to="/pt/blog" className="back-link">
            Voltar ao Blog
          </Link>
        </main>

        <FooterPT />
      </>
    );
  }

  if (post.seriesType === "escutei-no-mexico") {
    return <HeardInMexicoPostPT post={post} />;
  }

  if (post.seriesType === "minuto-literario") {
    return <MinutoLiterarioPostPT post={post} />;
  }

  if (post.seriesType === "literatura-en-voz-alta") {
    return <LiteraturaVozAltaPostPT post={post} />;
  }

  return null;
};

export default BlogPostPT;
