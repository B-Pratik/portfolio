import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./styles.scss";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "hero";
      const headerOffset = document.querySelector("header")?.offsetHeight || 72;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - headerOffset - 10;
        if (window.scrollY >= sectionTop) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="navbar">
      <motion.div
        className="navbar__brand"
        initial={{ opacity: 0, y: -10 }}
        animate={
          activeSection === "hero"
            ? { opacity: 0, y: -10, pointerEvents: "none" }
            : { opacity: 1, y: 0 }
        }
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Pratik Bhurewar
        </motion.div>
      </motion.div>

      <nav className="navbar__links">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Showcase</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
