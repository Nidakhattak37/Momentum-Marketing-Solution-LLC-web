
import React from 'react';

const Services: React.FC = () => {
  const brandGradient = 'linear-gradient(to right, #00E5FF, #9D00FF, #FF00C7)';

  const srvs = [
    { 
      name: 'Search Engine Optimization', 
      desc: 'Strategic organic growth strategies engineered to dominate search results and capture high-intent traffic.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    { 
      name: 'Social Media Marketing', 
      desc: 'High-velocity community building and creative content distribution across all major social ecosystems.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      name: 'Content Strategy', 
      desc: 'Precision-engineered narrative frameworks designed to build authority and drive measurable conversion velocity.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l5 5v11a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 4v5h5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8M8 16h6" />
        </svg>
      )
    },
    { 
      name: 'Web Development', 
      desc: 'Ultra-fast, conversion-focused digital infrastructure built with cutting-edge tech for absolute market performance.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    { 
      name: 'Mobile App Development', 
      desc: 'Seamless, high-performance iOS and Android applications designed for elite user experience and retention.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" strokeWidth={2} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01" />
        </svg>
      )
    },
    { 
      name: 'Graphics design', 
      desc: 'Visually stunning brand identities and digital assets that command attention and resonate with target audiences.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      name: 'Market Analytics', 
      desc: 'Advanced data auditing and real-time tracking solutions to transform raw data into actionable market insights.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m0 0a2 2 0 002 2h2a2 2 0 002-2v-7a2 2 0 00-2-2h-2a2 2 0 00-2 2v7" />
        </svg>
      )
    },
    { 
      name: 'Pay-Per-Click (PPC)', 
      desc: 'Highly targeted, ROI-driven advertising campaigns across search and social platforms for immediate lead generation.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      )
    }
  ];

  return (
    <div className="max-w-[1600px] mx-auto p-6 py-20 animate-in fade-in duration-700">
      <div className="mb-20 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-6 leading-none">
          Precision <br /> 
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: brandGradient }}>
            Performance Engines.
          </span>
        </h1>
        <p className="text-zinc-500 text-lg max-w-2xl font-medium tracking-tight">
          The intersection of elite creativity and technical supremacy. We deploy the following high-octane solutions to drive absolute market dominance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {srvs.map((s, i) => (
          <div 
            key={i} 
            className="group p-8 bg-zinc-900/40 border border-white/5 rounded-[2rem] hover:bg-zinc-900/60 hover:border-white/20 transition-all duration-500 flex flex-col items-start"
          >
            <div className="w-12 h-12 bg-zinc-950 border border-white/10 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all duration-500">
              <span className="text-cyan-400">{s.icon}</span>
            </div>
            <h3 className="text-lg font-black text-white mb-4 uppercase tracking-tight group-hover:text-cyan-400 transition-colors">
              {s.name}
            </h3>
            <p className="text-zinc-500 text-xs font-semibold leading-relaxed group-hover:text-zinc-300 transition-colors">
              {s.desc}
            </p>
            
            <div className="mt-8 pt-6 border-t border-white/[0.03] w-full flex justify-between items-center group-hover:border-white/10 transition-colors">
               <span className="text-[9px] font-black text-zinc-800 uppercase tracking-widest group-hover:text-zinc-600">Metric Enabled</span>
               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_5px_#10b981]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
