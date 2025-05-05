
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Ambulance, Clock, MapPin, Phone, ShieldAlert } from 'lucide-react';

const AmbulancePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition animate-fade-in">
      <Navbar />
      <main>
        <section className="pt-32 pb-12 bg-gradient-to-r from-red-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex items-center">
              <div className="md:w-1/2 md:pr-12">
                <div className="mb-8">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                    <Ambulance className="mr-1 h-4 w-4" />
                    Emergency Services
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6 animate-fade-up">
                  24/7 <span className="text-red-600">Ambulance</span> Services
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Our fleet of modern, well-equipped ambulances with trained paramedics is always ready to respond to emergencies anywhere in Chennai and surrounding areas.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white animate-pulse-soft"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Ambulance: +91 98765 43210
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 mt-10 md:mt-0 animate-float">
                <img
                  src="https://media.istockphoto.com/id/1385087783/photo/force-traveller.jpg?s=612x612&w=0&k=20&c=Q3u_gcpZF3Kt2AuvJ2Qn17TwUafzmftRMdtzN31UBt8="
                  alt="Indian Ambulance Service"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                Our Ambulance Services
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                We provide a range of ambulance services to meet different emergency needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 animate-fade-up" style={{animationDelay: "100ms"}}>
                <ShieldAlert className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-heading font-bold mb-3">Emergency Response</h3>
                <p className="text-gray-600">
                  Immediate response for life-threatening emergencies with advanced life support equipment.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 animate-fade-up" style={{animationDelay: "200ms"}}>
                <Clock className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-heading font-bold mb-3">Patient Transport</h3>
                <p className="text-gray-600">
                  Scheduled non-emergency transport for patients requiring medical supervision.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 animate-fade-up" style={{animationDelay: "300ms"}}>
                <MapPin className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-heading font-bold mb-3">Long Distance Transfer</h3>
                <p className="text-gray-600">
                  Safe and comfortable long-distance medical transport with continuous monitoring.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-red-600 rounded-2xl overflow-hidden shadow-xl animate-fade-up">
              <div className="p-8 md:p-12 text-white text-center">
                <h2 className="text-3xl font-heading font-bold mb-4">Need Emergency Assistance?</h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Our emergency helpline is available 24/7. Call us immediately for any medical emergency.
                </p>
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100 animate-pulse-soft"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  +91 98765 43210
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AmbulancePage;
