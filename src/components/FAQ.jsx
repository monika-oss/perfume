import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-purple-100 last:border-0">
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple rounded px-2"
        aria-expanded={isOpen}
      >
        <h3 className="font-bold text-slate-800 text-sm sm:text-base md:text-lg pr-4">{question}</h3>
        <motion.div 
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-brand-purple shrink-0"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-5 px-2 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What makes Sai Tirupati Trading Enterprises' perfumes premium?",
      answer: "Our luxury perfumes are meticulously crafted using the finest globally sourced ingredients, resulting in highly concentrated and long-lasting fragrances. We specialize in sophisticated blends like aged oudh, premium sandalwood, and exotic floral extracts to deliver a truly premium experience."
    },
    {
      question: "Are your luxury fragrances long-lasting?",
      answer: "Yes, our perfumes are formulated with high-quality base notes and premium fixatives, ensuring that the fragrance stays on your skin and clothes throughout the day. Customers often praise our Woody and Oriental collections for their exceptional longevity."
    },
    {
      question: "Do you offer perfumes for both men and women?",
      answer: "Absolutely. We offer a wide range of luxury fragrances suitable for men, women, and unisex preferences. From sweet floral notes to intense spicy and woody aromas, our collection is designed to cater to diverse tastes."
    },
    {
      question: "Where can I buy Sai Tirupati Trading Enterprises perfumes?",
      answer: "Currently, you can explore our complete fragrance range directly on our website. We are expanding our distribution and frequently offer our premium collections through exclusive retail partners in India."
    }
  ];

  // Generate FAQ Schema for Google and AI Search engines
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-20 bg-white relative overflow-hidden">
      {/* Inject FAQ Schema into the DOM invisibly */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-serif text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-pink mb-4 pb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Everything you need to know about our premium luxury fragrance collections.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(114,9,183,0.08)] border border-purple-100 p-6 md:p-8"
        >
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
