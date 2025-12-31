
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="container mx-auto px-6 max-w-4xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-chai-dark mb-6">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600">Everything you need to know about the course and the platform.</p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, index) => (
          <div 
            key={index} 
            className={`border rounded-2xl transition-all duration-300 ${
              openIndex === index ? 'bg-white border-chai-accent shadow-lg' : 'bg-transparent border-gray-200'
            }`}
          >
            <button 
              className="w-full px-8 py-6 flex justify-between items-center text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className={`text-lg font-bold ${openIndex === index ? 'text-chai-accent' : 'text-chai-dark'}`}>
                {faq.question}
              </span>
              {openIndex === index ? <Minus className="text-chai-accent" /> : <Plus className="text-gray-400" />}
            </button>
            <div 
              className={`px-8 transition-all duration-300 overflow-hidden ${
                openIndex === index ? 'pb-6 max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
