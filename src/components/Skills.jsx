/**
 * Skills Component
 * Terminal-style skills section with category filter
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SkillCard from './SkillCard';
import { skills, skillCategories } from '../data/skills';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.header 
          className="skills__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">[02] Skills</span>
          <h2 className="skills__title">Technical Stack</h2>
          <p className="skills__subtitle">
            Tools and technologies I work with. Hover for details.
          </p>
        </motion.header>

        <motion.div 
          className="skills__filter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {skillCategories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
              {activeCategory === category && (
                <motion.span
                  className="filter-btn__indicator"
                  layoutId="activeFilter"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        <motion.div 
          className="skills__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => (
              <SkillCard 
                key={skill.id} 
                skill={skill} 
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          className="skills__footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="skills__note">
            <span className="mono">→</span> Always learning. Currently exploring Machine Learning & Advanced Django.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
