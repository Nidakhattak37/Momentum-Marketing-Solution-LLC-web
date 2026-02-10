
export enum ViewType {
  HOME = 'home',
  IMAGE = 'image',
  VIDEO = 'video',
  VOICE = 'voice',
  CHAT = 'chat'
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
  audioUrl: string | null;
  speaker: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}
