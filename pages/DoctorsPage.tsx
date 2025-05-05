
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserRound, Phone, Mail, Calendar } from 'lucide-react';

const doctorsData = [
  {
    id: 1,
    name: 'Dr. Arun Kumar',
    specialty: 'Cardiologist',
    experience: '15+ years',
    education: 'MBBS, MD - Cardiology',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    specialty: 'Dentist',
    experience: '12+ years',
    education: 'BDS, MDS - Orthodontics',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: 3,
    name: 'Dr. Rajesh Singh',
    specialty: 'ENT Specialist',
    experience: '10+ years',
    education: 'MBBS, MS - ENT',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
  },
  {
    id: 4,
    name: 'Dr. Lakshmi Sundaram',
    specialty: 'Emergency Medicine',
    experience: '8+ years',
    education: 'MBBS, MD - Emergency Medicine',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
];

const DoctorsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition">
      <Navbar />
      <main>
        <section className="pt-32 pb-12 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">
                Our Experienced <span className="text-eclinic-600">Doctors</span>
              </h1>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Meet our team of highly qualified medical professionals dedicated to providing you with the best healthcare services.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {doctorsData.map((doctor) => (
                <Card key={doctor.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[3/4] relative">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-heading font-bold text-xl mb-1">{doctor.name}</h3>
                    <p className="text-eclinic-600 font-medium mb-2">{doctor.specialty}</p>
                    <div className="space-y-2 text-gray-600 text-sm mb-4">
                      <p><span className="font-medium">Experience:</span> {doctor.experience}</p>
                      <p><span className="font-medium">Education:</span> {doctor.education}</p>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-eclinic-600 text-eclinic-600 hover:bg-eclinic-50"
                      >
                        <Phone className="mr-1 h-4 w-4" />
                        Call
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-eclinic-600 hover:bg-eclinic-700 text-white"
                      >
                        <Calendar className="mr-1 h-4 w-4" />
                        Book
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DoctorsPage;
