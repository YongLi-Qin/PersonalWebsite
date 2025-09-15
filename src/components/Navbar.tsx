import React, { useEffect, useState } from 'react';
import { NavLink } from '../types';
import '../styles/Navbar.css';

interface NavbarProps {
  links: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <a href="#" className="logo">YongLi (Matt) Qin</a>
      <ul className="nav-links">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} onClick={handleNavClick(link.href)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;