
import React, { useEffect, useState } from 'react';
import { MapPin, Navigation, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DirectionsPage = () => {
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Hospital location (T Nagar, Chennai)
  const hospitalLocation = {
    lat: 13.0418,
    lng: 80.2341,
    address: "123 Anna Salai, T Nagar, Chennai, Tamil Nadu 600017"
  };

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setIsLoading(false);
        },
        (err) => {
          console.error("Error getting location:", err);
          setError("Could not access your location. Please enable location services.");
          setIsLoading(false);
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
      setIsLoading(false);
    }
  }, []);

  const openGoogleMaps = () => {
    if (!userLocation) return;
    
    // Create Google Maps directions URL
    const url = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${hospitalLocation.lat},${hospitalLocation.lng}&travelmode=driving`;
    window.open(url, '_blank');
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/emergency" className="inline-flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Emergency Page
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h1 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Get Directions to Emergency Department
            </h1>
            
            <div className="flex items-start mb-6">
              <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-heading font-bold">Destination</h3>
                <p className="text-gray-700">{hospitalLocation.address}</p>
              </div>
            </div>
            
            {isLoading ? (
              <div className="text-center py-10">
                <div className="animate-spin h-10 w-10 border-4 border-red-600 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p className="text-gray-700">Getting your location...</p>
              </div>
            ) : error ? (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-700">{error}</p>
                <p className="text-gray-700 mt-2">You can still navigate to our emergency department:</p>
                <p className="font-medium mt-1">{hospitalLocation.address}</p>
              </div>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-700">We've located you! Ready to navigate to our emergency department.</p>
              </div>
            )}
            
            <div className="rounded-xl overflow-hidden h-80 mb-6">
              <iframe 
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62203.95462761127!2d80.19956083230673!3d13.048963395856152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52678f63a6fe69%3A0x55e697c98ab3ee68!2sT%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1650032097557!5m2!1sen!2sin`}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Emergency Department Location"
              ></iframe>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={openGoogleMaps}
                className="bg-red-600 hover:bg-red-700 text-white flex items-center justify-center"
                size="lg"
                disabled={!userLocation}
              >
                <Navigation className="mr-2 h-5 w-5" />
                Start Navigation via Google Maps
              </Button>
              
              <a 
                href={`tel:+919876543210`} 
                className="inline-flex items-center justify-center"
              >
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-red-600 text-red-600 hover:bg-red-50 w-full"
                >
                  Call Emergency Helpline
                </Button>
              </a>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
            <p className="text-yellow-700">
              <strong>Important:</strong> In case of a medical emergency, please call emergency services directly if needed before starting navigation.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default DirectionsPage;
