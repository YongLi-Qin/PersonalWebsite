import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = 'Full-Stack Developer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleExploreClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#about');
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero-section">
      <div className="floating-elements">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          {displayedText}
          <span className={`cursor-blink ${isTypingComplete ? 'hide' : ''}`}>|</span>
        </h1>
        <p className="hero-subtitle">Shipping secure, performant SaaS features end-to-end</p>
        <p className="hero-description">
          Full-stack engineer specialising in TypeScript, React/Next.js, and Node.js. 
          Hands-on with AWS, Docker, and CI/CD. Product-minded collaborator who turns 
          ambiguous requirements into reliable releases using AI-assisted workflows.
        </p>
        <a href="#about" className="cta-button" onClick={handleExploreClick}>
          <span>Explore My Work</span>
          <span>→</span>
        </a>
      </div>
      
      <div className="scroll-indicator"></div>
    </section>
  );
};

export default Hero;