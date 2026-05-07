import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const FAQ = ({ onAction }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Do i need prior knowledge?",
      answer: " No we will train you till you are competent to start trading"
    },
    {
      question: "What if i am too busy to Trade?",
      answer: "We have automated solutions you can choose from to help you still achieve success in trading."
    },
    {
      question: "What is the risk involved in trading with you?",
      answer: "we are a  multi-regulated and multi-award winning broker which means all your trading activities are safe and confidential and our system and training are set to help you manage the risk of trading properly without any issues."
    },
    {
      question: "how can i verify my account?",
      answer: "just use any valid ID or speak to your account specialist to assist you"
    },
    {
      question: "How much can i start with?",
      answer: "As low as 10 USD which is 13,000 naira."
    }
  ];

  return (
    <section id="faq" className="py-10 md:py-14 lg:py-16 bg-[#060b13] relative">
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
            Everything you need to know before getting started
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
            Get Started
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