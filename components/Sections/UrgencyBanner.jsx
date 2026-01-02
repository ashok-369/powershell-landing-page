
import React, { useState, useEffect } from 'react';
import { Zap, Timer, ArrowRight, X } from 'lucide-react';

export const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const totalSeconds = 5 * 60 * 60;
    const storageKey = 'neel_tech_discount_expiry';
    let expiryTime = localStorage.getItem(storageKey);

    if (!expiryTime) {
      expiryTime = (Date.now() + totalSeconds * 1000).toString();
      localStorage.setItem(storageKey, expiryTime);
    }

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, parseInt(expiryTime) - now);
      
      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  const format = (n) => n.toString().padStart(2, '0');

  return (
    <div className="relative w-full bg-gradient-to-r from-redBrown via-secondary to-redBrown text-white py-2 px-4 shadow-xl overflow-hidden border-b border-white/20">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
        <div className="flex items-center gap-2">
          <div className="p-1 bg-white/20 rounded-lg animate-pulse">
            <Zap size={14} className="fill-white" />
          </div>
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] whitespace-nowrap">
            FLASH SALE: 30% OFF EXPIRES IN
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono bg-black/20 px-4 py-1 rounded-full border border-white/10 shadow-inner">
          <Timer size={14} className="text-white/70" />
          <div className="flex gap-1 text-sm sm:text-base font-black tracking-tighter">
            <span className="text-white">{format(timeLeft.hours)}</span>
            <span className="text-white/40 animate-pulse">:</span>
            <span className="text-white">{format(timeLeft.minutes)}</span>
            <span className="text-white/40 animate-pulse">:</span>
            <span className="text-secondary-200 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
              {format(timeLeft.seconds)}
            </span>
          </div>
        </div>

        <a 
          href="https://wa.me/916361866299?text=Hi, I want to claim the 30% Flash Sale discount! I saw the timer in the top banner." 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-redBrown px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-lg"
        >
          Claim Now <ArrowRight size={12} />
        </a>

        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-0 sm:relative sm:ml-4 text-white/40 hover:text-white transition-colors"
        >
          <X size={16} />
        </button>
      </div>
      
      <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] animate-[shine_3s_infinite]"></div>
      <style>{`
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
      `}</style>
    </div>
  );
};
