import { useState } from "react";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";
import NavbarPT from "../../componentsPT/NavbarPT/NavbarPT.jsx";
import FooterPT from "../../componentsPT/FooterPT/FooterPT.jsx";
import "./ContactPT.css";

const ContactPT = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("Mensaje enviado con éxito!");

      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setStatus("Por favor, inténtalo otra vez.");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contato | Spanish With Raul</title>

        <meta
          name="description"
          content="Entre em contato com Raúl Ramírez para agendar uma aula experimental gratuita e receber um plano de aprendizagem personalizado de acordo com seus objetivos e nível."
        />

        <link rel="canonical" href="https://spanishwithraul.com/pt/contato" />

        <meta property="og:title" content="Contato | Spanish With Raul" />

        <meta
          property="og:description"
          content="Agende uma aula experimental gratuita e descubra uma abordagem estruturada e personalizada para aprender espanhol."
        />

        <meta
          property="og:url"
          content="https://spanishwithraul.com/pt/contato"
        />
      </Helmet>
      <NavbarPT />

      <main className="contact-page">
        <section className="contact-intro">
          <h1>Contato</h1>

          <div className="contact-divider"></div>
        </section>

        <section className="contact-container">
          <div className="contact-info">
            <h2>Raúl Ramírez</h2>
            <p className="contact-role">Professor de espanhol</p>

            <div className="contact-details">
              <div>
                <h3>E-mail</h3>
                <p>raul@email.com</p>
              </div>

              <div>
                <h3>WhatsApp</h3>
                <p>+52 XX XXXX XXXX</p>
              </div>

              <div>
                <h3>Redes Sociais</h3>
                <p>Instagram · Facebook · YouTube</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Enviar mensagem</h2>

            <input
              type="text"
              name="user_name"
              placeholder="Nome"
              value={formData.user_name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="E-mail"
              value={formData.user_email}
              onChange={handleChange}
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Como posso te ajudar?"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Enviar mensagem</button>

            {status && <p className="form-status">{status}</p>}
          </form>
        </section>
      </main>

      <FooterPT />
    </>
  );
};

export default ContactPT;
