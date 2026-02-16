
import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const brandGradient = 'linear-gradient(to right, #00E5FF, #9D00FF, #FF00C7)';

  return (
    <div className="max-w-[1000px] mx-auto px-6 md:px-16 lg:px-24 py-24 relative overflow-hidden">
      {/* Blueprint Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] -z-10" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Main Content */}
      <div className="space-y-24">
        
        {/* Header Block */}
        <header className="space-y-8 pb-12 border-b border-white/5">
          <div className="inline-flex items-center gap-4">
             <div className="h-[1px] w-12 bg-cyan-500/20" />
             <span className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.8em]">MOMENTUM_LEGAL_FRAMEWORK</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight text-white leading-none">
            PRIVACY <br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: brandGradient }}>
              POLICY.
            </span>
          </h1>

          <div className="max-w-xl">
             <p className="text-zinc-500 text-sm font-bold uppercase tracking-wider leading-relaxed">
               This document outlines the high-integrity policies used to collect, isolate, and protect your digital footprint within the Momentum ecosystem.
             </p>
          </div>
        </header>

        <div className="space-y-32">
          
          <section id="intro" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="prose prose-invert max-w-none text-zinc-400 font-semibold leading-relaxed text-sm md:text-base space-y-6">
              <p>This Privacy Policy describes our policies and procedures on the collection, use and disclosure of Your information when You use the service and tells You about Your privacy rights and how the law protects You.</p>
              <p>We use Your Personal data to provide and improve the Service. By using the service, you agree to the collection and use of information in accordance with this Privacy Policy.</p>
            </div>
          </section>

          <section id="sms" className="space-y-12 group">
            <div className="flex items-center gap-4">
               <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">TEXT_SMS MARKETING</h2>
               <div className="h-[1px] flex-1 bg-purple-500/10 group-hover:bg-purple-500/30 transition-all" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <p className="text-zinc-400 text-sm font-semibold leading-relaxed">
                  If you choose to opt-in to SMS communications from Momentum Marketing Solution LLC, you will receive text messages at the mobile number you provide. These messages might be automated and might include promotional offers, coupons, and/or information related to Momentum Marketing Solution LLC.
                </p>
                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl border-l-purple-500/50">
                  <h3 className="text-[10px] font-black text-purple-400 uppercase tracking-widest mb-3">CONSENT_PARAM</h3>
                  <p className="text-zinc-500 text-xs font-bold leading-relaxed">You understand that consent to receive automated messages is not a condition of purchase or use of Momentum Marketing Solution LLC services.</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-[10px] font-black text-white uppercase tracking-widest">OPT-OUT_PROCEDURE</h3>
                  <p className="text-zinc-500 text-xs font-semibold">You may opt out of receiving text messages at any time by texting "STOP". A confirmation message will be sent to confirm your that you have unsubscribed.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-[10px] font-black text-white uppercase tracking-widest">SUPPORT_LINE</h3>
                  <p className="text-zinc-500 text-xs font-semibold italic">assistance with the messaging service, text "HELP" or contact info@mymomentumsolutions.com</p>
                </div>
                <div className="p-4 border border-white/5 rounded-xl bg-white/[0.01]">
                  <p className="text-[9px] font-black text-zinc-800 uppercase tracking-widest">CARRIER_RATES_MAY_APPLY</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-zinc-900/30 border border-white/5 rounded-[2rem] space-y-4">
               <h3 className="text-xs font-black text-white uppercase tracking-[0.3em]">CONFIDENTIALITY_SYNC</h3>
               <p className="text-zinc-400 text-xs font-bold leading-relaxed max-w-2xl">
                 We will maintain the confidentiality of your mobile number. Your mobile number will not be shared with third parties for their own marketing purposes. For operational purposes, your name and mobile number may be shared with our service providers who assist in the delivery of our SMS communications.
               </p>
            </div>
          </section>

          <section id="definitions" className="space-y-12">
            <div className="flex items-center gap-4">
               <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">INTERPRETATION & DEFINITIONS</h2>
               <div className="h-[1px] flex-1 bg-pink-500/10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { term: 'ACCOUNT', def: 'A unique account created for You to access our Service.' },
                { term: 'AFFILIATE', def: 'An entity that controls, is controlled by or is under common control.' },
                { term: 'COMPANY', def: 'Refers to Momentum Marketing Solution LLC.' },
                { term: 'COOKIES', def: 'Small files placed on Your device containing browsing history.' },
                { term: 'PERSONAL_DATA', def: 'Any information that relates to an identified individual.' },
                { term: 'SERVICE_PROVIDER', def: 'Natural or legal person who processes data on behalf of the Company.' }
              ].map((d, i) => (
                <div key={i} className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl hover:bg-white/[0.03] transition-colors group/def">
                  <h3 className="text-[10px] font-black text-pink-400 uppercase tracking-widest mb-3 group-hover/def:translate-x-1 transition-transform">{d.term}</h3>
                  <p className="text-zinc-500 text-xs font-bold leading-relaxed">{d.def}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="data-types" className="space-y-12">
            <div className="flex items-center gap-4">
               <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">TYPES_OF_DATA_COLLECTED</h2>
               <div className="h-[1px] flex-1 bg-cyan-500/10" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="p-8 bg-[#0a0a0c] border border-white/5 rounded-[2.5rem] space-y-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-[80px] font-black select-none pointer-events-none group-hover:text-cyan-400/20 transition-colors">ID</div>
                  <h3 className="text-[10px] font-black text-cyan-400 uppercase tracking-widest">PERSONAL_IDENTIFIABLE_INFO</h3>
                  <ul className="space-y-3">
                    {['Email address', 'First and last name', 'Phone number', 'Full Address'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white text-xs font-bold uppercase tracking-widest">
                         <div className="w-1 h-1 rounded-full bg-cyan-400" />
                         {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                 <div className="p-8 bg-zinc-900/40 border border-white/5 rounded-[2.5rem] space-y-6">
                    <h3 className="text-[10px] font-black text-white uppercase tracking-widest">SYSTEM_USAGE_DATA</h3>
                    <p className="text-zinc-500 text-xs font-bold leading-relaxed italic">
                      Usage Data is collected automatically when using the Service. Includes IP addresses, browser version, visit duration, and unique device identifiers.
                    </p>
                    <div className="pt-6 border-t border-white/5">
                      <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                         <p className="text-[9px] font-black text-emerald-400 uppercase tracking-widest text-center">
                           "No mobile information will be shared with third parties for marketing purposes"
                         </p>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </section>

          <section id="usage" className="space-y-12">
            <div className="flex items-center gap-4">
               <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">USE_OF_PERSONAL_DATA</h2>
               <div className="h-[1px] flex-1 bg-purple-500/10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                 'Service maintenance',
                 'Account management',
                 'Contract performance',
                 'Communication Sync',
                 'News & Special Offers',
                 'Business Transfers',
                 'Data analysis'
              ].map((use, i) => (
                <div key={i} className="p-5 border border-white/5 rounded-xl flex items-center gap-4 hover:border-purple-500/20 transition-colors">
                   <span className="text-[10px] font-mono text-zinc-700">{i + 1 < 10 ? `0${i+1}` : i+1}</span>
                   <span className="text-xs font-black text-zinc-400 uppercase tracking-widest">{use}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="security" className="space-y-12">
            <div className="flex items-center gap-4">
               <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">SECURITY_INTEGRITY</h2>
               <div className="h-[1px] flex-1 bg-pink-500/10" />
            </div>

            <div className="relative p-12 bg-black border border-white/10 rounded-[3rem] overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-pink-500/[0.02] to-transparent" />
               <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                  <div className="w-24 h-24 rounded-full border border-pink-500/20 flex items-center justify-center animate-pulse-slow">
                     <svg className="w-10 h-10 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                     </svg>
                  </div>
                  <div className="space-y-4">
                     <p className="text-zinc-400 text-sm md:text-base font-semibold leading-relaxed max-w-xl">
                       The security of Your Personal Data is critical to Us. We use commercially acceptable means to protect Your Personal Data, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure.
                     </p>
                  </div>
               </div>
            </div>
          </section>

          <section id="children" className="space-y-12 pb-24">
            <div className="flex items-center gap-4">
               <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">CHILDREN'S_PRIVACY_GATE</h2>
               <div className="h-[1px] flex-1 bg-cyan-500/10" />
            </div>
            <p className="text-zinc-500 text-sm font-semibold leading-relaxed max-w-3xl">
              Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us.
            </p>
          </section>

        </div>

        {/* Footer Metadata */}
        <footer className="pt-24 border-t border-white/5 text-center space-y-8">
           <div className="text-[10px] font-black text-zinc-800 uppercase tracking-[1em]">END_OF_POLICY_DOCUMENT</div>
           <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group inline-flex items-center gap-4 px-8 py-3 bg-white/5 border border-white/10 rounded-full hover:border-cyan-400/30 transition-all"
           >
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Return to System Top</span>
              <svg className="w-4 h-4 text-cyan-400 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
              </svg>
           </button>
        </footer>

      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;
