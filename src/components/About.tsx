import React from 'react';
import { AboutCard } from '../types';
import '../styles/About.css';

const About: React.FC = () => {
  const aboutCards: AboutCard[] = [
    {
      icon: '💻',
      title: 'Frontend Development',
      description: 'Building responsive, accessible UI/UX with React.js and Next.js, following WCAG and SEO best practices. Expert in TypeScript and modern CSS frameworks.'
    },
    {
      icon: '⚙️',
      title: 'Backend Development',
      description: 'Designing RESTful APIs with Node.js, Spring Boot, and Django. Optimizing database schemas and SQL queries for performance and scalability.'
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      description: 'Deploying applications on AWS (EC2, S3, Lambda, API Gateway) with Docker containerization and automated CI/CD pipelines.'
    }
  ];

  return (
    <section className="about-section" id="about">
      <div className="section-header">
        <h2 className="section-title">What I Do</h2>
        <p className="section-subtitle">Turning ideas into reality through technology</p>
      </div>
      
      <div className="about-grid">
        {aboutCards.map((card, index) => (
          <div key={index} className="about-card interactive">
            <div className="card-icon">{card.icon}</div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;