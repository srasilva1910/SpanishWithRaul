import NavbarPT from "../../componentsPT/NavbarPT/NavbarPT.jsx";
import HeroPT from "../../componentsPT/HeroPT/HeroPT.jsx";
import TestimonialsPT from "../../componentsPT/TestimonialsPT/TestimonialsPT.jsx";
import BenefitsPT from "../../componentsPT/BenefitsPT/BenefitsPT.jsx";
import CTAPT from "../../componentsPT/CTAPT/CTAPT.jsx";
import FooterPT from "../../componentsPT/FooterPT/FooterPT.jsx";
import { Helmet } from "react-helmet-async";

const HomePT = () => {
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
        <link rel="canonical" href="https://spanishwithraul.com/es" />
      </Helmet>

      <NavbarPT />
      <HeroPT />
      <TestimonialsPT />
      <BenefitsPT />
      <CTAPT />
      <FooterPT />
    </>
  );
};

export default HomePT;
