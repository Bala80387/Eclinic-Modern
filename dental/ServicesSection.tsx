
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  showPayment?: boolean;
}

const DentalServicesSection = () => {
  const services: ServiceItem[] = [
    {
      title: "General Dentistry",
      description: "Comprehensive dental exams, cleanings, and preventive care for healthy teeth and gums.",
      icon: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      title: "Cosmetic Dentistry",
      description: "Teeth whitening, veneers, and other procedures to enhance your smile's appearance.",
      icon: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      title: "Orthodontics",
      description: "Braces, aligners, and other treatments to straighten teeth and correct bite issues.",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZoNMiFvuM0BtmjfV-LaG0Yt7Qc7BdPVYZWw&s",
      showPayment: true
    },
    {
      title: "Oral Surgery",
      description: "Tooth extractions, dental implants, and other surgical procedures for oral health.",
      icon: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-dental text-center tracking-wider uppercase">Our Offerings</span>
          <h2 className="mt-2 text-3xl font-heading font-bold text-gray-900 sm:text-4xl">Dental Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            We provide comprehensive dental care with a focus on comfort, quality, and lasting results.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div 
              key={i}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md transition-all hover:shadow-lg hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.icon} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <Link 
                    to="/appointment" 
                    className="inline-flex items-center text-dental hover:text-dental-dark font-medium transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                  
                  {service.showPayment && (
                    <Link to="/payment">
                      <Button size="sm" className="bg-eclinic-600 hover:bg-eclinic-700">
                        Consult Now
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DentalServicesSection;
