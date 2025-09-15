import { useEffect } from 'react';
import { ThemeColor } from '../types';

const useThemeChange = () => {
  useEffect(() => {
    const colors: ThemeColor[] = [
      { start: '#667eea', end: '#764ba2' },
      { start: '#f093fb', end: '#f5576c' },
      { start: '#4facfe', end: '#00f2fe' },
      { start: '#43e97b', end: '#38f9d7' }
    ];

    let currentColorIndex = 0;

    const changeThemeColor = () => {
      const color = colors[currentColorIndex];
      document.documentElement.style.setProperty('--gradient-start', color.start);
      document.documentElement.style.setProperty('--gradient-end', color.end);
      currentColorIndex = (currentColorIndex + 1) % colors.length;
    };

    const interval = setInterval(changeThemeColor, 10000);

    return () => clearInterval(interval);
  }, []);
};

export default useThemeChange;