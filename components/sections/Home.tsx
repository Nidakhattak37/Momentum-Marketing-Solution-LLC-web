
import React, { useEffect, useState, useMemo } from 'react';
import { ViewType } from '../../types.ts';

interface HomeProps {
  setView: (view: ViewType) => void;
}

type MetricType = 'velocity' | 'seo' | 'ads';

const Home: React.FC<HomeProps> = ({ setView }) => {
  const [activeMetric, setActiveMetric] = useState<MetricType>('velocity');
  const [barData, setBarData] = useState<number[]>([]);

  // Generate initial data based on active metric
  const generateData = (type: MetricType) => {
    switch (type) {
      case 'seo':
        // SEO: Steady, compounding growth
        return Array.from({ length: 18 }, (_, i) => 15 + (i * 4) + Math.random() * 10);
      case 'ads':
        // Ads: Volatile, high-frequency spikes
        return Array.from({ length: 18 }, () => 10 + Math.random() * 85);
      case 'velocity':
      default:
        // Velocity: Balanced upward trend
        return Array.from({ length: 18 }, () => 30 + Math.random() * 50);
    }
  };

  useEffect(() => {
    setBarData(generateData(activeMetric));

    const interval = setInterval(() => {
      setBarData(prev => {
        return prev.map(val => {
          const shift = Math.random() * 10 - 5;
          return Math.max(10, Math.min(100, val + shift));
        });
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [activeMetric]);

  const scrollToContact = () => {
    const section = document.getElementById('contact-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      setView(ViewType.CONTACT);
    }
  };

  const brandGradient = 'linear-gradient(to right, #00E5FF, #9D00FF, #FF00C7)';

  const methodology = [
    { id: '01', title: 'Data Ingestion', desc: 'Deep-dive audit of your digital footprint, identifying velocity friction and ROI leakage.' },
    { id: '02', title: 'Neural Blueprint', desc: 'AI-driven strategic architecting designed to align brand narrative with market demand.' },
    { id: '03', title: 'Precision Deploy', desc: 'Asymmetric campaign launching with zero-latency creative production across all nodes.' },
    { id: '04', title: 'Recursive Optimization', desc: 'Continuous feedback loops and algorithmic scaling to ensure compounding growth.' },
  ];

  const coreEngines = [
    { id: '01', title: 'SEO DOMINANCE', desc: 'Data-driven organic search strategies that secure industry-leading visibility.', icon: '🔍' },
    { id: '02', title: 'PRECISION PPC', desc: 'Algorithmic ad management focused on ruthless conversion efficiency.', icon: '💳' },
    { id: '03', title: 'ELITE WEB OPS', desc: 'High-performance digital experiences engineered for conversion velocity.', icon: '💻' },
    { id: '04', title: 'AI CREATIVE', desc: 'Generative assets and synthetic media deployed at enterprise scale.', icon: '✨' },
  ];

  const metricConfig = {
    velocity: { label: 'Velocity', color: '#00E5FF', secondary: '#9D00FF' },
    seo: { label: 'SEO Authority', color: '#9D00FF', secondary: '#FF00C7' },
    ads: { label: 'Ad Conversion', color: '#FF00C7', secondary: '#00E5FF' }
  };

  return (
    <div className="max-w-[1200px] mx-auto pb-40">
      {/* Cinematic Hero Section - 2 Column Layout */}
      <section className="min-h-[80vh] flex flex-col lg:grid lg:grid-cols-12 items-center justify-center relative py-20 lg:py-28 overflow-hidden gap-12">
        
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-600/[0.04] blur-[140px] rounded-full animate-pulse pointer-events-none" />

        <div className="lg:col-span-7 space-y-10 relative z-10 text-left transition-all">
          <div className="space-y-8 flex flex-col items-start">
            
            {/* Boxed Bolt Icon and White Label with Hub Subtitle */}
            <div className="flex items-center gap-6 animate-in fade-in slide-in-from-left-4 duration-1000">
               <div className="p-3 border border-white/10 bg-white/[0.02] rounded-lg backdrop-blur-md group hover:border-cyan-500/50 transition-all duration-500 shadow-lg relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: brandGradient, opacity: 0.1 }} />
                  <svg className="w-6 h-6 text-white group-hover:text-cyan-400 group-hover:scale-110 transition-all relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
               </div>
               <div className="flex flex-col gap-1.5">
                 <span className="text-[8px] lg:text-[9px] font-black tracking-[0.4em] text-white uppercase select-none drop-shadow-sm">
                   MOMENTUM MARKETING SOLUTION LLC
                 </span>
                 <span className="text-[6px] lg:text-[7px] font-black tracking-[0.25em] text-zinc-500 uppercase opacity-80">
                   Global Digital Performance Hub
                 </span>
               </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-black leading-tight lg:leading-[1.1] tracking-tight uppercase flex flex-col select-none overflow-hidden">
              <span className="text-white drop-shadow-xl animate-data-wipe">ACCELERATE YOUR</span>
              <span className="bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,229,255,0.2)] animate-data-wipe-delayed" style={{ backgroundImage: brandGradient }}>
                MARKET MOMENTUM.
              </span>
            </h1>

            <p className="text-sm lg:text-base text-zinc-500 max-w-xl leading-relaxed font-medium animate-in fade-in slide-in-from-left-4 duration-1000 delay-500">
              Momentum Marketing Solution LLC is the premier digital agency for high-growth brands. We combine data-driven SEO, precision PPC, and elite web architecture to engineer your industry dominance.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 items-center justify-start animate-in fade-in duration-1000 delay-700">
            <button onClick={scrollToContact} className="group relative px-8 py-4 bg-white text-black rounded-lg font-black uppercase tracking-[0.15em] text-xs overflow-hidden hover:scale-105 active:scale-95 transition-all shadow-xl">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundImage: brandGradient }} />
              <span className="relative group-hover:text-white transition-colors duration-300">Partner Now</span>
            </button>
            
            <button onClick={() => setView(ViewType.LIVE_SYNC)} className="px-8 py-4 bg-black border border-white/10 text-white rounded-lg font-black uppercase tracking-[0.15em] text-xs hover:bg-white/5 transition-all flex items-center gap-2 group relative overflow-hidden">
              <span className="relative">Live Briefing</span>
              <div className="relative w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse group-hover:animate-ping" />
            </button>

            <a href="tel:+18886663688" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-lg font-black uppercase tracking-[0.15em] text-xs hover:bg-white/10 transition-all flex items-center gap-3 group relative overflow-hidden">
              <div className="relative flex items-center justify-center">
                 <div className="absolute inset-0 bg-cyan-400 blur-md opacity-0 group-hover:opacity-40 transition-opacity" />
                 <svg className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                 </svg>
              </div>
              <span className="relative">Call Now</span>
            </a>
          </div>
        </div>

        {/* 2nd Section: Graph / Metric HUD - Dynamic Performance Style */}
        <div className="lg:col-span-5 relative w-full group animate-in zoom-in duration-1000 delay-900">
          <div className="absolute -inset-4 opacity-20 rounded-[2rem] group-hover:opacity-40 transition-opacity duration-1000 blur-2xl" style={{ backgroundImage: brandGradient }} />
          <div className="relative bg-black/40 border border-white/10 rounded-[2rem] p-6 lg:p-8 backdrop-blur-xl shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:border-white/20">
            
            {/* Metric Toggle Controls */}
            <div className="flex flex-wrap gap-2 mb-8 bg-black/40 p-1.5 rounded-2xl border border-white/5">
              {(Object.keys(metricConfig) as MetricType[]).map((m) => (
                <button
                  key={m}
                  onClick={() => setActiveMetric(m)}
                  className={`flex-1 px-4 py-2.5 rounded-xl text-[8px] font-black uppercase tracking-widest transition-all duration-300 border ${
                    activeMetric === m 
                      ? 'bg-white text-black border-white shadow-lg' 
                      : 'text-zinc-500 border-transparent hover:text-white hover:bg-white/5'
                  }`}
                >
                  {metricConfig[m].label}
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                 <div 
                   className="w-2 h-2 rounded-full transition-all duration-500" 
                   style={{ backgroundColor: metricConfig[activeMetric].color, boxShadow: `0 0 10px ${metricConfig[activeMetric].color}` }} 
                 />
                 <span className="text-[7px] font-mono text-zinc-400 tracking-widest uppercase">MOMENTUM_CORE_STREAM</span>
              </div>
              <div className="flex gap-4">
                <span className="text-[6px] font-mono text-zinc-600 uppercase tracking-tighter">METRIC: {activeMetric.toUpperCase()}</span>
                <span className="text-[6px] font-mono text-cyan-400 uppercase tracking-tighter">v2.5_STABLE</span>
              </div>
            </div>
            
            <div className="h-44 w-full bg-black/60 border border-white/5 rounded-xl relative flex items-end justify-center px-4 py-4 gap-1.5 overflow-hidden group/graph">
               {/* High-Tech Background Elements */}
               <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
               
               {/* Horizontal Scan Lines */}
               <div className="absolute inset-0 flex flex-col justify-between py-2 opacity-10 pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-[1px] w-full bg-white/20" />
                  ))}
               </div>

               {/* Dynamic Wave Mask */}
               <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-cyan-400/5 to-transparent pointer-events-none" />

               {barData.map((val, i) => (
                 <div 
                  key={i} 
                  className="flex-1 rounded-t-[1px] transition-all duration-[0.8s] ease-out hover:brightness-150 shadow-[0_0_15px_rgba(0,229,255,0.1)] relative group/bar"
                  style={{ 
                    height: `${val}%`, 
                    background: `linear-gradient(to top, rgba(255,255,255,0.05), ${metricConfig[activeMetric].color}, ${metricConfig[activeMetric].secondary})`,
                    transitionDelay: `${i * 20}ms`
                  }}
                 >
                    <div className="absolute -top-1 left-0 right-0 h-1 bg-white opacity-0 group-hover/bar:opacity-100 transition-opacity blur-[2px]" />
                 </div>
               ))}
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-white/5">
              <div className="text-left space-y-1">
                <div className="text-[6px] font-black text-zinc-500 uppercase tracking-widest mb-1">Impact Delta</div>
                <div className="flex items-end gap-2">
                   <div className="text-xl font-black text-white tracking-tighter animate-pulse">
                     {activeMetric === 'seo' ? '+412%' : activeMetric === 'ads' ? '+28.5x' : '+240%'}
                   </div>
                   <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-emerald-500 mb-1.5" />
                </div>
              </div>
              <div className="text-right space-y-1">
                <div className="text-[6px] font-black text-zinc-500 uppercase tracking-widest mb-1">Process Latency</div>
                <div className="text-xl font-black text-white tracking-tighter">
                  {activeMetric === 'ads' ? '0.04ms' : '0.1ms'}
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-2">
               <div className="flex justify-between items-center text-[5px] font-mono text-zinc-700 uppercase">
                  <span>Resource Allocation</span>
                  <span>Opt_Balanced</span>
               </div>
               <div className="flex gap-1.5">
                  {Array.from({length: 6}).map((_, i) => (
                    <div key={i} className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full animate-loading-bar" style={{ backgroundImage: brandGradient, width: `${30 + Math.random() * 50}%`, animationDelay: `${i * 0.15}s` }} />
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-32 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-end mb-24">
           <div className="text-left">
              <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.4em] mb-4 lg:mb-6 block">DEPLOYMENT_LOGIC</span>
              <h2 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none">GROWTH <br /> METHODOLOGY.</h2>
           </div>
           <p className="text-zinc-500 text-sm lg:text-base font-medium leading-relaxed max-w-md text-left lg:text-right ml-auto">
             Our recursively optimized deployment framework is engineered to synchronize brand authority with modern algorithmic shifts at enterprise scale.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {methodology.map((step) => (
             <div key={step.id} className="group p-8 lg:p-10 bg-zinc-900/10 border border-white/5 rounded-3xl lg:rounded-[2.5rem] hover:bg-white/5 hover:border-white/20 transition-all space-y-8 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="flex justify-between items-start">
                   <div className="w-10 h-10 bg-black border border-white/10 rounded-xl flex items-center justify-center text-lg font-black text-white group-hover:border-cyan-400 group-hover:text-cyan-400 transition-all">
                      {step.id}
                   </div>
                   <span className="text-[7px] font-mono text-zinc-800 tracking-widest uppercase">SY_PROTO_{step.id}</span>
                </div>
                <div className="space-y-4">
                   <h3 className="text-xl font-black text-white uppercase group-hover:text-white transition-colors tracking-tight">{step.title}</h3>
                   <p className="text-zinc-600 text-xs font-medium leading-relaxed group-hover:text-zinc-400 transition-colors">{step.desc}</p>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Vertical Deployment Area */}
      <section className="py-32 bg-white text-black rounded-[3rem] lg:rounded-[5rem] overflow-hidden relative group/area shadow-2xl">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-400/5 blur-[200px] rounded-full group-hover/area:scale-110 transition-transform duration-1000" />
         
         <div className="px-12 lg:px-20 space-y-20 relative z-10">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
               <h2 className="text-5xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tighter leading-[0.9] lg:leading-[0.85]">SECTOR <br /> DOMINANCE.</h2>
               <div className="flex flex-col items-start lg:items-end gap-6">
                  <p className="text-zinc-600 text-xs font-bold uppercase tracking-[0.3em] lg:text-right max-w-xs">ENGINEERING GROWTH ACROSS HIGH-VELOCITY MARKET SECTORS.</p>
                  <button onClick={scrollToContact} className="w-full lg:w-auto px-10 py-5 bg-black text-white rounded-xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl">Request Spec</button>
               </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
               {['E-COMMERCE', 'TECH & SAAS', 'FINTECH', 'HEALTHCARE'].map((sector, i) => (
                  <div key={i} className="group/item border-t border-black/10 pt-10 pb-12 hover:border-black transition-all cursor-default">
                     <span className="text-[8px] font-black text-zinc-400 mb-4 block tracking-[0.4em]">NODE_0{i+1}</span>
                     <h3 className="text-xl lg:text-2xl font-black uppercase mb-6 tracking-tighter">{sector}</h3>
                     <p className="text-zinc-500 text-xs font-medium leading-relaxed group-hover/item:text-black transition-colors">Strategic alignment for {sector.toLowerCase()} leaders looking to scale technical resonance and organic authority.</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Core Expertise Engines */}
      <section className="py-32 lg:py-40">
         <div className="text-center mb-24">
            <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.4em] mb-4 lg:mb-6 block">INFRASTRUCTURE</span>
            <h2 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight lg:leading-none mb-6">CORE PERFORMANCE ENGINES.</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreEngines.map(engine => (
              <div key={engine.id} className="group p-10 bg-zinc-900/20 border border-white/5 rounded-[2.5rem] hover:border-cyan-400/50 transition-all relative overflow-hidden hover:-translate-y-2">
                 <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-10 transition-opacity">
                    <span className="text-6xl lg:text-8xl font-black">{engine.id}</span>
                 </div>
                 <div className="text-4xl mb-8 transform transition-transform group-hover:scale-110 duration-500">{engine.icon}</div>
                 <h3 className="text-xl font-black text-white uppercase mb-4 tracking-tight">{engine.title}</h3>
                 <p className="text-zinc-600 text-xs font-medium leading-relaxed mb-10">{engine.desc}</p>
                 <button className="flex items-center gap-3 text-[8px] font-black text-zinc-700 group-hover:text-white uppercase tracking-widest transition-all">
                    VIEW ARCHITECTURE
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                 </button>
              </div>
            ))}
         </div>
      </section>

      <div className="pt-20 text-center opacity-10">
         <div className="text-[8px] font-mono uppercase tracking-[2em] text-white">END_OF_PAGE // REDIRECT_TO_BRIEFING</div>
      </div>

      <style>{`
        @keyframes data-wipe {
          0% { clip-path: inset(0 100% 0 0); transform: translateX(-20px); opacity: 0; }
          100% { clip-path: inset(0 0 0 0); transform: translateX(0); opacity: 1; }
        }
        .animate-data-wipe {
          animation: data-wipe 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
        .animate-data-wipe-delayed {
          opacity: 0;
          animation: data-wipe 0.8s cubic-bezier(0.19, 1, 0.22, 1) 0.25s forwards;
        }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scanline {
          animation: scanline linear infinite;
        }
        @keyframes loading-bar {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }
        .animate-loading-bar {
          animation: loading-bar 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
