
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const Accordion = ({ items, defaultOpenId }) => {
  const [openId, setOpenId] = useState(defaultOpenId);

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="bg-white rounded-2xl shadow-card border border-transparent hover:border-primary/10 transition-all overflow-hidden">
          <button 
            onClick={() => setOpenId(openId === item.id ? undefined : item.id)}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <span className="font-heading font-bold text-deep text-body-lg">{item.title}</span>
            <ChevronDown className={`text-primary transition-transform duration-300 ${openId === item.id ? 'rotate-180' : ''}`} />
          </button>
          <div className={`transition-all duration-500 ease-in-out ${openId === item.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="px-6 pb-6 text-deep/70 text-body leading-relaxed border-t border-cream pt-4">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
