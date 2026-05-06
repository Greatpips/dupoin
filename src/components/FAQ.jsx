import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const FAQ = ({ onAction }) => { // 1. Accept the global trigger prop
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How does the AI handle market volatility?",
      answer: "The system uses real-time liquidity analysis to detect high-impact news events and volatility spikes. It automatically adjusts risk parameters or pauses trading to protect your capital during 'black swan' events."
    },
    {
      question: "Do I need prior trading experience?",
      answer: "Not at all. While the AI is built on professional-grade logic, the interface is designed for simplicity. We provide a step-by-step 'plug-and-play' setup that gets you running in under 10 minutes."
    },
    {
      question: "What is the average risk-to-reward ratio?",
      answer: "Our core strategy targets a minimum of 1:2 or 1:3 RR. The AI is programmed to cut losses early and let winning trades run using a proprietary trailing stop-loss algorithm."
    },
    {
      question: "Can I use the AI on multiple accounts?",
      answer: "Yes, our 'Pro' and 'Enterprise' tiers allow you to link multiple MT4/MT5 or C-Trader accounts simultaneously, with synchronized execution across all of them."
    },
    {
      question: "Is my capital safe with the AI?",
      answer: "The AI never has direct access to withdraw your funds. It only executes trades via API on your chosen brokerage. You maintain 100% control over your capital at all times."
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#060b13] relative">
      <div className="max-w-[900px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Common <span className="text-[#00d1ff]">Questions</span>
          </motion.h2>
          <p className="text-gray-400">Everything you need to know about the future of trading.</p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/5 rounded-[2rem] bg-white/[0.02] overflow-hidden"
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-white/[0.03] transition-colors"
              >
                <span className="text-lg md:text-xl font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 ${activeIndex === index ? 'rotate-180 bg-[#00d1ff]' : ''}`}>
                  {activeIndex === index ? (
                    <Minus size={18} className="text-black" />
                  ) : (
                    <Plus size={18} className="text-white" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-8 pb-8 text-gray-400 leading-relaxed text-lg border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Final Register Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button 
            onClick={onAction} // 2. Final trigger connected here
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#00d1ff] text-black font-black text-xl rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(0,209,255,0.2)]"
          >
            Start Your Journey
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-6 text-gray-500 text-sm tracking-widest uppercase">
            Limited slots available for the next session
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;