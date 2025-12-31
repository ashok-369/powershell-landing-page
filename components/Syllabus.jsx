
import React from 'react';
import { SYLLABUS } from '../constants';

const Syllabus = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-[#273892ff] mb-6 tracking-tight">Comprehensive Curriculum</h2>
          <p className="text-lg text-gray-600">From basics to advanced cloud automation, our syllabus is meticulously designed for modern Solutions Architects.</p>
        </div>
        {/* <a href="#get-started" className="px-8 py-4 bg-white border border-gray-200 text-chai-dark rounded-xl font-bold shadow-sm hover:shadow-md transition-all flex items-center gap-2">
          Download PDF Syllabus
        </a> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SYLLABUS.map((module) => (
          <div 
            key={module.id} 
            className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-xs font-bold text-[#273892ff] mb-4 tracking-widest uppercase">Module 0{module.id}</div>
            <h3 className="text-2xl font-bold text-[#273892ff] mb-4">{module.title}</h3>
            <p className="text-gray-600 leading-relaxed">{module.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Syllabus;
