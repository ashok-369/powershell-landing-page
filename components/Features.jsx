import React from 'react';
import { FEATURES } from '../constants';
import * as Icons from 'lucide-react';
import { AbstractBlob } from './Patterns';

const Features = () => {
  const logoColor = "#273892ff"; // Using your heading blue color
  
  return (
    <div className="container mx-auto px-6 relative overflow-hidden">
      <AbstractBlob className="absolute top-0 right-[-10%] w-[500px] h-[500px] text-[#273892ff]/5 pointer-events-none" />
      
      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <span className="text-xs font-black text-[#273892ff] uppercase tracking-[0.3em] mb-4 block">Our Advantage</span>
        <h2 className="text-4xl md:text-6xl font-black text-[#273892ff] mb-6 tracking-tight">Why Neel Technologies?</h2>
        <p className="text-xl text-gray-500 font-medium">Elevate your technical proficiency with a training approach designed for real-world impact.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {FEATURES.map((feature, index) => {
          const IconComponent = Icons[feature.icon.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')] || Icons.CheckCircle;
          return (
            <div 
              key={index} 
              className="group relative p-10 bg-white rounded-[2.5rem] border border-gray-100 hover:border-[#273892ff] transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(39,56,146,0.15)]"
            >
              {/* Card Accent Shape */}
              <div className="absolute top-0 right-0 w-44 h-24 bg-[#273892ff]/5 rounded-bl-[4rem] group-hover:bg-[#273892ff]/10 transition-colors"></div>
              
              <div className="w-16 h-16 bg-[#004e89]/5 rounded-2xl flex items-center justify-center text-[#004e89] mb-8 group-hover:bg-[#004e89] group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                <IconComponent size={32} />
              </div>
              <h3 className="text-2xl font-black text-[#273892ff] mb-4 leading-tight group-hover:text-[#273892ff] transition-colors">{feature.title}</h3>
              <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Excellence Level 0{index + 1}</p>
              
              <div className="mt-8 flex gap-1">
                 <div className="h-1.5 w-8 bg-[#004e89] rounded-full"></div>
                 <div className="h-1.5 w-2 bg-gray-100 rounded-full group-hover:w-8 group-hover:bg-[#273892ff] transition-all duration-500"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;