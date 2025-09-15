# Personal Portfolio Website

A modern, responsive personal portfolio website built with React and TypeScript.

## Features

- 🎨 Modern, minimalist design
- 📱 Fully responsive
- ⚡ Built with React 18 and TypeScript
- 🎭 Custom cursor and smooth animations
- 🌈 Dynamic theme color changes
- 🔗 Smooth scrolling navigation
- ♿ Accessible design

## Project Structure

```
src/
├── components/           # React components
│   ├── About.tsx        # About section
│   ├── Contact.tsx      # Contact section
│   ├── Cursor.tsx       # Custom cursor
│   ├── Hero.tsx         # Hero section
│   ├── Loader.tsx       # Loading screen
│   ├── Navbar.tsx       # Navigation bar
│   ├── Projects.tsx     # Projects section
│   └── Skills.tsx       # Skills section
├── hooks/               # Custom React hooks
│   ├── useScrollEffects.ts  # Scroll animations and effects
│   └── useThemeChange.ts    # Dynamic theme changes
├── styles/              # CSS files
│   ├── About.css
│   ├── Contact.css
│   ├── globals.css      # Global styles and CSS variables
│   ├── Hero.css
│   ├── Loader.css
│   ├── Navbar.css
│   ├── Projects.css
│   └── Skills.css
├── types/               # TypeScript type definitions
│   └── index.ts
├── App.tsx              # Main App component
└── index.tsx            # React entry point
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization

### Personal Information
- Update the name in `src/components/Navbar.tsx`
- Modify the hero content in `src/components/Hero.tsx`
- Update contact links in `src/components/Contact.tsx`

### Skills and Services
- Edit the skills array in `src/components/Skills.tsx`
- Modify the about cards in `src/components/About.tsx`

### Projects
- Update projects in `src/components/Projects.tsx`
- Add your own project screenshots

### Styling
- Customize colors in `src/styles/globals.css` (CSS variables)
- Modify component styles in their respective CSS files

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Technologies Used

- React 18
- TypeScript
- CSS3 with custom properties
- Intersection Observer API
- CSS Grid and Flexbox
