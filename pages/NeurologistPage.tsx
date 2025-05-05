
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/neurology/HeroSection';
import ServicesSection from '@/components/neurology/ServicesSection';
import DoctorsSection from '@/components/neurology/DoctorsSection';
import CTASection from '@/components/neurology/CTASection';

const NeurologistPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition animate-fade-in">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <DoctorsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default NeurologistPage;
