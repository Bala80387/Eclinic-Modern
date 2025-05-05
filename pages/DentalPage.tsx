
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DentalHeroSection from '@/components/dental/HeroSection';
import DentalServicesSection from '@/components/dental/ServicesSection';
import DentistsSection from '@/components/dental/DentistsSection';
import DentalCTASection from '@/components/dental/CTASection';

const DentalPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition">
      <Navbar />
      <main>
        <DentalHeroSection />
        <DentalServicesSection />
        <DentistsSection />
        <DentalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default DentalPage;
