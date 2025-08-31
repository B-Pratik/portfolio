import { motion } from "framer-motion";
import "./style.scss";

const highlights = [
  {
    title: "IoT Proxy Service",
    description:
      "Built an HTTP to WebSocket proxy for IoT devices enabling reliable bi directional communication at scale",
    icon: "🌐",
  },
  {
    title: "React Component Library",
    description:
      "Maintained and extended a custom component library on top of Ant Design improving design consistency and developer productivity",
    icon: "🧩",
  },
  {
    title: "SVG Graphs with Animations",
    description:
      "Created complex interactive SVG based charts with smooth animations from scratch",
    icon: "📈",
  },
  {
    title: "Data Modeler Tool",
    description:
      "Led frontend of Modeler app for managing data models with Monaco based query editor and AG Grid previews",
    icon: "🛠️",
  },
  {
    title: "Amenities Booking Portal",
    description:
      "Designed booking and waitlist algorithms for Friday Life portal improving resource allocation and user experience",
    icon: "📅",
  },
  {
    title: "Performance Optimization",
    description:
      "Specialized in reducing bundle size implementing lazy loading and improving lighthouse scores across projects",
    icon: "⚡",
  },
];

export default function WorkHighlights() {
  return (
    <section className="work" id="work">
      <div className="work__container">
        <h2 className="work__title">Work Highlights</h2>
        <div className="work__grid">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              className="work__card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="work__icon">{h.icon}</div>
              <h3 className="work__card-title">{h.title}</h3>
              <p className="work__desc">{h.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
