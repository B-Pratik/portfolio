import { useEffect, useState } from "react";
import { motion as m } from "motion/react"
import styles from "./about.module.scss";

/* small number animator - smooth & performant */
function useCountTo(target, duration = 800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf;
    const start = performance.now();
    const from = 0;
    const to = target;
    function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // approximate easeInOut
      setValue(Math.round(from + (to - from) * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}

export default function About() {
  // derive years from career start (2014)
  const years = new Date().getFullYear() - 2014;
  const yearsCount = useCountTo(years);
  const projectsCount = useCountTo(12); // placeholder, update to real
  const componentsCount = useCountTo(140); // placeholder

  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={`${styles.inner} container`}>
        <m.h2
          id="about-title"
          className={styles.heading}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Snapshot
        </m.h2>

        <m.p
          className={styles.summary}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Fullstack developer with {years}+ years of building performance-focused web applications, reusable component systems, and real-time integrations. I enjoy solving tricky front-end problems — rendering performance, architecture for scale, and delightful interactions.
        </m.p>

        <div className={styles.stats}>
          <article className={styles.stat}>
            <div className={styles.num}>{yearsCount}+</div>
            <div className={styles.label}>Years experience</div>
          </article>

          <article className={styles.stat}>
            <div className={styles.num}>{projectsCount}+</div>
            <div className={styles.label}>Projects & demos</div>
          </article>

          <article className={styles.stat}>
            <div className={styles.num}>{componentsCount}+</div>
            <div className={styles.label}>UI components</div>
          </article>
        </div>
      </div>
    </section>
  );
}
