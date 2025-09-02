import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./styles.scss";

export default function ScrollNavigator() {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [sections, setSections] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const sectionNodes = Array.from(document.querySelectorAll("section"));
    setSections(sectionNodes);

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight;
      const pageHeight = document.body.scrollHeight;
      setIsAtBottom(scrollY >= pageHeight - 50);

      // detect active section
      const headerOffset = document.querySelector("header")?.offsetHeight || 72; // dynamic height
      let activeIndex = 0;

      sectionNodes.forEach((sec, i) => {
        const sectionTop = sec.offsetTop - headerOffset - 4;
        if (window.scrollY >= sectionTop) {
          activeIndex = i;
        }
      });

      setCurrentIndex(activeIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (sections.length > 0 && currentIndex < sections.length - 1) {
      const headerOffset = document.querySelector("header")?.offsetHeight || 72;
      const nextSection = sections[currentIndex + 1];
      const targetPosition = nextSection.offsetTop - headerOffset;

      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  return (
    <motion.button
      className="scrollNavigator"
      onClick={handleClick}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      aria-label={isAtBottom ? "Scroll to top" : "Scroll to next section"}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
      >
        {isAtBottom ? (
          <ChevronUp size={28} strokeWidth={2.5} />
        ) : (
          <ChevronDown size={28} strokeWidth={2.5} />
        )}
      </motion.div>
    </motion.button>
  );
}
