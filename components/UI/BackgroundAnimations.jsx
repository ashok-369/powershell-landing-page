
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const BackgroundAnimations = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const circles = containerRef.current.querySelectorAll('.floating-circle');
    circles.forEach((circle, i) => {
      gsap.to(circle, {
        x: 'random(-100, 100)',
        y: 'random(-100, 100)',
        duration: `random(10, 20)`,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: i * 0.5,
      });
    });

    const lines = containerRef.current.querySelectorAll('.grid-line');
    gsap.to(lines, {
      strokeDashoffset: 0,
      duration: 3,
      stagger: 0.1,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20 dark:opacity-10">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.05" className="text-primary grid-line" style={{ strokeDasharray: 20, strokeDashoffset: 20 }} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {Array.from({ length: 15 }).map((_, i) => (
          <circle
            key={i}
            className="floating-circle text-secondary/20"
            cx={Math.random() * 100}
            cy={Math.random() * 100}
            r={Math.random() * 2 + 0.5}
            fill="currentColor"
          />
        ))}
      </svg>
    </div>
  );
};
