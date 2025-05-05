
import React, { useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { PillBottle, ShoppingCart } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition">
      <Navbar />
      <main>
        <HeroSection />
        <div className="bg-blue-50 dark:bg-blue-950 py-4 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="flex items-center">
                <PillBottle className="h-5 w-5 mr-2 text-eclinic-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  Browse our new collection of medicines, pills, and syrups
                </span>
              </div>
              <Link to="/medicine">
                <Button variant="outline" size="sm" className="border-eclinic-200 hover:bg-eclinic-100 dark:border-eclinic-800 dark:hover:bg-eclinic-900">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <ServicesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
