
import React, { useState, useEffect, useRef } from 'react';
import { Send, X, MessageSquare, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useToast } from '@/hooks/use-toast';
import ChatUnavailable from './ChatUnavailable';
import TypingIndicator from './TypingIndicator';
import { useAIChat } from '@/hooks/useAIChat';

const WORKING_HOURS = {
  start: 9, // 9 AM
  end: 17, // 5 PM
};

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [isAgentAvailable, setIsAgentAvailable] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const { toast } = useToast();
  const { messages, addMessage } = useAIChat();

  useEffect(() => {
    // Check if agents are available based on time
    const checkAgentAvailability = () => {
      const now = new Date();
      const hour = now.getHours();
      const day = now.getDay(); // 0 is Sunday, 6 is Saturday
      const available = day > 0 && day < 6 && hour >= WORKING_HOURS.start && hour < WORKING_HOURS.end;
      setIsAgentAvailable(available);
    };
    
    checkAgentAvailability();
    const interval = setInterval(checkAgentAvailability, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Auto-scroll to the latest message
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Focus input field when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    addMessage(newMessage.trim(), 'user');
    setNewMessage('');
    
    // Focus the input field after sending
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const toggleChat = () => {
    setIsOpen(prev => !prev);
    if (!isOpen) {
      toast({
        title: "AI Chat Assistant",
        description: "Welcome to E-Clinic AI support! How can I help you today?",
      });
    }
  };

  if (!isAgentAvailable && isOpen) {
    return <ChatUnavailable onClose={() => setIsOpen(false)} />;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button 
            onClick={toggleChat}
            className="h-14 w-14 rounded-full bg-eclinic-600 hover:bg-eclinic-700 shadow-lg"
            aria-label="Open chat assistant"
          >
            {messages.length > 1 && !isOpen ? (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {messages.filter(m => m.sender === 'user').length}
              </div>
            ) : null}
            <MessageSquare className="h-6 w-6 text-white" />
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          className="w-80 md:w-96 p-0 h-[450px] flex flex-col"
          align="end"
        >
          {/* Chat header */}
          <div className="bg-eclinic-600 text-white p-3 flex justify-between items-center rounded-t-md">
            <div className="flex items-center">
              <div className="bg-green-500 h-2 w-2 rounded-full mr-2 animate-pulse"></div>
              <h3 className="font-medium flex items-center">
                <Sparkles className="h-4 w-4 mr-1" /> 
                AI Assistant
              </h3>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-eclinic-700 h-8 w-8 p-0"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Messages container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map(message => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user' 
                      ? 'bg-eclinic-600 text-white' 
                      : 'bg-white text-gray-800 border border-gray-200'
                  }`}
                >
                  {message.isTyping ? (
                    <TypingIndicator />
                  ) : (
                    <>
                      <p className="text-sm">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input area */}
          <div className="p-3 border-t border-gray-200 bg-white rounded-b-md">
            <div className="flex items-center gap-2">
              <textarea 
                ref={inputRef}
                className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-eclinic-600 text-sm min-h-[40px] max-h-[120px] resize-none"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                rows={1}
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
                size="icon"
                className="bg-eclinic-600 hover:bg-eclinic-700 h-10 w-10"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default LiveChat;
