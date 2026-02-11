
import React, { useEffect, useRef, useState } from 'react';

const MouseFollower: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  const mouseRef = useRef({ x: 0, y: 0 });
  const ringRef = useRef({ x: 0, y: 0 });
  
  const dotElem = useRef<HTMLDivElement>(null);
  const ringElem = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Check if device is touch enabled
    const touchCheck = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touchCheck);
    if (touchCheck) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('.group') ||
        target.closest('select') ||
        target.classList.contains('cursor-pointer') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const animate = () => {
      const lerpFactor = 0.15;
      ringRef.current.x += (mouseRef.current.x - ringRef.current.x) * lerpFactor;
      ringRef.current.y += (mouseRef.current.y - ringRef.current.y) * lerpFactor;

      if (dotElem.current) {
        dotElem.current.style.transform = `translate3d(${mouseRef.current.x}px, ${mouseRef.current.y}px, 0)`;
      }

      if (ringElem.current) {
        ringElem.current.style.transform = `translate3d(${ringRef.current.x}px, ${ringRef.current.y}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Central Precision Point */}
      <div 
        ref={dotElem}
        className={`absolute -left-1 -top-1 w-2 h-2 bg-white rounded-full z-30 transition-all duration-200 ${
          isHovering ? 'scale-0 opacity-0' : 'opacity-100'
        }`}
      />

      {/* High-Tech Precision Ring */}
      <div 
        ref={ringElem}
        className={`absolute -left-5 -top-5 w-10 h-10 rounded-full z-20 flex items-center justify-center border transition-all duration-300 ease-out will-change-transform ${
          isHovering ? 'scale-[1.8] border-white' : 'scale-100 border-white/20'
        } ${isClicked ? 'scale-[0.85]' : ''}`}
        style={{
          borderWidth: isHovering ? '1px' : '1px',
        }}
      >
        {/* Core Expansion */}
        <div 
          className={`w-1 h-1 bg-white rounded-full transition-all duration-300 ${isHovering ? 'scale-[4] opacity-10' : 'opacity-0 scale-0'}`} 
        />
        
        {/* Label Hint */}
        {isHovering && (
          <div className="absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] font-black tracking-[0.4em] uppercase text-white/40 animate-in fade-in slide-in-from-top-1">
            SELECT
          </div>
        )}
      </div>

      {/* Focal Ambient Glow */}
      <div 
        className="absolute -left-20 -top-20 w-40 h-40 rounded-full bg-white opacity-[0.03] transition-all duration-1000 blur-[50px]"
        style={{
          transform: `translate3d(${ringRef.current.x}px, ${ringRef.current.y}px, 0)`,
        }}
      />
    </div>
  );
};

export default MouseFollower;
