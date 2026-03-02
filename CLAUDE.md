# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based portfolio website for José Trangol, a QA Engineer and Developer. The site is built with React, Vite, and Tailwind CSS, showcasing projects, skills, and professional background. It's deployed on Vercel.

**Tech Stack:**
- React 18.2.0 for UI components
- Vite 4.3.9 as the build tool and dev server
- Tailwind CSS 3.3.0 for styling
- Lucide React for icons
- PostCSS & Autoprefixer for CSS processing

## Development Commands

```bash
npm run dev      # Start Vite dev server on http://localhost:3000
npm run build    # Build for production (outputs to dist/)
npm run preview  # Preview the production build locally
```

The dev server automatically opens the application and supports hot module replacement (HMR).

## Architecture & Structure

### File Organization

- **`src/App.jsx`** - Root component that composes all main sections
- **`src/main.jsx`** - React entry point, mounts App to DOM
- **`src/index.css`** - Global styles with Tailwind directives, custom animations, and scrollbar styling
- **`src/components/`** - All UI components (Navbar, Hero, About, Skills, Projects, Contact, Footer)
  - Components do not use props heavily; data is often defined inline (see Projects.jsx pattern)
  - ProjectCard and ProjectsCarousel handle carousel functionality
- **`public/`** - Static assets including videos (banking-demo-15s.mp4, qa-automation-demo.mp4)
- **`tailwind.config.js`** - Custom Tailwind theme configuration with primary/secondary/light color palette
- **`vite.config.js`** - Vite dev server configuration (port 3000, auto-open)
- **`vercel.json`** - Deployment configuration for Vercel
- **`STRUCTURE.md`** - Additional documentation on project layout and components

### Page Sections

The portfolio is organized as a single-page app with named sections for navigation:

1. **#navbar** - Fixed navigation header
2. **#hero** - Main introduction/CTA section
3. **#about** - Professional background
4. **#skills** - Technical skills
5. **#projects** - Project showcase with carousel
6. **#contact** - Contact form
7. **#footer** - Footer with links

## Working with Projects

**Location:** `src/components/Projects.jsx`

The Projects component defines project data as a JavaScript array within the component. Each project object has this structure:

```javascript
{
  title: string,
  description: string,
  video?: string,            // Path to demo video (e.g., '/banking-demo-15s.mp4')
  tech: string[],            // Array of technology tags
  github: string,            // GitHub repository URL
  githubLabel: string,       // Label for primary GitHub link
  github2?: string,          // Optional second GitHub link (for separate repos)
  github2Label?: string,     // Label for secondary GitHub link
  comingSoon?: boolean,      // Mark project as in progress
  comingSoonMessage?: string // Custom message for in-progress projects
}
```

**To add or modify projects:** Edit the `projects` array in `src/components/Projects.jsx`. The component maps through this array and renders ProjectCard components. Videos should be placed in the `public/` directory.

## Styling & Design System

- **Framework:** Tailwind CSS with custom theme extensions
- **Custom Colors:**
  - `primary-950`, `primary-900`, `primary-500` - Main brand colors (blue theme)
  - `secondary-500` - Green accent color
  - `light-50`, `light-100` - Light text colors
- **Fonts:** Inter (sans-serif, main), JetBrains Mono (mono/code)
- **Custom Animations:** `fadeInUp` keyframe animation (0.6s ease-out)
- **Responsive:** Mobile-first with Tailwind breakpoints (sm, md, lg)
- **Custom CSS Classes:** `.fade-in-up`, `.gradient-bg` defined in `src/index.css`

**Styling approach:** Components use Tailwind utility classes. Global styles, scrollbar customization, and animations are in `src/index.css`. Custom theme colors are configured in `tailwind.config.js` under `extend.colors`.

## Key Implementation Patterns

- **Component structure:** Functional components with internal data definitions (not heavily prop-driven)
- **Icons:** Lucide React icons imported directly in components (e.g., `lucide-react`)
- **Carousel:** ProjectsCarousel component wraps project cards with horizontal scrolling functionality
- **Video content:** Demo videos embedded in project cards, referenced from `/public/` directory
- **Navigation:** Smooth scrolling to section IDs via anchor links in navbar

## Building & Deployment

- **Build output:** `dist/` directory contains minified assets (index-*.css, index-*.js)
- **Vercel deployment:** Uses buildCommand and devCommand from `vercel.json`
- **Environment:** No environment variables currently in use (see `.gitignore` for .env patterns)

## Important Notes

- The portfolio is primarily content-driven; most updates involve editing component text or the projects array
- Videos are referenced by path but stored in `public/` (e.g., `/banking-demo-15s.mp4`)
- Tailwind CSS is configured to scan `.jsx` files in `src/` for class names
- The project uses smooth scrolling globally (set in `src/index.css` as `scroll-behavior: smooth`)
- Dark theme with blue/green accents is the design foundation
