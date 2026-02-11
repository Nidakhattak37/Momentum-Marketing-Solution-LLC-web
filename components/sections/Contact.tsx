
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ 
    name: '', 
    email: '', 
    org: '', 
    service: 'seo', 
    message: '',
    budget: '50k-100k'
  });
  const [submitted, setSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const brandGradient = 'linear-gradient(to right, #00E5FF, #9D00FF, #FF00C7)';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setFormState({ name: '', email: '', org: '', service: 'seo', message: '', budget: '50k-100k' });
  };

  return (
    <div id="contact-section" className="max-w-[1400px] mx-auto py-24 lg:py-32 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        {/* Left Column: Vision & Meta-data */}
        <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-40">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full mb-4">
              <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-[9px] font-black text-cyan-400 tracking-[0.3em] uppercase">Deployment Protocol</span>
            </div>
            <h1 className="text-5xl md:text-7xl xl:text-[80px] font-black leading-tight lg:leading-none tracking-tighter uppercase flex flex-col">
              <span className="text-white">IGNITE YOUR</span>
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: brandGradient }}>
                MOMENTUM.
              </span>
            </h1>
            <p className="text-zinc-500 text-lg lg:text-xl font-semibold max-w-lg leading-relaxed">
              Ready to redefine your market position? Initiate a briefing and our lead strategists will align with your objectives within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-8 bg-white/5 border border-white/5 rounded-[2rem] hover:border-white/20 transition-all group">
              <h4 className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-4">Direct Sync</h4>
              <p className="text-base lg:text-lg font-black text-white tracking-tighter group-hover:text-cyan-400 transition-colors cursor-pointer break-words">info@mymomentumsolutions.com</p>
            </div>
            <div className="p-8 bg-white/5 border border-white/5 rounded-[2rem] hover:border-white/20 transition-all group">
              <h4 className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-4">Secure Audio</h4>
              <p className="text-base lg:text-lg font-black text-white tracking-tighter group-hover:text-purple-500 transition-colors cursor-pointer">+1 (888) MOMENTUM</p>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 grid grid-cols-3 gap-8">
            <div className="flex flex-col">
              <span className="text-[8px] lg:text-[9px] font-black text-zinc-700 uppercase tracking-widest mb-2">Status</span>
              <span className="text-[10px] lg:text-xs font-bold text-emerald-500">OPERATIONAL</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] lg:text-[9px] font-black text-zinc-700 uppercase tracking-widest mb-2">Timezone</span>
              <span className="text-[10px] lg:text-xs font-bold text-zinc-400">EST / UTC-5</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px] lg:text-[9px] font-black text-zinc-700 uppercase tracking-widest mb-2">Latency</span>
              <span className="text-[10px] lg:text-xs font-bold text-zinc-400">&lt; 12HR REQ</span>
            </div>
          </div>
        </div>

        {/* Right Column: Briefing Form */}
        <div className="lg:col-span-7 bg-[#0a0a0a] border border-white/10 rounded-[3rem] p-10 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden group">
          {submitted ? (
            <div className="min-h-[500px] flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
              <div className="relative mb-12">
                <div className="absolute inset-0 blur-3xl opacity-20 animate-pulse" style={{ backgroundImage: brandGradient }} />
                <div className="relative w-24 h-24 rounded-full flex items-center justify-center text-white shadow-2xl" style={{ backgroundImage: brandGradient }}>
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
              </div>
              <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase mb-6">Deployment Synced.</h3>
              <p className="text-zinc-500 font-medium max-w-sm mx-auto text-lg leading-relaxed">
                Strategy protocol initiated. A Momentum representative is reviewing your objectives.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-12 text-[10px] font-black text-zinc-600 hover:text-white uppercase tracking-[0.4em] transition-all"
              >
                Reset Connection
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.2em]">Partner Name</label>
                    <span className="text-[8px] font-mono text-zinc-800 uppercase">REQ_FLD_01</span>
                  </div>
                  <input 
                    required type="text" value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                    placeholder="ENTER NAME"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-black text-white placeholder:text-zinc-900 focus:border-cyan-400 outline-none transition-all"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.2em]">Contact Node</label>
                    <span className="text-[8px] font-mono text-zinc-800 uppercase">REQ_FLD_02</span>
                  </div>
                  <input 
                    required type="email" value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                    placeholder="EMAIL@DOMAIN.COM"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-black text-white placeholder:text-zinc-900 focus:border-cyan-400 outline-none transition-all"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.2em]">Organization</label>
                    <span className="text-[8px] font-mono text-zinc-800 uppercase">OPT_FLD_03</span>
                  </div>
                  <input 
                    type="text" value={formState.org}
                    onChange={e => setFormState({...formState, org: e.target.value})}
                    placeholder="COMPANY NAME"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-black text-white placeholder:text-zinc-900 focus:border-cyan-400 outline-none transition-all"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.2em]">Project Scale</label>
                    <span className="text-[8px] font-mono text-zinc-800 uppercase">CFG_FLD_04</span>
                  </div>
                  <select 
                    value={formState.budget}
                    onChange={e => setFormState({...formState, budget: e.target.value})}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-black text-white focus:border-cyan-400 outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="10k-50k" className="bg-black">10K - 50K USD</option>
                    <option value="50k-100k" className="bg-black">50K - 100K USD</option>
                    <option value="100k-500k" className="bg-black">100K - 500K USD</option>
                    <option value="500k+" className="bg-black">500K+ USD / ENTERPRISE</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.2em]">Objectives</label>
                </div>
                <textarea 
                  required rows={4} value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  placeholder="DESCRIBE YOUR CURRENT PERFORMANCE FRICTION POINTS..."
                  className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-black text-white placeholder:text-zinc-900 focus:border-cyan-400 outline-none transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative w-full py-10 overflow-hidden rounded-[2.5rem] transition-all active:scale-[0.98]"
              >
                <div className={`absolute inset-0 bg-white transition-all duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
                <div className={`absolute inset-0 transition-all duration-500 ${isHovered ? 'opacity-100 scale-105' : 'opacity-0'}`} style={{ backgroundImage: brandGradient }} />
                
                <span className={`relative flex items-center justify-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] transition-colors duration-500 ${isHovered ? 'text-white' : 'text-black'}`}>
                  INITIALIZE DEPLOYMENT
                  <svg className={`w-6 h-6 transform transition-all duration-500 ${isHovered ? 'translate-x-3 opacity-100' : 'translate-x-0 opacity-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
