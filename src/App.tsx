import React from 'react';
import Loader from './components/Loader';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import useThemeChange from './hooks/useThemeChange';
import useScrollEffects from './hooks/useScrollEffects';
import { NavLink } from './types';
import './styles/globals.css';

const App: React.FC = () => {
  useThemeChange();
  useScrollEffects();

  const navLinks: NavLink[] = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Past Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <div className="App">
      <Loader />
      <Cursor />
      <Navbar links={navLinks} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;