
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const OtherOptions = ({ doctorId }) => {
  return (
    <div className="mt-8 pt-6 border-t animate-fade-up" style={{animationDelay: "200ms"}}>
      <h3 className="font-bold text-lg mb-4">Other Options</h3>
      <div className="grid grid-cols-2 gap-4">
        <Link to={`/appointment?doctorId=${doctorId}`} className="w-full">
          <Button variant="outline" className="w-full transition-all hover:bg-eclinic-50 hover:border-eclinic-300">
            <Calendar className="mr-2 h-4 w-4" />
            Book Appointment
          </Button>
        </Link>
        <Link to="/directions" className="w-full">
          <Button variant="outline" className="w-full transition-all hover:bg-eclinic-50 hover:border-eclinic-300">
            <MapPin className="mr-2 h-4 w-4" />
            Get Directions
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OtherOptions;
