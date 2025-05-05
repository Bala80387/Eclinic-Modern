
import React from 'react';
import { Ambulance, Phone, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";

const CallSection: React.FC = () => {
  const { toast } = useToast();
  
  const emergencyNumbers = [
    { name: "Ambulance", number: "108", icon: <Ambulance className="h-6 w-6" />, color: "red" },
    { name: "Emergency Helpline", number: "112", icon: <Phone className="h-6 w-6" />, color: "orange" },
    { name: "Hospital Emergency", number: "+91 9876543210", icon: <Phone className="h-6 w-6" />, color: "blue" },
  ];
  
  const handleCall = (name: string, number: string) => {
    toast({
      title: `Calling ${name}`,
      description: `Dialing ${number}...`,
      variant: "default",
    });
    
    // Initiate call
    window.location.href = `tel:${number}`;
  };
  
  return (
    <section className="py-16 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
            Emergency Contact
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            In case of emergency, call these numbers immediately for immediate assistance.
            Our emergency responders are available 24/7.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {emergencyNumbers.map((item, index) => {
            const buttonColor = 
              item.color === "red" ? "bg-red-600 hover:bg-red-700" : 
              item.color === "orange" ? "bg-orange-600 hover:bg-orange-700" : 
              "bg-blue-600 hover:bg-blue-700";
            
            const iconBgColor = 
              item.color === "red" ? "bg-red-100 text-red-600" : 
              item.color === "orange" ? "bg-orange-100 text-orange-600" : 
              "bg-blue-100 text-blue-600";
              
            const borderColor = 
              item.color === "red" ? "border-red-500" : 
              item.color === "orange" ? "border-orange-500" : 
              "border-blue-500";
                
            return (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-8 text-center border-t-4 ${borderColor} animate-fade-up`}
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className={`${iconBgColor} rounded-full h-20 w-20 flex items-center justify-center mx-auto mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-heading font-bold mb-3">{item.name}</h3>
                <p className="text-xl font-mono font-bold text-gray-800 mb-5">{item.number}</p>
                <Button 
                  onClick={() => handleCall(item.name, item.number)}
                  className={`${buttonColor} text-white transition-transform hover:scale-105`}
                  size="lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-2">For other medical inquiries, please contact our customer service</p>
          <Button variant="outline" className="border-red-400 text-red-600 hover:bg-red-50" onClick={() => handleCall("Customer Service", "+91 1800 123 4567")}>
            +91 1800 123 4567
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallSection;
