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
    // These keys MUST match the headers in the script/sheet exactly
    params.append('Full Name', formData.name);
    params.append('Email', formData.email);
    params.append('Phone', formData.phone);

    await fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors', 
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    setTimeout(() => setStatus('success'), 1000);
  } catch (error) {
    console.error("Submission failed", error);
    setStatus('idle');
  }
};

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#04080e]/90 backdrop-blur-xl"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-[#0a1019] border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {status === 'idle' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                <div>
                  <h2 className="text-3xl font-black text-white tracking-tighter">
                    JOIN THE <span className="text-[#00d1ff]">INNER CIRCLE</span>
                  </h2>
                  <p className="text-gray-400 mt-2 font-light">Enter your details to secure your priority access.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-4">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-[#00d1ff]/50 transition-all placeholder:text-gray-700"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-4">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-[#00d1ff]/50 transition-all placeholder:text-gray-700"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-4">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-[#00d1ff]/50 transition-all placeholder:text-gray-700"
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-5 bg-[#00d1ff] text-black font-black rounded-2xl flex items-center justify-center gap-3 text-lg mt-8"
                  >
                    CONFIRM ACCESS <Send size={20} />
                  </motion.button>
                </form>
              </motion.div>
            )}

            {status === 'loading' && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-20 flex flex-col items-center justify-center text-center"
              >
                <Loader2 className="text-[#00d1ff] animate-spin mb-6" size={60} />
                <h3 className="text-white text-xl font-bold tracking-widest uppercase">Encrypting Data...</h3>
              </motion.div>
            )}

            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-20 flex flex-col items-center justify-center text-center"
              >
                <div className="w-20 h-20 bg-[#00d1ff]/20 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 className="text-[#00d1ff]" size={48} />
                </div>
                <h3 className="text-3xl font-black text-white mb-4">YOU'RE IN.</h3>
                <p className="text-gray-400 max-w-[240px] mx-auto font-light">
                  Registration successful. Check your email for next steps.
                </p>
                <button 
                  onClick={onClose}
                  className="mt-10 text-[#00d1ff] text-xs font-bold uppercase tracking-widest hover:underline"
                >
                  Return to Site
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