import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, CheckCircle } from 'lucide-react';

const PopUp = () => {
  const [visible, setVisible] = useState(false);
  const [currentData, setCurrentData] = useState({ count: 0, time: 0 });

  const generateRandomClaim = () => {
    const people = Math.floor(Math.random() * 15) + 2; 
    const minutes = Math.floor(Math.random() * 4) + 1; 
    setCurrentData({ count: people, time: minutes });
  };

  useEffect(() => {
    // If it's currently visible, we wait for it to hide.
    // If it's hidden, we set a timer to show the next one.
    if (!visible) {
      const showTimer = setTimeout(() => {
        generateRandomClaim();
        setVisible(true);
      }, 3500); // Wait 3.5s between pops

      return () => clearTimeout(showTimer);
    } else {
      // While visible, set a timer to hide it
      const hideTimer = setTimeout(() => {
        setVisible(false);
      }, 2500); // Display for 2.5s

      return () => clearTimeout(hideTimer);
    }
  }, [visible]);

  return (
    <div className="fixed bottom-8 left-6 z-[999] pointer-events-none">
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, x: -20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -10, scale: 0.9, transition: { duration: 0.15 } }}
            className="pointer-events-auto bg-[#0a1019]/95 backdrop-blur-2xl border border-[#00d1ff]/40 p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex items-center gap-4 min-w-[280px]"
          >
            {/* Visual Icon */}
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#00d1ff]/20 to-transparent flex items-center justify-center text-[#00d1ff]">
                <Users size={22} />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#00d1ff] rounded-full shadow-[0_0_8px_#00d1ff] animate-pulse" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[9px] font-black text-[#00d1ff] uppercase tracking-[0.25em]">Live Reward</span>
              </div>
              <p className="text-sm text-gray-200 leading-tight">
                <span className="font-bold text-white">{currentData.count} people</span> just claimed a 
                <span className="text-[#00d1ff] font-bold"> 100% bonus</span>
              </p>
              <div className="flex items-center gap-1 mt-1.5 opacity-50">
                <CheckCircle size={10} className="text-[#00d1ff]" />
                <span className="text-[9px] text-white font-medium uppercase tracking-tighter">Verified {currentData.time}m ago</span>
              </div>
            </div>

            {/* Micro-close visual */}
            <div className="h-full flex items-start pt-1">
              <div className="w-1 h-1 rounded-full bg-white/20" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PopUp;