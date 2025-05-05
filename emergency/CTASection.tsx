
import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EmergencyCTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-3xl overflow-hidden shadow-xl">
          <div className="md:flex items-center">
            <div className="md:w-1/2 p-12">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-red-600 mb-4">
                <Clock className="mr-1 h-4 w-4" />
                24/7 Emergency Care
              </div>
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                Medical Emergency? Don't Wait!
              </h2>
              <p className="text-white/90 mb-8">
                Our emergency team is available round the clock to provide immediate medical attention. Every minute matters in critical situations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-white text-red-600 hover:bg-gray-100"
                >
                  <Link to="/appointment" className="flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    Emergency Helpline
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-red-500"
                >
                  <Link to="/ambulance">
                    Call Ambulance
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80"
                alt="Emergency medical care"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyCTASection;
