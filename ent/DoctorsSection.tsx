
import React from 'react';
import { Calendar, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ENTDoctorsSection = () => {
  const doctors = [
    {
      name: "Dr. Vikram Singh",
      title: "Senior ENT Specialist",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
      qualification: "MBBS, MS (ENT)",
      specialty: "Ear Disorders & Cochlear Implants"
    },
    {
      name: "Dr. Arun Nair",
      title: "ENT Surgeon",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      qualification: "MBBS, MS (ENT), Fellowship in Head & Neck Surgery",
      specialty: "Head & Neck Surgery"
    },
    {
      name: "Dr. Sunita Patel",
      title: "Pediatric ENT Specialist",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      qualification: "MBBS, MS (ENT), Fellowship in Pediatric ENT",
      specialty: "Pediatric ENT & Airway Problems"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-ent tracking-wider uppercase">Our Specialists</span>
          <h2 className="mt-2 text-3xl font-heading font-bold text-gray-900 sm:text-4xl">
            Meet Our ENT Specialists
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our team of highly qualified ENT specialists provides exceptional care for all your ear, nose, and throat health needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                <p className="text-ent font-medium">{doctor.title}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">Qualification:</span> {doctor.qualification}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    <span className="font-medium">Specialty:</span> {doctor.specialty}
                  </p>
                  <div className="flex space-x-2 mt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-ent hover:bg-ent hover:text-white"
                    >
                      <Link to="/appointment" className="flex items-center justify-center w-full">
                        <Calendar className="mr-1 h-4 w-4" />
                        Appointment
                      </Link>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-ent hover:bg-ent hover:text-white"
                    >
                      <Link to="/consultation" className="flex items-center justify-center w-full">
                        <Phone className="mr-1 h-4 w-4" />
                        Consult
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/doctors">
            <Button 
              className="bg-ent hover:bg-ent-dark text-white"
            >
              View All Doctors
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ENTDoctorsSection;
