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
          Aulas de Espanhol Online com um Professor Universitário | Spanish With
          Raul
        </title>

        <meta
          name="description"
          content="Aprenda espanhol com um professor universitário com doutorado pela UNAM. Aulas estruturadas, personalizadas e baseadas no QECR (A1–C2). Aula experimental gratuita."
        />

        <link rel="canonical" href="https://spanishwithraul.com/pt" />

        <meta property="og:title" content="Spanish With Raul" />

        <meta
          property="og:description"
          content="A estrutura de um curso universitário. A atenção de um professor particular."
        />

        <meta property="og:url" content="https://spanishwithraul.com/pt" />
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
