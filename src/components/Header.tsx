import React from 'react';
import { Link } from 'react-router-dom';
import { useUIStore } from '@/store/uiStore';

export const Header: React.FC = () => {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();

  return (
    <header className="bg-white py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/assets/logo-black.png"
              alt="CogniHash Logo"
              className="w-[32px] h-auto object-contain mr-2"
              onError={(e) => {
                // Fallback to gradient icon if logo is not available
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback gradient icon (hidden by default) */}
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl items-center justify-center transform rotate-45 mr-3 hidden">
              <div className="w-5 h-5 bg-white rounded-lg transform -rotate-45"></div>
            </div>
            <span className="text-2xl cognihash-font text-gray-900">CogniHash</span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="bg-gray-100 rounded-full px-8 py-3 flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Product
              </Link>
              <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                About Us
              </a>
              <a href="#roadmap" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Roadmap
              </a>
              <Link to="/pricing" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                Pricing
              </Link>
            </div>
          </nav>

          {/* Right side spacer for balance */}
          <div className="hidden md:block w-32"></div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-gray-900"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900 font-medium"
                onClick={closeMobileMenu}
              >
                Product
              </Link>
              <a
                href="#about"
                className="text-gray-700 hover:text-gray-900 font-medium"
                onClick={closeMobileMenu}
              >
                About Us
              </a>
              <a
                href="#roadmap"
                className="text-gray-700 hover:text-gray-900 font-medium"
                onClick={closeMobileMenu}
              >
                Roadmap
              </a>
              <Link
                to="/pricing"
                className="text-gray-700 hover:text-gray-900 font-medium"
                onClick={closeMobileMenu}
              >
                Pricing
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};