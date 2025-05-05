
import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Phone, Ambulance } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EmergencyHeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-r from-red-50 to-red-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
              <AlertTriangle className="mr-1 h-4 w-4" />
              Emergency Services
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900">
              24/7 <span className="text-red-600">Emergency</span> Medical Care
            </h1>
            <p className="text-lg text-gray-700">
              Our emergency department is equipped with advanced medical technology and staffed with skilled professionals ready to provide immediate care for critical conditions.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <Link to="/appointment" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency Helpline: +91 98765 43210
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-red-600 text-red-700 hover:bg-red-50"
              >
                <Link to="/ambulance" className="flex items-center">
                  <Ambulance className="mr-2 h-5 w-5" />
                  Call Ambulance
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="Emergency medical care"
              className="w-full h-auto aspect-video object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyHeroSection;
