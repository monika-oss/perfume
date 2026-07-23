import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    // Reduced artificial loader time to drastically improve performance score
    const timer = setTimeout(() => {
      onComplete();
    }, 500); 
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #3a0ca3 0%, #7209b7 40%, #c026d3 75%, #f15bb5 100%)' }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Simple pulsing logo container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex items-center justify-center"
      >
        {/* Animated glowing rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-4 md:-inset-6 rounded-full border-t-2 border-r-2 border-brand-gold opacity-60"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-8 md:-inset-10 rounded-full border-b-2 border-l-2 border-brand-pink opacity-40"
        />
        
        {/* Logo */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white p-3 md:p-4 rounded-full shadow-[0_0_30px_rgba(255,183,3,0.2)]"
        >
          <img 
            src="/images/logo.webp" 
            alt="Logo" 
            className="w-16 h-16 md:w-20 md:h-20 object-contain mix-blend-multiply"
          />
        </motion.div>
      </motion.div>

      {/* Simple text reveal */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-16 flex flex-col items-center"
      >
        <span className="text-white font-serif font-bold tracking-widest text-lg md:text-xl">
          SAI TIRUPATI
        </span>
        <span className="text-brand-gold text-[10px] md:text-xs tracking-[0.2em] mt-1 uppercase font-semibold">
          Trading Enterprises
        </span>
        
        {/* Simple Loading Dots */}
        <div className="flex gap-1 mt-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -5, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-1.5 h-1.5 bg-brand-pink rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
