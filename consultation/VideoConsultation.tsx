
import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import VideoFeed from '@/components/consultation/VideoFeed';
import VideoControls from '@/components/consultation/VideoControls';
import { useAIDoctor } from '@/hooks/useAIDoctor';
import { useVideoStream } from '@/hooks/useVideoStream';

interface VideoConsultationProps {
  doctorName: string;
  doctorImage: string;
  onEndCall: () => void;
}

const VideoConsultation: React.FC<VideoConsultationProps> = ({ 
  doctorName, 
  doctorImage,
  onEndCall
}) => {
  const [isConnecting, setIsConnecting] = useState(true);
  const { toast } = useToast();

  // Custom hooks
  const {
    isVideoOn,
    isAudioOn,
    userStream,
    toggleVideo,
    toggleAudio
  } = useVideoStream(isConnecting);

  const {
    aiSpeaking,
    currentSpeech,
    currentLanguage,
    messageHistory,
    sendMessage
  } = useAIDoctor(doctorName, isConnecting);
  
  // Simulate connection process
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsConnecting(false);
      toast({
        title: "Connected",
        description: `You are now in a video consultation with Dr. ${doctorName.split(' ')[1]}`,
      });
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [doctorName, toast]);
  
  const handleEndCall = () => {
    // Clean up resources
    if (userStream) {
      userStream.getTracks().forEach(track => track.stop());
    }
    
    toast({
      title: "Call Ended",
      description: "Your video consultation has ended.",
    });
    
    onEndCall();
  };
  
  // Ensure clean resource cleanup
  useEffect(() => {
    return () => {
      console.log("VideoConsultation component unmounting, cleaning up resources");
      if (userStream) {
        userStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [userStream]);
  
  return (
    <div className="flex flex-col h-full">
      {/* Video area */}
      <div className="relative flex-1 bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <VideoFeed
          doctorName={doctorName}
          doctorImage={doctorImage}
          userStream={userStream}
          isVideoOn={isVideoOn}
          isConnecting={isConnecting}
          aiSpeaking={aiSpeaking}
          currentSpeech={currentSpeech}
          currentLanguage={currentLanguage}
          messageHistory={messageHistory}
        />
      </div>
      
      {/* Controls */}
      <VideoControls
        isVideoOn={isVideoOn}
        isAudioOn={isAudioOn}
        toggleVideo={toggleVideo}
        toggleAudio={toggleAudio}
        handleEndCall={handleEndCall}
        sendMessage={sendMessage}
      />
    </div>
  );
};

export default VideoConsultation;
