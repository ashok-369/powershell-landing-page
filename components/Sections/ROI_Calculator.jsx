
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../UI/Button';
import { TrendingUp, Wallet, ArrowRight, Timer, AlertCircle, Users, Zap, CheckCircle, Sparkles, Gift } from 'lucide-react';
import { useTranslation } from '../UI/LanguageToggle';
import { gsap } from 'gsap';

export const ROICalculator = () => {
  const { t } = useTranslation();
  const [currentSalary, setCurrentSalary] = useState(500000);
  const [experience, setExperience] = useState(2);
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 0, seconds: 0 });
  const [progress, setProgress] = useState(100);
  const [seatsLeft, setSeatsLeft] = useState(16);
  const [activeUser, setActiveUser] = useState("Someone from Pune just joined...");
  const [showSecretBonus, setShowSecretBonus] = useState(false);
  
  const timerRef = useRef(null);
  const cardRef = useRef(null);

  const estimatedHike = currentSalary * (0.3 + (experience * 0.1));
  const newSalary = currentSalary + estimatedHike;

  // Persistent Countdown & Seats Simulation
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
      
      const h = Math.floor(diff / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ hours: h, minutes: m, seconds: s });
      setProgress((diff / (totalSeconds * 1000)) * 100);

      if (s % 45 === 0 && Math.random() > 0.7) {
        setSeatsLeft(prev => Math.max(3, prev - 1));
      }
    }, 1000);

    const locations = ["Bangalore", "Mumbai", "Delhi", "Chennai", "Hyderabad", "Kolkata", "London", "New York"];
    const pingInterval = setInterval(() => {
      const loc = locations[Math.floor(Math.random() * locations.length)];
      setActiveUser(`Someone from ${loc} just viewed the course...`);
      gsap.fromTo(".social-ping", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 });
    }, 8000);

    return () => {
      clearInterval(interval);
      clearInterval(pingInterval);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    gsap.to(cardRef.current, { rotateX, rotateY, duration: 0.5, ease: "power2.out" });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, { rotateX: 0, rotateY: 0, duration: 0.5 });
  };

  const formatNum = (n) => n.toString().padStart(2, '0');

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-[#002B4D] text-white p-10 rounded-[2.5rem] shadow-2xl border border-white/10 relative overflow-hidden group perspective-1000"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/20 to-transparent -translate-y-full animate-[scan_4s_linear_infinite] pointer-events-none"></div>
      
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(500%); }
        }
        .timer-glow { box-shadow: 0 0 20px rgba(245, 130, 32, 0.2); }
        .liquid-progress {
          background: linear-gradient(90deg, #F58220 0%, #E65100 50%, #F58220 100%);
          background-size: 200% 100%;
          animation: wave 2s linear infinite;
        }
        @keyframes wave {
          0% { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }
      `}</style>

      <div className="absolute top-4 left-1/2 -translate-x-1/2 social-ping flex items-center gap-2 whitespace-nowrap bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-[9px] uppercase tracking-widest font-bold text-white/60">
        <Users size={12} className="text-secondary" />
        {activeUser}
      </div>
      
      <div className="flex items-center gap-3 mb-10 mt-6 relative z-10">
        <TrendingUp className="text-secondary" />
        <h3 className="text-2xl font-heading font-bold">{t('roi_title')}</h3>
      </div>

      <div className="space-y-10 relative z-10">
        <div className="space-y-6">
          <div>
            <div className="flex justify-between items-center mb-3">
               <label className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-black">{t('roi_salary_label')}</label>
               <span className="text-secondary font-black text-lg">₹ {currentSalary.toLocaleString()}</span>
            </div>
            <input 
              type="range" min="300000" max="3000000" step="50000" 
              value={currentSalary} 
              onChange={(e) => setCurrentSalary(Number(e.target.value))}
              className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-secondary"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-black">{t('roi_exp_label')}</label>
              <span className="text-secondary font-black text-lg">{experience} Years</span>
            </div>
            <input 
              type="range" min="0" max="15" step="1" 
              value={experience} 
              onChange={(e) => setExperience(Number(e.target.value))}
              className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-secondary"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5 bg-white/5 -mx-10 px-10">
          <div className="space-y-1">
            <div className="text-[10px] text-white/40 uppercase tracking-widest font-black">{t('roi_hike_label')}</div>
            <div className="text-2xl font-black text-success">+₹{estimatedHike.toLocaleString()}</div>
          </div>
          <div className="space-y-1 border-l border-white/5 pl-8">
            <div className="text-[10px] text-white/40 uppercase tracking-widest font-black">{t('roi_proj_label')}</div>
            <div className="text-2xl font-black text-white">₹{newSalary.toLocaleString()}</div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-secondary font-black text-[11px] uppercase tracking-[0.2em]">
              <Timer size={16} className="animate-spin-slow" />
              Offer Countdown
            </div>
            <div className="flex items-center gap-2 bg-red-500/10 text-red-400 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-red-500/20 animate-pulse">
              <AlertCircle size={12} />
              {seatsLeft} Seats Remaining
            </div>
          </div>

          <div ref={timerRef} className="flex gap-4 justify-center">
            {[
              { label: 'Hours', val: formatNum(timeLeft.hours) },
              { label: 'Minutes', val: formatNum(timeLeft.minutes) },
              { label: 'Seconds', val: formatNum(timeLeft.seconds) }
            ].map((unit, i) => (
              <div key={i} className="flex flex-col items-center group/unit">
                <div className="timer-unit w-20 h-24 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover/unit:border-secondary/50 group-hover/unit:scale-105 timer-glow">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
                  <span className={`text-4xl font-heading font-black text-white tracking-tighter drop-shadow-lg ${i === 2 ? 'text-secondary-200' : ''}`}>{unit.val}</span>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary/30"></div>
                </div>
                <span className="text-[9px] uppercase tracking-[0.3em] mt-3 font-black text-white/30">{unit.label}</span>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5">
              <div 
                className="h-full rounded-full liquid-progress shadow-[0_0_15px_rgba(245,130,32,0.4)] transition-all duration-1000 ease-linear" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center text-[8px] uppercase tracking-widest font-black">
              <span className="text-white/20">Offer Active</span>
              <button 
                onClick={() => setShowSecretBonus(!showSecretBonus)}
                className="text-secondary flex items-center gap-1 hover:brightness-125 transition-all animate-bounce"
              >
                <Gift size={10} /> Reveal Secret Bonus
              </button>
              <span className="text-white/20 text-right">Discount Expiring</span>
            </div>
          </div>

          {showSecretBonus && (
            <div className="bg-secondary/10 border border-secondary/20 p-4 rounded-xl animate-fadeIn">
              <div className="flex items-center gap-3">
                <Sparkles size={18} className="text-secondary" />
                <p className="text-[10px] font-bold text-white/80 leading-relaxed uppercase tracking-widest">
                  CURIOUS? ENROLL IN 30 MINS TO GET: <br/>
                  <span className="text-secondary">FREE POWER-AUTOMATE MASTERCLASS (WORTH ₹5,000)</span>
                </p>
              </div>
            </div>
          )}
        </div>

        <a 
          href="https://wa.me/916361866299?text=Hi, I want to claim the 30% discount and the Secret Bonus! I saw the clock is ticking." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block group/btn"
        >
          <Button variant="primary" className="w-full py-8 flex flex-col items-center justify-center gap-1 bg-secondary hover:bg-redBrown transition-all duration-500 shadow-[0_15px_35px_rgba(245,130,32,0.3)] border-b-4 border-redBrown active:border-b-0 active:translate-y-1">
            <div className="flex items-center gap-4">
              <Zap size={20} className="fill-white animate-pulse" />
              <span className="text-xl font-black uppercase tracking-tight">{t('roi_cta')}</span>
              <ArrowRight size={24} className="group-hover/btn:translate-x-2 transition-transform" />
            </div>
            <p className="text-[10px] opacity-70 font-black uppercase tracking-[0.3em] flex items-center gap-2">
              <CheckCircle size={10} /> Instant WhatsApp Verification
            </p>
          </Button>
        </a>
      </div>
    </div>
  );
};
