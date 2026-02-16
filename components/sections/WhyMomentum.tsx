
import React from 'react';

const WhyMomentum: React.FC = () => {
  const brandGradient = 'linear-gradient(to right, #00E5FF, #9D00FF, #FF00C7)';

  const pillars = [
    {
      title: 'ALGORITHMIC SUPREMACY',
      desc: 'We eliminate estimation. Our stacks process millions of search signals across your industry’s digital landscape to engineer an architecture rooted in logical certainty.',
      stats: '0 ERR',
      label: 'LOGIC-DRIVEN'
    },
    {
      title: 'SYSTEM THROUGHPUT',
      desc: 'Execution speed is the ultimate competitive advantage. Our proprietary deployment pipelines ensure your cloud-native assets go live at zero-latency.',
      stats: '10ms',
      label: 'LOW LATENCY'
    },
    {
      title: 'FULL-STACK ARCHITECTURE',
      desc: 'Beyond aesthetics, we build digital infrastructure. Our codebase is optimized for Core Web Vitals and SSR, ensuring absolute technical dominance.',
      stats: '100',
      label: 'Lighthouse Score'
    },
    {
      title: 'RECURSIVE SCALING',
      desc: 'We use automated optimization loops to constantly extract higher performance from every API call and data packet, compounding your results in real-time.',
      stats: '∞',
      label: 'SCALABILITY'
    }
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-20 lg:px-40 py-16 md:py-24 animate-in fade-in duration-1000 overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none -z-10" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '30px 30px' }} />

      {/* New Hero: CORE ARCHITECTURE SYNC Dashboard */}
      <div className="mb-20 md:mb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-6 md:space-y-10 animate-in slide-in-from-left-8 duration-1000">
           <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-3xl">
             <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#00E5FF]" />
             <span className="text-[9px] font-black text-white/40 tracking-[0.4em] uppercase">SYSTEM CORE SYNCHRONIZATION</span>
           </div>

           <h1 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase tracking-[0.15em] text-white leading-tight">
             BEYOND THE <br />
             <span className="bg-clip-text text-transparent" style={{ backgroundImage: brandGradient }}>
               STANDARD STACK.
             </span>
           </h1>

           <div className="space-y-6">
              <p className="text-zinc-400 text-sm md:text-lg font-semibold leading-relaxed max-w-xl">
                We replace generic marketing tactics with a high-integrity technical architecture. Our "System Momentum" protocol is designed for terminal scale and absolute market supremacy.
              </p>
              
              <div className="flex flex-wrap gap-4">
                 <div className="flex-1 flex flex-col gap-1 p-4 bg-white/5 rounded-2xl border border-white/5 min-w-[130px]">
                    <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">Latency</span>
                    <span className="text-xl md:text-2xl font-black text-white">&lt; 150ms</span>
                 </div>
                 <div className="flex-1 flex flex-col gap-1 p-4 bg-white/5 rounded-2xl border border-white/5 min-w-[130px]">
                    <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest">Uptime</span>
                    <span className="text-xl md:text-2xl font-black text-white">99.99%</span>
                 </div>
              </div>
           </div>
        </div>

        <div className="relative h-[300px] md:h-[400px] w-full bg-[#0a0a0c]/40 border border-white/5 rounded-[2rem] md:rounded-[3rem] p-6 md:p-8 backdrop-blur-3xl overflow-hidden group animate-in slide-in-from-right-8 duration-1000">
            {/* Visual Dashboard Elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '20px 20px' }} />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
               <div className="flex justify-between items-start">
                  <div className="space-y-1">
                     <span className="text-[8px] md:text-[10px] font-black text-zinc-700 uppercase tracking-widest">Real-Time Ops</span>
                     <div className="text-sm md:text-xl font-bold text-white tracking-[0.2em] uppercase">SYSTEM ANALYTICS</div>
                  </div>
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white/5 rounded-full flex items-center justify-center animate-pulse">
                     <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-cyan-400" />
                  </div>
               </div>

               <div className="flex-1 flex items-center justify-center">
                  <div className="relative scale-75 md:scale-100">
                     <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border border-dashed border-white/20 animate-spin-slow" />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-cyan-400/20 to-purple-500/20 backdrop-blur-xl flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-700">
                           <span className="text-white font-black text-3xl md:text-4xl tracking-tighter">M.</span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 md:pt-6 border-t border-white/5">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="space-y-1">
                       <div className="h-1 bg-zinc-900 rounded-full overflow-hidden">
                          <div className={`h-full bg-cyan-400 w-[${i * 25}%] animate-pulse`} />
                       </div>
                       <span className="text-[6px] md:text-[7px] font-black text-zinc-800 uppercase tracking-[0.2em]">Node_{i} active</span>
                    </div>
                  ))}
               </div>
            </div>
        </div>
      </div>

      {/* Grid Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-20 md:mb-32 relative">
        {pillars.map((pillar, i) => (
          <div 
            key={i}
            className="group relative p-8 md:p-12 bg-[#0a0a0c]/40 border border-white/5 rounded-[2rem] md:rounded-[3rem] hover:bg-[#0a0a0c]/80 hover:border-cyan-500/30 transition-all duration-700 backdrop-blur-3xl overflow-hidden animate-in fade-in slide-in-from-bottom-12 duration-1000 fill-mode-both shadow-[0_40px_80px_-40px_rgba(0,0,0,1)]"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            {/* Hexagonal Background Pattern on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none"
                 style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
            
            {/* Corner Light Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            
            <div className="relative z-10 space-y-6 md:space-y-8">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white uppercase tracking-[0.1em] leading-tight group-hover:translate-x-2 transition-transform duration-500 max-w-[240px]">
                  {pillar.title}
                </h3>
                <div className="text-left sm:text-right shrink-0">
                  <div className="text-xl md:text-2xl font-black text-white group-hover:text-cyan-400 transition-colors duration-500">{pillar.stats}</div>
                  <div className="text-[7px] font-black text-zinc-700 uppercase tracking-widest">{pillar.label}</div>
                </div>
              </div>
              
              <p className="text-white text-xs md:text-sm font-semibold leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                {pillar.desc}
              </p>

              <div className="pt-6 md:pt-8 border-t border-white/5 flex items-center justify-between">
                <div className="w-12 h-[1px] bg-white/10 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-transparent transition-all duration-700" />
              </div>
            </div>
            
            {/* Data Stream Line Animation */}
            <div className="absolute bottom-0 left-0 h-[1px] w-full bg-cyan-500/0 group-hover:bg-cyan-500/20">
                <div className="h-full w-[20%] bg-cyan-400 group-hover:animate-data-stream" />
            </div>
          </div>
        ))}
      </div>

      {/* Philosophy Section */}
      <div className="relative p-px rounded-[2.5rem] md:rounded-[4rem] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16 md:mb-24 overflow-hidden group animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-700 fill-mode-both">
        <div className="bg-[#020202] rounded-[2.45rem] md:rounded-[3.95rem] p-8 md:p-12 lg:p-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative">
          {/* Subtle Scanline Overlay */}
          <div className="absolute inset-0 bg-scanline opacity-[0.02] pointer-events-none" />
          
          <div className="flex-1 space-y-6 md:space-y-8 relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-black uppercase tracking-[0.15em] text-white leading-tight">
              WE DON'T BUILD CAMPAIGNS. <br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: brandGradient }}>
                WE BUILD ARCHITECTURES.
              </span>
            </h2>
            <p className="text-zinc-500 text-xs md:text-base font-bold uppercase tracking-wide leading-relaxed">
              Standard agencies focus on "clicks." Momentum focuses on "stack integrity." We build the digital backbone that allows you to control your system performance, your API reliability, and your ultimate terminal scale.
            </p>
            <div className="flex flex-wrap gap-6 md:gap-8 pt-4">
              <div className="flex flex-col gap-1">
                <span className="text-xl md:text-2xl font-black text-white group-hover:text-cyan-400 transition-colors">99.9%</span>
                <span className="text-[7px] md:text-[8px] font-black text-zinc-700 uppercase tracking-widest">UPTIME RELIABILITY</span>
              </div>
              <div className="h-10 w-[1px] bg-white/10" />
              <div className="flex flex-col gap-1">
                <span className="text-xl md:text-2xl font-black text-white group-hover:text-purple-400 transition-colors">ZERO</span>
                <span className="text-[7px] md:text-[8px] font-black text-zinc-700 uppercase tracking-widest">TECHNICAL DEBT</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full lg:w-auto flex justify-center relative">
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]">
               {/* Digital Matrix / Node Visual */}
               <div className="absolute inset-0 border border-white/5 rounded-[2rem] md:rounded-[3rem] rotate-45 animate-pulse-slow" />
               <div className="absolute inset-4 border border-cyan-500/10 rounded-[1.5rem] md:rounded-[2.5rem] -rotate-12 animate-pulse-slow delay-700" />
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl md:rounded-3xl bg-white flex flex-col items-center justify-center shadow-[0_0_80px_rgba(255,255,255,0.1)] relative group-hover:shadow-[0_0_100px_rgba(0,229,255,0.2)] transition-shadow duration-1000 overflow-hidden">
                     {/* Internal scanning line */}
                     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent h-1/2 -translate-y-full group-hover:animate-scan-internal" />
                     <span className="text-black font-black text-3xl md:text-5xl relative z-10">M</span>
                     <div className="w-6 md:w-8 h-[2px] bg-black/10 mt-1 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-400 w-1/2 animate-loading-bar" />
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bg-scanline {
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 2px, 3px 100%;
        }
        @keyframes data-stream {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(500%); }
        }
        .animate-data-stream {
          animation: data-stream 2s linear infinite;
        }
        @keyframes scan-internal {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .group-hover\\:animate-scan-internal {
          animation: scan-internal 2s ease-in-out infinite;
        }
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-loading-bar {
          animation: loading-bar 1.5s ease-in-out infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1) rotate(45deg); }
          50% { opacity: 0.8; transform: scale(1.05) rotate(45deg); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default WhyMomentum;
