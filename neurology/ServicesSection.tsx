
import React from 'react';
import { Brain, Activity, FilePlus, Microscope } from 'lucide-react';

const services = [
  {
    icon: <Brain className="h-8 w-8 text-blue-600" />,
    title: 'Neurological Diagnosis',
    description: 'Comprehensive assessment and diagnosis of neurological disorders using advanced diagnostic technology.'
  },
  {
    icon: <Activity className="h-8 w-8 text-blue-600" />,
    title: 'EEG & EMG',
    description: 'Electroencephalogram (EEG) and Electromyography (EMG) to evaluate electrical activity in the brain and muscles.'
  },
  {
    icon: <FilePlus className="h-8 w-8 text-blue-600" />,
    title: 'Treatment Plans',
    description: 'Personalized treatment plans for conditions like epilepsy, multiple sclerosis, Parkinson\'s, and more.'
  },
  {
    icon: <Microscope className="h-8 w-8 text-blue-600" />,
    title: 'Research Programs',
    description: 'Access to clinical trials and research programs for advanced treatment options.'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <span className="text-sm font-medium text-blue-600 tracking-wider uppercase">Our Services</span>
          <h2 className="mt-2 text-3xl font-heading font-bold text-gray-900 sm:text-4xl">Comprehensive Neurological Care</h2>
          <p className="mt-4 text-lg text-gray-600">
            We offer a wide range of neurological services using the latest technology and evidence-based practices.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 animate-fade-up"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="bg-blue-50 rounded-full h-16 w-16 flex items-center justify-center mb-4">
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
