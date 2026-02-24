# AGENTS.md - Development Guidelines for Ladingpage

## Project Overview

- **Tech Stack**: React 19, Vite 7, Tailwind CSS 4
- **Type**: Single-page landing page application
- **Language**: JavaScript/JSX (no TypeScript)

## Directory Structure

```
src/
├── assets/           # Images, videos, fonts, SVG icons
├── components/      # Reusable React components
├── App.jsx          # Main application component
├── main.jsx         # Application entry point
└── index.css        # Global styles (Tailwind)
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create production build in `dist/` |
| `npm run lint` | Run ESLint on all files |
| `npm run preview` | Preview production build locally |

**Note**: No test framework is currently configured. To add tests, consider installing Vitest or Jest.

## Code Style Guidelines

### File Naming

- React components: **PascalCase** (e.g., `FAQSection.jsx`, `VideoCard.jsx`)
- Regular JS files: **camelCase** (e.g., `utils.js`)
- CSS files: **camelCase** or match component name

### Component Structure

```jsx
// Default export for components
import React from "react";

export default function ComponentName({ prop1, prop2 }) {
  return (
    <div>
      {/* JSX content */}
    </div>
  );
}
```

- Use functional components with arrow functions or function declarations
- Use default exports for components
- Destructure props in the function signature
- Provide default prop values when appropriate

### Import Order

Organize imports in this order:

1. React core imports
2. External library imports (e.g., other npm packages)
3. Internal component imports (e.g., `./components/...`)
4. Asset imports (images, videos, fonts, SVG)

```jsx
// 1. React
import { useState, useRef } from "react";

// 2. External
import SomeLib from "some-lib";

// 3. Internal components
import FinderWindow from "./components/FinderWindow";
import VideoCard from "./components/VideoCard";

// 4. Assets
import image from "./assets/image.png";
import video from "./assets/video.mp4";
```

### Tailwind CSS

- Use Tailwind 4 utility classes exclusively for styling
- Custom colors and values are defined in the design system
- Use arbitrary values sparingly (e.g., `bg-[#346C2D]`)
- Responsive classes: use `max-[]` for mobile-first breakpoints

```jsx
// Common patterns
<div className="flex flex-col items-center gap-6">
<div className="text-center bg-[#F5FFF4]">
<button className="hover:bg-[#2a5624] transition-colors">
```

### ESLint Rules

The project uses ESLint with these specific rules:

- `no-unused-vars`: Error for unused variables, except those starting with uppercase (allows JSX elements)
- React Hooks plugin enabled
- React Refresh plugin enabled for HMR

### JavaScript Conventions

- Use `const` and `let`; avoid `var`
- Use arrow functions for callbacks
- Prefer template literals over string concatenation
- Use destructuring for objects and arrays
- Avoid unnecessary console.log statements in production code

### JSX Guidelines

- Use double quotes for attributes: `<div className="...">`
- Self-close tags when possible: `<Component />`
- Use semantic HTML elements where appropriate
- Include `alt` text for all images
- Use `aria-label` for icon-only buttons

### Error Handling

- Use optional chaining for nested properties: `obj?.prop?.nested`
- Provide fallback values where data may be undefined
- Handle missing assets gracefully (alt text, fallback content)

### State Management

- Use `useState` for local component state
- Use `useRef` for mutable values that don't trigger re-renders
- Consider lifting state up when needed across components

## Development Workflow

1. **Start development**: `npm run dev`
2. **Check for lint errors**: `npm run lint`
3. **Build for production**: `npm run build`
4. **Preview production build**: `npm run preview`

## Adding New Components

1. Create file in `src/components/` with PascalCase name
2. Use the component structure shown above
3. Import and use in `App.jsx` or other parent components
4. Run `npm run lint` to check for issues

## Assets

- Place images, videos, and fonts in `src/assets/`
- Use relative paths when importing in components
- Supported formats: SVG, PNG, JPEG, MP4, OTF

## Pre-commit Checks

Before committing or submitting code:

1. Run `npm run lint` and fix any errors
2. Verify the build succeeds: `npm run build`
3. Test in development mode: `npm run dev`
