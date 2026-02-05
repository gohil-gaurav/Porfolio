/**
 * Projects Component
 * Project cards section with browser window styling and animations
 */

import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section 
      id="projects" 
      className="section py-24"
      style={{ background: 'var(--color-bg)' }}
    >
      <div className="container">
        {/* Section Header */}
        <motion.div 
          className="section-header mb-12 text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">[Projects]</span>
          <h2 className="section-title">My Work</h2>
          <p 
            className="text-lg max-w-[500px]"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            A selection of things I've built and experimented with.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div 
          className="text-center"
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
            View All Projects
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
