import React, { Suspense, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import styles from "./hero.module.scss";
const Particles = React.lazy(() => import("../Particles"));

export default function Hero() {
  const reduce = useReducedMotion();

  // Name broken into letters for staggered reveal
  const name = useMemo(() => "PRATIK BHUREWAR".split(""), []);

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.03, duration: 0.45, ease: "easeOut" }
    })
  };

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg} aria-hidden="true" />

      <Suspense fallback={<div className={styles.particlesFallback} aria-hidden />}>
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
          <span className={styles.nameWrap} aria-hidden>
            {name.map((char, i) => (
              <motion.span
                key={`${char}-${i}`}
                className={styles.letter}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                aria-hidden
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* path draw underline */}
        <motion.svg
          className={styles.underline}
          viewBox="0 0 520 24"
          preserveAspectRatio="none"
          aria-hidden
        >
          <motion.path
            d="M8 12 C120 4, 200 18, 260 12 C320 6, 420 18, 512 12"
            fill="none"
            stroke="url(#gradAccent)"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: reduce ? 1 : 1 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            style={reduce ? { transition: "none" } : {}}
          />
          <defs>
            <linearGradient id="gradAccent" x1="0" x2="1">
              <stop offset="0%" stopColor="#FFD166" />
              <stop offset="100%" stopColor="#06D6A0" />
            </linearGradient>
          </defs>
        </motion.svg>

        <motion.p
          className={styles.lead}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          I build front end systems that scale. I turn tricky UI problems into reliable experiences.
        </motion.p>
      </div>
    </section>
  );
}
