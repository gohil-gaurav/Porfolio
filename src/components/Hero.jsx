/**
 * Hero Component
 * Main landing section with introduction and avatar
 */

import { motion } from 'framer-motion';
import avatarImg from '../assets/images/avatar.jpeg';

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
    <section 
      className="min-h-screen flex items-center pt-20"
      style={{ borderBottom: '1px solid var(--color-border)' }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-16">
          {/* Text Content */}
          <motion.div 
            className="max-w-xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Heading */}
            <motion.h1 
              className="mb-6"
              variants={itemVariants}
            >
              <span style={{ color: 'var(--color-text-muted)' }}>Hello.</span>
              <br />
              <span style={{ color: 'var(--color-text)' }}>I'm Gaurav.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-lg lg:text-xl leading-relaxed mb-8"
              style={{ color: 'var(--color-text-secondary)' }}
              variants={itemVariants}
            >
              Aspiring Data Scientist &amp; Python Backend Developer.
              <br />
              I work with Python, Data Analysis, and Web Technologies.
            </motion.p>

            {/* CTA Button */}
            <motion.div className="mb-10" variants={itemVariants}>
              <motion.a 
                href="#projects" 
                className="btn btn-primary"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
                <span>→</span>
              </motion.a>
            </motion.div>

            {/* Status indicator */}
            <motion.div 
              className="inline-flex items-center gap-3 px-4 py-2.5"
              style={{ 
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)'
              }}
              variants={itemVariants}
            >
              <span 
                className="w-2 h-2 rounded-full"
                style={{ 
                  background: 'var(--color-text)',
                  animation: 'pulse 2s ease-in-out infinite'
                }}
              />
              <span 
                className="mono text-xs uppercase tracking-widest"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Available for opportunities
              </span>
            </motion.div>
          </motion.div>

          {/* Avatar Visual */}
          <motion.div 
            className="flex justify-center lg:justify-end items-center order-first lg:order-last"
            variants={illustrationVariants}
            initial="hidden"
            animate="visible"
          >
            <div 
              className="relative w-64 h-64 lg:w-80 lg:h-80 p-4"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)'
              }}
            >
              <img 
                src={avatarImg} 
                alt="Gaurav - Portrait" 
                className="w-full h-full object-cover grayscale opacity-90"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
