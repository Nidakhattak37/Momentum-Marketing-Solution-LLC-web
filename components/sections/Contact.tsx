
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ 
    name: '', 
    email: '', 
    org: '', 
    service: 'seo', 
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const brandGradient = 'linear-gradient(to right, #00E5FF, #9D00FF, #FF00C7)';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: '', email: '', org: '', service: 'seo', message: '' });
  };

  const contactNodes = [
    { 
      label: 'ELECTRONIC MAIL', 
      value: 'info@mymomentumsolutions.com', 
      id: 'node_01',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      label: 'DIRECT LINE', 
      value: '+1 (888) MOMENTUM', 
      id: 'node_02',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
  ];

  return (
    <div id="contact-section" className="max-w-[1000px] mx-auto py-24 animate-in fade-in duration-1000">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Context (Small Font Size) */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2">
              <div className="w-8 h-[1px] bg-white/20" />
              <span className="text-[8px] font-bold text-zinc-500 tracking-[0.4em] uppercase">SYNC PROTOCOL</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-black leading-none uppercase text-white tracking-tighter">
              LET'S CREATE <br />
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: brandGradient }}>
                MOMENTUM.
              </span>
            </h2>
            
            <p className="text-zinc-500 text-[11px] font-semibold leading-relaxed max-w-xs uppercase tracking-wider">
              Ready to scale your digital presence? reach out to our team of specialists and start your transformation today.
            </p>
          </div>

          <div className="space-y-5 pt-2">
            {contactNodes.map((node) => (
              <div key={node.id} className="flex flex-col space-y-1">
                <span className="text-[7px] font-black text-zinc-600 uppercase tracking-[0.2em]">{node.label}</span>
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400/80">{node.icon}</span>
                  <p className="text-sm font-bold text-zinc-300 hover:text-white transition-colors cursor-pointer">{node.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Refined Compact Form */}
        <div className="lg:col-span-7 relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-white/5 to-white/0 rounded-3xl blur-sm opacity-20 transition duration-1000"></div>
          <div className="relative bg-[#080808] border border-white/40 rounded-2xl p-8 lg:p-10 shadow-2xl overflow-hidden">
            {submitted ? (
              <div className="min-h-[300px] flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Message Transmitted</h3>
                <p className="text-zinc-500 text-[10px] uppercase font-black tracking-widest">Awaiting system response.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[8px] font-black text-zinc-600 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      required type="text" value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 py-2 text-xs font-bold text-white focus:border-white/40 outline-none transition-all placeholder:text-zinc-800"
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[8px] font-black text-zinc-600 uppercase tracking-widest ml-1">Email Address</label>
                    <input 
                      required type="email" value={formState.email}
                      onChange={e => setFormState({...formState, email: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 py-2 text-xs font-bold text-white focus:border-white/40 outline-none transition-all placeholder:text-zinc-800"
                      placeholder="Enter email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[8px] font-black text-zinc-600 uppercase tracking-widest ml-1">Organization</label>
                    <input 
                      type="text" value={formState.org}
                      onChange={e => setFormState({...formState, org: e.target.value})}
                      className="w-full bg-transparent border-b border-white/10 py-2 text-xs font-bold text-white focus:border-white/40 outline-none transition-all placeholder:text-zinc-800"
                      placeholder="Company"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[8px] font-black text-zinc-600 uppercase tracking-widest ml-1">Service</label>
                    <div className="relative">
                      <select 
                        value={formState.service}
                        onChange={e => setFormState({...formState, service: e.target.value})}
                        className="w-full bg-transparent border-b border-white/10 py-2 text-xs font-bold text-white focus:border-white/40 outline-none transition-all cursor-pointer appearance-none uppercase"
                      >
                        <option value="seo" className="bg-zinc-950">SEO Architecture</option>
                        <option value="ppc" className="bg-zinc-950">PPC Velocity</option>
                        <option value="dev" className="bg-zinc-950">Web Engineering</option>
                        <option value="ai" className="bg-zinc-950">AI Creative Lab</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-600">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[8px] font-black text-zinc-600 uppercase tracking-widest ml-1">Message Body</label>
                  <textarea 
                    required rows={2} value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-transparent border border-white/5 rounded-lg p-3 text-xs font-bold text-white focus:border-white/20 outline-none transition-all resize-none placeholder:text-zinc-800"
                    placeholder="Describe your project objectives..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 mt-2 text-white rounded-lg font-black uppercase tracking-[0.3em] text-[10px] transition-all active:scale-[0.98] shadow-2xl relative overflow-hidden group/btn"
                  style={{ background: brandGradient }}
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  <span className="relative z-10">SEND MESSAGE</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
