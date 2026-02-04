/**
 * Navbar Component
 * Modern floating command-bar style navigation
 * 
 * Scroll Behavior:
 * - At top: Full-width, spacious navbar
 * - On scroll (>60px): Compact floating pill navbar
 * - Smooth CSS transitions between states
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import avatarImg from '../assets/images/avatar.jpeg';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false); // NEW: Track scroll state
  const [lastScrollY, setLastScrollY] = useState(0);

  // Navigation links
  const navLinks = [
    { id: 'projects', label: 'Work' },
    { id: 'blog', label: 'Blog' },
    { id: 'about', label: 'About' }
  ];

  // Handle scroll: visibility + compact state
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Compact state threshold (60px scroll)
      const scrollThreshold = 60;
      setIsScrolled(currentScrollY > scrollThreshold);
      
      // Visibility logic (hide on scroll down, show on scroll up)
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false); // Scrolling down past 200px
      } else {
        setIsVisible(true); // Scrolling up
      }
      
      setLastScrollY(currentScrollY);
    };

    // Only add listener if motion is allowed
    if (!prefersReducedMotion) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY]);

  // Handle Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Could trigger search modal here
        console.log('Search triggered');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      className={`cmdbar ${isScrolled ? 'cmdbar--compact' : ''} ${!isVisible ? 'cmdbar--hidden' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="cmdbar__container">
        <div className="cmdbar__inner">
          
          {/* Left Section: Avatar + Links */}
          <div className="cmdbar__left">
            {/* Avatar Logo */}
            <motion.a 
              href="#" 
              className="cmdbar__avatar-link"
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Go to top"
            >
              <img 
                src={avatarImg} 
                alt="Gaurav" 
                className="cmdbar__avatar"
              />
            </motion.a>

            {/* Divider */}
            <span className="cmdbar__divider" aria-hidden="true"></span>

            {/* Navigation Links */}
            <ul className="cmdbar__nav">
              {navLinks.map((link) => (
                <li key={link.id} className="cmdbar__nav-item">
                  <a 
                    href={`#${link.id}`}
                    className="cmdbar__nav-link"
                    onClick={(e) => scrollToSection(e, link.id)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Spacer */}
          <div className="cmdbar__spacer" aria-hidden="true"></div>

          {/* Right Section: Search + Theme */}
          <div className="cmdbar__right">
            {/* Search Button */}
            <button 
              className="cmdbar__search"
              aria-label="Search"
              title="Search (Ctrl+K)"
            >
              <svg 
                className="cmdbar__search-icon" 
                viewBox="0 0 20 20" 
                fill="none"
                aria-hidden="true"
              >
                <path 
                  d="M8.5 3a5.5 5.5 0 014.383 8.823l3.896 3.9a.75.75 0 01-1.06 1.06l-3.9-3.896A5.5 5.5 0 118.5 3zm0 1.5a4 4 0 100 8 4 4 0 000-8z" 
                  fill="currentColor"
                />
              </svg>
              <span className="cmdbar__search-kbd">
                <kbd>Ctrl</kbd>
                <kbd>K</kbd>
              </span>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Toggle */}
          <button 
            className="cmdbar__toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`cmdbar__toggle-icon ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="cmdbar__mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="cmdbar__mobile-nav">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a 
                    href={`#${link.id}`}
                    className="cmdbar__mobile-link"
                    onClick={(e) => scrollToSection(e, link.id)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
