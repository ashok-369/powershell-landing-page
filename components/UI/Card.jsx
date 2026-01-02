
import React from 'react';

export const Card = ({ children, className = '', hoverEffect = true, id }) => {
  return (
    <div 
      id={id}
      className={`bg-white p-8 rounded-card border border-lightCream shadow-card transition-all duration-500 ${hoverEffect ? 'hover:shadow-premium-hover hover:-translate-y-2' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
