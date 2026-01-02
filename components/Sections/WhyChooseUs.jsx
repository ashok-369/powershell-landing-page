
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WHY_CHOOSE_US } from '../../constants.jsx';
import { Card } from '../UI/Card';

gsap.registerPlugin(ScrollTrigger);

export const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    if (cardsRef.current) {
      const cards = cardsRef.current.children;
      gsap.fromTo(cards, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.15, 
          duration: 0.8, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  const subLinkIds = {
    0: 'trainers',
    1: 'labs',
    2: 'feature-schedule',
    5: 'placement'
  };

  return (
    <section id="why-choose-us" ref={sectionRef} className="py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="container mx-auto max-w-[1280px] px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto space-y-6">
          <h2 className="text-h2 text-deep dark:text-white tracking-tight">The Neel Technologies Advantage</h2>
          <p className="text-body-lg text-deep/60 dark:text-white/40">We transcend traditional learning by embedding production-grade engineering into our core curriculum.</p>
        </div>
        
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {WHY_CHOOSE_US.map((item, idx) => (
            <Card key={idx} className="group" id={subLinkIds[idx]}>
              <div className="mb-8 w-16 h-16 flex items-center justify-center bg-cream dark:bg-white/5 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-h4 text-deep dark:text-white mb-4">{item.title}</h3>
              <p className="text-body text-deep/60 dark:text-white/40 leading-relaxed font-medium">{item.text}</p>
            </Card>
          ))}
        </div>

        <div className="mt-20 p-12 bg-cream dark:bg-zinc-900 rounded-card border border-lightCream dark:border-white/5 shadow-inner flex flex-col md:flex-row items-center justify-around gap-12">
            <div className="text-center">
                <span className="block text-h2 text-primary">500+</span>
                <p className="text-[12px] uppercase tracking-[0.3em] font-extrabold text-deep/50 dark:text-white/40 mt-2">Hiring Partners</p>
            </div>
            <div className="h-16 w-px bg-deep/10 dark:bg-white/10 hidden md:block"></div>
            <div className="text-center">
                <span className="block text-h2 text-primary">₹12L</span>
                <p className="text-[12px] uppercase tracking-[0.3em] font-extrabold text-deep/50 dark:text-white/40 mt-2">Avg. Salary Package</p>
            </div>
            <div className="h-16 w-px bg-deep/10 dark:bg-white/10 hidden md:block"></div>
            <div className="text-center">
                <span className="block text-h2 text-primary">100%</span>
                <p className="text-[12px] uppercase tracking-[0.3em] font-extrabold text-deep/50 dark:text-white/40 mt-2">Placement Support</p>
            </div>
        </div>
      </div>
    </section>
  );
};
