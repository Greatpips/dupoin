import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Zap, Target, TrendingUp } from 'lucide-react';
import aiBotImg from '../assets/Ai-bot.png'; 

/* ── Counter Component ── */
const StatCounter = ({ value, suffix, label, started }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!started) return;
    let start = 0;
    const end = parseInt(value);
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <div className="flex flex-col">
      <span className="text-3xl md:text-5xl font-black text-[#00d1ff] tabular-nums">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold mt-1">
        {label}
      </span>
    </div>
  );
};

const Ai = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-16 lg:py-24 bg-[#060b13] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00d1ff]/5 blur-[120px] rounded-full -ml-64 -mt-32" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Visual Bot (Compact & Rounded) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="lg:col-span-4 relative flex justify-center items-center order-2 lg:order-1"
          >
            {/* Minimalist Ring */}
            <div className="absolute w-[180px] h-[180px] md:w-[220px] md:h-[220px] border border-[#00d1ff]/10 rounded-full animate-[spin_20s_linear_infinite]" />
            
            {/* Extra Small Rounded Image Wrapper */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-[160px] md:max-w-[200px] lg:max-w-[220px] rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0a1019] shadow-2xl"
            >
              <img 
                src={aiBotImg} 
                alt="Automated Trading Bot" 
                className="w-full h-auto drop-shadow-[0_0_20px_rgba(0,209,255,0.1)] mix-blend-lighten scale-110"
              />
              
              {/* Floating UI Element - Compact */}
              <div className="absolute bottom-2 right-2 bg-[#00d1ff] p-1.5 rounded-lg shadow-lg">
                <TrendingUp size={14} className="text-black" />
              </div>
            </motion.div>

            {/* Subtle Glow */}
            <div className="absolute bottom-10 w-1/3 h-6 bg-[#00d1ff]/20 blur-[30px] rounded-full opacity-30" />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-8 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00d1ff]/20 bg-[#00d1ff]/5 text-[#00d1ff] text-[10px] font-bold uppercase tracking-widest mb-6">
              <Cpu size={14} />
              AI Trading Core
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1]">
              Engineered for <br />
              <span className="text-[#00d1ff]">Consistent Growth</span>
            </h2>

            <div className="relative p-6 md:p-8 rounded-2xl bg-white/[0.01] border border-white/5 backdrop-blur-sm mb-8 overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#00d1ff] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
              
              <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light">
                Tested for over <span className="text-white font-medium">5 years</span>, our automated system is proven to maximize profit while minimizing losses. We use cutting-edge technology that keeps you in control of your risk parameters at all times.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              <StatCounter value="300" suffix="%" label="Historical Return" started={isInView} />
              <StatCounter value="700" suffix="+" label="Connected Accounts" started={isInView} />
            </div>

            <div className="flex flex-wrap gap-5 items-center pt-4 border-t border-white/5">
              <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                <Zap size={14} className="text-[#00d1ff]" />
                Zero Latency
              </div>
              <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest">
                <Target size={14} className="text-[#00d1ff]" />
                Smart Risk Allocation
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Ai;