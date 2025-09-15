import React from 'react';
import { ContactLink } from '../types';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const contactLinks: ContactLink[] = [
    { icon: '📧', label: 'Email', href: 'mailto:Yongliqin0321@outlook.com' },
    { icon: '💻', label: 'GitHub', href: 'https://github.com/Matt-Qin' },
    { icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/yongli-qin-1a1381219/' },
    { icon: '📱', label: 'Phone', href: 'tel:+61466262776' }
  ];

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Let's Work Together</h2>
      <p className="contact-subtitle">Ready to turn your ideas into reality?</p>
      
      <div className="contact-links">
        {contactLinks.map((link, index) => (
          <a 
            key={index}
            href={link.href}
            className="contact-link"
            target={link.href.startsWith('http') ? '_blank' : '_self'}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
          >
            <span>{link.icon}</span>
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;