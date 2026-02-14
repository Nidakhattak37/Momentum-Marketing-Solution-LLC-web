
import React from 'react';

const specs = [
  {
    id: "01",
    title: "Search Engine Optimization",
    desc: "Strategic keyword research and on-page optimization to dominate organic search results.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <polyline points="11 8 11 12 14 15" strokeOpacity="0.5" />
      </svg>
    )
  },
  {
    id: "02",
    title: "Pay-Per-Click Ads",
    desc: "Highly targeted campaigns on Google and Social that convert clicks into revenue.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        <path d="M13 2L15 4" strokeOpacity="0.4" />
      </svg>
    )
  },
  {
    id: "03",
    title: "Social Media Management",
    desc: "Building brand presence and community across Instagram, LinkedIn, and Twitter.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        <circle cx="18" cy="8" r="1" fill="currentColor" />
      </svg>
    )
  },
  {
    id: "04",
    title: "Content Marketing",
    desc: "Authority-building content that educates your audience and drives conversions.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    )
  },
  {
    id: "05",
    title: "Web Development",
    desc: "Custom, blazing-fast websites built for conversion and modern performance standards.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" strokeOpacity="0.5" />
      </svg>
    )
  },
  {
    id: "06",
    title: "Mobile App Development",
    desc: "High-performance iOS and Android applications engineered for seamless UX and scalable growth.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
        <path d="M9 15h6" strokeOpacity="0.3" />
      </svg>
    )
  },
  {
    id: "07",
    title: "Branding & Identity",
    desc: "Crafting unique visual identities and brand voices that resonate in crowded markets.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="11" r="3" strokeOpacity="0.5" />
      </svg>
    )
  },
  {
    id: "08",
    title: "Data & Analytics",
    desc: "Turning raw data into actionable insights through advanced tracking and reporting.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    )
  }
];

const Infrastructure: React.FC = () => {
  const brandGradient = 'linear-gradient(to right, #00E5FF, #9D00FF, #FF00C7)';

  return (
    <section className="w-full py-12 px-10 md:px-24 lg:px-40 bg-transparent overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9]">
            DIGITAL DEPLOYMENT <br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: brandGradient }}>
              INFRASTRUCTURE.
            </span>
          </h2>
          
          <p className="text-zinc-700 text-[11px] font-bold uppercase tracking-[0.3em] max-w-lg">
            High-velocity performance solutions engineered for absolute market dominance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {specs.map((spec, i) => (
            <div 
              key={spec.id} 
              className="group relative p-8 bg-[#0a0a0c]/60 border border-white/5 rounded-[2.5rem] hover:bg-[#0a0a0c]/80 hover:border-white/20 transition-all duration-700 flex flex-col items-start gap-8 overflow-hidden animate-in fade-in slide-in-from-left-4 duration-1000 fill-mode-both"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-y-full group-hover:animate-scanline pointer-events-none" />
              
              <div className="flex justify-between items-start w-full relative z-10">
                {/* Number on the left */}
                <div className="text-[14px] font-black text-zinc-900 group-hover:text-cyan-400/40 transition-colors uppercase tracking-widest mt-1">
                  {spec.id}
                </div>
                
                {/* Icon on the right */}
                <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-zinc-900/80 border border-white/5 text-zinc-600 group-hover:text-cyan-400 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] group-hover:rotate-[360deg] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                  {spec.icon}
                </div>
              </div>

              <div className="space-y-4 relative z-10 w-full">
                <h3 className="text-[14px] font-black uppercase tracking-tight transition-all duration-500 bg-clip-text text-transparent" style={{ backgroundImage: brandGradient }}>
                  {spec.title}
                </h3>
                <p className="text-white/40 text-[11px] font-semibold leading-relaxed line-clamp-3 group-hover:text-zinc-300 transition-all duration-500">
                  {spec.desc}
                </p>
                
                <div className="pt-6 border-t border-white/[0.03] flex items-center justify-between group-hover:border-white/10 transition-colors">
                  <div className="flex items-center gap-2 text-[8px] font-black text-zinc-800 uppercase tracking-[0.3em] group-hover:text-cyan-400 transition-all">
                    EXPLORE SPECS
                  </div>
                  <svg className="w-4 h-4 text-zinc-900 group-hover:text-cyan-400 transition-all group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(400px); opacity: 0; }
        }
        .group:hover .animate-scanline {
          animation: scanline 2.5s cubic-bezier(0.19, 1, 0.22, 1) infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Infrastructure;
