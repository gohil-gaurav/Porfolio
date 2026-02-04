/**
 * Projects Data
 * Demo project entries for portfolio display
 */

export const projects = [
  {
    id: 1,
    filename: '2026-data-dashboard.py',
    title: 'Data Analysis Dashboard',
    description: 'Interactive dashboard for visualizing and analyzing datasets. Features data cleaning, statistical analysis, and beautiful charts.',
    techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    link: '#',
    status: 'coming-soon' // Options: 'coming-soon' | 'building' | 'live'
  },
  {
    id: 2,
    filename: '2026-student-system.py',
    title: 'Student Management System',
    description: 'Full-featured student management application with registration, course management, and grade tracking functionality.',
    techStack: ['Django', 'Python', 'SQLite', 'HTML/CSS'],
    link: '#',
    status: 'building'
  },
  {
    id: 3,
    filename: '2026-portfolio.jsx',
    title: 'Portfolio Website',
    description: 'Minimalist personal portfolio built with React. Clean design inspired by retro-terminal aesthetics.',
    techStack: ['React', 'CSS', 'Vite'],
    link: 'https://github.com/yourusername/portfolio',
    status: 'live'
  }
];

export default projects;
