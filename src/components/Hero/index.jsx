import React, { Suspense } from "react";
import { motion } from "motion/react"
import styles from "./hero.module.scss";

const Particles = React.lazy(() => import("../Particles"));

export default function Hero() {
  return (
    <header className={styles.hero} role="banner">
      {/* gradient background */}
      <div className={styles.bg} aria-hidden="true" />

      {/* lazy particles - suspended while loading */}
      <Suspense fallback={<div className={styles.particlesFallback} aria-hidden="true" />}>
        <Particles />
      </Suspense>

      <div className={`${styles.container} container`}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Hi, I’m <span className={styles.name}>Pratik Bhurewar</span>
        </motion.h1>

        <motion.p
          className={styles.lead}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          Frontend-focused fullstack developer — building performant UI, reusable component systems, and interactive visuals.
        </motion.p>

        <motion.div
          className={styles.ctaRow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
        >
          <a className={styles.primary} href="#projects">View projects</a>
          <a className={styles.secondary} href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </motion.div>
      </div>

      <a className={styles.scroll} href="#about" aria-label="Scroll to about">
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration:1, ease: "easeInOut", repeat: Infinity }}
        >
          ↓
        </motion.span>
      </a>
    </header>
  );
}
