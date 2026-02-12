/**
 * Contact / CTA Section
 * Minimal, centered call-to-action before the footer
 * Confident, calm, developer-portfolio tone
 */

import { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const monoFont = "'JetBrains Mono', 'SF Mono', 'Fira Code', 'Consolas', monospace";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      style={{
        background: 'var(--color-bg)',
        padding: '120px 24px',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          padding: '56px 48px',
          background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
          border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
          borderRadius: '12px',
          textAlign: 'center',
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
          ...(isHovered ? {
            borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.12)',
            boxShadow: isDark
              ? '0 0 40px rgba(255,255,255,0.02)'
              : '0 0 40px rgba(0,0,0,0.03)',
          } : {}),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Heading */}
        <h2
          style={{
            fontFamily: monoFont,
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            fontWeight: 500,
            color: isDark ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.75)',
            letterSpacing: '0.02em',
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          Hey, you scrolled this far — let's talk.
          <span
            style={{
              display: 'inline-block',
              width: '2px',
              height: '1.1em',
              background: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
              marginLeft: '4px',
              verticalAlign: 'text-bottom',
              animation: 'cursorBlink 1s steps(1) infinite',
            }}
          />
        </h2>

        {/* CTA Button */}
        <motion.a
          href="https://cal.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            marginTop: '40px',
            padding: '14px 28px',
            background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
            borderRadius: '8px',
            fontFamily: monoFont,
            fontSize: '13px',
            fontWeight: 500,
            color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
            textDecoration: 'none',
            cursor: 'pointer',
            letterSpacing: '0.02em',
            transition: 'background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = isDark
              ? 'rgba(255,255,255,0.08)'
              : 'rgba(0,0,0,0.06)';
            e.currentTarget.style.borderColor = isDark
              ? 'rgba(255,255,255,0.15)'
              : 'rgba(0,0,0,0.15)';
            e.currentTarget.style.boxShadow = isDark
              ? '0 4px 20px rgba(255,255,255,0.04)'
              : '0 4px 20px rgba(0,0,0,0.06)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = isDark
              ? 'rgba(255,255,255,0.05)'
              : 'rgba(0,0,0,0.04)';
            e.currentTarget.style.borderColor = isDark
              ? 'rgba(255,255,255,0.1)'
              : 'rgba(0,0,0,0.1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {/* Small avatar icon */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)'}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>

          Book a Free Call
        </motion.a>
      </motion.div>

      {/* Cursor blink keyframe */}
      <style>{`
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
