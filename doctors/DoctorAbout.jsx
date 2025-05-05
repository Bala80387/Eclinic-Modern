
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Award, Languages, CheckCircle } from 'lucide-react';
import HospitalBlueprint from '@/components/hospital/HospitalBlueprint';

const DoctorAbout = ({ doctor }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border p-6">
        <h3 className="text-xl font-heading font-bold mb-4">About</h3>
        <p className="text-gray-700 mb-6">{doctor.about}</p>
        
        <h4 className="font-bold text-lg mb-3">Education</h4>
        <ul className="space-y-2 mb-6">
          {Array.isArray(doctor.education) ? (
            doctor.education.map((edu, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-eclinic-600 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">
                  {typeof edu === 'string' 
                    ? edu 
                    : `${edu.degree} - ${edu.institution} (${edu.year})`}
                </span>
              </li>
            ))
          ) : (
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-eclinic-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{doctor.education}</span>
            </li>
          )}
        </ul>
        
        <h4 className="font-bold text-lg mb-3 flex items-center">
          <Award className="h-5 w-5 text-eclinic-600 mr-2" />
          Awards & Recognitions
        </h4>
        <ul className="space-y-2 mb-6">
          {doctor.awards.map((award, index) => (
            <li key={index} className="ml-7 list-disc text-gray-700">
              {award}
            </li>
          ))}
        </ul>
        
        <h4 className="font-bold text-lg mb-3 flex items-center">
          <Languages className="h-5 w-5 text-eclinic-600 mr-2" />
          Languages
        </h4>
        <div className="flex flex-wrap gap-2 mb-6">
          {doctor.languages.map((language, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm">
              {language}
            </span>
          ))}
        </div>
      </div>
      
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-heading font-bold mb-4">Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {doctor.services.map((service, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-50 rounded-md">
                <CheckCircle className="h-4 w-4 text-eclinic-600 mr-2 flex-shrink-0" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <HospitalBlueprint />
    </div>
  );
};

export default DoctorAbout;
