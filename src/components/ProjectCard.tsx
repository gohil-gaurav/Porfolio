/**
 * ProjectCard Component
 * Premium project card with image, clean layout, and minimal styling
 */

import { motion, Variants } from 'framer-motion';
import { Project, ProjectStatus } from '../data/projects';

interface StatusConfig {
  label: string;
  color: string;
  bg: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isDark: boolean;
  monoFont: string;
}

// Status configuration with muted colors
const STATUS_CONFIG: Record<ProjectStatus, StatusConfig> = {
  'coming-soon': { label: 'Coming Soon', color: '#f97316', bg: 'rgba(249, 115, 22, 0.1)' },
  'building': { label: 'Building', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.1)' },
  'live': { label: 'Live', color: '#4ade80', bg: 'rgba(74, 222, 128, 0.1)' }
};

// Placeholder image patterns for projects (gradient backgrounds)
const PROJECT_IMAGES: Record<number, string> = {
  1: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  2: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
  3: 'linear-gradient(135deg, #0a0a0a 0%, #1f1f1f 50%, #0a0a0a 100%)'
};

const ProjectCard = ({ project, index, isDark, monoFont }: ProjectCardProps): JSX.Element => {
  const { id, filename, title, description, techStack, link, status } = project;

  const statusConfig: StatusConfig = STATUS_CONFIG[status] || STATUS_CONFIG['coming-soon'];
  const isClickable: boolean = status === 'live';

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
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
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ 
        y: -6,
        transition: { duration: 0.25, ease: 'easeOut' }
      }}
      style={{
        background: isDark ? '#111111' : '#fafafa',
        border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
        borderRadius: '0',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '500px',
        boxShadow: isDark 
          ? '0 4px 20px rgba(0,0,0,0.3)' 
          : '0 4px 20px rgba(0,0,0,0.06)',
        transition: 'box-shadow 0.3s ease'
      }}
    >
      {/* Project Image / Preview Area */}
      <div 
        style={{
          height: '280px',
          background: PROJECT_IMAGES[id] || PROJECT_IMAGES[1],
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Dark overlay for consistency */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: isDark 
              ? 'rgba(0,0,0,0.3)' 
              : 'rgba(255,255,255,0.1)',
            transition: 'background 0.3s ease'
          }}
        />
        
        {/* Terminal-style filename badge */}
        <div 
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            fontFamily: monoFont,
            fontSize: '11px',
            color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.5)',
            background: isDark ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.8)',
            padding: '4px 10px',
            borderRadius: '0',
            backdropFilter: 'blur(8px)'
          }}
        >
          {filename}
        </div>
      </div>

      {/* Card Content */}
      <div 
        style={{
          padding: '24px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Title */}
        <h3 
          style={{
            fontFamily: monoFont,
            fontSize: '18px',
            fontWeight: 600,
            color: 'var(--color-text)',
            marginBottom: '12px',
            lineHeight: 1.3
          }}
        >
          {title}
        </h3>

        {/* Description - kept short */}
        <p 
          style={{
            fontSize: '14px',
            lineHeight: 1.6,
            color: 'var(--color-text-muted)',
            marginBottom: '20px',
            flex: 1
          }}
        >
          {description.length > 120 ? description.slice(0, 120) + '...' : description}
        </p>

        {/* Tech Stack */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            marginBottom: '20px'
          }}
        >
          {techStack.map((tech: string, i: number) => (
            <span 
              key={i}
              style={{
                fontFamily: monoFont,
                fontSize: '11px',
                color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
                background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)',
                padding: '4px 8px',
                borderRadius: '0'
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer: Status Badge & CTA */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '16px',
            borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`
          }}
        >
          {/* Status Badge */}
          <span 
            style={{
              fontFamily: monoFont,
              fontSize: '10px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: statusConfig.color,
              background: statusConfig.bg,
              padding: '5px 10px',
              borderRadius: '0'
            }}
          >
            {statusConfig.label}
          </span>

          {/* Action Links */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {/* GitHub Icon */}
            <motion.a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                color: 'var(--color-text-secondary)',
                transition: 'color 0.2s ease'
              }}
              title="View on GitHub"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.a>

            {/* View Link */}
            {isClickable && (
              <motion.a 
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 3 }}
                style={{
                  fontFamily: monoFont,
                  fontSize: '12px',
                  color: 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'color 0.2s ease'
                }}
              >
                View <span>→</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
