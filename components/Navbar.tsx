
import React, { useState } from 'react';
import { ViewType } from '../types.ts';

interface NavbarProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-3xl border-b border-white/5 px-10 py-7">
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <div 
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => setView(ViewType.HOME)}
        >
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00A3FF] via-[#9D00FF] to-[#FF00E5] text-white rounded-[4px] flex items-center justify-center shadow-[0_0_20px_rgba(157,0,255,0.3)] transition-all group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,0,229,0.5)]">
              <span className="font-black text-xl tracking-tighter">M</span>
            </div>
            <div className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t border-l border-white/30" />
            <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b border-r border-white/30" />
          </div>
          <span className="text-2xl font-black tracking-[-0.07em] text-white uppercase leading-none">
            MOMENTUM.
          </span>
        </div>
        
        {/* Navigation Items + Status */}
        <div className="flex items-center">
          {/* Main Menu Links */}
          <div className="flex gap-14 items-center">
            {menuItems.map((item) => (
              <div 
                key={item.id} 
                className="relative py-2"
                onMouseEnter={() => item.sub && setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  onClick={() => !item.sub && setView(item.id as ViewType)}
                  className={`group/btn flex items-center gap-2 text-[11px] font-black tracking-[0.15em] transition-all duration-300 uppercase ${
                    currentView === item.id || activeDropdown === item.id ? 'text-white' : 'text-zinc-500 hover:text-white'
                  }`}
                >
                  {item.label}
                  {item.sub && (
                    <svg 
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180 text-[#FF00E5]' : 'text-zinc-600'}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                
                {/* Submenu */}
                {item.sub && activeDropdown === item.id && (
                  <div className={`absolute top-full pt-6 ${item.id === 'srv' ? 'w-[42rem] -left-[20rem]' : 'w-80 left-0'} animate-in fade-in slide-in-from-top-4 duration-200 ease-out`}>
                    <div className="relative bg-[#0a0a0a] border border-white/10 rounded-xl shadow-[0_40px_80px_rgba(0,0,0,0.8)] overflow-hidden">
                      
                      {/* Multi-color line at the top */}
                      <div className="h-[2px] w-full flex">
                        <div className="flex-1 h-full bg-[#00A3FF]" />
                        <div className="flex-1 h-full bg-[#9D00FF]" />
                        <div className="flex-1 h-full bg-[#FF00E5]" />
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
                            {/* Vertical Pink Bar on Hover */}
                            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FF00E5] translate-x-[-3px] group-hover/sub:translate-x-0 transition-transform duration-300 shadow-[2px_0_10px_#FF00E5]" />

                            {/* Dotted Light - Dim when off, Pink when on */}
                            <div className="relative flex items-center justify-center shrink-0 ml-1">
                               <div className="w-1.5 h-1.5 bg-zinc-800 group-hover/sub:bg-[#FF00E5] rounded-full transition-all duration-300 shadow-[0_0_0px_transparent] group-hover/sub:shadow-[0_0_12px_#FF00E5]" />
                               <div className="absolute inset-0 bg-[#FF00E5] rounded-full blur-[4px] opacity-0 group-hover/sub:opacity-50 transition-opacity duration-300" />
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

          {/* Vertical Separator "Light Line" */}
          <div className="h-10 w-[1px] bg-gradient-to-b from-transparent via-white/15 to-transparent mx-10 shrink-0" />

          {/* Active Status Indicator (Separated) */}
          <div className="flex flex-col items-center justify-center px-4 py-2 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.03] backdrop-blur-2xl min-w-[80px] group/status hover:border-emerald-500/40 transition-all duration-500">
            <div className="relative flex items-center justify-center mb-1.5 h-2">
              <div className="absolute w-5 h-5 bg-emerald-500/20 rounded-full animate-ping" />
              <div className="relative w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.8)] group-hover/status:shadow-[0_0_18px_rgba(16,185,129,1)] transition-all" />
            </div>
            <span className="text-[8px] font-black text-emerald-500 tracking-[0.15em] uppercase leading-none">SYSTEM ACTIVE</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
