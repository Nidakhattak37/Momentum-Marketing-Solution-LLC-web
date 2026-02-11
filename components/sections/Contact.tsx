
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
    setFormState({ name: '', email: '', org: '', service: 'seo', message: '', budget: '50k-100k' });
  };

  return (
    <div id="contact-section" className="max-w-[1600px] mx-auto px-8 py-32 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Vision & Meta-data */}
        <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-40">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#FF00E5]/10 border border-[#FF00E5]/20 px-4 py-1.5 rounded-full mb-4">
              <div className="w-1.5 h-1.5 bg-[#FF00E5] rounded-full animate-pulse" />
              <span className="text-[9px] font-black text-[#FF00E5] tracking-[0.3em] uppercase">Deployment Protocol</span>
            </div>
            <h1 className="text-7xl xl:text-[90px] font-black leading-none tracking-tighter uppercase italic flex flex-col">
              <span className="text-white">IGNITE YOUR</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] via-[#9D00FF] to-[#FF00E5]">
                MOMENTUM.
              </span>
            </h1>
            <p className="text-zinc-500 text-xl font-medium max-w-lg leading-relaxed">
              Ready to redefine your market position? Initiate a briefing and our lead strategists will align with your objectives within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-6 bg-white/5 border border-white/5 rounded-3xl hover:border-white/20 transition-all group">
              <h4 className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-4">Direct Sync</h4>
              <p className="text-lg font-black text-white italic tracking-tighter group-hover:text-blue-400 transition-colors cursor-pointer">info@mymomentumsolutions.com</p>
            </div>
            <div className="p-6 bg-white/5 border border-white/5 rounded-3xl hover:border-white/20 transition-all group">
              <h4 className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-4">Secure Audio</h4>
              <p className="text-lg font-black text-white italic tracking-tighter group-hover:text-pink-500 transition-colors cursor-pointer">+1 (888) MOMENTUM</p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex items-center gap-10">
            <div className="flex flex-col">
              <span className="text-[9px] font-black text-zinc-700 uppercase tracking-widest">Global Status</span>
              <span className="text-xs font-bold text-emerald-500">OPERATIONAL</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-black text-zinc-700 uppercase tracking-widest">Timezone</span>
              <span className="text-xs font-bold text-zinc-400">EST / UTC-5</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-black text-zinc-700 uppercase tracking-widest">Latency</span>
              <span className="text-xs font-bold text-zinc-400">&lt; 12HR REQ</span>
            </div>
          </div>
        </div>

        {/* Right Column: High-Performance Form */}
        <div className="lg:col-span-7 bg-[#0a0a0a] border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#00A3FF]/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FF00E5]/5 blur-[120px] rounded-full pointer-events-none" />
          
          {submitted ? (
            <div className="min-h-[600px] flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
              <div className="relative mb-12">
                <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 animate-pulse" />
                <div className="relative w-24 h-24 bg-gradient-to-tr from-[#00A3FF] to-[#FF00E5] rounded-full flex items-center justify-center text-white shadow-2xl">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
              </div>
              <h3 className="text-5xl font-black text-white italic tracking-tighter uppercase mb-6">Deployment Synced.</h3>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.2em]">Partner Name</label>
                    <span className="text-[8px] font-mono text-zinc-800 uppercase">REQ_FLD_01</span>
                  </div>
                  <input 
                    required type="text" value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                    placeholder="ENTER NAME"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-black text-white italic placeholder:text-zinc-900 focus:border-blue-500 outline-none transition-all"
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
                    className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-black text-white italic placeholder:text-zinc-900 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.2em]">Organization</label>
                    <span className="text-[8px] font-mono text-zinc-800 uppercase">OPT_FLD_03</span>
                  </div>
                  <input 
                    type="text" value={formState.org}
                    onChange={e => setFormState({...formState, org: e.target.value})}
                    placeholder="COMPANY NAME"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-black text-white italic placeholder:text-zinc-900 focus:border-blue-500 outline-none transition-all"
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
                    className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-black text-white italic focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer"
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
                  <label className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.2em]">Operational Focus</label>
                </div>
                <div className="flex flex-wrap gap-3">
                  {['seo', 'ppc', 'web', 'full'].map((svc) => (
                    <button
                      key={svc}
                      type="button"
                      onClick={() => setFormState({...formState, service: svc})}
                      className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                        formState.service === svc 
                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/20' 
                        : 'bg-white/5 border border-white/10 text-zinc-600 hover:text-white hover:border-white/20'
                      }`}
                    >
                      {svc === 'full' ? 'FULL ARCHITECTURE' : svc.toUpperCase() + ' STRATEGY'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.2em]">Objectives</label>
                  <span className="text-[8px] font-mono text-zinc-800 uppercase">DAT_FLD_05</span>
                </div>
                <textarea 
                  required rows={3} value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  placeholder="DESCRIBE YOUR CURRENT PERFORMANCE FRICTION POINTS..."
                  className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-black text-white italic placeholder:text-zinc-900 focus:border-blue-500 outline-none transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative w-full py-10 overflow-hidden rounded-3xl transition-all active:scale-[0.98]"
              >
                <div className={`absolute inset-0 bg-white transition-all duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
                <div className={`absolute inset-0 bg-gradient-to-r from-[#00A3FF] via-[#9D00FF] to-[#FF00E5] transition-all duration-500 ${isHovered ? 'opacity-100 scale-105' : 'opacity-0'}`} />
                
                <span className={`relative flex items-center justify-center gap-4 text-[11px] font-black uppercase tracking-[0.4em] transition-colors duration-500 ${isHovered ? 'text-white' : 'text-black'}`}>
                  INITIALIZE DEPLOYMENT
                  <svg className={`w-6 h-6 transform transition-all duration-500 ${isHovered ? 'translate-x-3 opacity-100' : 'translate-x-0 opacity-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              
              <div className="flex justify-between items-center pt-4 opacity-30">
                <span className="text-[8px] font-mono uppercase tracking-widest text-zinc-500">MOMENTUM_OS_V2.1.0</span>
                <span className="text-[8px] font-mono uppercase tracking-widest text-zinc-500">ENCRYPTED_DATA_TRANSIT</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
