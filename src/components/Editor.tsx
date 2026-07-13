import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Download, Type, ChevronLeft, Save, Plus, Trash2, Globe } from 'lucide-react';
import { SubtitleCue } from '../types';

interface EditorProps {
  videoFile: File | null;
  onBack: () => void;
}

export default function Editor({ videoFile, onBack }: EditorProps) {
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [cues, setCues] = useState<SubtitleCue[]>([]);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoFile) {
      const url = URL.createObjectURL(videoFile);
      setVideoUrl(url);
      
      // Generate some dummy cues to simulate AI results
      setCues([
        { id: '1', start: 0.5, end: 3.2, text: 'Welcome to this incredible new video.' },
        { id: '2', start: 3.5, end: 6.0, text: 'Today, we are going to explore the power of AI.' },
        { id: '3', start: 6.2, end: 9.8, text: 'Generating subtitles has never been easier or faster.' },
        { id: '4', start: 10.0, end: 14.5, text: 'You can easily edit these captions right here in the web browser.' },
      ]);
      
      return () => URL.revokeObjectURL(url);
    }
  }, [videoFile]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const updateCueText = (id: string, text: string) => {
    setCues(cues.map(c => c.id === id ? { ...c, text } : c));
  };

  const updateCueTime = (id: string, field: 'start' | 'end', value: string) => {
    const numValue = parseFloat(value) || 0;
    setCues(cues.map(c => c.id === id ? { ...c, [field]: numValue } : c));
  };

  const deleteCue = (id: string) => {
    setCues(cues.filter(c => c.id !== id));
  };

  const formatSrtTime = (seconds: number) => {
    const date = new Date(seconds * 1000);
    const hh = String(date.getUTCHours()).padStart(2, '0');
    const mm = String(date.getUTCMinutes()).padStart(2, '0');
    const ss = String(date.getUTCSeconds()).padStart(2, '0');
    const ms = String(date.getUTCMilliseconds()).padStart(3, '0');
    return `${hh}:${mm}:${ss},${ms}`;
  };

  const exportSRT = () => {
    let content = '';
    cues.forEach((cue, index) => {
      content += `${index + 1}\n`;
      content += `${formatSrtTime(cue.start)} --> ${formatSrtTime(cue.end)}\n`;
      content += `${cue.text}\n\n`;
    });
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${videoFile?.name || 'video'}_subtitles.srt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-64px)] w-full">
      {/* Editor Toolbar */}
      <div className="h-16 border-b border-white/5 bg-white/[0.02] flex items-center justify-between px-4 lg:px-8 shrink-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 rounded-lg hover:bg-white/10 text-gray-400 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="font-medium truncate max-w-[200px] md:max-w-md text-white">
            {videoFile?.name || 'Untitled Project'}
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-sm font-medium text-gray-300 transition-colors">
            <Globe size={16} /> Translate
          </button>
          <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-sm font-medium text-gray-300 transition-colors">
            <Type size={16} /> Styles
          </button>
          <button 
            onClick={exportSRT}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium transition-colors shadow-sm shadow-blue-500/20"
          >
            <Download size={16} /> Export SRT
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row flex-grow overflow-hidden">
        {/* Left: Video Player Area */}
        <div className="w-full lg:w-3/5 bg-black p-4 flex flex-col justify-center border-r border-white/5">
          <div className="w-full max-w-4xl mx-auto relative rounded-xl overflow-hidden bg-black shadow-2xl aspect-video group">
            {videoUrl ? (
              <video 
                ref={videoRef}
                src={videoUrl}
                className="w-full h-full object-contain"
                controls
                onTimeUpdate={handleTimeUpdate}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-600">
                No video loaded
              </div>
            )}
            
            {/* Subtitle Overlay Preview */}
            <div className="absolute bottom-16 left-0 right-0 flex justify-center pointer-events-none">
              {cues.map(cue => (
                (currentTime >= cue.start && currentTime <= cue.end) && (
                  <div key={cue.id} className="bg-black/70 backdrop-blur-sm text-white px-4 py-1 rounded text-center text-lg md:text-2xl font-semibold shadow-lg">
                    {cue.text}
                  </div>
                )
              ))}
            </div>
          </div>
        </div>

        {/* Right: Subtitle List */}
        <div className="w-full lg:w-2/5 bg-white/[0.01] flex flex-col h-full">
          <div className="p-4 border-b border-white/5 flex justify-between items-center bg-white/[0.02] shrink-0">
            <h3 className="font-semibold flex items-center gap-2 text-white">
              <Type size={18} className="text-blue-500" />
              Captions
            </h3>
            <span className="text-sm text-gray-500">{cues.length} segments</span>
          </div>
          
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {cues.map((cue, index) => {
              const isActive = currentTime >= cue.start && currentTime <= cue.end;
              return (
                <div 
                  key={cue.id}
                  className={`
                    p-4 rounded-xl border transition-all relative group
                    ${isActive 
                      ? 'border-blue-500/50 bg-blue-500/10 shadow-sm' 
                      : 'border-white/10 bg-white/5'}
                  `}
                >
                  <div className="flex justify-between items-center mb-2 text-xs font-mono text-gray-500">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-gray-300">
                        {index + 1}
                      </span>
                      <div className="flex items-center gap-1">
                        <input 
                          type="number" 
                          step="0.1" 
                          value={cue.start}
                          onChange={(e) => updateCueTime(cue.id, 'start', e.target.value)}
                          className="w-16 bg-transparent border-b border-transparent hover:border-gray-600 focus:border-blue-500 outline-none text-center text-gray-300" 
                        />
                        <span>-</span>
                        <input 
                          type="number" 
                          step="0.1" 
                          value={cue.end}
                          onChange={(e) => updateCueTime(cue.id, 'end', e.target.value)}
                          className="w-16 bg-transparent border-b border-transparent hover:border-gray-600 focus:border-blue-500 outline-none text-center text-gray-300" 
                        />
                      </div>
                    </div>
                    <button 
                      onClick={() => deleteCue(cue.id)}
                      className="text-gray-500 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  
                  <textarea
                    value={cue.text}
                    onChange={(e) => updateCueText(cue.id, e.target.value)}
                    className="w-full bg-transparent resize-none outline-none font-medium text-white"
                    rows={2}
                  />
                </div>
              );
            })}
            
            <button className="w-full py-4 rounded-xl border-2 border-dashed border-white/20 text-gray-400 hover:border-blue-500/50 hover:text-blue-400 transition-colors flex items-center justify-center gap-2 font-medium">
              <Plus size={18} /> Add Caption Segment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
