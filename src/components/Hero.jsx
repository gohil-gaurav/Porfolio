/**
 * Hero Component
 * Developer-focused landing section with terminal card
 */

import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  // Terminal styling based on theme
  const terminal = {
    bg: isDark ? 'rgba(22, 24, 28, 0.9)' : 'rgba(255, 255, 255, 0.95)',
    headerBg: isDark ? 'rgba(30, 32, 38, 0.95)' : 'rgba(245, 245, 247, 0.95)',
    border: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.08)',
    text: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
    muted: isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)',
    prompt: isDark ? '#22c55e' : '#16a34a',
    command: isDark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.85)',
    output: isDark ? 'rgba(255, 255, 255, 0.55)' : 'rgba(0, 0, 0, 0.55)',
    shadow: isDark 
      ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2)'
      : '0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)'
  };

  const monoFont = "'JetBrains Mono', 'SF Mono', 'Fira Code', 'Consolas', monospace";

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

  const terminalVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.6, delay: 0.4, ease: 'easeOut' }
    }
  };

  // Terminal lines data
  const terminalLines = [
    { prompt: '~', command: 'whoami', output: 'gaurav' },
    { prompt: '~', command: 'cat skills.txt', output: 'Python, Pandas, NumPy, Django, React, Git' },
    { prompt: '~', command: 'echo $STATUS', output: 'Learning & Building' },
    { prompt: '~', command: '', output: null, cursor: true }
  ];

  return (
    <section 
      className="min-h-screen flex items-center pt-20"
      style={{ borderBottom: '1px solid var(--color-border)' }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-12 lg:py-16">
          {/* Text Content - Left */}
          <motion.div 
            className="max-w-xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Heading */}
            <motion.h1 
              className="mb-8"
              variants={itemVariants}
              style={{ lineHeight: 1.1 }}
            >
              <span 
                className="block text-2xl lg:text-3xl font-normal mb-2"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Hello.
              </span>
              <span 
                className="block text-5xl lg:text-6xl font-semibold"
                style={{ color: 'var(--color-text)' }}
              >
                I'm Gaurav.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-lg lg:text-xl leading-relaxed mb-10"
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
                background: 'var(--color-surface)',
                borderRadius: '6px'
              }}
              variants={itemVariants}
            >
              <span 
                className="w-2 h-2 rounded-full"
                style={{ 
                  background: '#22c55e',
                  boxShadow: '0 0 8px rgba(34, 197, 94, 0.4)'
                }}
              />
              <span 
                className="text-xs uppercase tracking-widest"
                style={{ 
                  color: 'var(--color-text-muted)',
                  fontFamily: monoFont
                }}
              >
                Available for opportunities
              </span>
            </motion.div>
          </motion.div>

          {/* Terminal Card - Right */}
          <motion.div 
            className="flex justify-center lg:justify-end items-center order-first lg:order-last"
            variants={terminalVariants}
            initial="hidden"
            animate="visible"
          >
            <div 
              className="w-full max-w-md lg:max-w-lg transition-all duration-300"
              style={{
                background: terminal.bg,
                border: `1px solid ${terminal.border}`,
                borderRadius: '12px',
                boxShadow: terminal.shadow,
                overflow: 'hidden'
              }}
            >
              {/* Terminal Header */}
              <div 
                className="flex items-center gap-2 px-4 py-3"
                style={{ 
                  background: terminal.headerBg,
                  borderBottom: `1px solid ${terminal.border}`
                }}
              >
                {/* Window controls */}
                <div className="flex items-center gap-1.5">
                  <span 
                    className="w-3 h-3 rounded-full"
                    style={{ background: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)' }}
                  />
                  <span 
                    className="w-3 h-3 rounded-full"
                    style={{ background: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)' }}
                  />
                  <span 
                    className="w-3 h-3 rounded-full"
                    style={{ background: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)' }}
                  />
                </div>
                {/* Terminal title */}
                <span 
                  className="flex-1 text-center text-xs"
                  style={{ 
                    color: terminal.muted,
                    fontFamily: monoFont
                  }}
                >
                  terminal
                </span>
                <div className="w-12" /> {/* Spacer for balance */}
              </div>

              {/* Terminal Body */}
              <div 
                className="p-5 space-y-3"
                style={{ fontFamily: monoFont }}
              >
                {terminalLines.map((line, index) => (
                  <div key={index} className="space-y-1">
                    {/* Command line */}
                    <div className="flex items-center gap-2 text-sm">
                      <span style={{ color: terminal.prompt }}>❯</span>
                      <span style={{ color: terminal.muted }}>{line.prompt}</span>
                      <span style={{ color: terminal.command }}>{line.command}</span>
                      {line.cursor && (
                        <span 
                          className="w-2 h-4 inline-block"
                          style={{ 
                            background: terminal.prompt,
                            animation: 'pulse 1.2s ease-in-out infinite'
                          }}
                        />
                      )}
                    </div>
                    {/* Output */}
                    {line.output && (
                      <div 
                        className="text-sm pl-6"
                        style={{ color: terminal.output }}
                      >
                        {line.output}
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
