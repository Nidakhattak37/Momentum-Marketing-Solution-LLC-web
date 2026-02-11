
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
import MouseFollower from './components/MouseFollower.tsx';

const App: React.FC = () => {
  const [currentView, setView] = useState<ViewType>(ViewType.HOME);

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
      default:
        return <Home setView={setView} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#020202] text-gray-100 flex flex-col selection:bg-[#00A3FF]/30 selection:text-white cursor-default">
      {/* High-fidelity cursor follower */}
      <MouseFollower />

      <Navbar currentView={currentView} setView={setView} />
      
      <main className="flex-1 relative">
        {/* Advanced Kinetic Background */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#000000]" />
          
          {/* Chromatic Accent Blurs */}
          <div className="absolute top-[10%] left-[20%] w-[60%] h-[60%] bg-[#00A3FF]/10 blur-[180px] rounded-full animate-pulse" style={{ animationDuration: '12s' }} />
          <div className="absolute bottom-[10%] right-[15%] w-[50%] h-[50%] bg-[#FF00E5]/10 blur-[180px] rounded-full animate-pulse" style={{ animationDuration: '18s' }} />
          
          {/* Grid Texture */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`, backgroundSize: '40px 40px'}}></div>
        </div>
        
        <div className="relative z-10">
          {renderView()}

          {/* Persistent Contact Section */}
          {(currentView === ViewType.HOME || currentView === ViewType.WHAT_WE_DO || currentView === ViewType.INDUSTRIES || currentView === ViewType.SERVICES) && (
            <div className="mt-20 border-t border-white/5 bg-gradient-to-b from-transparent to-black/50">
               <Contact />
            </div>
          )}
        </div>
      </main>

      <footer className="py-16 border-t border-white/5 bg-black/95 relative z-10">
        <div className="max-w-[1600px] mx-auto px-8 flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gradient-to-tr from-[#00A3FF] via-[#9D00FF] to-[#FF00E5] rounded-lg" />
              <span className="font-black tracking-tighter text-white uppercase italic text-xl">MOMENTUM.</span>
            </div>
            <p className="text-zinc-500 max-w-sm text-sm font-medium leading-relaxed">
              Engineering the future of digital dominance. Momentum Marketing Solution LLC is the global hub for high-performance creative technology.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
             <div className="space-y-4">
                <h5 className="text-[10px] font-black text-white tracking-widest uppercase">Contact</h5>
                <ul className="space-y-2 text-sm text-zinc-500 font-medium">
                   <li><a href="mailto:info@mymomentumsolutions.com" className="hover:text-white transition-colors">info@mymomentumsolutions.com</a></li>
                   <li>Remote First • Global Operations</li>
                </ul>
             </div>
             <div className="space-y-4">
                <h5 className="text-[10px] font-black text-white tracking-widest uppercase">Agency</h5>
                <ul className="space-y-2 text-sm text-zinc-500 font-medium">
                   <li><button onClick={() => setView(ViewType.SERVICES)} className="hover:text-white transition-colors">Services</button></li>
                   <li><button onClick={() => setView(ViewType.INDUSTRIES)} className="hover:text-white transition-colors">Industries</button></li>
                   <li><button onClick={() => setView(ViewType.WHAT_WE_DO)} className="hover:text-white transition-colors">Process</button></li>
                </ul>
             </div>
             <div className="space-y-4">
                <h5 className="text-[10px] font-black text-white tracking-widest uppercase">Social</h5>
                <ul className="space-y-2 text-sm text-zinc-500 font-medium">
                   <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                   <li><a href="#" className="hover:text-white transition-colors">X (Twitter)</a></li>
                </ul>
             </div>
          </div>
        </div>
        <div className="max-w-[1600px] mx-auto px-8 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-zinc-600 text-[9px] font-black tracking-widest uppercase">© 2024 MOMENTUM MARKETING SOLUTION LLC. ALL RIGHTS RESERVED.</p>
           <div className="flex gap-6 text-[9px] font-black text-zinc-500 tracking-widest uppercase">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
