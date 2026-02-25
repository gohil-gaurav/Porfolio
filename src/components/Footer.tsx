/**
 * Footer Component
 * Minimal, quiet footer with soft sign-off aesthetic
 */

import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';

const Footer = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  const isDark: boolean = theme === 'dark';
  const monoFont: string = "'JetBrains Mono', 'SF Mono', 'Fira Code', 'Consolas', monospace";
  const currentYear: number = new Date().getFullYear();

  return (
    <motion.footer 
      className="pt-12 md:pt-16"
      style={{ 
        background: 'var(--color-bg)'
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
          marginBottom: '24px'
        }}
      />

      {/* Footer content */}
      <div 
        className="container pb-8 md:pb-10"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        {/* Copyright */}
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

        {/* Built with */}
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
