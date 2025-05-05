
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/gastroenterology/HeroSection';
import ServicesSection from '@/components/gastroenterology/ServicesSection';
import DoctorsSection from '@/components/gastroenterology/DoctorsSection';
import CTASection from '@/components/gastroenterology/CTASection';

const GastroenterologyPage = () => {
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

export default GastroenterologyPage;
