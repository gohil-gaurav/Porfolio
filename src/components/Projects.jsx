/**
 * Projects Component
 * Premium project cards section with minimal, developer-focused aesthetic
 */

import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  const monoFont = "'JetBrains Mono', 'SF Mono', 'Fira Code', 'Consolas', monospace";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  return (
    <section 
      id="projects" 
      style={{ 
        background: 'var(--color-bg)',
        padding: '100px 0'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <motion.div 
          style={{ marginBottom: '56px' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p 
            style={{ 
              fontFamily: monoFont,
              fontSize: '12px',
              color: 'var(--color-text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '12px'
            }}
          >
            // Projects
          </p>
          <h2 
            style={{ 
              fontFamily: monoFont,
              fontSize: '32px',
              fontWeight: 600,
              color: 'var(--color-text)',
              marginBottom: '16px',
              letterSpacing: '-0.02em'
            }}
          >
            My Work
          </h2>
          <p 
            style={{ 
              fontSize: '15px',
              color: 'var(--color-text-muted)',
              maxWidth: '480px',
              lineHeight: 1.6
            }}
          >
            A selection of things I've built and experimented with. 
            Real projects, real problems, real solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginBottom: '56px'
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              isDark={isDark}
              monoFont={monoFont}
            />
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div 
          style={{ textAlign: 'center' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a 
            href="#" 
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{
              fontFamily: monoFont,
              fontSize: '13px',
              padding: '12px 28px',
              background: 'transparent',
              color: 'var(--color-text)',
              border: `1px solid ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}`,
              borderRadius: '0',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease'
            }}
          >
            View All Projects
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
