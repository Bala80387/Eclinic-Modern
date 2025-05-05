
import React from 'react';
import { Link } from 'react-router-dom';
import { Syringe, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DentalHeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-r from-dental-light to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-dental-light text-dental-dark">
              <Syringe className="mr-1 h-4 w-4" />
              Dental Care
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900">
              Comprehensive Dental <span className="text-dental-dark">Care Services</span>
            </h1>
            <p className="text-lg text-gray-700">
              Our dental department offers state-of-the-art treatments with a focus on comfort and prevention. From routine check-ups to advanced procedures, our expert dentists provide personalized care for your unique needs.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-dental hover:bg-dental-dark text-white"
              >
                <Link to="/appointment" className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-dental text-dental-dark hover:bg-dental-light"
              >
                <Link to="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1588776813677-77aaf5595b83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="Dental care"
              className="w-full h-auto aspect-video object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalHeroSection;
