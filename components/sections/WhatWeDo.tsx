
import React from 'react';

const WhatWeDo: React.FC = () => {
  const steps = [
    { title: 'Diagnosis', desc: 'We analyze your current market position using deep AI auditing tools.' },
    { title: 'Strategy', desc: 'We develop custom creative roadmaps tailored to your specific audience.' },
    { title: 'Execution', desc: 'Our suite of Gemini-powered labs generate high-fidelity assets at scale.' }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 py-20 animate-in fade-in duration-700">
      <div className="mb-20">
        <h1 className="text-6xl font-black uppercase tracking-tighter text-white mb-6">
          Beyond <br /> Marketing
        </h1>
        <p className="text-zinc-500 text-xl max-w-2xl font-light">
          We leverage the frontier of multimodal AI to build brands that don't just compete—they dominate their category through relentless innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((step, i) => (
          <div key={i} className="relative group p-10 bg-zinc-900/30 border border-zinc-800 rounded-[3rem] hover:border-zinc-700 transition-all">
            <span className="text-6xl font-black text-zinc-800 absolute -top-4 -left-4 group-hover:text-zinc-600 transition-colors">0{i+1}</span>
            <h3 className="text-2xl font-black text-white uppercase mt-4 mb-4">{step.title}</h3>
            <p className="text-zinc-500 font-medium leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 p-12 bg-white text-black rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8">
        <h2 className="text-3xl font-black uppercase tracking-tighter text-center md:text-left">Ready to redefine your creative workflow?</h2>
        <button className="px-12 py-5 bg-black text-white rounded-full font-black uppercase tracking-widest hover:scale-105 transition-all">Start Now</button>
      </div>
    </div>
  );
};

export default WhatWeDo;
