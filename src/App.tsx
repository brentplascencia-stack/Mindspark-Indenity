/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar, Hero } from './components/Hero';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ExecutiveSuite } from './components/ExecutiveSuite';
import { GlamourCarousel, Footer } from './components/GlamourCarousel';
import { SparkAgent } from './components/SparkAgent';
import { BookingModal } from './components/BookingModal';
import { motion, AnimatePresence } from 'motion/react';
import { History, Sparkles, X } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);
  const openAbout = () => setIsAboutOpen(true);
  const openContact = () => setIsContactOpen(true);

  return (
    <div className="min-h-screen bg-obsidian selection:bg-mindspark-cyan selection:text-obsidian">
      <Navbar onBookSession={openBooking} onAboutClick={openAbout} />
      
      <main>
        <Hero onBookSession={openBooking} />

        {/* Heritage Revival Section */}
        <section id="restoration" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
                <History className="w-3 h-3 text-mindspark-cyan" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/60">Heritage Revival</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif mb-8 leading-tight italic">
                We repair the <span className="gradient-text">cracks of time</span> <br />
                <span className="text-3xl md:text-4xl block mt-4 opacity-80">with the precision of AI.</span>
              </h2>
              <p className="text-xl text-white/60 leading-relaxed max-w-2xl mx-auto">
                Our Heritage Revival service uses cinematic colorization and AI precision to restore torn, black-and-white family portraits into crisp masterpieces.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Example 1 (New) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full max-w-md mx-auto"
            >
              <BeforeAfterSlider 
                beforeImage="https://lh3.googleusercontent.com/d/1Mt0C3lrK5UYx5Vob0xSrQKSfZdF_BmGN"
                afterImage="https://lh3.googleusercontent.com/d/1SlgCyyVbLLyCP8DjhRk-RGweFbvz2Qlu"
                beforeLabel="Original Damage"
                afterLabel="AI Restoration"
                aspectRatio="aspect-[3/4]"
              />
              <p className="mt-6 text-center text-white/40 text-sm font-medium uppercase tracking-widest">Structural Repair & Colorization</p>
            </motion.div>

            {/* Example 2 (Existing) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full max-w-md mx-auto"
            >
              <BeforeAfterSlider 
                beforeImage="https://lh3.googleusercontent.com/d/1RlDjRbpJ2fHgjlUGSSKpO6LJLeaNQ6Uz"
                afterImage="https://lh3.googleusercontent.com/d/1GnBsz4aDroq6s7-GJvOtc0XZ8jXMnybj"
                beforeLabel="1942 Heritage"
                afterLabel="Cinematic Revival"
                aspectRatio="aspect-[3/4]"
              />
              <p className="mt-6 text-center text-white/40 text-sm font-medium uppercase tracking-widest">Clarity & Depth Enhancement</p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <button 
              onClick={openBooking}
              className="gradient-bg px-12 py-6 rounded-2xl text-xl font-bold text-obsidian hover:scale-105 transition-transform shadow-[0_0_50px_rgba(0,242,255,0.2)]"
            >
              Restore a Memory
            </button>
          </motion.div>
        </section>

        <ExecutiveSuite />
        
        <GlamourCarousel onAboutClick={openAbout} onContactClick={openContact} />
        
        {/* Sales Philosophy Section */}
        <section className="py-32 px-6 text-center relative overflow-hidden">
           <div className="absolute inset-0 z-0 opacity-20">
             <div className="absolute top-0 left-1/4 w-1 h-full bg-linear-to-b from-transparent via-mindspark-cyan to-transparent" />
             <div className="absolute top-0 right-1/4 w-1 h-full bg-linear-to-b from-transparent via-mindspark-magenta to-transparent" />
           </div>
           
           <div className="max-w-4xl mx-auto relative z-10">
             <h2 className="text-5xl md:text-8xl font-serif mb-12 italic leading-none">
               A first impression <br />
               is a <span className="gradient-text">Spark.</span>
             </h2>
             <p className="text-2xl text-white/60 mb-12 font-light">
               In the digital age, your image is your introduction. Make it unforgettable.
             </p>
             <button 
               onClick={openBooking}
               className="gradient-bg px-12 py-6 rounded-3xl text-xl font-bold text-obsidian hover:scale-110 transition-transform shadow-[0_0_50px_rgba(0,242,255,0.3)]"
             >
               Ignite Your Identity Now
             </button>
           </div>
        </section>
      </main>

      <Footer onAboutClick={openAbout} onContactClick={openContact} />
      <SparkAgent />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      
      {/* About Us Modal */}
      <AnimatePresence>
        {isAboutOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAboutOpen(false)}
              className="absolute inset-0 bg-obsidian/90 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-charcoal border border-white/10 p-8 md:p-12 rounded-[40px] shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button 
                onClick={() => setIsAboutOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-full transition-colors text-white/40 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-4xl md:text-5xl font-serif mb-8 italic gradient-text">AI Photography</h2>
              <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                <p className="text-white font-medium italic text-xl">Some memories deserve to live on.</p>
                <p>
                  At MindSpark, we use AI photography to restore the past and capture the present. We carefully rejuvenate old photos by removing cracks, repairing distortion, and restoring clarity — bringing meaningful moments back to life for future generations.
                </p>
                <p>
                  We also create professional business and LinkedIn portraits that help you show up with confidence, credibility, and a polished presence. In addition, we capture modern glamour and family photography that celebrates connection, milestones, and lasting memories.
                </p>
                <p>
                  At MindSpark, photography is more than an image — it’s how memories are preserved, confidence is built, and stories are remembered.
                </p>
              </div>
              <button 
                onClick={() => setIsAboutOpen(false)}
                className="mt-10 w-full gradient-bg py-4 rounded-2xl text-obsidian font-bold hover:opacity-90 transition-opacity"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Contact Us Modal */}
      <AnimatePresence>
        {isContactOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactOpen(false)}
              className="absolute inset-0 bg-obsidian/90 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-charcoal border border-white/10 p-8 rounded-[32px] shadow-2xl text-center"
            >
              <button 
                onClick={() => setIsContactOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-full transition-colors text-white/40 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h3 className="text-3xl font-serif italic mb-6">Contact Us</h3>
              <p className="text-white/60 mb-8">
                Have questions or ready to start your transformation? Reach out to us directly.
              </p>
              <a 
                href="mailto:Brentp@futuremindspark.net"
                className="block w-full bg-white/5 border border-white/10 py-4 rounded-2xl text-mindspark-cyan font-bold text-lg hover:bg-white/10 transition-colors mb-6"
              >
                Brentp@futuremindspark.net
              </a>
              <button 
                onClick={() => setIsContactOpen(false)}
                className="w-full gradient-bg py-4 rounded-2xl text-obsidian font-bold hover:opacity-90 transition-opacity"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
