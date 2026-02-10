
import React from 'react';
import { ViewType } from '../types';

interface NavbarProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  const navItems = [
    { id: ViewType.HOME, label: 'Home' },
    { id: ViewType.IMAGE, label: 'Image Lab' },
    { id: ViewType.VIDEO, label: 'Video Studio' },
    { id: ViewType.VOICE, label: 'Voice Vault' },
    { id: ViewType.CHAT, label: 'Assistant' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setView(ViewType.HOME)}
        >
          <div className="w-8 h-8 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-lg group-hover:rotate-12 transition-transform shadow-lg shadow-indigo-500/20" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Lumina
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                currentView === item.id
                  ? 'bg-gray-800 text-white shadow-inner'
                  : 'text-gray-400 hover:text-white hover:bg-gray-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="md:hidden flex items-center">
            <select 
                value={currentView} 
                onChange={(e) => setView(e.target.value as ViewType)}
                className="bg-gray-900 border border-gray-800 text-sm rounded-lg p-2 focus:ring-indigo-500 outline-none"
            >
                {navItems.map(item => (
                    <option key={item.id} value={item.id}>{item.label}</option>
                ))}
            </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
