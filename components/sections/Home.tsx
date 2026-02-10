
import React from 'react';
import { ViewType } from '../../types';

interface HomeProps {
  setView: (view: ViewType) => void;
}

const Home: React.FC<HomeProps> = ({ setView }) => {
  const features = [
    {
      type: ViewType.IMAGE,
      title: 'Image Lab',
      desc: 'High-fidelity visual generation powered by Gemini 3 Pro and Nano models.',
      color: 'from-indigo-500 to-purple-500',
      icon: '🎨'
    },
    {
      type: ViewType.VIDEO,
      title: 'Video Studio',
      desc: 'Cinematic 720p/1080p video generation with Veo 3.1 technology.',
      color: 'from-emerald-500 to-cyan-500',
      icon: '🎬'
    },
    {
      type: ViewType.VOICE,
      title: 'Voice Vault',
      desc: 'Hyper-realistic text-to-speech with multi-speaker personality support.',
      color: 'from-pink-500 to-rose-500',
      icon: '🎙️'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 animate-in fade-in duration-1000">
      <div className="text-center mb-24">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-sm font-semibold tracking-wide uppercase">
          Powered by Google Gemini 3
        </div>
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
          The Future of <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-rose-400">
            Creative Expression
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Lumina Studio brings together world-class generative AI models for images, video, and voice in one unified, professional workspace.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f) => (
          <div 
            key={f.type}
            onClick={() => setView(f.type)}
            className="group relative cursor-pointer bg-gray-900/40 border border-gray-800 rounded-[2.5rem] p-8 hover:border-white/20 transition-all hover:-translate-y-2 overflow-hidden shadow-2xl"
          >
            <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${f.color} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity`} />
            
            <div className="text-4xl mb-6">{f.icon}</div>
            <h3 className="text-2xl font-bold mb-3 text-white">{f.title}</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">{f.desc}</p>
            
            <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
              Enter Lab
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-32 p-12 bg-gray-900 border border-gray-800 rounded-[3rem] text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Need a Creative Spark?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Talk to our AI Creative Assistant for prompts, scripts, or creative direction.</p>
          <button 
            onClick={() => setView(ViewType.CHAT)}
            className="px-10 py-4 bg-white text-gray-950 rounded-full font-bold hover:bg-gray-200 transition-colors shadow-xl"
          >
            Open Assistant
          </button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent" />
      </div>
    </div>
  );
};

export default Home;
