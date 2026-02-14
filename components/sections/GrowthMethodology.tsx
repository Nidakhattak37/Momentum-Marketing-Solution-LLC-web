
import React from 'react';

const methodologySteps = [
  {
    id: "01",
    title: "Data Ingestion",
    desc: "We perform a deep-dive audit of your current ecosystem, identifying friction points and high-velocity opportunities.",
    icon: (
      <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="5" rx="1" />
        <rect x="4" y="11" width="16" height="5" rx="1" />
        <rect x="4" y="18" width="16" height="2" rx="0.5" />
      </svg>
    ),
    glow: "shadow-[0_0_20px_rgba(0,229,255,0.2)]",
    border: "border-cyan-500/30"
  },
  {
    id: "02",
    title: "Neural Strategy",
    desc: "Our AI engines architect a custom growth blueprint, synchronizing your brand with the latest market shifts.",
    icon: (
      <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="9" y="9" width="6" height="6" rx="1" />
        <path d="M12 3v3m0 12v3M3 12h3m12 0h3" />
        <path d="M12 9V7m0 10v-2M9 12H7m10 0h-2" opacity="0.5" />
      </svg>
    ),
    glow: "shadow-[0_0_20px_rgba(157,0,255,0.2)]",
    border: "border-purple-500/30"
  },
  {
    id: "03",
    title: "Rapid Deployment",
    desc: "We launch precision campaigns and technical optimizations with zero-latency execution across all channels.",
    icon: (
      <svg className="w-5 h-5 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    glow: "shadow-[0_0_20px_rgba(255,165,0,0.2)]",
    border: "border-orange-500/30"
  },
  {
    id: "04",
    title: "Recursive Scaling",
    desc: "Continuous monitoring and real-time adjustments ensure your momentum never plateaus, only compounds.",
    icon: (
      <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 17l6-6 4 4 8-8" />
        <polyline points="14 7 21 7 21 14" />
      </svg>
    ),
    glow: "shadow-[0_0_20px_rgba(16,185,129,0.2)]",
    border: "border-emerald-500/30"
  }
];

const GrowthMethodology: React.FC = () => {
  const brandGradient = 'linear-gradient(to right, #00E5FF, #9D00FF, #FF00C7)';

  return (
    <section className="relative w-full py-24 px-10 md:px-24 lg:px-40 bg-[#080808] border-y border-white/[0.02] overflow-hidden">
      {/* Dynamic Shine Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent skew-x-[-25deg] animate-shine-sweep" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/[0.02] blur-[120px] rounded-full animate-pulse-slow" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20 space-y-6">
          <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 flex items-center gap-2.5 backdrop-blur-md">
            <div className="w-1.5 h-1.5 bg-[#FF00C7] rounded-full shadow-[0_0_8px_#FF00C7]" />
            <span className="text-[10px] font-black text-white/40 tracking-[0.4em] uppercase">THE ENGINE</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
            OUR GROWTH <br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: brandGradient }}>
              METHODOLOGY.
            </span>
          </h2>
          
          <p className="text-zinc-600 text-[13px] md:text-sm font-semibold max-w-xl leading-relaxed">
            A scientifically engineered framework designed to convert market data into sustainable ROI velocity.
          </p>
        </div>

        {/* Methodology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {methodologySteps.map((step) => (
            <div key={step.id} className="group flex flex-col items-start space-y-6">
              <div className={`w-14 h-14 rounded-xl bg-black border ${step.border} flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${step.glow}`}>
                {step.icon}
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-black text-cyan-400 uppercase tracking-widest">{step.id}</span>
                  <div className="h-[1px] w-8 bg-white/10" />
                </div>
                
                <h3 className="text-xl font-black text-white uppercase tracking-tight">{step.title}</h3>
                <p className="text-zinc-500 text-[12px] font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Status Bar */}
        <div className="relative group p-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-[2rem]">
          <div className="relative flex flex-col md:flex-row items-center justify-between p-8 bg-[#0a0a0c]/80 rounded-[1.95rem] border border-white/5 backdrop-blur-3xl gap-8">
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {['A', 'B', 'C', 'D'].map((char) => (
                  <div key={char} className="w-10 h-10 rounded-full bg-zinc-900 border-2 border-[#0a0a0c] flex items-center justify-center text-[10px] font-black text-zinc-500 group-hover:text-cyan-400 transition-colors">
                    {char}
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-black text-white uppercase tracking-[0.2em]">Active Deployment Teams</span>
                <span className="text-[8px] font-bold text-zinc-700 uppercase tracking-[0.3em] mt-1">Global Synchronization Ready</span>
              </div>
            </div>
            
            <button className="px-10 py-4 bg-white text-black rounded-lg font-black uppercase tracking-[0.2em] text-[10px] transition-all hover:scale-105 active:scale-95 shadow-2xl hover:bg-zinc-100">
              INITIATE BLUEPRINT
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shine-sweep {
          0% { transform: translateX(-100%) skewX(-25deg); }
          50% { transform: translateX(100%) skewX(-25deg); }
          100% { transform: translateX(100%) skewX(-25deg); }
        }
        .animate-shine-sweep {
          animation: shine-sweep 8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.4; transform: translate(-50%, -50%) scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default GrowthMethodology;
