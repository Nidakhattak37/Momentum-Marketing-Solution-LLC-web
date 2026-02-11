
import React, { useEffect, useState, useRef } from 'react';

const MouseFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const followerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Direct DOM manipulation for performance (avoiding React render cycles for 60fps movement)
      if (followerRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        followerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('.group') ||
        target.closest('select')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] overflow-hidden"
      style={{ mixBlendMode: 'screen' }}
    >
      {/* Primary Glow */}
      <div 
        ref={followerRef}
        className={`absolute -left-10 -top-10 w-20 h-20 rounded-full transition-all duration-300 ease-out will-change-transform ${
          isHovering ? 'scale-[2.5] opacity-40' : 'scale-100 opacity-20'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(0, 163, 255, 0.8) 0%, rgba(157, 0, 255, 0.4) 50%, transparent 80%)',
          filter: 'blur(15px)',
        }}
      />
      
      {/* Delayed Secondary Trail */}
      <div 
        className="absolute -left-5 -top-5 w-10 h-10 rounded-full transition-all duration-700 ease-out opacity-10"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          background: 'radial-gradient(circle, rgba(255, 0, 229, 0.8) 0%, transparent 70%)',
          filter: 'blur(20px)',
          transitionDelay: '50ms'
        }}
      />
    </div>
  );
};

export default MouseFollower;
