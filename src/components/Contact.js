import React from "react";
import { motion } from "framer-motion";
import "./../style/Contact.css";

const Contact = () => {
  return (
    <section id="contact">
    <div className="contact-page">
      <motion.h1
        className="contact-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h1>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Contact Information</h2>
          <p>Feel free to reach out to me through any of the channels below:</p>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <span>+91 8668385494</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <span>vishalkoli1402@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>Shirpur 425427, Maharashtra</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2>Send a Message</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
