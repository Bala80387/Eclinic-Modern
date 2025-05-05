
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/dermatology/HeroSection';
import ServicesSection from '@/components/dermatology/ServicesSection';
import DoctorsSection from '@/components/dermatology/DoctorsSection';
import CTASection from '@/components/dermatology/CTASection';

const DermatologyPage = () => {
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

export default DermatologyPage;
