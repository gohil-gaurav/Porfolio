/**
 * QuickLinks Component
 * Horizontal boxed navigation links with animations
 */

import { motion } from 'framer-motion';
import './QuickLinks.css';

const QuickLinks = () => {
  // Quick link items
  const links = [
    { id: 'skills', label: 'Skills', icon: '⚡', description: 'Technical stack' },
    { id: 'projects', label: 'Projects', icon: '💻', description: 'View my work' },
    { id: 'blog', label: 'Blog', icon: '📝', description: 'Read my articles' },
    { id: 'contact', label: 'Contact', icon: '📧', description: 'Get in touch' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };

  return (
    <section className="quicklinks">
      <div className="quicklinks__inner container">
        <motion.div 
          className="quicklinks__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {links.map((link) => (
            <motion.a 
              key={link.id} 
              href={`#${link.id}`} 
              className="quicklinks__item"
              variants={itemVariants}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.2 }
              }}
            >
              <div className="quicklinks__header">
                <span className="quicklinks__icon">{link.icon}</span>
                <motion.span 
                  className="quicklinks__arrow"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
              </div>
              <h3 className="quicklinks__label">{link.label}</h3>
              <p className="quicklinks__desc">{link.description}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickLinks;
