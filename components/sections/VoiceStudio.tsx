
import React, { useState, useRef } from 'react';
import { geminiService } from '../../services/geminiService.ts';
import { VoiceMessage } from '../../types.ts';

const VoiceStudio: React.FC = () => {
  const [text, setText] = useState('');
  const [voice, setVoice] = useState('Kore');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<VoiceMessage[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  const voices = [
    { name: 'Kore', desc: 'Warm & Professional' },
    { name: 'Puck', desc: 'Energetic & Youthful' },
    { name: 'Charon', desc: 'Deep & Authoritative' },
    { name: 'Fenrir', desc: 'Soft & Narrative' },
    { name: 'Zephyr', desc: 'Friendly Assistant' }
  ];

  const handleGenerate = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const base64Audio = await geminiService.generateSpeech(text, voice);
      
      const newMessage: VoiceMessage = {
        id: Date.now().toString(),
        text,
        audioUrl: base64Audio,
        speaker: voice
      };
      setMessages([newMessage, ...messages]);
      setText('');
      playAudio(base64Audio);
    } catch (err: any) {
      setError(err.message || 'Speech generation failed');
    } finally {
      setLoading(false);
    }
  };

  const playAudio = async (base64: string) => {
    try {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        
        // Manual decode logic as per requirements
        const decode = (b64: string) => {
            const binaryString = atob(b64);
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            return bytes;
        };

        const data = decode(base64);
        const dataInt16 = new Int16Array(data.buffer);
        const numChannels = 1;
        const frameCount = dataInt16.length / numChannels;
        const buffer = audioCtx.createBuffer(numChannels, frameCount, 24000);

        for (let channel = 0; channel < numChannels; channel++) {
            const channelData = buffer.getChannelData(channel);
            for (let i = 0; i < frameCount; i++) {
                channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
            }
        }

        const source = audioCtx.createBufferSource();
        source.buffer = buffer;
        source.connect(audioCtx.destination);
        source.start();
    } catch (e) {
        console.error("Audio playback error:", e);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-rose-400">
          Voice Vault
        </h1>
        <p className="text-gray-400 text-lg">Give your stories a voice with natural-sounding synthesis.</p>
      </div>

      <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 mb-12 shadow-2xl">
        <div className="flex flex-col gap-6">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write something for Gemini to say..."
            className="w-full bg-gray-950 border border-gray-800 rounded-2xl p-4 min-h-[100px] text-lg focus:ring-2 focus:ring-pink-500 outline-none transition-all placeholder:text-gray-600"
          />
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {voices.map((v) => (
              <button
                key={v.name}
                onClick={() => setVoice(v.name)}
                className={`flex flex-col items-center p-3 rounded-2xl border transition-all ${
                  voice === v.name 
                  ? 'bg-pink-500/10 border-pink-500 text-pink-400' 
                  : 'bg-gray-950 border-gray-800 text-gray-500 hover:text-gray-300 hover:border-gray-700'
                }`}
              >
                <span className="font-bold">{v.name}</span>
                <span className="text-[10px] opacity-60 uppercase">{v.desc.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleGenerate}
              disabled={loading || !text.trim()}
              className="px-8 py-3 bg-pink-500 hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl font-semibold transition-all shadow-xl shadow-pink-500/20 active:scale-95 text-white"
            >
              {loading ? 'Synthesizing...' : 'Speak Text'}
            </button>
          </div>
          {error && <p className="text-red-400 text-sm">⚠️ {error}</p>}
        </div>
      </div>

      <div className="space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex items-center justify-between gap-4 group">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-pink-400 uppercase tracking-widest">{msg.speaker}</span>
                <span className="text-[10px] text-gray-600">{new Date(parseInt(msg.id)).toLocaleTimeString()}</span>
              </div>
              <p className="text-gray-300 line-clamp-1">{msg.text}</p>
            </div>
            <button 
                onClick={() => msg.audioUrl && playAudio(msg.audioUrl)}
                className="w-12 h-12 flex items-center justify-center bg-gray-950 border border-gray-800 rounded-full hover:bg-pink-500 hover:border-pink-500 text-gray-400 hover:text-white transition-all group-hover:scale-110"
            >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoiceStudio;
