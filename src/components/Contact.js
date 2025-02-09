import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./../style/Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_pq4amcn",   // Replace with your Service ID
      "template_iw8f2ff",  // Replace with your Template ID
      form.current,
      "NAURCm6i8v2PfSELU"  // Replace with your Public Key
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message. Try again.");
        console.error("EmailJS Error:", error);
      }
    );
  };

  return (
    <section id="contact">
      <div className="contact-page">
        <motion.h1 className="contact-title" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Get in Touch
        </motion.h1>

        <div className="contact-container">
          <motion.div className="contact-info" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <h2>Contact Information</h2>
            <p>Feel free to reach out to me through any of the channels below:</p>
            <div className="contact-details">
              <div className="contact-item"><i className="fas fa-phone"></i> <span>+91 8668385494</span></div>
              <div className="contact-item"><i className="fas fa-envelope"></i> <span>vishalkoli1402@gmail.com</span></div>
              <div className="contact-item"><i className="fas fa-map-marker-alt"></i> <span>Shirpur 425427, Maharashtra</span></div>
            </div>
          </motion.div>

          <motion.div className="contact-form-wrapper" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <h2>Send a Message</h2>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" placeholder="Your Name" required />
              <input type="email" name="user_email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              <motion.button type="submit" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
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
