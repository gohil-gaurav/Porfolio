/**
 * TechStack Component
 * Infinite scrolling tech stack showcase
 */

import { useContext } from 'react';
import { ThemeContext } from '../App';

interface Tech {
  name: string;
  icon: string;
  color: string;
}

const TechStack = (): JSX.Element => {
  const { theme } = useContext(ThemeContext);
  const isDark: boolean = theme === 'dark';
  const monoFont: string = "'JetBrains Mono', 'SF Mono', 'Fira Code', 'Consolas', monospace";

  // Tech stack with icons and colors
  const technologies: Tech[] = [
    { name: 'Python', icon: '🐍', color: '#3776AB' },
    { name: 'NumPy', icon: '🔢', color: '#013243' },
    { name: 'Pandas', icon: '🐼', color: '#150458' },
    { name: 'Scikit-Learn', icon: '📊', color: '#F7931E' },
    { name: 'C', icon: '©️', color: '#A8B9CC' },
    { name: 'HTML', icon: '🌐', color: '#E34F26' },
    { name: 'CSS', icon: '🎨', color: '#1572B6' },
    { name: 'JavaScript', icon: '⚡', color: '#F7DF1E' },
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'Django', icon: '🎸', color: '#092E20' },
    { name: 'Git', icon: '📦', color: '#F05032' },
    { name: 'SQL', icon: '💾', color: '#4479A1' },
  ];

  // Duplicate for seamless loop
  const duplicatedTechs = [...technologies, ...technologies];

  return (
    <section 
      style={{ 
        background: 'var(--color-bg)',
        paddingTop: '80px',
        paddingBottom: '80px',
        overflow: 'hidden',
        borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
        borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`
      }}
    >
      <div className="container">
        {/* Section Title */}
        <h2 
          style={{
            fontFamily: monoFont,
            fontSize: '24px',
            fontWeight: 600,
            color: 'var(--color-text)',
            marginBottom: '48px',
            textAlign: 'center'
          }}
        >
          Tech Stack
        </h2>

        {/* Scrolling Container */}
        <div 
          style={{
            position: 'relative',
            width: '100%',
            overflow: 'hidden'
          }}
        >
          {/* Scrolling Track */}
          <div 
            style={{
              display: 'flex',
              gap: '40px',
              animation: 'scroll 30s linear infinite',
              width: 'fit-content'
            }}
          >
            {duplicatedTechs.map((tech: Tech, index: number) => (
              <div 
                key={`${tech.name}-${index}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  minWidth: '160px'
                }}
              >
                {/* Icon */}
                <span 
                  style={{
                    fontSize: '32px',
                    lineHeight: 1
                  }}
                >
                  {tech.icon}
                </span>
                
                {/* Name */}
                <span 
                  style={{
                    fontFamily: monoFont,
                    fontSize: '16px',
                    fontWeight: 500,
                    color: 'var(--color-text)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe Animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default TechStack;
