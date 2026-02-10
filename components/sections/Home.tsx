
import React from 'react';
import { ViewType } from '../../types.ts';

interface HomeProps {
  setView: (view: ViewType) => void;
}

const Home: React.FC<HomeProps> = ({ setView }) => {
  const ecosystems = [
    { name: 'Amazon AWS', icon: '☁️' },
    { name: 'WordPress', icon: '📝' },
    { name: 'Analytics', icon: '📊' },
    { name: 'Mailchimp', icon: '📧' },
    { name: 'HubSpot', icon: '🟠' },
    { name: 'Google Ads', icon: '🔍' },
    { name: 'Meta Ads', icon: '📱' },
    { name: 'Shopify', icon: '🛍️' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
  ];

  const coreEngines = [
    { id: '01', title: 'SEO STRATEGY', desc: 'Boost your visibility and rank #1 on search engines with our data-driven organic strategies.', icon: '🔍' },
    { id: '02', title: 'PAID SEARCH (PPC)', desc: 'Maximize ROI with precision-targeted ad campaigns across Google, Bing, and Social platforms.', icon: '💳' },
    { id: '03', title: 'WEB EXPERIENCES', desc: 'Convert visitors into customers with high-performance, stunning web design and development.', icon: '💻' },
    { id: '04', title: 'SOCIAL SCALING', desc: 'Engage your community and build brand loyalty with creative social media management.', icon: '💬' },
  ];

  const deploymentGrid = [
    { id: '01', title: 'SEARCH ENGINE OPTIMIZATION (SEO)', desc: 'Strategic keyword research and on-page optimization to dominate organic search results.' },
    { id: '02', title: 'PAY-PER-CLICK (PPC)', desc: 'Highly targeted campaigns on Google and Social that convert clicks into revenue.' },
    { id: '03', title: 'SOCIAL MEDIA MANAGEMENT', desc: 'Building brand presence and community across Instagram, LinkedIn, and Twitter.' },
    { id: '04', title: 'CONTENT MARKETING', desc: 'Authority-building content that educates your audience and drives conversions.' },
    { id: '05', title: 'WEB DEVELOPMENT', desc: 'Custom, blazing-fast websites built for conversion and modern performance.' },
    { id: '06', title: 'EMAIL MARKETING', desc: 'Automated nurture sequences and brand voices that resonate in crowded inboxes.' },
    { id: '07', title: 'BRANDING & IDENTITY', desc: 'Crafting unique visual identities and brand voices that resonate in crowded markets.' },
    { id: '08', title: 'DATA & ANALYTICS', desc: 'Turning raw data into actionable insights through advanced tracking and reporting.' },
  ];

  const methodology = [
    { id: '01', title: 'Data Ingestion', desc: 'We perform a deep-dive audit of your current ecosystem, identifying friction points and high-velocity opportunities.' },
    { id: '02', title: 'Neural Strategy', desc: 'Our AI engines architect a custom growth blueprint, synchronizing your brand with the latest market shifts.' },
    { id: '03', title: 'Rapid Deployment', desc: 'We launch precision campaigns and technical optimizations with zero-latency execution across all channels.' },
    { id: '04', title: 'Recursive Scaling', desc: 'Continuous monitoring and real-time adjustments ensure your ROI never plateaus, only expands.' },
  ];

  const industries = [
    { name: 'HEALTHCARE', stat: '+42%', label: 'PATIENT FLOW', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800' },
    { name: 'REAL ESTATE', stat: '+28%', label: 'LEAD VELOCITY', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800' },
    { name: 'E-COMMERCE', stat: '4.8x', label: 'ROAS', img: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800' },
    { name: 'SAAS / TECH', stat: '+35%', label: 'CLV LIFT', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div className="max-w-[1600px] mx-auto px-8 animate-in fade-in duration-1000 pb-32">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
             </div>
             <div>
                <h4 className="text-[11px] font-black tracking-widest text-white uppercase">Momentum Marketing Solution LLC</h4>
                <p className="text-[9px] font-bold tracking-widest text-zinc-500 uppercase">Global Digital Performance Hub</p>
             </div>
          </div>

          <h1 className="text-7xl lg:text-[100px] font-black leading-[0.9] tracking-tighter uppercase italic flex flex-col">
            <span className="text-white">ACCELERATE YOUR</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00A3FF] via-[#9D00FF] to-[#FF00E5]">
              MARKET MOMENTUM.
            </span>
          </h1>

          <p className="text-lg text-zinc-500 max-w-xl leading-relaxed font-medium">
            Momentum Marketing Solution LLC is the premier digital agency for high-growth brands. We combine data-driven SEO, precision PPC, and elite web architecture to engineer your industry dominance.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
             <button onClick={() => setView(ViewType.CONTACT)} className="px-10 py-5 bg-white text-black rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)]">PARTNER NOW</button>
             <button onClick={() => setView(ViewType.CONTACT)} className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full font-black uppercase tracking-widest hover:bg-white/10 transition-all">REQUEST DEMO</button>
             <button className="flex items-center gap-2 px-6 py-5 text-[11px] font-black uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                CALL NOW
             </button>
          </div>
        </div>

        <div className="relative">
           <div className="absolute inset-0 bg-gradient-to-tr from-[#00A3FF]/10 via-[#FF00E5]/10 to-transparent blur-3xl opacity-50" />
           <div className="relative bg-[#0a0a0a] border border-white/10 rounded-[3rem] p-10 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between mb-10">
                 <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    <span className="text-[10px] font-black tracking-[0.2em] text-zinc-500 uppercase">Real-Time ROI Analytics</span>
                 </div>
                 <span className="text-[9px] font-mono text-zinc-700 tracking-tighter">MOMENTUM_ACTIVE</span>
              </div>
              <div className="h-[280px] flex items-end justify-between gap-3 mb-12">
                 {[40, 30, 75, 55, 65, 80, 70, 95, 85].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-blue-600/40 to-[#00A3FF] rounded-t-xl" style={{ height: `${h}%` }} />
                 ))}
              </div>
              <div className="grid grid-cols-2 gap-6">
                 <div className="bg-white/5 border border-white/5 rounded-3xl p-6">
                    <h5 className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-2">SEO Authority</h5>
                    <div className="text-3xl font-black text-white italic tracking-tighter">Top 0.1%</div>
                 </div>
                 <div className="bg-white/5 border border-white/5 rounded-3xl p-6">
                    <h5 className="text-[9px] font-black text-zinc-500 uppercase tracking-widest mb-2">Ad Conversion</h5>
                    <div className="text-3xl font-black text-white italic tracking-tighter">5.4x ROI</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Ecosystem Logos */}
      <section className="py-20 border-t border-white/5">
        <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.4em] mb-12 text-center">OUR CORE ECOSYSTEM</p>
        <div className="flex flex-wrap justify-center gap-12 opacity-50">
           {ecosystems.map(eco => (
             <div key={eco.name} className="flex items-center gap-2 group cursor-default">
                <span className="text-xl grayscale group-hover:grayscale-0 transition-all">{eco.icon}</span>
                <span className="text-xs font-bold tracking-widest text-white">{eco.name}</span>
             </div>
           ))}
        </div>
      </section>

      {/* High-Octane Digital Engines */}
      <section className="py-32">
        <div className="text-center mb-24 max-w-2xl mx-auto">
           <h5 className="text-[10px] font-black text-[#FF00E5] uppercase tracking-[0.4em] mb-6">CORE EXPERTISE</h5>
           <h2 className="text-6xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">High-Octane Digital Engines.</h2>
           <p className="text-zinc-500 font-medium">Strategic excellence meets technical precision. We power deployment-ready solutions engineered for market dominance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {coreEngines.map(engine => (
             <div key={engine.id} className="group p-10 bg-zinc-900/20 border border-white/5 rounded-[2.5rem] hover:border-white/20 transition-all">
                <div className="text-4xl mb-8 grayscale group-hover:grayscale-0 transition-all">{engine.icon}</div>
                <h3 className="text-2xl font-black text-white uppercase italic mb-4">{engine.title}</h3>
                <p className="text-zinc-500 text-sm font-medium mb-8 leading-relaxed">{engine.desc}</p>
                <button className="text-[9px] font-black text-zinc-600 group-hover:text-white uppercase tracking-widest transition-colors flex items-center gap-2">
                   LEARN MORE
                   <div className="w-6 h-[1px] bg-zinc-800 group-hover:w-10 group-hover:bg-white transition-all" />
                </button>
             </div>
           ))}
        </div>
      </section>

      {/* Deployment Infrastructure Section */}
      <section className="py-32 bg-zinc-900/10 border-y border-white/5 rounded-[4rem]">
        <div className="text-center mb-24">
           <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full mb-6 border border-white/10">
              <div className="w-1.5 h-1.5 bg-[#FF00E5] rounded-full animate-pulse" />
              <span className="text-[9px] font-black text-zinc-400 tracking-widest uppercase">FULL ARCHITECTURE</span>
           </div>
           <h2 className="text-6xl lg:text-7xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">Digital Deployment Infrastructure.</h2>
           <p className="text-zinc-500 max-w-xl mx-auto font-medium">High-volume performance solutions engineered for market dominance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
           {deploymentGrid.map((item) => (
             <div key={item.id} className="group p-8 border-b border-white/5 hover:bg-white/5 transition-all cursor-default">
                <span className="text-[10px] font-black text-zinc-700 mb-6 block">{item.id}</span>
                <h3 className="text-xl font-black text-white uppercase italic mb-4">{item.title}</h3>
                <p className="text-zinc-500 text-xs font-medium mb-6 leading-relaxed">{item.desc}</p>
                <button className="text-[9px] font-black text-zinc-600 group-hover:text-[#FF00E5] uppercase tracking-widest transition-colors">EXPLORE SPECS</button>
             </div>
           ))}
        </div>
        
        <div className="mt-20 text-center">
           <div className="inline-flex flex-col items-center gap-4">
              <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">READY FOR DEPLOYMENT?</span>
              <button onClick={() => setView(ViewType.CONTACT)} className="px-12 py-5 bg-gradient-to-r from-[#00A3FF] to-[#9D00FF] text-white rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,163,255,0.2)]">REQUEST SPECS</button>
              <span className="text-[9px] font-mono text-zinc-800">STANDARD SYNC: 7-12 DAYS</span>
           </div>
        </div>
      </section>

      {/* Growth Methodology */}
      <section className="py-32">
        <div className="text-center mb-24">
           <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] mb-6">THE ENGINE</span>
           <h2 className="text-7xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">OUR GROWTH METHODOLOGY.</h2>
           <p className="text-zinc-500 max-w-2xl mx-auto font-medium">A scientifically engineered framework designed to convert market data into sustainable ROI velocity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
           <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -z-10" />
           {methodology.map((step) => (
             <div key={step.id} className="space-y-6 group">
                <div className="w-16 h-16 bg-black border border-white/10 rounded-full flex items-center justify-center text-xl font-black text-white italic group-hover:border-blue-500 group-hover:text-blue-500 transition-all">
                   {step.id}
                </div>
                <h3 className="text-xl font-black text-white uppercase italic">{step.title}</h3>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed">{step.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Deep Domain Expertise */}
      <section className="py-32">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
           <div>
              <span className="text-[10px] font-black text-[#FF00E5] uppercase tracking-[0.4em] mb-6">STRATEGIC VERTICALS</span>
              <h2 className="text-7xl font-black text-white uppercase italic tracking-tighter leading-none">DEEP DOMAIN EXPERTISE.</h2>
              <p className="text-zinc-500 max-w-xl font-medium mt-6">Engineered growth strategies tailored to the unique complexities of high-performance market sectors.</p>
           </div>
           <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/10">
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">VERTICAL PULSE ACTIVE</span>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {industries.map((ind, i) => (
             <div key={i} className="group relative h-[500px] rounded-[3rem] overflow-hidden border border-white/5">
                <img src={ind.img} alt={ind.name} className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                   <h3 className="text-3xl font-black text-white uppercase italic mb-6 tracking-tighter">{ind.name}</h3>
                   <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                      <div className="text-4xl font-black text-white italic mb-1">{ind.stat}</div>
                      <div className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{ind.label}</div>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Clutch Verified / Testimonials */}
      <section className="py-32 border-t border-white/5">
         <div className="flex flex-col lg:flex-row justify-between items-center gap-20 mb-24">
            <div className="flex items-center gap-8">
               <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center text-4xl font-black">C</div>
               <div>
                  <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">CLUTCH VERIFIED.</h2>
                  <p className="text-zinc-500 font-medium uppercase tracking-widest text-xs mt-1">High-velocity results confirmed by independent industry auditing.</p>
               </div>
            </div>
            <div className="flex flex-col items-center lg:items-end">
               <div className="text-6xl font-black text-white italic">5.0</div>
               <div className="flex gap-1 text-blue-500 my-2">
                  {[1,2,3,4,5].map(s => <svg key={s} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>)}
               </div>
               <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">MOMENTUM INTEGRATION 2.0</span>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Momentum doubled our inbound leads within the first quarter. Their attention to ROI is unmatched.", name: "SARAH JOHNSON", role: "CEO @ TECH NEXUS" },
              { text: "The best digital partner we've had. Their SEO knowledge is deep and their execution is flawless.", name: "MICHAEL CHEN", role: "HEAD OF GROWTH @ SAASLY" },
              { text: "Professional, creative, and highly technical. They completely rebranded our digital presence.", name: "DAVID RODRIGUEZ", role: "FOUNDER @ LUXURY AUTO" },
            ].map((t, i) => (
              <div key={i} className="p-10 bg-zinc-900/10 border border-white/5 rounded-[2.5rem] relative overflow-hidden group">
                 <div className="text-blue-500 mb-8 flex gap-1">
                    {[1,2,3,4,5].map(s => <svg key={s} className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>)}
                 </div>
                 <p className="text-zinc-300 text-lg font-medium leading-relaxed italic mb-10">"{t.text}"</p>
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-tr from-zinc-800 to-zinc-900 rounded-full" />
                    <div>
                       <h4 className="text-xs font-black text-white uppercase italic">{t.name}</h4>
                       <p className="text-[9px] font-black text-zinc-600 uppercase tracking-widest">{t.role}</p>
                    </div>
                 </div>
                 <div className="absolute top-8 right-10 text-[9px] font-mono text-zinc-800 uppercase">ID-00{i+1}</div>
              </div>
            ))}
         </div>
      </section>
    </div>
  );
};

export default Home;
