import React, { useRef, useState, useEffect } from 'react';
import CategoryCard from './CategoryCard';
import { motion } from 'framer-motion';

const FragranceRange = () => {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered && scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        if (window.innerWidth < 768) {
          const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10;
          if (isAtEnd) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
          }
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const categories = [
    {
      title: "Floral Fragrances",
      items: ["Rose", "Jasmine", "Lavender", "Lily", "Mogra", "Lotus"]
    },
    {
      title: "Fruity Fragrances",
      items: ["Lemon", "Orange", "Apple", "Pineapple", "Mango", "Strawberry"]
    },
    {
      title: "Woody Fragrances",
      items: ["Sandal", "Cedarwood", "Musk", "Amber", "Oudh", "Patchouli"]
    },
    {
      title: "Fresh Fragrances",
      items: ["Mint", "Eucalyptus", "Marine", "Green Apple", "Citrus", "Cool Water"]
    },
    {
      title: "Oriental Fragrances",
      items: ["Vanilla", "Spicy", "Bakhoor", "Ambergris", "Incense", "Oudh"]
    },
    {
      title: "Speciality Fragrances",
      items: ["Attar", "Deodorant", "Soap Fragrance", "Detergent Perfume", "Room Freshener", "Air Freshener"]
    }
  ];

  return (
    <section id="fragrance-range" ref={containerRef} className="py-20 scroll-mt-6 md:scroll-mt-12 bg-gradient-to-b from-white to-[#faf4f9] relative overflow-hidden">
      {/* Dynamic Background Soft Purple/Pink Glows */}
      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-96 h-96 bg-brand-pink-light/30 rounded-full blur-[100px] pointer-events-none" 
      />
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-brand-purple-light/30 rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Border Box enclosing the grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
          variants={{
            hidden: { opacity: 0, scale: 0.95, y: 50 },
            visible: { 
              opacity: 1, 
              scale: 1,
              y: 0, 
              transition: { 
                type: "spring",
                bounce: 0.2,
                duration: 0.6, 
                staggerChildren: 0.05,
                delayChildren: 0.05
              } 
            }
          }}
          className="relative border-2 border-brand-purple/20 rounded-3xl pt-16 pb-10 px-4 sm:px-6 lg:px-8 shadow-[0_4px_30px_rgba(114,9,183,0.05)] bg-[#faf4f9]/50 backdrop-blur-md"
        >
          
          {/* Header embedded on the top border (3D Glossy Pill) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 min-[360px]:px-6 sm:px-12 py-2 sm:py-2.5 rounded-full font-black text-[11px] min-[360px]:text-sm sm:text-lg md:text-xl tracking-widest uppercase text-white z-20 whitespace-nowrap bg-gradient-to-r from-[#2e004f] via-[#7b1fa2] to-[#2e004f] shadow-[inset_0px_3px_5px_rgba(255,255,255,0.5),inset_0px_-4px_5px_rgba(0,0,0,0.6),0_6px_10px_rgba(0,0,0,0.3)] w-[90%] max-w-[max-content] text-center">
            OUR FRAGRANCE RANGE
          </div>

          {/* Categories Grid / Mobile Carousel */}
          <div 
            ref={scrollContainerRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => { setTimeout(() => setIsHovered(false), 3000) }}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category, index) => (
              <div key={index} className="w-[95%] shrink-0 snap-center md:w-auto md:shrink">
                <CategoryCard 
                  index={index}
                  title={category.title}
                  items={category.items}
                />
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FragranceRange;
