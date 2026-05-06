import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import desktopHero from '../assets/desktop-hero.jpg';
import mobileHero from '../assets/mobile-hero.jpg';

const Hero = ({ onAction }) => {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-[#060b13]">

      {/* Image — always full-cover background */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0"
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#060b13]/40 via-transparent to-[#060b13] md:bg-black/40" />
      </motion.div>

      {/* Content — centered on mobile, left-aligned on desktop */}
      <div className="relative z-10 min-h-screen w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-center justify-center md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-center md:text-left"
        >
          <h1 className="text-[32px] sm:text-[44px] leading-[1.2] md:text-6xl lg:text-7xl font-bold mb-6 italic tracking-tighter">
            All-in-one <span className="text-[#00d1ff]">Automated</span> trading
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
            className="text-sm sm:text-lg md:text-xl text-gray-400 mb-10 leading-snug font-medium uppercase tracking-widest max-w-[280px] sm:max-w-sm md:max-w-none mx-auto md:mx-0"
          >
            for Forex, Commodities, Indices, Shares and Cryptocurrencies
          </motion.p>

          <motion.button
            onClick={onAction}
            whileHover="hover"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="group relative inline-flex items-center gap-2 sm:gap-3 bg-[#00d1ff] text-black px-7 py-3.5 sm:px-10 sm:py-4 rounded-full font-black uppercase tracking-widest text-sm sm:text-base md:text-lg overflow-hidden transition-all shadow-[0_0_30px_rgba(0,209,255,0.3)] active:scale-95"
          >
            <span className="relative z-10">Register Now</span>
            <motion.div
              variants={{ hover: { x: 8 } }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative z-10"
            >
              <ArrowRight size={20} strokeWidth={3} />
            </motion.div>
            <div className="absolute inset-0 bg-white/40 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#060b13] to-transparent z-10" />
    </section>
  );
};

export default Hero;