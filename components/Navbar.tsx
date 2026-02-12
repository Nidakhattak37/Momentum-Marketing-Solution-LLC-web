
import React, { useState, useEffect } from 'react';
import { ViewType } from '../types.ts';

interface NavbarProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const brandGradient = 'linear-gradient(to bottom right, #00E5FF, #9D00FF, #FF00C7)';

  const menuItems = [
    { 
      label: 'HOME', 
      id: ViewType.HOME 
    },
    { 
      label: 'WHAT WE DO', 
      id: 'wwd',
      sub: [
        { label: 'OUR PROCESS', id: ViewType.WHAT_WE_DO },
        { label: 'WHY MOMENTUM', id: ViewType.WHAT_WE_DO },
        { label: 'CASE STUDIES', id: ViewType.WHAT_WE_DO },
      ]
    },
    { 
      label: 'SERVICES', 
      id: 'srv',
      sub: [
        { label: 'SEO', id: ViewType.SERVICES },
        { label: 'Social Media', id: ViewType.SERVICES },
        { label: 'Content Marketing', id: ViewType.SERVICES },
        { label: 'Web Development', id: ViewType.SERVICES },
        { label: 'Mobile Apps', id: ViewType.SERVICES },
        { label: 'Branding', id: ViewType.SERVICES },
        { label: 'Analytics', id: ViewType.SERVICES },
        { label: 'PPC', id: ViewType.SERVICES },
      ]
    },
    { 
      label: 'INDUSTRIES', 
      id: 'ind',
      sub: [
        { label: 'HEALTH', id: ViewType.INDUSTRIES },
        { label: 'EDUCATION', id: ViewType.INDUSTRIES },
        { label: 'E-COMMERCE', id: ViewType.INDUSTRIES },
        { label: 'REAL ESTATE', id: ViewType.INDUSTRIES },
      ]
    },
    { label: 'CONTACT', id: ViewType.CONTACT },
  ];

  const handleLinkClick = (id: string) => {
    setView(id as ViewType);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={`sticky top-0 z-[100] border-b border-white/5 px-6 lg:px-10 py-4 lg:py-5 transition-colors duration-300 ${isMobileMenuOpen ? 'bg-black' : 'bg-black/90 backdrop-blur-2xl'}`}>
      <div className="max-w-[1800px] mx-auto flex items-center justify-between relative">
        
        {/* Logo Section */}
        <div 
          className="flex items-center gap-3 cursor-pointer group relative z-[210]"
          onClick={() => handleLinkClick(ViewType.HOME)}
        >
          <div className="relative">
            <div 
              className="w-7 h-7 lg:w-8 lg:h-8 text-white rounded-[3px] flex items-center justify-center shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all group-hover:scale-105"
              style={{ background: brandGradient }}
            >
              <span className="font-black text-xs lg:text-sm tracking-tighter">M</span>
            </div>
          </div>
          <span className="text-sm lg:text-base font-black tracking-[-0.05em] text-white uppercase leading-none">
            MOMENTUM.
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <div className="flex gap-8 items-center">
            {menuItems.map((item) => (
              <div 
                key={item.id} 
                className="relative py-2"
                onMouseEnter={() => item.sub && setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  onClick={() => !item.sub && handleLinkClick(item.id)}
                  className={`flex items-center gap-1.5 text-[9px] font-black tracking-[0.2em] transition-all duration-300 uppercase ${
                    currentView === item.id || activeDropdown === item.id ? 'text-white' : 'text-zinc-500 hover:text-white'
                  }`}
                >
                  {item.label}
                  {item.sub && (
                    <svg className={`w-2.5 h-2.5 transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180 text-cyan-400' : 'text-zinc-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                
                {item.sub && activeDropdown === item.id && (
                  <div className="absolute top-full pt-4 left-0 w-64 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="bg-[#0a0a0a] border border-white/10 rounded-lg shadow-2xl overflow-hidden p-1">
                      {item.sub.map((sub, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleLinkClick(sub.id)}
                          className="w-full text-left px-4 py-2.5 hover:bg-white/[0.03] rounded flex items-center gap-3 group/sub"
                        >
                          <div className="w-1 h-1 bg-zinc-800 group-hover/sub:bg-cyan-400 rounded-full transition-colors" />
                          <span className="text-[9px] font-bold text-zinc-500 group-hover/sub:text-white uppercase tracking-widest">{sub.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="h-6 w-[1px] bg-white/10 mx-6" />
          <div className="flex flex-col items-center">
             <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_5px_#10b981]" />
             <span className="text-[7px] font-black text-emerald-500 tracking-widest mt-1">ACTIVE</span>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden z-[210] relative w-12 h-12 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-7'}`} />
          <span className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-5 ml-auto'}`} />
          <span className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-7'}`} />
        </button>

        {/* Mobile Menu Overlay - Absolute Solid Blackout */}
        <div 
          className={`fixed inset-0 z-[200] lg:hidden flex flex-col transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          style={{ 
            backgroundColor: '#000000', 
            opacity: 1,
            visibility: isMobileMenuOpen ? 'visible' : 'hidden'
          }}
        >
          <div className="flex-1 flex flex-col justify-center px-10 pt-16">
            <div className="space-y-0.5 max-h-[85vh] overflow-y-auto scrollbar-hide">
              {menuItems.map((item, idx) => (
                <div key={item.id} className="border-b border-white/5 last:border-0">
                  <div className="flex flex-col">
                    <button 
                      onClick={() => item.sub ? setActiveDropdown(activeDropdown === item.id ? null : item.id) : handleLinkClick(item.id)}
                      className={`text-[9px] font-black tracking-[0.25em] uppercase flex items-center justify-between w-full py-4 transition-colors duration-300 ${
                        currentView === item.id || (item.sub && activeDropdown === item.id) ? 'text-white' : 'text-zinc-700'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {currentView === item.id && <div className="w-1 h-1 bg-cyan-400 rounded-full" />}
                        {item.label}
                      </span>
                      {item.sub && (
                        <svg className={`w-2.5 h-2.5 transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180 text-cyan-400' : 'text-zinc-800'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>
                    
                    {item.sub && activeDropdown === item.id && (
                      <div className="mb-4 space-y-2.5 border-l border-white/10 ml-0.5 pl-4 animate-in slide-in-from-left-2 duration-300">
                        {item.sub.map((sub, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => handleLinkClick(sub.id)}
                            className="block text-[7px] font-black text-zinc-300 hover:text-white uppercase tracking-[0.2em] transition-colors py-1 text-left"
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
