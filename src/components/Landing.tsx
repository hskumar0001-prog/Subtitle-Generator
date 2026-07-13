import { motion } from 'motion/react';
import { 
  Play, UploadCloud, FileVideo, Edit3, Download, Globe, Languages, 
  CheckCircle, Zap, Cloud, Users, Mic, Film, Youtube, Instagram, 
  Twitter, Linkedin, Facebook, Star, ChevronDown 
} from 'lucide-react';
import { useState } from 'react';

interface LandingProps {
  onGetStarted: () => void;
}

export default function Landing({ onGetStarted }: LandingProps) {
  return (
    <div className="flex-grow flex flex-col w-full">
      <Hero onGetStarted={onGetStarted} />
      <Features />
      <HowItWorks />
      <Platforms />
      <Pricing onGetStarted={onGetStarted} />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

function Hero({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <section className="relative overflow-hidden flex items-center justify-center min-h-[90vh]">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 p-4 md:p-10 relative z-10 max-w-7xl mx-auto w-full">
        <div className="col-span-1 md:col-span-5 flex flex-col justify-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1 w-fit"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-400"></span>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-blue-300">Now v2.0 - 99.8% Accuracy</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white">
              Generate AI <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-white">Subtitles</span> <br/>
              in Seconds
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-md">
              Create accurate subtitles for Shorts, YouTube, Reels, and Podcasts in 100+ languages. Fast, automatic, and pro-ready.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button 
              onClick={onGetStarted}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-bold text-white shadow-xl shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              Generate Subtitles <Play size={20} className="fill-current" />
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-white backdrop-blur-sm hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              Watch Demo
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-6"
          >
            <span className="text-[11px] uppercase tracking-wider text-gray-500 font-bold">Trusted by Creators on</span>
            <div className="flex gap-4 grayscale opacity-40 text-white">
              <span className="font-bold">YouTube</span>
              <span className="font-bold">TikTok</span>
              <span className="font-bold">Instagram</span>
            </div>
          </motion.div>
        </div>

        {/* Subtitle Editor Preview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-1 md:col-span-7 relative flex items-center justify-center mt-12 md:mt-0"
        >
          <div className="w-full max-w-[580px] bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[32px] shadow-2xl overflow-hidden flex flex-col h-[520px]">
            <div className="p-4 border-b border-white/5 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="text-[11px] text-gray-500 font-mono">editor_v2.0_active_session</div>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 bg-blue-500/20 text-blue-300 text-[10px] rounded border border-blue-500/30">SRT</span>
                <span className="px-2 py-0.5 bg-purple-500/20 text-purple-300 text-[10px] rounded border border-purple-500/30">VTT</span>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-1 md:grid-cols-5">
              <div className="col-span-1 md:col-span-3 bg-black relative flex flex-col justify-center items-center group">
                <div className="w-full aspect-video bg-gray-900 rounded flex items-center justify-center m-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-8 w-full text-center px-4">
                    <p className="text-yellow-400 font-bold text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">"Artificial intelligence is changing the way we create content for global audiences."</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm cursor-pointer border border-white/20">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="w-[90%] h-1.5 bg-white/10 rounded-full overflow-hidden mb-6 hidden md:block">
                  <div className="w-[65%] h-full bg-blue-500"></div>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2 border-t md:border-t-0 md:border-l border-white/5 flex flex-col">
                <div className="p-4 flex flex-col gap-3">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <div className="text-[10px] text-blue-400 font-bold mb-1">00:00:04</div>
                    <p className="text-xs text-gray-300 italic">Artificial intelligence is changing...</p>
                  </div>
                  <div className="bg-white/10 p-3 rounded-xl border border-blue-500/30 ring-1 ring-blue-500/20 shadow-lg">
                    <div className="text-[10px] text-blue-400 font-bold mb-1">00:00:12</div>
                    <p className="text-xs text-white">...the way we create content for global audiences.</p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5 opacity-50">
                    <div className="text-[10px] text-gray-500 font-bold mb-1">00:00:28</div>
                    <p className="text-xs text-gray-400">Next segment processing...</p>
                  </div>
                </div>
                <div className="mt-auto p-4 hidden md:block">
                  <button className="w-full py-2 bg-blue-600 rounded-lg text-xs font-bold text-white">Burn Captions to Video</button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const features = [
  { icon: Mic, title: 'AI Speech Recognition', desc: 'Industry-leading accuracy for voice-to-text conversion.' },
  { icon: Globe, title: '100+ Languages', desc: 'Translate and generate subtitles globally.' },
  { icon: Languages, title: 'Auto Translation', desc: 'Instantly translate to multiple languages.' },
  { icon: Edit3, title: 'Edit Subtitles Online', desc: 'Intuitive editor with real-time preview.' },
  { icon: Download, title: 'Multiple Export Formats', desc: 'Export to SRT, VTT, TXT, ASS seamlessly.' },
  { icon: Film, title: 'Burn Captions into Video', desc: 'Hardcode subtitles directly into your video.' },
  { icon: Users, title: 'Speaker Detection', desc: 'Automatically identify and label multiple speakers.' },
  { icon: CheckCircle, title: 'High Accuracy', desc: '99% accuracy powered by advanced AI models.' },
  { icon: Zap, title: 'Fast Processing', desc: 'Generate subtitles in seconds, not hours.' },
  { icon: Cloud, title: 'Cloud Storage', desc: 'Securely store and access your projects anywhere.' },
];

function Features() {
  return (
    <section id="features" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Everything you need</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A complete suite of tools to make your videos accessible and engaging globally.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: UploadCloud, title: 'Upload Video', desc: 'Drag and drop your video or audio file into the dashboard.' },
  { icon: Zap, title: 'AI Generates Subtitles', desc: 'Our advanced AI processes and transcribes your audio in seconds.' },
  { icon: Edit3, title: 'Edit Captions', desc: 'Review, adjust timestamps, and style your subtitles in the editor.' },
  { icon: Download, title: 'Export or Download', desc: 'Download as SRT/VTT or burn directly into the video file.' },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 text-lg">Four simple steps to perfect subtitles.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              {i !== steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-white/10 to-transparent z-0" />
              )}
              <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-6 relative z-10 shadow-lg">
                <step.icon size={40} />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center border-4 border-[#050614]">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Platforms() {
  return (
    <div className="h-auto md:h-24 px-4 md:px-10 py-6 md:py-0 bg-white/[0.02] border-t border-b border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 w-full max-w-7xl mx-auto">
      <div className="flex gap-8 md:gap-12 w-full md:w-auto justify-center md:justify-start">
        <div className="flex flex-col">
          <span className="text-blue-400 font-bold text-lg md:text-base">100+</span>
          <span className="text-[10px] uppercase text-gray-500 font-bold">Languages</span>
        </div>
        <div className="flex flex-col">
          <span className="text-purple-400 font-bold text-lg md:text-base">99.8%</span>
          <span className="text-[10px] uppercase text-gray-500 font-bold">Accuracy</span>
        </div>
        <div className="flex flex-col">
          <span className="text-white font-bold text-lg md:text-base">Lightning</span>
          <span className="text-[10px] uppercase text-gray-500 font-bold">Fast Processing</span>
        </div>
      </div>
      <div className="flex items-center gap-4 text-xs text-gray-500 justify-center w-full md:w-auto">
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-black"></div>
          <div className="w-8 h-8 rounded-full bg-blue-700 border-2 border-black"></div>
          <div className="w-8 h-8 rounded-full bg-purple-700 border-2 border-black"></div>
        </div>
        <span>Joined by <strong className="text-white">40,000+</strong> creators this month</span>
      </div>
    </div>
  );
}

function Pricing({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <section id="pricing" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-gray-400 text-lg">Choose the perfect plan for your content creation needs.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 flex flex-col">
            <h3 className="text-xl font-bold mb-2 text-white">Free</h3>
            <div className="mb-6"><span className="text-4xl font-bold text-white">$0</span><span className="text-gray-500">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-gray-300"><CheckCircle size={18} className="text-green-500"/> 10 mins of generation/mo</li>
              <li className="flex items-center gap-3 text-gray-300"><CheckCircle size={18} className="text-green-500"/> Standard AI Model</li>
              <li className="flex items-center gap-3 text-gray-300"><CheckCircle size={18} className="text-green-500"/> Web Editor Access</li>
              <li className="flex items-center gap-3 text-gray-300"><CheckCircle size={18} className="text-green-500"/> SRT/VTT Export</li>
            </ul>
            <button onClick={onGetStarted} className="w-full py-3 rounded-xl border border-white/20 font-semibold text-white hover:bg-white/10 transition-colors">Get Started</button>
          </div>
          
          {/* Pro */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border-2 border-blue-500 relative flex flex-col transform md:-translate-y-4 shadow-2xl shadow-blue-500/10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">MOST POPULAR</div>
            <h3 className="text-xl font-bold mb-2 text-white">Pro</h3>
            <div className="mb-6"><span className="text-4xl font-bold text-white">$19</span><span className="text-gray-500">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-gray-300"><CheckCircle size={18} className="text-blue-500"/> 300 mins of generation/mo</li>
              <li className="flex items-center gap-3 text-gray-300"><CheckCircle size={18} className="text-blue-500"/> Premium AI Model (99% Acc)</li>
              <li className="flex items-center gap-3 text-gray-300"><CheckCircle size={18} className="text-blue-500"/> Auto Translation (100+ langs)</li>
              <li className="flex items-center gap-3 text-gray-300"><CheckCircle size={18} className="text-blue-500"/> Speaker Detection</li>
              <li className="flex items-center gap-3 text-gray-300"><CheckCircle size={18} className="text-blue-500"/> Burn-in Video Export</li>
            </ul>
            <button onClick={onGetStarted} className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">Start Pro Trial</button>
          </div>
          
          {/* Business */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 flex flex-col">
            <h3 className="text-xl font-bold mb-2 text-white">Business</h3>
            <div className="mb-6"><span className="text-4xl font-bold text-white">$49</span><span className="text-gray-500">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-gray-300"><CheckCircle size={18} className="text-purple-500"/> 1000 mins of generation/mo</li>
              <li className="flex items-center gap-3 text-gray-300"><CheckCircle size={18} className="text-purple-500"/> Priority Processing</li>
              <li className="flex items-center gap-3 text-gray-300"><CheckCircle size={18} className="text-purple-500"/> Custom Font Uploads</li>
              <li className="flex items-center gap-3 text-gray-300"><CheckCircle size={18} className="text-purple-500"/> API Access</li>
              <li className="flex items-center gap-3 text-gray-300"><CheckCircle size={18} className="text-purple-500"/> Team Collaboration (Up to 5)</li>
            </ul>
            <button onClick={onGetStarted} className="w-full py-3 rounded-xl border border-white/20 font-semibold text-white hover:bg-white/10 transition-colors">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name: "Sarah J.", role: "YouTuber", text: "SubMaster AI saves me hours of editing every week. The auto-translation is a game changer for my international audience." },
    { name: "Mike T.", role: "Podcast Host", text: "The speaker detection is flawlessly accurate. It handles 3-person interviews perfectly without any manual tagging." },
    { name: "Elena R.", role: "TikTok Creator", text: "I love how I can burn the stylish captions directly into my shorts. Highly recommend for any short-form creator." }
  ];

  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16">Loved by Creators</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl text-left flex flex-col">
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
              </div>
              <p className="text-lg text-gray-300 mb-8 italic flex-grow">"{r.text}"</p>
              <div>
                <p className="font-bold text-white">{r.name}</p>
                <p className="text-gray-500 text-sm">{r.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "How accurate are AI subtitles?", a: "Our premium AI models achieve up to 99% accuracy in clear audio conditions, rivaling human transcriptionists." },
    { q: "Which languages are supported?", a: "We support over 100 languages for both transcription and translation, including English, Spanish, French, Mandarin, Arabic, and more." },
    { q: "Can I edit subtitles?", a: "Yes, our web-based editor allows you to easily adjust text, timing, and styling before exporting." },
    { q: "Can I download SRT files?", a: "Absolutely. You can export to SRT, VTT, TXT, and ASS formats on all plans." },
    { q: "Is there a free plan?", a: "Yes, we offer a free tier that gives you 10 minutes of generation per month to test the platform." },
  ];

  return (
    <section id="faq" className="py-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-lg text-white">
                <span>{faq.q}</span>
                <span className="transition group-open:rotate-180 text-gray-400">
                  <ChevronDown size={20} />
                </span>
              </summary>
              <div className="text-gray-400 p-6 pt-0 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4 text-white">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/20">
              S
            </div>
            <span className="font-display font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">SubMaster <span className="text-blue-400">AI</span></span>
          </div>
          <p className="text-gray-400 text-sm">Empowering creators with AI-driven accessibility tools.</p>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">Product</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">API</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} SubMaster AI. All rights reserved.
      </div>
    </footer>
  );
}

function SparklesIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}
