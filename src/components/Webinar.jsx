import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react'; 

import web1 from '../assets/web1.jpeg';
import web2 from '../assets/web2.jpeg';
import web3 from '../assets/web3.jpeg';
import web4 from '../assets/web4.jpeg';
import web5 from '../assets/web5.jpeg';
import webvid1 from '../assets/webvid1.mp4';
import webvid2 from '../assets/webvid2.mp4';
import webvid3 from '../assets/webvid3.mp4'; // New video added

const Webinar = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const mediaItems = [
    { type: 'video', src: webvid1 },
    { type: 'video', src: webvid2 },
    { type: 'video', src: webvid3 },
    { type: 'image', src: web1 },
    { type: 'image', src: web2 },
    { type: 'image', src: web3 },
    { type: 'image', src: web4 },
    { type: 'image', src: web5 },
  ];

  return (
    <section id="webinar" className="py-20 md:py-32 bg-[#060b13] border-t border-white/5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            The <span className="text-[#00d1ff]">Knowledge</span> Hub
          </motion.h2>
        </div>

        {/* 
            4x4 RESPONSIVE GRID 
            - Mobile: 1 col
            - Tablet: 2 cols
            - Desktop: 4 cols
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {mediaItems.map((item, index) => {
            const isVideo = item.type === 'video';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => !isVideo && setSelectedImg(item.src)}
                className={`relative h-[400px] md:h-[480px] overflow-hidden rounded-[2rem] border border-white/10 bg-black group 
                  ${!isVideo ? 'cursor-pointer' : 'cursor-default'}
                `}
              >
                {isVideo ? (
                  <video 
                    src={item.src} 
                    autoPlay muted loop playsInline
                    className="w-full h-full object-cover object-center opacity-80"
                  />
                ) : (
                  <img 
                    src={item.src} 
                    alt="Webinar Content" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                )}

                {/* Creative Visual Overlay (Status Only) */}
                <div className="absolute top-5 right-5 flex items-center gap-2 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10">
                  <div className={`w-1.5 h-1.5 rounded-full ${isVideo ? 'bg-[#00d1ff] animate-pulse shadow-[0_0_8px_#00d1ff]' : 'bg-white/20'}`} />
                  <span className="text-[8px] text-white/90 font-bold uppercase tracking-[0.2em]">
                    {isVideo ? 'Webinar Video' : 'Webinar Image'}
                  </span>
                </div>

                {/* Minimalist Bottom Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImg(null)}
          >
            <motion.button 
              className="absolute top-8 right-8 text-white/40 hover:text-[#00d1ff] transition-colors"
            >
              <X size={40} />
            </motion.button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={selectedImg} 
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Webinar;