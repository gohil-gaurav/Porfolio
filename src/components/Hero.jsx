/**
 * Hero Component
 * Minimal, clean, developer-focused landing section
 */

import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  const monoFont = "'JetBrains Mono', 'SF Mono', 'Fira Code', 'Consolas', monospace";

  // Terminal styling - pure black, minimal
  const terminal = {
    bg: isDark ? '#0a0a0a' : '#ffffff',
    headerBg: isDark ? '#111111' : '#f8f8f8',
    border: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.1)',
    text: isDark ? '#e5e5e5' : '#1a1a1a',
    muted: isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)',
    prompt: isDark ? '#6ee7b7' : '#555555',
    command: isDark ? '#f5f5f5' : '#1a1a1a',
    output: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.55)',
    shadow: isDark 
      ? '0 4px 24px rgba(0, 0, 0, 0.3)'
      : '0 4px 20px rgba(0, 0, 0, 0.08)',
    controls: isDark 
      ? { close: '#3a3a3a', minimize: '#3a3a3a', maximize: '#3a3a3a' }
      : { close: '#d4d4d4', minimize: '#d4d4d4', maximize: '#d4d4d4' }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
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

  // Terminal content
  const terminalLines = [
    { command: 'whoami', output: 'Gaurav' },
    { command: 'cat skills.txt', output: ['Python, Pandas, NumPy', 'Django, React, Git'] },
    { command: 'echo $STATUS', output: 'Open to opportunities' },
    { command: '', cursor: true }
  ];

  return (
    <section 
      className="min-h-screen flex items-center"
      style={{ 
        background: 'var(--color-bg)',
        paddingTop: '80px'
      }}
    >
      <div className="container">
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 items-center"
          style={{ 
            gap: '80px',
            padding: '60px 0'
          }}
        >
          {/* Left Side - Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ maxWidth: '520px' }}
          >
            {/* Greeting */}
            <motion.p 
              variants={itemVariants}
              style={{ 
                fontFamily: monoFont,
                fontSize: '20px',
                color: 'var(--color-text-muted)',
                marginBottom: '12px',
                letterSpacing: '0.02em'
              }}
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1 
              variants={itemVariants}
              style={{ 
                fontFamily: monoFont,
                fontSize: '52px',
                fontWeight: 700,
                color: 'var(--color-text)',
                marginBottom: '16px',
                lineHeight: 1.1,
                letterSpacing: '-0.02em'
              }}
            >
              Gaurav
            </motion.h1>

            {/* Role */}
            <motion.p 
              variants={itemVariants}
              style={{ 
                fontFamily: monoFont,
                fontSize: '16px',
                color: 'var(--color-text-secondary)',
                marginBottom: '24px',
                letterSpacing: '0.01em'
              }}
            >
              Data Scientist & Backend Developer
            </motion.p>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              style={{ 
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'var(--color-text-muted)',
                marginBottom: '32px',
                maxWidth: '440px'
              }}
            >
              Passionate about turning data into insights and building 
              scalable backend solutions. I specialize in Python, Data Scientist, 
              and Web Technologies.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              variants={itemVariants}
              style={{ 
                display: 'flex',
                gap: '12px',
                marginBottom: '32px'
              }}
            >
              {/* Primary Button */}
              <motion.a 
                href="#projects"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  fontFamily: monoFont,
                  fontSize: '13px',
                  padding: '12px 24px',
                  background: isDark ? '#ffffff' : '#171717',
                  color: isDark ? '#171717' : '#ffffff',
                  borderRadius: '0',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontWeight: 500,
                  transition: 'all 0.2s ease'
                }}
              >
                View Projects
                <span style={{ fontSize: '14px' }}>→</span>
              </motion.a>

              {/* Secondary Button */}
              <motion.a 
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  fontFamily: monoFont,
                  fontSize: '13px',
                  padding: '12px 24px',
                  background: 'transparent',
                  color: 'var(--color-text)',
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}`,
                  borderRadius: '0',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  fontWeight: 500,
                  transition: 'all 0.2s ease'
                }}
              >
                Get in Touch
              </motion.a>
            </motion.div>

            {/* Status Badge */}
            <motion.div 
              variants={itemVariants}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span 
                style={{ 
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#4ade80'
                }}
              />
              <span 
                style={{ 
                  fontFamily: monoFont,
                  fontSize: '11px',
                  color: 'var(--color-text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}
              >
                Available for opportunities
              </span>
            </motion.div>
          </motion.div>

          {/* Right Side - Terminal */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div 
              style={{
                background: terminal.bg,
                border: `1px solid ${terminal.border}`,
                borderRadius: '0',
                boxShadow: terminal.shadow,
                overflow: 'hidden',
                width: '380px',
                height: '400px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Terminal Header */}
              <div 
                style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  padding: '14px 16px',
                  background: terminal.headerBg,
                  borderBottom: `1px solid ${terminal.border}`
                }}
              >
                {/* Window Controls */}
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ 
                    width: '10px', 
                    height: '10px', 
                    borderRadius: '50%',
                    background: terminal.controls.close 
                  }} />
                  <span style={{ 
                    width: '10px', 
                    height: '10px', 
                    borderRadius: '50%',
                    background: terminal.controls.minimize 
                  }} />
                  <span style={{ 
                    width: '10px', 
                    height: '10px', 
                    borderRadius: '50%',
                    background: terminal.controls.maximize 
                  }} />
                </div>
                {/* Title */}
                <span 
                  style={{ 
                    flex: 1,
                    textAlign: 'center',
                    fontFamily: monoFont,
                    fontSize: '11px',
                    color: terminal.muted,
                    letterSpacing: '0.05em'
                  }}
                >
                  terminal
                </span>
                <div style={{ width: '42px' }} />
              </div>

              {/* Terminal Body */}
              <div 
                style={{ 
                  flex: 1,
                  padding: '24px',
                  fontFamily: monoFont,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around'
                }}
              >
                {terminalLines.map((line, index) => (
                  <div key={index}>
                    {/* Command */}
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '8px',
                      fontSize: '13px'
                    }}>
                      <span style={{ color: terminal.prompt }}>$</span>
                      <span style={{ color: terminal.command }}>{line.command}</span>
                      {line.cursor && (
                        <span 
                          style={{ 
                            color: terminal.command,
                            animation: 'blink 1s step-end infinite'
                          }}
                        >_</span>
                      )}
                    </div>
                    {/* Output */}
                    {line.output && (
                      <div 
                        style={{ 
                          marginTop: '6px',
                          marginLeft: '20px',
                          fontSize: '13px',
                          color: terminal.output,
                          lineHeight: 1.6
                        }}
                      >
                        {Array.isArray(line.output) 
                          ? line.output.map((text, i) => <div key={i}>{text}</div>)
                          : line.output
                        }
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
