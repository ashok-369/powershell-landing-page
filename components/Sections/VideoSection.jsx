import React from 'react';

const VideoSection = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    
    // Use lowercase 'contact' to match your Contact section ID
    const contactSection = document.getElementById('contact');
    
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.log('Contact section not found. Looking for #contact...');
      // Fallback: scroll to bottom
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 from-zinc-900 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Get a Glimpse of Our Powershell Training
            </h2>
            <p className="text-xl text-gray-900">
              Watch how our training approach helps learners build real-world Powershell expertise
            </p>
          </div>
          
          <div className="relative pt-[56.25%] rounded-xl overflow-hidden shadow-2xl shadow-blue-900/20">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/zZ1y0-GGCyo"
              title="Powershell Training Preview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-900">
              Join 250+ successful students who transformed their careers with our AZ-104 course
            </p>
            <div className="mt-6">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer"
              >
                Start Your Powershell Journey Today →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;