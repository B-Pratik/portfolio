import React, { Suspense } from "react";
import { motion } from "framer-motion"; // corrected import
import styles from "./hero.module.scss";

const Particles = React.lazy(() => import("../Particles"));

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* gradient background */}
      <div className={styles.bg} aria-hidden="true" />

      {/* lazy particles - suspended while loading */}
      <Suspense
        fallback={
          <div className={styles.particlesFallback} aria-hidden="true" />
        }
      >
        <Particles />
      </Suspense>

      <div className={`${styles.container} container`} role="banner">
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
          I build front end systems that scale. I turn tricky UI problems into
          reliable experiences.
        </motion.p>
      </div>
    </section>
  );
}
