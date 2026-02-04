# Personal Portfolio

A minimalist, retro-terminal inspired personal portfolio website built with React.

## ✨ Design Philosophy

- **Clean & Minimal** - No visual clutter
- **Typography-focused** - Large headings, readable text
- **Monochrome** - Black, white, and grays only
- **Boxed layouts** - Border-based design system
- **Retro-modern** - Terminal/editorial aesthetic

## 📁 Project Structure

```
src/
├── assets/
│   └── images/
├── components/
│   ├── Navbar.jsx       # Minimal horizontal nav
│   ├── Hero.jsx         # Landing with terminal
│   ├── QuickLinks.jsx   # Boxed navigation strip
│   ├── Projects.jsx     # Projects section
│   ├── ProjectCard.jsx  # Browser window styled cards
│   ├── Blog.jsx         # Blog preview section
│   └── Footer.jsx       # Minimal footer
├── data/
│   ├── projects.js      # Project entries
│   └── blogs.js         # Blog entries
├── styles/
│   ├── global.css       # Base styles & variables
│   └── layout.css       # Grid & layout utilities
├── App.jsx
└── main.jsx
```

## 🛠️ Tech Stack

- React 18
- Vite
- Plain CSS (no frameworks)
- ES6+ JavaScript

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### Colors
Edit CSS variables in `src/styles/global.css`:
```css
:root {
  --color-bg: #fafafa;
  --color-text: #1a1a1a;
  /* ... */
}
```

### Content
- Projects: Edit `src/data/projects.js`
- Blog posts: Edit `src/data/blogs.js`

### Typography
The design uses:
- **Inter** - Sans-serif for body text
- **JetBrains Mono** - Monospace for code/terminal

## 📝 Sections

1. **Navbar** - Fixed top navigation
2. **Hero** - Introduction with terminal graphic
3. **Quick Links** - Boxed navigation cards
4. **Projects** - Browser-window styled project cards
5. **Blog** - Article preview cards
6. **Footer** - Minimal copyright text

---

Built with React & CSS
