import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';
import dupLogo from '../assets/dup.svg';

const Footer = ({ onAction }) => {
  return (
    <footer className="relative bg-[#060b13] pt-16 md:pt-20 pb-12 overflow-hidden">
      
      {/* Background Effects */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[500px] md:h-[600px] opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #00d1ff 1px, transparent 1px), linear-gradient(to bottom, #00d1ff 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'linear-gradient(to top, black, transparent)',
          transform: 'perspective(800px) rotateX(60deg) scale(2.5)',
          transformOrigin: 'bottom'
        }}
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[300px] md:h-[400px] bg-[#00d1ff]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        
        {/* BIG CTA SECTION */}
        <div className="flex flex-col items-center text-center py-16 md:py-20 border-b border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 md:mb-8 tracking-tighter leading-none">
              READY TO <span className="text-[#00d1ff]">EVOLVE?</span>
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-xl md:max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed px-4">
              Join thousands of traders leveraging the Duopin ecosystem to automate 
              precision and scale their capital with institutional logic.
            </p>

            <motion.button
              onClick={onAction}
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 209, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 md:px-12 py-5 md:py-6 bg-[#00d1ff] text-black font-black text-xl md:text-2xl rounded-full overflow-hidden flex items-center gap-3 md:gap-4 mx-auto active:scale-95"
            >
              <span>Get Started Now </span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={28} />
            </motion.button>
          </motion.div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-12 md:pt-16 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8">
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={dupLogo} alt="Duopin" className="w-28 md:w-32 opacity-80" />
            <p className="text-gray-600 text-xs tracking-[0.3em] uppercase font-bold text-center md:text-left">
              Precision Execution • Global Scale
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-8 md:gap-12 lg:gap-16">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Zap size={22} className="text-[#00d1ff] mb-2" />
              <span className="text-white font-bold text-lg">5ms</span>
              <span className="text-gray-600 text-xs uppercase tracking-widest">Latency</span>
            </div>
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Shield size={22} className="text-[#00d1ff] mb-2" />
              <span className="text-white font-bold text-lg">Level 3</span>
              <span className="text-gray-600 text-xs uppercase tracking-widest">Security</span>
            </div>
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Globe size={22} className="text-[#00d1ff] mb-2" />
              <span className="text-white font-bold text-lg">24/7</span>
              <span className="text-gray-600 text-xs uppercase tracking-widest">Market</span>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-gray-700 text-xs uppercase tracking-[0.4em] font-medium">
            © {new Date().getFullYear()} DUOPIN ECOSYSTEM. ALL SYSTEMS OPERATIONAL.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;