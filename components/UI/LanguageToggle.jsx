
import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children, translations }) => {
  const [lang, setLang] = useState('en');
  const t = (key) => translations[lang][key] || key;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useTranslation must be used within LanguageProvider");
  return context;
};

export const LanguageToggle = () => {
  const { lang, setLang } = useTranslation();
  return (
    <button 
      onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
      className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all border border-primary/20"
    >
      {lang === 'en' ? 'हिन्दी' : 'EN'}
    </button>
  );
};
