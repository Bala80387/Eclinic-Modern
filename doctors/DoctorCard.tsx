
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  image: string;
  experience: string;
  education: string | object | Array<string | object>;
  department: string;
}

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  const getDepartmentColor = (department: string) => {
    switch (department) {
      case 'cardiology':
        return 'bg-cardio-light text-cardio-dark';
      case 'dental':
        return 'bg-dental-light text-dental-dark';
      case 'ent':
        return 'bg-ent-light text-ent-dark';
      case 'emergency':
        return 'bg-emergency-light text-emergency-dark';
      default:
        return 'bg-eclinic-100 text-eclinic-800';
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  // Format education for display - handle both string and object formats
  const formatEducation = (education: any) => {
    if (typeof education === 'string') {
      return education;
    }
    if (Array.isArray(education)) {
      return education.map((edu: any) => 
        typeof edu === 'string' 
          ? edu 
          : `${edu.degree} - ${edu.institution} (${edu.year})`
      ).join(', ');
    }
    if (education && typeof education === 'object') {
      return `${education.degree} - ${education.institution} (${education.year})`;
    }
    return '';
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-0">
        <div className="aspect-[4/3] relative">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover"
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80';
            }}
          />
          <Badge className={`absolute top-3 right-3 ${getDepartmentColor(doctor.department)}`}>
            {doctor.specialty}
          </Badge>
        </div>
        <div className="p-5">
          <div className="flex items-center mb-3">
            <Avatar className="h-10 w-10 mr-3 border-2 border-white shadow">
              <AvatarImage src={doctor.image} alt={doctor.name} />
              <AvatarFallback>{getInitials(doctor.name)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-heading font-bold text-lg">{doctor.name}</h3>
              <p className="text-sm text-gray-500">{doctor.experience} Experience</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-4">{formatEducation(doctor.education)}</p>
          <div className="flex space-x-2">
            <Link to={`/doctor-call/${doctor.id}`} className="flex-1">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-eclinic-600 text-eclinic-600 hover:bg-eclinic-600 hover:text-white"
              >
                <Phone className="mr-1 h-4 w-4" />
                Call
              </Button>
            </Link>
            <Link to={`/appointment?doctorId=${doctor.id}`} className="flex-1">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-dental text-dental-dark hover:bg-dental hover:text-white"
              >
                <Calendar className="mr-1 h-4 w-4" />
                Book
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
