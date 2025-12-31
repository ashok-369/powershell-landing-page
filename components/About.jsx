
import React from 'react';
import { Target, Users, Zap } from 'lucide-react';
import { AbstractBlob, TopoPattern, ModernWave } from './Patterns';

const About = () => {
  return (
    <div className="container mx-auto px-6 relative">
      <AbstractBlob className="absolute -top-40 -left-40 w-[600px] h-[600px] text-[#004e89]/5 pointer-events-none" />
      
      <div className="flex flex-col lg:flex-row items-center gap-20 relative z-10">
        <div className="lg:w-1/2">
          <div className="relative mb-10">
             <div className="w-20 h-2 bg-[#f39221] mb-6 rounded-full"></div>
             <h2 className="text-5xl md:text-7xl font-black text-[#273892ff] leading-[0.9] tracking-tighter">
                Lead the <br />
                <span className="text-[#f39221] italic font-serif">Cloud</span> Age.
             </h2>
          </div>
          
          <p className="text-xl text-gray-500 mb-12 leading-relaxed font-medium">
            At Neel Technologies, we bridge the gap between technical complexity and architectural mastery. Our curriculum is built on the pillars of practical automation and secure cloud scaling.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start group">
              <div className="w-14 h-14 bg-[#f39221] text-white rounded-2xl flex items-center justify-center shrink-0 shadow-xl shadow-orange-500/20 group-hover:scale-110 transition-transform">
                <Target size={28} />
              </div>
              <div>
                <h4 className="text-2xl font-black text-chai-dark mb-2">Our Mission</h4>
                <p className="text-gray-500 font-medium">Equipping the next generation of engineers with high-tier automation skills for global enterprises.</p>
              </div>
            </div>
            
            <div className="flex gap-6 items-start group">
              <div className="w-14 h-14 bg-[#004e89] text-white rounded-2xl flex items-center justify-center shrink-0 shadow-xl shadow-blue-900/20 group-hover:scale-110 transition-transform">
                <Zap size={28} />
              </div>
              <div>
                <h4 className="text-2xl font-black text-chai-dark mb-2">High Velocity Learning</h4>
                <p className="text-gray-500 font-medium">Optimized training modules that deliver 2 months of intense industry exposure.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="grid grid-cols-2 gap-6 relative">
             <TopoPattern className="absolute inset-0 text-[#004e89]/10 pointer-events-none" />
             
             {/* Dynamic Image Collage */}
             <div className="space-y-6 pt-12">
                <div className="h-80 bg-white p-3 rounded-[3rem] shadow-2xl border border-gray-100 transform -rotate-3 hover:rotate-0 transition-all">
                   <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400" alt="Team" className="w-full h-full object-cover rounded-[2.5rem]" />
                </div>
                <div className="bg-[#f39221] p-10 rounded-[3rem] text-white shadow-2xl">
                   <p className="text-6xl font-black mb-1">100%</p>
                   <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80">Success Rate</p>
                </div>
             </div>
             
             <div className="space-y-6">
                <div className="bg-[#004e89] p-10 rounded-[3rem] text-white shadow-2xl text-center">
                   <Users size={40} className="mx-auto mb-4 text-[#f39221]" />
                   <p className="text-3xl font-black">Expert Led</p>
                   <p className="text-[10px] uppercase font-bold tracking-widest opacity-60">10+ Years Experience</p>
                </div>
                <div className="h-96 bg-white p-3 rounded-[3rem] shadow-2xl border border-gray-100 transform rotate-2 hover:rotate-0 transition-all">
                   <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400" alt="Tech" className="w-full h-full object-cover rounded-[2.5rem]" />
                </div>
             </div>
          </div>
        </div>
      </div>
      
      <ModernWave className="absolute bottom-[-100px] left-0 right-0 text-[#f39221]/10 h-32" />
    </div>
  );
};

export default About;
