
// Project types for Momentum Marketing Solution LLC
export enum ViewType {
  HOME = 'home',
  WHAT_WE_DO = 'what-we-do',
  WHY_MOMENTUM = 'why-momentum',
  SERVICES = 'services',
  INDUSTRIES = 'industries',
  CONTACT = 'contact',
  IMAGE_LAB = 'image-lab',
  VIDEO_LAB = 'video-lab',
  VOICE_LAB = 'voice-lab',
  ASSISTANT = 'assistant',
  LIVE_SYNC = 'live-sync',
  PRIVACY = 'privacy',
}

export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  timestamp: number;
}

export interface GeneratedVideo {
  id: string;
  url: string;
  prompt: string;
  timestamp: number;
}

export interface VoiceMessage {
  id: string;
  text: string;
  audioUrl: string;
  speaker: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}
