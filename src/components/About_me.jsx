import React from 'react';
import '../styles/about_me.css';
import { motion } from 'framer-motion';
import { FaUserAlt } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <motion.section
      className="about-me-wrapper"
      id="aboutMey"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="about-me-header">
        <FaUserAlt className="about-icon" />
        <h2 className="about-me-heading">About Me</h2>
      </div>

      <motion.p
        className="about-me-description"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        I'm <strong>Pawan</strong>, a MERN Stack Developer passionate about crafting impactful digital solutions. I bring strong backend experience using <strong>Node.js</strong> and <strong>Express.js</strong> and enjoy working on scalable, user-focused applications. I thrive in collaborative teams, constantly upskilling, and currently serve as a Backend Developer. I’m enthusiastic about building purposeful tech and open to meaningful connections.
      </motion.p>
    </motion.section>
  );
};

export default AboutMe;
