import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Loader2, Send } from 'lucide-react';

const FormModal = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState('idle'); // idle, loading, success
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const scriptURL = import.meta.env.VITE_GOOGLE_SHEET_URL;

    try {
      const params = new URLSearchParams();
      params.append('Full Name', formData.name);
      params.append('Email', formData.email);
      params.append('Phone', formData.phone);

      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });

      setTimeout(() => setStatus('success'), 800);
    } catch (error) {
      console.error("Submission failed", error);
      setStatus('idle');
    }
  };

  const handleClose = () => {
    onClose();
    // Reset form after closing
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', phone: '' });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#04080e]/95 backdrop-blur-2xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="relative w-full max-w-lg bg-[#0a1019] border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              <X size={26} />
            </button>

            {/* Idle State - Form */}
            {status === 'idle' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none">
                    JOIN THE <span className="text-[#00d1ff]">INNER CIRCLE</span>
                  </h2>
                  <p className="text-gray-400 mt-3 text-base md:text-lg">
                    Enter your details to secure your priority access.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">FULL NAME</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00d1ff] transition-all text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">EMAIL ADDRESS</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00d1ff] transition-all text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">PHONE NUMBER</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+234 801 234 5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00d1ff] transition-all text-base"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full py-5 bg-[#00d1ff] hover:bg-[#00c2eb] text-black font-black rounded-2xl flex items-center justify-center gap-3 text-lg mt-6 active:scale-95 transition-all"
                  >
                    CONFIRM ACCESS 
                    <Send size={22} />
                  </motion.button>
                </form>
              </motion.div>
            )}

            {/* Loading State */}
            {status === 'loading' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-16 flex flex-col items-center justify-center text-center"
              >
                <Loader2 className="text-[#00d1ff] animate-spin mb-8" size={72} />
                <h3 className="text-white text-2xl font-bold tracking-widest">PROCESSING...</h3>
                <p className="text-gray-500 mt-2">Encrypting your information</p>
              </motion.div>
            )}

            {/* Success State */}
            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 md:py-16 flex flex-col items-center justify-center text-center"
              >
                <div className="w-24 h-24 bg-[#00d1ff]/10 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 className="text-[#00d1ff]" size={68} />
                </div>
                
                <h3 className="text-4xl font-black text-white mb-4">YOU'RE IN.</h3>
                <p className="text-gray-400 max-w-[260px] mx-auto">
                  Registration successful.<br />Check your email for next steps.
                </p>
                
                <button 
                  onClick={handleClose}
                  className="mt-12 px-8 py-3 text-[#00d1ff] font-bold uppercase tracking-widest text-sm border border-[#00d1ff]/30 rounded-full hover:bg-[#00d1ff]/10 transition-all"
                >
                  Return to Homepage
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FormModal;