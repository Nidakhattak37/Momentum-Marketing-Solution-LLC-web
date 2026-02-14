
import React, { useEffect, useState } from 'react';
import { ViewType } from '../../types.ts';
import Infrastructure from './Infrastructure.tsx';
import GrowthMethodology from './GrowthMethodology.tsx';
import ExpertiseVerticals from './ExpertiseVerticals.tsx';

interface HomeProps {
  setView: (view: ViewType) => void;
}

type MetricType = 'velocity' | 'seo' | 'ads';

const metricConfig: Record<MetricType, { label: string; color: string; secondary: string }> = {
  velocity: { label: 'Mob Dev', color: '#00E5FF', secondary: '#00B8D4' },
  seo: { label: 'SEO Boost', color: '#9D00FF', secondary: '#7B00CC' },
  ads: { label: 'Ad Performance', color: '#FF00C7', secondary: '#C20098' },
};

const Home: React.FC<HomeProps> = ({ setView }) => {
  const [activeMetric, setActiveMetric] = useState<MetricType>('velocity');
  const [barData, setBarData] = useState<number[]>([]);
  const [frame, setFrame] = useState(0);

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
      setFrame(f => f + 1);
    }, 40);

    return () => clearInterval(interval);
  }, [activeMetric]);

  // Stochastic wave animation for the graph
  useEffect(() => {
    const interval = setInterval(() => {
      setBarData(prev => prev.map((val, i) => {
        const wave = Math.sin((frame + i * 8) * 0.15) * 12;
        const pulse = Math.cos(frame * 0.05) * 8;
        const noise = Math.random() * 6;
        const base = generateData(activeMetric)[i];
        return Math.max(12, Math.min(100, base + wave + pulse + noise));
      }));
    }, 80);
    return () => clearInterval(interval);
  }, [activeMetric, frame]);

  const scrollToContact = () => {
    const section = document.getElementById('contact-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      setView(ViewType.CONTACT);
    }
  };

  const brandGradient = 'linear-gradient(to right, #00E5FF, #9D00FF, #FF00C7)';

  const ecosystemItems = [
    { 
      name: 'iOS/Android', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="5" y="2" width="14" height="20" rx="3" />
          <path d="M12 18H12.01" strokeLinecap="round" />
        </svg>
      ) 
    },
    { 
      name: 'WordPress', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 12L9 18M12 12l3-6M12 12L8 8M12 12l4 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) 
    },
    { 
      name: 'Analytics', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 20V10M12 20V4M6 20V14" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) 
    },
    { 
      name: 'Flutter', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2L6 10L14 18M18 6L10 14L18 22" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) 
    },
    { 
      name: 'HubSpot', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 9v-4M12 19v-4M15 12h4M5 12h4" />
        </svg>
      ) 
    },
    { 
      name: 'Google Ads', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3L3 21h18L12 3z" />
          <path d="M12 9v6M9 12h6" />
        </svg>
      ) 
    },
    { 
      name: 'Meta Ads', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M7 15c-3 0-5-2-5-5s2-5 5-5c2 0 4 2 5 3 1-1 3-3 5-3 3 0 5 2 5 5s-2 5-5 5c-2 0-4-2-5-3-1 1-3 3-5 3z" />
        </svg>
      ) 
    },
    { 
      name: 'Shopify', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 8V6c0-1.657 1.343-3 3-3h6c1.657 0 3 1.343 3 3v2M4 8h16l1 13H3L4 8z" />
        </svg>
      ) 
    },
    { 
      name: 'React', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="2" />
          <ellipse cx="12" cy="12" rx="10" ry="4" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        </svg>
      ) 
    },
    { 
      name: 'Node.js', 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3l8 4.5v9l-8 4.5-8-4.5v-9L12 3z" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      ) 
    },
  ];

  const expertiseCards = [
    {
      title: 'SEO Strategy',
      desc: 'Boost your visibility and rank #1 on search engines with our data-driven organic strategies.',
      icon: (
        <svg className="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: 'Paid Search (PPC)',
      desc: 'Maximize ROI with precision-targeted ad campaigns across Google, Bing, and Social platforms.',
      icon: (
        <svg className="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    },
    {
      title: 'Web Experiences',
      desc: 'Convert visitors into customers with high-performance, stunning web design and development.',
      icon: (
        <svg className="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'Social Scaling',
      desc: 'Engage your community and build brand loyalty with creative social media management.',
      icon: (
        <svg className="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full pb-0 overflow-hidden bg-[#020202]">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex items-center relative overflow-hidden bg-[#020202] mb-6 lg:mb-8">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-10 py-6 lg:py-0">
          <div className="lg:col-span-6 lg:pl-16 space-y-6 relative z-10 text-left transition-all">
            <div className="space-y-4 flex flex-col items-start">
              <div className="flex items-center gap-5 animate-in fade-in slide-in-from-left-4 duration-1000">
                 <div className="p-2.5 border border-white/5 bg-white/[0.01] rounded-lg backdrop-blur-3xl group hover:border-cyan-500/30 transition-all duration-500 shadow-[0_0_20px_rgba(0,229,255,0.3)] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: brandGradient, opacity: 0.1 }} />
                    <svg className="w-5 h-5 text-white group-hover:text-cyan-400 group-hover:scale-110 transition-all relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                 </div>
                 <div className="flex flex-col gap-1">
                   <span className="text-[7px] lg:text-[8px] font-black tracking-[0.4em] text-white uppercase select-none">MOMENTUM MARKETING SOLUTION LLC</span>
                   <span className="text-[5px] lg:text-[6px] font-black tracking-[0.2em] text-zinc-800 uppercase opacity-70">Global Digital Performance Hub</span>
                 </div>
              </div>
              
              <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight tracking-tight uppercase flex flex-col select-none overflow-hidden">
                <span className="text-white drop-shadow-2xl animate-data-wipe">ACCELERATE YOUR</span>
                <span className="bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,229,255,0.4)] animate-data-wipe-delayed" style={{ backgroundImage: brandGradient }}>
                  MARKET MOMENTUM.
                </span>
              </h1>

              <p className="text-xs lg:text-[13px] text-zinc-600 max-w-md leading-relaxed font-medium animate-in fade-in slide-in-from-left-4 duration-1000 delay-500">
                The premier digital agency for high-growth brands. We combine data-driven SEO, precision PPC, and elite web architecture to engineer dominance.
              </p>
            </div>

            <div className="flex flex-wrap gap-5 items-center justify-start animate-in fade-in duration-1000 delay-700">
              <button onClick={scrollToContact} className="group relative px-8 py-4 bg-white text-black rounded-lg font-black uppercase tracking-[0.15em] text-[10px] overflow-hidden hover:scale-105 active:scale-95 transition-all shadow-xl">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundImage: brandGradient }} />
                <span className="relative group-hover:text-white transition-colors duration-300">Partner Now</span>
              </button>
              
              <button onClick={() => setView(ViewType.LIVE_SYNC)} className="px-8 py-4 bg-white/[0.01] border border-white/5 text-white rounded-lg font-black uppercase tracking-[0.15em] text-[10px] hover:bg-white/5 transition-all flex items-center gap-3 group relative overflow-hidden backdrop-blur-3xl shadow-lg">
                <span className="relative">Live Briefing</span>
                <div className="relative w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse group-hover:animate-ping" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 relative w-full group animate-in zoom-in duration-1000 delay-900 flex justify-center lg:justify-start lg:pl-10">
            <div className="absolute -inset-4 opacity-5 rounded-[2rem] group-hover:opacity-15 transition-opacity duration-1000 blur-3xl" style={{ backgroundImage: brandGradient }} />
            <div className="relative bg-[#020202] border border-white/5 rounded-[2.5rem] p-6 lg:p-8 backdrop-blur-3xl shadow-[0_40px_100px_-20px_rgba(0,0,0,1)] transition-all duration-700 hover:scale-[1.01] hover:border-white/10 max-w-sm w-full">
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
                   <span className="text-[6px] font-mono text-zinc-700 tracking-widest uppercase">MOMENTUM_SYNC</span>
                </div>
              </div>
              
              <div className="h-44 w-full bg-black/80 border border-white/5 rounded-xl relative flex items-end justify-center px-4 py-3 gap-1 overflow-hidden group/graph">
                 {barData.map((val, i) => (
                   <div key={i} className="flex-1 rounded-t-[1px] transition-all duration-300 ease-out hover:brightness-150 relative group/bar"
                    style={{ 
                      height: `${val}%`, 
                      background: `linear-gradient(to top, rgba(255,255,255,0.02), ${metricConfig[activeMetric].color}, ${metricConfig[activeMetric].secondary})`,
                    }}
                   />
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE ECOSYSTEM SLIDER */}
      <section className="py-6 lg:py-8 bg-black border-y border-white/5 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-10 md:px-24 lg:px-40 mb-4 flex items-center gap-4">
          <div className="h-[1px] w-8 bg-pink-500/20" />
          <span className="text-[8px] font-black text-white/60 uppercase tracking-[0.4em] drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">OUR CORE ECOSYSTEM</span>
        </div>
        <div className="flex whitespace-nowrap animate-infinite-scroll">
          {[...ecosystemItems, ...ecosystemItems].map((item, idx) => (
            <div key={idx} className="relative inline-flex items-center gap-3 px-5 py-2.5 bg-zinc-900/10 border border-white/5 rounded-xl mx-2 hover:bg-zinc-800/20 hover:shadow-[0_0_15px_rgba(0,229,255,0.1)] hover:border-cyan-500/30 transition-all duration-500 group cursor-pointer overflow-hidden min-w-[140px]">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              <div className="text-zinc-400 group-hover:text-cyan-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.5)] transition-all duration-500">
                {item.icon}
              </div>
              <span className="text-[9px] font-black text-zinc-100 uppercase tracking-[0.15em] group-hover:text-white transition-colors duration-500 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">{item.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CORE EXPERTISE */}
      <section className="py-16 lg:py-20 bg-black overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-10 md:px-24 lg:px-40">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-12 animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <div className="space-y-2">
              <span className="text-[10px] font-black text-pink-500 uppercase tracking-[0.4em]">CORE EXPERTISE</span>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight uppercase tracking-tighter">
                High-Octane <br />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: brandGradient }}>
                  Digital Engines.
                </span>
              </h2>
            </div>
            <div className="max-w-sm lg:mt-12">
              <p className="text-zinc-600 font-bold uppercase text-[10px] leading-relaxed tracking-wider opacity-70">
                Strategic excellence meets technical precision. We deploy high-performance results across the entire digital landscape.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseCards.map((card, i) => (
              <div 
                key={i} 
                className="relative group p-8 bg-zinc-900/10 border border-white/5 rounded-[2rem] hover:bg-zinc-900/30 hover:shadow-[0_0_40px_rgba(255,0,199,0.1)] hover:border-pink-500/20 transition-all duration-500 flex flex-col items-start gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700 overflow-hidden"
                style={{ animationDelay: `${i * 100}ms`, animationFillMode: 'both' }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                
                <div className="w-10 h-10 rounded-xl bg-indigo-950/30 border border-indigo-500/20 flex items-center justify-center shadow-inner group-hover:border-pink-500/40 group-hover:shadow-[0_0_15px_rgba(255,0,199,0.4)] transition-all duration-300">
                  <div className="group-hover:scale-110 group-hover:brightness-150 transition-all duration-300">
                    {card.icon}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-pink-400 transition-colors">{card.title}</h3>
                  <p className="text-zinc-500 text-[12px] font-semibold leading-relaxed line-clamp-3">
                    {card.desc}
                  </p>
                  <button className="flex items-center gap-2 text-[10px] font-black text-pink-500 uppercase tracking-widest group-hover:gap-3.5 transition-all pt-2 group/btn">
                    LEARN MORE
                    <svg className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Infrastructure />
      
      <GrowthMethodology />

      <ExpertiseVerticals />

      {/* Styles for animations */}
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
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
