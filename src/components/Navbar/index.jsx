import "./styles.scss";

export default function Navbar() {
  return (
      <header className="navbar">
        <div className="navbar__brand">Pratik Bhurewar</div>
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
