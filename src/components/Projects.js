import React from "react";
import { motion } from "framer-motion";

import "./../style/Projects.css";
const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Art-Portfolio",
            description: "showcasing creativity and craftsmanship across various mediums.Discover innovation and artistic excellence in each piece.",
            image: "A1.png",
            link: "https://art-port.pages.dev",
        },
        {
            id: 2,
            title: "DMA App for Farmers",
            description: " Designed and built the front-end for a platform enabling farmers to sell their produce directly to consumers.",
            image: "DMA1.jpeg",
            link: "https://c4e8814e.dma-forfarmer.pages.dev",
        },

    ];

    return (
        <section id="projects">
            <div className="projects-page">
                <motion.h1
                    className="projects-title"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    My Projects
                </motion.h1>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            whileHover={{ scale: 1.05, rotate: 3 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="project-image-wrapper">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                            </div>
                            <div className="project-content">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
