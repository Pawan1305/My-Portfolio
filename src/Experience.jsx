import React from 'react';
import './experience.css';
import { motion } from 'framer-motion';

const ExperienceCard = ({ role, company, period, responsibilities }) => (
  <motion.div
    className="experience-card"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    whileHover={{ scale: 1.02 }}
  >
    <h3 className="role">{role} <span className="company">@ {company}</span></h3>
    <p className="period">{period}</p>
    <ul className="responsibilities">
      {responsibilities.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </motion.div>
);

const Experience = () => {
  const experienceData = [
    {
      role: 'Backend Developer',
      company: 'EC-Council',
      period: 'Jul 2024 – Present',
      responsibilities: [
        'Developing and maintaining backend applications using NodeJS and Express.js.',
        'Designing RESTful APIs for efficient frontend-backend communication.',
        'Collaborating with frontend developers for seamless integration.',
        'Implementing MongoDB and MySQL for database solutions.'
      ]
    },
    {
      role: 'Teaching Assistant',
      company: 'Coding Ninjas',
      period: 'Aug 2024 – Nov 2024',
      responsibilities: [
        'Mentored students in Node.js, async programming, and Express.',
        'Debugged student code and explained tough concepts in 1-on-1s.',
        'Reviewed assignments and provided feedback for improvement.',
        'Helped students build hands-on projects with Node and MongoDB.'
      ]
    },
    {
      role: 'Frontend Intern',
      company: 'OmnistTechHub Solutions Pvt. Ltd.',
      period: 'Feb 2023 – Apr 2023',
      responsibilities: [
        'Built responsive web UIs using HTML, CSS, and JavaScript.',
        'Worked with senior developers to meet frontend goals.',
        'Used Git for version control and team collaboration.',
        'Applied responsive design for cross-device compatibility.'
      ]
    }
  ];

  return (
    <div className="experience-section">
      <h2 className="experience-heading">Professional Experience</h2>
      {experienceData.map((exp, idx) => (
        <ExperienceCard key={idx} {...exp} />
      ))}
    </div>
  );
};

export default Experience;
