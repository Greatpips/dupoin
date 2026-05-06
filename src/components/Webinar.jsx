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
import webvid3 from '../assets/webvid3.mp4';

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
    <section id="webinar" className="py-20 md:py-28 lg:py-32 bg-[#060b13] border-t border-white/5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        <div className="mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center md:text-left"
          >
            The <span className="text-[#00d1ff]">Knowledge</span> Hub
          </motion.h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {mediaItems.map((item, index) => {
            const isVideo = item.type === 'video';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                onClick={() => !isVideo && setSelectedImg(item.src)}
                className={`relative aspect-[4/3.1] sm:aspect-[16/13] lg:aspect-[4/3.2] overflow-hidden rounded-[2rem] border border-white/10 bg-black group 
                  ${!isVideo ? 'cursor-pointer active:scale-[0.985]' : 'cursor-default'}
                `}
              >
                {isVideo ? (
                  <video 
                    src={item.src} 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover object-center opacity-80"
                  />
                ) : (
                  <img 
                    src={item.src} 
                    alt="Webinar Content" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    loading="lazy"
                  />
                )}

                {/* Overlay Label */}
                <div className="absolute top-5 right-5 flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10">
                  <div className={`w-1.5 h-1.5 rounded-full ${isVideo ? 'bg-[#00d1ff] animate-pulse' : 'bg-white/30'}`} />
                  <span className="text-[10px] text-white/90 font-bold uppercase tracking-widest">
                    {isVideo ? 'VIDEO' : 'IMAGE'}
                  </span>
                </div>

                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox - Improved for Mobile */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-3 md:p-8"
            onClick={() => setSelectedImg(null)}
          >
            <motion.button 
              className="absolute top-6 right-6 z-10 text-white/60 hover:text-white p-3"
              onClick={() => setSelectedImg(null)}
            >
              <X size={36} />
            </motion.button>

            <motion.img 
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              src={selectedImg} 
              className="max-w-full max-h-[92vh] md:max-h-[94vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Webinar;