
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
        { label: 'OUR PROCESS', id: ViewType.WHAT_WE_DO, desc: 'Strategic deployment framework.' },
        { label: 'WHY MOMENTUM', id: ViewType.WHAT_WE_DO, desc: 'Our competitive performance edge.' },
        { label: 'CASE STUDIES', id: ViewType.WHAT_WE_DO, desc: 'Verified ROI success stories.' },
      ]
    },
    { 
      label: 'SERVICES', 
      id: 'srv',
      sub: [
        { label: 'SEO STRATEGY', id: ViewType.SERVICES, desc: 'Organic search engine dominance.' },
        { label: 'PPC & PAID', id: ViewType.SERVICES, desc: 'Precision-targeted ad scaling.' },
        { label: 'SOCIAL MGMT', id: ViewType.SERVICES, desc: 'Community & brand resonance.' },
        { label: 'CONTENT', id: ViewType.SERVICES, desc: 'Authority-building narratives.' },
      ]
    },
    { 
      label: 'AI LABS', 
      id: 'labs',
      sub: [
        { label: 'LIVE SYNC', id: ViewType.LIVE_SYNC, desc: 'Real-time voice briefing mode.' },
        { label: 'IMAGE STUDIO', id: ViewType.IMAGE_LAB, desc: 'Generative high-fidelity visuals.' },
        { label: 'VIDEO STUDIO', id: ViewType.VIDEO_LAB, desc: 'Cinematic Veo-powered motion.' },
        { label: 'VOICE VAULT', id: ViewType.VOICE_LAB, desc: 'Advanced neural speech synthesis.' },
        { label: 'ASSISTANT', id: ViewType.ASSISTANT, desc: 'Creative LLM prompt engine.' },
      ]
    },
    { label: 'CONTACT', id: ViewType.CONTACT },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur-3xl border-b border-white/5 px-8 py-5">
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
              className="relative"
              onMouseEnter={() => item.sub && setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => !item.sub && setView(item.id as ViewType)}
                className={`flex items-center gap-1.5 text-[11px] font-bold tracking-[0.2em] transition-all duration-300 ${
                  currentView === item.id ? 'text-white' : 'text-zinc-500 hover:text-white'
                }`}
              >
                {item.label}
                {item.sub && (
                  <svg className={`w-2.5 h-2.5 opacity-40 transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              
              {item.sub && activeDropdown === item.id && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 w-80 animate-in fade-in zoom-in-95 duration-200">
                  <div className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-3 shadow-2xl backdrop-blur-2xl ring-1 ring-white/5">
                    <div className="grid gap-1">
                      {item.sub.map((sub, idx) => (
                        <button
                          key={idx}
                          onClick={() => setView(sub.id)}
                          className={`group/sub w-full text-left p-4 hover:bg-white/[0.03] rounded-2xl transition-all ${sub.id === ViewType.LIVE_SYNC ? 'border border-blue-500/10' : ''}`}
                        >
                          <div className={`text-[10px] font-black tracking-widest group-hover/sub:text-white mb-1 transition-colors uppercase flex items-center gap-2 ${sub.id === ViewType.LIVE_SYNC ? 'text-blue-400' : 'text-zinc-400'}`}>
                            {sub.label}
                            {sub.id === ViewType.LIVE_SYNC && <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />}
                          </div>
                          <div className="text-[9px] font-medium text-zinc-600 group-hover/sub:text-zinc-400 transition-colors">
                            {sub.desc}
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

        <div className="flex items-center gap-6">
          <button 
            onClick={() => setView(ViewType.LIVE_SYNC)}
            className="hidden sm:flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 hover:border-blue-500/40 px-4 py-2 rounded-2xl transition-all group"
          >
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_#3b82f6]" />
            <span className="text-[9px] font-black text-blue-400 tracking-widest uppercase italic group-hover:text-white">LIVE_SYNC</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
