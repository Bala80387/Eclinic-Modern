
import { useState, useCallback } from 'react';

interface AIMessage {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
  isTyping?: boolean;
}

const MEDICAL_AI_RESPONSES = [
  "Based on the symptoms you've described, this could be {condition}. However, I'd need more information to provide a better assessment.",
  "Your symptoms might indicate {condition}. I recommend {recommendation} as a first step.",
  "From what you've shared, this sounds like it could be {condition}. Consider {recommendation}, but please consult with a human doctor for a definitive diagnosis.",
  "This might be {condition}. Some common treatments include {treatments}, but you should verify with a medical professional.",
  "I understand your concern about these symptoms. They're commonly associated with {condition}, but other conditions can present similarly.",
  "The combination of symptoms you've mentioned is often seen with {condition}. Would you mind sharing more details about when they started?",
  "While I can't diagnose you with certainty, these symptoms align with {condition}. I recommend seeking medical attention within {timeframe}.",
  "Based on medical literature, your symptoms match {condition}. Are you experiencing any other symptoms I should know about?",
  "I'm detecting patterns consistent with {condition}. Let me ask you a few more questions to narrow down the possibilities.",
  "Your description suggests possible {condition}. Can you tell me if you have any pre-existing medical conditions or allergies?"
];

const MEDICAL_CONDITIONS = [
  {condition: "upper respiratory infection", recommendation: "rest and increased fluid intake", treatments: "over-the-counter pain relievers, decongestants, and throat lozenges", timeframe: "3-5 days if symptoms worsen"},
  {condition: "seasonal allergies", recommendation: "antihistamines and avoiding known allergens", treatments: "nasal sprays and allergy medications", timeframe: "2 weeks if not improving with OTC medication"},
  {condition: "mild dehydration", recommendation: "increased water intake and electrolyte-rich fluids", treatments: "oral rehydration solutions", timeframe: "24 hours if symptoms persist"},
  {condition: "gastroenteritis", recommendation: "rest and a BRAT diet (bananas, rice, applesauce, toast)", treatments: "anti-diarrheal medications and probiotics", timeframe: "48 hours if unable to keep fluids down"},
  {condition: "migraine", recommendation: "resting in a dark, quiet room", treatments: "pain relievers and prescription migraine medications", timeframe: "24 hours if unusually severe"},
  {condition: "muscle strain", recommendation: "rest, ice, compression, and elevation (RICE)", treatments: "over-the-counter pain relievers and muscle relaxants", timeframe: "a week if pain is severe or not improving"},
  {condition: "tension headache", recommendation: "stress management techniques and adequate hydration", treatments: "acetaminophen or ibuprofen", timeframe: "a few days if recurring frequently"},
  {condition: "mild anxiety", recommendation: "deep breathing exercises and mindfulness practices", treatments: "cognitive-behavioral techniques", timeframe: "2 weeks if interfering with daily activities"},
  {condition: "insomnia", recommendation: "maintaining a regular sleep schedule", treatments: "sleep hygiene improvements and melatonin supplements", timeframe: "2 weeks if persistent"}
];

// Add some India-specific medical conditions
const INDIAN_MEDICAL_CONDITIONS = [
  {condition: "bacterial dysentery", recommendation: "oral rehydration therapy and rest", treatments: "antibiotics prescribed by a doctor", timeframe: "24 hours if symptoms worsen"},
  {condition: "dengue fever", recommendation: "rest and increased fluid intake", treatments: "acetaminophen for fever (avoid aspirin)", timeframe: "immediately if you have bleeding or severe abdominal pain"},
  {condition: "malaria", recommendation: "immediate medical attention", treatments: "antimalarial medications", timeframe: "immediately, as malaria can progress rapidly"},
  {condition: "typhoid", recommendation: "medical consultation", treatments: "antibiotics and supportive care", timeframe: "as soon as possible for proper diagnosis"},
  {condition: "heat exhaustion", recommendation: "move to a cooler place and hydrate", treatments: "electrolyte solutions and cooling methods", timeframe: "immediately if symptoms progress to confusion or high fever"}
];

const EMERGENCY_WARNING = "Based on what you've described, you should seek immediate medical attention. Please call emergency services (108) or have someone take you to the nearest emergency room.";

const HINDI_PHRASES = [
  "आपके लक्षण सुनकर लगता है कि आपको {condition} हो सकता है।",
  "कृपया अधिक जानकारी दें ताकि मैं आपकी बेहतर मदद कर सकूं।",
  "क्या आपको पहले कभी ऐसी समस्या हुई है?",
  "मैं आपको {recommendation} की सलाह देता हूं।",
  "अगर आपके लक्षण बढ़ते हैं, तो तुरंत डॉक्टर से संपर्क करें।"
];

export const useAIChat = () => {
  const [messages, setMessages] = useState<AIMessage[]>([]);
  
  const [conversationContext, setConversationContext] = useState<{
    severity: 'low' | 'medium' | 'high' | 'emergency';
    mentionedSymptoms: string[];
    suggestedCondition?: string;
    recommendedActions?: string[];
    language: 'english' | 'hindi' | 'mixed';
  }>({
    severity: 'low',
    mentionedSymptoms: [],
    language: 'english'
  });

  const addMessage = useCallback((text: string, sender: 'user' | 'agent') => {
    const newMessage: AIMessage = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
    
    if (sender === 'user') {
      updateConversationContext(text);
      
      const typingMessage: AIMessage = {
        id: 'typing',
        text: '',
        sender: 'agent',
        timestamp: new Date(),
        isTyping: true,
      };
      setMessages(prev => [...prev, typingMessage]);
      
      const baseDelay = 500;
      const wordsPerMinute = 300;
      const wordCount = text.split(' ').length;
      const typingTime = Math.max(1000, Math.min(3000, baseDelay + (wordCount / wordsPerMinute) * 60000));
      
      setTimeout(() => {
        const aiResponse = generateMedicalResponse(text);
        setMessages(prev => prev.filter(m => !m.isTyping).concat({
          id: Date.now().toString(),
          text: aiResponse,
          sender: 'agent',
          timestamp: new Date(),
        }));
      }, typingTime);
    }
  }, [conversationContext]);

  const updateConversationContext = (userMessage: string) => {
    const message = userMessage.toLowerCase();
    
    const newContext = { ...conversationContext };
    const emergencyKeywords = ['cannot breathe', 'chest pain', 'heart attack', 'stroke', 'severe bleeding', 'unconscious', 'सांस नहीं आ रही', 'छाती में दर्द', 'दिल का दौरा', 'बेहोश'];
    const highSeverityKeywords = ['severe pain', 'high fever', 'vomiting blood', 'cannot move', 'head injury', 'तेज दर्द', 'तेज बुखार', 'खून की उल्टी', 'सिर की चोट'];
    const mediumSeverityKeywords = ['fever', 'persistent pain', 'dizziness', 'vomiting', 'migraine', 'बुखार', 'चक्कर आना', 'उल्टी', 'सिरदर्द'];
    
    // Check for emergency symptoms
    if (emergencyKeywords.some(keyword => message.includes(keyword))) {
      newContext.severity = 'emergency';
    } 
    // Check for high severity symptoms
    else if (highSeverityKeywords.some(keyword => message.includes(keyword))) {
      newContext.severity = 'high';
    }
    // Check for medium severity symptoms
    else if (mediumSeverityKeywords.some(keyword => message.includes(keyword))) {
      newContext.severity = 'medium';
    }
    
    // Track mentioned symptoms
    const commonSymptoms = ['headache', 'cough', 'fever', 'pain', 'nausea', 'tired', 'fatigue', 'sore throat', 'rash', 'dizziness', 'सिरदर्द', 'खांसी', 'बुखार', 'दर्द', 'थकान', 'गले में खराश', 'चकत्ते', 'चक्कर'];
    commonSymptoms.forEach(symptom => {
      if (message.includes(symptom) && !newContext.mentionedSymptoms.includes(symptom)) {
        newContext.mentionedSymptoms.push(symptom);
      }
    });

    // Detect language
    const hindiPattern = /[\u0900-\u097F]/; // Unicode range for Hindi
    if (hindiPattern.test(userMessage)) {
      newContext.language = message.split(' ').some(word => !hindiPattern.test(word)) ? 'mixed' : 'hindi';
    } else {
      newContext.language = 'english';
    }
    
    setConversationContext(newContext);
  };

  const generateMedicalResponse = (userInput: string) => {
    const userMessage = userInput.toLowerCase();
    
    // Emergency case
    if (conversationContext.severity === 'emergency') {
      return conversationContext.language === 'hindi' 
        ? "आपकी स्थिति गंभीर लग रही है। कृपया तुरंत आपातकालीन सेवाओं (108) को कॉल करें या निकटतम आपातकालीन कक्ष में जाएँ।"
        : EMERGENCY_WARNING;
    }
    
    // Check if it's a greeting or general question
    if (userMessage.match(/^(hi|hello|hey|greetings|नमस्ते|हैलो)/i)) {
      return conversationContext.language === 'hindi'
        ? "नमस्ते! मैं डॉ. आर्यन AI सहायक हूं। कृपया अपने लक्षणों या चिंताओं का वर्णन करें, और मैं आपकी मदद करूंगा। याद रखें कि मैं एक AI हूं और निश्चित चिकित्सा निदान नहीं दे सकता।"
        : "Hello! I'm Dr. Aryan AI Assistant. Please describe your symptoms or concerns, and I'll do my best to help you. Remember that I'm an AI and cannot provide a definitive medical diagnosis.";
    }
    
    // If asking about the service
    if (userMessage.includes('what') && (userMessage.includes('you do') || userMessage.includes('is this') || userMessage.includes('service'))) {
      return conversationContext.language === 'hindi'
        ? "मैं एक AI चिकित्सा सहायक हूं जो प्रारंभिक चिकित्सा मार्गदर्शन प्रदान करने के लिए डिज़ाइन किया गया है। मैं आपके लक्षणों का मूल्यांकन करने और सामान्य स्वास्थ्य सलाह देने में मदद कर सकता हूं, लेकिन मैं मानव डॉक्टर का विकल्प नहीं हूं। गंभीर चिंताओं के लिए, कृपया व्यक्तिगत चिकित्सा देखभाल प्राप्त करें।"
        : "I'm an AI medical assistant designed to provide preliminary medical guidance. I can help assess your symptoms and offer general health advice, but I'm not a replacement for a human doctor. For serious concerns, please seek in-person medical care.";
    }
    
    // For symptom descriptions, generate a more specific response
    if (conversationContext.mentionedSymptoms.length > 0) {
      // Select a random medical condition that might match, including Indian-specific ones
      const allConditions = [...MEDICAL_CONDITIONS, ...INDIAN_MEDICAL_CONDITIONS];
      const medicalCondition = allConditions[Math.floor(Math.random() * allConditions.length)];
      
      // Select a template for the response
      let template = MEDICAL_AI_RESPONSES[Math.floor(Math.random() * MEDICAL_AI_RESPONSES.length)];
      
      // For Hindi or mixed language users, occasionally use Hindi phrases
      if (conversationContext.language !== 'english' && Math.random() > 0.5) {
        template = HINDI_PHRASES[Math.floor(Math.random() * HINDI_PHRASES.length)];
      }
      
      // Fill in the template with the condition details
      let response = template
        .replace('{condition}', medicalCondition.condition)
        .replace('{recommendation}', medicalCondition.recommendation)
        .replace('{treatments}', medicalCondition.treatments)
        .replace('{timeframe}', medicalCondition.timeframe);
      
      // Add a follow-up question
      const followUps = [
        " How long have you been experiencing these symptoms?",
        " Have you tried any medications or remedies so far?",
        " Is there anything that makes your symptoms better or worse?",
        " Do you have any history of similar issues?",
        " Are you currently taking any medications?"
      ];
      
      const hindiFollowUps = [
        " आप इन लक्षणों का अनुभव कब से कर रहे हैं?",
        " क्या आपने कोई दवा या उपचार का प्रयास किया है?",
        " क्या कुछ ऐसा है जो आपके लक्षणों को बेहतर या बदतर बनाता है?",
        " क्या आपको पहले कभी ऐसी समस्या हुई है?",
        " क्या आप वर्तमान में कोई दवा ले रहे हैं?"
      ];
      
      const appropriateFollowUps = conversationContext.language === 'hindi' ? hindiFollowUps : followUps;
      
      return response + appropriateFollowUps[Math.floor(Math.random() * appropriateFollowUps.length)];
    }
    
    // Default response if we can't generate anything specific
    return conversationContext.language === 'hindi'
      ? "मुझे आपके लक्षणों के बारे में अधिक जानकारी की आवश्यकता है ताकि मैं सहायक मार्गदर्शन प्रदान कर सकूं। कृपया विस्तार से बताएं कि आप क्या अनुभव कर रहे हैं। उदाहरण के लिए, यह कब शुरू हुआ, क्या इसे बेहतर या बदतर बनाता है, और आपको कौन से अन्य लक्षण हो रहे हैं।"
      : "I need more information about your symptoms to provide helpful guidance. Could you please describe what you're experiencing in more detail? For example, when did it start, what makes it better or worse, and any other symptoms you're having.";
  };

  return {
    messages,
    addMessage,
  };
};
