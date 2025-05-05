
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoConsultation from '@/components/consultation/VideoConsultation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { findDoctorById } from '@/data/doctorsData';

const VideoConsultationPage: React.FC = () => {
  const { id } = useParams<{id: string}>();
  const [doctor, setDoctor] = useState<any>(null);
  const [isCallActive, setIsCallActive] = useState<boolean>(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (id) {
      const foundDoctor = findDoctorById(id);
      setDoctor(foundDoctor);
    }
  }, [id]);
  
  const handleEndCall = () => {
    setIsCallActive(false);
    setTimeout(() => {
      navigate(`/doctor-details/${id}`);
    }, 1500);
  };
  
  if (!doctor) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold mb-4">Doctor Not Found</h1>
          <p className="text-gray-600 mb-8">The doctor you selected is not available for video consultation.</p>
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
    <div className="page-transition min-h-screen flex flex-col">
      {isCallActive ? (
        <div className="flex-grow flex flex-col">
          {/* Minimal header for active call */}
          <header className="bg-black text-white p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <h1 className="text-xl font-bold">Video Consultation</h1>
              <Button variant="ghost" onClick={handleEndCall} className="text-white hover:bg-gray-800">
                End Call
              </Button>
            </div>
          </header>
          
          {/* Video consultation area */}
          <div className="flex-grow p-4 bg-gray-100">
            <div className="max-w-5xl mx-auto h-full">
              <VideoConsultation 
                doctorName={doctor.name}
                doctorImage={doctor.image}
                onEndCall={handleEndCall}
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <div className="flex-grow flex flex-col items-center justify-center p-4">
            <h1 className="text-2xl font-bold mb-4">Call Ended</h1>
            <p className="text-gray-600 mb-8">Your consultation with Dr. {doctor.name.split(' ')[1]} has ended.</p>
            <div className="flex space-x-4">
              <Link to={`/doctor-details/${id}`}>
                <Button className="bg-eclinic-600 hover:bg-eclinic-700">
                  Doctor Profile
                </Button>
              </Link>
              <Link to="/consultation">
                <Button variant="outline">
                  Book Another Consultation
                </Button>
              </Link>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default VideoConsultationPage;
