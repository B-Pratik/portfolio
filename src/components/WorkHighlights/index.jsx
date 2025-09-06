import { motion } from "framer-motion";
import "./style.scss";

const highlights = [
  {
    title: "IoT Proxy Service",
    description:
      "Engineered an HTTP → WebSocket proxy for IoT fleets, enabling reliable, low-latency, bi-directional communication at scale with reconnection",
    icon: "🌐",
  },
  {
    title: "React Component Library",
    description:
      "Created and maintained a modular component library with custom theming, improving UI consistency, and long-term maintainability",
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
      "Led development of a modeling tool with Monaco-based query editor, schema visualization, and AG Grid previews for interactive data exploration",
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
      "Initiatives: bundle size reduction, tree-shaking, code splitting, caching strategies, and Lighthouse score improvements",
    icon: "⚡",
  },
];

const cardVariants = {
  offscreen: {
    y: 260,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default function WorkHighlights() {
  return (
    <section className="work" id="work">
      <div className="work__container">
        <h2 className="work__title">Work Highlights</h2>
        <div className="work__flex">
          {highlights.map((h) => (
            <motion.div
              key={h.title}
              className="work__card-container"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ amount: 0.8 }}
            >
              <motion.div variants={cardVariants} className="work__card">
                <div className="work__icon">{h.icon}</div>
                <h3 className="work__card-title">{h.title}</h3>
                <p className="work__desc">{h.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
