
import React from 'react';

const Industries: React.FC = () => {
  const sectors = [
    { name: 'E-commerce', desc: 'Automated product visuals and dynamic ad campaigns that convert.' },
    { name: 'Tech & SaaS', desc: 'Explainer motion graphics and futuristic brand identities.' },
    { name: 'Luxury Goods', desc: 'High-fidelity cinematic renders and sophisticated voice synthesis.' },
    { name: 'Finance', desc: 'Trust-based storytelling and complex data visualization.' }
  ];

  return (
    <div className="max-w-[1600px] mx-auto p-6 py-20 animate-in fade-in duration-700">
      <div className="mb-20 text-center">
        <h1 className="text-6xl font-black uppercase tracking-tighter text-white mb-6">Sector Expertise</h1>
        <p className="text-zinc-500 text-xl max-w-2xl mx-auto font-light">Tailored AI solutions for the world's most demanding industries.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sectors.map((s, i) => (
          <div key={i} className="group p-12 bg-zinc-900/50 border border-zinc-800 rounded-[3rem] hover:bg-zinc-800/50 transition-all">
            <h3 className="text-3xl font-black text-white uppercase mb-4 tracking-tighter">{s.name}</h3>
            <p className="text-zinc-500 text-lg font-medium">{s.desc}</p>
            <div className="mt-8 w-12 h-1 bg-zinc-700 group-hover:w-full transition-all duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
