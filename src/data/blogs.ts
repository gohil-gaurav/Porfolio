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
    filename: '2024-11-data-science.md',
    title: 'Data Science',
    excerpt: 'A reflection of financial independence, and that first taste of hard-earned reward.',
    date: 'Nov 2024',
    readTime: '5 min read',
    link: '#'
  }
];

export default blogs;
