import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { SolanaSection } from '@/components/SolanaSection';
import { PartnersSection } from '@/components/PartnersSection';
import { VisionMissionSection } from '@/components/VisionMissionSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <SolanaSection />
      <PartnersSection />
      <VisionMissionSection />
      <CTASection />
      <Footer />
    </div>
  );
};