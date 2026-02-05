/**
 * Footer Component
 * Minimal text-based footer with animations
 */

import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="py-8"
      style={{ 
        borderTop: '1px solid var(--color-border)',
        background: 'var(--color-bg)'
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex flex-col sm:flex-row justify-between items-center flex-wrap gap-4">
        {/* Left - Copyright */}
        <p 
          className="font-mono text-xs"
          style={{ color: 'var(--color-text-muted)' }}
        >
          © {currentYear} Gaurav. All rights reserved.
        </p>

        {/* Right - Built with */}
        <p 
          className="font-mono text-xs"
          style={{ color: 'var(--color-text-muted)' }}
        >
          Built with{' '}
          <span style={{ color: 'var(--color-text-secondary)' }}>React</span>
          {' '}&amp;{' '}
          <span style={{ color: 'var(--color-text-secondary)' }}>Framer Motion</span>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
