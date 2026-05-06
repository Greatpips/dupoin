import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Quote, Star, ArrowRight } from 'lucide-react';

const Testimonials = ({ onAction }) => {
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
    <section id="testimonial" className="py-20 md:py-28 lg:py-32 bg-[#060b13] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00d1ff]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
          >
            The <span className="text-[#00d1ff]">Community</span> Speaks
          </motion.h2>
          
          <motion.button 
            onClick={onAction}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 md:px-10 py-4 bg-[#00d1ff] text-black font-bold rounded-full flex items-center gap-2 mx-auto shadow-[0_0_20px_rgba(0,209,255,0.3)] active:scale-95"
          >
            <span>Register Now</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Infinite Scrolling Marquee */}
        <div className="relative flex overflow-hidden py-8 md:py-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div 
            className="flex gap-4 md:gap-6"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{ 
              duration: 45, 
              ease: "linear", 
              repeat: Infinity 
            }}
          >
            {duplicatedTestimonials.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelected(item)}
                className={`flex-shrink-0 w-full max-w-[380px] sm:w-[360px] md:w-[380px] p-8 md:p-10 rounded-[3rem] 
                  bg-gradient-to-br ${item.color} to-transparent border border-white/5 backdrop-blur-md 
                  cursor-pointer hover:border-[#00d1ff]/40 transition-all duration-500 group relative`}
              >
                <Quote className="absolute top-8 right-10 text-white/5 group-hover:text-[#00d1ff]/20 transition-colors" size={50} />
                
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#00d1ff] text-[#00d1ff]" />
                  ))}
                </div>
                
                <p className="text-gray-300 text-[17px] leading-relaxed mb-10 font-light">
                  "{item.text}"
                </p>
                
                <div>
                  <h4 className="text-white font-bold text-xl">{item.name}</h4>
                  <p className="text-[#00d1ff] text-xs uppercase tracking-[0.2em] font-semibold mt-1">{item.role}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="max-w-2xl w-full bg-[#0a1019] border border-white/10 rounded-[3rem] md:rounded-[3.5rem] p-8 md:p-16 lg:p-20 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelected(null)} 
                className="absolute top-8 right-8 text-white/30 hover:text-white transition-colors"
              >
                <X size={36} />
              </button>

              <Quote className="text-[#00d1ff] mb-8 md:mb-10" size={60} />
              
              <p className="text-2xl md:text-3xl leading-tight text-white font-medium mb-12">
                {selected.text}
              </p>
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-tr from-[#00d1ff] to-blue-600 flex items-center justify-center text-black font-black text-4xl">
                  {selected.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">{selected.name}</h4>
                  <p className="text-[#00d1ff] uppercase tracking-widest text-sm mt-1">{selected.role}</p>
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