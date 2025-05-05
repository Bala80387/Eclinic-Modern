
import React from 'react';
import { Ear, MessageSquare, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ENTHeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-ent-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex items-center gap-12">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="inline-flex items-center bg-white px-3 py-1 rounded-full shadow-sm mb-6">
              <Ear className="text-ent h-5 w-5 mr-2" />
              <span className="text-sm font-medium text-gray-700">ENT Department</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Specialized Care for Ear, Nose & Throat
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Our ENT department provides comprehensive diagnosis and treatment for conditions affecting the ears, nose, throat, head, and neck regions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-ent hover:bg-ent-dark text-white">
                <Link to="/appointment" className="flex items-center">
                  <Stethoscope className="mr-2 h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-ent text-ent-dark hover:bg-ent-light">
                <Link to="/consultation" className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Consult Online
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1631815587646-b85a1bb027e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
              alt="ENT department"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ENTHeroSection;
