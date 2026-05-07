import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Loader2, Send, User, Mail, Phone, AlertCircle } from 'lucide-react';

const FormModal = ({ isOpen, onClose }) => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const nameInputRef = useRef(null);

  // ←←← PASTE YOUR GOOGLE WEB APP URL HERE
  const scriptURL = "https://script.google.com/macros/s/AKfycbyuGxb6IdVHoXZwfgHyPZN7Oy7tmEEVFiIfZsmGNRw-QgEFcJ0SKgOLMU0rPqqzTLAdZQ/exec";

  useEffect(() => {
    if (isOpen && status === 'idle') {
      setTimeout(() => nameInputRef.current?.focus(), 300);
    }
  }, [isOpen, status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('Full Name', formData.name);
      formDataToSubmit.append('Email', formData.email);
      formDataToSubmit.append('Phone', formData.phone);

      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: formDataToSubmit,
      });

      // With no-cors we can't read response, so we simulate success
      setTimeout(() => {
        setStatus('success');
      }, 1000);

    } catch (error) {
      console.error("Submission failed", error);
      setStatus('error');
      setErrorMessage("Failed to submit. Please check your internet connection and try again.");
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', phone: '' });
      setErrorMessage('');
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#02040a]/90 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-125 bg-[#0a1019] border border-white/10 rounded-[2.5rem] shadow-[0_0_50px_rgba(0,209,255,0.1)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-1.5 w-full bg-linear-to-r from-transparent via-[#00d1ff] to-transparent opacity-50" />

            <button 
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 text-gray-500 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-all z-20"
            >
              <X size={20} />
            </button>

            <div className="p-8 md:p-12">
              {/* Idle State - Form */}
              {status === 'idle' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none">
                      ACCESS THE <span className="text-[#00d1ff]">ELITE</span>
                    </h2>
                    <p className="text-gray-500 mt-3 text-sm md:text-base font-medium">
                      Enter your details to get started.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {[
                      { id: 'name', label: 'Full Name', type: 'text', icon: <User size={18} />, placeholder: 'Chinedu Okoro' },
                      { id: 'email', label: 'Email Address', type: 'email', icon: <Mail size={18} />, placeholder: 'you@example.com' },
                      { id: 'phone', label: 'Phone Number', type: 'tel', icon: <Phone size={18} />, placeholder: '+234 801 234 5678' }
                    ].map((field) => (
                      <div key={field.id} className="group">
                        <label className="text-[10px] text-[#00d1ff] font-bold tracking-[0.2em] uppercase mb-2 block opacity-70">
                          {field.label}
                        </label>
                        <div className="relative">
                          <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#00d1ff] transition-colors">
                            {field.icon}
                          </div>
                          <input 
                            ref={field.id === 'name' ? nameInputRef : null}
                            required
                            type={field.type}
                            placeholder={field.placeholder}
                            value={formData[field.id]}
                            onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                            className="w-full bg-white/3 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#00d1ff]/50 focus:bg-white/5 transition-all"
                          />
                        </div>
                      </div>
                    ))}

                    <motion.button
                      whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(0,209,255,0.4)" }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full py-5 bg-[#00d1ff] text-black font-black rounded-2xl flex items-center justify-center gap-3 text-sm tracking-widest uppercase mt-6 transition-all"
                    >
                      Submit Details <Send size={18} />
                    </motion.button>
                  </form>
                </motion.div>
              )}

              {/* Loading State */}
              {status === 'loading' && (
                <div className="py-20 flex flex-col items-center justify-center">
                  <div className="relative">
                    <Loader2 className="text-[#00d1ff] animate-spin" size={60} />
                    <div className="absolute inset-0 blur-xl bg-[#00d1ff]/20 animate-pulse" />
                  </div>
                  <h3 className="text-white text-xl font-bold mt-8 tracking-widest">SUBMITTING...</h3>
                </div>
              )}

              {/* Success State */}
              {status === 'success' && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="py-12 text-center">
                  <div className="w-20 h-20 bg-[#00d1ff]/10 rounded-full flex items-center justify-center mb-8 mx-auto border border-[#00d1ff]/20">
                    <CheckCircle2 className="text-[#00d1ff]" size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-3">SUCCESSFUL!</h3>
                  <p className="text-gray-400 text-base">
                    Your details have been received.<br />
                    We will contact you shortly.
                  </p>
                  <button 
                    onClick={handleClose} 
                    className="mt-10 text-[#00d1ff] font-bold tracking-widest uppercase hover:underline"
                  >
                    Close Window
                  </button>
                </motion.div>
              )}

              {/* Error State */}
              {status === 'error' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-12 text-center">
                  <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-8 mx-auto border border-red-500/20">
                    <AlertCircle className="text-red-500" size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">Submission Failed</h3>
                  <p className="text-red-400 text-sm mb-8">{errorMessage}</p>
                  
                  <button 
                    onClick={() => setStatus('idle')}
                    className="px-8 py-3 bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl text-white font-medium"
                  >
                    Try Again
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FormModal;