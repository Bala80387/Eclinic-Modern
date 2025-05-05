
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ENTHeroSection from '@/components/ent/HeroSection';
import ENTServicesSection from '@/components/ent/ServicesSection';
import ENTDoctorsSection from '@/components/ent/DoctorsSection';
import ENTCTASection from '@/components/ent/CTASection';

const ENTPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition">
      <Navbar />
      <main>
        <ENTHeroSection />
        <ENTServicesSection />
        <ENTDoctorsSection />
        <ENTCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default ENTPage;
