/**
 * ProjectCard Component
 * Individual project card with browser window styling and animations
 */

import { motion } from 'framer-motion';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  const { filename, title, description, techStack, link, status } = project;

  const isComingSoon = status === 'coming-soon';

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

        {/* Action */}
        <div className="project-card__action">
          {isComingSoon ? (
            <span className="project-card__coming-soon">
              Coming Soon
            </span>
          ) : (
            <motion.a 
              href={link} 
              className="btn-link"
              whileHover={{ x: 4 }}
            >
              View Project <span>→</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
