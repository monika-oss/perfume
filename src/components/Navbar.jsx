import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Fragrance Range", href: "#fragrance-range" },
    { label: "Ideal For", href: "#ideal-for" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <>
      {/* Mobile Menu Backdrop Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 md:px-8 pointer-events-none">
      <nav className="relative w-full max-w-7xl bg-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-purple-100 overflow-visible pointer-events-auto">
        <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo & Brand */}
          <a href="/" aria-label="Sai Tirupati Homepage" className="flex items-center gap-2 md:gap-3">
            <img 
              src="/images/logo.webp" 
              alt="Sai Tirupati Logo" 
              className="w-14 h-14 md:w-20 md:h-20 object-contain shrink-0 transition-transform duration-300 hover:scale-105 mix-blend-multiply"
            />
            
            <div className="flex flex-col leading-none justify-center gap-0.5 mt-1">
              <span className="font-black text-[#1a237e] text-xs md:text-[1.1rem] uppercase tracking-tight">SAI TIRUPATI</span>
              <span className="font-black text-red-600 text-[7px] md:text-[13px] uppercase tracking-tight">TRADING ENTERPRISES</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-2 lg:gap-8">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                className="relative text-slate-700 hover:text-brand-purple font-bold text-[11px] lg:text-sm whitespace-nowrap transition-all duration-300 group px-1 lg:px-2 py-1 active:scale-95"
              >
                {link.label}
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-brand-purple to-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA Call Button */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:9345315579" 
              aria-label="Call Us at 9345315579"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-purple to-brand-pink-dark text-white font-bold py-2.5 px-5 rounded-full text-sm shadow-md hover:shadow-[0_4px_15px_rgba(114,9,183,0.3)] transition-all hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle mobile menu"
              className="text-slate-700 hover:text-brand-purple transition-colors p-1"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-[calc(100%+0.5rem)] left-0 right-0 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] p-5 border border-purple-100 flex flex-col space-y-2 z-50">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-700 hover:text-brand-purple font-semibold text-base py-2 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a 
                href="tel:9345315579" 
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-purple to-brand-pink-dark text-white font-bold py-3 px-5 rounded-full text-base shadow-md w-full"
              >
                <Phone className="w-5 h-5" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        )}
        
      </div>
      </nav>
    </div>
    </>
  );
};

export default Navbar;
