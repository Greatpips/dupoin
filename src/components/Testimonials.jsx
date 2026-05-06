import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Quote, Star, ArrowRight } from 'lucide-react';

const Testimonials = ({ onAction }) => { // 1. Accept the global trigger prop
  const [selected, setSelected] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Day Trader",
      text: "The AI's ability to spot liquidity sweeps before they happen is actually insane. It's like having a second pair of institutional eyes.",
      color: "from-blue-500/20",
    },
    {
      id: 2,
      name: "Marcus Vaught",
      role: "Software Engineer",
      text: "I've tried every bot on the market. This is the first one where the risk-to-reward ratio actually stays consistent during high volatility.",
      color: "from-[#00d1ff]/20",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Forex Specialist",
      text: "Finally, an AI that doesn't just over-trade. It waits for the perfect confluence. My drawdown has never been lower.",
      color: "from-purple-500/20",
    },
    {
      id: 4,
      name: "Jordan Smith",
      role: "Portfolio Manager",
      text: "The integration is seamless. It took me 10 minutes to set up, and it's been running clean ever since. Professional grade tech.",
      color: "from-emerald-500/20",
    },
    {
      id: 5,
      name: "David K.",
      role: "Full-time Trader",
      text: "I was skeptical about AI in trading, but the backtesting data matched the live results perfectly. This is the future.",
      color: "from-orange-500/20",
    }
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonial" className="py-24 bg-[#060b13] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00d1ff]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 text-white"
          >
            The <span className="text-[#00d1ff]">Community</span> Speaks
          </motion.h2>
          
          <motion.button 
            onClick={onAction} // 2. Connected to the global form trigger
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-4 bg-[#00d1ff] text-black font-bold rounded-full transition-all flex items-center gap-2 mx-auto shadow-[0_0_20px_rgba(0,209,255,0.3)]"
          >
            <span>Register Now</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Slower Infinite Loop */}
        <div className="relative flex overflow-hidden py-10 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <motion.div 
            className="flex gap-6"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{ 
              duration: 50, 
              ease: "linear", 
              repeat: Infinity 
            }}
          >
            {duplicatedTestimonials.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelected(item)}
                className={`flex-shrink-0 w-[380px] p-10 rounded-[3rem] bg-gradient-to-br ${item.color} to-transparent border border-white/5 backdrop-blur-md cursor-pointer hover:border-[#00d1ff]/40 transition-all duration-500 group relative`}
              >
                <Quote className="absolute top-8 right-10 text-white/5 group-hover:text-[#00d1ff]/20 transition-colors" size={50} />
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#00d1ff] text-[#00d1ff]" />)}
                </div>
                <p className="text-gray-300 text-lg mb-10 leading-relaxed font-light">"{item.text}"</p>
                <div>
                  <h4 className="text-white font-bold text-xl tracking-tight">{item.name}</h4>
                  <p className="text-[#00d1ff] text-xs uppercase tracking-[0.2em] font-semibold mt-1">{item.role}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Pop-up Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-2xl w-full bg-[#0a1019] border border-white/10 rounded-[3.5rem] p-12 md:p-20 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelected(null)} className="absolute top-10 right-10 text-white/20 hover:text-white transition-colors">
                <X size={32} />
              </button>

              <Quote className="text-[#00d1ff] mb-10" size={60} />
              <p className="text-2xl md:text-4xl text-white font-medium leading-snug mb-12">
                {selected.text}
              </p>
              
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#00d1ff] to-blue-600 flex items-center justify-center text-black font-black text-3xl">
                  {selected.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">{selected.name}</h4>
                  <p className="text-[#00d1ff] uppercase tracking-widest text-sm">{selected.role}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;