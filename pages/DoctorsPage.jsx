
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DoctorCard from '@/components/doctors/DoctorCard';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { doctorsData } from '@/data/doctorsData';

const DoctorsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  const filteredDoctors = doctorsData.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === '' || doctor.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

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
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto mb-8">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  type="text"
                  placeholder="Search by doctor name or specialty" 
                  className="pl-10 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className={`${selectedDepartment === '' ? 'bg-eclinic-50 border-eclinic-200 text-eclinic-800' : ''}`}
                  onClick={() => setSelectedDepartment('')}
                >
                  All
                </Button>
                <Button 
                  variant="outline" 
                  className={`${selectedDepartment === 'cardiology' ? 'bg-cardio-light border-cardio-dark text-cardio-dark' : ''}`}
                  onClick={() => setSelectedDepartment('cardiology')}
                >
                  Cardio
                </Button>
                <Button 
                  variant="outline" 
                  className={`${selectedDepartment === 'dental' ? 'bg-dental-light border-dental text-dental-dark' : ''}`}
                  onClick={() => setSelectedDepartment('dental')}
                >
                  Dental
                </Button>
                <Button 
                  variant="outline" 
                  className={`${selectedDepartment === 'ent' ? 'bg-ent-light border-ent-dark text-ent-dark' : ''}`}
                  onClick={() => setSelectedDepartment('ent')}
                >
                  ENT
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredDoctors.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">No doctors found matching your search criteria.</p>
                <Button className="mt-4" onClick={() => {setSearchQuery(''); setSelectedDepartment('')}}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className={`grid grid-cols-1 ${isSmallScreen ? '' : 'md:grid-cols-2 lg:grid-cols-4'} gap-6`}>
                {filteredDoctors.map((doctor) => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DoctorsPage;
