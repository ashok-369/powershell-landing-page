
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Mail, Phone } from 'lucide-react';
import { TopoPattern } from './Patterns';
import { NTLogo } from './Logo';
import neelLogo from '../assets/neelLogo.png'

const Footer = () => {
  const handleFooterLink = (href) => {
    const gsap = window.gsap;
    if (gsap) {
      const target = document.querySelector(href);
      if (target) {
        gsap.to(window, {
          duration: 1.5,
          scrollTo: { y: target, offsetY: 90 },
          ease: "power4.inOut"
        });
        window.history.pushState(null, '', href);
      }
    } else {
      window.location.hash = href;
    }
  };

  return (
    <footer className="relative bg-[#004e89] text-white pt-24 pb-12 overflow-hidden">
      <TopoPattern className="absolute inset-0 opacity-10 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <button 
              onClick={() => handleFooterLink('#home')}
              className="flex items-center gap-4 mb-10 group inline-flex bg-transparent border-none cursor-pointer"
            >
              {/* <NTLogo className="w-16 h-16 bg-white rounded-2xl p-2 group-hover:scale-110 transition-transform" /> */}
     
     <img src={neelLogo} width="70" alt="Logo"/>
              {/* <div className="flex flex-col text-left">
                <span className="text-2xl font-black tracking-tighter">NEEL</span>
                <span className="text-xs font-bold text-[#f39221] uppercase tracking-[0.2em]">Technologies</span>
              </div> */}
            </button>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Transforming aspiring IT professionals into elite Cloud Architects through focused, practical, and mentor-led training.
            </p>
            <div className="flex gap-5">
              {[Youtube, Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#f39221] hover:border-[#f39221] transition-all text-white/70 hover:text-white transform hover:-translate-y-1">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black mb-10 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#f39221] rounded-full"></span>
              Popular Courses
            </h4>
            <ul className="space-y-4 text-white/50 font-medium list-none p-0">
              <li><button onClick={() => handleFooterLink('#home')} className="hover:text-[#f39221] transition-colors cursor-pointer bg-transparent border-none text-left w-full">AWS Cloud Architect</button></li>
              <li><button onClick={() => handleFooterLink('#home')} className="hover:text-[#f39221] transition-colors cursor-pointer bg-transparent border-none text-left w-full">Azure Cloud Mastery</button></li>
              <li><button onClick={() => handleFooterLink('#home')} className="hover:text-[#f39221] transition-colors cursor-pointer bg-transparent border-none text-left w-full">Windows PowerShell</button></li>
              <li><button onClick={() => handleFooterLink('#home')} className="hover:text-[#f39221] transition-colors cursor-pointer bg-transparent border-none text-left w-full">Python for Cloud</button></li>
              <li><button onClick={() => handleFooterLink('#home')} className="hover:text-[#f39221] transition-colors cursor-pointer bg-transparent border-none text-left w-full">Ethical Hacking</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-10 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#f39221] rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-4 text-white/50 font-medium list-none p-0">
              <li><button onClick={() => handleFooterLink('#about')} className="hover:text-[#f39221] transition-colors cursor-pointer bg-transparent border-none text-left w-full">About Us</button></li>
              <li><button onClick={() => handleFooterLink('#schedule')} className="hover:text-[#f39221] transition-colors cursor-pointer bg-transparent border-none text-left w-full">Batch Schedule</button></li>
              <li><button onClick={() => handleFooterLink('#testimonials')} className="hover:text-[#f39221] transition-colors cursor-pointer bg-transparent border-none text-left w-full">Success Stories</button></li>
              <li><button onClick={() => handleFooterLink('#placements')} className="hover:text-[#f39221] transition-colors cursor-pointer bg-transparent border-none text-left w-full">Placement Desk</button></li>
              <li><button onClick={() => handleFooterLink('#get-started')} className="hover:text-[#f39221] transition-colors cursor-pointer bg-transparent border-none text-left w-full">Contact Support</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-10 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#f39221] rounded-full"></span>
              Get in Touch
            </h4>
            <div className="space-y-8 font-medium text-white/70">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#f39221] shrink-0" size={24} />
                <span>Doddabele Kengeri, Bangalore - 560040</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-[#f39221] shrink-0" size={24} />
                <a href="tel:+916361866299" className="text-xl font-black hover:text-[#f39221] transition-colors">+91 6361866299</a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-[#f39221] shrink-0" size={24} />
                <a href="mailto:info@neeltechnologies.net" className="hover:text-[#f39221] transition-colors">info@neeltechnologies.net</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
          <p>© 2025 All Rights Reserved by Neel Technologies. Built for Excellence.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
