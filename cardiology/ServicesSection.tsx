
import React from 'react';
import { Heart, Activity, Stethoscope, HeartPulse, Zap, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CardioServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: "Cardiac Consultation",
      description: "Comprehensive evaluation by expert cardiologists to assess and diagnose heart conditions."
    },
    {
      icon: Activity,
      title: "ECG & Echocardiography",
      description: "Advanced diagnostic tests to evaluate heart function and detect abnormalities."
    },
    {
      icon: HeartPulse,
      title: "Cardiac Rehabilitation",
      description: "Personalized programs to help patients recover from heart attacks and heart surgery."
    },
    {
      icon: Stethoscope,
      title: "Heart Disease Management",
      description: "Ongoing care and management for chronic heart conditions and risk factors."
    },
    {
      icon: Zap,
      title: "Interventional Cardiology",
      description: "Minimally invasive procedures to treat heart conditions without open surgery."
    },
    {
      icon: Activity,
      title: "Preventive Cardiology",
      description: "Services focused on preventing heart disease through lifestyle modification and risk assessment."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-cardio tracking-wider uppercase">Our Services</span>
          <h2 className="mt-2 text-3xl font-heading font-bold text-gray-900 sm:text-4xl">
            Comprehensive Heart Care Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We offer a wide range of cardiovascular services to diagnose, treat, and manage heart conditions with expert care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-none shadow-md">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-cardio-light rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-cardio-dark" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#" className="inline-flex items-center text-cardio hover:text-cardio-dark font-medium">
                  <span>Learn more</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardioServicesSection;
