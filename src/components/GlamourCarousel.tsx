import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useAnimationControls, AnimatePresence } from 'motion/react';
import { Sparkles, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Logo } from './Logo';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface GlamourCarouselProps {
  onAboutClick: () => void;
  onContactClick: () => void;
}

export const GlamourCarousel: React.FC<GlamourCarouselProps> = ({ onAboutClick, onContactClick }) => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const images = [
    { 
      id: 1, 
      before: "https://lh3.googleusercontent.com/d/1or3PkASMmbnN9AO9KKHNHcX5YGEUhMio", 
      after: "https://lh3.googleusercontent.com/d/1SwJLVR42B31SY5LSs79Iyp7Im52bXy9h", 
      title: "Formal Outing" 
    },
    { 
      id: 2, 
      before: "https://lh3.googleusercontent.com/d/1llmDHvz5fuKEeoAAEqNymeSl9uwfwdF_", 
      after: "https://lh3.googleusercontent.com/d/1WRhFzgMaKztpdRDkc5OmLnRzhbdGsIKF", 
      title: "Elegant Photo Shoot" 
    },
    { 
      id: 3, 
      before: "https://lh3.googleusercontent.com/d/1Fz6RWvtMnNSRjzlgGKrRFv4pnPxAwWK1", 
      after: "https://lh3.googleusercontent.com/d/1vowYw53tI3ARoA4ERVJfUOQOIwBUHs4i", 
      title: "Changing One Day At A Time" 
    },
    { 
      id: 4, 
      before: "https://lh3.googleusercontent.com/d/1SxGFwiBHBvw1UhnODMci8bU3qUFWnATH", 
      after: "https://lh3.googleusercontent.com/d/18LRJQEDx_VA2dDNWzeEcN7ROp11BLvan", 
      title: "The Night In The City" 
    },
  ];

  // We use a large number of clones to ensure we never see the edge during manual scrolls
  const allImages = [...images, ...images, ...images, ...images, ...images];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Center the scroll initially
    const itemWidth = window.innerWidth < 768 ? 300 : 400;
    const gap = 32;
    const totalWidth = (itemWidth + gap) * images.length;
    container.scrollLeft = totalWidth * 2;

    let frameId: number;
    const speed = 0.8; // Pixels per frame

    const scroll = () => {
      if (!isPaused && container) {
        container.scrollLeft += speed;

        // Infinite loop logic
        if (container.scrollLeft >= totalWidth * 3) {
          container.scrollLeft = totalWidth * 2;
        }
      }
      frameId = requestAnimationFrame(scroll);
    };

    frameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(frameId);
  }, [isPaused, images.length]);

  const scrollManual = (direction: 'left' | 'right') => {
    const container = containerRef.current;
    if (!container) return;

    const itemWidth = window.innerWidth < 768 ? 300 : 400;
    const gap = 32;
    const moveAmount = (itemWidth + gap) * 1.2; // Move slightly more than one item for better feel

    container.scrollBy({
      left: direction === 'left' ? -moveAmount : moveAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="glamour" className="py-24 bg-charcoal overflow-hidden relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif mb-6 italic">The Glamour Studio</h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Editorial Excellence, Redefined. No studio fees, just pure star power. High-end AI lighting and high-end retouching for social media that demands attention.
          </p>
        </div>
      </div>

      <div 
        className="relative group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation Arrows - Visible on Hover */}
        <div className="absolute inset-y-0 left-0 w-32 z-20 bg-linear-to-r from-charcoal to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-start pl-8">
          <button 
            onClick={() => scrollManual('left')}
            className="w-14 h-14 rounded-full bg-obsidian/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-mindspark-cyan hover:text-obsidian transition-all pointer-events-auto shadow-2xl"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 w-32 z-20 bg-linear-to-l from-charcoal to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-end pr-8">
          <button 
            onClick={() => scrollManual('right')}
            className="w-14 h-14 rounded-full bg-obsidian/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-mindspark-cyan hover:text-obsidian transition-all pointer-events-auto shadow-2xl"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Scroll Container */}
        <div 
          ref={containerRef}
          className="flex gap-8 px-6 overflow-x-hidden whitespace-nowrap scroll-smooth py-4"
        >
          {allImages.map((img, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-[300px] md:w-[400px] group/item relative aspect-[4/5] rounded-[32px] overflow-hidden border border-white/10 transition-transform duration-500 hover:scale-[1.02]"
            >
              <BeforeAfterSlider 
                beforeImage={img.before}
                afterImage={img.after}
                aspectRatio="h-full w-full"
                beforeLabel="Original"
                afterLabel="Enhanced"
              />
              <div className="absolute inset-0 bg-linear-to-t from-obsidian via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover/item:translate-y-0 opacity-0 group-hover/item:opacity-100 transition-all duration-500 pointer-events-none">
                <h3 className="text-2xl font-serif italic mb-2">{img.title}</h3>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-mindspark-cyan" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/60">Editorial Grade</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface FooterProps {
  onAboutClick: () => void;
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onAboutClick, onContactClick }) => {
  const [showProcessInfo, setShowProcessInfo] = useState(false);

  return (
    <footer className="py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Logo size="md" />
              <span className="font-serif text-2xl font-bold tracking-tight">MindSpark</span>
            </div>
            <p className="text-white/50 max-w-sm leading-relaxed mb-8">
              The Digital Darkroom of the Future. We repair the cracks of time and engineer the identities of tomorrow with the precision of AI.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 italic">Services</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li><a href="#restoration" className="hover:text-mindspark-cyan transition-colors">Heritage Revival</a></li>
              <li><a href="#executive" className="hover:text-mindspark-cyan transition-colors">Executive Suite</a></li>
              <li><a href="#glamour" className="hover:text-mindspark-cyan transition-colors">Glamour Studio</a></li>
              <li><a href="#" className="hover:text-mindspark-cyan transition-colors">Custom Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 italic">Company</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li>
                <button 
                  onClick={onAboutClick}
                  className="hover:text-mindspark-cyan transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setShowProcessInfo(true)}
                  className="hover:text-mindspark-cyan transition-colors cursor-pointer"
                >
                  Process
                </button>
              </li>
              <li><a href="#" className="hover:text-mindspark-cyan transition-colors">Pricing</a></li>
              <li>
                <button 
                  onClick={onContactClick}
                  className="hover:text-mindspark-cyan transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-white/20">
          <p>© 2026 MindSpark Identity Services. A Division of MindSpark AI.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Process Info Modal */}
      <AnimatePresence>
        {showProcessInfo && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowProcessInfo(false)}
              className="absolute inset-0 bg-obsidian/90 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-charcoal border border-white/10 p-8 rounded-[32px] shadow-2xl"
            >
              <button 
                onClick={() => setShowProcessInfo(false)}
                className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-full transition-colors text-white/40 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-2xl font-serif italic mb-6">Our Process</h3>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  At MindSpark, we pride ourselves on precision and quality. 
                  Please note that there is a <span className="text-mindspark-cyan font-bold">72-hour turnaround</span> once your photos are emailed and uploaded.
                </p>
                <p>
                  Our team will contact you to review the photos online through our secure portal.
                </p>
                <p>
                  Once you have viewed and approved the final results, we will release the high-resolution files to you for immediate download.
                </p>
              </div>
              <button 
                onClick={() => setShowProcessInfo(false)}
                className="mt-8 w-full gradient-bg py-3 rounded-xl text-obsidian font-bold hover:opacity-90 transition-opacity"
              >
                Understood
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};
