import { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkHighlights from "./components/WorkHighlights";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Navigator from "./components/Navigator";
import "./styles/app.scss";

function App() {
  // Enable smooth scroll behavior globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <About />
        <WorkHighlights />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Navigator />

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Pratik Bhurewar. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
