import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';

const Testimonials = ({ onAction }) => {
  const [selected, setSelected] = useState(null);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Chinedu Okoro",
      location: "Lagos, Nigeria",
      text: "I had already given up on trading completely after losing money back to back. A friend introduced me to Dupoin Market. Their support team was very patient with me. They really tried! They brushed me up well and today I'm making good profit. I'm grateful.",
    },
    {
      id: 2,
      name: "Aisha Bello",
      location: "Abuja, Nigeria",
      text: "I used to make profit one week and lose everything the next. It was very frustrating. Since I joined Dupoin, their AI has helped me stay disciplined. My trading is now much more consistent and my account is growing steadily.",
    },
    {
      id: 3,
      name: "Emeka Nwosu",
      location: "Ogun State, Nigeria",
      text: "To be honest, I didn't believe in automated trading at all. I thought it was all scam. But Dupoin changed my mind. Their support explained everything clearly and the AI is actually delivering results.",
    },
    {
      id: 4,
      name: "Fatima Adeyemi",
      location: "Ibadan, Nigeria",
      text: "Before Dupoin, I used to sit in front of the chart from morning till night. Now their AI handles the trading very well. I only check my phone once in a while. I can finally spend time with my family.",
    },
    {
      id: 5,
      name: "Tunde Adebayo",
      location: "Port Harcourt, Nigeria",
      text: "I was almost depressed because of my trading losses. Dupoin support encouraged me and their system showed me the right way. Now I smile every time I open my trading account.",
    },
  ];

  // Auto-rotate for Mobile
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMobileIndex((prev) => (prev + 1) % testimonials.length);
    }, 5200);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonial" className="py-12 md:py-16 lg:py-24 bg-[#060b13] relative overflow-hidden">
      {/* Trustpilot-inspired ambient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(0,182,122,0.15),transparent_50%)] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
         

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 text-white"
          >
            Real Stories. <span className="text-[#00b67a]">Real Success.</span>
          </motion.h2>
          
          <motion.button
            onClick={onAction}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 md:px-10 py-4 bg-[#00b67a] text-white font-bold rounded-lg flex items-center gap-2 mx-auto shadow-[0_10px_30px_rgba(0,182,122,0.2)] transition-all"
          >
            <span>Start Trading Now</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* ====================== DESKTOP MARQUEE ====================== */}
        <div className="hidden md:block relative overflow-hidden py-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{
              duration: 50,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelected(item)}
                className="flex-shrink-0 w-[400px] bg-[#0c141f] border border-white/5 hover:border-[#00b67a]/40 rounded-xl p-8 cursor-pointer transition-all duration-300 group shadow-2xl"
              >
                {/* Trustpilot Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="bg-[#00b67a] p-1 rounded-sm">
                        <Star size={14} className="fill-white text-white" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    <ShieldCheck size={14} className="text-[#00b67a]" />
                    Verified Review
                </div>

                <p className="text-gray-300 text-[16px] leading-relaxed mb-8 line-clamp-4">
                  "{item.text}"
                </p>

                <hr className="border-white/5 mb-6" />

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1c2633] border border-white/10 flex items-center justify-center text-[#00b67a] font-bold">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{item.name}</h4>
                    <p className="text-gray-500 text-xs">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ====================== MOBILE AUTO-ROTATING ====================== */}
        <div className="md:hidden relative py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMobileIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0c141f] border border-white/10 rounded-2xl p-8 min-h-[400px] flex flex-col shadow-2xl"
              onClick={() => setSelected(testimonials[currentMobileIndex])}
            >
              <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="bg-[#00b67a] p-1 rounded-sm">
                        <Star size={16} className="fill-white text-white" />
                    </div>
                  ))}
              </div>
              
              <div className="flex items-center gap-2 mb-6 text-[10px] font-bold text-[#00b67a] uppercase">
                <CheckCircle size={14} />
                Verified Experience
              </div>

              <p className="text-gray-200 text-[17px] italic leading-relaxed mb-10 flex-1">
                "{testimonials[currentMobileIndex].text}"
              </p>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                <div className="w-12 h-12 rounded-full bg-[#00b67a] flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[currentMobileIndex].name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-bold text-white uppercase tracking-tight">
                      {testimonials[currentMobileIndex].name}
                    </h4>
                    <p className="text-gray-500 text-xs">
                      {testimonials[currentMobileIndex].location}
                    </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-2xl w-full bg-[#0c141f] border border-[#00b67a]/30 rounded-2xl p-8 md:p-12 relative shadow-[0_0_50px_rgba(0,182,122,0.1)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
              >
                <X size={28} />
              </button>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="bg-[#00b67a] p-1.5 rounded-sm">
                    <Star size={20} className="fill-white text-white" />
                  </div>
                ))}
              </div>

              <p className="text-xl md:text-2xl font-medium text-gray-100 leading-relaxed mb-10">
                "{selected.text}"
              </p>

              <div className="flex items-center gap-5 pt-8 border-t border-white/5">
                <div className="w-14 h-14 rounded-full bg-[#00b67a] flex items-center justify-center text-2xl font-bold text-white">
                  {selected.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">{selected.name}</h4>
                  <p className="text-gray-500">{selected.location}</p>
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