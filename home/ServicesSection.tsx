
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'dental',
    name: 'Dental Care',
    description: 'Comprehensive dental services including cleanings, fillings, cosmetic procedures, and oral surgery.',
    icon: 'https://images.unsplash.com/photo-1588776813677-77aaf5595b83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    iconBg: 'bg-dental-light',
    iconColor: 'text-dental-dark',
    path: '/dental',
    color: 'from-dental-light to-dental',
  },
  {
    id: 'cardiology',
    name: 'Cardiology',
    description: 'Expert heart care including diagnostics, treatment, and preventive services for cardiovascular conditions.',
    icon: 'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    iconBg: 'bg-cardio-light',
    iconColor: 'text-cardio-dark',
    path: '/cardiology',
    color: 'from-cardio-light to-cardio',
  },
  {
    id: 'ent',
    name: 'ENT Services',
    description: 'Specialized care for ear, nose, and throat conditions, including diagnostics and treatment options.',
    icon: 'https://t4.ftcdn.net/jpg/02/42/17/95/360_F_242179527_t7Q2wP1oDonzfvkqFxLMkj6KgcBOJMa2.jpg',
    iconBg: 'bg-ent-light',
    iconColor: 'text-ent-dark',
    path: '/ent',
    color: 'from-ent-light to-ent',
  },
  {
    id: 'emergency',
    name: 'Emergency Care',
    description: '24/7 emergency medical services for urgent health needs with prompt and efficient attention.',
    icon: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80',
    iconBg: 'bg-emergency-light',
    iconColor: 'text-emergency-dark',
    path: '/emergency',
    color: 'from-emergency-light to-emergency',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-eclinic-600 tracking-wider uppercase">Our Specialties</span>
          <h2 className="mt-2 text-3xl font-heading font-bold text-gray-900 sm:text-4xl">Comprehensive Healthcare Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            We offer a wide range of medical services to meet your healthcare needs with expert specialists and advanced technology.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.path}
              className="department-card group relative overflow-hidden rounded-2xl bg-white shadow-md"
            >
              <div className="aspect-square w-full overflow-hidden">
                <img
                  src={service.icon}
                  alt={service.name}
                  className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold">{service.name}</h3>
                <div className="mt-1 h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:h-16 group-hover:opacity-100">
                  <p className="text-sm text-gray-100">{service.description}</p>
                  <div className="mt-3 flex items-center text-sm font-medium text-white">
                    <span>Learn more</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Link 
            to="/services" 
            className="inline-flex items-center text-eclinic-600 hover:text-eclinic-800 font-medium transition-colors"
          >
            <span>View all our services</span>
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
