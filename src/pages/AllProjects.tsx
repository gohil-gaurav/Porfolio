/**
 * All Projects Page
 * Dedicated page showing all projects in detail
 */

import { useContext } from 'react';
import { motion, Variants } from 'framer-motion';
import { ThemeContext } from '../App';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';

const AllProjects = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  const isDark: boolean = theme === 'dark';
  const monoFont: string = "'JetBrains Mono', 'SF Mono', 'Fira Code', 'Consolas', monospace";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh', paddingTop: '100px' }}>
      <div className="container">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '40px' }}
        >
          <Link 
            to="/"
            style={{
              fontFamily: monoFont,
              fontSize: '14px',
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'color 0.2s ease'
            }}
          >
            <span>←</span> Back to Home
          </Link>
        </motion.div>

        {/* Page Header */}
        <motion.div 
          style={{ marginBottom: '60px' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
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
            // ALL PROJECTS
          </p>
          <h1 
            style={{ 
              fontFamily: monoFont,
              fontSize: '36px',
              fontWeight: 600,
              color: 'var(--color-text)',
              marginBottom: '16px',
              letterSpacing: '-0.02em'
            }}
          >
            My Work
          </h1>
          <p 
            style={{ 
              fontSize: '15px',
              color: 'var(--color-text-muted)',
              maxWidth: '600px',
              lineHeight: 1.6
            }}
          >
            A comprehensive collection of projects I've built, ranging from data analysis 
            dashboards to full-stack web applications. Each project represents a unique 
            challenge and learning experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: '32px', paddingBottom: '80px', maxWidth: '1000px', margin: '0 auto' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
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
      </div>
    </div>
  );
};

export default AllProjects;
