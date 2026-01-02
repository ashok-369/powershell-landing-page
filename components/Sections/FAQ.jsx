
import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { useTranslation } from '../UI/LanguageToggle';

const faqs = [
  { q: "What training modes are available?", a: "We offer Self-Paced (E-learning), Online Instructor-led, and Corporate Training modes." },
  { q: "Can I switch from self-paced to instructor-led?", a: "Yes, you can upgrade your plan at any time by paying the differential fee." },
  { q: "Who should opt for self-paced training?", a: "Working professionals who prefer flexible hours and have prior IT experience." },
  { q: "Do you provide support after the course ends?", a: "Yes, we provide 1-year access to our trainer support forum and monthly Q&A sessions." },
  { q: "Will I get a certificate upon completion?", a: "Absolutely. You'll receive a 'PowerShell AWS Solutions Architect' certification from Neel Technologies." },
  { q: "Are practical sessions conducted?", a: "Yes, 70% of our course is focused on hands-on labs and real-world automation projects." },
  { q: "What happens if I miss a live session?", a: "All live sessions are recorded and uploaded to your LMS portal within 24 hours." },
  { q: "Is the certification exam difficult?", a: "The SAA-C03 is challenging, but our curriculum is specifically designed to cover 100% of exam topics." },
  { q: "Do you offer placement assistance?", a: "Yes, we have 500+ hiring partners and provide resume building and mock interview support." },
  { q: "What kind of projects are included?", a: "Projects include automated EC2 deployment, S3 bucket policy automation, and IAM security auditing." },
];

export const FAQ = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaqs = faqs.filter(f => f.q.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <section id="faq" className="py-24 bg-cream dark:bg-zinc-950">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-h2 text-deep dark:text-white tracking-tight">{t('faq_title')}</h2>
          <div className="mt-8 relative max-w-md mx-auto group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-deep/30 dark:text-white/20 group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder={t('faq_search')} 
              className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-transparent bg-white dark:bg-zinc-900 shadow-premium focus:border-primary outline-none transition-all dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-4">
          {filteredFaqs.length > 0 ? filteredFaqs.map((faq, idx) => (
            <div key={idx} className="bg-white dark:bg-zinc-900 rounded-2xl shadow-premium border border-transparent hover:border-primary/10 transition-all overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-7 text-left group"
              >
                <span className="font-heading font-extrabold text-deep dark:text-white text-lg group-hover:text-primary transition-colors">{faq.q}</span>
                <ChevronDown className={`text-primary transition-transform duration-500 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              <div className={`transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-7 pb-8 text-deep/70 dark:text-white/40 text-body leading-relaxed border-t border-cream dark:border-white/5 pt-6">
                  {faq.a}
                </div>
              </div>
            </div>
          )) : (
            <div className="text-center py-20 text-deep/40 dark:text-white/20 italic">No matching questions found.</div>
          )}
        </div>
      </div>
    </section>
  );
};
