
import { GoogleGenAI, Type, Modality } from "@google/genai";

// Standard base64 helpers as requested
function encode(bytes: Uint8Array) {
  let binary = '';
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export const geminiService = {
  // Check for paid key if using Veo or Pro Image
  async ensureApiKeySelected(): Promise<boolean> {
    if (typeof window.aistudio?.hasSelectedApiKey === 'function') {
      const selected = await window.aistudio.hasSelectedApiKey();
      if (!selected) {
        await window.aistudio.openSelectKey();
        return true; // Assume success after prompt
      }
      return true;
    }
    return true; // Default context
  },

  async generateImage(prompt: string, quality: 'standard' | 'high' = 'standard') {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const model = quality === 'high' ? 'gemini-3-pro-image-preview' : 'gemini-2.5-flash-image';
    
    try {
      const response = await ai.models.generateContent({
        model,
        contents: { parts: [{ text: prompt }] },
        config: {
          imageConfig: {
            aspectRatio: "1:1",
            ...(quality === 'high' ? { imageSize: "1K" } : {})
          }
        }
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
      throw new Error("No image data returned from Gemini");
    } catch (error: any) {
      if (error.message?.includes("Requested entity was not found")) {
        // Handle race condition/stale key
        await window.aistudio?.openSelectKey();
      }
      throw error;
    }
  },

  async generateVideo(prompt: string, onProgress: (msg: string) => void) {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const model = 'veo-3.1-fast-generate-preview';
    
    onProgress("Initiating cinematic render...");
    let operation = await ai.models.generateVideos({
      model,
      prompt,
      config: {
        numberOfVideos: 1,
        resolution: '720p',
        aspectRatio: '16:9'
      }
    });

    onProgress("Synthesizing frames...");
    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 8000));
      operation = await ai.operations.getVideosOperation({ operation: operation });
      onProgress(`Processing video... (Status: ${operation.done ? 'Complete' : 'Working'})`);
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!downloadLink) throw new Error("Video generation failed");
    
    const response = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  },

  async generateSpeech(text: string, voice: string = 'Kore'): Promise<string> {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: voice },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) throw new Error("Failed to generate speech audio");
    
    // We need to return a Blob URL for playback
    const audioData = decode(base64Audio);
    // Since it's raw PCM, for simple playback we'll wrap it in a WAV header or use AudioContext
    // Here we'll just return the base64 to be handled by a specialized player in the component
    return base64Audio;
  },

  async chat(message: string, history: any[]) {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: "You are the Lead Creative Strategist for Momentum Marketing Solution LLC. You help clients brainstorm high-impact marketing assets, write scripts for cinematic commercials, and optimize prompt engineering for brand consistency.",
      }
    });
    const response = await chat.sendMessage({ message });
    return response.text;
  }
};
