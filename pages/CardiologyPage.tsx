
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CardioHeroSection from '@/components/cardiology/HeroSection';
import CardioServicesSection from '@/components/cardiology/ServicesSection';
import CardiologistsSection from '@/components/cardiology/DoctorsSection';
import CardioCTASection from '@/components/cardiology/CTASection';

const CardiologyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition">
      <Navbar />
      <main>
        <CardioHeroSection />
        <CardioServicesSection />
        <CardiologistsSection />
        <CardioCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default CardiologyPage;
