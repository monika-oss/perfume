import React from 'react';
import { MapPin, Phone, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer id="contact" className="bg-brand-purple-dark text-white relative">
      
      {/* Top Gold Border (Wavy Accent style) */}
      <div className="h-2 w-full bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark relative z-20"></div>
      
      {/* Background Decor (Realistic Perfume Bottles & Flower at bottom right matching the poster) */}
      <div className="absolute bottom-0 right-0 w-40 sm:w-48 md:w-56 lg:w-[260px] hidden sm:block pointer-events-none z-30 translate-x-2">
        <motion.div 
          animate={{ y: [0, -8, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full flex items-end justify-end"
        >
          <img 
            src="/images/footer_perfumes_v8.webp" 
            alt="Perfume Bottles and Flower" 
            className="w-full h-auto object-contain object-bottom drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 lg:pr-[280px] py-8 md:py-12 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.5 } }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center"
        >
          
          {/* Column 1: Address Box */}
          <motion.a 
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
            whileHover={{ scale: 1.05 }}
            href="https://www.google.com/maps/search/?api=1&query=128%2F3%2C+Thuthipet+Village%2C+Villianur+Commune%2C+Pondicherry" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-start gap-4 group cursor-pointer md:border-r border-white/20 md:pr-4"
          >
            <motion.div 
              animate={{ rotateY: [0, 360] }} 
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-lg"
            >
              <MapPin className="w-5 h-5 md:w-6 md:h-6 fill-brand-purple text-brand-purple" />
            </motion.div>
            <div className="text-white text-xs md:text-sm leading-relaxed text-left font-medium">
              <p>128/3, Thuthipet Village.</p>
              <p>Villianur Commune.</p>
              <p>Pondicherry.</p>
            </div>
          </motion.a>

          {/* Column 2: Phone */}
          <motion.a 
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
            href="tel:9345315579" 
            className="flex items-center justify-start gap-4 group cursor-pointer md:border-r border-white/20 md:pr-4"
          >
            <motion.div 
              animate={{ rotateZ: [-10, 10, -10] }} 
              transition={{ duration: 1, repeat: Infinity }}
              className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white shrink-0"
            >
              <Phone className="w-5 h-5" />
            </motion.div>
            <div className="text-left flex items-center gap-2">
              <p className="text-lg md:text-xl font-black text-brand-gold whitespace-nowrap">
                Cell 93453 15579
              </p>
            </div>
          </motion.a>

          {/* Column 3: Website */}
          <motion.a 
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
            href="http://www.saitirupatichemicals.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-start gap-4 group cursor-pointer"
          >
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }} 
              transition={{ duration: 2, repeat: Infinity }}
              className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-white shrink-0 shadow-lg"
            >
              <Globe className="w-5 h-5" />
            </motion.div>
            <div className="text-left">
              <p className="text-xs sm:text-sm md:text-base font-medium text-brand-gold whitespace-nowrap lg:whitespace-normal">
                www.saitirupatichemicals.com
              </p>
            </div>
          </motion.a>

        </motion.div>
        
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/40 font-bold uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Sai Tirupati Trading Enterprises. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
