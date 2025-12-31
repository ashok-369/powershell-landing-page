
import React from 'react';

export const GridPattern = ({ className }) => (
  <svg className={className} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
);

export const PremiumOrb = ({ className, color = "currentColor" }) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <radialGradient id="orbGradient" cx="50%" cy="50%" r="50%" fx="25%" fy="25%">
        <stop offset="0%" stopColor={color} stopOpacity="0.3" />
        <stop offset="100%" stopColor={color} stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="100" fill="url(#orbGradient)" />
  </svg>
);

export const ModernWave = ({ className }) => (
  <svg viewBox="0 0 1440 320" className={className} preserveAspectRatio="none">
    <path fill="currentColor" fillOpacity="0.05" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
  </svg>
);

export const AbstractBlob = ({ className, color = "currentColor" }) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fill={color} d="M44.7,-76.4C58.3,-69.2,70.2,-57.4,77.6,-43.3C85,-29.2,87.9,-12.7,86.5,3.3C85,19.3,79.2,34.8,70.1,48.2C61,61.6,48.5,72.9,34.3,78.2C20.1,83.5,4.2,82.8,-11.1,79.2C-26.4,75.6,-41,69.1,-53.6,59.3C-66.2,49.5,-76.8,36.4,-82.1,21.5C-87.4,6.6,-87.4,-10.1,-82,-25.1C-76.6,-40.1,-65.8,-53.4,-52.7,-60.9C-39.6,-68.4,-24.1,-70.1,-9.1,-74.6C5.9,-79.1,20.9,-86.4,44.7,-76.4Z" transform="translate(100 100)" />
  </svg>
);

export const TopoPattern = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <defs>
      <pattern id="topo" width="100" height="100" patternUnits="userSpaceOnUse">
        <path d="M0 50 Q 25 25 50 50 T 100 50" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
        <path d="M0 70 Q 25 45 50 70 T 100 70" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#topo)" />
  </svg>
);
