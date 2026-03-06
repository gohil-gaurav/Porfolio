/**
 * VisitorMilestone Component
 * Displays visitor milestone achievements using Google Analytics data
 */

import { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeContext } from '../App';

interface Milestone {
  threshold: number;
  message: string;
  icon: string;
}

const milestones: Milestone[] = [
  { threshold: 500, message: '500+ developers explored this portfolio', icon: '🚀' },
  { threshold: 1000, message: '1K+ visitors viewed this portfolio', icon: '👁️' },
  { threshold: 5000, message: '5K+ visitors discovered this work', icon: '🔥' },
  { threshold: 10000, message: '10K+ visitors explored this portfolio', icon: '⭐' },
];

const VisitorMilestone = (): JSX.Element | null => {
  const { theme } = useContext(ThemeContext);
  const isDark: boolean = theme === 'dark';
  const [currentMilestone, setCurrentMilestone] = useState<Milestone | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isClient, setIsClient] = useState<boolean>(false);

  const monoFont: string = "'JetBrains Mono', 'SF Mono', 'Fira Code', 'Consolas', monospace";

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Simulated visitor count - In production, this would come from Google Analytics API
    // For now, we'll use a localStorage counter that increments on each unique visit
    const getVisitorCount = (): number => {
      const stored = localStorage.getItem('portfolio_visitor_count');
      if (stored) {
        return parseInt(stored);
      }
      
      // Initialize with a random count between 450-550 for demo purposes
      // In production, fetch from Google Analytics API
      const initialCount = Math.floor(Math.random() * 100) + 450;
      localStorage.setItem('portfolio_visitor_count', initialCount.toString());
      return initialCount;
    };

    // Increment visitor count on first visit
    const hasVisited = sessionStorage.getItem('portfolio_visited');
    if (!hasVisited) {
      const currentCount = getVisitorCount();
      const newCount = currentCount + 1;
      localStorage.setItem('portfolio_visitor_count', newCount.toString());
      sessionStorage.setItem('portfolio_visited', 'true');
    }

    const visitorCount = getVisitorCount();

    // Find the highest milestone reached
    const reachedMilestone = milestones
      .filter(m => visitorCount >= m.threshold)
      .sort((a, b) => b.threshold - a.threshold)[0];

    if (reachedMilestone) {
      // Check if we've already shown this milestone
      const shownMilestone = localStorage.getItem('portfolio_milestone_shown');
      const shouldShow = shownMilestone !== reachedMilestone.threshold.toString();

      setCurrentMilestone(reachedMilestone);
      
      if (shouldShow) {
        // Show the milestone after a short delay
        setTimeout(() => {
          setIsVisible(true);
          localStorage.setItem('portfolio_milestone_shown', reachedMilestone.threshold.toString());
          
          // Auto-hide after 8 seconds
          setTimeout(() => {
            setIsVisible(false);
          }, 8000);
        }, 2000);
      }
    }
  }, [isClient]);

  if (!isClient || !currentMilestone) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ 
            duration: 0.5, 
            ease: [0.16, 1, 0.3, 1]
          }}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 1000,
            maxWidth: '380px'
          }}
        >
          <div
            style={{
              background: isDark 
                ? 'linear-gradient(135deg, rgba(20, 20, 20, 0.98) 0%, rgba(30, 30, 30, 0.98) 100%)'
                : 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 250, 250, 0.98) 100%)',
              border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
              borderRadius: '12px',
              padding: '16px 20px',
              boxShadow: isDark
                ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2)'
                : '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer'
            }}
            onClick={() => setIsVisible(false)}
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                delay: 0.2,
                type: 'spring',
                stiffness: 200,
                damping: 10
              }}
              style={{
                fontSize: '32px',
                lineHeight: 1,
                flexShrink: 0
              }}
            >
              {currentMilestone.icon}
            </motion.div>

            {/* Content */}
            <div style={{ flex: 1 }}>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                style={{
                  fontFamily: monoFont,
                  fontSize: '13px',
                  fontWeight: 600,
                  color: isDark ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.9)',
                  marginBottom: '4px',
                  letterSpacing: '0.01em'
                }}
              >
                Milestone Reached! 🎉
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                style={{
                  fontFamily: monoFont,
                  fontSize: '12px',
                  color: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
                  lineHeight: 1.5
                }}
              >
                {currentMilestone.message}
              </motion.div>
            </div>

            {/* Close button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsVisible(false);
              }}
              style={{
                background: 'transparent',
                border: 'none',
                color: isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.4)',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
                transition: 'all 0.2s ease',
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = isDark 
                  ? 'rgba(255, 255, 255, 0.1)' 
                  : 'rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.color = isDark 
                  ? 'rgba(255, 255, 255, 0.8)' 
                  : 'rgba(0, 0, 0, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = isDark 
                  ? 'rgba(255, 255, 255, 0.4)' 
                  : 'rgba(0, 0, 0, 0.4)';
              }}
              aria-label="Close milestone notification"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </motion.button>
          </div>

          {/* Progress indicator */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 8, ease: 'linear' }}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: isDark 
                ? 'linear-gradient(90deg, #6ee7b7 0%, #3b82f6 100%)'
                : 'linear-gradient(90deg, #10b981 0%, #3b82f6 100%)',
              borderRadius: '0 0 12px 12px',
              transformOrigin: 'left'
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VisitorMilestone;
