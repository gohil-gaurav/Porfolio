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

  // Terminal styling - minimal, clean aesthetic
  const terminal = {
    // Dark: deep black | Light: pure white
    bg: isDark ? '#000000' : '#ffffff',
    headerBg: isDark ? '#0a0a0a' : '#fafafa',
    // Dark: subtle border | Light: thin gray outline
    border: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.18)',
    // Soft off-white in dark, dark gray in light
    text: isDark ? '#e5e5e5' : '#1a1a1a',
    // Muted colors for secondary text
    muted: isDark ? 'rgba(255, 255, 255, 0.35)' : 'rgba(0, 0, 0, 0.4)',
    // Prompt: muted green (dark) / neutral gray (light)
    prompt: isDark ? '#4ade80' : '#666666',
    // Commands: clear readable text
    command: isDark ? '#f5f5f5' : '#1a1a1a',
    // Output: dimmer than commands
    output: isDark ? 'rgba(255, 255, 255, 0.55)' : 'rgba(0, 0, 0, 0.6)',
    // Soft shadow (not heavy glow)
    shadow: isDark 
      ? '0 4px 20px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)'
      : '0 4px 24px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.06)',
    // Window controls: muted gray in both modes (like reference)
    controls: isDark 
      ? { close: '#4a4a4a', minimize: '#4a4a4a', maximize: '#4a4a4a' }
      : { close: '#c0c0c0', minimize: '#c0c0c0', maximize: '#c0c0c0' }
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

  // Terminal lines data - clean commands
  const terminalLines = [
    { command: 'whoami', output: 'gaurav' },
    { command: 'cat skills.txt', output: ['Python, Pandas, NumPy', 'Django, React, Git'] },
    { command: 'echo $STATUS', output: 'Learning & Building' },
    { command: '', cursor: true }
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
              className="transition-all duration-300 flex flex-col"
              style={{
                background: terminal.bg,
                border: `1px solid ${terminal.border}`,
                borderRadius: '2px',
                boxShadow: terminal.shadow,
                overflow: 'hidden',
                width: '360px',
                height: '370px'
              }}
            >
              {/* Terminal Header - thin, minimal */}
              <div 
                className="flex items-center px-4 py-5"
                style={{ 
                  background: terminal.headerBg,
                  borderBottom: `1px solid ${terminal.border}`
                }}
              >
                {/* Window controls - small gray dots */}
                <div className="flex items-center gap-1.5">
                  <span 
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: terminal.controls.close }}
                  />
                  <span 
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: terminal.controls.minimize }}
                  />
                  <span 
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: terminal.controls.maximize }}
                  />
                </div>
                {/* Terminal title - centered */}
                <span 
                  className="flex-1 text-center text-[11px]"
                  style={{ 
                    color: terminal.muted,
                    fontFamily: monoFont,
                    letterSpacing: '0.08em'
                  }}
                >
                  terminal
                </span>
                <div className="w-16" /> {/* Spacer for balance */}
              </div>

              {/* Terminal Body */}
              <div 
                className="px-8 py-6 flex-1 flex flex-col"
                style={{ fontFamily: monoFont }}
              >
                <div className="flex-1 flex flex-col justify-around">
                  {terminalLines.map((line, index) => (
                    <div key={index}>
                      {/* Command line */}
                      <div 
                        className="flex items-center gap-2"
                        style={{ 
                          fontSize: '13px',
                          lineHeight: '1.6'
                        }}
                      >
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
                      {/* Output - dimmer than command, indented */}
                      {line.output && (
                        <div 
                          className="mt-2"
                          style={{ 
                            color: terminal.output,
                            fontSize: '13px',
                            lineHeight: '1.8',
                            marginLeft: '24px'
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
