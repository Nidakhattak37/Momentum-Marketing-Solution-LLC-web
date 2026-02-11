
import React, { useState } from 'react';
import { ViewType } from './types.ts';
import Navbar from './components/Navbar.tsx';
import Home from './components/sections/Home.tsx';
import ImageStudio from './components/sections/ImageStudio.tsx';
import VideoStudio from './components/sections/VideoStudio.tsx';
import VoiceStudio from './components/sections/VoiceStudio.tsx';
import Assistant from './components/sections/Assistant.tsx';
import Contact from './components/sections/Contact.tsx';
import WhatWeDo from './components/sections/WhatWeDo.tsx';
import Industries from './components/sections/Industries.tsx';
import Services from './components/sections/Services.tsx';
import LiveStrategist from './components/sections/LiveStrategist.tsx';
import MouseFollower from './components/MouseFollower.tsx';

const App: React.FC = () => {
  const [currentView, setView] = useState<ViewType>(ViewType.HOME);

  const brandGradient = 'linear-gradient(to right, #00E5FF, #9D00FF, #FF00C7)';

  const renderView = () => {
    switch (currentView) {
      case ViewType.HOME:
        return <Home setView={setView} />;
      case ViewType.IMAGE_LAB:
        return <ImageStudio />;
      case ViewType.VIDEO_LAB:
        return <VideoStudio />;
      case ViewType.VOICE_LAB:
        return <VoiceStudio />;
      case ViewType.ASSISTANT:
        return <Assistant />;
      case ViewType.CONTACT:
        return <Contact />;
      case ViewType.WHAT_WE_DO:
        return <WhatWeDo />;
      case ViewType.INDUSTRIES:
        return <Industries />;
      case ViewType.SERVICES:
        return <Services />;
      case ViewType.LIVE_SYNC:
        return <LiveStrategist />;
      default:
        return <Home setView={setView} />;
    }
  };

  const footerNav = [
    { 
      title: 'PLATFORM', 
      links: [
        { label: 'HOME', id: ViewType.HOME },
        { label: 'WHAT WE DO', id: ViewType.WHAT_WE_DO },
        { label: 'SERVICES', id: ViewType.SERVICES },
        { label: 'INDUSTRIES', id: ViewType.INDUSTRIES },
      ]
    },
    { 
      title: 'AI LABS', 
      links: [
        { label: 'IMAGE LAB', id: ViewType.IMAGE_LAB },
        { label: 'VIDEO LAB', id: ViewType.VIDEO_LAB },
        { label: 'VOICE VAULT', id: ViewType.VOICE_LAB },
        { label: 'ORACLE SYNC', id: ViewType.LIVE_SYNC },
      ]
    },
    { 
      title: 'INDUSTRIES', 
      links: [
        { label: 'HEALTH', id: ViewType.INDUSTRIES },
        { label: 'EDUCATION', id: ViewType.INDUSTRIES },
        { label: 'E-COMMERCE', id: ViewType.INDUSTRIES },
        { label: 'REAL ESTATE', id: ViewType.INDUSTRIES },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-gray-100 flex flex-col selection:bg-white/10 selection:text-white cursor-none scanline relative">
      <MouseFollower />

      <Navbar currentView={currentView} setView={setView} />
      
      <main className="flex-1 relative">
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#000000]" />
          <div className="absolute top-[0%] left-[-10%] w-[70%] h-[70%] bg-cyan-500/[0.03] blur-[200px] rounded-full animate-pulse" style={{ animationDuration: '15s' }} />
          <div className="absolute inset-0 opacity-[0.05] animate-grid-flow" 
               style={{
                 backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                 backgroundSize: '60px 60px'
               }} />
        </div>
        
        {/* Adjusted main padding for wider layout */}
        <div className="relative z-10 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          {renderView()}

          {(currentView === ViewType.HOME || currentView === ViewType.WHAT_WE_DO || currentView === ViewType.INDUSTRIES || currentView === ViewType.SERVICES) && (
            <div className="mt-20 border-t border-white/5">
               <Contact />
            </div>
          )}
        </div>
      </main>

      {/* Adjusted footer padding for wider layout */}
      <footer className="bg-black py-24 border-t border-white/5 relative z-10 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5 space-y-10">
              <div className="flex items-center gap-4">
                <div 
                  className="w-10 h-10 text-white rounded-lg flex items-center justify-center font-black shadow-lg"
                  style={{ background: brandGradient }}
                >M</div>
                <span className="text-2xl font-black uppercase tracking-tighter">MOMENTUM.</span>
              </div>
              <p className="text-zinc-500 max-w-sm text-lg font-medium leading-relaxed">
                The global benchmark for high-performance marketing architecture. Engineering dominance through recursive growth cycles.
              </p>
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-black text-zinc-700 uppercase tracking-widest">Connect Node</span>
                <a href="mailto:info@mymomentumsolutions.com" className="text-xl font-bold text-white hover:text-cyan-400 transition-colors underline underline-offset-8 decoration-white/10">info@mymomentumsolutions.com</a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
              {footerNav.map((group, i) => (
                <div key={i} className="space-y-8">
                  <h4 className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">{group.title}</h4>
                  <ul className="space-y-4">
                    {group.links.map((link, j) => (
                      <li key={j}>
                        <button 
                          onClick={() => setView(link.id)}
                          className="text-[11px] font-black text-zinc-500 hover:text-white transition-all uppercase tracking-widest block"
                        >
                          {link.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
               <span className="text-[10px] font-black text-zinc-700 tracking-[0.3em] uppercase">© 2024 MOMENTUM</span>
               <div className="w-1 h-1 bg-zinc-800 rounded-full" />
               <span className="text-[10px] font-black text-zinc-700 tracking-[0.3em] uppercase">EST. 2024</span>
            </div>
            <div className="flex gap-10">
               {['LinkedIn', 'Twitter', 'Github'].map(social => (
                 <a key={social} href="#" className="text-[10px] font-black text-zinc-500 hover:text-white transition-colors uppercase tracking-[0.2em]">{social}</a>
               ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
