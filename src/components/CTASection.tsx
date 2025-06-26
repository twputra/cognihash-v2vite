import React from 'react';

export const CTASection: React.FC = () => {
  const handleStartNow = () => {
    window.open('https://ai.cognihash.xyz/login', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-green-400 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          <span className="bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
            Ready to start
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-200 to-green-200 bg-clip-text text-transparent">
            your journey
          </span>
        </h2>
        
        <p className="text-2xl text-white/90 mb-4 max-w-2xl mx-auto">
          We don't build tools.
        </p>
        <p className="text-2xl text-white/90 mb-16 max-w-2xl mx-auto">
          We build thinking machines for blockchain.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={handleStartNow}
            className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-10 py-5 rounded-full font-semibold hover:from-green-500 hover:to-emerald-600 transition-all duration-200 text-lg cursor-pointer"
          >
            Start Now
          </button>
          
          <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-10 py-5 rounded-full font-semibold transition-colors text-lg">
            READ DOCS
          </button>
        </div>
      </div>
    </section>
  );
};