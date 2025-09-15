import { useEffect } from 'react';

const useScrollEffects = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
        }
      });
    }, observerOptions);

    const observeElements = () => {
      const elements = document.querySelectorAll('.about-card, .section-header, .project-card, .featured-project-card');
      elements.forEach(el => observer.observe(el));
    };

    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.floating-elements');
      if (parallax) {
        (parallax as HTMLElement).style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    const handleKeyboard = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown':
          window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
          break;
        case 'ArrowUp':
          window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
          break;
        case 'Home':
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        case 'End':
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          break;
      }
    };

    setTimeout(observeElements, 100);
    window.addEventListener('scroll', handleParallax);
    document.addEventListener('keydown', handleKeyboard);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleParallax);
      document.removeEventListener('keydown', handleKeyboard);
    };
  }, []);
};

export default useScrollEffects;