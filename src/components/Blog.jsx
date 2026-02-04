/**
 * Blog Component
 * Blog preview section with article cards and animations
 */

import { motion } from 'framer-motion';
import { blogs } from '../data/blogs';
import './Blog.css';

const Blog = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
          <span className="section-label">[04] Writing</span>
          <h2 className="section-title">From the blog</h2>
          <p className="blog__subtitle">
            Thoughts, learnings, and things I find interesting.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="blog__grid">
          {blogs.map((blog, index) => (
            <motion.article 
              key={blog.id} 
              className="blog-card card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
            >
              {/* Window Header */}
              <div className="window-header">
                <div className="window-dots">
                  <span className="window-dot"></span>
                  <span className="window-dot"></span>
                  <span className="window-dot"></span>
                </div>
                <span className="window-filename">{blog.filename}</span>
              </div>

              {/* Card Content */}
              <div className="blog-card__body">
                <div className="blog-card__meta">
                  <span className="blog-card__date">{blog.date}</span>
                  <span className="blog-card__separator">•</span>
                  <span className="blog-card__time">{blog.readTime}</span>
                </div>

                <h3 className="blog-card__title">{blog.title}</h3>
                <p className="blog-card__excerpt">{blog.excerpt}</p>

                <motion.a 
                  href={blog.link} 
                  className="blog-card__link btn-link"
                  whileHover={{ x: 4 }}
                >
                  Read more <span>→</span>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Link */}
        <motion.div 
          className="blog__footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a 
            href="#" 
            className="btn btn-secondary"
            whileHover={{ x: 4 }}
          >
            View All Posts
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
