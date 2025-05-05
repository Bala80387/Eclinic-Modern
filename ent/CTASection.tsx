
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ENTCTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl overflow-hidden shadow-xl">
          <div className="md:flex items-center">
            <div className="md:w-1/2 p-12">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                Schedule Your ENT Consultation Today
              </h2>
              <p className="text-white/90 mb-8">
                Don't wait to address your ear, nose, or throat issues. Our specialists are ready to provide expert care.
              </p>
              <Button
                size="lg"
                className="bg-white text-indigo-700 hover:bg-gray-100"
              >
                <Link to="/appointment" className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
                alt="ENT specialist consulting patient"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ENTCTASection;
