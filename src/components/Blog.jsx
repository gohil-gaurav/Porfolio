/**
 * Blog Component
 * Premium blog preview section with intentional "coming soon" state
 */

import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';

// Upcoming blog post drafts
const upcomingPosts = [
  {
    id: 1,
    category: 'Data Science',
    title: 'Writing in Progress',
    description: 'Exploring data analysis techniques, machine learning fundamentals, and practical Python workflows.',
  },
  {
    id: 2,
    category: 'Backend',
    title: 'Writing in Progress',
    description: 'Thoughts on Django, APIs, database design, and building scalable backend systems.',
  },
  {
    id: 3,
    category: 'Web',
    title: 'Writing in Progress',
    description: 'Learnings from React, modern CSS, and creating clean user interfaces.',
  }
];

const Blog = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const monoFont = "'JetBrains Mono', 'SF Mono', 'Fira Code', 'Consolas', monospace";

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section 
      id="blog" 
      style={{ 
        background: isDark ? '#0f0f0f' : '#f5f5f5',
        padding: '100px 0'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <motion.div 
          style={{ marginBottom: '64px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Subtle label */}
          <p 
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
            [BLOG]
          </p>

          {/* Main title with underline */}
          <div style={{ marginBottom: '20px' }}>
            <h2 
              style={{ 
                fontFamily: monoFont,
                fontSize: '32px',
                fontWeight: 600,
                color: 'var(--color-text)',
                letterSpacing: '-0.02em',
                marginBottom: '8px',
                display: 'inline-block'
              }}
            >
              From the blog
            </h2>
            {/* Refined underline */}
            <div 
              style={{
                width: '80px',
                height: '1px',
                background: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)'
              }}
            />
          </div>

          {/* Subtitle */}
          <p 
            style={{ 
              fontSize: '15px',
              color: 'var(--color-text-muted)',
              maxWidth: '420px',
              lineHeight: 1.6
            }}
          >
            Thoughts, learnings, and things I'm working on writing about.
          </p>
        </motion.div>

        {/* Blog Cards Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
            marginBottom: '48px'
          }}
        >
          {upcomingPosts.map((post, index) => (
            <motion.article 
              key={post.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ 
                scale: 1.01,
                transition: { duration: 0.2 }
              }}
              style={{
                background: isDark ? '#141414' : '#ffffff',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)'}`,
                borderRadius: '2px',
                padding: '32px 28px',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.12)';
                e.currentTarget.style.background = isDark ? '#171717' : '#fefefe';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)';
                e.currentTarget.style.background = isDark ? '#141414' : '#ffffff';
              }}
            >
              {/* Category Label */}
              <span 
                style={{
                  fontFamily: monoFont,
                  fontSize: '10px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)',
                  marginBottom: '20px'
                }}
              >
                {post.category}
              </span>

              {/* Post Title */}
              <h3 
                style={{
                  fontFamily: monoFont,
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--color-text)',
                  marginBottom: '16px',
                  lineHeight: 1.3,
                  letterSpacing: '-0.01em'
                }}
              >
                {post.title}
              </h3>

              {/* Description */}
              <p 
                style={{
                  fontSize: '14px',
                  lineHeight: 1.7,
                  color: 'var(--color-text-muted)',
                  flex: 1,
                  marginBottom: '24px'
                }}
              >
                {post.description.length > 120 
                  ? post.description.slice(0, 120) + '...' 
                  : post.description}
              </p>

              {/* Status Badge */}
              <div style={{ marginTop: 'auto' }}>
                <span 
                  style={{
                    fontFamily: monoFont,
                    fontSize: '10px',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: '#d97706',
                    background: 'rgba(217, 119, 6, 0.1)',
                    padding: '5px 10px',
                    borderRadius: '0'
                  }}
                >
                  Coming Soon
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footer Message */}
        <motion.p 
          style={{
            textAlign: 'center',
            fontFamily: monoFont,
            fontSize: '12px',
            color: isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.35)',
            letterSpacing: '0.02em'
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Writing in progress — thoughts coming soon.
        </motion.p>
      </div>
    </section>
  );
};

export default Blog;
