/**
 * ProjectCard Component
 * Individual project card with browser window styling and animations
 */

import { motion } from 'framer-motion';
import './ProjectCard.css';

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
      className="project-card card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
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
        <span className="window-filename">{filename}</span>
      </div>

      {/* Card Content */}
      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        {/* Tech Stack */}
        <div className="project-card__tech">
          {techStack.map((tech, index) => (
            <span key={index} className="project-card__tag">
              {tech}
            </span>
          ))}
        </div>

        {/* Status Badge */}
        <div className="project-card__footer">
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
