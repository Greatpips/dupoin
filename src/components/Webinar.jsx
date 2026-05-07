import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react'; 

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
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const videoRefs = useRef({});

  const mediaItems = [
    { type: 'video', src: webvid1, title: "AI Strategy Masterclass", duration: "42:18" },
    { type: 'video', src: webvid2, title: "Live Trade Breakdown", duration: "28:45" },
    { type: 'video', src: webvid3, title: "Risk Management Deep Dive", duration: "51:09" },
    { type: 'image', src: web1, title: "Market Psychology" },
    { type: 'image', src: web2, title: "Liquidity Engineering" },
    { type: 'image', src: web3, title: "Backtesting Secrets" },
    { type: 'image', src: web4, title: "AI Execution Framework" },
    { type: 'image', src: web5, title: "Institutional Setups" },
  ];

  const handleVideoHover = (index, isEntering) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (isEntering) {
      setHoveredVideo(index);
      video.play().catch(() => {});
    } else {
      setHoveredVideo(null);
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section id="webinar" className="py-10 md:py-14 lg:py-16 bg-[#060b13] border-t border-white/5 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        <div className="mb-12 md:mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Past Event <span className="text-[#00d1ff]"> and Training  </span> Sessions
          </motion.h2>
          <p className="text-gray-400 text-lg">Watch. Learn. And Get Started</p>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {mediaItems.map((item, index) => {
            const isVideo = item.type === 'video';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: index * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => !isVideo && setSelectedImg(item.src)}
                onMouseEnter={() => isVideo && handleVideoHover(index, true)}
                onMouseLeave={() => isVideo && handleVideoHover(index, false)}
                className="relative aspect-[16/13] sm:aspect-[16/12] overflow-hidden rounded-3xl border border-white/10 bg-black group cursor-pointer"
              >
                {isVideo ? (
                  <video 
                    ref={el => videoRefs.current[index] = el}
                    src={item.src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                )}

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:via-black/40 transition-all duration-500" />

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <div className="flex items-center justify-between">
                    {isVideo ? (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-xs font-bold text-red-400 tracking-widest">VIDEO</span>
                      </div>
                    ) : (
                      <span className="text-xs font-bold text-white/70 tracking-widest">IMAGE</span>
                    )}
                    
                    {item.duration && (
                      <span className="text-xs font-mono text-white/60">{item.duration}</span>
                    )}
                  </div>

                  <h3 className="text-white text-lg md:text-xl font-semibold leading-tight mt-2 line-clamp-2">
                    {item.title}
                  </h3>
                </div>

                {/* Play Button Overlay */}
                {isVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-14 h-14 rounded-2xl border border-white/60 flex items-center justify-center backdrop-blur-md transition-all duration-300
                      ${hoveredVideo === index ? 'opacity-0 scale-75' : 'opacity-100 scale-100'}`}>
                      <Play size={28} className="text-white ml-0.5" />
                    </div>
                  </div>
                )}
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
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
            onClick={() => setSelectedImg(null)}
          >
            <motion.button 
              className="absolute top-6 right-6 z-10 text-white/70 hover:text-white p-4"
              onClick={() => setSelectedImg(null)}
            >
              <X size={40} />
            </motion.button>

            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImg} 
              className="max-w-full max-h-[92vh] object-contain rounded-3xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Webinar;