import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// Pricing Components
const PricingSection: React.FC = () => {
  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with CogniHash AI and unlock the power of blockchain intelligence. 
            Choose the plan that fits your needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 relative">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">$29</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-8">Perfect for individuals and small teams getting started with blockchain analytics.</p>
              
              <ul className="text-left space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Up to 10,000 transactions/month
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Basic AI analytics
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Email support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Dashboard access
                </li>
              </ul>
              
              <button className="w-full bg-gray-900 text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Professional Plan */}
          <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-green-400 rounded-3xl p-8 relative transform scale-105">
            <div className="absolute top-4 right-4">
              <span className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-white">$99</span>
                <span className="text-white/80">/month</span>
              </div>
              <p className="text-white/90 mb-8">Ideal for growing businesses that need advanced blockchain intelligence.</p>
              
              <ul className="text-left space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white">Up to 100,000 transactions/month</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white">Advanced AI analytics</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white">Priority support</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white">Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-300 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white">API access</span>
                </li>
              </ul>
              
              <button className="w-full bg-white text-purple-600 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 relative">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">Custom</span>
              </div>
              <p className="text-gray-600 mb-8">For large organizations requiring enterprise-grade blockchain intelligence solutions.</p>
              
              <ul className="text-left space-y-4 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited transactions
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Enterprise AI features
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 dedicated support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom deployment
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  SLA guarantees
                </li>
              </ul>
              
              <button className="w-full bg-gray-900 text-white py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What is included in the free trial?
              </h3>
              <p className="text-gray-600">
                Our free trial includes access to all Starter plan features for 14 days, with up to 1,000 transactions analyzed.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I upgrade or downgrade my plan?
              </h3>
              <p className="text-gray-600">
                Yes, you can change your plan at any time. Changes take effect immediately, and billing is prorated.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What blockchain networks do you support?
              </h3>
              <p className="text-gray-600">
                We support major blockchain networks including Ethereum, Bitcoin, Solana, Polygon, and many others.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Is there a setup fee?
              </h3>
              <p className="text-gray-600">
                No setup fees for Starter and Professional plans. Enterprise plans may include custom setup based on requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <PricingSection />
      <Footer />
    </div>
  );
};