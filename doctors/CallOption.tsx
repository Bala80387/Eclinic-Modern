
import React from 'react';
import { Phone, MessageCircle, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

interface CallOptionProps {
  type: 'button' | 'link';
  icon: 'phone' | 'message' | 'video';
  title: string;
  description: string;
  actionText: string;
  linkTo?: string;
  onClick?: () => void;
  doctorPhone?: string;
}

const CallOption: React.FC<CallOptionProps> = ({ 
  type, 
  icon, 
  title, 
  description, 
  actionText, 
  linkTo = "", 
  onClick, 
  doctorPhone 
}) => {
  let Icon;
  switch (icon) {
    case 'phone':
      Icon = Phone;
      break;
    case 'video':
      Icon = Video;
      break;
    default:
      Icon = MessageCircle;
  }
  
  const { toast } = useToast();
  
  const handleCallClick = () => {
    if (doctorPhone) {
      // In a real app, this would initiate a call or SMS or video call
      if (icon === 'phone') {
        toast({
          title: "Call Initiated",
          description: `Calling ${title} at ${doctorPhone}`,
          variant: "default",
        });
        // Simulate phone call intent
        window.location.href = `tel:${doctorPhone}`;
      } else if (icon === 'video') {
        toast({
          title: "Video Call",
          description: `Initiating video call with ${title}`,
          variant: "default",
        });
        // Video call would be handled by onClick
      } else {
        toast({
          title: "Message Ready",
          description: `Ready to send message to ${title} at ${doctorPhone}`,
          variant: "default",
        });
        // Simulate SMS intent
        window.location.href = `sms:${doctorPhone}?body=Hello, I would like to schedule an appointment.`;
      }
      
      if (onClick) onClick();
    } else {
      toast({
        title: icon === 'phone' ? "Call Failed" : icon === 'video' ? "Video Call Failed" : "Message Failed",
        description: `Could not initiate ${icon === 'phone' ? 'call' : icon === 'video' ? 'video call' : 'message'}. Contact information not available.`,
        variant: "destructive",
      });
    }
  };
  
  return (
    <Card className="animate-fade-up">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <Icon className="h-5 w-5 text-eclinic-600 mr-3" />
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <p className="text-gray-600 mb-6">
          {description}
        </p>
        
        {type === 'button' ? (
          <Button className="w-full bg-eclinic-600 hover:bg-eclinic-700" onClick={handleCallClick}>
            <Icon className="mr-2 h-4 w-4" />
            {actionText}
          </Button>
        ) : (
          <Link to={linkTo} className="w-full">
            <Button className="w-full bg-eclinic-600 hover:bg-eclinic-700 transition-all hover:shadow-md">
              <Icon className="mr-2 h-4 w-4" />
              {actionText}
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default CallOption;
