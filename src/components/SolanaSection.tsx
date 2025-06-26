import React from 'react';

export const SolanaSection: React.FC = () => {
  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Solana Logo */}
        <div className="flex items-center justify-center mb-8">
          <img
            src="/assets/solana.png"
            alt="Solana Logo"
            className="w-[645px] h-auto mx-auto mb-4"
            onError={(e) => {
              // Fallback to custom Solana logo if PNG is not available
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = target.nextElementSibling as HTMLElement;
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          
          {/* Fallback Solana Logo (hidden by default) */}
          <div className="items-center space-x-4 hidden">
            <div className="flex space-x-1">
              <div className="w-12 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transform rotate-12"></div>
              <div className="w-12 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <div className="w-12 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform -rotate-12"></div>
            </div>
            <span className="text-4xl font-bold text-gray-900">SOLANA</span>
          </div>
        </div>
        
        <h2 className="text-xl text-gray-700 mb-16 max-w-4xl mx-auto">
          Cognihash Including Solana Integration to delivers high performance & scalability.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Validator Nodes */}
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 text-center">
            <div className="text-5xl font-bold text-gray-900 mb-3">1,090</div>
            <div className="text-xl font-semibold text-gray-700 mb-6">Validator Nodes</div>
            <div className="text-sm text-gray-500 leading-relaxed">
              The Solana network is validated by thousands of nodes that operate independently of each other, ensuring your data remains secure and censorship resistant.
            </div>
          </div>

          {/* Net Carbon Impact */}
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 text-center">
            <div className="text-5xl font-bold text-gray-900 mb-3">0%</div>
            <div className="text-xl font-semibold text-gray-700 mb-6">Net Carbon Impact</div>
            <div className="text-sm text-gray-500 leading-relaxed">
              Solana's proof of stake network and other innovations minimize its impact on the environment. Each Solana transaction uses about the same energy as a few Google searches.
            </div>
          </div>

          {/* Transactions per Second */}
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 text-center">
            <div className="text-5xl font-bold text-gray-900 mb-3">3,753</div>
            <div className="text-xl font-semibold text-gray-700 mb-6">Transactions per Second</div>
            <div className="text-sm text-gray-500 leading-relaxed">
              Solana has block times of 400 milliseconds — and as hardware gets faster, so will the network.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};