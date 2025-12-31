// Placements.jsx
import React, { useState } from 'react';
import { TrendingUp, Users, Building2, Globe } from 'lucide-react';

// Full company list with public logos
const companies = [
  { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Tata_Consultancy_Services_Logo.svg" },
  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/Infosys_logo.svg" },
  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
  { name: "Cognizant", logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Genpact", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Genpact_logo.svg" },
  { name: "HCL Technologies", logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/HCL_Technologies_Limited_Logo.svg" },
  { name: "Tech Mahindra", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/Tech_Mahindra_logo.svg" },
  { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/Accenture.svg" },
  { name: "Capgemini", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Capgemini_Logo.svg" },
  { name: "Hexaware", logo: "https://upload.wikimedia.org/wikipedia/commons/0/03/Hexaware_Technologies_logo.svg" },
  { name: "Zensar", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Zensar_Technologies_logo.svg" },
  { name: "PwC", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/PricewaterhouseCoopers_Logo.svg" },
  { name: "Persistent Systems", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Persistent_Systems_logo.svg" },
  { name: "Happiest Minds", logo: "https://brandfetch.com/happiestminds.com/icon.svg" },
  { name: "CGI", logo: "https://logotyp.us/files/svg/CGI.svg" },
  { name: "Altimetrik", logo: "https://seekvectorlogo.com/wp-content/uploads/2021/07/altimetrik-vector-logo.png" },
  { name: "Axtria", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Axtria_logo.png" },
  { name: "Bitwise", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Bitwise_Inc_logo.png" },
];

// Company card component
const CompanyCard = ({ company }) => {
  const [imgError, setImgError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="company-card group flex items-center justify-center p-6 bg-white border border-gray-200 rounded-[2rem] transition-all duration-500 hover:border-nt-orange hover:shadow-[0_25px_60px_-15px_rgba(0,78,137,0.15)] hover:-translate-y-2 aspect-[4/3] relative overflow-hidden shadow-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-nt-navy/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

      {!imgError ? (
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          {!isLoaded && (
            <div className="absolute inset-4 bg-gray-100 rounded-2xl animate-pulse flex items-center justify-center">
              <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Loading...</span>
            </div>
          )}
          <img
            src={company.logo}
            alt={company.name}
            className={`max-w-[85%] max-h-[85%] object-contain transition-all duration-700 group-hover:scale-110 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
            onError={() => setImgError(true)}
          />
        </div>
      ) : (
        <div className="relative z-10 flex flex-col items-center justify-center text-center p-2">
          <div className="w-14 h-14 bg-nt-navy text-white rounded-2xl flex items-center justify-center mb-3 group-hover:bg-nt-orange transition-all transform group-hover:rotate-6 shadow-lg">
            <span className="text-2xl font-black">{company.name.charAt(0)}</span>
          </div>
          <span className="text-[11px] font-black text-nt-navy tracking-[0.1em] uppercase leading-tight">
            {company.name}
          </span>
        </div>
      )}
    </div>
  );
};

// Placements component
const Placements = () => {

  // Smooth scroll handler
  const handleScrollToFooter = (e) => {
    e.preventDefault();
    const section = document.getElementById("get-started");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-6 relative py-12">
      {/* Career Impact Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24 relative z-20">
        {[
          { label: 'Avg Salary Hike', value: '65%', icon: TrendingUp },
          { label: 'Active Alumni', value: '12K+', icon: Users },
          { label: 'Hiring Partners', value: '300+', icon: Building2 },
          { label: 'Global Cities', value: '20+', icon: Globe }
        ].map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 flex flex-col items-center text-center group hover:border-nt-orange transition-all duration-500">
              <div className="w-12 h-12 bg-nt-navy/5 text-nt-navy rounded-xl flex items-center justify-center mb-4 group-hover:bg-nt-navy group-hover:text-white transition-all">
                <Icon size={24} />
              </div>
              <p className="text-3xl font-black text-nt-navy mb-1 tracking-tighter">{stat.value}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Header */}
      <div className="text-center mb-20 relative z-10">
        <div className="inline-block px-5 py-2 bg-white border border-gray-100 rounded-full text-nt-navy text-[10px] font-black tracking-[0.3em] uppercase mb-8 shadow-sm">
          Career Milestone Partners
        </div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-none">
          <span className="text-nt-navy">Our Alumni are </span>
          <span className="text-nt-orange italic font-serif">Placed In</span>
        </h2>
        <div className="flex justify-center items-center gap-4">
          <div className="h-1.5 w-24 bg-nt-navy rounded-full"></div>
          <div className="h-1.5 w-8 bg-nt-orange rounded-full"></div>
        </div>
      </div>

      {/* Grid of companies */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 relative z-10 min-h-[600px]">
        {companies.map((company, idx) => (
          <CompanyCard key={idx} company={company} />
        ))}
      </div>

      {/* Premium Trust Banner */}
      <div className="mt-32 relative z-10">
        <div className="bg-nt-navy p-10 md:p-20 rounded-[4rem] text-center shadow-[0_50px_100px_-20px_rgba(0,78,137,0.3)] overflow-hidden relative border border-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-nt-orange/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-8 leading-[1.1]">
              Training that opens doors to <br />
              <span className="text-nt-orange italic font-serif">Global Enterprises.</span>
            </h3>
            <p className="text-white/60 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
              Neel Technologies doesn't just teach PowerShell; we build career paths into top-tier tech firms. 
              Our alumni network is your greatest asset.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              {/* Smooth Scroll Button */}
              <a
                href="#get-started"
                onClick={handleScrollToFooter}
                className="px-10 py-5 bg-[#004e89] text-white rounded-2xl font-black text-lg shadow-2xl shadow-blue-900/30 hover:bg-[#f39221] transition-all transform hover:-translate-y-2 flex items-center gap-3 group"
              >
                Join the Network
              </a>

              {/* Alumni Avatars */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-nt-navy bg-white overflow-hidden shadow-xl ring-2 ring-white/10">
                      <img src={`https://i.pravatar.cc/100?u=alumni${i+10}`} alt="Alumni" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-white text-xs font-black uppercase tracking-widest leading-none">Global Network</p>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.1em]">500+ Companies Hired</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placements;
