/**
 * Projects Data
 * Demo project entries for portfolio display
 */

export type ProjectStatus = 'coming-soon' | 'building' | 'live';

export interface Project {
  id: number;
  filename: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  status: ProjectStatus;
  image: string | null;
}

export const projects: Project[] = [
  {
    id: 1,
    filename: 'data-dashboard.py',
    title: 'Data Analysis Dashboard',
    description: 'Interactive dashboard for visualizing and analyzing datasets with data cleaning, statistical analysis, and beautiful charts.',
    techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    githubUrl: 'https://github.com/yourusername/data-dashboard',
    liveUrl: undefined,
    status: 'coming-soon',
    image: null
  },
  {
    id: 2,
    filename: 'student-system.py',
    title: 'Student Management System',
    description: 'Full-featured student management application with registration, course tracking, and grade management.',
    techStack: ['Django', 'Python', 'SQLite', 'HTML/CSS'],
    githubUrl: 'https://github.com/yourusername/student-system',
    liveUrl: undefined,
    status: 'building',
    image: null
  },
  {
    id: 3,
    filename: 'portfolio.jsx',
    title: 'Portfolio Website',
    description: 'Minimalist personal portfolio built with React. Clean design inspired by retro-terminal aesthetics.',
    techStack: ['React', 'Tailwind', 'Vite'],
    githubUrl: 'https://github.com/gohil-gaurav/student-performance-predictor',
    liveUrl: 'https://student-performance-predictor01.streamlit.app/',
    status: 'live',
    image: '/src/assets/images/project/studentmarkpredition.png'
  }
];

export default projects;
