
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EmergencyHeroSection from '@/components/emergency/HeroSection';
import EmergencyServicesSection from '@/components/emergency/ServicesSection';
import EmergencyContactSection from '@/components/emergency/ContactSection';
import EmergencyCTASection from '@/components/emergency/CTASection';
import CallSection from '@/components/emergency/CallSection';
import EmergencyVideoCall from '@/components/emergency/EmergencyVideoCall';

const EmergencyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition">
      <Navbar />
      <main>
        <EmergencyHeroSection />
        <EmergencyServicesSection />
        <CallSection />
        <EmergencyVideoCall />
        <EmergencyContactSection />
        <EmergencyCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default EmergencyPage;
