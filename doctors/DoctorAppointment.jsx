
import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', 
  '11:00 AM', '11:30 AM', '2:00 PM', '2:30 PM', 
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM'
];

const DoctorAppointment = ({ doctor }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Generate fake dates for the next 14 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Only include days when the doctor is available
      const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
      const isAvailable = doctor?.availableDays.includes(dayName);
      
      if (isAvailable) {
        dates.push({
          date: date,
          day: date.getDate(),
          month: date.toLocaleDateString('en-US', { month: 'short' }),
          weekday: date.toLocaleDateString('en-US', { weekday: 'short' }),
          isAvailable: isAvailable
        });
      }
    }
    
    return dates;
  };

  return (
    <div className="space-y-6">
      <section>
        <h3 className="text-xl font-heading font-bold mb-4 flex items-center">
          <Calendar className="mr-2 h-5 w-5 text-eclinic-600" />
          Select Date
        </h3>
        <div className="flex overflow-x-auto pb-4 space-x-2 mb-2">
          {generateDates().map((dateObj, index) => (
            <div 
              key={index}
              onClick={() => setSelectedDate(dateObj.date)}
              className={`flex-shrink-0 cursor-pointer w-20 h-24 rounded-lg flex flex-col items-center justify-center transition-colors
                ${selectedDate && selectedDate.getDate() === dateObj.date.getDate() 
                  ? 'bg-eclinic-600 text-white' 
                  : 'bg-gray-50 hover:bg-gray-100'}`}
            >
              <span className="text-xs font-medium">{dateObj.weekday}</span>
              <span className="text-2xl font-bold">{dateObj.day}</span>
              <span className="text-xs">{dateObj.month}</span>
            </div>
          ))}
        </div>
      </section>
      
      {selectedDate && (
        <section>
          <h3 className="text-xl font-heading font-bold mb-4 flex items-center">
            <Clock className="mr-2 h-5 w-5 text-eclinic-600" />
            Select Time
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-4">
            {timeSlots.map((time, index) => (
              <div 
                key={index}
                onClick={() => setSelectedTime(time)}
                className={`cursor-pointer text-center py-2 px-3 rounded-lg transition-colors
                  ${selectedTime === time 
                    ? 'bg-eclinic-600 text-white' 
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700'}`}
              >
                {time}
              </div>
            ))}
          </div>
        </section>
      )}
      
      <div className="pt-4">
        <Link to={selectedDate && selectedTime ? "/appointment" : "#"}>
          <Button 
            disabled={!selectedDate || !selectedTime}
            className="w-full bg-eclinic-600 hover:bg-eclinic-700 text-white"
          >
            {selectedDate && selectedTime 
              ? `Book Appointment for ${selectedDate.toLocaleDateString()} at ${selectedTime}`
              : "Select Date and Time"}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorAppointment;
