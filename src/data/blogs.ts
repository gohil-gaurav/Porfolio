/**
 * Blog Data
 * Demo blog entries for the blog preview section
 */

export interface Blog {
  id: number;
  filename: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    filename: '2026-01-getting-started-data-science.md',
    title: 'Getting Started with Data Science',
    excerpt: 'A beginner-friendly guide to starting your data science journey. Learn about essential tools, libraries, and the mindset needed to succeed.',
    date: 'Jan 15, 2026',
    readTime: '5 min read',
    link: '#'
  },
  {
    id: 2,
    filename: '2026-01-python-pandas-tips.md',
    title: 'Python Pandas Tips & Tricks',
    excerpt: 'Essential Pandas techniques every data analyst should know. From data cleaning to advanced transformations.',
    date: 'Jan 22, 2026',
    readTime: '7 min read',
    link: '#'
  },
  {
    id: 3,
    filename: '2026-02-django-project-structure.md',
    title: 'Structuring Django Projects',
    excerpt: 'Best practices for organizing your Django applications. Clean architecture patterns for maintainable code.',
    date: 'Feb 01, 2026',
    readTime: '6 min read',
    link: '#'
  }
];

export default blogs;
