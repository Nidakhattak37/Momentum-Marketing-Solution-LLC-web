
import React, { useState } from 'react';
import { geminiService } from '../../services/geminiService';
import { GeneratedImage } from '../../types';

const ImageStudio: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [quality, setQuality] = useState<'standard' | 'high'>('standard');
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<GeneratedImage[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    setError(null);
    try {
      if (quality === 'high') {
        await geminiService.ensureApiKeySelected();
      }
      const url = await geminiService.generateImage(prompt, quality);
      const newImage: GeneratedImage = {
        id: Date.now().toString(),
        url,
        prompt,
        timestamp: Date.now()
      };
      setImages([newImage, ...images]);
      setPrompt('');
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Image Lab
        </h1>
        <p className="text-gray-400 text-lg">Transform words into mesmerizing visuals with Gemini.</p>
      </div>

      <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 mb-12 shadow-2xl">
        <div className="flex flex-col gap-6">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="A surreal landscape with floating islands and neon waterfalls..."
            className="w-full bg-gray-950 border border-gray-800 rounded-2xl p-4 min-h-[120px] text-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-gray-600"
          />
          
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400 font-medium">Quality:</span>
              <div className="flex bg-gray-950 p-1 rounded-xl border border-gray-800">
                <button
                  onClick={() => setQuality('standard')}
                  className={`px-4 py-2 rounded-lg text-sm transition-all ${quality === 'standard' ? 'bg-gray-800 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  Standard
                </button>
                <button
                  onClick={() => setQuality('high')}
                  className={`px-4 py-2 rounded-lg text-sm transition-all ${quality === 'high' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  High (2K/4K)
                </button>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={loading || !prompt.trim()}
              className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl font-semibold transition-all shadow-xl shadow-indigo-500/20 active:scale-95"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Generating...
                </span>
              ) : 'Generate Vision'}
            </button>
          </div>
          {error && <p className="text-red-400 text-sm px-2">⚠️ {error}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img) => (
          <div key={img.id} className="group relative bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden hover:border-indigo-500/50 transition-all shadow-xl">
            <img src={img.url} alt={img.prompt} className="w-full aspect-square object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
              <p className="text-sm text-gray-200 line-clamp-2 mb-2">{img.prompt}</p>
              <button 
                onClick={() => window.open(img.url, '_blank')}
                className="text-xs font-semibold uppercase tracking-wider text-indigo-400 hover:text-indigo-300"
              >
                Download HD
              </button>
            </div>
          </div>
        ))}
        {images.length === 0 && !loading && (
          <div className="col-span-full py-20 text-center border-2 border-dashed border-gray-800 rounded-3xl">
            <p className="text-gray-500">Your generated masterpieces will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageStudio;
