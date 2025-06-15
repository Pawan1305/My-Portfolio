import React from 'react'
import './skills.css'
import './new.css'
import { motion } from 'framer-motion';
import SemiDonutChart from './SemiDonutChart';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      viewport={{ margin: "-100px", once: true }}
      className='skills'
    >
      <h2 className='heading1'>Technical Skills</h2>

      {/* Programming Languages */}
      <h3 className='heading2'>Programming Languages</h3>
      <div className="contents">
        <div className="flex">
          <SemiDonutChart percentage={70} fill="#03B0FD" txt="Python" />
          <SemiDonutChart percentage={65} fill="#03B0FD" txt="JavaScript" />
          <SemiDonutChart percentage={60} fill="#03B0FD" txt="C/C++" />
          <SemiDonutChart percentage={60} fill="#03B0FD" txt="Java" />
        </div>
      </div>

      {/* Frameworks */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ margin: "-100px", once: true }}
      >
        <h3 className='heading3'>Frameworks</h3>
        <div className="contents">
          <div className="flex">
            <SemiDonutChart percentage={70} fill="#03B0FD" txt="Node.js" />
            <SemiDonutChart percentage={65} fill="#03B0FD" txt="Express.js" />
            <SemiDonutChart percentage={60} fill="#03B0FD" txt="React.js" />
            <SemiDonutChart percentage={55} fill="#03B0FD" txt="Next.js" />
          </div>
        </div>
      </motion.div>

      {/* Databases & ORM */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ margin: "-100px", once: true }}
      >
        <h3 className='heading3'>Databases & ORM</h3>
        <div className="contents">
          <div className="flex">
            <SemiDonutChart percentage={70} fill="#03B0FD" txt="MongoDB" />
            <SemiDonutChart percentage={65} fill="#03B0FD" txt="MySQL" />
            <SemiDonutChart percentage={60} fill="#03B0FD" txt="PostgreSQL" />
            <SemiDonutChart percentage={55} fill="#03B0FD" txt="Sequelize" />
          </div>
        </div>
      </motion.div>

      {/* Optional: Currently Exploring */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ margin: "-100px", once: true }}
      >
        <h3 className='heading3'>Currently Exploring</h3>
        <div className="contents">
          <div className="flex">
            <SemiDonutChart percentage={40} fill="#03B0FD" txt="Kafka" />
            <SemiDonutChart percentage={45} fill="#03B0FD" txt="Django" />
            <SemiDonutChart percentage={40} fill="#03B0FD" txt="Redis" />
            <SemiDonutChart percentage={40} fill="#03B0FD" txt="GraphQL" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Skills;
