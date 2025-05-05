
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { format, addDays } from 'date-fns';
import { Calendar as CalendarIcon, Clock, CheckCircle, Phone, Bell } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useToast } from "@/hooks/use-toast";
import { useLocation } from 'react-router-dom';
import { findDoctorById } from '@/data/doctorsData';
import HospitalBlueprint from '@/components/hospital/HospitalBlueprint';

const AppointmentPage = () => {
  const { toast } = useToast();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const doctorIdParam = searchParams.get('doctorId');
  
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string | null>(null);
  const [department, setDepartment] = useState<string>('');
  const [doctor, setDoctor] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [receiveReminders, setReceiveReminders] = useState<boolean>(true);
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if doctorId is provided in URL and pre-select the doctor
    if (doctorIdParam) {
      const foundDoctor = findDoctorById(doctorIdParam);
      if (foundDoctor) {
        setSelectedDoctor(foundDoctor);
        setDepartment(foundDoctor.department === 'cardiology' ? 'Cardiology' : 
                      foundDoctor.department === 'dental' ? 'Dental Care' : 
                      foundDoctor.department === 'ent' ? 'ENT' : 'Emergency Medicine');
        setDoctor(foundDoctor.name);
      }
    }
  }, [doctorIdParam]);

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
  ];

  const departments = [
    'Dental Care', 'Cardiology', 'ENT', 'Emergency Medicine', 'General Medicine', 'Neurology', 'Orthopedics', 'Dermatology'
  ];

  const doctors = {
    'Dental Care': ['Dr. Priya Sharma', 'Dr. Vikram Mehta'],
    'Cardiology': ['Dr. Arun Kumar', 'Dr. Anjali Desai'],
    'ENT': ['Dr. Rajesh Singh', 'Dr. Neha Patel'],
    'Emergency Medicine': ['Dr. Lakshmi Sundaram', 'Dr. Sanjay Gupta'],
    'General Medicine': ['Dr. Deepa Nair', 'Dr. Ramesh Rao'],
    'Neurology': ['Dr. Anjali Desai', 'Dr. Sameer Khan'],
    'Orthopedics': ['Dr. Vikram Mehta', 'Dr. Ravi Chopra'],
    'Dermatology': ['Dr. Neha Patel', 'Dr. Meera Joshi'],
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!date || !timeSlot || !department || !doctor || !name || !phone || !email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields to book your appointment.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real application, this would submit the form data to a backend API
    console.log({
      date,
      timeSlot,
      department,
      doctor,
      name,
      phone,
      email,
      message,
      receiveReminders
    });
    
    // Show success message and schedule follow-up notifications
    setIsSubmitted(true);
    
    // Schedule appointment reminder (simulated)
    const appointmentDay = format(date, 'EEEE, MMMM d');
    const dayBefore = format(addDays(date, -1), 'EEEE, MMMM d');
    
    // Simulate sending appointment confirmation
    setTimeout(() => {
      toast({
        title: "SMS Sent",
        description: `Appointment details have been sent to ${phone}`,
      });
    }, 2000);
    
    // Simulate reminder notification the day before
    setTimeout(() => {
      if (receiveReminders) {
        toast({
          title: "Appointment Reminder",
          description: `Your appointment with ${doctor} is tomorrow (${appointmentDay}) at ${timeSlot}`,
          action: (
            <div className="flex items-center text-xs text-gray-500">
              <Bell className="h-3 w-3 mr-1" />
              <span>Reminder sent to your phone</span>
            </div>
          ),
        });
      }
    }, 5000);
    
    // Reset form after submission
    setTimeout(() => {
      setDate(undefined);
      setTimeSlot(null);
      setDepartment('');
      setDoctor('');
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
      setIsSubmitted(false);
      setReceiveReminders(true);
    }, 3000);
  };

  return (
    <div className="page-transition">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-r from-green-50 to-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">
                Book Your <span className="text-eclinic-600">Appointment</span>
              </h1>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Schedule an appointment with our specialists. Choose your preferred date, time, and doctor.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                {isSubmitted ? (
                  <div className="text-center py-12 bg-white rounded-2xl shadow-md">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-heading font-bold mb-4">Appointment Booked Successfully!</h2>
                    <p className="text-gray-600 mb-2">
                      We have received your appointment request for:
                    </p>
                    <div className="bg-gray-50 py-4 px-6 rounded-lg inline-block mb-6">
                      <p className="font-medium text-gray-800">{format(date!, 'EEEE, MMMM d, yyyy')} at {timeSlot}</p>
                      <p className="text-eclinic-600">{doctor}</p>
                      <p className="text-gray-500">{department}</p>
                    </div>
                    <p className="text-gray-600 mb-8">
                      A confirmation has been sent to your phone and email.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} className="bg-eclinic-600 hover:bg-eclinic-700">
                      Book Another Appointment
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Select Date
                        </label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                              className={cn("p-3 pointer-events-auto")}
                              disabled={(date) =>
                                date < new Date(new Date().setHours(0, 0, 0, 0))
                              }
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Select Time
                        </label>
                        <div className="grid grid-cols-4 gap-2">
                          {timeSlots.map((slot) => (
                            <Button
                              key={slot}
                              type="button"
                              variant={timeSlot === slot ? "default" : "outline"}
                              className={cn(
                                "text-sm",
                                timeSlot === slot 
                                  ? "bg-eclinic-600 hover:bg-eclinic-700" 
                                  : "hover:border-eclinic-300"
                              )}
                              onClick={() => setTimeSlot(slot)}
                            >
                              <Clock className="mr-1 h-3 w-3" />
                              {slot}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Department
                        </label>
                        <select
                          value={department}
                          onChange={(e) => {
                            setDepartment(e.target.value);
                            setDoctor('');
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eclinic-500"
                          required
                        >
                          <option value="">Select Department</option>
                          {departments.map((dept) => (
                            <option key={dept} value={dept}>
                              {dept}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Doctor
                        </label>
                        <select
                          value={doctor}
                          onChange={(e) => setDoctor(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eclinic-500"
                          required
                          disabled={!department}
                        >
                          <option value="">Select Doctor</option>
                          {department && 
                            doctors[department as keyof typeof doctors]?.map((doc) => (
                              <option key={doc} value={doc}>
                                {doc}
                              </option>
                            ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eclinic-500"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                            <Phone className="h-4 w-4" />
                          </span>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-eclinic-500"
                            required
                            placeholder="+91 9876543210"
                          />
                        </div>
                        <div className="mt-2 flex items-center">
                          <input
                            type="checkbox"
                            id="smsReminders"
                            checked={receiveReminders}
                            onChange={(e) => setReceiveReminders(e.target.checked)}
                            className="h-4 w-4 text-eclinic-600 border-gray-300 rounded focus:ring-eclinic-500"
                          />
                          <label htmlFor="smsReminders" className="ml-2 text-xs text-gray-500">
                            Send me appointment reminders via SMS
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eclinic-500"
                          required
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Reason for Appointment
                        </label>
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eclinic-500"
                          placeholder="Please briefly describe your symptoms or reason for consultation"
                        />
                      </div>
                    </div>

                    <div className="text-center">
                      <Button 
                        type="submit" 
                        className="bg-eclinic-600 hover:bg-eclinic-700 px-8 py-2"
                        disabled={!date || !timeSlot || !department || !doctor || !name || !phone || !email}
                      >
                        Book Appointment
                      </Button>
                    </div>
                  </form>
                )}
              </div>
              
              <div className="space-y-6">
                <HospitalBlueprint />
                
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h3 className="text-xl font-heading font-bold mb-4">Appointment Information</h3>
                  <div className="space-y-4 text-sm">
                    <p className="text-gray-600">
                      Please arrive 15 minutes before your scheduled appointment for registration and check-in.
                    </p>
                    <p className="text-gray-600">
                      Bring your identification, insurance information, and any relevant medical records or test results.
                    </p>
                    <p className="text-gray-600">
                      If you need to cancel or reschedule, please do so at least 24 hours in advance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AppointmentPage;
