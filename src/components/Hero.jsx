import React, { useState, useEffect } from 'react';
import { Droplet, Sparkles, Star, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const carouselImages = [
    '/images/carousel_1.png',
    '/images/carousel_2.png',
    '/images/carousel_3.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Smooth, Elegant Staggered Entry Animations
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } 
    }
  };

  return (
    <div className="relative flex items-center justify-center overflow-hidden pt-32 md:pt-40 pb-20" style={{background: 'linear-gradient(135deg, #3a0ca3 0%, #7209b7 40%, #c026d3 75%, #f15bb5 100%)'}}>
      
      {/* Gentle Floating Orbs for depth */}
      <motion.div 
        animate={{ 
          x: [0, 50, -30, 0],
          y: [0, -30, 50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-96 h-96 rounded-full mix-blend-screen filter blur-[100px] opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f15bb5 0%, transparent 70%)' }}
      />
      <motion.div 
        animate={{ 
          x: [0, -50, 30, 0],
          y: [0, 50, -30, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full mix-blend-screen filter blur-[120px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #ffb703 0%, transparent 70%)' }}
      />

      {/* Noise Texture Overlay for that premium feel */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Text & Brand Presentation */}
          <motion.div 
            className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start max-w-2xl relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Elegant Badge */}
            <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
              <div className="h-[1px] w-8 bg-brand-gold"></div>
              <span className="text-brand-gold text-xs sm:text-sm font-bold tracking-[0.25em] uppercase">Premium Collection</span>
              <div className="h-[1px] w-8 bg-brand-gold md:hidden"></div>
            </motion.div>

            {/* Smooth Title */}
            <motion.div variants={itemVariants} className="text-center lg:text-left mb-5 w-full">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight font-serif leading-[1.05] drop-shadow-2xl">
                SAI TIRUPATI
              </h1>
              <h2 className="text-lg sm:text-xl md:text-2xl font-light text-white/80 tracking-[0.2em] mt-2 uppercase">
                Trading Enterprises
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-10 text-white/60 font-normal leading-relaxed max-w-lg text-lg">
              Experience the pinnacle of luxury with our meticulously crafted premium perfumes. Discover enduring fragrances created with the world's finest ingredients.
            </motion.div>

            {/* Elegant Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
              <a href="#fragrance-range" className="group relative overflow-hidden px-8 py-3.5 bg-brand-gold text-black font-bold text-xs md:text-sm uppercase tracking-widest text-center transition-all hover:bg-white rounded-full">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Collection
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a href="#ideal-for" className="px-8 py-3.5 border border-white/30 text-white font-bold text-xs md:text-sm uppercase tracking-widest text-center hover:bg-white/20 transition-colors backdrop-blur-sm rounded-full">
                Our Industries
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Smooth Floating Image */}
          <motion.div 
            className="flex-1 w-full max-w-sm lg:max-w-md relative flex items-center justify-center mt-10 lg:mt-0"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          >
            {/* Subtle Static Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-brand-gold to-brand-pink filter blur-[100px] -z-10 mix-blend-screen rounded-full opacity-60" />

            <motion.div 
              animate={{ y: [-15, 15, -15] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 w-full"
            >
              <div className="relative rounded-[2rem] overflow-hidden p-[2px] bg-gradient-to-b from-white/30 to-transparent shadow-[0_20px_50px_rgba(0,0,0,0.4)] aspect-square w-full">
                <div className="absolute inset-0 bg-black/10 backdrop-blur-sm"></div>
                <AnimatePresence>
                  <motion.img 
                    key={currentImageIndex}
                    src={carouselImages[currentImageIndex]} 
                    alt="Sai Tirupati Premium Perfumes" 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] rounded-[1.8rem] z-10 hover:scale-105 transition-transform duration-700 object-cover"
                  />
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
