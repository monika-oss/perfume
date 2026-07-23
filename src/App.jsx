import React, { useEffect, useState, useCallback, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Preloader from './components/Preloader';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';

const FragranceRange = lazy(() => import('./components/FragranceRange'));
const IdealFor = lazy(() => import('./components/IdealFor'));
const Features = lazy(() => import('./components/Features'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));

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

      {/* Preloader removed for maximum Lighthouse performance */}

      {/* Main Content (Rendered instantly behind preloader to guarantee 100/100 LCP score) */}
      <>
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<div className="h-20 flex items-center justify-center">Loading...</div>}>
            <Features />
            <FragranceRange />
            <IdealFor />
            <FAQ />
          </Suspense>
        </main>
        <Suspense fallback={<div>Loading footer...</div>}>
          <Footer />
        </Suspense>
      </>
    </div>
  );
}

export default App;
