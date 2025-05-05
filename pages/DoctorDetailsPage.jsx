
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft } from 'lucide-react';
import { findDoctorById } from '@/data/doctorsData';
import DoctorInfo from '@/components/doctors/DoctorInfo';
import DoctorAbout from '@/components/doctors/DoctorAbout';
import DoctorAppointment from '@/components/doctors/DoctorAppointment';

const DoctorDetailsPage = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the doctor by ID
    const foundDoctor = findDoctorById(id);
    setDoctor(foundDoctor);
  }, [id]);

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/doctors" className="inline-flex items-center text-eclinic-600 hover:text-eclinic-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Doctors
            </Link>
          </div>

          <div className="md:flex md:space-x-8">
            {/* Left column with doctor info */}
            <div className="md:w-1/3 mb-8 md:mb-0">
              <DoctorInfo doctor={doctor} />
            </div>

            {/* Right column with tabs */}
            <div className="md:w-2/3">
              <Tabs defaultValue="about" className="w-full" onValueChange={setActiveTab} value={activeTab}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="about">About & Services</TabsTrigger>
                  <TabsTrigger value="book">Book Appointment</TabsTrigger>
                </TabsList>
                
                <TabsContent value="about" className="pt-6">
                  <DoctorAbout doctor={doctor} />
                </TabsContent>
                
                <TabsContent value="book" className="pt-6">
                  <DoctorAppointment doctor={doctor} />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DoctorDetailsPage;
