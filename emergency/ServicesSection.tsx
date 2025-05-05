
import React from 'react';
import { Heart, Brain, Bone, AlertTriangle, Droplets, Pill } from 'lucide-react';

const EmergencyServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: 'Cardiac Emergencies',
      description: 'Immediate care for heart attacks, severe arrhythmias, and other cardiac emergencies.'
    },
    {
      icon: Brain,
      title: 'Neurological Emergencies',
      description: 'Rapid treatment for strokes, seizures, and other critical neurological conditions.'
    },
    {
      icon: Bone,
      title: 'Trauma Care',
      description: 'Advanced trauma care for accidents, falls, and other physical injuries.'
    },
    {
      icon: AlertTriangle,
      title: 'Critical Care',
      description: 'Intensive care for life-threatening conditions requiring constant monitoring.'
    },
    {
      icon: Droplets,
      title: 'Respiratory Emergencies',
      description: 'Immediate intervention for severe asthma attacks, respiratory failure, and other breathing difficulties.'
    },
    {
      icon: Pill,
      title: 'Poisoning & Overdose',
      description: 'Urgent treatment for poisoning, drug overdoses, and toxic exposures.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
            Emergency Services We Provide
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our emergency department is equipped to handle a wide range of critical conditions with speed and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="bg-red-50 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
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

export default EmergencyServicesSection;
