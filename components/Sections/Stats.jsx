
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Users, CheckCircle, Headphones } from 'lucide-react';
import { useTranslation } from '../UI/LanguageToggle';

gsap.registerPlugin(ScrollTrigger);

const StatCard = ({ icon, value, label, suffix }) => {
  const numberRef = useRef(null);

  useEffect(() => {
    if (numberRef.current) {
      gsap.fromTo(numberRef.current, 
        { innerText: 0 },
        {
          innerText: value,
          duration: 2,
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: numberRef.current,
            start: "top 90%",
          }
        }
      );
    }
  }, [value]);

  return (
    <div className="flex flex-col items-center p-8 bg-white/50 dark:bg-zinc-800/50 backdrop-blur-md rounded-2xl border border-white dark:border-white/10 hover:shadow-xl transition-all duration-500 group">
      <div className="p-4 bg-primary/10 text-primary rounded-xl mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <div className="text-4xl font-heading font-extrabold text-deep dark:text-white">
        <span ref={numberRef}>0</span>{suffix}
      </div>
      <div className="mt-2 text-deep/60 dark:text-white/40 font-medium">{label}</div>
    </div>
  );
};

export const Stats = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-cream dark:bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard 
            icon={<Award size={32} />} 
            value={98} 
            suffix="%" 
            label={t('stats_success')} 
          />
          <StatCard 
            icon={<Users size={32} />} 
            value={1500} 
            suffix="+" 
            label={t('stats_students')} 
          />
          <StatCard 
            icon={<CheckCircle size={32} />} 
            value={96} 
            suffix="%" 
            label={t('stats_placement')} 
          />
          <StatCard 
            icon={<Headphones size={32} />} 
            value={24} 
            suffix="/7" 
            label={t('stats_support')} 
          />
        </div>
      </div>
    </section>
  );
};
