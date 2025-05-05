
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DentistProfile {
  name: string;
  specialization: string;
  experience: string;
  image: string;
}

const DentistsSection = () => {
  const dentists: DentistProfile[] = [
    {
      name: "Dr. Amanda Chen",
      specialization: "General Dentist",
      experience: "12 years",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      name: "Dr. Robert Wilson",
      specialization: "Orthodontist",
      experience: "15 years",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Dr. Sarah Miller",
      specialization: "Oral Surgeon",
      experience: "10 years",
      image: "https://randomuser.me/api/portraits/women/63.jpg"
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-dental text-center tracking-wider uppercase">Expert Team</span>
          <h2 className="mt-2 text-3xl font-heading font-bold text-gray-900 sm:text-4xl">Meet Our Dentists</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our highly qualified dental professionals are committed to providing exceptional care.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {dentists.map((dentist, i) => (
            <div 
              key={i} 
              className="bg-white rounded-xl overflow-hidden shadow-md transition-all hover:shadow-xl animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={dentist.image}
                  alt={dentist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{dentist.name}</h3>
                <p className="text-dental font-medium">{dentist.specialization}</p>
                <div className="flex items-center mt-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm ml-2">{dentist.experience} experience</span>
                </div>
                <Button 
                  className="w-full mt-4 bg-dental hover:bg-dental-dark text-white"
                  size="sm"
                >
                  <Link to="/appointment">Book Appointment</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DentistsSection;
