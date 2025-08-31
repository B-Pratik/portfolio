import { motion } from "framer-motion";
import "./styles.scss";

const projects = [
  {
    title: "Modeler",
    description:
      "UI application for managing data models with Monaco powered query editor and AG Grid previews",
    link: "#",
  },
  {
    title: "Friday Life Booking Portal",
    description:
      "Amenities booking and waitlist portal with optimized allocation algorithms",
    link: "#",
  },
  {
    title: "EZShield SPAs",
    description:
      "Multiple single page applications improving data access and security for clients",
    link: "#",
  },
  {
    title: "IoT Proxy Service",
    description:
      "Custom HTTP to WebSocket proxy enabling stable real time IoT device communication",
    link: "#",
  },
  {
    title: "Custom React Library",
    description:
      "Maintained React component library built on top of Ant Design for consistency and speed",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h2 className="projects__title">Projects</h2>
        <div className="projects__grid">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="projects__card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="projects__card-title">{p.title}</h3>
              <p className="projects__desc">{p.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
