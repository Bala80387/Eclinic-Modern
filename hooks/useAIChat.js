
import { useState, useEffect, useRef } from 'react';

// AI Chat hook for handling chat functionality
export function useAIChat() {
  const [messages, setMessages] = useState([]);
  const messageIdCounter = useRef(0);

  // Function to generate a unique ID for each message
  const generateMessageId = () => {
    messageIdCounter.current += 1;
    return `msg-${messageIdCounter.current}`;
  };

  // Initialize with a welcome message
  useEffect(() => {
    if (messages.length === 0) {
      const welcomeMessage = {
        id: generateMessageId(),
        text: "Hello! I'm the E-Clinic AI assistant. How can I help you today?",
        sender: 'ai',
        timestamp: new Date(),
        isTyping: false
      };
      
      setMessages([welcomeMessage]);
    }
  }, [messages.length]);

  // Function to add a new message to the chat
  const addMessage = (text, sender) => {
    const newMessage = {
      id: generateMessageId(),
      text,
      sender,
      timestamp: new Date(),
      isTyping: false
    };
    
    setMessages(prev => [...prev, newMessage]);
    
    // If this was a user message, generate an AI response
    if (sender === 'user') {
      generateAIResponse(text);
    }
  };

  // Function to simulate an AI response
  const generateAIResponse = (userMessage) => {
    // Add a typing indicator
    const typingId = generateMessageId();
    setMessages(prev => [
      ...prev,
      {
        id: typingId,
        text: '',
        sender: 'ai',
        timestamp: new Date(),
        isTyping: true
      }
    ]);
    
    // Define common responses
    const responses = [
      "I'm here to help with any medical questions you might have. However, please remember that I'm an AI assistant and not a substitute for professional medical advice.",
      "That's a good question about your health. Our specialists at E-Clinic would be happy to provide more detailed information during a consultation.",
      "I understand your concern. Would you like to schedule an appointment with one of our doctors to discuss this further?",
      "Based on what you've shared, this might require a professional medical opinion. Our doctors at E-Clinic are available for both in-person and online consultations.",
      "Thank you for providing that information. Is there anything specific about our services or facilities that you'd like to know more about?",
      "E-Clinic offers various specialized departments including Cardiology, Dental, ENT, and Emergency services. Would you like more information about any of these?",
      "Your health is our priority. Our team of qualified medical professionals is ready to provide you with excellent care."
    ];
    
    // Select a response based on the user message - in a real app, this would use more sophisticated logic
    let responseText = responses[Math.floor(Math.random() * responses.length)];
    
    // Customize response based on simple keyword matching
    if (userMessage.toLowerCase().includes('appointment')) {
      responseText = "You can book an appointment through our website or mobile app. Would you like me to guide you through the process?";
    } else if (userMessage.toLowerCase().includes('emergency')) {
      responseText = "For medical emergencies, please call our emergency hotline immediately at +91 98765 43210 or visit our emergency department which is open 24/7.";
    } else if (userMessage.toLowerCase().includes('doctor') || userMessage.toLowerCase().includes('specialist')) {
      responseText = "E-Clinic has over 50 specialists across various medical fields. You can view all our doctors on the 'Doctors' page. Would you like me to direct you there?";
    }
    
    // Simulate typing delay - between 1 and 3 seconds
    const typingTime = 1000 + Math.random() * 2000;
    setTimeout(() => {
      // Remove typing indicator and add actual response
      setMessages(prev => prev.map(msg => 
        msg.id === typingId
          ? { ...msg, text: responseText, isTyping: false }
          : msg
      ));
    }, typingTime);
  };

  return { messages, addMessage };
}
