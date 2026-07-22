import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const getCategoryImage = (title) => {
  const name = title.toLowerCase();
  if (name.includes('floral')) return '/images/floral_fragrance.png';
  if (name.includes('fruity')) return '/images/fruity_fragrance.png';
  if (name.includes('woody')) return '/images/woody_fragrance.png';
  if (name.includes('fresh')) return '/images/fresh_fragrance.png';
  if (name.includes('oriental')) return '/images/oriental_fragrance.png';
  return '/images/speciality_fragrance.png';
};

const CategoryCard = ({ title, items, index }) => {
  const imgSrc = getCategoryImage(title);
  const cardRef = useRef(null);

  return (
    <motion.article 
      ref={cardRef}
      variants={{
        hidden: { opacity: 0, scale: 0.9, y: 50 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", bounce: 0.3, duration: 0.4 } }
      }}
      whileHover={{ scale: 1.02, y: -10, boxShadow: "0 20px 40px rgba(114,9,183,0.15)" }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-[0_5px_15px_rgba(0,0,0,0.05)] border border-purple-200/60 flex flex-col w-full group cursor-pointer"
    >
      <div className="bg-[#8b1e8f] py-2 px-6 border-b border-brand-purple/10 rounded-t-2xl">
        <h3 className="text-white font-extrabold text-sm md:text-base text-center uppercase tracking-wider">
          {title}
        </h3>
      </div>
      
      <div className="p-4 flex flex-col sm:flex-row items-stretch gap-4 flex-1 bg-white rounded-b-2xl">
        <div className="w-full sm:w-1/2 h-36 sm:h-auto flex items-center justify-center overflow-hidden rounded-lg border border-purple-100 bg-white">
          <img 
            src={imgSrc} 
            alt={`${title} Collection`} 
            className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-300 p-2"
            loading="lazy"
          />
        </div>
        
        <div className="w-full sm:w-1/2 flex flex-col justify-center py-2">
          <motion.ul 
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
            }}
            className="space-y-1.5 list-none p-0 m-0"
          >
            {items.map((item, idx) => (
              <motion.li 
                key={idx} 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
                }}
                className="flex items-center gap-2 text-slate-700 text-xs md:text-sm font-semibold group-hover:translate-x-1 transition-transform duration-300"
              >
                <span className="text-red-500 font-bold text-[8px] md:text-[10px]" aria-hidden="true">◆</span>
                <span className="hover:text-brand-purple transition-colors truncate">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.article>
  );
};

export default CategoryCard;
