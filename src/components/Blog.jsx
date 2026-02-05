/**
 * Blog Component
 * Blog preview section - Currently in "Coming Soon" state
 * 
 * Design Intent:
 * - Shows the section is planned and intentional
 * - Communicates future content without looking incomplete
 * - Uses ghost-style placeholder cards
 */

import { motion } from 'framer-motion';
import './Blog.css';

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
    <section id="blog" className="blog section">
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
          <p className="blog__subtitle">
            Thoughts, learnings, and things I plan to write about.
          </p>
        </motion.div>

        {/* Placeholder Blog Grid */}
        <div className="blog__grid">
          {upcomingTopics.map((topic, index) => (
            <motion.article 
              key={topic.id} 
              className="blog-card blog-card--placeholder card"
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
              <div className="blog-card__body">
                <div className="blog-card__meta">
                  <span className="blog-card__topic">{topic.topic}</span>
                </div>

                <h3 className="blog-card__title">{topic.title}</h3>
                <p className="blog-card__excerpt">{topic.description}</p>

                {/* Status Badge - reusing project status system */}
                <div className="blog-card__footer">
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
          className="blog__note"
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
