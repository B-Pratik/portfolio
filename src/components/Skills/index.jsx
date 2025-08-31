import { motion } from "framer-motion";
import "./styles.scss";

const skills = {
  "Frontend": ["React", "Angular", "Preact", "JavaScript", "TypeScript", "HTML", "CSS", "SCSS"],
  "Backend": ["Node.js", "Express.js", "GraphQL", "MongoDB"],
  "Data and Tools": ["XBRL", "Ag Grid", "Monaco Editor", "Webpack", "Jest", "Jasmine"],
  "Cloud and DevOps": ["Vercel", "GitHub Actions", "Docker"],
};

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <h2 className="skills__title">Skills</h2>
        <div className="skills__categories">
          {Object.entries(skills).map(([category, list], i) => (
            <motion.div
              key={category}
              className="skills__category"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <h3 className="skills__category-title">{category}</h3>
              <div className="skills__tags">
                {list.map((skill, j) => (
                  <motion.span
                    key={skill}
                    className="skills__tag"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
