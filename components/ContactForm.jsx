
import React from 'react';
import { Send, PhoneCall } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-chai-dark mb-8 leading-tight">Ready to Advance Your Cloud Career?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Book a free 1-on-1 demo session with our lead instructor. See how PowerShell can transform your AWS workflow.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <a href="tel:+916361866299" className="w-14 h-14 bg-chai-accent rounded-full flex items-center justify-center text-white shrink-0 hover:scale-110 transition-transform">
                <PhoneCall size={24} />
              </a>
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase">Direct Helpline</p>
                <p className="text-2xl font-bold text-chai-dark">+91 6361866299</p>
              </div>
            </div>
            
            <div className="p-8 bg-chai-accent text-white rounded-3xl shadow-xl">
              <h4 className="text-2xl font-bold mb-4">Flat 10% Off</h4>
              <p className="text-lg opacity-90 mb-6">Enroll in our upcoming weekend batch and get an instant early bird discount!</p>
              {/* <a href="#demo-form" className="px-6 py-3 bg-white text-chai-accent rounded-xl font-bold hover:bg-chai-dark hover:text-white transition-all inline-block">
                Claim My Discount
              </a> */}
            </div>
          </div>
        </div>

        {/* <div className="lg:w-1/2" id="demo-form">
          <div className="glass p-10 rounded-[2rem] shadow-2xl border-white/50">
            <h3 className="text-3xl font-bold text-chai-dark mb-8">Book a FREE Demo</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Name *</label>
                  <input type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-chai-accent outline-none transition-all" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-chai-accent outline-none transition-all" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Mobile Number *</label>
                <input type="tel" placeholder="+91 00000 00000" className="w-full px-5 py-4 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-chai-accent outline-none transition-all" required />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea rows={4} placeholder="I am interested in the upcoming batch..." className="w-full px-5 py-4 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-chai-accent outline-none transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-chai-accent text-white rounded-2xl font-bold text-xl shadow-xl hover:bg-[#833d25] transition-all flex items-center justify-center gap-3 group">
                Submit Request <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContactForm;
