
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { findDoctorById } from '@/data/doctorsData';
import CallOption from '@/components/doctors/CallOption';
import OtherOptions from '@/components/doctors/OtherOptions';
import { ArrowLeft, Phone, Star, MapPin, Calendar, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const DoctorCallPage = () => {
  const { id } = useParams<{id: string}>();
  const [doctor, setDoctor] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find doctor by ID
    if (id) {
      const foundDoctor = findDoctorById(id);
      setDoctor(foundDoctor);
    }
    
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loader animate-pulse">Loading...</div>
      </div>
    );
  }

  if (!doctor) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold mb-4">Doctor Not Found</h1>
          <p className="text-gray-600 mb-8">The doctor you are looking for doesn't exist or has been removed.</p>
          <Link to="/doctors">
            <Button className="bg-eclinic-600 hover:bg-eclinic-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Doctors
            </Button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <div className="page-transition animate-fade-in">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/doctors" className="inline-flex items-center text-eclinic-600 hover:text-eclinic-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Doctors
            </Link>
          </div>
          
          <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-fade-up">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="h-48 md:h-full w-full overflow-hidden">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              
              <div className="p-6 md:p-8 md:w-2/3">
                <h1 className="text-2xl font-heading font-bold text-gray-900 mb-2">{doctor.name}</h1>
                <p className="text-eclinic-600 font-medium mb-4">{doctor.specialty}</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span>{doctor.rating}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 text-gray-400 mr-1" />
                    <span>{doctor.experience}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                    <span>{doctor.hospital}</span>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h2 className="font-bold text-lg mb-4">Contact Options</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CallOption 
                      type="button"
                      icon="phone"
                      title="Phone Call"
                      description="Talk directly with the doctor over a phone call."
                      actionText="Call Now"
                      doctorPhone={doctor.phone || "+91 9876543210"}
                    />
                    
                    <CallOption 
                      type="link"
                      icon="video"
                      title="Video Consultation"
                      description="Schedule a video call with the doctor."
                      actionText="Start Video Call"
                      linkTo={`/video-consultation/${id}`}
                    />
                  </div>
                  
                  <div className="mt-4 grid grid-cols-1">
                    <CallOption 
                      type="link"
                      icon="message"
                      title="Chat Consultation"
                      description="Send messages and get responses from the doctor."
                      actionText="Start Chat"
                      linkTo="/consultation"
                    />
                  </div>
                </div>
                
                <OtherOptions doctorId={id || ""} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DoctorCallPage;
