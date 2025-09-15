import React, { useEffect, useState } from 'react';
import '../styles/Loader.css';

const Loader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`loader ${!isVisible ? 'fade-out' : ''}`}>
      <div className="loader-circle"></div>
    </div>
  );
};

export default Loader;