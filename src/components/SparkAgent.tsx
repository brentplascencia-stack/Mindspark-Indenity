import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Mic, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

export const SparkAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Do you have a cherished memory that needs reviving, or are you looking to own the boardroom with a new headshot?" }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      let botResponse = "That sounds like a great project! Our AI specialists can certainly help with that.";
      if (userMsg.toLowerCase().includes('headshot') || userMsg.toLowerCase().includes('linkedin')) {
        botResponse = "Our Executive Suite is perfect for that. We can swap your attire and engineer a professional high-rise office background instantly.";
      } else if (userMsg.toLowerCase().includes('old') || userMsg.toLowerCase().includes('restore')) {
        botResponse = "Heritage Revival is our specialty. We can repair cracks, remove distortion, and add cinematic color to your cherished memories.";
      }
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-80 sm:w-96 h-[500px] bg-charcoal border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-bottom border-white/10 bg-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Logo size="md" />
                <div>
                  <h3 className="font-serif font-bold text-lg leading-none">Spark Agent</h3>
                  <span className="text-[10px] uppercase tracking-widest text-mindspark-cyan font-bold">AI Identity Specialist</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-mindspark-cyan text-obsidian font-medium rounded-tr-none' 
                      : 'bg-white/5 border border-white/10 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-white/5">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about your identity..."
                  className="flex-1 bg-obsidian border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-mindspark-cyan/50 transition-colors"
                />
                <button 
                  onClick={handleSend}
                  className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center text-obsidian hover:opacity-90 transition-opacity"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-3 flex items-center justify-center gap-4">
                 <button className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-white/40 hover:text-mindspark-cyan transition-colors">
                   <Mic className="w-3 h-3" />
                   Live Consult
                 </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-charcoal border border-white/10 rounded-2xl shadow-[0_0_30px_rgba(0,242,255,0.3)] flex items-center justify-center hover:scale-105 transition-transform group overflow-hidden"
      >
        <Logo size="lg" className="group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
};
