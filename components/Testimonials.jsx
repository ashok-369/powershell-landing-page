
import React, { useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { TopoPattern } from './Patterns';
import personLogo from '../assets/personLogo.png'

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Cloud Engineer, TCS",
    content: "The PowerShell training at Neel Technologies was a game changer for my AWS SAA-C03 prep. The instructors explain complex pipeline concepts with such ease!",
    avatar: personLogo
  },
  {
    name: "Priya Menon",
    role: "DevOps Architect",
    content: "Excellent hands-on practical training. The WhatsApp support from trainers even after class hours is something you won't find anywhere else.",
    avatar: personLogo
  },
  {
    name: "Amit Patel",
    role: "Solutions Lead, Infosys",
    content: "I shifted from manual deployments to fully automated PowerShell scripts in just 2 months. Highly recommended for corporate teams.",
    avatar: personLogo
  }
];

const Testimonials = () => {
  return (
    <div className="container mx-auto px-6 relative">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-nt-navy mb-6 tracking-tight">Success Stories</h2>
        <p className="text-lg text-gray-600">Real transformation stories from alumni working in world-class organizations.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-[#FDF8F1] p-10 rounded-[2.5rem] border border-[#D4A373]/20 relative hover:bg-white hover:shadow-2xl transition-all duration-500 group overflow-hidden">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-nt-orange/5 rounded-full blur-xl group-hover:bg-nt-orange/10 transition-colors"></div>
            
            <div className="absolute top-8 right-8 text-nt-orange opacity-10 group-hover:opacity-100 transition-opacity">
              <Quote size={48} />
            </div>
            
            <div className="flex gap-1 mb-6 relative z-10">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />)}
            </div>
            
            <p className="text-gray-700 italic leading-relaxed mb-8 relative z-10">"{t.content}"</p>
            
            <div className="flex items-center gap-4 relative z-10">
              <div className="relative">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-white shadow-md" />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h4 className="font-bold text-nt-navy">{t.name}</h4>
                <p className="text-xs text-nt-orange font-semibold uppercase tracking-wider">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
