
import React, { useState, useEffect } from 'react';
import { ViewType } from '../types.ts';

interface NavbarProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
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
        { label: 'SEO Architecture', id: ViewType.SERVICES },
        { label: 'Social Media Hub', id: ViewType.SERVICES },
        { label: 'Content Strategy', id: ViewType.SERVICES },
        { label: 'Web Development', id: ViewType.SERVICES },
        { label: 'Mobile App Logic', id: ViewType.SERVICES },
        { label: 'Brand Engineering', id: ViewType.SERVICES },
        { label: 'Market Analytics', id: ViewType.SERVICES },
        { label: 'PPC Performance', id: ViewType.SERVICES },
      ]
    },
    { 
      label: 'INDUSTRIES', 
      id: 'ind',
      sub: [
        { label: 'HEALTH TECH', id: ViewType.INDUSTRIES },
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
    <nav className={`sticky top-0 z-[100] border-b border-white/5 px-6 lg:px-10 py-4 lg:py-5 transition-all duration-700 ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} ${isMobileMenuOpen ? 'bg-[#020202]' : 'bg-[#020202]/90 backdrop-blur-2xl'}`}>
      <div className="max-w-[1800px] mx-auto flex items-center justify-between relative">
        
        {/* Logo Section */}
        <div 
          className="flex items-center gap-3 cursor-pointer group relative z-[210] animate-in fade-in slide-in-from-left-4 duration-1000"
          onClick={() => handleLinkClick(ViewType.HOME)}
        >
          <div className="relative">
            <div 
              className="w-7 h-7 lg:w-8 lg:h-8 text-white rounded-[3px] flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all group-hover:scale-105"
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
            {menuItems.map((item, idx) => (
              <div 
                key={item.id} 
                className={`relative py-2 main-nav-item`}
                style={{ '--idx': idx } as React.CSSProperties}
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
                  <div className={`absolute top-full pt-4 ${item.id === 'srv' ? 'right-0 w-[520px]' : 'left-0 w-64'}`}>
                    <div className={`bg-[#020202] border border-white/10 rounded-xl shadow-[0_40px_80px_-20px_rgba(0,0,0,1)] overflow-hidden p-2 backdrop-blur-3xl submenu-container-reveal ${item.id === 'srv' ? 'grid grid-cols-2 gap-1' : 'space-y-1'}`}>
                      {item.sub.map((sub, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => handleLinkClick(sub.id)}
                          className="w-full text-left px-4 py-4 bg-white/[0.01] hover:bg-white/[0.05] rounded-lg flex items-center justify-between group/sub transition-all duration-300 submenu-item-reveal border border-white/[0.02] hover:border-white/10"
                          style={{ '--sIdx': sIdx } as React.CSSProperties}
                        >
                          <div className="flex items-center gap-1">
                            <div className="relative flex items-center h-4 w-[2px] mr-3 overflow-hidden rounded-full">
                              <div className="absolute inset-0 bg-[#FF00C7]" />
                              <div className="absolute inset-0 bg-[#00E5FF] -translate-y-full group-hover/sub:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                            </div>
                            
                            <span className="text-[9px] font-bold text-zinc-500 group-hover/sub:text-white uppercase tracking-widest transition-all duration-300 group-hover/sub:translate-x-1">
                              {sub.label}
                            </span>
                          </div>
                          <div className="relative flex items-center justify-center w-4 h-4">
                            <div className="w-1 h-1 rounded-full bg-zinc-900 border border-white/5 group-hover/sub:bg-cyan-400 group-hover/sub:border-cyan-300 group-hover/sub:shadow-[0_0_10px_#00E5FF,0_0_20px_rgba(0,229,255,0.4)] transition-all duration-500" />
                          </div>
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
        >
          <span className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-7'}`} />
          <span className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-5 ml-auto'}`} />
          <span className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-7'}`} />
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 z-[200] lg:hidden flex flex-col transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          style={{ 
            backgroundColor: '#020202', 
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
                        currentView === item.id || (item.sub && activeDropdown === item.id) ? 'text-white' : 'text-zinc-800'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        {item.label}
                      </span>
                      {item.sub && (
                        <svg className={`w-2.5 h-2.5 transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180 text-cyan-400' : 'text-zinc-900'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </button>
                    
                    {item.sub && activeDropdown === item.id && (
                      <div className="mb-4 space-y-2.5 border-l border-white/5 ml-0.5 pl-4 animate-in slide-in-from-left-2 duration-300">
                        {item.sub.map((sub, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => handleLinkClick(sub.id)}
                            className="block text-[7px] font-black text-zinc-500 hover:text-white uppercase tracking-[0.2em] transition-colors py-1 text-left"
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

      <style>{`
        @keyframes navItemEntrance {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .main-nav-item {
          opacity: 0;
          animation: navItemEntrance 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          animation-delay: calc(0.2s + var(--idx) * 0.1s);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
