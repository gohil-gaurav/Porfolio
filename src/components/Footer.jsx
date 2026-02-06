/**
 * Footer Component
 * Minimal, quiet footer with soft sign-off aesthetic
 */

import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const monoFont = "'JetBrains Mono', 'SF Mono', 'Fira Code', 'Consolas', monospace";
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      style={{ 
        background: 'var(--color-bg)',
        paddingTop: '48px'
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Thin divider */}
      <div 
        style={{
          height: '1px',
          background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
          marginBottom: '32px'
        }}
      />

      {/* Footer content */}
      <div 
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: '32px'
        }}
      >
        {/* Left - Copyright */}
        <p 
          style={{
            fontFamily: monoFont,
            fontSize: '11px',
            color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
            letterSpacing: '0.02em'
          }}
        >
          © {currentYear} Gaurav
        </p>

        {/* Right - Built with */}
        <p 
          style={{
            fontFamily: monoFont,
            fontSize: '11px',
            color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)',
            letterSpacing: '0.02em'
          }}
        >
          Built with React & Framer Motion
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
