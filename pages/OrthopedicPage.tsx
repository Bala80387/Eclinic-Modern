
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/orthopedic/HeroSection';
import ServicesSection from '@/components/orthopedic/ServicesSection';
import DoctorsSection from '@/components/orthopedic/DoctorsSection';
import CTASection from '@/components/orthopedic/CTASection';

const OrthopedicPage = () => {
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

export default OrthopedicPage;
