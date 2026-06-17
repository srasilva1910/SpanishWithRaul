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
      <Helmet htmlAttributes={{ lang: "es" }}>
        <title>
          Spanish With Raul | Learn Spanish Online with a University Professor
        </title>

        <meta
          name="description"
          content="Structured online Spanish lessons based on CEFR and university programs. Learn with a PhD Spanish professor from UNAM."
        />
        <link rel="canonical" href="https://spanishwithraul.com/es" />
      </Helmet>
      <Helmet>
        <title>
          Clases de Español Online con un Profesor Universitario | Spanish With
          Raul
        </title>

        <meta
          name="description"
          content="Aprende español con un profesor universitario con doctorado por la UNAM. Clases estructuradas, personalizadas y basadas en el MCER (A1–C2). Clase de prueba gratuita."
        />

        <link rel="canonical" href="https://spanishwithraul.com/es" />

        <meta property="og:title" content="Spanish With Raul" />

        <meta
          property="og:description"
          content="La estructura de un curso universitario. La atención de un profesor particular."
        />

        <meta property="og:url" content="https://spanishwithraul.com/es" />

        <link
          rel="alternate"
          hrefLang="en"
          href="https://spanishwithraul.com/"
        />

        <link
          rel="alternate"
          hrefLang="es"
          href="https://spanishwithraul.com/es"
        />

        <link
          rel="alternate"
          hrefLang="pt-BR"
          href="https://spanishwithraul.com/pt"
        />

        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://spanishwithraul.com/"
        />
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
