import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import desktopHero from '../assets/desktop-hero.jpg';
import mobileHero from '../assets/mobile-hero.jpg';

// Updated prop name to 'onAction' to match your App.js wiring
const Hero = ({ onAction }) => {
  return (
    <section id="home" className="relative w-full min-h-screen md:h-screen overflow-hidden bg-[#060b13]">
      
      {/* Image Container */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }} 
        className="relative w-full h-[65vh] md:h-full md:absolute md:inset-0 z-0"
      >
        <img 
          src={desktopHero} 
          alt="Trading Desktop" 
          className="hidden md:block w-full h-full object-cover"
        />
        
        <img 
          src={mobileHero} 
          alt="Trading Mobile" 
          className="block md:hidden w-full h-full object-cover object-center"
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#060b13] md:bg-black/40" />
      </motion.div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 w-full pt-10 md:pt-0 md:h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ 
            duration: 1.5, 
            delay: 0.5, 
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="max-w-3xl -mt-20 md:mt-0"
        >
          <h1 className="text-[32px] leading-[1.2] md:text-6xl lg:text-7xl font-bold mb-6 italic tracking-tighter">
            All-in-one <span className="text-[#00d1ff]">Automated</span> trading
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.2 }} 
            className="text-lg md:text-xl text-gray-400 mb-10 leading-snug font-medium max-w-[320px] md:max-w-none uppercase tracking-widest"
          >
            for Forex, Commodities, Indices, Shares and Cryptocurrencies
          </motion.p>

          <motion.button
            onClick={onAction} // --- CONNECTED TO THE FORM ---
            whileHover="hover"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }} 
            className="group relative flex items-center gap-3 bg-[#00d1ff] text-black px-10 py-4 rounded-full font-black uppercase tracking-widest text-lg overflow-hidden transition-all shadow-[0_0_30px_rgba(0,209,255,0.3)] active:scale-95"
          >
            <span className="relative z-10">Register Now</span>
            <motion.div 
              variants={{ hover: { x: 8 } }} 
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative z-10"
            >
              <ArrowRight size={24} strokeWidth={3} />
            </motion.div>
            
            {/* Hover Shine Effect */}
            <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#060b13] to-transparent z-10" />
    </section>
  );
};

export default Hero;