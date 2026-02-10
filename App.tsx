
import React, { useState } from 'react';
import { ViewType } from './types.ts';
import Navbar from './components/Navbar.tsx';
import Home from './components/sections/Home.tsx';
import ImageStudio from './components/sections/ImageStudio.tsx';
import VideoStudio from './components/sections/VideoStudio.tsx';
import VoiceStudio from './components/sections/VoiceStudio.tsx';
import Assistant from './components/sections/Assistant.tsx';

const App: React.FC = () => {
  const [currentView, setView] = useState<ViewType>(ViewType.HOME);

  const renderView = () => {
    switch (currentView) {
      case ViewType.HOME:
        return <Home setView={setView} />;
      case ViewType.IMAGE:
        return <ImageStudio />;
      case ViewType.VIDEO:
        return <VideoStudio />;
      case ViewType.VOICE:
        return <VoiceStudio />;
      case ViewType.CHAT:
        return <Assistant />;
      default:
        return <Home setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 flex flex-col">
      <Navbar currentView={currentView} setView={setView} />
      
      <main className="flex-1 relative">
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-rose-500/5 blur-[120px] rounded-full" />
        </div>
        
        <div className="relative z-10">
          {renderView()}
        </div>
      </main>

      <footer className="py-12 border-t border-gray-900 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-50">
            <div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-md" />
            <span className="font-bold">Lumina Studio</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener" className="hover:text-white transition-colors">Billing Info</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
          <p className="text-gray-600 text-xs">© 2024 Lumina Creative. All rights generated.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
