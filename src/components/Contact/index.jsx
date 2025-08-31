import { motion } from "framer-motion";
import "./styles.scss";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <motion.h2
          className="contact__title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let’s Work Together
        </motion.h2>
        <motion.p
          className="contact__subtitle"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Open to exciting opportunities worldwide
        </motion.p>

        <motion.div
          className="contact__links"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="mailto:pratik@example.com"
            className="contact__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email Me
          </a>
          <a
            href="https://github.com/B-Pratik"
            className="contact__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pratik-bhurewar/"
            className="contact__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
