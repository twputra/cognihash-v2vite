import React from 'react';
import { User, FileText, Database, Layers, Network } from 'lucide-react';

export const VisionMissionSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Vision & Mission Container */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-16 mb-20">
          <div className="space-y-20">
            <div>
              <h2 className="text-5xl font-bold text-white mb-8">Vision</h2>
              <p className="text-2xl text-white/90 max-w-5xl mx-auto leading-relaxed">
                To become the AI backbone of global blockchain infrastructure—empowering institutions, 
                protocols, and users with transparent, autonomous, and real-time decision-making 
                capabilities.
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-white mb-8">Missions</h2>
              <p className="text-2xl text-white/90 max-w-5xl mx-auto leading-relaxed">
                We democratize blockchain intelligence through autonomous agents and interoperable AI 
                systems. By eliminating friction in data workflows, CogniHash enables fast, secure, and 
                informed action—without writing a single line of code.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Icons */}
        <div className="flex justify-center space-x-12">
          {[
            { icon: User, color: 'from-purple-400 to-pink-500' },
            { icon: FileText, color: 'from-blue-400 to-purple-500' },
            { icon: Database, color: 'from-green-400 to-blue-500' },
            { icon: Layers, color: 'from-yellow-400 to-orange-500' },
            { icon: Network, color: 'from-pink-400 to-red-500' }
          ].map((item, index) => (
            <div key={index} className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center">
              <item.icon className="w-10 h-10 text-white" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};