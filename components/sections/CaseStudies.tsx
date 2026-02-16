
import React from 'react';

const CaseStudies: React.FC = () => {
  const brandGradient = 'linear-gradient(to right, #00E5FF, #9D00FF, #FF00C7)';

  const projects = [
    {
      id: "ARCH-001",
      title: "Mobile Ecosystem Deployment",
      sector: "INFRASTRUCTURE / MOBILE",
      timestamp: "DEPLOY_DATE: 2024.Q4",
      summary: "High-integrity refactor of a fragmented mobile architecture for a global SaaS provider.",
      metrics: [
        { label: "COLD_START", value: "-72%", color: "text-cyan-400" },
        { label: "SYNC_LATENCY", value: "110ms", color: "text-cyan-400" },
        { label: "UPTIME", value: "99.99%", color: "text-cyan-400" }
      ],
      tags: ["Native Engine", "Binary Optimization", "Edge Logic"],
      theme: "#00E5FF"
    },
    {
      id: "ARCH-002",
      title: "Enterprise Web Synchronization",
      sector: "SYSTEMS / FULL-STACK",
      timestamp: "DEPLOY_DATE: 2025.Q1",
      summary: "Re-engineering a monolithic web infrastructure into a headless, serverless micro-service ecosystem.",
      metrics: [
        { label: "THROUGHPUT", value: "+240%", color: "text-purple-400" },
        { label: "LCP_SCORE", value: "0.4s", color: "text-purple-400" },
        { label: "SCALABILITY", value: "∞", color: "text-purple-400" }
      ],
      tags: ["SSR Architecture", "API Mirroring", "Cloud Native"],
      theme: "#9D00FF"
    },
    {
      id: "ARCH-003",
      title: "Algorithmic Authority Sync",
      sector: "GROWTH / TECHNICAL SEO",
      timestamp: "DEPLOY_DATE: 2024.Q3",
      summary: "Deploying a recursive topical authority engine to dominate hyper-competitive search nodes.",
      metrics: [
        { label: "ORGANIC_VELOCITY", value: "4.5x", color: "text-pink-400" },
        { label: "SERP_CONTROL", value: "TOP_3", color: "text-pink-400" },
        { label: "INDEX_SYNC", value: "0.2s", color: "text-pink-400" }
      ],
      tags: ["Semantic Mapping", "Schema Injection", "E-E-A-T Sync"],
      theme: "#FF00C7"
    }
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-20 lg:px-32 py-24 animate-in fade-in duration-1000 overflow-hidden relative">
      {/* Schematic Background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] -z-10" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      {/* Page Header */}
      <div className="relative mb-32 space-y-8">
        <div className="flex items-center gap-4 animate-in slide-in-from-left-4 duration-700">
           <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" />
           <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.8em]">SYSTEMS_LOG / DEPLOYMENT_ARCHIVE</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight text-white leading-[0.85] animate-in slide-in-from-bottom-8 duration-1000">
          PROVEN <br />
          <span className="bg-clip-text text-transparent" style={{ backgroundImage: brandGradient }}>
            MECHANICS.
          </span>
        </h1>

        <div className="max-w-xl pt-6 border-t border-white/5">
          <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em] leading-relaxed">
            Standard metrics aren't enough. We document absolute system performance. Explore the technical synchronized results of our most complex engineering deployments.
          </p>
        </div>
      </div>

      {/* Dossier List */}
      <div className="space-y-40 lg:space-y-56">
        {projects.map((project, idx) => (
          <div key={project.id} className="group relative">
            {/* Mission ID Watermark */}
            <div className="absolute -top-24 -left-12 text-[120px] md:text-[200px] font-black text-white/[0.02] pointer-events-none select-none font-mono">
              {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 relative z-10">
              {/* Sidebar Info */}
              <div className="lg:col-span-4 space-y-12">
                <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-t-xl rounded-br-xl border-b-transparent">
                  <span className="text-[10px] font-mono text-cyan-400 tracking-widest">{project.id}</span>
                </div>

                <div className="space-y-6">
                  <div className="space-y-1">
                    <div className="text-[8px] font-black text-zinc-700 uppercase tracking-[0.4em]">SECTOR_SYNC</div>
                    <div className="text-xs font-black text-white uppercase tracking-widest">{project.sector}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[8px] font-black text-zinc-700 uppercase tracking-[0.4em]">TIMESTAMP</div>
                    <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{project.timestamp}</div>
                  </div>
                </div>

                {/* Impact Radar (Visual Decoration) */}
                <div className="relative w-40 h-40 flex items-center justify-center">
                   <div className="absolute inset-0 border border-white/5 rounded-full" />
                   <div className="absolute inset-4 border border-white/5 rounded-full" />
                   <div className="absolute inset-8 border border-white/5 rounded-full" />
                   <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/5 rounded-full animate-spin-slow" />
                   <div className="relative w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_15px_white]" />
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-8 space-y-12">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none group-hover:translate-x-4 transition-transform duration-700">
                  {project.title}
                </h2>

                <p className="text-zinc-500 text-sm md:text-lg font-semibold leading-relaxed max-w-2xl border-l-2 border-white/5 pl-8 md:pl-12">
                  {project.summary}
                </p>

                {/* Telemetry Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12">
                  {project.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="relative p-6 bg-[#0a0a0c]/40 border border-white/5 rounded-2xl overflow-hidden group/metric">
                       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent translate-y-full group-hover/metric:animate-scan-line" />
                       <div className="relative z-10 space-y-1">
                          <span className="text-[8px] font-black text-zinc-700 uppercase tracking-[0.4em]">{metric.label}</span>
                          <div className={`text-3xl font-black tracking-tighter ${metric.color}`}>{metric.value}</div>
                       </div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {project.tags.map((tag, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-2">
                       <div className="w-1 h-1 bg-white/20 rounded-full" />
                       <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Global Telemetry Board */}
      <div className="mt-64 relative">
        <div className="absolute inset-0 bg-white/[0.01] rounded-[4rem] -z-10" />
        <div className="p-12 lg:p-24 space-y-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">
            <div className="space-y-4">
              <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.6em]">AGGREGATE_PERFORMANCE</span>
              <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight leading-none">
                SYSTEM-WIDE <br />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: brandGradient }}>DOMINANCE.</span>
              </h3>
            </div>
            <div className="text-right space-y-2">
               <div className="text-5xl font-black text-white tracking-tighter">100/100</div>
               <div className="text-[8px] font-black text-zinc-700 uppercase tracking-[0.4em]">AVERAGE_INFRA_SCORE</div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/5 pt-12">
            {[
              { label: "LATENCY_REDUCTION", val: "-84%" },
              { label: "MARKET_VELOCITY", val: "4.8X" },
              { label: "CORE_WEB_VITALS", val: "A+" },
              { label: "ROI_EFFICIENCY", val: "12X" }
            ].map((stat, sIdx) => (
              <div key={sIdx} className="space-y-2 group/stat cursor-default">
                <div className="text-2xl md:text-4xl font-black text-white tracking-tighter group-hover:scale-110 transition-transform origin-left">{stat.val}</div>
                <div className="text-[8px] font-black text-zinc-700 uppercase tracking-widest group-hover:text-white transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan-line {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100px); opacity: 0; }
        }
        .group-hover\\/metric:hover .group-hover\\/metric\\:animate-scan-line {
          animation: scan-line 2s linear infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CaseStudies;
