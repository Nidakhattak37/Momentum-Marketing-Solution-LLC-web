
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
        { label: 'Search Engine Optimization (SEO)', id: ViewType.SERVICES },
        { label: 'Social Media Management', id: ViewType.SERVICES },
        { label: 'Content Marketing', id: ViewType.SERVICES },
        { label: 'Web Design & Development', id: ViewType.SERVICES },
        { label: 'Mobile App Development', id: ViewType.SERVICES },
        { label: 'Branding & Identity', id: ViewType.SERVICES },
        { label: 'Data & Analytics', id: ViewType.SERVICES },
        { label: 'pay-per-click(PPC)', id: ViewType.SERVICES },
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

  const handleLinkClick = (id: string, isSub: boolean = false) => {
    if (!isSub) {
      setView(id as ViewType);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-[100] bg-black/80 backdrop-blur-3xl border-b border-white/5 px-6 lg:px-10 py-5 lg:py-7">
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <div 
          className="flex items-center gap-4 cursor-pointer group z-[110]"
          onClick={() => { setView(ViewType.HOME); setIsMobileMenuOpen(false); }}
        >
          <div className="relative">
            <div 
              className="w-9 h-9 lg:w-10 lg:h-10 text-white rounded-[4px] flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(0,229,255,0.5)]"
              style={{ background: brandGradient }}
            >
              <span className="font-black text-lg lg:text-xl tracking-tighter">M</span>
            </div>
            <div className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t border-l border-white/30" />
            <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b border-r border-white/30" />
          </div>
          <span className="text-xl lg:text-2xl font-black tracking-[-0.07em] text-white uppercase leading-none">
            MOMENTUM.
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <div className="flex gap-10 xl:gap-14 items-center">
            {menuItems.map((item) => (
              <div 
                key={item.id} 
                className="relative py-2"
                onMouseEnter={() => item.sub && setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  onClick={() => !item.sub && handleLinkClick(item.id)}
                  className={`group/btn flex items-center gap-2 text-[11px] font-black tracking-[0.15em] transition-all duration-300 uppercase ${
                    currentView === item.id || activeDropdown === item.id ? 'text-white' : 'text-zinc-500 hover:text-white'
                  }`}
                >
                  {item.label}
                  {item.sub && (
                    <svg 
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180 text-cyan-400' : 'text-zinc-600'}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                
                {item.sub && activeDropdown === item.id && (
                  <div className={`absolute top-full pt-6 ${item.id === 'srv' ? 'w-[42rem] -left-[20rem]' : 'w-80 left-0'} animate-in fade-in slide-in-from-top-4 duration-200 ease-out`}>
                    <div className="relative bg-[#0a0a0a] border border-white/10 rounded-xl shadow-[0_40px_80px_rgba(0,0,0,0.8)] overflow-hidden">
                      <div className="h-[2px] w-full flex">
                        <div className="flex-1 h-full bg-[#00E5FF]" />
                        <div className="flex-1 h-full bg-[#9D00FF]" />
                        <div className="flex-1 h-full bg-[#FF00C7]" />
                      </div>
                      <div className={`p-1.5 ${item.id === 'srv' ? 'grid grid-cols-2 gap-x-1.5' : 'space-y-0.5'}`}>
                        {item.sub.map((sub, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              setView(sub.id);
                              setActiveDropdown(null);
                            }}
                            className="w-full text-left relative px-5 py-4 hover:bg-white/[0.04] rounded-lg transition-all group/sub flex items-center gap-4 overflow-hidden"
                          >
                            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-cyan-400 translate-x-[-3px] group-hover/sub:translate-x-0 transition-transform duration-300 shadow-[2px_0_10px_rgba(0,229,255,0.5)]" />
                            <div className="relative flex items-center justify-center shrink-0 ml-1">
                               <div className="w-1.5 h-1.5 bg-zinc-800 group-hover/sub:bg-cyan-400 rounded-full transition-all duration-300 shadow-[0_0_0px_transparent] group-hover/sub:shadow-[0_0_12px_rgba(0,229,255,0.8)]" />
                               <div className="absolute inset-0 bg-cyan-400 rounded-full blur-[4px] opacity-0 group-hover/sub:opacity-50 transition-opacity duration-300" />
                            </div>
                            <div className="flex-1">
                              <span className="text-[11px] font-bold text-zinc-500 group-hover/sub:text-white uppercase tracking-[0.05em] transition-colors">
                                {sub.label}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="h-10 w-[1px] bg-gradient-to-b from-transparent via-white/15 to-transparent mx-10 shrink-0" />
          <div className="flex flex-col items-center justify-center px-4 py-2 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] backdrop-blur-2xl min-w-[80px] group/status hover:border-emerald-500/40 transition-all duration-500">
            <div className="relative flex items-center justify-center mb-1.5 h-2">
              <div className="absolute w-5 h-5 bg-emerald-500/20 rounded-full animate-ping" />
              <div className="relative w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.8)] group-hover/status:shadow-[0_0_18px_rgba(16,185,129,1)] transition-all" />
            </div>
            <span className="text-[8px] font-black text-emerald-500 tracking-[0.15em] uppercase leading-none">SYSTEM ACTIVE</span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <div className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`} />
          <div className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-5 ml-auto'}`} />
          <div className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-8'}`} />
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#020202] z-[105] lg:hidden transition-all duration-500 ease-expo ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
          
          <div className="relative h-full flex flex-col p-8 pt-32 overflow-y-auto">
            {menuItems.map((item) => (
              <div key={item.id} className="mb-8 last:mb-0">
                <button 
                  onClick={() => item.sub ? setActiveDropdown(activeDropdown === item.id ? null : item.id) : handleLinkClick(item.id)}
                  className={`text-4xl font-black tracking-tighter uppercase transition-colors flex items-center gap-4 ${
                    currentView === item.id ? 'text-cyan-400' : 'text-white'
                  }`}
                >
                  {item.label}
                  {item.sub && (
                    <svg 
                      className={`w-6 h-6 transition-transform ${activeDropdown === item.id ? 'rotate-180' : ''}`} 
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                
                {item.sub && activeDropdown === item.id && (
                  <div className="mt-4 ml-4 space-y-4 border-l border-white/10 pl-6 animate-in slide-in-from-left-4 duration-300">
                    {item.sub.map((sub, idx) => (
                      <button
                        key={idx}
                        onClick={() => { setView(sub.id); setIsMobileMenuOpen(false); }}
                        className="block text-xl font-bold text-zinc-500 hover:text-white uppercase tracking-tight transition-colors text-left"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="mt-auto pt-10 border-t border-white/5 flex flex-col gap-6">
              <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-cyan-400/5 border border-cyan-400/20">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-xs font-black text-cyan-400 tracking-[0.2em] uppercase">MOMENTUM NODE ACTIVE</span>
              </div>
              <p className="text-[10px] font-black text-zinc-700 uppercase tracking-widest text-center">v2.5_DEPLOYMENT_STABLE</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
