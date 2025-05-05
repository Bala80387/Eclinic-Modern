
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Star, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const getDepartmentColor = (department) => {
  switch (department) {
    case 'cardiology':
      return 'bg-cardio-light text-cardio-dark';
    case 'dental':
      return 'bg-dental-light text-dental-dark';
    case 'ent':
      return 'bg-ent-light text-ent-dark';
    case 'emergency':
      return 'bg-emergency-light text-emergency-dark';
    case 'neurology':
      return 'bg-blue-100 text-blue-800';
    case 'orthopedic':
      return 'bg-green-100 text-green-800';
    case 'dermatology':
      return 'bg-pink-100 text-pink-800';
    case 'gastroenterology':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-eclinic-100 text-eclinic-800';
  }
};

const DoctorInfo = ({ doctor }) => {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square relative">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-5">
        <h2 className="font-heading font-bold text-2xl mb-1">{doctor.name}</h2>
        <div className="flex items-center space-x-2 mb-3">
          <Badge className={getDepartmentColor(doctor.department)}>
            {doctor.specialty}
          </Badge>
          <div className="flex items-center text-sm text-gray-500">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span>{doctor.rating} ({doctor.reviews} reviews)</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-4">{doctor.experience} Experience</p>
        
        <div className="flex space-x-2 mb-4">
          {doctor.languages?.map((lang, index) => (
            <Badge key={index} variant="outline" className="bg-gray-50">
              {lang}
            </Badge>
          ))}
        </div>
        
        <div className="flex space-x-2 mb-2">
          <Link to={`/doctor-call/${doctor.id}`} className="flex-1">
            <Button 
              variant="outline" 
              className="w-full border-eclinic-600 text-eclinic-600 hover:bg-eclinic-50"
            >
              <Phone className="mr-1 h-4 w-4" />
              Call
            </Button>
          </Link>
          <Link to="/consultation" className="flex-1">
            <Button 
              variant="outline" 
              className="w-full border-eclinic-600 text-eclinic-600 hover:bg-eclinic-50"
            >
              <MessageCircle className="mr-1 h-4 w-4" />
              Chat
            </Button>
          </Link>
        </div>
        
        <Link to={`/video-consultation/${doctor.id}`} className="w-full">
          <Button 
            className="w-full bg-eclinic-600 hover:bg-eclinic-700 mt-2"
          >
            <Video className="mr-1 h-4 w-4" />
            Video Consultation
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default DoctorInfo;
