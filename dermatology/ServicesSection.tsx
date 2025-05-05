
import React from 'react';
import { Sun, Sparkles, HeartPulse, Star } from 'lucide-react';

const services = [
  {
    icon: <Sun className="h-8 w-8 text-pink-600" />,
    title: 'Medical Dermatology',
    description: 'Diagnosis and treatment of skin conditions including acne, eczema, psoriasis, and skin infections.'
  },
  {
    icon: <Sparkles className="h-8 w-8 text-pink-600" />,
    title: 'Cosmetic Dermatology',
    description: 'Procedures to improve appearance including Botox, fillers, laser therapy, and chemical peels.'
  },
  {
    icon: <HeartPulse className="h-8 w-8 text-pink-600" />,
    title: 'Skin Cancer Treatment',
    description: 'Screening, diagnosis, and treatment of various types of skin cancer using advanced techniques.'
  },
  {
    icon: <Star className="h-8 w-8 text-pink-600" />,
    title: 'Pediatric Dermatology',
    description: 'Specialized care for skin conditions affecting children and adolescents.'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <span className="text-sm font-medium text-pink-600 tracking-wider uppercase">Our Services</span>
          <h2 className="mt-2 text-3xl font-heading font-bold text-gray-900 sm:text-4xl">Comprehensive Dermatology Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            We offer a wide range of dermatological services using the latest technology and evidence-based practices.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 animate-fade-up"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="bg-pink-50 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
