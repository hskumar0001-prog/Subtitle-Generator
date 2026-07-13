import { Moon, Sun, Subtitles } from 'lucide-react';
import { Theme, ViewState } from '../types';

interface NavbarProps {
  theme: Theme;
  setTheme: (t: Theme) => void;
  view: ViewState;
  setView: (v: ViewState) => void;
}

export default function Navbar({ theme, setTheme, view, setView }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 h-16 px-4 md:px-10 flex items-center justify-between border-b border-white/5 relative bg-transparent backdrop-blur-md">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between h-full">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => setView('landing')}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/20">
            S
          </div>
          <span className="font-display font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">SubMaster <span className="text-blue-400">AI</span></span>
        </div>

        <div className="flex items-center gap-6">
          {view === 'landing' && (
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </div>
          )}

          <div className="flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {view === 'landing' && (
              <>
                <button className="text-sm font-medium text-[#F8FAFC]">Login</button>
                <button 
                  onClick={() => setView('dashboard')}
                  className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-sm font-bold text-black bg-white rounded-full hover:bg-gray-200 transition-colors"
                >
                  Start Free Trial
                </button>
              </>
            )}
            
            {(view === 'dashboard' || view === 'editor') && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 border-2 border-white dark:border-slate-800 shadow-sm" />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
