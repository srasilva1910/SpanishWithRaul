import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./en/components/ScrollToTop";
import Home from "./en/pages/Home/Home.jsx";
import About from "./en/pages/About/About.jsx";
import Method from "./en/pages/Method/Method.jsx";
import Pricing from "./en/pages/Pricing/Pricing.jsx";
import Contact from "./en/pages/Contact/Contact.jsx";

import ScrollToTopES from "./es/componentsES/ScrollToTopES";
import HomeES from "./es/pagesES/HomeES/HomeES.jsx";
import AboutES from "./es/pagesES/AboutES/AboutES.jsx";
import MethodES from "./es/pagesES/MethodES/MethodES.jsx";
import PricingES from "./es/pagesES/PricingES/PricingES.jsx";
import ContactES from "./es/pagesES/ContactES/ContactES.jsx";

import ScrollToTopPT from "./pt/componentsPT/ScrollToTopPT";
import HomePT from "./pt/pagesPT/HomePT/HomePT.jsx";
import AboutPT from "./pt/pagesPT/AboutPT/AboutPT.jsx";
import MethodPT from "./pt/pagesPT/MethodPT/MethodPT.jsx";
import PricingPT from "./pt/pagesPT/PricingPT/PricingPT.jsx";
import ContactPT from "./pt/pagesPT/ContactPT/ContactPT.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollToTopES />
      <ScrollToTopPT />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/method" element={<Method />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/es" element={<HomeES />} />
        <Route path="/es/sobre-mi" element={<AboutES />} />
        <Route path="/es/metodo" element={<MethodES />} />
        <Route path="/es/precios" element={<PricingES />} />
        <Route path="/es/contacto" element={<ContactES />} />

        <Route path="/pt" element={<HomePT />} />
        <Route path="/pt/sobre-mim" element={<AboutPT />} />
        <Route path="/pt/metodo" element={<MethodPT />} />
        <Route path="/pt/precos" element={<PricingPT />} />
        <Route path="/pt/contato" element={<ContactPT />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
