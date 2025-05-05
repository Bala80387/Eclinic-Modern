
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import EmergencyCallHeader from '@/components/emergency/EmergencyCallHeader';
import EmergencyVideoFeed from '@/components/emergency/EmergencyVideoFeed';
import EmergencyCallControls from '@/components/emergency/EmergencyCallControls';
import EmergencyInformation from '@/components/emergency/EmergencyInformation';
import EmergencyCallEnded from '@/components/emergency/EmergencyCallEnded';
import { useAIChat } from '@/hooks/useAIChat';

// List of Indian AI doctors
const AI_DOCTORS = [
  {
    name: "Dr. Arjun Sharma",
    specialty: "AI Doctor",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3"
  },
  {
    name: "Dr. Kavita Singh",
    specialty: "AI Doctor",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3"
  },
  {
    name: "Dr. Vikram Patel",
    specialty: "AI Doctor",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3"
  },
  {
    name: "Dr. Priya Narayanan",
    specialty: "AI Doctor",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3"
  },
  {
    name: "Dr. Rajesh Kumar",
    specialty: "AI Doctor",
    image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3"
  }
];

// Indian patient names
const PATIENT_NAMES = [
  "Rajesh Kumar",
  "Priya Patel",
  "Amit Singh",
  "Deepa Sharma",
  "Suresh Reddy",
  "Ananya Gupta",
  "Vijay Menon",
  "Lakshmi Nair",
  "Karthik Iyer",
  "Sarita Das"
];

const EmergencyVideoConsultationPage: React.FC = () => {
  const [isCallActive, setIsCallActive] = useState<boolean>(true);
  const [isConnecting, setIsConnecting] = useState<boolean>(true);
  const [isVideoOn, setIsVideoOn] = useState<boolean>(true);
  const [isAudioOn, setIsAudioOn] = useState<boolean>(true);
  const [isAIDoctor, setIsAIDoctor] = useState<boolean>(true);
  const [doctor, setDoctor] = useState<any>(AI_DOCTORS[0]);
  const [patientName, setPatientName] = useState<string>(PATIENT_NAMES[0]);
  
  const navigate = useNavigate();
  const { toast } = useToast();
  const { messages, addMessage } = useAIChat();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Select a random AI doctor and patient name
    const randomDoctor = AI_DOCTORS[Math.floor(Math.random() * AI_DOCTORS.length)];
    const randomPatient = PATIENT_NAMES[Math.floor(Math.random() * PATIENT_NAMES.length)];
    setDoctor(randomDoctor);
    setPatientName(randomPatient);
    
    // Simulate connection process
    const timer = setTimeout(() => {
      setIsConnecting(false);
      toast({
        title: `Connected with ${randomDoctor.name}`,
        description: "You are now connected with our AI-powered emergency assistant",
      });
      
      // Add initial AI doctor messages in different languages
      const languages = ["Tamil", "English"];
      const selectedLang = languages[Math.floor(Math.random() * languages.length)];
      
      if (selectedLang === "Tamil") {
        addMessage(`வணக்கம், நான் ${randomDoctor.name}. உங்கள் நிலைமையை மதிப்பிட உதவுவதற்கு நான் இங்கு இருக்கிறேன். உங்கள் அறிகுறிகளை விவரிக்கவும்.`, "agent");
        setTimeout(() => {
          addMessage("How can I assist you today? Please describe your symptoms or emergency situation.", "agent");
        }, 3000);
      } else {
        addMessage(`Namaste, I'm ${randomDoctor.name}. I'm here to help assess your situation and provide guidance. Please describe your symptoms or emergency situation.`, "agent");
      }
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [toast, addMessage]);
  
  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn);
    toast({
      title: isVideoOn ? "Video Off" : "Video On",
      description: `Your video has been turned ${isVideoOn ? 'off' : 'on'}.`,
    });
  };
  
  const toggleAudio = () => {
    setIsAudioOn(!isAudioOn);
    toast({
      title: isAudioOn ? "Muted" : "Unmuted",
      description: `Your microphone has been ${isAudioOn ? 'muted' : 'unmuted'}.`,
    });
  };
  
  const handleEndCall = () => {
    toast({
      title: "Emergency Call Ended",
      description: "Your emergency video consultation has ended.",
    });
    setIsCallActive(false);
    setTimeout(() => {
      navigate('/emergency');
    }, 2000);
  };
  
  // Handle sending patient's message to AI doctor
  const sendMessageToAIDoctor = (message: string) => {
    if (!message.trim()) return;
    
    // Add the user message
    addMessage(message, 'user');
    
    // Simulate AI thinking
    setTimeout(() => {
      // Check for key medical terms in Tamil or English
      const medicalTerms = [
        "pain", "fever", "cough", "headache", "breathe", "chest", 
        "வலி", "காய்ச்சல்", "இருமல்", "தலைவலி", "மூச்சு", "மார்பு"
      ];
      
      const hasMedicalTerm = medicalTerms.some(term => message.toLowerCase().includes(term));
      
      // Choose language for response - match user's language if possible
      const useTamil = message.match(/[\u0B80-\u0BFF]/) ? true : Math.random() > 0.7;
      
      if (hasMedicalTerm) {
        if (useTamil) {
          addMessage("உங்கள் அறிகுறிகளை கேட்டு வருந்துகிறேன். நான் உங்களுக்கு உதவ முயற்சிக்கிறேன். மேலும் விவரங்களை சொல்லுங்கள்.", "agent");
        } else {
          addMessage(`I understand your symptoms. Based on what you've described, I'd like to ask a few more questions to better assess your situation. ${Math.random() > 0.5 ? "Is the pain constant or does it come and go?" : "When did these symptoms first appear?"}`, "agent");
        }
      } else {
        if (useTamil) {
          addMessage("நீங்கள் கூறியதைப் புரிந்துகொண்டேன். தயவுசெய்து உங்கள் அறிகுறிகளைப் பற்றி மேலும் விவரிக்க முடியுமா?", "agent");
        } else {
          addMessage("I understand. Could you please provide more details about your symptoms or emergency situation so I can better assist you?", "agent");
        }
      }
    }, 1500);
  };
  
  if (!isCallActive) {
    return <EmergencyCallEnded />;
  }
  
  return (
    <div className="page-transition min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col">
        <EmergencyCallHeader onEndCall={handleEndCall} />
        
        {/* Video consultation area */}
        <div className="flex-grow p-4 bg-gray-900">
          <div className="max-w-5xl mx-auto h-full">
            <div className="flex flex-col md:flex-row h-full gap-4">
              {/* Video area */}
              <div className="relative flex-1 bg-gray-900 rounded-lg overflow-hidden">
                <EmergencyVideoFeed 
                  isConnecting={isConnecting} 
                  isVideoOn={isVideoOn} 
                  doctor={doctor}
                  onToggleVideo={toggleVideo}
                  patientName={patientName}
                />
              </div>
              
              {/* AI Chat area - visible only when connected with AI Doctor */}
              {isAIDoctor && !isConnecting && (
                <div className="w-full md:w-1/3 bg-gray-800 rounded-lg overflow-hidden flex flex-col">
                  <div className="bg-gray-900 p-3 border-b border-gray-700 flex items-center justify-between">
                    <h3 className="text-white font-semibold">{doctor.name} Chat</h3>
                    <div className="flex items-center">
                      <span className="inline-block h-2 w-2 bg-green-500 rounded-full mr-1"></span>
                      <span className="text-green-400 text-xs">Online</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto p-3 space-y-3">
                    {messages.map(message => (
                      <div 
                        key={message.id}
                        className={`${message.sender === 'user' ? 'ml-auto bg-blue-600' : 'mr-auto bg-gray-700'} 
                          max-w-[85%] rounded-lg p-3 text-white`}
                      >
                        {message.isTyping ? (
                          <div className="flex space-x-1">
                            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                        ) : (
                          <p className="text-sm">{message.text}</p>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-3 border-t border-gray-700">
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="Describe your symptoms..."
                        className="flex-1 bg-gray-700 text-white rounded-l-lg px-3 py-2 text-sm focus:outline-none"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && (e.target as HTMLInputElement).value.trim()) {
                            sendMessageToAIDoctor((e.target as HTMLInputElement).value);
                            (e.target as HTMLInputElement).value = '';
                          }
                        }}
                      />
                      <button 
                        className="bg-red-600 hover:bg-red-700 text-white rounded-r-lg px-4 py-2"
                        onClick={(e) => {
                          const input = (e.currentTarget.previousSibling as HTMLInputElement);
                          if (input.value.trim()) {
                            sendMessageToAIDoctor(input.value);
                            input.value = '';
                          }
                        }}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <EmergencyCallControls
              isVideoOn={isVideoOn}
              isAudioOn={isAudioOn}
              toggleVideo={toggleVideo}
              toggleAudio={toggleAudio}
              handleEndCall={handleEndCall}
            />
            
            <EmergencyInformation isAIDoctor={isAIDoctor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyVideoConsultationPage;
