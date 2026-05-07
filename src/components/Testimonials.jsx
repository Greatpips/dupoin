import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ArrowRight, CheckCircle } from 'lucide-react';

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
  }, []);

  return (
    <section id="testimonial" className="py-12 md:py-16 lg:py-20 bg-[#060b13] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00d1ff]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Original Header Text */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
          >
            Testimonies <span className="text-[#00d1ff]">of Successful</span> Traders 
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

        {/* ====================== DESKTOP + TABLET MARQUEE ====================== */}
        <div className="hidden md:block relative overflow-hidden py-8 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{
              duration: 45,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelected(item)}
                className="flex-shrink-0 w-[380px] bg-[#0a1019] border border-white/5 hover:border-[#00d1ff]/40 rounded-3xl p-8 cursor-pointer transition-all duration-500 group hover:-translate-y-2 hover:shadow-xl hover:shadow-[#00d1ff]/10"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-[#00d1ff] text-[#00d1ff]" />
                  ))}
                </div>

                <p className="text-gray-300 text-[17px] leading-relaxed mb-8">
                  "{item.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#00d1ff] to-cyan-500 flex items-center justify-center text-black font-bold">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-white">{item.name}</h4>
                      <CheckCircle size={16} className="text-[#00d1ff]" />
                    </div>
                    <p className="text-[#00d1ff] text-sm">{item.location}</p>
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="bg-[#0a1019] border border-white/5 rounded-3xl p-8 min-h-[420px] flex flex-col cursor-pointer"
              onClick={() => setSelected(testimonials[currentMobileIndex])}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={22} className="fill-[#00d1ff] text-[#00d1ff]" />
                ))}
              </div>

              <p className="text-gray-300 text-[17px] leading-relaxed mb-10 flex-1">
                "{testimonials[currentMobileIndex].text}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#00d1ff] to-cyan-500 flex items-center justify-center text-black font-bold text-xl">
                  {testimonials[currentMobileIndex].name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-white">
                      {testimonials[currentMobileIndex].name}
                    </h4>
                    <CheckCircle size={18} className="text-[#00d1ff]" />
                  </div>
                  <p className="text-[#00d1ff] text-sm">
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
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="max-w-2xl w-full bg-[#0a1019] border border-white/10 rounded-3xl p-8 md:p-14 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 text-white/40 hover:text-white"
              >
                <X size={32} />
              </button>

              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={26} className="fill-[#00d1ff] text-[#00d1ff]" />
                ))}
              </div>

              <p className="text-2xl md:text-3xl leading-tight text-white mb-12">
                "{selected.text}"
              </p>

              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00d1ff] to-cyan-500 flex items-center justify-center text-3xl font-bold text-black">
                  {selected.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white">{selected.name}</h4>
                  <p className="text-[#00d1ff]">{selected.location}</p>
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