import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../../../data/blogPosts.js";

import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import HeardInMexicoPost from "./HeardInMexicoPost.jsx";
import MinutoLiterarioPost from "./MinutoLiterarioPost.jsx";
import LiteraturaVozAltaPost from "./LiteraturaVozAltaPost.jsx";

import "./BlogPost.css";

const BlogPost = () => {
  const { slug } = useParams();

  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <>
        <Navbar />

        <main className="post-not-found">
          <h1>Article not found</h1>
          <Link to="/blog" className="back-link">
            Back to Blog
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  if (post.seriesType === "heard-in-mexico") {
    return <HeardInMexicoPost post={post} />;
  }

  if (post.seriesType === "minuto-literario") {
    return <MinutoLiterarioPost post={post} />;
  }

  if (post.seriesType === "literatura-en-voz-alta") {
    return <LiteraturaVozAltaPost post={post} />;
  }

  return null;
};

export default BlogPost;
