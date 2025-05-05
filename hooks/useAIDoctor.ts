
import { useState, useCallback, useEffect } from 'react';

interface DoctorPhrasesType {
  english: string[];
  tamil: string[];
  hindi: string[];
}

export const useAIDoctor = (doctorName: string, isConnecting: boolean) => {
  const [aiSpeaking, setAiSpeaking] = useState<boolean>(false);
  const [currentSpeech, setCurrentSpeech] = useState<string>("");
  const [currentLanguage, setCurrentLanguage] = useState<string>("english");
  const [messageHistory, setMessageHistory] = useState<Array<{text: string, isUser: boolean}>>([]);

  // Doctor phrases in multiple languages
  const doctorPhrases: DoctorPhrasesType = {
    english: [
      `Hello, I'm Dr. ${doctorName.split(' ')[1]}. How can I help you today?`,
      "How are you feeling?",
      "Could you tell me more about your symptoms?",
      "Have you taken any medication for this so far?",
      "I understand your concern. Let me provide some advice.",
      "Based on what you've shared, I would recommend...",
      "Do you have any allergies to medications?",
      "Have you had this condition before?",
      "Are there any other symptoms you've noticed?",
      "I'll need to ask you some follow-up questions to better understand your condition."
    ],
    tamil: [
      `வணக்கம், நான் மருத்துவர் ${doctorName.split(' ')[1]}. உங்களுக்கு எப்படி உதவ முடியும்?`,
      "நீங்கள் எப்படி உணருகிறீர்கள்?",
      "உங்கள் அறிகுறிகளைப் பற்றி மேலும் சொல்ல முடியுமா?",
      "இதற்கு இதுவரை ஏதேனும் மருந்து எடுத்துக்கொண்டீர்களா?",
      "உங்கள் கவலையை புரிந்துகொள்கிறேன். சில ஆலோசனைகளை வழங்குகிறேன்.",
      "நீங்கள் பகிர்ந்ததன் அடிப்படையில், நான் பரிந்துரைப்பேன்...",
      "உங்களுக்கு மருந்துகளுக்கு ஏதேனும் ஒவ்வாமை உள்ளதா?",
      "இந்த நிலைமை உங்களுக்கு முன்பு இருந்ததா?"
    ],
    hindi: [
      `नमस्ते, मैं डॉक्टर ${doctorName.split(' ')[1]} हूँ। मैं आपकी कैसे मदद कर सकता हूँ?`,
      "आप कैसा महसूस कर रहे हैं?",
      "क्या आप अपने लक्षणों के बारे में अधिक बता सकते हैं?",
      "क्या आपने अब तक इसके लिए कोई दवा ली है?",
      "मैं आपकी चिंता समझता हूं। मैं कुछ सलाह देना चाहता हूं।",
      "आपके द्वारा साझा किए गए जानकारी के आधार पर, मैं सिफारिश करूंगा...",
      "क्या आपको दवाओं से एलर्जी है?",
      "क्या आपको पहले कभी यह स्थिति हुई है?"
    ]
  };

  const startSpeaking = useCallback(() => {
    // Randomly select language
    const languages = ["english", "tamil", "hindi"];
    const language = languages[Math.floor(Math.random() * languages.length)];
    setCurrentLanguage(language);
    
    // Select random phrase from the chosen language
    const phrases = doctorPhrases[language as keyof typeof doctorPhrases];
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    
    setCurrentSpeech(randomPhrase);
    setAiSpeaking(true);
    
    // Add doctor message to history
    setMessageHistory(prev => [...prev, {text: randomPhrase, isUser: false}]);
    
    // Stop speaking after a few seconds
    setTimeout(() => {
      setAiSpeaking(false);
    }, 3000 + randomPhrase.length * 50);
  }, [doctorPhrases]);

  // Periodically simulate the doctor speaking
  useEffect(() => {
    if (!isConnecting) {
      const speakInterval = setInterval(() => {
        if (Math.random() > 0.7 && !aiSpeaking) { // 30% chance to speak if not already speaking
          startSpeaking();
        }
      }, 12000);
      
      return () => clearInterval(speakInterval);
    }
  }, [isConnecting, aiSpeaking, startSpeaking]);

  useEffect(() => {
    // Start AI doctor speaking after connection
    if (!isConnecting && Math.random() > 0.5) {
      startSpeaking();
    }
  }, [isConnecting, startSpeaking]);

  const sendMessage = (message: string) => {
    // Add user message to history
    setMessageHistory(prev => [...prev, {text: message, isUser: true}]);
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      // AI doctor will respond based on the message content
      const languages = ["english", "tamil", "hindi"];
      const language = languages[Math.floor(Math.random() * languages.length)];
      setCurrentLanguage(language);
      
      // Select appropriate response based on language and context
      const phrases = doctorPhrases[language as keyof typeof doctorPhrases];
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      
      setCurrentSpeech(randomPhrase);
      setAiSpeaking(true);
      
      // Add doctor message to history
      setMessageHistory(prev => [...prev, {text: randomPhrase, isUser: false}]);
      
      // Stop speaking after a few seconds
      setTimeout(() => {
        setAiSpeaking(false);
      }, 3000 + randomPhrase.length * 50);
    }, 1500);
  };

  return {
    aiSpeaking,
    currentSpeech,
    currentLanguage,
    messageHistory,
    sendMessage,
    startSpeaking
  };
};
