/**
 * Blog Component
 * Blog preview section - Currently in "Coming Soon" state
 */

import { motion } from 'framer-motion';

// Placeholder topics for upcoming blog posts
const upcomingTopics = [
  {
    id: 1,
    filename: 'draft-01.md',
    topic: 'Data Science',
    title: 'Writing in Progress',
    description: 'Exploring data analysis techniques, machine learning fundamentals, and practical Python workflows.',
  },
  {
    id: 2,
    filename: 'draft-02.md',
    topic: 'Backend Development',
    title: 'Writing in Progress',
    description: 'Thoughts on Django, APIs, database design, and building scalable backend systems.',
  },
  {
    id: 3,
    filename: 'draft-03.md',
    topic: 'Web Technologies',
    title: 'Writing in Progress',
    description: 'Learnings from React, modern CSS, and creating clean user interfaces.',
  }
];

const Blog = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
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
      className="section"
      style={{ 
        background: 'var(--color-bg-alt)',
        borderTop: '1px solid var(--color-border)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">[Blog]</span>
          <h2 className="section-title">From the blog</h2>
          <p className="section-description">
            Thoughts, learnings, and things I plan to write about.
          </p>
        </motion.div>

        {/* Placeholder Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {upcomingTopics.map((topic, index) => (
            <motion.article 
              key={topic.id} 
              className="card flex flex-col opacity-60 hover:opacity-75 transition-opacity duration-200"
              style={{ 
                background: 'var(--color-surface)',
                borderColor: 'var(--color-border)'
              }}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, margin: '-50px' }}
            >
              {/* Window Header */}
              <div className="window-header">
                <div className="window-dots">
                  <span className="window-dot"></span>
                  <span className="window-dot"></span>
                  <span className="window-dot"></span>
                </div>
                <span className="window-filename">{topic.filename}</span>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col">
                <span 
                  className="mono text-xs uppercase tracking-widest mb-3"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {topic.topic}
                </span>

                <h3 
                  className="text-base font-semibold mb-2 leading-snug"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {topic.title}
                </h3>
                <p 
                  className="text-sm leading-relaxed mb-5 flex-1 line-clamp-3"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {topic.description}
                </p>

                {/* Status Badge */}
                <div 
                  className="mt-auto pt-4"
                  style={{ borderTop: '1px solid var(--color-border)' }}
                >
                  <span className="status-badge" data-status="pending">
                    Coming Soon
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footer Note */}
        <motion.p 
          className="text-center mono text-sm"
          style={{ color: 'var(--color-text-muted)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          First post coming soon.
        </motion.p>
      </div>
    </section>
  );
};

export default Blog;
