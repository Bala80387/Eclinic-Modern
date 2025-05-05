
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Phone, Video } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-eclinic-100 opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-100 opacity-50 blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-eclinic-100 text-eclinic-800">
                Advanced Healthcare
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-gray-900">
                <span className="block">Modern Healthcare</span>
                <span className="block text-eclinic-600 mt-1">For Your Family</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Experience exceptional care with Eclinic's comprehensive medical services. Our team of specialists is dedicated to providing personalized healthcare solutions using advanced technology.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-eclinic-600 hover:bg-eclinic-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/appointment" className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-eclinic-600 text-eclinic-600 hover:bg-eclinic-50"
              >
                <Link to="/consultation" className="flex items-center">
                  <Video className="mr-2 h-5 w-5" />
                  Consult Online
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white relative overflow-hidden">
                      <img
                        src={`https://randomuser.me/api/portraits/men/${i + 10}.jpg`}
                        alt="Doctor"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">50+ Specialists</p>
                  <p className="text-xs text-gray-500">Trusted by thousands</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-eclinic-100 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-eclinic-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">24/7 Support</p>
                  <p className="text-xs text-gray-500">Call: +91 800 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative mx-auto w-full max-w-md">
              {/* Main image with glass morphism effect */}
              <div className="aspect-[4/5] rounded-2xl shadow-2xl overflow-hidden bg-white p-2 glass-morphism">
                <img
                  src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                  alt="Doctor with patient"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              
              {/* Floating cards */}
              <div className="absolute -left-12 top-1/4 glass-morphism rounded-xl p-4 shadow-lg animate-float">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">99% Success Rate</p>
                    <p className="text-xs text-gray-500">In treatments</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-8 bottom-1/4 glass-morphism rounded-xl p-4 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Modern Equipment</p>
                    <p className="text-xs text-gray-500">Latest technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '15+', label: 'Qualified Doctors' },
            { value: '1,000+', label: 'Happy Patients' },
            { value: '50+', label: 'Medical Awards' },
          ].map((stat, i) => (
            <div key={i} className="glass-morphism rounded-xl p-4 md:p-6">
              <p className="text-eclinic-600 text-3xl md:text-4xl font-bold">{stat.value}</p>
              <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
