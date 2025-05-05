
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Brain, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-r from-blue-50 to-indigo-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex items-center">
          <div className="md:w-1/2 md:pr-12">
            <div className="mb-8">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <Brain className="mr-1 h-4 w-4" />
                Neurology Department
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6 animate-fade-up">
              Advanced <span className="text-blue-600">Neurological</span> Care
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Our neurology department offers comprehensive diagnostic and treatment services for conditions affecting the brain, spine, and nervous system, all provided by experienced specialists.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/appointment">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white animate-fade-up" style={{animationDelay: "200ms"}}>
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
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
              alt="Neurology Department"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
