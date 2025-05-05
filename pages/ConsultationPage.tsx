
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Monitor, Clock, Calendar, CheckCircle, MessageCircle, CreditCard, Clock8 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConsultationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState<'how-it-works' | 'doctors'>('how-it-works');

  const doctorsData = [
    {
      id: 1,
      name: 'Dr. Arun Kumar',
      specialty: 'Cardiologist',
      experience: '15+ years',
      rating: 4.9,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      availability: 'Available today',
      fee: '₹800'
    },
    {
      id: 2,
      name: 'Dr. Priya Sharma',
      specialty: 'Dentist',
      experience: '12+ years',
      rating: 4.8,
      reviews: 98,
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      availability: 'Available tomorrow',
      fee: '₹700'
    },
    {
      id: 3,
      name: 'Dr. Rajesh Singh',
      specialty: 'ENT Specialist',
      experience: '10+ years',
      rating: 4.7,
      reviews: 87,
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
      availability: 'Available today',
      fee: '₹750'
    },
    {
      id: 4,
      name: 'Dr. Lakshmi Sundaram',
      specialty: 'General Physician',
      experience: '8+ years',
      rating: 4.8,
      reviews: 65,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      availability: 'Available today',
      fee: '₹600'
    },
  ];

  return (
    <div className="page-transition">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-r from-purple-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex items-center">
              <div className="md:w-1/2 md:pr-12">
                <div className="mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                    <Monitor className="mr-1 h-4 w-4" />
                    Online Doctor Consultation
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
                  Consult with Doctors <span className="text-purple-600">Online</span>
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Get expert medical advice from the comfort of your home. Our specialists are available for video consultations to address your health concerns.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={() => setActiveTab('doctors')}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Consult Now
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 mt-10 md:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  alt="Online Consultation"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-10">
              <div className="inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  className={`px-6 py-3 text-sm font-medium rounded-l-lg ${
                    activeTab === 'how-it-works'
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveTab('how-it-works')}
                >
                  How It Works
                </button>
                <button
                  type="button"
                  className={`px-6 py-3 text-sm font-medium rounded-r-lg ${
                    activeTab === 'doctors'
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveTab('doctors')}
                >
                  Available Doctors
                </button>
              </div>
            </div>

            {activeTab === 'how-it-works' ? (
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                    Simple Steps to Online Consultation
                  </h2>
                  <p className="text-lg text-gray-700">
                    Get the care you need in just a few simple steps.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 text-center">
                    <div className="bg-purple-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3">1. Choose a Doctor</h3>
                    <p className="text-gray-600">
                      Browse through our list of specialists and select the one suitable for your condition.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 text-center">
                    <div className="bg-purple-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                      <CreditCard className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3">2. Make Payment</h3>
                    <p className="text-gray-600">
                      Secure payment gateway to complete your consultation booking process.
                    </p>
                  </div>

                  <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 text-center">
                    <div className="bg-purple-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                      <MessageCircle className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-3">3. Start Consultation</h3>
                    <p className="text-gray-600">
                      Connect with your doctor through video call at the scheduled time.
                    </p>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl p-6 mt-12 flex items-center">
                  <CheckCircle className="h-10 w-10 text-purple-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-heading font-bold mb-1">Prescription and Follow-up</h3>
                    <p className="text-gray-600">
                      After your consultation, you'll receive a digital prescription if needed, and can schedule follow-up appointments.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                    Available Doctors
                  </h2>
                  <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    Our specialists are ready to address your concerns through video consultation.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {doctorsData.map((doctor) => (
                    <div key={doctor.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden border border-gray-100">
                      <div className="aspect-[4/3] relative">
                        <img
                          src={doctor.image}
                          alt={doctor.name}
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-2 left-2 bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center">
                          <Clock8 className="h-3 w-3 mr-1" />
                          {doctor.availability}
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-heading font-bold text-lg mb-1">{doctor.name}</h3>
                        <p className="text-purple-600 font-medium text-sm mb-2">{doctor.specialty}</p>
                        <div className="flex justify-between text-gray-600 text-sm mb-4">
                          <span>{doctor.experience}</span>
                          <span>★ {doctor.rating} ({doctor.reviews})</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-800">{doctor.fee}</span>
                          <Link to="/payment">
                            <Button
                              size="sm"
                              className="bg-purple-600 hover:bg-purple-700 text-white"
                            >
                              Consult Now
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ConsultationPage;
