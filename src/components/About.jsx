import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  UserPlus,
  ShieldCheck,
  Headphones,
  Wallet,
  ArrowRight
} from 'lucide-react';

/* ── Animated counter hook ── */
function useCounter(target, duration = 2200, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    let startTime = null;

    const easeOut = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      if (!startTime) startTime = now;

      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setCount(Math.round(easeOut(progress) * target));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [started, target, duration]);

  return count;
}

/* ── Single stat cell ── */
function StatCell({ value, suffix, label, started, delay = 0 }) {
  const count = useCounter(value, 2200 + delay * 100, started);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={started ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: delay * 0.15,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="group relative flex flex-col items-center justify-center py-9 px-6 bg-[#060b13] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,209,255,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <span className="relative z-10 text-[clamp(2.4rem,5vw,3.4rem)] font-black leading-none tracking-tight text-[#00d1ff] tabular-nums">
        {count.toLocaleString()}
        <span className="text-[0.7em]">{suffix}</span>
      </span>

      <span className="block w-8 h-[2px] my-3 bg-gradient-to-r from-transparent via-[#00d1ff] to-transparent" />

      <span className="relative z-10 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/40">
        {label}
      </span>
    </motion.div>
  );
}

const About = ({ onAction }) => {

  const slowFadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const steps = [
    {
      step: "01",
      icon: <UserPlus />,
      title: "Register Account",
      desc: "Start your journey by creating your secure trading profile."
    },
    {
      step: "02",
      icon: <ShieldCheck />,
      title: "Verify Instantly",
      desc: "Complete our streamlined verification process in under 2 minutes."
    },
    {
      step: "03",
      icon: <Headphones />,
      title: "Dedicated Support",
      desc: "Get a personalized strategy call from your account manager."
    },
    {
      step: "04",
      icon: <Wallet />,
      title: "Start Scaling",
      desc: "Fund and trade with as little as 10 USD to begin your progress."
    }
  ];

  const stats = [
    { value: 5000, suffix: "+", label: "Traders Helped" },
    { value: 30, suffix: "+", label: "Years Experience" },
  ];

  /* ── REFS ── */
  const counterRef = useRef(null);

  /* ── VIDEO REFS ── */
  const containerRef = useRef(null);
  const iframeRef = useRef(null);
  const playerRef = useRef(null);

  const isCounterInView = useInView(counterRef, {
    once: true,
    margin: "-80px"
  });

  /* ── VIDEO VISIBILITY ── */
  const isVideoInView = useInView(containerRef, {
    threshold: 0.5,
  });

  /* ── LOAD YOUTUBE PLAYER ── */
  useEffect(() => {

    function createPlayer() {
      if (playerRef.current || !iframeRef.current) return;

      playerRef.current = new window.YT.Player(iframeRef.current, {
        videoId: "wog2qZwxulw",
        playerVars: {
          autoplay: 0,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          loop: 1,
          playlist: "wog2qZwxulw",
          playsinline: 1,
          mute: 1,
        },
      });
    }

    /* If API already exists */
    if (window.YT && window.YT.Player) {
      createPlayer();
      return;
    }

    /* Load YouTube API */
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      createPlayer();
    };

  }, []);

  /* ── PLAY / PAUSE ON SCROLL ── */
  useEffect(() => {
    const player = playerRef.current;

    if (!player || !player.playVideo) return;

    if (isVideoInView) {
      player.playVideo();
    } else {
      player.pauseVideo();
    }
  }, [isVideoInView]);

  return (
    <section
      id="about"
      className="py-10 md:py-12 bg-[#060b13] overflow-hidden border-t border-white/5"
    >
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">

        {/* ── Header ── */}
        <div className="text-center mb-10 md:mb-14">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slowFadeUp}
            className="inline-block px-4 py-1.5 rounded-full border border-[#00d1ff]/20 bg-[#00d1ff]/5 text-[#00d1ff] text-[10px] font-bold mb-6 tracking-[0.3em] uppercase"
          >
            The Intelligence Era
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            variants={slowFadeUp}
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-tight"
          >
            STOP STRUGGLING ALONE.
            <br />
            <span className="text-[#00d1ff]">
              Lets Hold your hands to success.
            </span>
          </motion.h2>

          {/* ── Counters ── */}
          <div ref={counterRef} className="mt-10 mb-10">

            <div className="h-px w-full max-w-2xl mx-auto mb-0 bg-gradient-to-r from-transparent via-[#00d1ff]/25 to-transparent" />

            <div className="grid grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto border border-white/[0.05] rounded-2xl overflow-hidden">
              {stats.map((s, i) => (
                <StatCell
                  key={i}
                  {...s}
                  started={isCounterInView}
                  delay={i}
                />
              ))}
            </div>

            <div className="h-px w-full max-w-2xl mx-auto mt-0 bg-gradient-to-r from-transparent via-[#00d1ff]/25 to-transparent" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="max-w-3xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed font-light"
          >
            With over 30 years of combined market experience, we have helped over 5,000 traders attain real results through free education, automated services, and direct guidance.
          </motion.p>
        </div>

        {/* ── UPDATED YOUTUBE SHORT ── */}
        <div className="mb-16 flex justify-center px-4">
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="relative w-full shadow-[0_0_50px_rgba(0,209,255,0.1)] transition-all"
            style={{
              maxWidth: "min(280px, 100%)",
              maxHeight: "min(500px, 70vh)",
              aspectRatio: "9/16"
            }}
          >
            <div className="absolute -inset-1 bg-[#00d1ff]/10 rounded-[2.2rem] blur-xl -z-10" />

            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 bg-black">

              {/* YouTube Player */}
              <div
                ref={iframeRef}
                className="w-full h-full scale-[1.18] pointer-events-none"
              />

              {/* Sound Toggle */}
              <button
                onClick={() => {
                  if (!playerRef.current) return;

                  const isMuted = playerRef.current.isMuted();

                  if (isMuted) {
                    playerRef.current.unMute();
                  } else {
                    playerRef.current.mute();
                  }
                }}
                className="
                  absolute bottom-3 right-3 z-20
                  flex items-center justify-center
                  w-11 h-11 rounded-full
                  bg-black/55 backdrop-blur-xl
                  border border-white/10
                  text-white/90
                  hover:bg-black/75
                  hover:scale-105
                  active:scale-95
                  transition-all duration-300
                "
              >
                🔊
              </button>

            </div>
          </motion.div>
        </div>

        {/* ── Steps grid ── */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-[#00d1ff]/30 transition-all duration-500 overflow-hidden"
              >

                <span className="absolute -top-2 -right-2 text-7xl font-black text-[#00d1ff]/5 group-hover:text-[#00d1ff]/10 transition-colors">
                  {item.step}
                </span>

                <div className="relative z-10">

                  <div className="w-14 h-14 rounded-2xl bg-[#00d1ff]/10 flex items-center justify-center text-[#00d1ff] mb-6 group-hover:shadow-[0_0_20px_rgba(0,209,255,0.3)] transition-all duration-500">
                    {React.cloneElement(item.icon, { size: 28 })}
                  </div>

                  <h4 className="text-xl font-bold mb-3 text-white group-hover:text-[#00d1ff] transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                </div>
              </motion.div>
            ))}

          </div>
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <button
            onClick={onAction}
            className="group relative flex items-center gap-4 px-10 py-5 rounded-full bg-[#00d1ff] text-black font-black text-sm tracking-[0.2em] uppercase overflow-hidden hover:shadow-[0_0_30px_rgba(0,209,255,0.4)] active:scale-95 transition-all"
          >
            <span className="relative z-10">
              Get Started
            </span>

            <ArrowRight
              className="relative z-10 group-hover:translate-x-1.5 transition-transform"
              size={20}
            />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default About;