import React, { useState } from 'react';
import { Project } from '../types';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'GameBuddy Platform',
      description: 'A social matchmaking system for gamers to find teammates based on rank and game type',
      longDescription: 'Built a comprehensive gaming social platform featuring user authentication, matchmaking algorithms, team formation, and responsive UI. Designed scalable Spring Boot APIs integrated with AWS-hosted MySQL databases. Deployed backend to EC2, used S3 for media storage, and implemented automated CI/CD pipeline.',
      technologies: ['React.js', 'Spring Boot', 'MySQL', 'Docker', 'AWS', 'Tailwind CSS'],
      imageUrl: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=250&fit=crop&crop=center',
      demoUrl: 'https://gamebuddy.example.com',
      githubUrl: 'https://github.com/YongLi-Qin/pw-social-media',
      featured: true,
      category: 'Full Stack',
      year: '2024'
    },
    {
      id: '2',
      title: 'Exchange Rate Tracker',
      description: 'Real-time currency monitor with automated notifications and data visualization',
      longDescription: 'Developed a comprehensive currency tracking system with real-time monitoring, automated email notifications via Cron + Python SMTP, and interactive dashboards. Used Kafka for asynchronous updates, Redis for caching, and implemented secure token-based authentication with role-based permissions.',
      technologies: ['Flask', 'React.js', 'Redis', 'Kafka', 'Python', 'Vercel'],
      imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop&crop=center',
      demoUrl: 'https://exchange-tracker.example.com',
      githubUrl: 'https://github.com/YongLi-Qin/ExchangeRateTracker',
      featured: true,
      category: 'Full Stack',
      year: '2024'
    }
  ];

  const categories: string[] = ['all', ...Array.from(new Set(projects.map(p => p.category).filter((cat): cat is string => Boolean(cat))))];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h2 className="section-title">Past Projects</h2>
        <p className="section-subtitle">A showcase of my recent work and achievements</p>
      </div>

      {/* Featured Projects */}
      <div className="featured-projects">
        <h3 className="featured-title">Featured Projects</h3>
        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <div key={project.id} className="featured-project-card interactive">
              <div className="project-image">
                <img src={project.imageUrl} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        <span>🔗</span> Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                        <span>💻</span> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h4 className="project-title">{project.title}</h4>
                  <span className="project-year">{project.year}</span>
                </div>
                <p className="project-description">{project.longDescription || project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Filter */}
      <div className="project-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category === 'all' ? 'All Projects' : category}
          </button>
        ))}
      </div>

      {/* All Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card interactive">
            <div className="project-image">
              <img src={project.imageUrl} alt={project.title} />
              <div className="project-overlay">
                <div className="project-links">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <span>🔗</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <span>💻</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="project-info">
              <div className="project-header">
                <h4 className="project-title">{project.title}</h4>
                <span className="project-category">{project.category}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="tech-count">+{project.technologies.length - 3}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;