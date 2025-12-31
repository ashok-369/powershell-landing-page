
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Syllabus from './components/Syllabus';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Placements from './components/Placements';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

const LandingPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap) {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray('.scroll-section').forEach((section) => {
        gsap.fromTo(section, 
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
      
      window.addEventListener('load', () => ScrollTrigger.refresh());
    }
  }, []);

  return (
    <main className="overflow-x-hidden">
      <div id="home" className="scroll-section">
        <Hero />
      </div>
      <div id="about" className="scroll-section py-24 bg-white">
        <About />
      </div>
      <div id="why-choose-us" className="scroll-section py-24 bg-[#FDF8F1]">
        <Features />
      </div>
      <div id="curriculum" className="scroll-section py-24 bg-white">
        <Syllabus />
      </div>
      <div id="schedule" className="scroll-section py-24 bg-[#FDF8F1]">
        <Pricing />
      </div>
      <div id="testimonials" className="scroll-section py-24 bg-white">
        <Testimonials />
      </div>
      <div id="placements" className="scroll-section py-24 bg-[#FDF8F1]">
        <Placements />
      </div>
      <div id="faq" className="scroll-section py-24 bg-white">
        <FAQ />
      </div>
      <div id="get-started" className="scroll-section py-24 bg-[#FDF8F1]">
        <ContactForm />
      </div>
    </main>
  );
};

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen selection:bg-nt-orange selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
};

export default App;
