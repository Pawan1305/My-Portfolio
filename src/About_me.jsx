import React from 'react'
import './about_me.css'
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div
    initial={{
     opacity:0,
     y:40
    }} 
    whileInView={
     {
       opacity:1,
       y:0
     }
    }
    
    transition={{
     delay:0.2,
     duration:0.5
    }}
    viewport={{
      once:true
     }}
      className='about_me'  id="aboutMey">
      <h2 className='heading'>About Me</h2>
    <div className="about_me_info">
        <p className='about_me_left'>I am Pawan, MERN stack developer with a passion for coding and problem-solving, Graduated with Bachelors degree. I am dedicated to creating efficient and innovative solutions.Learning continuously and Excited about building user-centric and scalable applications to make a positive impact in the digital world. Currently, I am working as a backend developer and looking forward to connect with you.</p>
        {/* <div className="about_me_right"></div> */}
    </div>

    </motion.div>
    
  )
}

export default AboutMe
