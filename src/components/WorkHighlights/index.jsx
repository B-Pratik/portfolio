import { motion } from "framer-motion";
import "./style.scss";

const highlights = [
  {
    title: "IoT Proxy Service",
    description:
      "Engineered an HTTP → WebSocket proxy for IoT fleets, enabling reliable, low-latency, bi-directional communication at scale with reconnection and backpressure strategies",
    icon: "🌐",
  },
  {
    title: "React Component Library",
    description:
      "Created and maintained a modular component library with custom theming, improving UI consistency, developer productivity, and long-term maintainability",
    icon: "🧩",
  },
  {
    title: "Interactive SVG Visualizations",
    description:
      "Built complex, animated SVG-based charts and graphing components from scratch, optimized for performance and smooth user interaction",
    icon: "📈",
  },
  {
    title: "Data Modeling Platform",
    description:
      "Led frontend development of a modeling tool with Monaco-based query editor, schema visualization, and AG Grid previews for interactive data exploration",
    icon: "🛠️",
  },
  {
    title: "Booking & Scheduling Engine",
    description:
      "Designed booking and waitlist algorithms to improve resource utilization and user experience, ensuring fairness and reducing conflicts",
    icon: "📅",
  },
  {
    title: "Performance Engineering",
    description:
      "Drove performance initiatives: bundle size reduction, tree-shaking, advanced code splitting, image optimization, caching strategies, and Lighthouse score improvements",
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
