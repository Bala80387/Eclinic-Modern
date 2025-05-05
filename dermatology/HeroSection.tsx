
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sun, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-r from-pink-50 to-purple-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex items-center">
          <div className="md:w-1/2 md:pr-12">
            <div className="mb-8">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                <Sun className="mr-1 h-4 w-4" />
                Dermatology Department
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6 animate-fade-up">
              Advanced <span className="text-pink-600">Skin</span> Care
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Our dermatology department offers comprehensive care for all skin, hair, and nail conditions using the latest treatments and technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/appointment">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white animate-fade-up" style={{animationDelay: "200ms"}}>
                  Book Appointment
                </Button>
              </Link>
              <Link to="/consultation">
                <Button size="lg" variant="outline" className="animate-fade-up" style={{animationDelay: "300ms"}}>
                  Online Consultation
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 animate-float">
            <img
              src="https://www.shutterstock.com/image-photo/light-interior-modern-aesthetic-cosmetolody-600nw-2485842271.jpg"
              alt="Dermatology Department"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
