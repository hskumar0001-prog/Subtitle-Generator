import { useState, useRef } from 'react';
import { UploadCloud, FileVideo, Loader2, Play, Settings, Clock, History } from 'lucide-react';

interface DashboardProps {
  onVideoProcessed: (file: File) => void;
}

export default function Dashboard({ onVideoProcessed }: DashboardProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (selectedFile: File) => {
    if (selectedFile.type.startsWith('video/') || selectedFile.type.startsWith('audio/')) {
      setFile(selectedFile);
      simulateProcessing(selectedFile);
    } else {
      alert('Please upload a valid video or audio file.');
    }
  };

  const simulateProcessing = (selectedFile: File) => {
    setIsProcessing(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onVideoProcessed(selectedFile);
          }, 500);
          return 100;
        }
        return prev + 5;
      });
    }, 150);
  };

  return (
    <div className="flex flex-col md:flex-row flex-grow w-full h-[calc(100vh-64px)] overflow-hidden">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-r border-white/5 bg-white/[0.02] p-4 flex flex-col hidden md:flex">
        <div className="space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-600/10 text-blue-400 font-medium border border-blue-500/20">
            <UploadCloud size={20} /> New Project
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 transition-colors">
            <History size={20} /> Recent Videos
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 transition-colors">
            <Settings size={20} /> Settings
          </button>
        </div>
        
        <div className="mt-auto p-4 rounded-xl bg-white/5 border border-white/10">
          <h4 className="font-semibold text-sm mb-2 text-white">Pro Plan</h4>
          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
            <div className="h-full bg-blue-500 w-[15%]" />
          </div>
          <p className="text-xs text-gray-500">45 / 300 mins used</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-8 flex flex-col items-center justify-center relative">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-display font-bold mb-2 text-white">Upload your video</h1>
            <p className="text-gray-400">Supported formats: MP4, MOV, WEBM, MP3, WAV</p>
          </div>

          <input 
            type="file" 
            accept="video/*,audio/*"
            className="hidden" 
            ref={fileInputRef}
            onChange={(e) => e.target.files && handleFileSelect(e.target.files[0])}
          />

          <div 
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => !isProcessing && fileInputRef.current?.click()}
            className={`
              relative w-full aspect-video md:aspect-[21/9] rounded-3xl border-2 border-dashed flex flex-col items-center justify-center p-8 transition-all cursor-pointer overflow-hidden
              ${isDragging ? 'border-blue-500 bg-blue-500/10' : 'border-white/20 bg-white/5 hover:border-blue-500/50 hover:bg-white/10'}
            `}
          >
            {isProcessing ? (
              <div className="flex flex-col items-center z-10">
                <Loader2 size={48} className="text-blue-500 animate-spin mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">Processing with AI...</h3>
                <p className="text-gray-400 mb-6">Analyzing audio and generating subtitles.</p>
                <div className="w-64 h-3 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-150 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-sm font-medium mt-2 text-gray-400">{progress}%</p>
              </div>
            ) : (
              <div className="flex flex-col items-center z-10 pointer-events-none">
                <div className="w-20 h-20 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                  <UploadCloud size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Click to upload or drag and drop</h3>
                <p className="text-gray-400 text-center max-w-sm">Maximum file size 2GB. For larger files, consider upgrading to the Business plan.</p>
              </div>
            )}
            
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2" />
          </div>
        </div>
      </main>
    </div>
  );
}
