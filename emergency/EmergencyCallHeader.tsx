
import React from 'react';
import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmergencyCallHeaderProps {
  onEndCall: () => void;
}

const EmergencyCallHeader: React.FC<EmergencyCallHeaderProps> = ({ onEndCall }) => {
  return (
    <header className="bg-black text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Shield className="h-5 w-5 text-red-500 mr-2" />
          <h1 className="text-xl font-bold">Emergency Video Consultation</h1>
        </div>
        <Button variant="destructive" onClick={onEndCall} size="sm">
          End Call
        </Button>
      </div>
    </header>
  );
};

export default EmergencyCallHeader;
