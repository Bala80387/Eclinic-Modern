
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const EmergencyCallEnded: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center p-8 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Emergency Call Ended</h1>
        <p className="text-gray-600 mb-8">Your emergency consultation has ended.</p>
        <div className="flex space-x-4">
          <Link to="/emergency">
            <Button className="bg-red-600 hover:bg-red-700">
              Return to Emergency
            </Button>
          </Link>
          <Link to="/">
            <Button variant="outline">
              Go to Homepage
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EmergencyCallEnded;
