import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Loader2, Send } from 'lucide-react';

const FormModal = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const nameInputRef = useRef(null);

  // Auto-focus first input when modal opens
  useEffect(() => {
    if (isOpen && status === 'idle') {
      setTimeout(() => nameInputRef.current?.focus(), 300);
    }
  }, [isOpen, status]);

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

      setTimeout(() => setStatus('success'), 900);
    } catch (error) {
      console.error("Submission failed", error);
      setStatus('idle');
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', phone: '' });
    }, 400);
  };

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) handleClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#04080e]/95 backdrop-blur-2xl"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-md sm:max-w-lg bg-[#0a1019] border border-white/10 rounded-3xl md:rounded-[3rem] p-8 md:p-12 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={handleClose}
              className="absolute top-5 right-5 p-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
            >
              <X size={28} />
            </button>

            {/* Form State */}
            {status === 'idle' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter">
                    JOIN THE <span className="text-[#00d1ff]">INNER CIRCLE</span>
                  </h2>
                  <p className="text-gray-400 mt-3 text-base md:text-lg">
                    Secure your priority access now
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">FULL NAME</label>
                    <input 
                      ref={nameInputRef}
                      required
                      type="text" 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00d1ff] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">EMAIL ADDRESS</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00d1ff] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">PHONE NUMBER</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+234 801 234 5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00d1ff] transition-all"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full py-5 bg-[#00d1ff] hover:bg-[#00c2eb] text-black font-black rounded-2xl flex items-center justify-center gap-3 text-lg mt-4 active:scale-[0.985] transition-all"
                  >
                    CONFIRM ACCESS 
                    <Send size={22} />
                  </motion.button>
                </form>
              </motion.div>
            )}

            {/* Loading */}
            {status === 'loading' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 flex flex-col items-center justify-center text-center"
              >
                <Loader2 className="text-[#00d1ff] animate-spin mb-8" size={70} />
                <h3 className="text-white text-2xl font-bold">PROCESSING...</h3>
                <p className="text-gray-500 mt-2">Please wait</p>
              </motion.div>
            )}

            {/* Success */}
            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-16 flex flex-col items-center justify-center text-center"
              >
                <div className="w-24 h-24 bg-[#00d1ff]/10 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 className="text-[#00d1ff]" size={70} />
                </div>
                
                <h3 className="text-4xl font-black text-white mb-4">YOU'RE IN!</h3>
                <p className="text-gray-400">
                  Registration successful.<br />Check your email for next steps.
                </p>
                
                <button 
                  onClick={handleClose}
                  className="mt-12 px-10 py-4 text-[#00d1ff] font-bold uppercase tracking-widest border border-[#00d1ff]/30 rounded-full hover:bg-[#00d1ff]/10 transition-all"
                >
                  RETURN TO HOMEPAGE
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