import NavbarES from "../../componentsES/NavbarES/NavbarES.jsx";
import HeroES from "../../componentsES/HeroES/HeroES.jsx";
import TestimonialsES from "../../componentsES/TestimonialsES/TestimonialsES.jsx";
import BenefitsES from "../../componentsES/BenefitsES/BenefitsES.jsx";
import CTAES from "../../componentsES/CTAES/CTAES.jsx";
import FooterES from "../../componentsES/FooterES/FooterES.jsx";
import { Helmet } from "react-helmet-async";

const HomeES = () => {
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

      <NavbarES />
      <HeroES />
      <TestimonialsES />
      <BenefitsES />
      <CTAES />
      <FooterES />
    </>
  );
};

export default HomeES;
