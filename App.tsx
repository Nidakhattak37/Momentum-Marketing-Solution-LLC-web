
import React, { useState } from 'react';
import Navbar from './components/Navbar.tsx';
import Home from './components/sections/Home.tsx';
import WhatWeDo from './components/sections/WhatWeDo.tsx';
import Services from './components/sections/Services.tsx';
import Industries from './components/sections/Industries.tsx';
import Contact from './components/sections/Contact.tsx';
import ImageStudio from './components/sections/ImageStudio.tsx';
import VideoStudio from './components/sections/VideoStudio.tsx';
import VoiceStudio from './components/sections/VoiceStudio.tsx';
import Assistant from './components/sections/Assistant.tsx';
import { ViewType } from './types.ts';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.HOME);

  // View router logic
  const renderView = () => {
    switch (currentView) {
      case ViewType.HOME:
        return <Home setView={setCurrentView} />;
      case ViewType.WHAT_WE_DO:
        return <WhatWeDo />;
      case ViewType.SERVICES:
        return <Services />;
      case ViewType.INDUSTRIES:
        return <Industries />;
      case ViewType.CONTACT:
        return <Contact />;
      case ViewType.IMAGE_LAB:
        return <ImageStudio />;
      case ViewType.VIDEO_LAB:
        return <VideoStudio />;
      case ViewType.VOICE_LAB:
        return <VoiceStudio />;
      case ViewType.ASSISTANT:
        return <Assistant />;
      default:
        return <Home setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col font-sans selection:bg-[#9D00FF]/30 selection:text-white">
      {/* Dynamic Navbar */}
      <Navbar currentView={currentView} setView={setCurrentView} />

      {/* Main Content Area */}
      <main className="flex-1 overflow-x-hidden relative">
        {renderView()}
      </main>

      {/* Global Immersive Background Effects */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-purple-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] bg-pink-500/10 blur-[150px] rounded-full animate-pulse" />
      </div>

      {/* Footer Branding */}
      <footer className="py-10 border-t border-white/5 bg-black/40 backdrop-blur-md">
        <div className="max-w-[1600px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm italic">M</span>
             </div>
             <span className="text-sm font-black tracking-tighter text-zinc-400 uppercase italic">
               MOMENTUM MARKETING SOLUTION LLC
             </span>
          </div>
          <div className="flex gap-8">
            <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">© 2025 ALL RIGHTS RESERVED</span>
            <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest cursor-pointer hover:text-white transition-colors">PRIVACY POLICY</span>
            <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest cursor-pointer hover:text-white transition-colors">TERMS OF SERVICE</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
