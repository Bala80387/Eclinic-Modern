
import React from 'react';
import { Video, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import { Link } from 'react-router-dom';

const EmergencyVideoCall: React.FC = () => {
  const { toast } = useToast();
  
  const handleVideoCall = () => {
    toast({
      title: "Video Call Initiated",
      description: "Connecting you to an emergency doctor. Please wait...",
      variant: "default",
    });
  };
  
  return (
    <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
            Emergency Video Consultation
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Get immediate medical advice through a video call with our emergency doctors.
            Available 24/7 for urgent situations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-red-500">
            <div className="bg-red-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4 text-red-600">
              <Video className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-heading font-bold text-center mb-4">Urgent Video Consultation</h3>
            <p className="text-gray-600 mb-6 text-center">
              Connect immediately with an emergency doctor for urgent medical situations that require visual assessment.
            </p>
            <Link to="/video-consultation/emergency" className="block w-full">
              <Button 
                onClick={handleVideoCall}
                className="w-full bg-red-600 hover:bg-red-700 text-white"
              >
                <Video className="mr-2 h-4 w-4" />
                Start Emergency Video Call
              </Button>
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
            <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4 text-blue-600">
              <UserPlus className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-heading font-bold text-center mb-4">Schedule With Specialist</h3>
            <p className="text-gray-600 mb-6 text-center">
              Book a video consultation with a specialist for follow-up care or specific emergency-related conditions.
            </p>
            <Link to="/doctors" className="block w-full">
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Find Emergency Specialist
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyVideoCall;
