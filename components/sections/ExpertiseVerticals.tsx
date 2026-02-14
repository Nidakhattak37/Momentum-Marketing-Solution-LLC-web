
import React from 'react';

const verticals = [
  {
    id: "V-SEO",
    title: "Healthcare",
    metric: "+42%",
    label: "LEADS",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    id: "P-ADS",
    title: "Real Estate",
    metric: "+28%",
    label: "CTR",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  {
    id: "E-COM",
    title: "E-Commerce",
    metric: "4.8x",
    label: "ROAS",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    )
  },
  {
    id: "S-AAS",
    title: "SaaS / Tech",
    metric: "+35%",
    label: "RET",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    )
  }
];

const ExpertiseVerticals: React.FC = () => {
  const brandGradient = 'linear-gradient(to right, #00E5FF, #9D00FF, #FF00C7)';

  return (
    <section className="w-full pt-20 pb-0 px-10 md:px-24 lg:px-40 bg-[#020a1a] overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{
             backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
             backgroundSize: '40px 40px'
           }} />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div className="space-y-4 animate-in fade-in slide-in-from-left-8 duration-1000">
            <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.4em]">STRATEGIC VERTICALS</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9]">
              DEEP DOMAIN <br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: brandGradient }}>
                EXPERTISE.
              </span>
            </h2>
            <p className="text-zinc-500 text-[12px] font-semibold max-w-md leading-relaxed">
              Engineered growth strategies tailored to the unique complexities of high-performance market sectors.
            </p>
          </div>

          <div className="animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md group hover:border-emerald-500/30 transition-all cursor-default">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" />
              <span className="text-[9px] font-black text-white/60 tracking-[0.3em] uppercase group-hover:text-emerald-400 transition-colors">VERTICAL PULSE ACTIVE</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {verticals.map((v, i) => (
            <div 
              key={v.id} 
              className="group relative h-[380px] rounded-[2rem] overflow-hidden border border-white/5 bg-black animate-in fade-in zoom-in-95 duration-700 fill-mode-both"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                style={{ backgroundImage: `url(${v.image})` }}
              />
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 group-hover:via-transparent group-hover:to-transparent transition-all duration-700" />
              <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Content Top */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10">
                <div className="w-9 h-9 rounded-xl bg-black/40 border border-white/10 backdrop-blur-xl flex items-center justify-center text-white/60 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all">
                  {v.icon}
                </div>
                <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">{v.id}</span>
              </div>

              {/* Content Bottom */}
              <div className="absolute bottom-6 left-6 right-6 z-10 space-y-4">
                <h3 className="text-xl font-black text-white uppercase tracking-tight">{v.title}</h3>
                
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-black text-white leading-none group-hover:text-cyan-400 transition-colors">{v.metric}</span>
                    <span className="text-[8px] font-black text-zinc-500 uppercase tracking-widest mb-1">{v.label}</span>
                  </div>
                </div>

                <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                  <div className="w-8 h-8 rounded-full border border-cyan-400/40 flex items-center justify-center text-cyan-400">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Quote & CTA */}
        <div className="flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 pb-12">
          <p className="text-zinc-600 text-[10px] font-black italic uppercase tracking-[0.3em] max-w-2xl leading-relaxed">
            "ACCELERATING MARKET DOMINANCE THROUGH TECHNICAL PRECISION AND STRATEGIC VELOCITY."
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <button className="px-10 py-4 bg-white text-black rounded-lg font-black uppercase tracking-[0.2em] text-[9px] hover:scale-105 active:scale-95 transition-all shadow-2xl hover:bg-zinc-100">
              PARTNER NOW
            </button>
            
            <div className="h-[1px] w-12 bg-white/10 hidden md:block" />
            
            <span className="text-[8px] font-black text-zinc-800 uppercase tracking-[0.5em]">MOMENTUM INTEGRATION 2.0</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseVerticals;
