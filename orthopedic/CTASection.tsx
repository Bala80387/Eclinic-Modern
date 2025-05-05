
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Calendar } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex items-center justify-between">
          <div className="md:w-2/3 md:pr-12 mb-8 md:mb-0">
            <h2 className="text-3xl font-heading font-bold text-white sm:text-4xl animate-fade-up">
              Need Orthopedic Consultation?
            </h2>
            <p className="mt-4 text-xl text-green-100 animate-fade-up" style={{animationDelay: "100ms"}}>
              We're here to help with all your orthopedic concerns. Book an appointment or call for consultation.
            </p>
          </div>
          <div className="md:w-1/3 flex flex-col space-y-4 animate-fade-up" style={{animationDelay: "200ms"}}>
            <Link to="/appointment">
              <Button size="lg" className="w-full bg-white text-green-600 hover:bg-green-50">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>
            </Link>
            <Link to="/consultation">
              <Button size="lg" className="w-full bg-green-700 hover:bg-green-800 text-white">
                <Phone className="mr-2 h-5 w-5" />
                Online Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
