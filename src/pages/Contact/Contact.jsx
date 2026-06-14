import { useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./Contact.css";

const Contact = () => {
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
      setStatus("Message sent successfully!");

      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Navbar />

      <main className="contact-page">
        <section className="contact-intro">
          <h1>Contact</h1>

          <div className="contact-divider"></div>

          <p>
            Ready to improve your Spanish with a structured, personalized
            learning experience?
          </p>
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
            <h2>Send a Message</h2>

            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              value={formData.user_name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="How can I help you?"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Send Message</button>

            {status && <p className="form-status">{status}</p>}
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
