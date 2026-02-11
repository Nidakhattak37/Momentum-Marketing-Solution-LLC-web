
import React from 'react';
import { ViewType } from '../../types.ts';

interface HomeProps {
  setView: (view: ViewType) => void;
}

const Home: React.FC<HomeProps> = ({ setView }) => {
  const scrollToContact = () => {
    const section = document.getElementById('contact-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      setView(ViewType.CONTACT);
    }
  };

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

  return (
    <div className="max-w-[1600px] mx-auto px-8 pb-32">
      {/* Cinematic Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center relative py-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 space-y-12 relative z-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full reveal-1">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping" />
                <span className="text-[10px] font-black tracking-[0.3em] text-zinc-400 uppercase">Performance Protocol Initiated</span>
              </div>
              
              <h1 className="text-7xl md:text-[110px] lg:text-[140px] font-black leading-[0.85] tracking-tighter uppercase flex flex-col select-none">
                <span className="text-white drop-shadow-2xl reveal-2">DOMINATE</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] via-[#9D00FF] to-[#FF00E5] drop-shadow-[0_0_30px_rgba(157,0,255,0.3)] reveal-3">
                  THE MARKET.
                </span>
              </h1>
            </div>

            <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed font-semibold border-l-2 border-white/5 pl-8 reveal-3">
              Momentum Marketing Solution LLC isn't just an agency. We are a technical performance hub engineering the future of digital resonance. SEO, PPC, and AI Creative at the speed of light.
            </p>

            <div className="flex flex-wrap gap-6 items-center reveal-3">
              <button onClick={scrollToContact} className="group relative px-12 py-6 bg-white text-black rounded-2xl font-black uppercase tracking-[0.2em] overflow-hidden hover:scale-105 active:scale-95 transition-all shadow-[0_0_60px_rgba(255,255,255,0.15)]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative group-hover:text-white transition-colors">Partner Now</span>
              </button>
              
              <button onClick={() => setView(ViewType.LIVE_SYNC)} className="px-12 py-6 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all flex items-center gap-3 group">
                Live Briefing
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse group-hover:animate-ping" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-10 pt-10 border-t border-white/5 max-w-xl reveal-3">
               <div>
                  <div className="text-3xl font-black text-white">+240%</div>
                  <div className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mt-1">Avg. ROI Velocity</div>
               </div>
               <div>
                  <div className="text-3xl font-black text-white">0.1s</div>
                  <div className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mt-1">Latency Delivery</div>
               </div>
               <div>
                  <div className="text-3xl font-black text-white">12k+</div>
                  <div className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mt-1">Assets Deployed</div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative group hidden lg:block animate-float">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00A3FF]/20 via-transparent to-[#FF00E5]/20 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-1000" />
            <div className="relative bg-black/40 border border-white/10 rounded-[3rem] p-10 backdrop-blur-md overflow-hidden ring-1 ring-white/5 shadow-2xl metallic-shine">
              <div className="flex justify-between items-center mb-10">
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '400ms' }} />
                </div>
                <span className="text-[10px] font-mono text-zinc-700 tracking-[0.3em] uppercase">Diagnostic_Active</span>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-[11px] font-black text-zinc-400 uppercase tracking-widest">SEO Authority Index</span>
                    <span className="text-2xl font-black text-white">98.4</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 w-[98.4%] animate-progress" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/[0.08] transition-all group-hover:border-white/10">
                    <div className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-2">Ad Conversion</div>
                    <div className="text-3xl font-black text-white tracking-tighter">5.8x</div>
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/[0.08] transition-all group-hover:border-white/10">
                    <div className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-2">Engagement Velocity</div>
                    <div className="text-3xl font-black text-white tracking-tighter">+88%</div>
                  </div>
                </div>
                <div className="p-8 border-2 border-dashed border-white/5 rounded-[2rem] flex flex-col items-center justify-center text-center space-y-4 hover:border-blue-500/20 transition-colors">
                   <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center border border-white/10 group-hover:rotate-12 transition-transform shadow-[0_0_30px_rgba(0,163,255,0.1)]">
                      <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                   </div>
                   <h4 className="text-[10px] font-black text-white uppercase tracking-[0.4em]">Engine Status: Optimal</h4>
                   <p className="text-[9px] text-zinc-700 font-mono">SYNCING_METRICS_CLUSTER_09_v2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-32 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-24">
           <div>
              <span className="text-[10px] font-black text-[#FF00E5] uppercase tracking-[0.4em] mb-6">THE ENGINE</span>
              <h2 className="text-7xl font-black text-white uppercase tracking-tighter leading-none">GROWTH <br /> METHODOLOGY.</h2>
           </div>
           <p className="text-zinc-500 text-lg font-medium leading-relaxed max-w-xl">
             Our recursively optimized deployment framework is engineered to synchronize brand authority with modern algorithmic shifts.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
           {methodology.map((step) => (
             <div key={step.id} className="group p-10 bg-zinc-900/10 border border-white/5 rounded-[3rem] hover:bg-white/5 hover:border-white/20 transition-all space-y-8 hover:-translate-y-2">
                <div className="flex justify-between items-start">
                   <div className="w-12 h-12 bg-black border border-white/10 rounded-2xl flex items-center justify-center text-xl font-black text-white group-hover:border-blue-500 group-hover:text-blue-500 transition-all">
                      {step.id}
                   </div>
                   <span className="text-[8px] font-mono text-zinc-800 tracking-widest uppercase">PROT_LVL_{step.id}</span>
                </div>
                <div className="space-y-4">
                   <h3 className="text-2xl font-black text-white uppercase">{step.title}</h3>
                   <p className="text-zinc-500 text-sm font-medium leading-relaxed">{step.desc}</p>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Vertical Deployment Area */}
      <section className="py-32 bg-white text-black rounded-[4rem] overflow-hidden relative group/area">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 blur-[200px] rounded-full group-hover/area:scale-110 transition-transform duration-1000" />
         
         <div className="px-16 space-y-20 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-10">
               <h2 className="text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85]">SECTOR <br /> DOMINANCE.</h2>
               <div className="flex flex-col items-end gap-4">
                  <p className="text-zinc-600 font-bold uppercase tracking-widest text-right max-w-sm">ENGINEERING GROWTH ACROSS HIGH-VELOCITY MARKET SECTORS.</p>
                  <button onClick={scrollToContact} className="px-10 py-5 bg-black text-white rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all">Request Spec</button>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {['E-COMMERCE', 'TECH & SAAS', 'FINTECH', 'HEALTHCARE'].map((sector, i) => (
                  <div key={i} className="group/item border-t-2 border-black/10 pt-8 pb-12 hover:border-black transition-all cursor-default">
                     <span className="text-[10px] font-black text-zinc-400 mb-6 block tracking-[0.4em]">0{i+1}</span>
                     <h3 className="text-3xl font-black uppercase mb-6">{sector}</h3>
                     <p className="text-zinc-600 text-sm font-medium leading-relaxed group-hover/item:text-black transition-colors">Strategic alignment for {sector.toLowerCase()} leaders looking to scale technical resonance and organic authority.</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Core Expertise Engines */}
      <section className="py-32">
         <div className="text-center mb-24">
            <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-6">INFRASTRUCTURE</span>
            <h2 className="text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6">CORE PERFORMANCE ENGINES.</h2>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreEngines.map(engine => (
              <div key={engine.id} className="group p-12 bg-zinc-900/20 border border-white/5 rounded-[2.5rem] hover:border-blue-500/50 transition-all relative overflow-hidden hover:-translate-y-2">
                 <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                    <span className="text-8xl font-black">{engine.id}</span>
                 </div>
                 <div className="text-4xl mb-10">{engine.icon}</div>
                 <h3 className="text-2xl font-black text-white uppercase mb-6 tracking-tighter">{engine.title}</h3>
                 <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-10">{engine.desc}</p>
                 <button className="flex items-center gap-3 text-[10px] font-black text-zinc-600 group-hover:text-white uppercase tracking-widest transition-all">
                    VIEW ARCHITECTURE
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                 </button>
              </div>
            ))}
         </div>
      </section>

      <div className="pt-32 text-center opacity-20">
         <div className="text-[9px] font-mono uppercase tracking-[1em] text-white">END_OF_PAGE_REACHED // REDIRECT_TO_BRIEFING</div>
      </div>
    </div>
  );
};

export default Home;
