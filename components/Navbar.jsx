
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NTLogo } from './Logo';
import neelLogo from '../assets/neelLogo.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQs', href: '#faq' },
  ];

  const scrollToSection = (href) => {
    setIsMenuOpen(false);
    
    const gsap = window.gsap;
    if (gsap) {
      const targetId = href.startsWith('#') ? href : `#${href}`;
      const target = document.querySelector(targetId);
      
      if (target) {
        gsap.to(window, {
          duration: 1.2,
          scrollTo: { y: target, offsetY: 90 },
          ease: "power4.inOut",
          onComplete: () => {
            window.history.pushState(null, '', targetId);
            if (window.ScrollTrigger) {
              window.ScrollTrigger.refresh();
            }
          }
        });
      }
    } else {
      window.location.hash = href;
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-2 shadow-xl' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-2 flex justify-between items-center">
        <button 
          onClick={() => scrollToSection('#home')}
          className="flex items-center gap-3 group cursor-pointer border-none bg-transparent"
        >
  <img src={neelLogo} width="70" alt="Logo"/>
        
          {/* <NTLogo className="w-12 h-12 lg:w-14 lg:h-14 group-hover:rotate-6 transition-transform logo-glow" />
          <div className="flex flex-col text-left">
            <span className="text-xl lg:text-2xl font-black text-[#004e89] tracking-tighter leading-none">NEEL</span>
            <span className="text-[10px] lg:text-xs font-bold text-[#f39221] uppercase tracking-[0.2em] leading-none">Technologies</span>
          </div>*/}
        </button> 

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => scrollToSection(link.href)}
              className="text-[#004e89] font-bold text-sm uppercase tracking-wider hover:text-[#f39221] transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#f39221] after:transition-all hover:after:w-full bg-transparent border-none p-0 cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('#get-started')}
            className="flex items-center gap-2 bg-[#f39221] text-white px-6 py-3 rounded-xl hover:bg-[#004e89] transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20 border-none font-bold"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-[#004e89] p-2 bg-transparent border-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden glass absolute top-full left-0 right-0 border-t py-8 flex flex-col items-center gap-6 shadow-2xl animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              className="text-xl font-bold text-[#004e89] hover:text-[#f39221] bg-transparent border-none"
              onClick={() => scrollToSection(link.href)}
            >
              {link.name}
            </button>
          ))}
          <button 
            className="flex items-center gap-3 bg-[#f39221] text-white px-10 py-4 rounded-2xl font-black shadow-xl border-none"
            onClick={() => scrollToSection('#get-started')}
          >
            GET STARTED
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
