
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const doctors = [
  {
    id: 101,
    name: 'Dr. Vikram Kapoor',
    specialty: 'Neurologist',
    expertise: 'Movement Disorders',
    rating: 4.9,
    reviews: 124,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: 102,
    name: 'Dr. Ananya Patel',
    specialty: 'Neurologist',
    expertise: 'Neurodegenerative Disorders',
    rating: 4.8,
    reviews: 98,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
  },
  {
    id: 103,
    name: 'Dr. Rajan Mehra',
    specialty: 'Neurologist',
    expertise: 'Epilepsy & Seizures',
    rating: 4.7,
    reviews: 87,
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
  }
];

const DoctorsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <span className="text-sm font-medium text-blue-600 tracking-wider uppercase">Our Specialists</span>
          <h2 className="mt-2 text-3xl font-heading font-bold text-gray-900 sm:text-4xl">Meet Our Neurologists</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our team of highly qualified and experienced neurologists are dedicated to providing the best care for your neurological needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {doctors.map((doctor, index) => (
            <div 
              key={doctor.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow animate-fade-up"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-1">{doctor.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{doctor.specialty}</p>
                <p className="text-gray-600 text-sm mb-3">Specializes in {doctor.expertise}</p>
                <div className="flex items-center mb-4">
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-gray-800 font-medium">{doctor.rating}</span>
                  </div>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-gray-600 text-sm">{doctor.reviews} reviews</span>
                </div>
                <div className="flex gap-2">
                  <Link to={`/appointment?doctorId=${doctor.id}`} className="flex-1">
                    <Button variant="outline" className="w-full">Book Appointment</Button>
                  </Link>
                  <Link to={`/doctor-details/${doctor.id}`} className="flex-1">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">View Profile</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/doctors" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors">
            View all neurologists <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
