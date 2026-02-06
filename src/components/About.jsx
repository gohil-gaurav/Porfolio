/**
 * About Component
 * Personal introduction with minimal, developer-focused aesthetic
 */

import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';
import avatarImg from '../assets/images/avatar.jpeg';

// Skills - simplified icons (monochrome)
const skills = [
  { name: 'Python', letter: 'Py' },
  { name: 'NumPy', letter: 'Np' },
  { name: 'Pandas', letter: 'Pd' },
  { name: 'Django', letter: 'Dj' },
  { name: 'React', letter: 'Re' },
  { name: 'JavaScript', letter: 'Js' },
  { name: 'Git', letter: 'Gt' },
  { name: 'C', letter: 'C' }
];

const About = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const monoFont = "'JetBrains Mono', 'SF Mono', 'Fira Code', 'Consolas', monospace";

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
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section 
      id="about" 
      style={{ 
        background: 'var(--color-bg)',
        padding: '120px 0'
      }}
    >
      <div className="container">
        <motion.div 
          style={{
            display: 'grid',
            gridTemplateColumns: '220px 1fr',
            gap: '80px',
            alignItems: 'start'
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Left - Avatar */}
          <motion.div variants={itemVariants}>
            <div 
              style={{
                width: '200px',
                height: '240px',
                overflow: 'hidden',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                borderRadius: '4px'
              }}
            >
              <img 
                src={avatarImg} 
                alt="Gaurav" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(100%)',
                  opacity: 0.9,
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'grayscale(0%)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'grayscale(100%)';
                  e.currentTarget.style.opacity = '0.9';
                }}
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <div style={{ paddingTop: '8px' }}>
            {/* Subtle label */}
            <motion.p 
              variants={itemVariants}
              style={{
                fontFamily: monoFont,
                fontSize: '11px',
                color: 'var(--color-text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '12px',
                opacity: 0.6
              }}
            >
              [ABOUT]
            </motion.p>
            
            {/* Main headline */}
            <motion.h2 
              variants={itemVariants}
              style={{
                fontFamily: monoFont,
                fontSize: '32px',
                fontWeight: 600,
                color: 'var(--color-text)',
                letterSpacing: '-0.02em',
                marginBottom: '8px'
              }}
            >
              About Me
            </motion.h2>
            
            {/* Name - smaller, lighter */}
            <motion.p 
              variants={itemVariants}
              style={{
                fontFamily: monoFont,
                fontSize: '14px',
                fontWeight: 400,
                color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)',
                marginBottom: '32px'
              }}
            >
              Gaurav
            </motion.p>
            
            {/* Description - concise, confident */}
            <motion.div variants={itemVariants}>
              <p 
                style={{
                  fontSize: '15px',
                  lineHeight: 1.8,
                  color: 'var(--color-text-muted)',
                  marginBottom: '12px',
                  maxWidth: '480px'
                }}
              >
                Data Scientist and Backend Developer focused on building 
                clean, efficient solutions.
              </p>
              <p 
                style={{
                  fontSize: '15px',
                  lineHeight: 1.8,
                  color: 'var(--color-text-muted)',
                  marginBottom: '12px',
                  maxWidth: '480px'
                }}
              >
                I work with Python, machine learning, and modern web technologies.
              </p>
              <p 
                style={{
                  fontSize: '15px',
                  lineHeight: 1.8,
                  color: 'var(--color-text-muted)',
                  maxWidth: '480px'
                }}
              >
                Currently learning, building, and sharing what I create.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div 
              variants={itemVariants}
              style={{ marginTop: '48px' }}
            >
              <p 
                style={{
                  fontFamily: monoFont,
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.35)',
                  marginBottom: '16px'
                }}
              >
                Skills
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name}
                    title={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ 
                      opacity: 1,
                      scale: 1.05
                    }}
                    style={{
                      fontFamily: monoFont,
                      fontSize: '11px',
                      fontWeight: 500,
                      color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
                      background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                      padding: '8px 12px',
                      borderRadius: '0',
                      cursor: 'default',
                      transition: 'all 0.2s ease',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
                      e.currentTarget.style.color = isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)';
                      e.currentTarget.style.color = isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)';
                    }}
                  >
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
