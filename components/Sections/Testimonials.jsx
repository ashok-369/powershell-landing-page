
import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../../constants';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from '../UI/LanguageToggle';
import { gsap } from 'gsap';

const GenericUserIcon = ({ className = "" }) => (
  <div className={`w-16 h-16 rounded-full bg-gradient-to-b from-[#6BA5F2] to-[#3B82F6] flex items-center justify-center overflow-hidden shadow-inner border-2 border-white/20 relative shrink-0 ${className}`}>
    <svg viewBox="0 0 24 24" fill="white" className="w-12 h-12 mt-3 drop-shadow-sm">
      <circle cx="12" cy="7" r="4" />
      <path d="M12 13c-4.418 0-8 2.5-8 5.5V20h16v-1.5c0-3-3.582-5.5-8-5.5z" />
    </svg>
    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
  </div>
);

export const Testimonials = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const gridRef = useRef(null);

  const visibleTestimonials = showAll ? TESTIMONIALS : TESTIMONIALS.slice(0, 3);

  useEffect(() => {
    if (showAll && gridRef.current) {
      const newItems = gridRef.current.children;
      gsap.fromTo(Array.from(newItems).slice(3), 
        { opacity: 0, scale: 0.9, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" }
      );
    }
  }, [showAll]);

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-cream dark:from-zinc-900 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-h2 text-deep dark:text-white tracking-tight">{t('success_stories_title')}</h2>
            <p className="text-body-lg text-deep/60 dark:text-white/40">{t('success_stories_sub')}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} fill="#F58220" stroke="none" size={24} />)}
            </div>
            <span className="font-bold text-deep dark:text-white text-sm">4.9/5 {t('avg_rating')}</span>
          </div>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-10 bg-cream dark:bg-zinc-900/50 rounded-card relative group hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-primary/10">
              <Quote className="absolute top-8 right-8 text-primary/5 w-20 h-20" />
              <div className="flex items-center gap-5 mb-8">
                <GenericUserIcon />
                <div>
                  <h4 className="font-heading font-extrabold text-deep dark:text-white leading-tight">{testimonial.name}</h4>
                  <p className="text-[11px] text-secondary font-extrabold uppercase tracking-widest mt-1">{testimonial.role} @ {testimonial.company}</p>
                </div>
              </div>
              <p className="text-body text-deep/70 dark:text-white/60 italic leading-relaxed">"{testimonial.text}"</p>
              <div className="mt-8 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="#F58220" stroke="none" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="text-primary font-bold hover:underline text-lg inline-flex items-center gap-2 group outline-none"
          >
            {showAll ? t('view_less') : t('view_more')} 
            <span className={`group-hover:translate-x-1 transition-transform ${showAll ? 'rotate-180' : ''}`}>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
