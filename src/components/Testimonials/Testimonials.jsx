import { FaQuoteLeft } from "react-icons/fa";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Marcio",
    text: "I’ve taken online Spanish lessons before, but studying with Raúl felt completely different from the beginning.",
    link: "https://www.superprof.com/phd-spanish-professor-the-structure-university-course-the-attention-private-tutor.html#:~:text=6-,Marcio,-I%E2%80%99ve%20taken%20online",
  },
  {
    name: "Alisa",
    text: "He always created a very comfortable atmosphere, and I felt more confident speaking little by little.",
    link: "https://www.superprof.com/phd-spanish-professor-the-structure-university-course-the-attention-private-tutor.html#:~:text=A-,Alisa,-Sus%20clases%20son",
  },
  {
    name: "Miei",
    text: "He helped me practice Spanish sometimes, and it was always a very positive experience.",
    link: "https://www.superprof.com/phd-spanish-professor-the-structure-university-course-the-attention-private-tutor.html#:~:text=M-,MIEI,-I%E2%80%99m%20originally%20from",
  },
  {
    name: "Natalia",
    text: "Las clases siempre fueron muy tranquilas y naturales, y nunca tuve miedo de cometer errores.",
    link: "https://www.superprof.com/phd-spanish-professor-the-structure-university-course-the-attention-private-tutor.html#:~:text=N-,Natalia,-Gracias%20por%20las",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      {testimonials.map((review, index) => (
        <a
          key={index}
          href={review.link}
          target="_blank"
          rel="noopener noreferrer"
          className="testimonial-card"
        >
          <FaQuoteLeft className="quote-icon" />

          <p>{review.text}</p>

          <h4>{review.name}</h4>

          <span>Read full testimonial →</span>
        </a>
      ))}
    </section>
  );
};

export default Testimonials;
