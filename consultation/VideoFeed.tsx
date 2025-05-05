
import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';

interface VideoFeedProps {
  doctorName: string;
  doctorImage: string;
  userStream: MediaStream | null;
  isVideoOn: boolean;
  isConnecting: boolean;
  aiSpeaking: boolean;
  currentSpeech: string;
  currentLanguage: string;
  messageHistory: Array<{text: string, isUser: boolean}>;
}

const VideoFeed: React.FC<VideoFeedProps> = ({
  doctorName,
  doctorImage,
  userStream,
  isVideoOn,
  isConnecting,
  aiSpeaking,
  currentSpeech,
  currentLanguage,
  messageHistory
}) => {
  const [imageError, setImageError] = useState(false);
  const [userVideoActive, setUserVideoActive] = useState(false);
  
  // Load fallback doctor images
  const fallbackImages = [
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3",
    "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3"
  ];
  
  const [fallbackImage, setFallbackImage] = useState(fallbackImages[0]);
  
  useEffect(() => {
    // Randomly select a fallback image
    const randomIndex = Math.floor(Math.random() * fallbackImages.length);
    setFallbackImage(fallbackImages[randomIndex]);
  }, []);
  
  useEffect(() => {
    if (userStream && isVideoOn) {
      setUserVideoActive(true);
    } else {
      setUserVideoActive(false);
    }
  }, [userStream, isVideoOn]);
  
  const handleImageError = () => {
    setImageError(true);
    console.log("Doctor image failed to load, using fallback");
  };

  if (isConnecting) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gray-900 dark:bg-gray-950 transition-colors duration-300">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-eclinic-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Connecting to doctor...</p>
          <p className="text-eclinic-400 text-sm mt-2">Please wait while we establish a secure connection</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex items-center justify-center bg-gray-900 rounded-lg overflow-hidden transition-all duration-300">
      {/* Doctor's video feed (simulated with image) */}
      <div className="h-full w-full absolute">
        {!imageError ? (
          <img 
            src={doctorImage} 
            alt={`Dr. ${doctorName}`} 
            className="h-full w-full object-cover"
            onError={handleImageError}
          />
        ) : (
          <img 
            src={fallbackImage} 
            alt={`Dr. ${doctorName}`} 
            className="h-full w-full object-cover"
            onError={() => console.log("Fallback image also failed")}
          />
        )}
        
        {/* Doctor info overlay */}
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 backdrop-blur-sm p-3 text-white rounded-lg transition-opacity duration-300 hover:bg-opacity-80">
          <p className="font-semibold text-eclinic-300">Dr. {doctorName}</p>
          <p className="text-xs text-gray-300">Video Consultation</p>
        </div>
        
        {/* Doctor speaking animation */}
        {aiSpeaking && (
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 backdrop-blur-md text-white p-4 rounded-lg max-w-md text-center shadow-lg border border-gray-700">
            <div className="flex justify-center mb-2 space-x-2">
              <span className={`px-2 py-1 text-xs rounded-full ${currentLanguage === 'english' ? 'bg-eclinic-500' : 'bg-gray-600'}`}>
                English
              </span>
              <span className={`px-2 py-1 text-xs rounded-full ${currentLanguage === 'tamil' ? 'bg-eclinic-500' : 'bg-gray-600'}`}>
                தமிழ்
              </span>
              <span className={`px-2 py-1 text-xs rounded-full ${currentLanguage === 'hindi' ? 'bg-eclinic-500' : 'bg-gray-600'}`}>
                हिंदी
              </span>
            </div>
            <p className="text-sm md:text-base">{currentSpeech}</p>
            <div className="flex justify-center mt-2 space-x-1">
              <span className="h-2 w-2 bg-white rounded-full animate-bounce"></span>
              <span className="h-2 w-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
              <span className="h-2 w-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
            </div>
          </div>
        )}
      </div>
      
      {/* User's video feed with improved handling */}
      <div className="absolute bottom-4 left-4 h-32 w-48 bg-gray-800 rounded-lg border-2 border-gray-700 overflow-hidden shadow-xl">
        {userVideoActive ? (
          <video 
            autoPlay 
            playsInline 
            muted
            ref={(videoElement) => {
              if (videoElement && userStream) {
                videoElement.srcObject = userStream;
              }
            }}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gray-700 flex flex-col items-center justify-center">
            <User className="h-10 w-10 text-gray-400 mb-2" />
            <p className="text-white text-xs">
              {isVideoOn ? "Camera initializing..." : "Camera off"}
            </p>
          </div>
        )}
      </div>

      {/* Chat history panel with improved styling */}
      {messageHistory.length > 0 && (
        <div className="absolute top-4 right-4 w-64 bg-black bg-opacity-75 backdrop-blur-sm rounded-lg max-h-96 overflow-y-auto shadow-lg border border-gray-700 transition-all duration-300">
          <div className="p-3 border-b border-gray-700">
            <h3 className="text-white text-sm font-medium">Consultation Chat</h3>
          </div>
          <div className="p-2 space-y-2 max-h-64 overflow-y-auto">
            {messageHistory.map((msg, index) => (
              <div 
                key={index} 
                className={`p-2 rounded-lg text-xs ${msg.isUser ? 'bg-eclinic-600 text-white ml-6' : 'bg-gray-700 text-white mr-6'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoFeed;
