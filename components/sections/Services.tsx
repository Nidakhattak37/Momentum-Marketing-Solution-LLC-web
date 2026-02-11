
import React from 'react';

const Services: React.FC = () => {
  const srvs = [
    { name: 'AI Brand Strategy', desc: 'Comprehensive roadmaps for integrating generative AI into your marketing mix.' },
    { name: 'Visual Production', desc: 'Using Gemini 3 Pro for photorealistic brand assets and social content.' },
    { name: 'Cinematic Motion', desc: 'Veo-powered video production for commercials and motion logos.' },
    { name: 'Voice Identity', desc: 'Custom text-to-speech personality development for sonic branding.' }
  ];

  return (
    <div className="max-w-[1600px] mx-auto p-6 py-20 animate-in fade-in duration-700">
      <div className="mb-20">
        <h1 className="text-4xl font-black uppercase tracking-tighter text-white mb-6">Our Services</h1>
        <p className="text-zinc-500 text-lg max-w-2xl font-light">The intersection of human creativity and artificial intelligence.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {srvs.map((s, i) => (
          <div key={i} className="p-8 bg-zinc-900 border border-zinc-800 rounded-[2rem] hover:border-white/20 transition-all">
            <div className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center font-bold mb-6">0{i+1}</div>
            <h3 className="text-xl font-bold text-white mb-4">{s.name}</h3>
            <p className="text-zinc-500 text-sm font-medium leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
