import React from "react";
import { motion } from "framer-motion";
import "./styles.scss";

const projects = [
  {
    id: "svg-playground",
    title: "Edit-it",
    summary:
      " A progressive web app for photo editing using Web Workers",
    tech: ["Preact", "PWA", "Web Workers"],
    demo: "https://b-pratik.github.io/edit-it/",
    repo: "https://github.com/B-Pratik/edit-it",
  },
  {
    id: "realtime-dashboard",
    title: "Call-it",
    summary:
      " A peer-to-peer video calling app built with React",
    tech: ["WebRTC", "React", "Canvas"],
    demo: "https://call-it.netlify.app/#/create",
    repo: "https://github.com/B-Pratik/call-it",
  }
];

const stripVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ProjectsShowcase() {
  return (
    <section id="projects" className="projectsShowcase" aria-labelledby="projectsHeading">
      <div className="projectsShowcase__inner container">
        <h2 id="projectsHeading" className="projectsShowcase__title">Showcase</h2>

        <div className="projectsShowcase__list" role="list">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              className="projectsShowcase__strip"
              role="listitem"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              custom={i}
              variants={stripVariants}
              aria-labelledby={`proj-title-${p.id}`}
            >
              <div className="projectsShowcase__meta">
                <h3 id={`proj-title-${p.id}`} className="projectsShowcase__projectTitle">{p.title}</h3>
                <p className="projectsShowcase__summary">{p.summary}</p>

                <ul className="projectsShowcase__tech" aria-label={`Technologies used in ${p.title}`}>
                  {p.tech.map((t) => (
                    <li key={t} className="projectsShowcase__techItem">{t}</li>
                  ))}
                </ul>

                <div className="projectsShowcase__actions">
                  {p.demo && (
                    <a className="projectsShowcase__actionPrimary" href={p.demo} target="_blank" rel="noopener noreferrer">
                      Live demo
                    </a>
                  )}
                  {p.repo && (
                    <a className="projectsShowcase__actionGhost" href={p.repo} target="_blank" rel="noopener noreferrer">
                      View repo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
