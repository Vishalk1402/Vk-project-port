import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "./../style/About.css";

const About = () => {
  return (
    <section id="about">
      <div className="about-page">
        <div className="about-header">
          <motion.h1
            className="about-title"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Me
          </motion.h1>
          <motion.p
            className="about-subtitle"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Passionate Developer | Creative Thinker | Problem Solver
          </motion.p>
        </div>

        <div className="about-content">
          <div className="about-left">
            <motion.img
              src="vk.jpeg"
              alt="About Me"
              className="profile-picture"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>

          <div className="about-right">
            <motion.div
              className="about-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2>Hi, I'm [Vishal Koli]</h2>
              <p>
                I'm a passionate software developer with a knack for turning
                ideas into reality. With a strong background in web development,
                programming, and design, I love creating innovative solutions
                that make a difference. My journey in tech began with curiosity
                and has grown into a fulfilling career.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                brainstorming creative projects, or indulging in my hobbies
                like reading, traveling, and playing.
              </p>
              <motion.a
                href="https://www.linkedin.com/in/vishal-koli"
                className="cta-button"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="social-links">
          <div className="social-icons">
            <a
              href="https://www.instagram.com/ordinary_vk"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://github.com/Vishalk1402"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/vishal-koli"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
