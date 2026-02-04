/**
 * SkillCard Component
 * Terminal-style skill card with hover animation
 */

import { motion } from 'framer-motion';
import './SkillCard.css';

const SkillCard = ({ skill, index }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        delay: index * 0.05,
        ease: 'easeOut'
      }
    }
  };

  const getLevelClass = (level) => {
    switch (level) {
      case 'Proficient': return 'level--proficient';
      case 'Intermediate': return 'level--intermediate';
      case 'Learning': return 'level--learning';
      default: return '';
    }
  };

  return (
    <motion.div
      className="skill-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2 }
      }}
    >
      <div className="skill-card__header">
        <span className="skill-card__name">{skill.name}</span>
        <span className={`skill-card__level ${getLevelClass(skill.level)}`}>
          {skill.level}
        </span>
      </div>
      
      <div className="skill-card__body">
        <span className="skill-card__category">[{skill.category}]</span>
        <p className="skill-card__description">{skill.description}</p>
      </div>
      
      <div className="skill-card__terminal">
        <span className="terminal-prompt">$</span>
        <span className="terminal-command">skill --info {skill.name.toLowerCase().replace(/\s+/g, '-')}</span>
        <span className="terminal-cursor">_</span>
      </div>
    </motion.div>
  );
};

export default SkillCard;
