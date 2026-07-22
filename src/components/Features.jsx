import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    "Long Lasting Fragrance",
    "Superior Quality",
    "Wide Range",
    "Premium Ingredients"
  ];

  return (
    <section aria-label="Why Choose Us" className="relative z-20 -mt-10 mb-12 px-4" style={{ perspective: "1000px" }}>
      <h2 className="sr-only">Why Choose Sai Tirupati Perfumes</h2>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="container mx-auto bg-white/95 backdrop-blur-md py-6 px-8 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.1)] border border-brand-purple/10 max-w-6xl"
      >
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-2 sm:flex sm:flex-row sm:flex-wrap justify-center md:justify-between items-center gap-y-4 gap-x-2 sm:gap-5 list-none m-0 p-0"
        >
          {features.map((feature, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.5, rotateX: 90, y: 50, z: -100 },
                visible: {
                  opacity: 1, scale: 1, rotateX: 0, y: 0, z: 0,
                  transition: { type: "spring", stiffness: 100, damping: 15, mass: 1.2 }
                }
              }}
              whileHover={{ scale: 1.1, color: "#7209b7", y: -5, transition: { type: "spring", stiffness: 300 } }}
              className="flex items-center gap-1.5 sm:gap-2 text-slate-800 font-semibold text-[11px] min-[400px]:text-xs sm:text-sm md:text-lg cursor-pointer justify-start sm:justify-start"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", delay: 0.2 + (index * 0.1), bounce: 0.6 }}
              >
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-brand-purple drop-shadow-md" aria-hidden="true" />
              </motion.div>
              <span>{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default Features;
