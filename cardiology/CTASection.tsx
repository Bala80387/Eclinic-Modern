
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CardioCTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-cardio to-red-400 rounded-3xl overflow-hidden shadow-xl">
          <div className="md:flex items-center">
            <div className="md:w-1/2 p-12">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                Take the First Step Towards Heart Health
              </h2>
              <p className="text-white/90 mb-8">
                Don't wait until it's too late. Schedule an appointment with our cardiology specialists for a comprehensive heart check-up.
              </p>
              <Button
                size="lg"
                className="bg-white text-cardio-dark hover:bg-gray-100"
              >
                <Link to="/appointment" className="flex items-center">
                  <Heart className="mr-2 h-5 w-5" />
                  Book Heart Check-up
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1628348070889-cb656235b4eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                alt="Cardiology care"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardioCTASection;
