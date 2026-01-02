
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { Button } from '../UI/Button';
import { Eye, PlayCircle, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { useTranslation } from '../UI/LanguageToggle';
import neelLogo from "../../assets/neelLogo.png";

gsap.registerPlugin(TextPlugin);

export const Hero = () => {
  const headlineRef = useRef(null);
  const badgeRef = useRef(null);
  const meshRef = useRef(null);
  const { t, lang } = useTranslation();

  useEffect(() => {
    if (headlineRef.current) {
      headlineRef.current.innerText = "";
      gsap.to(headlineRef.current, {
        duration: 2.2,
        text: t('hero_title'),
        ease: "power1.inOut",
        delay: 0.2
      });
    }

    if (badgeRef.current) {
      gsap.to(badgeRef.current, {
        y: 12,
        rotationZ: 2,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

    if (meshRef.current) {
      const nodes = meshRef.current.querySelectorAll('.tech-node');
      const connections = meshRef.current.querySelectorAll('.tech-connection');

      gsap.to(nodes, {
        scale: 1.5,
        opacity: 0.8,
        duration: "random(1.5, 3)",
        repeat: -1,
        yoyo: true,
        stagger: {
          each: 0.2,
          from: "random"
        },
        ease: "sine.inOut"
      });

      gsap.fromTo(connections, 
        { strokeDashoffset: 100 },
        { strokeDashoffset: 0, duration: 4, repeat: -1, ease: "none", stagger: 0.5 }
      );
    }
  }, [lang, t]);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-16 flex items-center bg-gradient-to-br from-[#003B6B] via-[#004C8B] to-[#0070BA] dark:from-[#0F172A] dark:to-[#1E293B] overflow-hidden">
      <svg ref={meshRef} className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        <g stroke="#F58220" strokeWidth="1" fill="none">
          <path className="tech-connection" d="M100,200 L300,400 L500,200" strokeDasharray="10 5" />
          <path className="tech-connection" d="M800,100 L600,300 L900,500" strokeDasharray="10 5" />
          <path className="tech-connection" d="M200,800 L400,600 L100,400" strokeDasharray="10 5" />
        </g>
        
        {Array.from({ length: 20 }).map((_, i) => (
          <circle 
            key={i} 
            className="tech-node fill-secondary" 
            cx={Math.random() * 1000} 
            cy={Math.random() * 1000} 
            r="3" 
            filter="url(#glow)"
            opacity="0.3"
          />
        ))}
      </svg>

      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[150px] -mr-96 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -ml-48 -mb-24"></div>
      
      <div className="container mx-auto max-w-[1280px] px-6 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
        <div className="text-left space-y-10">
          <div className="flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/10 text-white rounded-full border border-white/20 font-bold text-xs tracking-[0.15em] shadow-sm backdrop-blur-md">
              <ShieldCheck size={18} className="text-secondary" />
              <span className="uppercase">{t('hero_badge')}</span>
            </div>
            <a 
              href="https://wa.me/916361866299?text=Hi, I want to claim the 30% discount! I saw the offer in the hero section."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 bg-secondary text-white rounded-full font-black text-xs tracking-[0.15em] shadow-lg animate-pulse hover:scale-105 active:scale-95 transition-transform cursor-pointer"
            >
              <Sparkles size={18} />
              <span>30% OFF - LIMITED TIME</span>
            </a>
          </div>
          
          <h1 
            ref={headlineRef} 
            className="text-h1 md:text-[64px] font-heading font-extrabold text-white leading-[1.1] tracking-tight min-h-[144px] md:min-h-[216px]"
          >
          </h1>
          
          <p className="text-body-lg text-white/80 max-w-xl font-normal leading-relaxed">
            {t('hero_sub')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <Button variant="primary" className="min-w-[240px] h-[60px] text-lg" data-trigger="demo">
              <PlayCircle size={24} /> {t('btn_demo')}
            </Button>
            <a href="#curriculum" onClick={(e) => handleScrollTo(e, 'curriculum')} className="block">
              <Button variant="outline" className="min-w-[240px] h-[60px] text-lg border-white text-white hover:bg-white/10 w-full sm:w-auto">
                <Eye size={24} /> {t('btn_syllabus')}
              </Button>
            </a>
          </div>

          <div className="pt-12 flex items-center gap-16 border-t border-white/10">
            <div className="space-y-2">
              <span className="text-4xl font-heading font-extrabold text-secondary">98%</span>
              <p className="text-[12px] uppercase tracking-[0.25em] text-white/50 font-bold">{t('stats_success')}</p>
            </div>
            <div className="space-y-2">
              <span className="text-4xl font-heading font-extrabold text-secondary">1500+</span>
              <p className="text-[12px] uppercase tracking-[0.25em] text-white/50 font-bold">{t('stats_students')}</p>
            </div>
            <div className="space-y-2 flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-secondary">
                 <Zap size={24} fill="currentColor" />
              </div>
              <p className="text-[12px] uppercase tracking-[0.25em] text-white/50 font-bold">Fast-Track Career</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center perspective-1000">
          <div 
            ref={badgeRef}
            className="w-[440px] h-[500px] bg-white dark:bg-zinc-900 rounded-card shadow-premium p-12 border-t-[12px] border-secondary relative overflow-hidden group hover:shadow-premium-hover transition-all duration-500"
          >
            <svg className="absolute inset-0 w-full h-full opacity-5 group-hover:opacity-10 transition-opacity" viewBox="0 0 100 100">
              <path d="M0,50 L20,50 L30,30 L50,70 L60,50 L100,50" stroke="currentColor" fill="none" className="text-primary stroke-2" />
              <circle cx="20" cy="50" r="2" fill="currentColor" className="text-primary" />
              <circle cx="60" cy="50" r="2" fill="currentColor" className="text-primary" />
            </svg>
          

            <div className="absolute -top-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldCheck size={280} className="text-primary" />
            </div>
            
            <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mb-10 shadow-inner">
               {/* <div className="w-16 h-16 brand-logo-circle bg-white rounded-full flex items-center justify-center relative">
                  <span className="text-primary font-heading font-black text-xl italic relative z-10">N</span>
                  <span className="text-secondary font-heading font-black text-xl italic absolute transform translate-x-2 -translate-y-0.5">T</span>
               </div> */}
                 <img
              src={neelLogo}
              alt="Neel Logo"
              style={{ width: "48px", height: "auto" }}
            />
            </div>
            
            <h3 className="text-3xl font-heading font-extrabold text-primary dark:text-white mb-3 tracking-tighter">AWS SOLUTIONS ARCHITECT</h3>
            <p className="text-secondary text-xl font-bold mb-10 italic">Professional Certification</p>
            
            <div className="space-y-8">
              <div className="space-y-3">
                <div className="flex justify-between text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary/50 dark:text-white/40">
                  <span>Batch Capacity</span>
                  <span>16/20 Filled</span>
                </div>
                <div className="w-full h-3 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                  <div className="w-[80%] h-full bg-gradient-to-r from-primary to-accent shadow-inner"></div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-slate-100 dark:border-white/10">
                <div className="flex items-center gap-3 text-success font-black text-lg mb-2">
                  <Sparkles size={20} /> SAVE 30% TODAY
                </div>
                {/* <p className="text-body-sm text-primary/60 dark:text-white/40 leading-relaxed font-medium">
                  ISO 9001:2015 Certified Training Methodology
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
