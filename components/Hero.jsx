import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { GridPattern, PremiumOrb } from './Patterns';

const Hero = () => {
  const rootRef = useRef(null);
  const headingRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure elements are visible before animating
      gsap.set(
        [headingRef.current, subRef.current, ctaRef.current, imageRef.current],
        { opacity: 1 }
      );

      const tl = gsap.timeline();

      tl.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'expo.out',
      })
        .from(
          subRef.current,
          { y: 30, opacity: 0, duration: 0.8, ease: 'expo.out' },
          '-=0.6'
        )
        .from(
          ctaRef.current,
          { y: 20, opacity: 0, duration: 0.6, ease: 'expo.out' },
          '-=0.4'
        )
        .from(
          imageRef.current,
          { x: 100, opacity: 0, duration: 1.2, ease: 'power4.out' },
          '-=0.8'
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  // Smooth scroll handler
  const handleScrollToFooter = (e) => {
    e.preventDefault();
    const target = document.getElementById('get-started');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={rootRef}
      className="relative pt-48 pb-32 overflow-hidden bg-[#FDF8F1]"
    >
      {/* Background Patterns */}
      <GridPattern className="absolute inset-0 text-[#004e89] opacity-[0.03] pointer-events-none" />
      <PremiumOrb className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] text-[#f39221]" />
      <PremiumOrb className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] text-[#004e89]" />

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center relative z-10">
        {/* LEFT SIDE */}
        <div className="lg:w-3/5 mb-16 lg:mb-0">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white shadow-xl border border-orange-100 rounded-full text-[#f39221] text-xs font-black mb-10 tracking-[0.2em] uppercase">
            <img
              src="https://www.neeltechnologies.com/img/head-logo.png"
              className="w-5 h-auto"
              alt="Neel Technologies Logo"
            />
            GLOBAL AWS PARTNER
          </div>

          <h1
            ref={headingRef}
            className="text-6xl lg:text-8xl font-black text-[#004e89] leading-[1] mb-8 tracking-tighter"
          >
            Become a <br />
            <span className="text-[#f39221] italic font-serif">Cloud</span> <br />
            Architect.
          </h1>

          <p
            ref={subRef}
            className="text-xl text-gray-500 leading-relaxed mb-12 max-w-2xl font-medium"
          >
            Architect scalable solutions with our premier{' '}
            <span className="text-[#004e89] font-bold">PowerShell Automation</span>{' '}
            training. Industry-led sessions focused on the SAA-C03 certification path.
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-5 items-center">
            <a
              href="#get-started"
              onClick={handleScrollToFooter}
              className="px-10 py-5 bg-[#004e89] text-white rounded-2xl font-black text-lg shadow-2xl shadow-blue-900/30 hover:bg-[#f39221] transition-all transform hover:-translate-y-2 flex items-center gap-3 group"
            >
              Join the Course
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>

            <div className="flex -space-x-4 items-center ml-4">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/100?u=s${i}`}
                  className="w-14 h-14 rounded-full border-4 border-white shadow-xl"
                  alt={`Student ${i}`}
                />
              ))}
              <div className="pl-6">
                <p className="text-sm font-black text-[#004e89]">Empowered 10K+</p>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <ShieldCheck
                      key={i}
                      size={14}
                      className="fill-[#f39221] text-[#f39221]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div ref={imageRef} className="lg:w-2/5 relative">
          <div className="relative group">
            <div className="absolute -inset-4 border-2 border-dashed border-[#f39221] rounded-[4rem]" />
            <div className="relative bg-white p-3 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)]">
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
                alt="Cloud Training Illustration"
                className="rounded-[3rem] w-full h-[550px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
