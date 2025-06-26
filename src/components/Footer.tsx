import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-600 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          {/* Products */}
          <div>
            <h3 className="font-semibold mb-8 text-white text-lg">Products</h3>
            <ul className="space-y-6 text-purple-200">
              <li><a href="#" className="hover:text-white transition-colors text-base">CogniHash AI</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-8 text-white text-lg">Resources</h3>
            <ul className="space-y-6 text-purple-200">
              <li><a href="#" className="hover:text-white transition-colors text-base">Cogni Docs</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-base">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-base">Integrations</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-base">Community</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-8 text-white text-lg">Company</h3>
            <ul className="space-y-6 text-purple-200">
              <li><a href="#" className="hover:text-white transition-colors text-base">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-base">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-base">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-base">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-base">YouTube</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-base">Brandkit</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-8 text-white text-lg">Sign up for our newsletter to stay up to date</h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email..."
                className="w-full bg-transparent border-b-2 border-purple-300 pb-4 text-white placeholder-purple-300 focus:outline-none focus:border-white transition-colors text-base"
              />
              <button className="absolute right-0 top-0 text-white hover:text-purple-200 transition-colors">
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Large CogniHash Logo */}
        <div className="flex justify-end mb-20">
          <div className="flex items-center space-x-6">
            <img
              src="/assets/logo-white.png"
              alt="CogniHash Logo"
              className="w-20 h-20 object-contain"
              onError={(e) => {
                // Fallback to gradient icon if logo is not available
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback gradient icon (hidden by default) */}
            <div className="w-20 h-20 bg-gradient-to-br from-white to-purple-200 rounded-3xl items-center justify-center transform rotate-45 hidden">
              <div className="w-10 h-10 bg-purple-600 rounded-2xl transform -rotate-45"></div>
            </div>
            <span className="text-7xl cognihash-font text-white">CogniHash</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center pt-8 border-t border-purple-500">
          <div className="flex items-center space-x-3 text-purple-200">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-base">All systems operational</span>
          </div>
          
          <div className="flex space-x-12 text-purple-200">
            <a href="#" className="hover:text-white transition-colors text-base">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors text-base">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};