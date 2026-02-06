/**
 * Projects Data
 * Demo project entries for portfolio display
 */

export const projects = [
  {
    id: 1,
    filename: 'data-dashboard.py',
    title: 'Data Analysis Dashboard',
    description: 'Interactive dashboard for visualizing and analyzing datasets with data cleaning, statistical analysis, and beautiful charts.',
    techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    link: '#',
    status: 'coming-soon', // Options: 'coming-soon' | 'building' | 'live'
    image: null // Add image URL when available
  },
  {
    id: 2,
    filename: 'student-system.py',
    title: 'Student Management System',
    description: 'Full-featured student management application with registration, course tracking, and grade management.',
    techStack: ['Django', 'Python', 'SQLite', 'HTML/CSS'],
    link: '#',
    status: 'building',
    image: null
  },
  {
    id: 3,
    filename: 'portfolio.jsx',
    title: 'Portfolio Website',
    description: 'Minimalist personal portfolio built with React. Clean design inspired by retro-terminal aesthetics.',
    techStack: ['React', 'Tailwind', 'Vite'],
    link: 'https://github.com/yourusername/portfolio',
    status: 'live',
    image: null
  }
];

export default projects;
