import React from 'react';

export const HeroSection: React.FC = () => {
  const handleStartNow = () => {
    window.open('https://ai.cognihash.xyz/login', '_blank');
  };

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Let Blockchain
                <br />
                <span className="bg-gradient-to-r from-purple-600 via-purple-500 to-green-500 bg-clip-text text-transparent">
                  Data Think
                </span>{' '}
                for You
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                CogniHash AI is the AI-native operating system powering real-time, 
                precision-grade intelligence for blockchain ecosystems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleStartNow}
                className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-8 py-4 rounded-full font-semibold hover:from-green-500 hover:to-emerald-600 transition-all duration-200 text-lg cursor-pointer"
              >
                Start Now
              </button>
            </div>
          </div>

          {/* Right Content - Reactive Orb GIF */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/assets/reactive-orb.gif"
                alt="Reactive Orb Animation"
                className="w-[480px] h-auto object-contain"
                onError={(e) => {
                  // Fallback to SVG sphere if GIF is not available
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              
              {/* Fallback SVG Sphere (hidden by default) */}
              <div className="w-[480px] h-[480px] hidden">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  {/* Create interconnected sphere pattern */}
                  {Array.from({ length: 12 }, (_, ring) => {
                    const ringRadius = 30 + ring * 12;
                    const numDots = Math.max(6, Math.floor(ring * 1.5));
                    
                    return Array.from({ length: numDots }, (_, dot) => {
                      const angle = (dot * 2 * Math.PI) / numDots;
                      const x = 200 + ringRadius * Math.cos(angle);
                      const y = 200 + ringRadius * Math.sin(angle) * 0.6;
                      const size = Math.max(2, 6 - ring * 0.3);
                      
                      return (
                        <g key={`${ring}-${dot}`}>
                          {/* Connection lines */}
                          {ring > 0 && (
                            <line
                              x1={x}
                              y1={y}
                              x2={200 + (ringRadius - 12) * Math.cos(angle)}
                              y2={200 + (ringRadius - 12) * Math.sin(angle) * 0.6}
                              stroke="#e5e7eb"
                              strokeWidth="1"
                              opacity="0.3"
                            />
                          )}
                          
                          {/* Dots */}
                          <circle
                            cx={x}
                            cy={y}
                            r={size}
                            fill={`hsl(${180 + ring * 10}, 60%, ${30 + ring * 5}%)`}
                            className="animate-pulse"
                            style={{
                              animationDelay: `${(ring + dot) * 0.1}s`,
                              animationDuration: '3s'
                            }}
                          />
                        </g>
                      );
                    });
                  })}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};