import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Camera, History, UserCheck, Star, Play } from 'lucide-react';

import { Logo } from './Logo';
import { HeroSlideshow } from './HeroSlideshow';

interface NavbarProps {
  onBookSession: () => void;
  onAboutClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookSession, onAboutClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-obsidian/50 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3">
        <div className="flex items-center gap-2">
          <Logo size="sm" />
          <span className="font-serif text-xl font-bold tracking-tight">MindSpark</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={onAboutClick}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer"
          >
            About Us
          </button>
          <a href="#restoration" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Restoration</a>
          <a href="#executive" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Executive</a>
          <a href="#glamour" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Glamour</a>
        </div>

        <button 
          onClick={onBookSession}
          className="gradient-bg px-5 py-2 rounded-xl text-sm font-bold text-obsidian hover:opacity-90 transition-opacity"
        >
          Book Session
        </button>
      </div>
    </nav>
  );
};

interface HeroProps {
  onBookSession: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookSession }) => {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-mindspark-cyan/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-mindspark-magenta/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <div className="w-2 h-2 rounded-full bg-mindspark-cyan animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-white/60">The Digital Darkroom of the Future</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8">
            Your Identity, <br />
            <span className="italic gradient-text">Reimagined.</span>
          </h1>
          
          <p className="text-xl text-white/60 max-w-lg mb-10 leading-relaxed">
            Your face is your brand. Don’t let a low-quality photo cost you an opportunity. We blend AI precision with artistic vision to ignite your digital presence.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={onBookSession}
              className="gradient-bg px-8 py-4 rounded-2xl text-lg font-bold text-obsidian hover:scale-105 transition-transform"
            >
              Start Transformation
            </button>
            <button className="px-8 py-4 rounded-2xl text-lg font-bold border border-white/10 hover:bg-white/5 transition-colors">
              View Portfolio
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-obsidian overflow-hidden">
                  <img src={`https://picsum.photos/seed/face${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-mindspark-cyan mb-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <p className="text-white/40 font-medium">Trusted by 5,000+ Professionals</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-charcoal">
            <HeroSlideshow />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
