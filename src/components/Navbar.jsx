import React, { useState } from 'react';
import '../styles/main.css';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const navLinks = [
  { to: 'mainy', label: 'Home' },
  { to: 'aboutMey', label: 'About Me' },
  { to: 'experience-card', label: 'Experience' },
  { to: 'skills', label: 'Skills' },
  { to: 'project', label: 'Projects' },
  { to: 'contact', label: 'Contact Me' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="navbar">
        <div className="nav-header">
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

          <button
            type="button"
            className={`nav-toggle ${isOpen ? 'open' : ''}`}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
        </div>

        <div className={`right ${isOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-140}
              duration={600}
              className="button"
              onClick={closeMenu}
            >
              {link.label}
            </ScrollLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
