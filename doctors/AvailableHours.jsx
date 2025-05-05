
import React from 'react';
import { Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import OtherOptions from './OtherOptions';

const AvailableHours = ({ availableDays, doctorId }) => {
  return (
    <Card className="mt-8">
      <CardContent className="p-6">
        <h3 className="font-bold text-lg mb-4">Available Hours</h3>
        <div className="space-y-3">
          {availableDays.map((day, index) => (
            <div key={index} className="flex items-center">
              <Badge className="mr-2">{day}</Badge>
              <Clock className="h-4 w-4 text-gray-400 mr-2" />
              <span>9:00 AM - 5:00 PM</span>
            </div>
          ))}
        </div>

        <OtherOptions doctorId={doctorId} />
      </CardContent>
    </Card>
  );
};

export default AvailableHours;
