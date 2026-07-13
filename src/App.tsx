import { useState, useEffect } from 'react';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Editor from './components/Editor';
import Navbar from './components/Navbar';
import { Theme, ViewState } from './types';

export default function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [view, setView] = useState<ViewState>('landing');
  const [videoFile, setVideoFile] = useState<File | null>(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleVideoProcessed = (file: File) => {
    setVideoFile(file);
    setView('editor');
  };

  return (
    <div className="min-h-screen bg-[#050614] text-[#F8FAFC] font-sans transition-colors duration-300 flex flex-col relative overflow-hidden">
      {/* Background ambient light */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-col flex-grow">
        <Navbar theme={theme} setTheme={setTheme} view={view} setView={setView} />
        
        {view === 'landing' && <Landing onGetStarted={() => setView('dashboard')} />}
        {view === 'dashboard' && <Dashboard onVideoProcessed={handleVideoProcessed} />}
        {view === 'editor' && <Editor videoFile={videoFile} onBack={() => setView('dashboard')} />}
      </div>
    </div>
  );
}
