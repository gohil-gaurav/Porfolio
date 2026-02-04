/**
 * Navbar Component
 * Minimal horizontal navigation bar with theme toggle
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import avatarImg from '../assets/images/avatar.jpeg';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Find Me' }
  ];

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar__inner container">
        {/* Logo with Avatar */}
        <motion.a 
          href="#" 
          className="navbar__logo"
          onClick={scrollToTop}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img 
            src={avatarImg} 
            alt="Gaurav" 
            className="navbar__avatar"
          />
        </motion.a>

        {/* Desktop Navigation */}
        <ul className={`navbar__menu ${isMenuOpen ? 'navbar__menu--open' : ''}`}>
          {navLinks.map((link, index) => (
            <motion.li 
              key={link.id} 
              className="navbar__item"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <a 
                href={link.external ? '#' : `#${link.id}`}
                className="navbar__link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </motion.li>
          ))}
          <li className="navbar__item navbar__item--theme">
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="navbar__toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`navbar__toggle-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
