
import React, { useState } from 'react';
import { geminiService } from '../../services/geminiService';
import { GeneratedVideo } from '../../types';

const VideoStudio: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [progressMsg, setProgressMsg] = useState('');
  const [videos, setVideos] = useState<GeneratedVideo[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    setError(null);
    setProgressMsg('Awaiting access...');
    
    try {
      await geminiService.ensureApiKeySelected();
      const url = await geminiService.generateVideo(prompt, (msg) => setProgressMsg(msg));
      
      const newVideo: GeneratedVideo = {
        id: Date.now().toString(),
        url,
        prompt,
        timestamp: Date.now()
      };
      setVideos([newVideo, ...videos]);
      setPrompt('');
    } catch (err: any) {
      setError(err.message || 'Video generation failed. Please ensure you have a valid paid API key.');
    } finally {
      setLoading(false);
      setProgressMsg('');
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
          Video Studio
        </h1>
        <p className="text-gray-400 text-lg">Experience the next generation of generative video with Veo 3.1.</p>
      </div>

      <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 mb-12 shadow-2xl relative overflow-hidden">
        {loading && (
            <div className="absolute inset-0 z-10 bg-gray-950/80 backdrop-blur-sm flex flex-col items-center justify-center p-10 text-center">
                <div className="w-16 h-16 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin mb-6" />
                <h3 className="text-xl font-bold text-white mb-2">Cinematic Synthesis in Progress</h3>
                <p className="text-emerald-400 animate-pulse font-mono text-sm">{progressMsg}</p>
                <p className="text-gray-500 mt-4 text-xs max-w-sm">This typically takes 2-3 minutes. High quality takes time, but the results are worth it.</p>
            </div>
        )}
        
        <div className="flex flex-col gap-6">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="A futuristic robot walking through a cyberpunk Tokyo at night, neon lights reflecting on wet pavement, high quality cinema style..."
            className="w-full bg-gray-950 border border-gray-800 rounded-2xl p-4 min-h-[120px] text-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-600"
          />
          
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-sm text-gray-400 bg-gray-950 px-4 py-2 rounded-xl border border-gray-800">
                <span className="text-emerald-500 mr-2 font-bold">●</span> Veo 3.1 Fast · 720p · 16:9
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading || !prompt.trim()}
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl font-semibold transition-all shadow-xl shadow-emerald-500/20 active:scale-95 text-gray-950"
            >
              Render Scene
            </button>
          </div>
          {error && <p className="text-red-400 text-sm px-2">⚠️ {error}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {videos.map((vid) => (
          <div key={vid.id} className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-xl group">
            <video 
                src={vid.url} 
                controls 
                className="w-full aspect-video object-cover" 
                poster={`https://picsum.photos/seed/${vid.id}/800/450`}
            />
            <div className="p-6">
              <p className="text-gray-200 font-medium mb-4 line-clamp-2">{vid.prompt}</p>
              <div className="flex justify-between items-center text-xs text-gray-500">
                  <span>{new Date(vid.timestamp).toLocaleTimeString()}</span>
                  <a href={vid.url} download={`lumina-video-${vid.id}.mp4`} className="text-emerald-400 hover:underline">Save MP4</a>
              </div>
            </div>
          </div>
        ))}
        {videos.length === 0 && !loading && (
          <div className="col-span-full py-20 text-center border-2 border-dashed border-gray-800 rounded-3xl">
            <p className="text-gray-500">Cinematic generations will be archived here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoStudio;
