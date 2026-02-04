/**
 * Hero Component
 * Main landing section with introduction and brand illustration
 */

import { motion } from 'framer-motion';
import avatarImg from '../assets/images/avatar.jpeg';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const illustrationVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, delay: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section className="hero">
      <div className="hero__inner container">
        {/* Text Content */}
        <motion.div 
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.h1 className="hero__title" variants={itemVariants}>
            <span className="hero__greeting">Hello.</span>
            <br />
            <span className="hero__name">I'm Gaurav.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p className="hero__subtitle" variants={itemVariants}>
            Aspiring Data Scientist &amp; Python Backend Developer.
            <br />
            I work with Python, Data Analysis, and Web Technologies.
          </motion.p>

          {/* CTA Button */}
          <motion.div className="hero__actions" variants={itemVariants}>
            <motion.a 
              href="#projects" 
              className="btn btn-primary"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
              <span className="hero__arrow">→</span>
            </motion.a>
          </motion.div>

          {/* Status indicator */}
          <motion.div className="hero__status" variants={itemVariants}>
            <span className="hero__status-dot"></span>
            <span className="hero__status-text mono">Available for opportunities</span>
          </motion.div>
        </motion.div>

        {/* Illustration Visual */}
        <motion.div 
          className="hero__visual"
          variants={illustrationVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero__illustration">
            <img 
              src={avatarImg} 
              alt="Gaurav - Illustration portrait" 
              className="hero__portrait"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
