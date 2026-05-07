import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserPlus, ShieldCheck, Headphones, Wallet, 
  ArrowRight 
} from 'lucide-react';

const About = ({ onAction }) => {
  
  const slowFadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const steps = [
    { step: "01", icon: <UserPlus />, title: "Register Account", desc: "Start your journey by creating your secure trading profile." },
    { step: "02", icon: <ShieldCheck />, title: "Verify Instantly", desc: "Complete our streamlined verification process in under 2 minutes." },
    { step: "03", icon: <Headphones />, title: "Dedicated Support", desc: "Get a personalized strategy call from your account manager." },
    { step: "04", icon: <Wallet />, title: "Start Scaling", desc: "Fund and trade with as little as 10 USD to begin your progress." }
  ];

  return (
    <section id="about" className="py-20 md:py-24 bg-[#060b13] overflow-hidden border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Header - More Compact */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slowFadeUp}
            className="inline-block px-4 py-1.5 rounded-full border border-[#00d1ff]/20 bg-[#00d1ff]/5 text-[#00d1ff] text-[10px] font-bold mb-6 tracking-[0.3em] uppercase"
          >
            The Intelligence Era
          </motion.div>
          
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            variants={slowFadeUp}
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight"
          >
            STOP STRUGGLING ALONE. 
            <br />
            <span className="text-[#00d1ff]">Lets Hold your hands to success.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="max-w-3xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed font-light"
          >
            With over 30 years of combined market experience, we have helped over 5,000 traders 
            attain real results through free education, automated services, and direct guidance.
          </motion.p>
        </div>

        {/* The 4 Grid Step Box - Compact & Responsive */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-[#00d1ff]/30 transition-all duration-500 overflow-hidden"
              >
                {/* Large Background Number */}
                <span className="absolute -top-2 -right-2 text-7xl font-black text-[#00d1ff]/5 group-hover:text-[#00d1ff]/10 transition-colors">
                  {item.step}
                </span>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#00d1ff]/10 flex items-center justify-center text-[#00d1ff] mb-6 group-hover:shadow-[0_0_20px_rgba(0,209,255,0.3)] transition-all duration-500">
                    {React.cloneElement(item.icon, { size: 28 })}
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3 text-white group-hover:text-[#00d1ff] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <button 
            onClick={onAction}
            className="group relative flex items-center gap-4 px-10 py-5 rounded-full bg-[#00d1ff] text-black font-black text-sm tracking-[0.2em] uppercase overflow-hidden hover:shadow-[0_0_30px_rgba(0,209,255,0.4)] active:scale-95 transition-all"
          >
            <span className="relative z-10">Get Started</span>
            <ArrowRight className="relative z-10 group-hover:translate-x-1.5 transition-transform" size={20} />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default About;