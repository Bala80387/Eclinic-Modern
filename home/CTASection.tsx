
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Video } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background with overlay */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
              alt="Medical professionals"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-eclinic-900/90 to-eclinic-800/70"></div>
          </div>
          
          <div className="relative py-16 px-8 md:py-24 md:px-12 lg:flex lg:items-center">
            <div className="lg:w-3/5 xl:w-1/2">
              <h2 className="text-3xl font-heading font-bold text-white sm:text-4xl lg:text-5xl">
                Your Health Is Our Priority
              </h2>
              <p className="mt-4 text-lg text-eclinic-100">
                Book an appointment or consult with our specialists online from the comfort of your home. We're here to provide the care you deserve.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/appointment">
                  <Button
                    size="lg"
                    className="bg-white text-eclinic-700 hover:bg-eclinic-50"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Appointment
                  </Button>
                </Link>
                <Link to="/consultation">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-eclinic-700 hover:bg-white/10"
                  >
                    <Video className="mr-2 h-5 w-5" />
                    Consult Online
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
