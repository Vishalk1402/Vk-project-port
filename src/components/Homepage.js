import React, { useState } from "react";
import { motion } from "framer-motion";
import "./../style/Homepage.css";

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
        <img src="v logo.png"  alt="logo" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        {/* Hero Text */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>
            Hello,<br /> I'm <span className="highlight">Vishal Koli</span>
          </h1>
          <p>
            A passionate <span className="highlight">Developer</span> bringing
            ideas to life through <span className="highlight">Code</span>.
          </p>
          <motion.a
            href="#projects"
            className="cta-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default Homepage;
