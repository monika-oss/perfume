import React, { useEffect, useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FragranceRange from './components/FragranceRange';
import IdealFor from './components/IdealFor';
import Features from './components/Features';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Prevent scrolling during preloader
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      AOS.init({
        duration: 600,
        once: true,
        easing: 'ease-out-back',
      });
    }
  }, [isLoading]);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-slate-50">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[100] origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(to right, #ffb703, #f15bb5, #7209b7)',
        }}
      />

      {/* Luxury Preloader */}
      <AnimatePresence>
        {isLoading && (
          <Preloader key="preloader" onComplete={handlePreloaderComplete} />
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Features />
            <FragranceRange />
            <IdealFor />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
