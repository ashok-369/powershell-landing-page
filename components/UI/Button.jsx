
import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  type = 'button',
  ...props
}) => {
  const baseStyles = "px-8 min-h-[48px] h-auto py-2 rounded-button font-bold transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-secondary to-redBrown text-white shadow-button hover:shadow-premium-hover hover:-translate-y-1 hover:brightness-110",
    secondary: "bg-primary text-white hover:bg-deep shadow-md hover:shadow-premium hover:-translate-y-1",
    outline: "border-2 border-primary text-primary dark:border-white dark:text-white bg-transparent hover:bg-primary hover:text-white shadow-sm hover:-translate-y-1"
  };

  return (
    <button 
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
