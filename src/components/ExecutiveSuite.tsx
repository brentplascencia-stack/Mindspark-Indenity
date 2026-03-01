import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export const ExecutiveSuite: React.FC = () => {
  const transformations = [
    {
      id: 1,
      before: "https://lh3.googleusercontent.com/d/1wzIRYGAah0OMIfxuD4ZGRfmOIR4uAiyo",
      after: "https://lh3.googleusercontent.com/d/1uIwAwVLMTBPAg1KqsNUIX70RJ6yIW7cX",
      label: "Tech Founder"
    },
    {
      id: 2,
      before: "https://lh3.googleusercontent.com/d/1_3BZAItRPUcpWqMtnPliH0l5welvjxfg",
      after: "https://lh3.googleusercontent.com/d/1mPEDzAUEnhMc6CfgGAodWUkvHWI12ZiX",
      label: "Legal Partner",
      fit: "contain" as const
    },
    {
      id: 3,
      before: "https://lh3.googleusercontent.com/d/190EWQDz0rzY-Zm4fa_RfY8PWcRzcwg3r",
      after: "https://lh3.googleusercontent.com/d/1ZYKb918eJV-JrYM3jioo9rWPGECJBRzG",
      label: "Creative Producer"
    }
  ];

  return (
    <section id="executive" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-serif mb-6 italic">The Executive Suite</h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Engineering professional branding by changing attire to bespoke suits and placing you in meticulously crafted office environments. Your LinkedIn profile deserves more than a selfie.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {transformations.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              {/* After Image */}
              <img 
                src={item.after} 
                alt={item.label} 
                className={`absolute inset-0 w-full h-full ${item.fit === 'contain' ? 'object-contain p-4' : 'object-cover'} transition-transform duration-700 group-hover:scale-110`}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              
              {/* Before Thumbnail Overlay */}
              <div className="absolute top-2 left-2 w-20 aspect-[3/4] rounded-xl overflow-hidden border-2 border-white/20 shadow-2xl z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform">
                <img 
                  src={item.before} 
                  alt="Original" 
                  className="w-full h-full object-cover grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-[8px] font-bold uppercase tracking-tighter">Original</span>
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-obsidian via-transparent to-transparent opacity-60" />
              
              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-serif mb-1 italic">{item.label}</h3>
                <p className="text-xs text-white/50 uppercase tracking-widest font-bold">Attire Swap • Environment Engineering</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
