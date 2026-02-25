/**
 * App Component
 * Root component composing all sections
 * Theme state managed here and passed down
 */

import { useState, useEffect, createContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Theme types
export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Theme context for child components
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {}
});

function App(): JSX.Element {
  // Initialize theme from localStorage or system preference
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme as Theme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Apply theme to document and persist to localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle function
  const toggleTheme = (): void => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app">
        {/* Navigation */}
        <Navbar />
        
        {/* Main Content */}
        <main>
          <Hero />
          <Projects />
          <Blog />
          <About />
          <Contact />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
