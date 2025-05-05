
import React from 'react';
import { Camera, CameraOff, Mic, MicOff, PhoneOff, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/navbar/ThemeToggle';

interface VideoControlsProps {
  isVideoOn: boolean;
  isAudioOn: boolean;
  toggleVideo: () => void;
  toggleAudio: () => void;
  handleEndCall: () => void;
  sendMessage: (message: string) => void;
}

const VideoControls: React.FC<VideoControlsProps> = ({
  isVideoOn,
  isAudioOn,
  toggleVideo,
  toggleAudio,
  handleEndCall,
  sendMessage
}) => {
  const quickPhrases = [
    "I'm not feeling well",
    "Yes, I understand",
    "Could you explain more?",
    "Thank you doctor"
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg mt-4 flex flex-col gap-4 shadow-md transition-colors duration-300">
      <div className="flex flex-wrap justify-center gap-6">
        <Button
          onClick={toggleVideo}
          variant="outline"
          size="lg"
          className={`border-2 ${isVideoOn ? "border-green-500 text-green-500 hover:bg-green-500/10" : "bg-red-600 hover:bg-red-700 text-white border-red-600"} transition-all duration-300`}
        >
          {isVideoOn ? (
            <>
              <Camera className="h-5 w-5 mr-2" />
              Video On
            </>
          ) : (
            <>
              <CameraOff className="h-5 w-5 mr-2" />
              Video Off
            </>
          )}
        </Button>
        
        <Button
          onClick={toggleAudio}
          variant="outline"
          size="lg"
          className={`border-2 ${isAudioOn ? "border-green-500 text-green-500 hover:bg-green-500/10" : "bg-red-600 hover:bg-red-700 text-white border-red-600"} transition-all duration-300`}
        >
          {isAudioOn ? (
            <>
              <Mic className="h-5 w-5 mr-2" />
              Mic On
            </>
          ) : (
            <>
              <MicOff className="h-5 w-5 mr-2" />
              Mic Off
            </>
          )}
        </Button>
        
        <Button
          onClick={handleEndCall}
          variant="destructive"
          size="lg"
          className="px-8 bg-red-600 hover:bg-red-700 transition-all duration-300"
        >
          <PhoneOff className="h-6 w-6 mr-2" />
          End Call
        </Button>
        
        <div className="flex items-center">
          <ThemeToggle className="ml-2" />
        </div>
      </div>

      <div className="w-full mt-2">
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-2 text-center">Quick responses:</p>
        <div className="flex flex-wrap justify-center gap-2">
          {quickPhrases.map((phrase, index) => (
            <Button 
              key={index}
              variant="secondary" 
              size="sm" 
              onClick={() => sendMessage(phrase)}
              className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-xs transition-colors duration-300"
            >
              <MessageCircle className="h-3 w-3 mr-1" />
              {phrase}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoControls;
