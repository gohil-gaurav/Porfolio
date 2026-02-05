/**
 * Navbar Component
 * Modern floating command-bar style navigation with Tailwind CSS
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import avatarImg from '../assets/images/avatar.jpeg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDark, setIsDark] = useState(true);

  const navLinks = [
    { id: 'projects', label: 'Work' },
    { id: 'blog', label: 'Blog' },
    { id: 'about', label: 'About' }
  ];

  // Track theme changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.getAttribute('data-theme') !== 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    setIsDark(document.documentElement.getAttribute('data-theme') !== 'light');
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 60);
      
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    if (!prefersReducedMotion) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [lastScrollY]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
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
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Dynamic colors based on theme
  const colors = isDark ? {
    bg: isScrolled ? 'rgba(18, 18, 18, 0.8)' : 'rgba(18, 18, 18, 0.6)',
    border: 'rgba(255, 255, 255, 0.08)',
    text: 'rgba(255, 255, 255, 0.6)',
    textHover: 'rgba(255, 255, 255, 0.95)',
    btnBg: 'rgba(255, 255, 255, 0.06)',
    btnBgHover: 'rgba(255, 255, 255, 0.1)',
  } : {
    bg: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.75)',
    border: 'rgba(0, 0, 0, 0.08)',
    text: 'rgba(0, 0, 0, 0.55)',
    textHover: 'rgba(0, 0, 0, 0.9)',
    btnBg: 'rgba(0, 0, 0, 0.04)',
    btnBgHover: 'rgba(0, 0, 0, 0.08)',
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-300 ease-out px-6
        ${isScrolled ? 'py-3' : 'py-5'}
        ${!isVisible ? '-translate-y-full opacity-0' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className={`mx-auto transition-all duration-300 ${isScrolled ? 'max-w-[900px]' : 'max-w-full'}`}>
        <div 
          className={`flex items-center gap-2 transition-all duration-300
            backdrop-blur-[16px] backdrop-saturate-180
            ${isScrolled ? 'px-4 py-2 rounded-2xl' : 'px-6 py-3 rounded-none'}`}
          style={{
            background: colors.bg,
            border: `1px solid ${colors.border}`,
            boxShadow: isScrolled 
              ? '0 8px 32px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.2)'
              : '0 4px 24px rgba(0,0,0,0.25), 0 1px 2px rgba(0,0,0,0.15)'
          }}
        >
          {/* Left Section */}
          <div className="flex items-center gap-3">
            <motion.a 
              href="#" 
              className="flex shrink-0"
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Go to top"
            >
              <img 
                src={avatarImg} 
                alt="Gaurav" 
                className="w-8 h-8 rounded-full object-cover object-top grayscale opacity-90 transition-all duration-200 hover:opacity-100"
                style={{ border: `1px solid ${colors.border}` }}
              />
            </motion.a>

            <span 
              className="w-px h-5 hidden md:block" 
              style={{ background: colors.border }}
              aria-hidden="true"
            />

            <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`}
                    className="block px-3 py-1.5 font-mono text-[13px] font-medium no-underline rounded-lg transition-all duration-150"
                    style={{ color: colors.text }}
                    onMouseEnter={(e) => {
                      e.target.style.color = colors.textHover;
                      e.target.style.background = colors.btnBg;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = colors.text;
                      e.target.style.background = 'transparent';
                    }}
                    onClick={(e) => scrollToSection(e, link.id)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 min-w-5" aria-hidden="true" />

          {/* Right Section */}
          <div className="flex items-center gap-2">
            <button 
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg cursor-pointer transition-all duration-150"
              style={{ 
                background: colors.btnBg, 
                border: `1px solid ${colors.border}` 
              }}
              onMouseEnter={(e) => e.target.style.background = colors.btnBgHover}
              onMouseLeave={(e) => e.target.style.background = colors.btnBg}
              aria-label="Search"
              title="Search (Ctrl+K)"
            >
              <svg 
                className="w-3.5 h-3.5"
                style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)' }}
                viewBox="0 0 20 20" 
                fill="none"
              >
                <path 
                  d="M8.5 3a5.5 5.5 0 014.383 8.823l3.896 3.9a.75.75 0 01-1.06 1.06l-3.9-3.896A5.5 5.5 0 118.5 3zm0 1.5a4 4 0 100 8 4 4 0 000-8z" 
                  fill="currentColor"
                />
              </svg>
              <span className="hidden sm:flex items-center gap-0.5">
                <kbd 
                  className="inline-block px-1.5 py-0.5 font-mono text-[10px] font-medium rounded leading-none"
                  style={{ 
                    color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)',
                    background: colors.btnBg, 
                    border: `1px solid ${colors.border}` 
                  }}
                >Ctrl</kbd>
                <kbd 
                  className="inline-block px-1.5 py-0.5 font-mono text-[10px] font-medium rounded leading-none"
                  style={{ 
                    color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)',
                    background: colors.btnBg, 
                    border: `1px solid ${colors.border}` 
                  }}
                >K</kbd>
              </span>
            </button>

            <ThemeToggle />
          </div>

          {/* Mobile Toggle */}
          <button 
            className="hidden max-md:flex w-8 h-8 items-center justify-center rounded-lg cursor-pointer transition-all duration-150"
            style={{ background: colors.btnBg, border: `1px solid ${colors.border}` }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-3.5 h-3">
              <span 
                className={`absolute left-0 w-full h-[1.5px] rounded-sm transition-all duration-200 ${isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`}
                style={{ background: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)' }}
              />
              <span 
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1.5px] rounded-sm transition-all duration-200 ${isMenuOpen ? 'opacity-0' : ''}`}
                style={{ background: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)' }}
              />
              <span 
                className={`absolute left-0 w-full h-[1.5px] rounded-sm transition-all duration-200 ${isMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'}`}
                style={{ background: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)' }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden mt-2 mx-6 px-4 py-3 rounded-xl backdrop-blur-[16px]"
            style={{
              background: isDark ? 'rgba(18,18,18,0.95)' : 'rgba(255,255,255,0.95)',
              border: `1px solid ${colors.border}`,
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="list-none m-0 p-0">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a 
                    href={`#${link.id}`}
                    className="block px-4 py-3 font-mono text-sm font-medium no-underline rounded-lg transition-all duration-150"
                    style={{ color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)' }}
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
