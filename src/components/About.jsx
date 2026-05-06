import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, Zap, ShieldCheck, BarChart3, 
  UserPlus, Settings, PlayCircle, Rocket,
  ArrowRight 
} from 'lucide-react';

const About = ({ onAction }) => {
  
  const slowFadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const advantages = [
    { icon: <Cpu />, title: "Neural Precision", desc: "Our AI processes millions of data points per second with surgical accuracy." },
    { icon: <Zap />, title: "Ultra-Low Latency", desc: "Execute trades at the speed of thought with our high-frequency infrastructure." },
    { icon: <ShieldCheck />, title: "Risk Shield", desc: "Adaptive algorithms that pivot instantly to protect your capital in volatility." },
    { icon: <BarChart3 />, title: "Predictive Analytics", desc: "Identify market shifts before they happen using deep-learning sentiment analysis." }
  ];

  const steps = [
    { step: "01", icon: <UserPlus />, title: "Join the Elite", desc: "Create your institutional-grade account in under 2 minutes." },
    { step: "02", icon: <Settings />, title: "Define Strategy", desc: "Select your risk appetite and asset classes with a single tap." },
    { step: "03", icon: <PlayCircle />, title: "Activate Bot", desc: "Deploy your automated assistant to the global markets." },
    { step: "04", icon: <Rocket />, title: "Scale Wealth", desc: "Monitor real-time growth while the AI handles the heavy lifting." }
  ];

  return (
    <section id="about" className="py-20 md:py-28 lg:py-32 bg-[#060b13] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* AI Insight Header */}
        <div className="text-center mb-20 md:mb-28 lg:mb-32">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slowFadeUp}
            className="inline-block px-5 py-2 rounded-full border border-[#00d1ff]/20 bg-[#00d1ff]/5 text-[#00d1ff] text-xs font-bold mb-8 tracking-[0.3em] uppercase"
          >
            The Intelligence Era
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
            variants={slowFadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-[1.1]"
          >
            A Soul of Silicon. <br />
            <span className="text-[#00d1ff]">A Mind for Markets.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.8 }}
            className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed italic font-light px-4"
          >
            "Beyond lines of code lies a digital consciousness designed to out-think, out-pace, and out-perform. 
            It doesn't sleep, it doesn't fear, and it never hesitates. It simply wins."
          </motion.p>
        </div>

        {/* Advantage Grid */}
        <div className="mb-20 md:mb-32 lg:mb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {advantages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 1.5, 
                  delay: index * 0.2,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                whileHover={{ 
                  y: -12, 
                  transition: { duration: 0.6, ease: "easeOut" } 
                }}
                className="group relative p-8 md:p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-[#00d1ff]/30 transition-colors duration-700"
              >
                <div className="text-[#00d1ff] mb-8 w-14 h-14 flex items-center justify-center rounded-2xl bg-[#00d1ff]/10 group-hover:scale-110 transition-transform duration-700">
                  {React.cloneElement(item.icon, { size: 28 })}
                </div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-500 text-base leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Steps Grid */}
        <div className="relative mb-20 md:mb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, delay: index * 0.3 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="mb-8 relative">
                  <span className="absolute -top-6 -left-4 text-8xl font-black text-[#00d1ff]/5 select-none">
                    {item.step}
                  </span>
                  <div className="w-20 h-20 rounded-3xl rotate-12 border border-[#00d1ff]/20 bg-[#00d1ff]/5 flex items-center justify-center text-[#00d1ff] hover:rotate-0 transition-all duration-1000">
                    <div className="-rotate-12">{React.cloneElement(item.icon, { size: 32 })}</div>
                  </div>
                </div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-gray-500 leading-relaxed max-w-[260px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center px-4"
        >
          <button 
            onClick={onAction}
            className="group relative flex items-center gap-4 px-10 md:px-12 py-5 rounded-full bg-transparent border border-[#00d1ff]/50 text-[#00d1ff] font-bold text-base md:text-lg tracking-[0.2em] uppercase overflow-hidden hover:text-black active:scale-95 transition-all"
          >
            <span className="relative z-10">Initialize Account</span>
            <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" size={24} />
            
            <div className="absolute inset-0 bg-[#00d1ff] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.22, 1, 0.36, 1]" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default About;