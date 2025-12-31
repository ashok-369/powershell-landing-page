
import React from 'react';

export const NTLogo = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 500 500" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Abstract Geometric Mark */}
    <rect x="150" y="150" width="200" height="200" rx="40" stroke="#004e89" strokeWidth="20" />
    <path d="M210 250L250 210L290 250L250 290L210 250Z" fill="#f39221" />
    
    {/* Dynamic Accent Lines */}
    <path d="M100 250C100 167.157 167.157 100 250 100" stroke="#f39221" strokeWidth="15" strokeLinecap="round" opacity="0.6" />
    <path d="M400 250C400 332.843 332.843 400 250 400" stroke="#004e89" strokeWidth="15" strokeLinecap="round" opacity="0.6" />
    
    {/* Central Node */}
    <circle cx="250" cy="250" r="30" fill="#004e89" />
    <circle cx="250" cy="250" r="15" fill="white" />
  </svg>
);
