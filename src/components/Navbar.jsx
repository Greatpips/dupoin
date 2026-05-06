import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';

// Importing your specific assets
import dupLogo from '../assets/dup.svg';
import fiveBadge from '../assets/five.svg';

const Navbar = ({ onAction }) => { // 1. Added onAction prop
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Webinar', href: '#webinar' },
    { name: 'Testimonial', href: '#testimonial' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Dupoin', href: '#dupoin' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#060b13]/95 backdrop-blur-md py-3 shadow-2xl' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* LOGO AREA */}
        <div className="flex items-center gap-4">
          <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="flex items-center gap-4 group">
            <img 
              src={dupLogo} 
              alt="Dupoin" 
              className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105" 
            />
            <div className="h-8 w-[1px] bg-[#00d1ff]/40" />
            <img 
              src={fiveBadge} 
              alt="5 Years Anniversary" 
              className="h-8 md:h-10 w-auto object-contain" 
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[15px] font-medium text-gray-300 hover:text-[#00d1ff] transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00d1ff] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          
          {/* 2. Desktop Button Trigger */}
          <motion.button
            onClick={onAction}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: '#00c2eb',
              boxShadow: "0 0 20px rgba(0, 209, 255, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#00d1ff] text-black px-8 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all"
          >
            Register Now
            <ChevronRight size={16} strokeWidth={3} />
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-[#00d1ff]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#060b13] flex flex-col p-8 z-[-1] lg:hidden"
          >
            <div className="mt-24 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-2xl font-semibold text-white border-b border-white/5 pb-4"
                >
                  {link.name}
                </a>
              ))}
              
              {/* 3. Mobile Button Trigger */}
              <button 
                onClick={() => {
                  onAction();
                  setIsOpen(false);
                }}
                className="bg-[#00d1ff] text-black w-full py-5 rounded-2xl font-bold text-xl mt-4 active:scale-95 transition-transform"
              >
                Register Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;