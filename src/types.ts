export type Theme = 'light' | 'dark';
export type ViewState = 'landing' | 'dashboard' | 'editor';

export interface SubtitleCue {
  id: string;
  start: number;
  end: number;
  text: string;
}
