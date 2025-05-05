
import React from 'react';
import { MapPin, Phone, Ambulance, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const EmergencyContactSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              Emergency Contact Information
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              In case of an emergency, please use the following contact information for immediate assistance.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-heading font-bold">Emergency Helpline</h3>
                  <p className="text-gray-600 mb-2">Available 24/7 for critical situations</p>
                  <p className="text-red-600 font-bold text-xl">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                  <Ambulance className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-heading font-bold">Ambulance Services</h3>
                  <p className="text-gray-600 mb-2">For medical transportation emergencies</p>
                  <p className="text-red-600 font-bold text-xl">+91 98765 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-heading font-bold">Emergency Department</h3>
                  <p className="text-gray-600 mb-2">123 Anna Salai, T Nagar, Chennai, Tamil Nadu 600017</p>
                  <Link to="/directions">
                    <Button className="mt-2 bg-red-600 hover:bg-red-700">
                      Get Directions
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg h-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62203.95462761127!2d80.19956083230673!3d13.048963395856152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52678f63a6fe69%3A0x55e697c98ab3ee68!2sT%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1650032097557!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '400px' }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Emergency Department Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyContactSection;
