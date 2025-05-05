
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone } from 'lucide-react';
import { findDoctorById } from '@/data/doctorsData';
import CallOption from '@/components/doctors/CallOption';
import AvailableHours from '@/components/doctors/AvailableHours';
import { useToast } from "@/hooks/use-toast";

const DoctorCallPage = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the doctor by ID
    const foundDoctor = findDoctorById(id);
    setDoctor(foundDoctor);
  }, [id]);

  const handleCallDoctor = () => {
    // This function would initiate a call in a real application
    toast({
      title: "Call Initiated",
      description: `Calling Dr. ${doctor?.name.split(' ')[1]}...`,
    });
    
    // Simulate a connecting call
    setTimeout(() => {
      toast({
        title: "Connected",
        description: `You are now connected with Dr. ${doctor?.name.split(' ')[1]}`,
      });
    }, 2000);
  };

  if (!doctor) {
    return (
      <div className="page-transition">
        <Navbar />
        <div className="pt-32 pb-32 text-center">
          <h2 className="text-2xl font-heading font-bold">Doctor not found</h2>
          <Link to="/doctors">
            <Button className="mt-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Doctors
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page-transition">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to={`/doctor-details/${doctor.id}`} className="inline-flex items-center text-eclinic-600 hover:text-eclinic-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Doctor Details
            </Link>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-heading font-bold text-gray-900 mb-2">
              Contact Dr. {doctor.name.split(' ')[1]}
            </h1>
            <p className="text-gray-600">
              {doctor.specialty} • {doctor.experience} Experience
            </p>
            <div className="mt-4 inline-flex items-center bg-eclinic-50 text-eclinic-700 px-4 py-2 rounded-full">
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-semibold">+91 {Math.floor(9700000000 + Math.random() * 299999999)}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <CallOption 
              type="button"
              icon="phone"
              title="Voice Call"
              description={`Speak directly with Dr. ${doctor.name.split(' ')[1]} for immediate assistance or consultation.`}
              actionText="Call Now"
              onClick={handleCallDoctor}
              doctorPhone={`+91 ${Math.floor(9700000000 + Math.random() * 299999999)}`}
            />

            <CallOption 
              type="link"
              icon="message"
              title="Chat Consultation"
              description={`Start a text chat with Dr. ${doctor.name.split(' ')[1]} for non-urgent questions and consultations.`}
              actionText="Start Chat"
              linkTo="/consultation"
            />
          </div>

          <AvailableHours 
            availableDays={doctor.availableDays}
            doctorId={doctor.id}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DoctorCallPage;
