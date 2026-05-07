import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Quote, Star, ArrowRight } from 'lucide-react';

const Testimonials = ({ onAction }) => {
  const [selected, setSelected] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Chinedu Okoro",
      location: "Lagos",
      text: "I had already given up on trading completely after losing money back to back. A friend introduced me to Dupoin Market. Their support team was very patient with me. they really tried! They brushed me up well and today I'm making good profit. I'm grateful.",
      color: "from-blue-500/20",
    },
    {
      id: 2,
      name: "Aisha Bello",
      location: "Abuja",
      text: "I used to make profit one week and lose everything the next. It was very frustrating. Since I joined Dupoin, their AI has helped me stay disciplined. My trading is now much more consistent and my account is growing steadily.",
      color: "from-[#00d1ff]/20",
    },
    {
      id: 3,
      name: "Emeka Nwosu",
      location: "Ogun State",
      text: "To be honest, I didn't believe in automated trading at all. I thought it was all scam. But Dupoin changed my mind. Their support explained everything clearly and the AI is actually delivering results. I'm now trading confidently.",
      color: "from-purple-500/20",
    },
    {
      id: 4,
      name: "Fatima Adeyemi",
      location: "Ibadan",
      text: "Before Dupoin, I used to sit in front of the chart from morning till night. Now their AI handles the trading very well. I only check my phone once in a while. I can finally spend time with my family and still make money.",
      color: "from-emerald-500/20",
    },
    {
      id: 5,
      name: "Tunde Adebayo",
      location: "Port Harcourt",
      text: "I was almost depressed because of my trading losses. Dupoin support encouraged me and their system showed me the right way. Now I smile every time I open my trading account. This is the best decision I've made this year.",
      color: "from-orange-500/20",
    },
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
            Testimonies  <span className="text-[#00d1ff]">of Successful</span> Traders 
          </motion.h2>
          
          <motion.button
            onClick={onAction}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 md:px-10 py-4 bg-[#00d1ff] text-black font-bold rounded-full flex items-center gap-2 mx-auto shadow-[0_0_20px_rgba(0,209,255,0.3)] active:scale-95"
          >
            <span>Get Started</span>
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
                  <p className="text-[#00d1ff] text-xs uppercase tracking-[0.2em] font-semibold mt-1">{item.location}</p>
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
                "{selected.text}"
              </p>
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-tr from-[#00d1ff] to-blue-600 flex items-center justify-center text-black font-black text-4xl">
                  {selected.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">{selected.name}</h4>
                  <p className="text-[#00d1ff] uppercase tracking-widest text-sm mt-1">{selected.location}</p>
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