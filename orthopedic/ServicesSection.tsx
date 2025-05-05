
import React from 'react';
import { Bone, Activity, FilePlus, Dumbbell } from 'lucide-react';

const services = [
  {
    icon: <Bone className="h-8 w-8 text-green-600" />,
    title: 'Joint Replacement',
    description: 'Total and partial knee, hip, and shoulder replacement surgeries using minimally invasive techniques.'
  },
  {
    icon: <Activity className="h-8 w-8 text-green-600" />,
    title: 'Sports Medicine',
    description: 'Treatment for sports-related injuries and conditions affecting athletes at all levels.'
  },
  {
    icon: <FilePlus className="h-8 w-8 text-green-600" />,
    title: 'Spine Surgery',
    description: 'Advanced surgical procedures for spine conditions including herniated discs and spinal stenosis.'
  },
  {
    icon: <Dumbbell className="h-8 w-8 text-green-600" />,
    title: 'Physical Therapy',
    description: 'Comprehensive rehabilitation programs to restore function and mobility after injury or surgery.'
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <span className="text-sm font-medium text-green-600 tracking-wider uppercase">Our Services</span>
          <h2 className="mt-2 text-3xl font-heading font-bold text-gray-900 sm:text-4xl">Comprehensive Orthopedic Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            We offer a wide range of orthopedic services using the latest technology and evidence-based practices.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 animate-fade-up"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="bg-green-50 rounded-full h-16 w-16 flex items-center justify-center mb-4">
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
