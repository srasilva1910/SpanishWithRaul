import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import Benefits from "../../components/Benefits/Benefits.jsx";
import CTA from "../../components/CTA/CTA.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Spanish With Raul | Learn Spanish Online with a University Professor
        </title>

        <meta
          name="description"
          content="Structured online Spanish lessons based on CEFR and university programs. Learn with a PhD Spanish professor from UNAM."
        />
        <link rel="canonical" href="https://spanishwithraul.com/" />
      </Helmet>

      <Navbar />
      <Hero />
      <Testimonials />
      <Benefits />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
