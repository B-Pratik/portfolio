import React from "react";
import { motion } from "framer-motion";
import "./styles.scss";

const skills = {
  "Languages and Frameworks": [
    "JavaScript",
    "TypeScript",
    "React",
    "Angular",
    "Preact",
    "Node.js",
    "GraphQL",
  ],
  "UI Engineering": [
    "Responsive Design",
    "Accessibility (WCAG)",
    "Design Tokens",
    "Component APIs",
  ],
  "Testing and Quality": ["Jest", "Testing Library", "Jasmine"],
  "Performance and Debugging": [
    "React DevTools",
    "Angular DevTools",
    "Webpack",
  ],
  "Backend Integration": ["Node.js", "Express", "MongoDB"],
};

const tileVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.995 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="skillsSection" aria-labelledby="skillsHeading">
      <div className="skillsSection__inner container">
        <h2 id="skillsHeading" className="skillsSection__title">Skill set</h2>

        <div className="skillsSection__grid" role="list">
          {Object.entries(skills).map(([category, list], i) => (
            <motion.article
              key={category}
              className="skillsSection__tile"
              role="listitem"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              custom={i}
              variants={tileVariants}
            >
              <div className="skillsSection__tileHeader">
                <span className="skillsSection__tileIcon" aria-hidden>
                  {/* simple inline svg icon per tile for visual cue */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M8 12h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </span>
                <h3 className="skillsSection__tileTitle">{category}</h3>
              </div>

              <div className="skillsSection__badges">
                {list.map((s) => (
                  <span key={s} className="skillsSection__badge">
                    {s}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
