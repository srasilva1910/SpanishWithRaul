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
        <title> Contacto | Spanish With Raul</title>
        <meta
          name="description"
          content="Ponte en contacto con Raúl Ramírez para reservar una clase de prueba gratuita y recibir un plan de aprendizaje personalizado según tus objetivos y nivel."
        />
        <link rel="canonical" href="https://spanishwithraul.com/es/contacto" />
      </Helmet>
      <NavbarPT />

      <main className="contact-page">
        <section className="contact-intro">
          <h1>Contacto</h1>

          <div className="contact-divider"></div>
        </section>

        <section className="contact-container">
          <div className="contact-info">
            <h2>Raúl Ramírez</h2>
            <p className="contact-role">Spanish Professor</p>

            <div className="contact-details">
              <div>
                <h3>Email</h3>
                <p>raul@email.com</p>
              </div>

              <div>
                <h3>WhatsApp</h3>
                <p>+52 XX XXXX XXXX</p>
              </div>

              <div>
                <h3>Social Media</h3>
                <p>Instagram · Facebook · YouTube</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Enviar mensaje</h2>

            <input
              type="text"
              name="user_name"
              placeholder="Nombre"
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
              placeholder="Como te puedo ayudar?"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Enviar mensaje</button>

            {status && <p className="form-status">{status}</p>}
          </form>
        </section>
      </main>

      <FooterPT />
    </>
  );
};

export default ContactPT;
