
import React, { useEffect, useRef, useState } from 'react';
import { Video, CameraOff } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

interface EmergencyVideoFeedProps {
  isConnecting: boolean;
  isVideoOn: boolean;
  doctor: {
    name: string;
    specialty: string;
    image: string;
  };
  onToggleVideo: (state: boolean) => void;
  patientName?: string;
}

const EmergencyVideoFeed: React.FC<EmergencyVideoFeedProps> = ({ 
  isConnecting, 
  isVideoOn, 
  doctor,
  onToggleVideo,
  patientName = "Rajesh Kumar"
}) => {
  const userVideoRef = useRef<HTMLVideoElement>(null);
  const [cameraAccessGranted, setCameraAccessGranted] = useState<boolean>(false);
  const [cameraError, setcameraError] = useState<string | null>(null);
  const [aiSpeaking, setAiSpeaking] = useState<boolean>(false);
  const [currentSpeech, setCurrentSpeech] = useState<string>("");
  const [currentLanguage, setCurrentLanguage] = useState<"english" | "tamil" | "hindi">("english");

  // AI doctor phrases in multiple languages
  const aiPhrases = {
    english: [
      "Hello, I'm Dr. " + doctor.name.split(' ')[1] + ". How can I help you today?",
      "How are you feeling?",
      "Please describe your symptoms in detail.",
      "Do you have any allergies to medication?",
      "Based on your symptoms, this appears to be a common infection.",
      "I'm going to suggest some medications that might help.",
      "You'll be fine, don't worry.",
      "Could you describe your symptoms in more detail?",
      "Based on what you've shared, I would recommend...",
      "Have you been experiencing these symptoms for long?",
      "Let me suggest some remedies that might help you feel better."
    ],
    tamil: [
      "வணக்கம், நான் டாக்டர் " + doctor.name.split(' ')[1] + ". நான் உங்களுக்கு எவ்வாறு உதவ முடியும்?",
      "நீங்கள் எப்படி உணருகிறீர்கள்?",
      "உங்கள் அறிகுறிகளை விரிவாக விவரிக்கவும்.",
      "உங்களுக்கு மருந்துகளுக்கு ஏதேனும் ஒவ்வாமை உள்ளதா?",
      "உங்கள் அறிகுறிகளின் அடிப்படையில், இது ஒரு பொதுவான தொற்று போல் தெரிகிறது.",
      "உதவக்கூடிய சில மருந்துகளை நான் பரிந்துரைக்கிறேன்.",
      "கவலைப்பட வேண்டாம், நீங்கள் நன்றாக இருப்பீர்கள்.",
      "உங்கள் அறிகுறிகளை மேலும் விரிவாக விவரிக்க முடியுமா?",
      "நீங்கள் பகிர்ந்ததன் அடிப்படையில், நான் பரிந்துரைப்பேன்...",
      "நீங்கள் இந்த அறிகுறிகளை நீண்ட காலமாக அனுபவித்து வருகிறீர்களா?"
    ],
    hindi: [
      "नमस्ते, मैं डॉक्टर " + doctor.name.split(' ')[1] + " हूँ। मैं आपकी कैसे मदद कर सकता हूँ?",
      "आप कैसा महसूस कर रहे हैं?",
      "कृपया अपने लक्षणों के बारे में विस्तार से बताएं।",
      "क्या आपको किसी दवा से एलर्जी है?",
      "आपके लक्षणों के आधार पर, यह एक सामान्य संक्रमण लगता है।",
      "मैं आपको कुछ दवाएं बता रहा हूं जो मदद कर सकती हैं।",
      "आप बिल्कुल ठीक हो जाएंगे, चिंता मत कीजिए।"
    ]
  };

  useEffect(() => {
    // Request camera access when component mounts and video is on
    if (isVideoOn) {
      const getUserMedia = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ 
            video: true,
            audio: true
          });
          
          if (userVideoRef.current) {
            userVideoRef.current.srcObject = stream;
            setCameraAccessGranted(true);
          }
        } catch (err) {
          console.error("Error accessing camera:", err);
          setcameraError("Camera access denied. Please check your browser permissions.");
          setCameraAccessGranted(false);
        }
      };
      
      getUserMedia();
      
      // Clean up function to stop all tracks when component unmounts
      return () => {
        if (userVideoRef.current && userVideoRef.current.srcObject) {
          const stream = userVideoRef.current.srcObject as MediaStream;
          stream.getTracks().forEach(track => track.stop());
        }
      };
    }
  }, [isVideoOn]);

  // Simulate AI doctor speaking
  useEffect(() => {
    if (!isConnecting && doctor.specialty === "AI Doctor") {
      const speakInterval = setInterval(() => {
        if (Math.random() > 0.6) { // 40% chance to speak
          // Randomly alternate between languages
          const languageOptions: ("english" | "tamil" | "hindi")[] = ["english", "tamil", "hindi"];
          const randomLanguage = languageOptions[Math.floor(Math.random() * languageOptions.length)];
          setCurrentLanguage(randomLanguage);
          
          const languagePhrases = aiPhrases[randomLanguage];
          const randomPhrase = languagePhrases[Math.floor(Math.random() * languagePhrases.length)];
          
          setCurrentSpeech(randomPhrase);
          setAiSpeaking(true);
          
          // Stop speaking after a few seconds
          setTimeout(() => {
            setAiSpeaking(false);
          }, 4000 + randomPhrase.length * 40);
        }
      }, 8000);
      
      return () => clearInterval(speakInterval);
    }
  }, [isConnecting, doctor.specialty, doctor.name]);

  if (isConnecting) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Connecting to emergency doctor...</p>
          <p className="text-red-400 text-sm mt-2">Please wait, this is a priority connection</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full flex items-center justify-center">
      {/* Doctor's video feed (simulated with image) */}
      <div className="h-full w-full absolute">
        <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
          <span className="animate-pulse h-2 w-2 bg-white rounded-full mr-2"></span>
          EMERGENCY CALL
        </div>
        
        <img 
          src={doctor.image} 
          alt={doctor.name} 
          className="h-full w-full object-cover"
          onError={(e) => {
            // Fallback images for doctors
            const fallbackImages = [
              "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3",
              "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3",
              "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3",
              "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3"
            ];
            e.currentTarget.src = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
          }}
        />
        
        {/* AI speaking animation with language indicator */}
        {aiSpeaking && (
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white p-4 rounded-lg max-w-md text-center">
            <div className="flex justify-center mb-2 space-x-2">
              <span className={`px-2 py-1 text-xs rounded-full ${currentLanguage === 'english' ? 'bg-blue-500' : 'bg-gray-600'}`}>English</span>
              <span className={`px-2 py-1 text-xs rounded-full ${currentLanguage === 'tamil' ? 'bg-blue-500' : 'bg-gray-600'}`}>தமிழ்</span>
              <span className={`px-2 py-1 text-xs rounded-full ${currentLanguage === 'hindi' ? 'bg-blue-500' : 'bg-gray-600'}`}>हिन्दी</span>
            </div>
            <p>{currentSpeech}</p>
            <div className="flex justify-center mt-2 space-x-1">
              <span className="h-2 w-2 bg-white rounded-full animate-bounce"></span>
              <span className="h-2 w-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
              <span className="h-2 w-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
            </div>
          </div>
        )}
        
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 p-3 text-white rounded-lg">
          <p className="font-bold">{doctor.name}</p>
          <p className="text-sm text-red-300">{doctor.specialty}</p>
          {doctor.specialty === "AI Doctor" && (
            <span className="text-xs bg-blue-500 px-2 py-0.5 rounded-full mt-1 inline-block">AI Powered</span>
          )}
        </div>
      </div>
      
      {/* User's video feed with actual camera feed when available */}
      <div className="absolute bottom-4 left-4 h-40 w-60 bg-gray-800 rounded-lg border-2 border-white overflow-hidden shadow-xl">
        {isVideoOn && cameraAccessGranted ? (
          <>
            <video 
              ref={userVideoRef} 
              autoPlay 
              playsInline
              muted 
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 px-2 py-0.5 rounded text-xs text-white">
              {patientName}
            </div>
          </>
        ) : isVideoOn && cameraError ? (
          <div className="h-full w-full bg-gray-700 flex items-center justify-center p-2">
            <p className="text-white text-xs text-center">{cameraError}</p>
          </div>
        ) : isVideoOn ? (
          <div className="h-full w-full bg-gray-700 flex items-center justify-center">
            <Video className="h-12 w-12 text-white opacity-50" />
            <p className="text-white text-xs absolute bottom-2">Requesting camera access...</p>
          </div>
        ) : (
          <div className="h-full w-full bg-gray-700 flex items-center justify-center">
            <CameraOff className="h-12 w-12 text-white opacity-50" />
            <div className="absolute bottom-2 left-0 right-0 flex justify-center items-center">
              <p className="text-white text-xs mr-2">Enable Camera</p>
              <Switch 
                checked={isVideoOn}
                onCheckedChange={onToggleVideo}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmergencyVideoFeed;
