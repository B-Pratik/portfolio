import React, { Suspense, useMemo } from "react";
import { motion } from "framer-motion";
import styles from "./hero.module.scss";
const Particles = React.lazy(() => import("../Particles"));

export default function Hero() {
  // Name broken into letters for staggered reveal
  const name = useMemo(() => "Pratik Bhurewar".split(""), []);

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.03, duration: 0.45, ease: "easeOut" },
    }),
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg} aria-hidden="true" />

      <Suspense
        fallback={<div className={styles.particlesFallback} aria-hidden />}
      >
        <Particles />
      </Suspense>

      <div className={`${styles.container} container`} role="banner">
        <motion.h1
          className={styles.title}
          initial="hidden"
          animate="visible"
          aria-label="Hi, I'm Pratik Bhurewar"
        >
          <span className={styles.greeting}>Hi, I’m</span>
          <div className={styles.nameWrap} aria-hidden>
            {name.map((char, i) => (
              <motion.div
                key={`${char}-${i}`}
                className={styles.letter}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                aria-hidden
              >
                {char === " " ? "\u00A0" : char}
              </motion.div>
            ))}
          </div>
        </motion.h1>

        <motion.p
          className={styles.lead}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.9 }}
        >
          I build front end systems that scale. I turn tricky UI problems into
          reliable experiences.
        </motion.p>
      </div>
    </section>
  );
}
