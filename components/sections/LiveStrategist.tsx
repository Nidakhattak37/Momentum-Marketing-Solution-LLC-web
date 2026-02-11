
import React, { useEffect, useRef, useState } from 'react';
import { GoogleGenAI, Modality, LiveServerMessage } from '@google/genai';

const LiveStrategist: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [transcription, setTranscription] = useState<string[]>([]);
  const [volume, setVolume] = useState(0);

  const brandGradient = 'linear-gradient(to right, #00E5FF, #9D00FF, #FF00C7)';
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const sessionRef = useRef<any>(null);
  const nextStartTimeRef = useRef(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  // Manual implementation of encode and decode as required by guidelines
  const encode = (bytes: Uint8Array) => {
    let binary = '';
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  const decode = (base64: string) => {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  };

  // Recommended audio decoding logic for raw PCM data
  const decodeAudioData = async (
    data: Uint8Array,
    ctx: AudioContext,
    sampleRate: number,
    numChannels: number,
  ): Promise<AudioBuffer> => {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) {
        channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
      }
    }
    return buffer;
  };

  const startSession = async () => {
    setIsConnecting(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const inputCtx = new AudioContext({ sampleRate: 16000 });
      const outputCtx = new AudioContext({ sampleRate: 24000 });
      audioContextRef.current = outputCtx;

      const sessionPromise = ai.live.connect({
        model: 'gemini-2.5-flash-native-audio-preview-12-2025',
        callbacks: {
          onopen: () => {
            setIsActive(true);
            setIsConnecting(false);
            const source = inputCtx.createMediaStreamSource(stream);
            const processor = inputCtx.createScriptProcessor(4096, 1, 1);
            processor.onaudioprocess = (e) => {
              const input = e.inputBuffer.getChannelData(0);
              let sum = 0;
              for(let i=0; i<input.length; i++) sum += input[i]*input[i];
              setVolume(Math.sqrt(sum/input.length));

              const int16 = new Int16Array(input.length);
              for (let i = 0; i < input.length; i++) int16[i] = input[i] * 32768;
              
              // Send audio data only after session promise resolves to avoid race conditions
              sessionPromise.then(s => s.sendRealtimeInput({ 
                media: { 
                  data: encode(new Uint8Array(int16.buffer)), 
                  mimeType: 'audio/pcm;rate=16000' 
                } 
              }));
            };
            source.connect(processor);
            processor.connect(inputCtx.destination);
          },
          onmessage: async (msg: LiveServerMessage) => {
            // Handle incoming audio stream parts
            const audioDataString = msg.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
            if (audioDataString) {
              const data = decode(audioDataString);
              const buffer = await decodeAudioData(data, outputCtx, 24000, 1);
              const source = outputCtx.createBufferSource();
              source.buffer = buffer;
              source.connect(outputCtx.destination);
              
              // Track end of queue for gapless playback
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputCtx.currentTime);
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += buffer.duration;
              
              sourcesRef.current.add(source);
              source.onended = () => sourcesRef.current.delete(source);
            }

            // Handle interruption signal to stop current playback
            if (msg.serverContent?.interrupted) {
              for (const source of sourcesRef.current) {
                try { source.stop(); } catch(e) {}
              }
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
            }

            // Update transcription history
            if (msg.serverContent?.outputTranscription) {
              setTranscription(prev => [...prev.slice(-4), msg.serverContent!.outputTranscription!.text]);
            }
          },
          onclose: () => stopSession(),
          onerror: (e) => {
            console.error('Live session error:', e);
            stopSession();
          }
        },
        config: {
          responseModalities: [Modality.AUDIO],
          outputAudioTranscription: {},
          systemInstruction: "You are the Momentum Oracle, a high-level digital marketing strategist. You speak in concise, authoritative, and data-driven sentences. You help users optimize their market velocity.",
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Charon' } } }
        }
      });
      sessionRef.current = await sessionPromise;
    } catch (err) {
      console.error('Failed to start live session:', err);
      setIsConnecting(false);
    }
  };

  const stopSession = () => {
    setIsActive(false);
    setIsConnecting(false);
    streamRef.current?.getTracks().forEach(t => t.stop());
    sessionRef.current?.close();
    for (const source of sourcesRef.current) {
      try { source.stop(); } catch(e) {}
    }
    sourcesRef.current.clear();
    nextStartTimeRef.current = 0;
  };

  return (
    <div className="max-w-4xl mx-auto py-20 px-8 text-center space-y-12 animate-in fade-in duration-1000">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1 rounded-full">
           <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-600'}`} />
           <span className="text-[9px] font-black text-cyan-400 tracking-widest uppercase">Neural Audio Sync</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
          THE MOMENTUM <br /> <span className="bg-clip-text text-transparent" style={{ backgroundImage: brandGradient }}>ORACLE.</span>
        </h1>
        <p className="text-zinc-500 max-w-lg mx-auto font-semibold">
          Initialize a zero-latency audio briefing with our lead AI strategist. Real-time market diagnostics and creative alignment.
        </p>
      </div>

      <div className="relative flex justify-center py-20">
         <div className="absolute inset-0 flex items-center justify-center gap-1 opacity-20">
            {Array.from({length: 40}).map((_, i) => (
                <div 
                    key={i} 
                    className="w-1 bg-white rounded-full transition-all duration-75"
                    style={{ 
                        height: isActive ? `${20 + (volume * 500 * Math.random())}px` : '4px',
                        opacity: isActive ? 0.8 : 0.2
                    }}
                />
            ))}
         </div>

         <button 
            onClick={isActive ? stopSession : startSession}
            disabled={isConnecting}
            className={`relative z-10 w-48 h-48 rounded-full flex flex-col items-center justify-center transition-all duration-500 border-4 ${
                isActive 
                ? 'bg-cyan-500/10 border-cyan-500 shadow-[0_0_50px_rgba(0,229,255,0.3)]' 
                : 'bg-white border-transparent text-black hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)]'
            }`}
         >
            {isConnecting ? (
                <div className="w-8 h-8 border-4 border-black/20 border-t-black rounded-full animate-spin" />
            ) : isActive ? (
                <>
                    <div className="w-6 h-6 bg-cyan-400 rounded-sm mb-2" />
                    <span className="text-[10px] font-black tracking-widest">END BRIEFING</span>
                </>
            ) : (
                <>
                    <svg className="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
                    <span className="text-[10px] font-black tracking-widest uppercase">INITIATE SYNC</span>
                </>
            )}
         </button>
      </div>

      {isActive && (
        <div className="space-y-4 max-w-xl mx-auto bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-xl animate-in slide-in-from-bottom-4">
           <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest border-b border-white/5 pb-4 mb-4">Live Transcription Stream</div>
           <p className="text-zinc-300 font-semibold min-h-[40px]">
             {transcription.length > 0 ? transcription.join(' ') : 'Oracle is listening...'}
           </p>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/5 opacity-40">
         <div className="flex flex-col items-center gap-1">
            <span className="text-[8px] font-black text-zinc-700 uppercase tracking-widest">Protocol</span>
            <span className="text-xs font-bold text-white uppercase">GEMINI_2.5_LIVE</span>
         </div>
         <div className="flex flex-col items-center gap-1">
            <span className="text-[8px] font-black text-zinc-700 uppercase tracking-widest">Latency</span>
            <span className="text-xs font-bold text-white uppercase">&lt; 150MS</span>
         </div>
         <div className="flex flex-col items-center gap-1">
            <span className="text-[8px] font-black text-zinc-700 uppercase tracking-widest">Encryption</span>
            <span className="text-xs font-bold text-white uppercase">AES-256 SYNC</span>
         </div>
         <div className="flex flex-col items-center gap-1">
            <span className="text-[8px] font-black text-zinc-700 uppercase tracking-widest">Integrity</span>
            <span className="text-xs font-bold text-emerald-500 uppercase">OPERATIONAL</span>
         </div>
      </div>
    </div>
  );
};

export default LiveStrategist;
