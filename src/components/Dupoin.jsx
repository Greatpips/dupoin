import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, BarChart3, ArrowRight } from 'lucide-react';

// Assets
import dupLogo from '../assets/dup.svg';
import award1 from '../assets/home-awards-1.svg';
import award2 from '../assets/home-awards-2.svg';
import award3 from '../assets/home-awards-3.svg';
import award4 from '../assets/home-awards-4.svg';
import bestAward from '../assets/best-award.jpeg';

const Dupoin = ({ onAction }) => {
  const advantages = [
    { title: "Institutional Security", desc: "Military-grade encryption and cold-storage protocols.", icon: <ShieldCheck className="text-[#00d1ff]" size={28} /> },
    { title: "Ultra-Low Latency", desc: "Direct market access with execution under 5ms.", icon: <Zap className="text-[#00d1ff]" size={28} /> },
    { title: "Global Liquidity", desc: "Deep integration with top-tier liquidity providers.", icon: <Globe className="text-[#00d1ff]" size={28} /> },
    { title: "Advanced Analytics", desc: "Real-time visualization and backtesting tools.", icon: <BarChart3 className="text-[#00d1ff]" size={28} /> }
  ];

  const standardAwards = [
    { src: award1, label: "Most Trusted Broker", year: "2025" },
    { src: award2, label: "Best Affiliate Broker", year: "2025" },
    { src: award3, label: "Most Transparent", year: "2025" },
    { src: award4, label: "Best Innovation", year: "2024" }
  ];

  const slowTransition = { duration: 1.8, ease: [0.22, 1, 0.36, 1] };

  return (
    <section id="dupoin" className="py-20 md:py-28 lg:py-32 bg-[#060b13] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Brand Intro */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={slowTransition}
            className="lg:w-1/3 flex justify-center lg:justify-start"
          >
            <img src={dupLogo} alt="Duopin Logo" className="w-40 md:w-48 lg:w-56 opacity-80" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ...slowTransition, delay: 0.2 }}
            className="lg:w-2/3 text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Global Excellence in <span className="text-[#00d1ff]">Execution.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We're proud to be recognized by a number of key award bodies around the world for our work in delivering the best customer service, value, and pricing for our clients.
            </p>
          </motion.div>
        </div>

        {/* Awards Showcase */}
        <div className="mb-20 md:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Big Award */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={slowTransition}
              className="lg:col-span-4 relative group"
            >
              <div className="absolute -inset-1 bg-[#00d1ff]/20 rounded-[2.5rem] blur-2xl group-hover:bg-[#00d1ff]/30 transition-all duration-1000" />
              <div className="relative bg-[#0a1019] border border-white/10 rounded-[2.5rem] p-3 overflow-hidden shadow-2xl">
                <img 
                  src={bestAward} 
                  alt="Duopin Recognition" 
                  className="w-full h-auto rounded-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000" 
                />
              </div>
            </motion.div>

            {/* Small Awards Grid */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {standardAwards.map((award, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...slowTransition, delay: 0.4 + (index * 0.1) }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative mb-5">
                    <img 
                      src={award.src} 
                      alt={award.label} 
                      className="w-20 md:w-28 lg:w-32 opacity-40 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" 
                    />
                  </div>
                  <h4 className="text-white text-xs font-bold leading-tight uppercase tracking-widest max-w-[130px]">
                    {award.label} <br/> 
                    <span className="text-[#00d1ff]">{award.year}</span>
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20 md:mb-24">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...slowTransition, delay: 0.6 + (index * 0.1) }}
              whileHover={{ y: -10 }}
              className="p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-[#00d1ff]/30 transition-all duration-500"
            >
              <div className="mb-6 bg-black/40 w-14 h-14 rounded-2xl flex items-center justify-center border border-white/5">
                {item.icon}
              </div>
              <h3 className="text-white font-bold mb-3 text-xl">{item.title}</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <button 
            onClick={onAction}
            className="group relative flex items-center gap-4 px-10 md:px-12 py-5 rounded-full bg-[#00d1ff] text-black font-bold text-lg md:text-xl uppercase tracking-widest overflow-hidden hover:shadow-[0_0_50px_rgba(0,209,255,0.3)] active:scale-95 transition-all"
          >
            <span className="relative z-10">Get Started</span>
            <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" size={24} strokeWidth={3} />
            
            <div className="absolute inset-0 bg-[#00a3cc] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          </button>
          
          
        </motion.div>

      </div>
    </section>
  );
};

export default Dupoin;