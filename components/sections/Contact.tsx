
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', org: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormState({ name: '', email: '', org: '', service: '', message: '' });
  };

  return (
    <div className="max-w-[1600px] mx-auto px-8 py-32 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-12 sticky top-40">
          <div>
            <h5 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em] mb-6">CONTACT</h5>
            <h1 className="text-7xl lg:text-[100px] font-black leading-none tracking-tighter uppercase italic flex flex-col">
              <span className="text-white">IGNITE YOUR</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] to-[#FF00E5]">
                MOMENTUM.
              </span>
            </h1>
            <p className="text-zinc-500 text-xl font-medium max-w-lg mt-10">
              Ready to scale? Drop us a brief and we'll sync within 24 hours.
            </p>
          </div>

          <div className="space-y-10">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-pink-500 group-hover:scale-110 group-hover:border-pink-500/50 transition-all">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h4 className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-1">EMAIL</h4>
                <p className="text-2xl font-black text-white italic tracking-tighter hover:text-pink-500 transition-colors">info@mymomentumsolutions.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:border-blue-500/50 transition-all">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <h4 className="text-[9px] font-black text-zinc-600 uppercase tracking-widest mb-1">CALL</h4>
                <p className="text-2xl font-black text-white italic tracking-tighter hover:text-blue-500 transition-colors">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#0a0a0a] border border-white/5 rounded-[4rem] p-16 shadow-2xl relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 blur-[100px] group-hover:opacity-100 opacity-0 transition-opacity" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 blur-[100px] group-hover:opacity-100 opacity-0 transition-opacity" />
           
          {submitted ? (
            <div className="h-[600px] flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center text-white mb-10 shadow-lg shadow-blue-500/20">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-4xl font-black text-white italic tracking-tighter uppercase mb-4">DEPLOYMENT SYNCED.</h3>
              <p className="text-zinc-500 font-medium">Strategist alignment initiated. Stand by for contact.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[9px] font-black text-zinc-500 uppercase tracking-widest ml-1">FULL NAME</label>
                  <input 
                    required type="text" value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                    placeholder="YOUR NAME"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-black text-white italic placeholder:text-zinc-800 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[9px] font-black text-zinc-500 uppercase tracking-widest ml-1">EMAIL</label>
                  <input 
                    required type="email" value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                    placeholder="NAME@COMPANY.COM"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-black text-white italic placeholder:text-zinc-800 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[9px] font-black text-zinc-500 uppercase tracking-widest ml-1">ORGANIZATION</label>
                  <input 
                    type="text" value={formState.org}
                    onChange={e => setFormState({...formState, org: e.target.value})}
                    placeholder="COMPANY NAME"
                    className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-black text-white italic placeholder:text-zinc-800 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[9px] font-black text-zinc-500 uppercase tracking-widest ml-1">SERVICES</label>
                  <select 
                    value={formState.service}
                    onChange={e => setFormState({...formState, service: e.target.value})}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-black text-white italic focus:border-blue-500 outline-none transition-all appearance-none"
                  >
                    <option value="" className="bg-black">INTERESTED SERVICE...</option>
                    <option value="seo" className="bg-black">SEO STRATEGY</option>
                    <option value="ppc" className="bg-black">PAID SEARCH (PPC)</option>
                    <option value="web" className="bg-black">WEB EXPERIENCES</option>
                    <option value="full" className="bg-black">FULL ARCHITECTURE</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[9px] font-black text-zinc-500 uppercase tracking-widest ml-1">MESSAGE</label>
                <textarea 
                  required rows={3} value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                  placeholder="OBJECTIVES AND PROJECT DETAILS..."
                  className="w-full bg-transparent border-b border-white/10 py-4 text-xl font-black text-white italic placeholder:text-zinc-800 focus:border-blue-500 outline-none transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                className="group w-full py-8 bg-white text-black font-black uppercase tracking-[0.3em] rounded-3xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 hover:text-white transition-all shadow-xl active:scale-[0.98] flex items-center justify-center gap-4"
              >
                SEND MESSAGE
                <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
