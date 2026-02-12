
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
      title: 'Navigation', 
      links: [
        { label: 'System Home', id: ViewType.HOME },
        { label: 'Mission Overview', id: ViewType.WHAT_WE_DO },
        { label: 'Strategic Services', id: ViewType.SERVICES },
        { label: 'Industry Nodes', id: ViewType.INDUSTRIES },
        { label: 'Initiate Contact', id: ViewType.CONTACT },
      ]
    },
    { 
      title: 'Services', 
      links: [
        { label: 'SEO Architecture', id: ViewType.SERVICES },
        { label: 'PPC Performance', id: ViewType.SERVICES },
        { label: 'Brand Engineering', id: ViewType.SERVICES },
        { label: 'Web Operations', id: ViewType.SERVICES },
        { label: 'Market Analytics', id: ViewType.SERVICES },
      ]
    },
    { 
      title: 'Sectors', 
      links: [
        { label: 'E-Commerce Node', id: ViewType.INDUSTRIES },
        { label: 'SaaS Growth', id: ViewType.INDUSTRIES },
        { label: 'Fintech Systems', id: ViewType.INDUSTRIES },
        { label: 'Health Tech', id: ViewType.INDUSTRIES },
        { label: 'Real Estate', id: ViewType.INDUSTRIES },
      ]
    },
    { 
      title: 'Connect', 
      content: (
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <span className="text-[7px] font-black text-zinc-700 uppercase tracking-widest">Inquiries</span>
            <a href="mailto:info@mymomentumsolutions.com" className="text-[10px] font-bold text-zinc-400 hover:text-cyan-400 transition-colors uppercase">info@mymomentumsolutions.com</a>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[7px] font-black text-zinc-700 uppercase tracking-widest">Support</span>
            <a href="tel:+18886663688" className="text-[10px] font-bold text-zinc-400 hover:text-cyan-400 transition-colors uppercase">+1 (888) 666-3688</a>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[7px] font-black text-zinc-700 uppercase tracking-widest">Node Location</span>
            <span className="text-[10px] font-bold text-zinc-500 uppercase">New York, NY 10013</span>
          </div>
        </div>
      )
    }
  ];

  const socialLinks = [
    { label: 'LI', icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    ), url: '#' },
    { label: 'X', icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    ), url: '#' },
    { label: 'YT', icon: (
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505a3.017 3.017 0 0 0-2.122 2.136C0 8.055 0 12 0 12s0 3.945.501 5.814a3.015 3.015 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.945 24 12 24 12s0-3.945-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    ), url: '#' },
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
        
        <div className="relative z-10 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          {renderView()}

          {(currentView === ViewType.HOME || currentView === ViewType.WHAT_WE_DO || currentView === ViewType.INDUSTRIES || currentView === ViewType.SERVICES) && (
            <div className="mt-20 border-t border-white/5">
               <Contact />
            </div>
          )}
        </div>
      </main>

      {/* Modern Animated Footer */}
      <footer className="bg-black py-20 lg:py-28 border-t border-white/5 relative z-10 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 overflow-hidden">
        <div className="max-w-[1800px] mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 pb-20">
            {/* Brand Intro Node */}
            <div className="lg:col-span-4 space-y-10 reveal-1">
              <div 
                className="flex items-center gap-3 cursor-pointer group"
                onClick={() => setView(ViewType.HOME)}
              >
                <div 
                  className="w-8 h-8 text-white rounded-[3px] flex items-center justify-center font-black transition-transform group-hover:scale-110"
                  style={{ background: brandGradient }}
                >M</div>
                <span className="text-xl font-black uppercase tracking-[-0.05em] text-white">MOMENTUM.</span>
              </div>
              
              <p className="text-zinc-500 max-w-sm text-sm font-medium leading-relaxed uppercase tracking-tight">
                Engineering digital dominance through data-centric SEO, recursive PPC performance, and elite web operations.
              </p>

              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a 
                    key={social.label} 
                    href={social.url}
                    className="w-9 h-9 border border-white/10 bg-white/[0.02] flex items-center justify-center text-zinc-500 hover:text-white hover:border-cyan-400 transition-all duration-300 rounded-sm"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Grid mapped from Header */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
              {footerNav.map((group, i) => (
                <div key={i} className={`space-y-6 reveal-${Math.min(i + 1, 3)}`}>
                  <h4 className="text-[8px] font-black text-white/30 uppercase tracking-[0.4em] flex items-center gap-2">
                    <div className="w-1 h-1 bg-zinc-800 rounded-full" />
                    {group.title}
                  </h4>
                  {group.links ? (
                    <ul className="space-y-3">
                      {group.links.map((link, j) => (
                        <li key={j}>
                          <button 
                            onClick={() => setView(link.id)}
                            className="text-[10px] font-black text-zinc-500 hover:text-white hover:translate-x-1 transition-all uppercase tracking-[0.1em] block text-left"
                          >
                            {link.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    group.content
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Clean Modern Legal Bar */}
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-4">
               <span className="text-[8px] font-black text-zinc-800 tracking-[0.4em] uppercase">© 2025 MOMENTUM MARKETING SOLUTION LLC</span>
               <div className="hidden md:block w-[1px] h-3 bg-zinc-900" />
               <span className="text-[8px] font-black text-zinc-800 tracking-[0.4em] uppercase">SYS_NODE_ACTIVE</span>
            </div>
            
            <div className="flex gap-8">
               <a href="#" className="text-[9px] font-black text-zinc-600 hover:text-white transition-colors uppercase tracking-[0.25em]">Privacy Policy</a>
               <a href="#" className="text-[9px] font-black text-zinc-600 hover:text-white transition-colors uppercase tracking-[0.25em]">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default App;
