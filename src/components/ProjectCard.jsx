/**
 * ProjectCard Component
 * Individual project card with browser window styling and animations
 */

import { motion } from 'framer-motion';

// Status configuration - maps status to display text
const STATUS_CONFIG = {
  'coming-soon': { label: 'Coming Soon', type: 'pending' },
  'building': { label: 'Building', type: 'progress' },
  'live': { label: 'Live', type: 'success' }
};

const ProjectCard = ({ project, index }) => {
  const { filename, title, description, techStack, link, status } = project;

  const statusConfig = STATUS_CONFIG[status] || STATUS_CONFIG['coming-soon'];
  const isClickable = status === 'live';

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.article 
      className="card flex flex-col"
      style={{ background: 'var(--color-surface)' }}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ 
        y: -6,
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
        <span className="window-filename">{filename}</span>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 
          className="text-lg font-semibold mb-2 leading-snug"
          style={{ color: 'var(--color-text)' }}
        >
          {title}
        </h3>
        <p 
          className="text-sm leading-relaxed mb-5 flex-1"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {techStack.map((tech, idx) => (
            <span 
              key={idx} 
              className="mono text-xs px-2 py-1"
              style={{
                background: 'var(--color-bg-alt)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-muted)'
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Status Badge & Link */}
        <div 
          className="mt-auto pt-4 flex items-center justify-between"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <span 
            className="status-badge" 
            data-status={statusConfig.type}
          >
            {statusConfig.label}
          </span>
          
          {isClickable && (
            <motion.a 
              href={link} 
              className="btn-link"
              style={{ color: 'var(--color-text)' }}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
            >
              View <span>→</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
