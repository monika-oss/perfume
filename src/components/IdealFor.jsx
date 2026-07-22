import React from 'react';
import { motion } from 'framer-motion';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { type: "spring", duration: 2, bounce: 0 }, opacity: { duration: 0.1 } }
  }
};

const IdealForIcon = ({ label }) => {
  const strokeColor = "#7209b7";
  const strokeWidth = "2";
  const name = label.toLowerCase();
  
  const svgProps = {
    viewBox: "0 0 64 64", fill: "none", stroke: strokeColor, strokeWidth: strokeWidth, 
    strokeLinecap: "round", strokeLinejoin: "round", className: "w-14 h-14", "aria-hidden": "true"
  };

  if (name.includes("detergent powder")) {
    return (
      <motion.svg {...svgProps}>
        <motion.path variants={draw} d="M20,24 C20,18 22,14 32,14 C42,14 44,18 44,24 L46,50 C46,54 42,56 32,56 C22,56 18,54 18,50 Z" />
        <motion.path variants={draw} d="M28,14 C30,12 34,12 36,14" />
        <motion.circle variants={draw} cx="32" cy="14" r="2" fill={strokeColor} stroke="none" />
        <motion.path variants={draw} d="M12,48 C12,44 16,40 22,40 L28,40 L30,48 L14,48 Z" fill="#ffffff" />
        <motion.path variants={draw} d="M28,44 L38,44" strokeWidth="3" />
        <motion.circle variants={draw} cx="14" cy="30" r="1.5" fill={strokeColor} stroke="none" />
        <motion.circle variants={draw} cx="48" cy="34" r="2.5" />
        <motion.circle variants={draw} cx="50" cy="46" r="1.5" fill={strokeColor} stroke="none" />
      </motion.svg>
    );
  }
  if (name.includes("liquid detergent")) {
    return (
      <motion.svg {...svgProps}>
        <motion.rect variants={draw} x="28" y="8" width="8" height="6" rx="1" />
        <motion.path variants={draw} d="M26,14 L38,14 C40,20 44,22 44,28 L44,52 C44,56 40,58 32,58 C24,58 20,56 20,52 L20,28 C20,22 24,20 26,14 Z" />
        <motion.path variants={draw} d="M44,28 C49,28 51,32 51,36 L51,44 C51,48 49,50 44,50" />
        <motion.rect variants={draw} x="25" y="32" width="14" height="14" rx="1" />
        <motion.line variants={draw} x1="28" y1="38" x2="36" y2="38" />
      </motion.svg>
    );
  }
  if (name.includes("fabric softener")) {
    return (
      <motion.svg {...svgProps}>
        <motion.rect variants={draw} x="27" y="6" width="10" height="8" rx="1" />
        <motion.path variants={draw} d="M24,14 L40,14 C40,14 36,22 42,26 L42,50 C42,55 38,58 32,58 C26,58 22,55 22,50 L22,26 C28,22 24,14 24,14 Z" />
        <motion.path variants={draw} d="M42,30 C47,32 47,42 42,44" />
      </motion.svg>
    );
  }
  if (name.includes("soap & shampoo")) {
    return (
      <motion.svg {...svgProps}>
        <motion.path variants={draw} d="M32,24 C43,24 48,30 48,40 L48,50 C48,55 42,58 32,58 C22,58 16,55 16,50 L16,40 C16,30 21,24 32,24 Z" />
        <motion.rect variants={draw} x="29" y="18" width="6" height="6" />
        <motion.path variants={draw} d="M25,14 L35,14 L35,18 L25,18 Z" />
        <motion.path variants={draw} d="M25,16 C20,16 20,20 22,20" />
        <motion.path variants={draw} d="M17,44 Q32,46 47,44" strokeDasharray="3 3" />
      </motion.svg>
    );
  }
  if (name.includes("air freshener")) {
    return (
      <motion.svg {...svgProps}>
        <motion.rect variants={draw} x="23" y="24" width="18" height="32" rx="3" />
        <motion.path variants={draw} d="M26,24 C26,18 28,14 32,14 C36,14 38,18 38,24" />
        <motion.path variants={draw} d="M30,14 L30,10 C30,9 31,8 32,8 C33,8 34,9 34,10 L34,14" />
        <motion.circle variants={draw} cx="32" cy="4" r="1" fill={strokeColor} stroke="none" />
        <motion.circle variants={draw} cx="26" cy="6" r="1.2" fill={strokeColor} stroke="none" />
        <motion.circle variants={draw} cx="38" cy="6" r="1.2" fill={strokeColor} stroke="none" />
      </motion.svg>
    );
  }
  if (name.includes("phenyl & cleaners")) {
    return (
      <motion.svg {...svgProps}>
        <motion.path variants={draw} d="M26,28 L38,28 L37,52 C37,55 35,58 32,58 C29,58 27,55 27,52 Z" />
        <motion.path variants={draw} d="M29,28 L29,20 L35,20 L35,28" />
        <motion.path variants={draw} d="M23,12 L37,12 C40,12 41,14 41,16 L41,20 L23,20 Z" />
        <motion.path variants={draw} d="M18,16 L23,16" />
        <motion.path variants={draw} d="M37,20 L40,25" />
      </motion.svg>
    );
  }
  return (
    <motion.svg {...svgProps}>
      <motion.rect variants={draw} x="20" y="24" width="24" height="28" rx="3" />
      <motion.rect variants={draw} x="23" y="16" width="18" height="8" rx="2" />
      <motion.path variants={draw} d="M32,16 C30,12 26,12 28,14 C30,16 32,16 32,16 Z" />
      <motion.path variants={draw} d="M32,16 C34,12 38,12 36,14 C34,16 32,16 32,16 Z" />
    </motion.svg>
  );
};

const IdealFor = () => {
  const items = [
    { label: "DETERGENT POWDER" },
    { label: "LIQUID DETERGENT" },
    { label: "FABRIC SOFTENER" },
    { label: "SOAP & SHAMPOO" },
    { label: "AIR FRESHENER" },
    { label: "PHENYL & CLEANERS" },
    { label: "COSMETIC PRODUCTS" }
  ];

  return (
    <section id="ideal-for" className="py-20 scroll-mt-6 md:scroll-mt-12 bg-white relative">
      <div className="container mx-auto px-4">
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8, staggerChildren: 0.1 } }
          }}
          className="relative border-2 border-brand-purple/20 rounded-3xl pt-12 pb-8 px-4 sm:px-6 shadow-sm"
        >
          
          <motion.h2 
            animate={{ scale: [1, 1.05, 1], y: ["-50%", "-60%", "-50%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 bg-brand-purple-dark text-white px-8 py-2 rounded-md shadow-md font-black text-sm md:text-base tracking-widest uppercase border border-purple-300 m-0"
          >
            IDEAL FOR
          </motion.h2>

          <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-y-8 divide-x-0 sm:divide-x lg:divide-x divide-purple-100 mt-4 list-none p-0">
            {items.map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                }}
                whileHover={{ y: -10, scale: 1.1 }}
                className="flex flex-col items-center gap-4 text-center px-2 group"
              >
                <motion.div 
                  initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}
                  animate={{ rotate: [-5, 5, -5] }}
                  transition={{ rotate: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.1 } }}
                  className="text-brand-purple"
                >
                  <IdealForIcon label={item.label} />
                </motion.div>
                <span className="text-[10px] md:text-xs font-black text-brand-purple-dark leading-tight tracking-wider uppercase group-hover:text-brand-purple transition-colors duration-200">
                  {item.label}
                </span>
              </motion.li>
            ))}
          </ul>

        </motion.div>
      </div>
    </section>
  );
};

export default IdealFor;
