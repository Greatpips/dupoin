import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const FAQ = ({ onAction }) => {
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
    <section id="faq" className="py-20 md:py-28 lg:py-32 bg-[#060b13] relative">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
          >
            Common <span className="text-[#00d1ff]">Questions</span>
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto">
            Everything you need to know about the future of trading.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4 md:space-y-5">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="border border-white/5 rounded-[2rem] bg-white/[0.02] overflow-hidden"
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-white/[0.03] transition-colors group"
              >
                <span className="text-lg md:text-xl font-semibold text-white pr-6 leading-tight">
                  {faq.question}
                </span>
                
                <div className={`flex-shrink-0 w-9 h-9 rounded-2xl border border-white/10 flex items-center justify-center transition-all duration-300 
                  ${activeIndex === index ? 'rotate-180 bg-[#00d1ff]' : 'group-hover:border-[#00d1ff]/30'}`}>
                  {activeIndex === index ? (
                    <Minus size={20} className="text-black" />
                  ) : (
                    <Plus size={20} className="text-white" />
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-6 md:px-8 pb-8 md:pb-10 text-gray-400 leading-relaxed text-[17px]">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <button 
            onClick={onAction}
            className="group relative inline-flex items-center gap-3 px-10 md:px-12 py-5 bg-[#00d1ff] text-black font-bold text-lg md:text-xl rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_20px_50px_rgba(0,209,255,0.25)]"
          >
            Start Your Journey
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
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