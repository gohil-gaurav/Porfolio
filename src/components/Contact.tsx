/**
 * Contact / CTA Section
 * Minimal, centered call-to-action before the footer
 * Confident, calm, developer-portfolio tone
 */

import { useContext, useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';

const Contact = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  const isDark: boolean = theme === 'dark';
  const monoFont: string = "'JetBrains Mono', 'SF Mono', 'Fira Code', 'Consolas', monospace";
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <section
      id="contact"
      className="py-32 md:py-40 lg:py-48 px-4"
      style={{
        background: 'var(--color-bg)',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh'
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-2xl w-full text-center"
        style={{
          background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
          border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
          borderRadius: '12px',
          padding: '48px 60px',
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
            fontWeight: 500,
            fontSize: '20px',
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
          className="inline-flex items-center gap-3"
          style={{
            background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
            borderRadius: '8px',
            fontFamily: monoFont,
            fontWeight: 500,
            fontSize: '16px',
            padding: '18px 40px',
            marginTop: '32px',
            color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
            textDecoration: 'none',
            cursor: 'pointer',
            letterSpacing: '0.02em',
            transition: 'background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
          }}
          onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => {
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
          onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => {
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
            width="22"
            height="22"
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
