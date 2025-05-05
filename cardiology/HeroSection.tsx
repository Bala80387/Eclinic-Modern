
import React from 'react';
import { Heart, Activity, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CardioHeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-cardio-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex items-center gap-12">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="inline-flex items-center bg-white px-3 py-1 rounded-full shadow-sm mb-6">
              <Heart className="text-cardio h-5 w-5 mr-2" />
              <span className="text-sm font-medium text-gray-700">Cardiology Department</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Expert Heart Care for a Healthy Life
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Our cardiology department offers comprehensive diagnosis, treatment, and management of heart conditions with state-of-the-art technology and expert cardiologists.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-cardio hover:bg-cardio-dark text-white">
                <Link to="/appointment" className="flex items-center">
                  <Stethoscope className="mr-2 h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-cardio text-cardio-dark hover:bg-cardio-light">
                <Link to="/consultation" className="flex items-center">
                  <Activity className="mr-2 h-5 w-5" />
                  Consult Online
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://c0.wallpaperflare.com/preview/360/533/202/health-medical-healthcare-health.jpg"
              alt="Cardiology department"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardioHeroSection;
