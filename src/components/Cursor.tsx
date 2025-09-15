import React, { useEffect, useRef, useState } from 'react';

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const requestRef = useRef<number>();

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    const updateCursorPosition = (e: MouseEvent) => {
      mouseX = e.clientX - 10;
      mouseY = e.clientY - 10;
    };

    const animateCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      requestRef.current = requestAnimationFrame(animateCursor);
    };

    const handleMouseEnter = () => setIsExpanded(true);
    const handleMouseLeave = () => setIsExpanded(false);

    // 使用 passive 事件监听器提高性能
    document.addEventListener('mousemove', updateCursorPosition, { passive: true });
    
    // 启动动画循环
    requestRef.current = requestAnimationFrame(animateCursor);

    // 延迟查找交互元素，确保 DOM 已渲染
    const setupInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll('a, button, .interactive');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
      
      return () => {
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    };

    const cleanupInteractive = setupInteractiveElements();

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      cleanupInteractive();
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`cursor ${isExpanded ? 'expand' : ''}`}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
        willChange: 'transform',
      }}
    />
  );
};

export default Cursor;