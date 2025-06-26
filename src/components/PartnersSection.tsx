import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const PartnersSection: React.FC = () => {
  const [currentCardSet, setCurrentCardSet] = useState(0);

  const cardSets = [
    [
      {
        title: "ANALYTICS ≠ INTELLIGENCE",
        description: "COGNIHASH IS BUILDING THE FIRST AGENTIC AI OPERATING SYSTEM FOR THE MODULAR, REAL-TIME, ONCHAIN WORLD."
      },
      {
        title: "VERSATILE & ADAPTABLE",
        description: "COGNIHASH ARCHITECTURE SEAMLESSLY INTEGRATES WITH ANY EXISTING BLOCKCHAIN PROTOCOL—FROM DEFI TO OTHER ON-CHAIN ACTIVITIES AND BEYOND."
      },
      {
        title: "USER FRIENDLY",
        description: "EACH AGENT OWNS A SINGLE RESPONSIBILITY. THE SYSTEM COORDINATES, CONTROL IS COMPOSABLE."
      }
    ],
    [
      {
        title: "REAL-TIME PROCESSING",
        description: "PROCESS BLOCKCHAIN DATA IN REAL-TIME WITH SUB-SECOND LATENCY FOR IMMEDIATE INSIGHTS AND ACTIONS."
      },
      {
        title: "AUTONOMOUS AGENTS",
        description: "DEPLOY INTELLIGENT AGENTS THAT LEARN, ADAPT, AND EXECUTE COMPLEX BLOCKCHAIN OPERATIONS INDEPENDENTLY."
      }
    ]
  ];

  const nextCardSet = () => {
    setCurrentCardSet((prev) => (prev + 1) % cardSets.length);
  };

  const prevCardSet = () => {
    setCurrentCardSet((prev) => (prev - 1 + cardSets.length) % cardSets.length);
  };

  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Partners */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-16">Our Partner & Ecosystem</h2>
          
          <div className="flex flex-wrap items-center justify-center gap-8 mt-6">
            <img 
              src="/assets/superteam.png" 
              alt="Superteam Logo" 
              className="h-[100px] object-contain"
              onError={(e) => {
                // Fallback to text logo if PNG is not available
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback for Superteam */}
            <div className="items-center space-x-4 hidden">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">ST</span>
              </div>
              <span className="text-2xl font-semibold text-gray-700">Superteam Indonesia</span>
            </div>

            <img 
              src="/assets/lavarage.png" 
              alt="LavARage Logo" 
              className="h-[60px] object-contain"
              onError={(e) => {
                // Fallback to text logo if PNG is not available
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback for LavARage */}
            <div className="items-center space-x-4 hidden">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-2xl font-semibold text-gray-700">LAVARAGE</span>
            </div>

            <img 
              src="/assets/pyth.png" 
              alt="Pyth Logo" 
              className="h-[60px] object-contain"
              onError={(e) => {
                // Fallback to text logo if PNG is not available
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback for Pyth */}
            <div className="items-center space-x-4 hidden">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-2xl font-semibold text-gray-700">PYTH</span>
            </div>
          </div>
        </div>

        {/* Why Choose CogniHash */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Why choose CogniHash?</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-2">
            CogniHash is building the first AI-native OS for blockchain thinking.
          </p>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Where AI agents don't just observe the chain—they understand, trace, and act on it in real time.
          </p>
        </div>

        {/* Feature Cards with Pagination */}
        <div className="mb-12">
          <div className="grid md:grid-cols-3 gap-8 justify-center">
            {cardSets[currentCardSet].map((card, index) => (
              <div key={index} className="bg-[#ACFADB] rounded-xl p-8 w-full text-left">
                <h3 className="text-xl font-bold mb-6 text-gray-900">{card.title}</h3>
                <p className="text-sm text-gray-800 leading-relaxed uppercase">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center space-x-4">
          <button 
            onClick={prevCardSet}
            className="p-3 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="flex space-x-2">
            {cardSets.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCardSet(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentCardSet === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextCardSet}
            className="p-3 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};