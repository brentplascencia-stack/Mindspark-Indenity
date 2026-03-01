import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface SlideData {
  before: string;
  after: string;
  header: string;
}

const slides: SlideData[] = [
  // Restoration (Heritage Revival)
  {
    before: "https://lh3.googleusercontent.com/d/1Mt0C3lrK5UYx5Vob0xSrQKSfZdF_BmGN",
    after: "https://lh3.googleusercontent.com/d/1SlgCyyVbLLyCP8DjhRk-RGweFbvz2Qlu",
    header: "Reviving History: From Faded to Flawless"
  },
  {
    before: "https://lh3.googleusercontent.com/d/1RlDjRbpJ2fHgjlUGSSKpO6LJLeaNQ6Uz",
    after: "https://lh3.googleusercontent.com/d/1GnBsz4aDroq6s7-GJvOtc0XZ8jXMnybj",
    header: "Reviving History: From Faded to Flawless"
  },
  // Executive AI Headshots
  {
    before: "https://lh3.googleusercontent.com/d/1wzIRYGAah0OMIfxuD4ZGRfmOIR4uAiyo",
    after: "https://lh3.googleusercontent.com/d/1uIwAwVLMTBPAg1KqsNUIX70RJ6yIW7cX",
    header: "Command the Room: The Boardroom Transformation"
  },
  {
    before: "https://lh3.googleusercontent.com/d/1_3BZAItRPUcpWqMtnPliH0l5welvjxfg",
    after: "https://lh3.googleusercontent.com/d/1mPEDzAUEnhMc6CfgGAodWUkvHWI12ZiX",
    header: "Command the Room: The Boardroom Transformation"
  },
  {
    before: "https://lh3.googleusercontent.com/d/190EWQDz0rzY-Zm4fa_RfY8PWcRzcwg3r",
    after: "https://lh3.googleusercontent.com/d/1ZYKb918eJV-JrYM3jioo9rWPGECJBRzG",
    header: "Command the Room: The Boardroom Transformation"
  },
  // The Glamour Studio
  {
    before: "https://lh3.googleusercontent.com/d/1or3PkASMmbnN9AO9KKHNHcX5YGEUhMio",
    after: "https://lh3.googleusercontent.com/d/1SwJLVR42B31SY5LSs79Iyp7Im52bXy9h",
    header: "Editorial Excellence: Unleash Your Star Power"
  },
  {
    before: "https://lh3.googleusercontent.com/d/1llmDHvz5fuKEeoAAEqNymeSl9uwfwdF_",
    after: "https://lh3.googleusercontent.com/d/1WRhFzgMaKztpdRDkc5OmLnRzhbdGsIKF",
    header: "Editorial Excellence: Unleash Your Star Power"
  },
  {
    before: "https://lh3.googleusercontent.com/d/1Fz6RWvtMnNSRjzlgGKrRFv4pnPxAwWK1",
    after: "https://lh3.googleusercontent.com/d/1vowYw53tI3ARoA4ERVJfUOQOIwBUHs4i",
    header: "Changing One Day At A Time"
  },
  {
    before: "https://lh3.googleusercontent.com/d/1SxGFwiBHBvw1UhnODMci8bU3qUFWnATH",
    after: "https://lh3.googleusercontent.com/d/18LRJQEDx_VA2dDNWzeEcN7ROp11BLvan",
    header: "Editorial Excellence: Unleash Your Star Power"
  },
  // Food Upgrade (Placeholder)
  {
    before: "https://picsum.photos/seed/food-before/1000/1000?grayscale",
    after: "https://picsum.photos/seed/food-after/1000/1000",
    header: "Crave-Worthy Perfection: A Feast for the Eyes"
  }
];

export const HeroSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanding, setIsExpanding] = useState(false);
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    const runSequence = async () => {
      // 1. Show Box (Before)
      setIsExpanding(false);
      setShowAfter(false);
      await new Promise(resolve => setTimeout(resolve, 1500));

      // 2. Start Expansion & Morph
      setIsExpanding(true);
      setShowAfter(true);
      await new Promise(resolve => setTimeout(resolve, 4000));

      // 3. Hold Full-Bleed (After)
      await new Promise(resolve => setTimeout(resolve, 2500));

      // 4. Next Slide
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    runSequence();
  }, [currentIndex]);

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative w-full h-full bg-obsidian overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Background Blur Effect */}
          <motion.div 
            className="absolute inset-0 z-0 opacity-20 blur-3xl"
            animate={{ 
              scale: isExpanding ? 1.5 : 1,
              background: isExpanding 
                ? 'radial-gradient(circle, var(--color-mindspark-magenta) 0%, transparent 70%)' 
                : 'radial-gradient(circle, var(--color-mindspark-cyan) 0%, transparent 70%)'
            }}
            transition={{ duration: 4 }}
          />

          {/* The Main Image Container (Box-to-Bleed) */}
          <motion.div
            className="relative z-10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            initial={{ 
              width: "50%", 
              height: "50%", 
              borderRadius: "32px",
              scale: 0.85
            }}
            animate={{ 
              width: isExpanding ? "100%" : "50%",
              height: isExpanding ? "100%" : "50%",
              borderRadius: isExpanding ? "0px" : "32px",
              scale: isExpanding ? 1 : 0.85
            }}
            transition={{ 
              duration: 4, 
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            {/* Before Image */}
            <motion.img
              src={currentSlide.before}
              alt="Original"
              className="absolute inset-0 w-full h-full object-contain"
              animate={{ opacity: showAfter ? 0 : 1 }}
              transition={{ duration: 3 }}
              referrerPolicy="no-referrer"
            />

            {/* After Image */}
            <motion.img
              src={currentSlide.after}
              alt="Enhanced"
              className="absolute inset-0 w-full h-full object-contain"
              initial={{ opacity: 0 }}
              animate={{ opacity: showAfter ? 1 : 0 }}
              transition={{ duration: 3 }}
              referrerPolicy="no-referrer"
            />

            {/* Overlay Gradient for Text Readability */}
            <div className="absolute inset-0 bg-linear-to-t from-obsidian/80 via-transparent to-transparent opacity-60" />
          </motion.div>

          {/* Header Overlay */}
          <div className="absolute bottom-24 left-0 right-0 z-20 text-center px-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ 
                opacity: isExpanding ? 1 : 0,
                scale: isExpanding ? 1 : 0.9,
                y: isExpanding ? 0 : 20
              }}
              transition={{ duration: 1.2, delay: 1.5 }}
            >
              <h2 className="text-2xl md:text-4xl font-serif italic leading-tight">
                <span className="gradient-text drop-shadow-[0_0_20px_rgba(0,242,255,0.3)]">
                  {currentSlide.header}
                </span>
              </h2>
            </motion.div>
          </div>

          {/* Progress Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
            {slides.map((_, i) => (
              <motion.div
                key={i}
                className="h-1.5 rounded-full bg-white/10 overflow-hidden"
                animate={{ width: i === currentIndex ? 48 : 12 }}
                transition={{ duration: 0.5 }}
              >
                {i === currentIndex && (
                  <motion.div 
                    className="h-full gradient-bg"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 8, ease: "linear" }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};


