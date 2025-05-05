
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DentalCTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-dental to-blue-400 rounded-3xl overflow-hidden shadow-xl">
          <div className="md:flex items-center">
            <div className="md:w-1/2 p-12">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                Schedule Your Dental Visit Today
              </h2>
              <p className="text-white/90 mb-8">
                Don't wait to take care of your dental health. Our team is ready to provide the best care for your smile.
              </p>
              <Button
                size="lg"
                className="bg-white text-dental-dark hover:bg-gray-100"
              >
                <Link to="/appointment" className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto">
              <img
                src="data:image/jpeg;base64,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"
                alt="Dental care"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DentalCTASection;
