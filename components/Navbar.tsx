
import React, { useState } from 'react';
import { ViewType } from '../types.ts';

interface NavbarProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    { label: 'HOME', id: ViewType.HOME },
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
        { label: 'SEARCH ENGINE OPTIMIZATION (SEO)', id: ViewType.SERVICES },
        { label: 'PAY-PER-CLICK (PPC)', id: ViewType.SERVICES },
        { label: 'SOCIAL MEDIA MANAGEMENT', id: ViewType.SERVICES },
        { label: 'CONTENT MARKETING', id: ViewType.SERVICES },
      ]
    },
    { 
      label: 'AI LABS', 
      id: 'labs',
      sub: [
        { label: 'IMAGE STUDIO', id: ViewType.IMAGE_LAB },
        { label: 'VIDEO STUDIO', id: ViewType.VIDEO_LAB },
        { label: 'VOICE VAULT', id: ViewType.VOICE_LAB },
        { label: 'CREATIVE ASSISTANT', id: ViewType.ASSISTANT },
      ]
    },
    { 
      label: 'INDUSTRIES', 
      id: 'ind',
      sub: [
        { label: 'E-COMMERCE', id: ViewType.INDUSTRIES },
        { label: 'HEALTHCARE', id: ViewType.INDUSTRIES },
        { label: 'TECHNOLOGY / SAAS', id: ViewType.INDUSTRIES },
        { label: 'REAL ESTATE', id: ViewType.INDUSTRIES },
      ]
    },
    { label: 'CONTACT', id: ViewType.CONTACT },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-2xl border-b border-white/5 px-8 py-5">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <div 
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => setView(ViewType.HOME)}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-[#00A3FF] via-[#9D00FF] to-[#FF00E5] rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20 transition-transform group-hover:scale-105">
            <span className="text-white font-black text-xl italic">M</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-white uppercase italic">
            MOMENTUM.
          </span>
        </div>
        
        <div className="hidden lg:flex items-center gap-10">
          {menuItems.map((item) => (
            <div 
              key={item.id} 
              className="relative group"
              onMouseEnter={() => item.sub && setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => !item.sub && setView(item.id as ViewType)}
                className={`flex items-center gap-1.5 text-[11px] font-bold tracking-[0.15em] transition-all duration-300 ${
                  currentView === item.id ? 'text-white' : 'text-zinc-500 hover:text-white'
                }`}
              >
                {item.label}
                {item.sub && (
                  <svg className="w-2.5 h-2.5 opacity-40 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              
              {item.sub && (
                <div className="absolute top-full left-0 pt-4 w-72 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl p-2 shadow-2xl overflow-hidden">
                    {item.sub.map((sub, idx) => (
                      <button
                        key={idx}
                        onClick={() => setView(sub.id)}
                        className="w-full text-left px-4 py-3 text-[10px] font-bold tracking-widest text-zinc-500 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]" />
            <span className="text-[10px] font-black text-zinc-400 tracking-tighter">LIVE SYSTEM ACTIVE</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
