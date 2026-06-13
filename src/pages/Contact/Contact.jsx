import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import "./Contact.css";

const Contact = () => {
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
            <img src="/raul.jpg" alt="Raúl Ramírez" className="contact-photo" />

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

          <form className="contact-form">
            <h2>Send a Message</h2>

            <input type="text" placeholder="Your name" />

            <input type="email" placeholder="Your email" />

            <textarea rows="6" placeholder="Tell me about your goals..." />

            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
