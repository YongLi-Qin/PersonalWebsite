import React from 'react';
import { SkillItem } from '../types';
import '../styles/Skills.css';

const Skills: React.FC = () => {
  const skills: SkillItem[] = [
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', name: 'TypeScript' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', name: 'JavaScript' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', name: 'Python' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', name: 'Java' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', name: 'React.js' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', name: 'Next.js' },
    { icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg', name: 'Tailwind CSS' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', name: 'Node.js' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', name: 'Spring Boot' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', name: 'Django' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', name: 'PostgreSQL' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', name: 'MySQL' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', name: 'MongoDB' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', name: 'Redis' },
    { icon: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg', name: 'AWS' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', name: 'Docker' },
    { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', name: 'Jest' },
    { icon: '🤖', name: 'AI Development' }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="section-header">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">Tools I use to bring ideas to life</p>
      </div>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item interactive">
            <div className="skill-icon">
              {skill.icon.startsWith('http') ? (
                <img src={skill.icon} alt={skill.name} />
              ) : (
                <span>{skill.icon}</span>
              )}
            </div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;