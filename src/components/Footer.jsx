/**
 * Footer Component
 * Minimal text-based footer with animations
 */

import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="footer__inner container">
        {/* Left - Copyright */}
        <p className="footer__copyright">
          © {currentYear} Gaurav. All rights reserved.
        </p>

        {/* Right - Built with */}
        <p className="footer__credit">
          Built with <span className="footer__tech">React</span> &amp; <span className="footer__tech">Framer Motion</span>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
