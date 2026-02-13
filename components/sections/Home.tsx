
import React, { useEffect, useState } from 'react';
import { ViewType } from '../../types.ts';

interface HomeProps {
  setView: (view: ViewType) => void;
}

type MetricType = 'velocity' | 'seo' | 'ads';

const Home: React.FC<HomeProps> = ({ setView }) => {
  const [activeMetric, setActiveMetric] = useState<MetricType>('velocity');
  const [barData, setBarData] = useState<number[]>([]);

  const generateData = (type: MetricType) => {
    switch (type) {
      case 'seo':
        return Array.from({ length: 18 }, (_, i) => 15 + (i * 4) + Math.random() * 10);
      case 'ads':
        return Array.from({ length: 18 }, () => 10 + Math.random() * 85);
      case 'velocity':
      default:
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
    { 
      id: '01', 
      title: 'Data Ingestion', 
      desc: 'We perform a deep-dive audit of your current ecosystem, identifying friction points and high-velocity opportunities.',
      gradient: 'from-[#00E5FF] to-[#0096FF]',
      icon: (
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 4.69 2 8v8c0 3.31 4.48 6 10 6s10-2.69 10-6V8c0-3.31-4.48-6-10-6zm0 18c-4.41 0-8-2.02-8-4.5V14.5c1.88 1.13 4.8 1.8 8 1.8s6.12-.67 8-1.8v1c0 2.48-3.59 4.5-8 4.5zm0-4.5c-4.41 0-8-2.02-8-4.5V11.5c1.88 1.13 4.8 1.8 8 1.8s6.12-.67 8-1.8v1c0 2.48-3.59 4.5-8 4.5zm0-4.5c-4.41 0-8-2.02-8-4.5S7.59 4 12 4s8 2.02 8 4.5-3.59 4.5-8 4.5z"/>
        </svg>
      )
    },
    { 
      id: '02', 
      title: 'Neural Strategy', 
      desc: 'Our AI engines architect a custom growth blueprint, synchronizing your brand with the latest market shifts.',
      gradient: 'from-[#9D00FF] to-[#FF00C7]',
      icon: (
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
          <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12zM7 5h2v2H7V5zm0 3h2v2H7V8zm0 3h2v2H7v-2zm3-6h2v2h-2V5zm0 3h2v2h-2V8zm0 3h2v2h-2v-2zm3-6h2v2h-2V5zm0 3h2v2h-2V8zm0 3h2v2h-2v-2zm3-6h2v2h-2V5zm0 3h2v2h-2V8zm0 3h2v2h-2v-2zm3-6h2v2h-2V5zm0 3h2v2h-2V8zm0 3h2v2h-2v-2z"/>
        </svg>
      )
    },
    { 
      id: '03', 
      title: 'Rapid Deployment', 
      desc: 'We launch precision campaigns and technical optimizations with zero-latency execution across all channels.',
      gradient: 'from-[#FF0000] to-[#FF9100]',
      icon: (
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      )
    },
    { 
      id: '04', 
      title: 'Recursive Scaling', 
      desc: 'Continuous monitoring and real-time adjustments ensure your momentum never plateaus, only compounds.',
      gradient: 'from-[#00FF85] to-[#00A3FF]',
      icon: (
        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
          <path d="M3.5 18.49l6-6.01 4 4L22.51 6.99l-1.42-1.41-7.59 7.51-4-4-7.41 7.42z" />
        </svg>
      )
    },
  ];

  const industries = [
    { 
      name: 'HEALTH TECH', 
      desc: 'Accelerating medical innovation with AI-driven diagnostic architectures.',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      name: 'EDUCATION', 
      desc: 'Redefining pedagogy through immersive digital learning ecosystems.',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      name: 'E-COMMERCE', 
      desc: 'Maximizing conversion velocity for global direct-to-consumer brands.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      name: 'REAL ESTATE', 
      desc: 'Deploying high-fidelity virtual experiences for enterprise property markets.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800' 
    },
  ];

  const metricConfig = {
    velocity: { label: 'Velocity', color: '#00E5FF', secondary: '#9D00FF' },
    seo: { label: 'SEO Authority', color: '#9D00FF', secondary: '#FF00C7' },
    ads: { label: 'Ad Conversion', color: '#FF00C7', secondary: '#00E5FF' }
  };

  return (
    <div className="w-full pb-40 overflow-hidden bg-[#020202]">
      {/* Cinematic Hero Section */}
      <section className="min-h-[85vh] flex items-center relative overflow-hidden bg-[#020202]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-16 py-20 lg:py-0">
          
          <div className="lg:col-span-7 space-y-10 relative z-10 text-left transition-all">
            <div className="space-y-8 flex flex-col items-start">
              <div className="flex items-center gap-6 animate-in fade-in slide-in-from-left-4 duration-1000">
                 <div className="p-3 border border-white/5 bg-white/[0.01] rounded-lg backdrop-blur-3xl group hover:border-cyan-500/30 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,1)] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: brandGradient, opacity: 0.1 }} />
                    <svg className="w-6 h-6 text-white group-hover:text-cyan-400 group-hover:scale-110 transition-all relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                 </div>
                 <div className="flex flex-col gap-1.5">
                   <span className="text-[8px] lg:text-[9px] font-black tracking-[0.4em] text-white uppercase select-none">MOMENTUM MARKETING SOLUTION LLC</span>
                   <span className="text-[6px] lg:text-[7px] font-black tracking-[0.25em] text-zinc-800 uppercase opacity-80">Global Digital Performance Hub</span>
                 </div>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight lg:leading-[1.1] tracking-tight uppercase flex flex-col select-none overflow-hidden">
                <span className="text-white drop-shadow-2xl animate-data-wipe">ACCELERATE YOUR</span>
                <span className="bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,229,255,0.4)] animate-data-wipe-delayed" style={{ backgroundImage: brandGradient }}>
                  MARKET MOMENTUM.
                </span>
              </h1>

              <p className="text-sm lg:text-[15px] text-zinc-700 max-w-xl leading-relaxed font-medium animate-in fade-in slide-in-from-left-4 duration-1000 delay-500">
                Momentum Marketing Solution LLC is the premier digital agency for high-growth brands. We combine data-driven SEO, precision PPC, and elite web architecture to engineer your industry dominance.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 items-center justify-start animate-in fade-in duration-1000 delay-700">
              <button onClick={scrollToContact} className="group relative px-10 py-5 bg-white text-black rounded-lg font-black uppercase tracking-[0.15em] text-[11px] overflow-hidden hover:scale-105 active:scale-95 transition-all shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundImage: brandGradient }} />
                <span className="relative group-hover:text-white transition-colors duration-300">Partner Now</span>
              </button>
              <button onClick={() => setView(ViewType.LIVE_SYNC)} className="px-10 py-5 bg-white/[0.01] border border-white/5 text-white rounded-lg font-black uppercase tracking-[0.15em] text-[11px] hover:bg-white/5 transition-all flex items-center gap-3 group relative overflow-hidden backdrop-blur-3xl shadow-xl">
                <span className="relative">Live Briefing</span>
                <div className="relative w-2 h-2 bg-cyan-400 rounded-full animate-pulse group-hover:animate-ping" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full group animate-in zoom-in duration-1000 delay-900 flex justify-center lg:justify-end">
            <div className="absolute -inset-4 opacity-5 rounded-[2rem] group-hover:opacity-15 transition-opacity duration-1000 blur-3xl" style={{ backgroundImage: brandGradient }} />
            <div className="relative bg-[#020202] border border-white/5 rounded-[2.5rem] p-6 lg:p-8 backdrop-blur-3xl shadow-[0_50px_120px_-30px_rgba(0,0,0,1)] transition-all duration-700 hover:scale-[1.01] hover:border-white/10 max-w-sm w-full">
              <div className="flex flex-wrap gap-1.5 mb-6 bg-black/60 p-1 rounded-2xl border border-white/5">
                {(Object.keys(metricConfig) as MetricType[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => setActiveMetric(m)}
                    className={`flex-1 px-3 py-2 rounded-xl text-[7px] font-black uppercase tracking-widest transition-all duration-300 border ${
                      activeMetric === m ? 'bg-white text-black border-white shadow-lg' : 'text-zinc-800 border-transparent hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {metricConfig[m].label}
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center mb-5 border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: metricConfig[activeMetric].color, boxShadow: `0 0 10px ${metricConfig[activeMetric].color}` }} />
                   <span className="text-[6px] font-mono text-zinc-700 tracking-widest uppercase">MOMENTUM_CORE</span>
                </div>
              </div>
              
              <div className="h-44 w-full bg-black/80 border border-white/5 rounded-xl relative flex items-end justify-center px-4 py-3 gap-1 overflow-hidden group/graph">
                 {barData.map((val, i) => (
                   <div key={i} className="flex-1 rounded-t-[1px] transition-all duration-[0.8s] ease-out hover:brightness-150 relative group/bar"
                    style={{ 
                      height: `${val}%`, 
                      background: `linear-gradient(to top, rgba(255,255,255,0.02), ${metricConfig[activeMetric].color}, ${metricConfig[activeMetric].secondary})`,
                      transitionDelay: `${i * 15}ms`
                    }}
                   />
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Methodology Section - strictly updated text and icon sizes to be small */}
      <section className="py-32 lg:py-40 bg-[#020202] relative overflow-hidden">
        {/* Added extra horizontal space by increasing padding */}
        <div className="max-w-[1440px] mx-auto px-10 md:px-24 lg:px-40 text-center space-y-20">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[8px] font-black text-zinc-500 uppercase tracking-[0.4em]">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
              The Engine
            </div>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter uppercase leading-[0.9]">
              OUR GROWTH <br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: brandGradient }}>
                METHODOLOGY.
              </span>
            </h2>
            <p className="text-zinc-500 text-xs lg:text-sm font-medium max-w-xl mx-auto leading-relaxed">
              A scientifically engineered framework designed to convert market data into sustainable ROI velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-left relative">
            {methodology.map((step, idx) => (
              <div key={step.id} className="group space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-1000" style={{ animationDelay: `${idx * 200}ms` }}>
                {/* SMALLER Multi-color Box with SMALLER White Filled Icon */}
                <div className={`relative w-14 h-14 rounded-xl p-[2px] bg-gradient-to-tr ${step.gradient} transition-transform duration-500 group-hover:scale-110 shadow-lg`}>
                   <div className="w-full h-full bg-[#020202] rounded-[calc(0.75rem-2px)] flex items-center justify-center">
                      <div className="transition-transform duration-700 group-hover:rotate-[360deg]">
                        {step.icon}
                      </div>
                   </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-black text-cyan-400 tracking-widest">{step.id}</span>
                    <div className="h-[1.5px] w-10 bg-white/10 group-hover:w-full group-hover:bg-pink-500 transition-all duration-700 relative overflow-hidden">
                       <div className="absolute inset-0 bg-pink-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                    </div>
                  </div>
                  <h3 className="text-lg lg:text-xl font-black text-white uppercase tracking-tight group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-zinc-600 text-[11px] font-semibold leading-relaxed group-hover:text-zinc-400 transition-colors">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Active Deployment Teams Footer Bar */}
          <div className="mt-20 p-1.5 bg-white/[0.01] border border-white/5 rounded-[2rem] flex flex-col lg:flex-row items-center justify-between gap-6 max-w-4xl mx-auto backdrop-blur-3xl group/bar hover:bg-white/[0.03] transition-all shadow-2xl">
            <div className="flex items-center gap-6 pl-6">
              <div className="flex -space-x-2.5">
                {['A', 'B', 'C', 'D'].map((t) => (
                  <div key={t} className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-[9px] font-black text-white/40 ring-2 ring-[#020202] transition-transform group-hover/bar:scale-110">
                    {t}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <h4 className="text-[10px] font-black text-white uppercase tracking-widest">Active Deployment Teams</h4>
                <p className="text-[8px] font-bold text-cyan-400/60 uppercase tracking-[0.2em]">Global Synchronization Ready</p>
              </div>
            </div>
            <button 
              onClick={scrollToContact}
              className="w-full lg:w-auto px-10 py-4 bg-white text-black rounded-xl font-black uppercase tracking-[0.2em] text-[10px] hover:scale-105 active:scale-95 transition-all shadow-xl group/btn overflow-hidden relative"
            >
              <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-10 transition-opacity bg-black" />
              <span className="relative z-10">Initiate Blueprint</span>
            </button>
          </div>
        </div>
      </section>

      {/* Industries Section - Navy Blue Background */}
      <section className="py-32 bg-[#051633] border-y border-white/5 overflow-hidden backdrop-blur-3xl shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]">
         <div className="max-w-[1440px] mx-auto px-6 lg:px-16 space-y-20">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
               <div>
                  <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.4em] mb-4 block">SECTOR_EXPERTISE</span>
                  <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white">INDUSTRIES.</h2>
               </div>
               <button onClick={scrollToContact} className="px-10 py-5 bg-white text-black rounded-xl font-black uppercase tracking-widest text-[11px] hover:scale-105 transition-all shadow-[0_30px_60px_rgba(0,0,0,0.5)]">Request Industry Spec</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {industries.map((industry, i) => (
                  <div key={i} className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all duration-700 cursor-pointer shadow-[0_40px_80px_rgba(0,0,0,1)]">
                     <img 
                        src={industry.image} 
                        alt={industry.name} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-30 group-hover:opacity-50" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                     <div className="absolute bottom-12 left-12 right-12">
                        <span className="text-[9px] font-black text-cyan-400 mb-3 block tracking-[0.4em]">MARKET SECTOR</span>
                        <h3 className="text-3xl font-black uppercase tracking-tighter text-white group-hover:translate-x-3 transition-transform duration-500">{industry.name}</h3>
                        <p className="text-zinc-500 text-[11px] font-medium mt-2 max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 line-clamp-2">
                           {industry.desc}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

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
      `}</style>
    </div>
  );
};

export default Home;
