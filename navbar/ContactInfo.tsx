
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactInfo = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <div className="flex items-center text-eclinic-600">
        <Phone className="mr-2 h-4 w-4" />
        <span className="text-sm font-medium">+91 98765 43210</span>
      </div>
      <Button
        className="bg-eclinic-600 hover:bg-eclinic-700 text-white"
        size="sm"
      >
        <Link to="/consultation">Consult Online</Link>
      </Button>
    </div>
  );
};

export default ContactInfo;
