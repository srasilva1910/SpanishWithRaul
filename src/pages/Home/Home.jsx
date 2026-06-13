import Navbar from "../../components/Navbar/Navbar.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Testimonials from "../../components/Testimonials/Testimonials.jsx";
import Benefits from "../../components/Benefits/Benefits.jsx";
import CTA from "../../components/CTA/CTA.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <>
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
