
import '../styles/main.css';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';



const Navbar = () => {
  
  return (
    <>
      <div className="navbar">
        <div className="left">
          <motion.h1
            className="title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            P1
          </motion.h1>
        </div>
        <div className="right">
          <ScrollLink
            to="mainy"
            spy={true}
            smooth={true}
            offset={-140} // Adjust offset if you have a fixed header
            duration={600} // Animation duration in milliseconds
            className="button"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="aboutMey"
            spy={true}
            smooth={true}
            offset={-140} // Adjust offset if you have a fixed header
            duration={600} // Animation duration in milliseconds
            className="button"
          >
            About Me
          </ScrollLink>

          <ScrollLink
            to="experience-card"
            spy={true}
            smooth={true}
            offset={-140} // Adjust offset if you have a fixed header
            duration={600} // Animation duration in milliseconds
            className="button"
          >
            Experience
          </ScrollLink>

          <ScrollLink
            to="skills"
            spy={true}
            smooth={true}
            offset={-140} // Adjust offset if you have a fixed header
            duration={600} // Animation duration in milliseconds
            className="button"
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="project"
            spy={true}
            smooth={true}
            offset={-140} // Adjust offset if you have a fixed header
            duration={600} // Animation duration in milliseconds
            className="button"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-140} // Adjust offset if you have a fixed header
            duration={600} // Animation duration in milliseconds
            className="button"
          >
            Contact Me
          </ScrollLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
