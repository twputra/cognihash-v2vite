import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-32">
          {/* Zero Dev Overhead */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-gray-900">Zero Dev Overhead</h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  CogniHash operates on the principle that blockchain intelligence should be autonomous, 
                  scalable, and accessible, transforming raw data into actionable insights.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  It's not another tool—it's your AI-native intelligence layer.
                </p>
              </div>
              <button className="text-gray-900 font-semibold hover:text-gray-700 transition-colors flex items-center group text-lg">
                Just ask. Get results
                <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <img
                src="/assets/section1.gif"
                alt="Zero Dev Overhead Animation"
                className="w-full max-w-[500px] h-auto object-contain rounded-2xl"
                onError={(e) => {
                  // Fallback to demo interface if GIF is not available
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              
              {/* Fallback demo interface (hidden by default) */}
              <div className="bg-gray-50 rounded-3xl p-8 hidden max-w-[500px] w-full">
                <div className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform rotate-45">
                      <div className="w-4 h-4 bg-white rounded-sm transform -rotate-45"></div>
                    </div>
                    <span className="font-semibold text-gray-900 text-lg">CogniHash Data Intel</span>
                  </div>
                  <div className="space-y-6">
                    <div className="text-gray-600">What can I do for you?</div>
                    <div className="flex items-center justify-between">
                      <div className="text-gray-500">Choose your agent</div>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-400">Agent</span>
                        <ArrowUpRight className="w-4 h-4 text-gray-400" />
                        <button className="text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-1 hover:bg-gray-50">+ Upload</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* HMAS */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2 space-y-6">
              <h2 className="text-5xl font-bold text-gray-900">HMAS</h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Higher-level agents supervise and coordinate lower-level agents to achieve complex tasks 
                  aligned with broader objectives. Each agent has specialized roles, and the system ensures 
                  scalability, modularity, and adaptability.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A layered structure with supervisor agents coordinating midlevel coordinators and low-level 
                  executors, utilizing Solana's smart contracts for task delegation and execution.
                </p>
              </div>
              <button className="text-gray-900 font-semibold hover:text-gray-700 transition-colors flex items-center group text-lg">
                Read the Doc's Now
                <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
            
            <div className="lg:order-1 flex justify-center lg:justify-start">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-[600px] h-auto object-contain rounded-2xl"
                onError={(e) => {
                  // Fallback to static visualization if video is not available
                  const target = e.target as HTMLVideoElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              >
                <source src="/assets/animasi-hmas.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Fallback static visualization (hidden by default) */}
              <div className="bg-purple-50 rounded-3xl p-8 hidden max-w-[600px] w-full">
                <div className="grid grid-cols-4 gap-6">
                  {/* Top row - single agent */}
                  <div className="col-span-4 flex justify-center">
                    <div className="w-20 h-20 bg-purple-200 rounded-3xl flex items-center justify-center">
                      <div className="w-10 h-10 bg-purple-600 rounded-2xl"></div>
                    </div>
                  </div>
                  
                  {/* Middle row - two agents */}
                  <div className="col-span-2 flex justify-center">
                    <div className="w-20 h-20 bg-purple-200 rounded-3xl flex items-center justify-center">
                      <div className="w-10 h-10 bg-purple-600 rounded-2xl"></div>
                    </div>
                  </div>
                  <div className="col-span-2 flex justify-center">
                    <div className="w-20 h-20 bg-purple-200 rounded-3xl flex items-center justify-center">
                      <div className="w-10 h-10 bg-purple-600 rounded-2xl"></div>
                    </div>
                  </div>
                  
                  {/* Bottom row - four agents */}
                  {Array.from({ length: 4 }, (_, i) => (
                    <div key={i} className="flex justify-center">
                      <div className="w-20 h-20 bg-purple-200 rounded-3xl flex items-center justify-center">
                        <div className="w-10 h-10 bg-purple-600 rounded-2xl"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Model Context Protocol (MCP) */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-gray-900">
                Model Context Protocol (MCP)
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  MCP is an open protocol that standardizes how applications provide context to LLMs. Think of 
                  MCP like a USB-C port for AI applications. Just as USB-C provides a standardized way to 
                  connect your device.
                </p>
              </div>
              <button className="text-gray-900 font-semibold hover:text-gray-700 transition-colors flex items-center group text-lg">
                Read the Doc's Now
                <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-[500px] h-auto object-contain rounded-2xl"
                onError={(e) => {
                  // Fallback to static visualization if video is not available
                  const target = e.target as HTMLVideoElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              >
                <source src="/assets/rute-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Fallback static visualization (hidden by default) */}
              <div className="bg-purple-50 rounded-3xl p-8 hidden max-w-[500px] w-full">
                <div className="flex items-center justify-center space-x-8">
                  <div className="w-20 h-20 bg-purple-200 rounded-3xl flex items-center justify-center">
                    <div className="w-10 h-10 bg-purple-600 rounded-2xl"></div>
                  </div>
                  <div className="w-20 h-20 bg-purple-200 rounded-3xl flex items-center justify-center">
                    <div className="w-10 h-10 bg-purple-600 rounded-2xl"></div>
                  </div>
                  <div className="w-20 h-20 bg-purple-200 rounded-3xl flex items-center justify-center">
                    <div className="w-10 h-10 bg-purple-600 rounded-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};