/**
 * About Component
 * Personal introduction with minimal, developer-focused aesthetic
 */

import { useContext, MouseEvent } from 'react';
import { motion, Variants } from 'framer-motion';
import { ThemeContext } from '../App';
import avatarImg from '../assets/images/avatar.jpeg';

interface Skill {
  name: string;
  letter: string;
  icon: string;
}

// Skills - simplified icons (monochrome)
const skills: Skill[] = [
  { name: 'Python', letter: 'Py', icon: '🐍' },
  { name: 'NumPy', letter: 'Np', icon: '🔢' },
  { name: 'Pandas', letter: 'Pd', icon: '🐼' },
  { name: 'Django', letter: 'Dj', icon: '🎸' },
  { name: 'React', letter: 'Re', icon: '⚛️' },
  { name: 'JavaScript', letter: 'Js', icon: '⚡' },
  { name: 'Git', letter: 'Gt', icon: '📦' },
  { name: 'C', letter: 'C', icon: '©️' }
];

const About = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  const isDark: boolean = theme === 'dark';
  const monoFont: string = "'JetBrains Mono', 'SF Mono', 'Fira Code', 'Consolas', monospace";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
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
      className="py-20 md:py-24 lg:py-28"
      style={{ 
        background: 'var(--color-bg)',
        position: 'relative',
        zIndex: 1
      }}
    >
      <div className="container">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12 md:gap-16 lg:gap-20 items-start justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{ maxWidth: '1000px', margin: '0 auto' }}
        >
          {/* Left - Avatar */}
          <motion.div variants={itemVariants} className="flex justify-center md:justify-start" style={{ paddingTop: '24px' }}>
            <div 
              className="w-56 h-64 md:w-[240px] md:h-[280px]"
              style={{
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
                  objectPosition: 'center top',
                  filter: 'grayscale(0%)',
                  opacity: 1,
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e: MouseEvent<HTMLImageElement>) => {
                  e.currentTarget.style.filter = 'grayscale(0%)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e: MouseEvent<HTMLImageElement>) => {
                  e.currentTarget.style.filter = 'grayscale(0%)';
                  e.currentTarget.style.opacity = '1';
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
              className="text-2xl md:text-3xl"
              style={{
                fontFamily: monoFont,
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
                {skills.map((skill: Skill, index: number) => (
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
                      fontSize: '12px',
                      fontWeight: 500,
                      color: isDark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)',
                      background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                      padding: '10px 14px',
                      borderRadius: '0',
                      cursor: 'default',
                      transition: 'all 0.2s ease',
                      border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                    onMouseEnter={(e: MouseEvent<HTMLDivElement>) => {
                      e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.1)';
                      e.currentTarget.style.color = isDark ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)';
                    }}
                    onMouseLeave={(e: MouseEvent<HTMLDivElement>) => {
                      e.currentTarget.style.background = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)';
                      e.currentTarget.style.color = isDark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)';
                    }}
                  >
                    <span style={{ fontSize: '16px', lineHeight: 1, opacity: 1 }}>{skill.icon}</span>
                    <span>{skill.name}</span>
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
