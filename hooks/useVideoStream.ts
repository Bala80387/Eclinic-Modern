
import { useState, useEffect, useRef } from 'react';
import { useToast } from "@/hooks/use-toast";

export const useVideoStream = (isConnecting: boolean) => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [userStream, setUserStream] = useState<MediaStream | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const { toast } = useToast();

  // Get user camera access
  useEffect(() => {
    let mounted = true;
    
    const getUserMedia = async () => {
      try {
        // Stop any existing tracks before requesting new ones
        if (streamRef.current) {
          streamRef.current.getTracks().forEach(track => track.stop());
        }
        
        // Only request media if video should be on and we're connected
        if (isVideoOn && !isConnecting) {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: isAudioOn
          });
          
          // Only update state if component is still mounted
          if (mounted) {
            setUserStream(stream);
            streamRef.current = stream;
            
            // Enable/disable audio based on current state
            stream.getAudioTracks().forEach(track => {
              track.enabled = isAudioOn;
            });
            
            console.log("Camera and microphone accessed successfully");
          } else {
            // If unmounted, make sure to clean up the stream
            stream.getTracks().forEach(track => track.stop());
          }
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
        if (mounted) {
          toast({
            title: "Camera Access Error",
            description: "Please check your camera permissions in browser settings.",
            variant: "destructive"
          });
          setIsVideoOn(false);
        }
      }
    };
    
    getUserMedia();
    
    // Clean up function to stop all tracks when component unmounts
    return () => {
      mounted = false;
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, [isVideoOn, isConnecting, toast]);

  // Handle audio tracks separately to avoid camera restart
  useEffect(() => {
    if (userStream) {
      userStream.getAudioTracks().forEach(track => {
        track.enabled = isAudioOn;
      });
    }
  }, [isAudioOn, userStream]);
  
  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn);
    toast({
      title: isVideoOn ? "Video Off" : "Video On",
      description: `Your video has been turned ${isVideoOn ? 'off' : 'on'}.`,
    });
    
    if (userStream) {
      userStream.getVideoTracks().forEach(track => {
        track.enabled = !isVideoOn;
      });
    }
  };
  
  const toggleAudio = () => {
    setIsAudioOn(!isAudioOn);
    toast({
      title: isAudioOn ? "Muted" : "Unmuted",
      description: `Your microphone has been ${isAudioOn ? 'muted' : 'unmuted'}.`,
    });
    
    if (userStream) {
      userStream.getAudioTracks().forEach(track => {
        track.enabled = !isAudioOn;
      });
    }
  };

  return {
    isVideoOn,
    isAudioOn,
    userStream,
    toggleVideo,
    toggleAudio
  };
};
