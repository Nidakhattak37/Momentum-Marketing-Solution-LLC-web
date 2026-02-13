
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
      title: 'WHAT WE DO', 
      links: [
        { label: 'Our Process', id: ViewType.WHAT_WE_DO },
        { label: 'Why Momentum', id: ViewType.WHAT_WE_DO },
        { label: 'Case Studies', id: ViewType.WHAT_WE_DO },
      ]
    },
    { 
      title: 'SERVICES', 
      links: [
        { label: 'SEO Architecture', id: ViewType.SERVICES },
        { label: 'Social Media Hub', id: ViewType.SERVICES },
        { label: 'Content Strategy', id: ViewType.SERVICES },
        { label: 'Web Development', id: ViewType.SERVICES },
      ]
    },
    { 
      title: 'INDUSTRIES', 
      links: [
        { label: 'Health Tech', id: ViewType.INDUSTRIES },
        { label: 'Education', id: ViewType.INDUSTRIES },
        { label: 'E-Commerce', id: ViewType.INDUSTRIES },
        { label: 'Real Estate', id: ViewType.INDUSTRIES },
      ]
    }
  ];

  const socialLinks = [
    { label: 'LinkedIn', icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    ), url: '#' },
    { label: 'X', icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    ), url: '#' },
    { label: 'YouTube', icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505a3.017 3.017 0 0 0-2.122 2.136C0 8.055 0 12 0 12s0 3.945.501 5.814a3.015 3.015 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.945 24 12 24 12s0-3.945-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    ), url: '#' },
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-gray-100 flex flex-col selection:bg-white/10 selection:text-white cursor-none relative">
      <MouseFollower />

      <Navbar currentView={currentView} setView={setView} />
      
      <main className="flex-1 relative">
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          {/* Subtle Concentrated Ambient Glows - Navy/Black Mix with strictly #020202 base */}
          <div className="absolute top-[0%] left-[-15%] w-[90%] h-[90%] bg-blue-950/[0.08] blur-[200px] rounded-full animate-pulse" style={{ animationDuration: '20s' }} />
          <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-indigo-950/[0.05] blur-[180px] rounded-full animate-pulse" style={{ animationDuration: '15s' }} />
          
          {/* Polished Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.015] animate-grid-flow" 
               style={{
                 backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
                 backgroundSize: '140px 140px'
               }} />
        </div>
        
        <div className="relative z-10">
          {renderView()}

          {(currentView === ViewType.HOME || currentView === ViewType.WHAT_WE_DO || currentView === ViewType.INDUSTRIES || currentView === ViewType.SERVICES) && (
            <div className="border-t border-white/5">
               <Contact />
            </div>
          )}
        </div>
      </main>

      <footer className="bg-black/95 backdrop-blur-3xl py-16 border-t border-white/5 relative z-10 px-6 lg:px-10 xl:px-20 overflow-hidden">
        <div className="max-w-[1800px] mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-10">
            {/* Column 1: Brand Intro */}
            <div className="space-y-5">
              <div 
                className="flex items-center gap-3 cursor-pointer group"
                onClick={() => setView(ViewType.HOME)}
              >
                <div 
                  className="w-8 h-8 text-white rounded-[4px] flex items-center justify-center font-black transition-all group-hover:rotate-12 shadow-[0_0_25px_rgba(0,229,255,0.4)]"
                  style={{ background: brandGradient }}
                >M</div>
                <span className="text-xl font-black uppercase tracking-[-0.05em] text-white">MOMENTUM.</span>
              </div>
              
              <p className="text-zinc-600 text-[10px] font-bold leading-relaxed uppercase tracking-widest max-w-[200px]">
                Redefining digital dominance through precision engineering and high-performance creative strategy.
              </p>
            </div>

            {/* Columns 2-4: Navigation Links */}
            {footerNav.map((group, i) => (
              <div key={i} className="space-y-6">
                <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] flex items-center gap-2">
                  <div className="w-[2px] h-[2px] bg-cyan-400 rounded-full" />
                  {group.title}
                </h4>
                <ul className="space-y-3.5">
                  {group.links.map((link, j) => (
                    <li key={j}>
                      <button 
                        onClick={() => setView(link.id)}
                        className="text-[11px] font-semibold text-zinc-500 hover:text-white transition-colors tracking-wide block text-left"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Column 5: CONTACT */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em] flex items-center gap-2">
                <div className="w-[2px] h-[2px] bg-cyan-400 rounded-full" />
                CONTACT
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <svg className="w-3.5 h-3.5 text-cyan-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[11px] font-semibold text-zinc-500 tracking-wide break-all">info@mymomentumsolutions.com</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <svg className="w-3.5 h-3.5 text-cyan-400/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-[11px] font-semibold text-zinc-500 tracking-wide">+1 (888) MOMENTUM</p>
                </div>
              </div>
              
              <div className="flex gap-3 pt-1">
                {socialLinks.map((social) => (
                  <a 
                    key={social.label} 
                    href={social.url}
                    className="group flex items-center justify-center w-8 h-8 border border-white/5 rounded hover:border-cyan-400/30 transition-all duration-300 text-zinc-600 hover:text-white"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Legal Bar */}
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <span className="text-[9px] font-black text-zinc-900 tracking-[0.4em] uppercase">© 2025 MOMENTUM MARKETING SOLUTION LLC</span>
            
            <div className="flex gap-8">
               <a href="#" className="text-[10px] font-bold text-zinc-800 hover:text-white transition-colors uppercase tracking-[0.2em]">Privacy Policy</a>
               <a href="#" className="text-[10px] font-bold text-zinc-800 hover:text-white transition-colors uppercase tracking-[0.2em]">Terms and Conditions</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default App;
