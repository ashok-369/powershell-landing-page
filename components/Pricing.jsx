import React from 'react';
import { TRAINING_MODES } from '../constants';
import { CheckCircle2, Clock, Calendar } from 'lucide-react';

const Pricing = () => {
  // Smooth scroll function
  const handleScrollToFooter = (e) => {
    e.preventDefault();
    const target = document.getElementById('get-started');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-nt-navy mb-6 tracking-tight">
          Choose Your Learning Path
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
          Flexible training options tailored to your schedule and goals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {TRAINING_MODES.map((mode, index) => (
          <div
            key={index}
            className={`relative p-10 rounded-[2.5rem] border-2 flex flex-col transition-all duration-700 ${
              mode.highlighted
                ? 'bg-nt-navy text-white border-nt-orange scale-105 shadow-[0_40px_80px_-20px_rgba(0,78,137,0.3)] z-10'
                : 'bg-white text-nt-navy border-gray-100 shadow-xl hover:shadow-2xl'
            }`}
          >
            {mode.highlighted && (
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-nt-orange text-white px-8 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-orange-500/30 whitespace-nowrap">
                Most Popular
              </div>
            )}

            <div className="mb-10">
              <h3
                className={`text-3xl font-black mb-3 ${
                  mode.highlighted ? 'text-white' : 'text-nt-navy'
                }`}
              >
                {mode.type}
              </h3>
              <div
                className={`flex items-center gap-2 mb-6 ${
                  mode.highlighted ? 'text-white/70' : 'text-gray-400'
                }`}
              >
                <Clock size={18} />
                <span className="font-bold text-sm uppercase tracking-widest">
                  {mode.duration} Duration
                </span>
              </div>
            </div>

            <div className="space-y-5 mb-12 flex-grow">
              {mode.features.map((feature, fIndex) => (
                <div key={fIndex} className="flex items-start gap-4">
                  <CheckCircle2
                    size={22}
                    className={
                      mode.highlighted
                        ? 'text-nt-orange shrink-0'
                        : 'text-green-500 shrink-0'
                    }
                  />
                  <span
                    className={`text-base font-medium leading-snug ${
                      mode.highlighted ? 'text-white/90' : 'text-gray-600'
                    }`}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={handleScrollToFooter}
              className={`w-full py-5 rounded-2xl font-black text-lg transition-all transform hover:-translate-y-1 block text-center ${
                mode.highlighted
                  ? 'bg-nt-orange text-white hover:bg-white hover:text-nt-navy shadow-xl shadow-orange-500/20'
                  : 'bg-nt-navy text-white hover:bg-nt-orange shadow-xl shadow-blue-900/10'
              }`}
            >
              Enquire Now
            </button>
          </div>
        ))}
      </div>

      {/* Batch Schedule Table */}
      <div className="mt-24 bg-white rounded-[3.5rem] p-10 lg:p-20 border border-gray-100 shadow-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-nt-orange/5 rounded-full -mr-48 -mt-48 pointer-events-none blur-3xl"></div>

        <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-8 relative z-10">
          <div className="text-center lg:text-left">
            <h3 className="text-4xl font-black text-nt-navy tracking-tight mb-2">
              Upcoming Live Batches
            </h3>
            <p className="text-gray-500 text-lg font-medium">
              Reserve your seat for the next interactive session.
            </p>
          </div>
          <div className="flex items-center gap-4 bg-nt-orange/10 text-nt-orange px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm border border-nt-orange/20">
            <Calendar size={20} /> Limited Seats Available
          </div>
        </div>

        <div className="overflow-x-auto relative z-10">
          <table className="w-full text-left">
            {/* Table body commented out - can be re-enabled if needed */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
