import { useRef, useEffect } from "react";
import styles from "./particles.module.scss";

/**
 * Lightweight, accessible canvas particle field.
 * - Automatically scales particle count to viewport.
 * - Disables on small screens / touch devices for performance.
 */
export default function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // feature-detect small screens or touch to avoid heavy animation
    if (typeof window === "undefined") return;
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const small = window.innerWidth < 720;
    if (isTouch || small) return; // avoid creating canvas on mobile/tablets by default

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const density = Math.max(40, Math.min(160, Math.floor((width * height) / 12000)));
    const particles = new Array(density).fill(0).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: 0.5 + Math.random() * 1.6,
    }));

    let raf = null;

    function render() {
      ctx.clearRect(0, 0, width, height);

      // draw connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(162,178,191,${0.09 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      // draw particles
      ctx.fillStyle = "rgba(162,178,191,0.12)";
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(render);
    }

    function onResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", onResize);
    render();

    return () => {
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
}
