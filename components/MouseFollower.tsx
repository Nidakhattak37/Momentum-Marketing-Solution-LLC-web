
import React, { useEffect, useRef, useState } from 'react';

const MouseFollower: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  // Real mouse coordinates
  const mouseRef = useRef({ x: 0, y: 0 });
  // Interpolated (smooth) coordinates for the ring
  const ringRef = useRef({ x: 0, y: 0 });
  
  const dotElem = useRef<HTMLDivElement>(null);
  const ringElem = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Adjust mouse position for 90% zoom factor
      mouseRef.current = { x: e.clientX / 0.9, y: e.clientY / 0.9 };
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
      // Lerp (Linear Interpolation) for the smooth ring follow
      const lerpFactor = 0.12;
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

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Central Multi-color Point */}
      <div 
        ref={dotElem}
        className={`absolute -left-1.5 -top-1.5 w-3 h-3 rounded-full z-30 transition-all duration-300 ease-out shadow-lg ${
          isHovering ? 'scale-0 opacity-0' : 'opacity-100'
        }`}
        style={{
          background: 'linear-gradient(45deg, #00A3FF, #9D00FF, #FF00E5)',
          boxShadow: '0 0 10px rgba(157, 0, 255, 0.5)'
        }}
      />

      {/* Kinetic Multi-color Outer Ring */}
      <div 
        ref={ringElem}
        className={`absolute -left-6 -top-6 w-12 h-12 rounded-full z-20 flex items-center justify-center transition-all duration-500 ease-out will-change-transform ${
          isHovering ? 'scale-[2.2]' : 'scale-100'
        } ${isClicked ? 'scale-[0.85]' : ''}`}
        style={{
          borderWidth: '2px',
          borderStyle: 'solid',
          // Conic gradient creates a spectrum around the circle border
          borderImage: 'conic-gradient(#00A3FF, #9D00FF, #FF00E5, #00A3FF) 1',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'destination-out',
          background: isHovering 
            ? 'radial-gradient(circle, rgba(157, 0, 255, 0.1) 0%, transparent 70%)' 
            : 'transparent'
        }}
      >
        {/* Colorful Pulsing Inner Detail */}
        <div 
          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${isHovering ? 'opacity-100 scale-125' : 'opacity-0 scale-50'}`} 
          style={{ background: 'linear-gradient(to right, #00A3FF, #FF00E5)' }}
        />
        
        {/* Hover label hint */}
        {isHovering && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-black tracking-[0.4em] uppercase italic animate-in fade-in slide-in-from-top-1">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#FF00E5]">
              DOMINATE_NODE
            </span>
          </div>
        )}
      </div>

      {/* Multi-color Atmospheric Glow (Ambient) */}
      <div 
        className="absolute -left-20 -top-20 w-40 h-40 rounded-full opacity-10 transition-all duration-1000 blur-[40px]"
        style={{
          transform: `translate3d(${ringRef.current.x}px, ${ringRef.current.y}px, 0)`,
          background: 'conic-gradient(#00A3FF, #9D00FF, #FF00E5, #00A3FF)',
        }}
      />
    </div>
  );
};

export default MouseFollower;
