
import React from 'react';

const WhatWeDo: React.FC = () => {
  const brandGradient = 'linear-gradient(to right, #00E5FF, #9D00FF, #FF00C7)';

  const protocolPhases = [
    { 
      id: '01', 
      title: 'MARKET INTELLIGENCE & AUDIT', 
      label: 'DIAGNOSTICS', 
      desc: 'We perform deep-layer technical audits of your digital footprint, analyzing crawlability, Core Web Vitals, and keyword gap opportunities to establish a high-performance baseline.',
      specs: ['Core Web Vitals Audit', 'SERP Gap Analysis', 'Crawl Budget Optimization']
    },
    { 
      id: '02', 
      title: 'ORGANIC STRATEGY & TOPICAL MAPPING', 
      label: 'ARCHITECTURE', 
      desc: 'Our strategists engineer a semantic search blueprint, clustering high-intent keywords and building topical authority to dominate competitive search landscapes.',
      specs: ['Semantic Keyword Clustering', 'Authority Frameworks', 'Conversion Path Mapping']
    },
    { 
      id: '03', 
      title: 'CONTENT VELOCITY & ON-PAGE ASSETS', 
      label: 'PRODUCTION', 
      desc: 'Deployment of high-impact digital assets engineered with E-E-A-T principles. We synchronize copy, UI/UX, and technical assets for maximum relevance and retention.',
      specs: ['E-E-A-T Optimized Copy', 'Performance Landing Pages', 'Schema Markup Integration']
    },
    { 
      id: '04', 
      title: 'TECHNICAL DEPLOYMENT & AUTHORITY', 
      label: 'EXECUTION', 
      desc: 'Precision execution of backlink equity strategies and technical SEO fixes with zero-latency deployment across your CMS and social ecosystems.',
      specs: ['Backlink Equity Sourcing', 'Technical Infrastructure Fixes', 'Multi-Channel Distribution']
    },
    { 
      id: '05', 
      title: 'PERFORMANCE MONITORING & RECURSIVE ROI', 
      label: 'DOMINANCE', 
      desc: 'Real-time SERP tracking and recursive data audits to compound organic growth. We use predictive analytics to maintain absolute market dominance.',
      specs: ['Predictive SERP Analytics', 'Looker Studio Sync', 'Recursive Optimization Loops']
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-10 md:px-20 lg:px-32 py-20 animate-in fade-in duration-1000">
      {/* Header Section */}
      <div className="mb-20 flex flex-col lg:flex-row justify-between items-start gap-10 relative">
        <div className="space-y-5 max-w-xl animate-in slide-in-from-left-8 duration-1000">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-3xl">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#00E5FF]" />
            <span className="text-[9px] font-black text-white/40 tracking-[0.4em] uppercase">MOMENTUM PERFORMANCE METHODOLOGY</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-[0.15em] text-white leading-tight">
            ENGINEERING <br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: brandGradient }}>
              DIGITAL DOMINANCE.
            </span>
          </h1>
          
          <p className="text-zinc-400 text-sm md:text-base font-semibold max-w-lg leading-relaxed">
            A scientifically engineered framework designed to convert raw market data into sustainable organic growth and high-velocity ROI.
          </p>
        </div>

        <div className="hidden lg:flex flex-col items-end gap-1.5 text-right pt-8 opacity-40 animate-in slide-in-from-right-8 duration-1000">
           <span className="text-[7px] font-black text-zinc-700 uppercase tracking-widest">Protocol Integrity</span>
           <span className="text-lg font-bold text-white uppercase tracking-[0.2em]">OPTIMIZED ARCHITECTURE</span>
           <div className="w-40 h-1 bg-zinc-900 rounded-full overflow-hidden">
             <div className="h-full bg-cyan-400 w-[99%]" />
           </div>
        </div>
      </div>

      {/* Vertical Timeline Journey */}
      <div className="relative space-y-12 mb-24">
        {/* The Core energy line with Flow Animation */}
        <div className="absolute left-[20px] lg:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 lg:-translate-x-1/2 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-line-flow opacity-60" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-400/20 via-purple-500/20 to-pink-500/20" />
        </div>

        {protocolPhases.map((phase, i) => (
          <div 
            key={phase.id} 
            className={`relative flex flex-col lg:flex-row items-start lg:items-center w-full animate-in fade-in zoom-in-95 slide-in-from-bottom-8 duration-1000 fill-mode-both ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            style={{ animationDelay: `${200 + i * 150}ms` }}
          >
            
            {/* The Node Point */}
            <div className="absolute left-[20px] lg:left-1/2 w-8 h-8 -translate-x-1/2 bg-black border border-white/10 rounded-full flex items-center justify-center z-10 group cursor-default">
              <div className="w-2.5 h-2.5 bg-zinc-800 rounded-full group-hover:scale-150 transition-all duration-500 group-hover:bg-cyan-400 group-hover:shadow-[0_0_20px_#00E5FF]" />
            </div>

            {/* Content Card */}
            <div className={`w-full lg:w-[45%] ml-12 lg:ml-0 group`}>
              <div className="relative p-8 lg:p-10 bg-[#0a0a0c]/40 border border-white/5 rounded-[2.5rem] hover:bg-[#0a0a0c]/80 hover:border-white/20 transition-all duration-700 backdrop-blur-3xl overflow-hidden shadow-[0_40px_80px_-40px_rgba(0,0,0,1)] hover:shadow-[0_50px_100px_-30px_rgba(0,229,255,0.1)]">
                {/* ID Background Flourish */}
                <span className="absolute -top-6 -right-6 text-[120px] font-black text-white/[0.01] select-none pointer-events-none group-hover:text-white/[0.02] transition-colors">{phase.id}</span>
                
                <div className="relative z-10 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-black text-cyan-400 uppercase tracking-[0.4em]">{phase.label}</span>
                    <div className="h-[1px] w-10 bg-white/10" />
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-black text-white uppercase tracking-[0.1em] group-hover:translate-x-1 transition-transform duration-500">{phase.title}</h3>
                  <p className="text-white text-[12px] font-semibold leading-relaxed opacity-90">
                    {phase.desc}
                  </p>

                  <ul className="pt-5 space-y-2 border-t border-white/5">
                    {phase.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2.5 text-[9px] font-black text-white/60 uppercase tracking-widest group-hover:text-white transition-colors">
                        <div className="w-1 h-1 bg-white/20 rounded-full group-hover:bg-cyan-400 transition-colors" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Scanline Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent h-24 -translate-y-full group-hover:animate-scanline pointer-events-none" />
              </div>
            </div>

            {/* Empty space for the other side */}
            <div className="hidden lg:block lg:w-[45%]" />
          </div>
        ))}
      </div>

      {/* Final Call to Action Section */}
      <div className="relative group overflow-hidden rounded-[3rem] p-px bg-gradient-to-r from-white/5 via-white/10 to-white/5 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000 fill-mode-both">
        <div className="relative bg-[#020202] rounded-[2.95rem] p-10 lg:p-16 flex flex-col items-center text-center space-y-10">
           <div className="absolute inset-0 opacity-5 blur-3xl pointer-events-none" style={{ backgroundImage: brandGradient }} />
           
           <div className="space-y-4 relative z-10">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-[0.15em] text-white leading-none">
                READY TO INITIALIZE <br /> 
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: brandGradient }}>
                  MARKET VELOCITY?
                </span>
              </h2>
              <p className="text-zinc-500 font-bold uppercase text-[10px] tracking-[0.2em] max-w-lg mx-auto opacity-70">
                Scale your organic visibility with elite-tier digital engineering. Deploy the protocol today.
              </p>
           </div>

           <button className="relative group/btn overflow-hidden px-10 py-4 bg-white text-black rounded-lg font-black uppercase tracking-[0.25em] text-[10px] transition-all hover:scale-105 active:scale-95 shadow-2xl">
             <div className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" style={{ backgroundImage: brandGradient }} />
             <span className="relative group-hover/btn:text-white transition-colors duration-300">REQUEST PROTOCOL INITIATION</span>
           </button>
        </div>
      </div>

      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(500px); opacity: 0; }
        }
        .animate-scanline {
          animation: scanline 4s cubic-bezier(0.23, 1, 0.32, 1) infinite;
        }
        @keyframes lineFlow {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .animate-line-flow {
          animation: lineFlow 6s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default WhatWeDo;
