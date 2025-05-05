
import React from 'react';
import { X, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent } from '@/components/ui/popover';

const ChatUnavailable = ({ onClose }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover open={true}>
        <PopoverContent 
          className="w-80 md:w-96 p-0 flex flex-col"
          align="end"
        >
          <div className="bg-eclinic-600 text-white p-3 flex justify-between items-center rounded-t-md">
            <h3 className="font-medium">Live Support</h3>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white hover:bg-eclinic-700 h-8 w-8 p-0"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="p-6 text-center bg-white rounded-b-md">
            <div className="mx-auto w-40 h-40 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Support unavailable" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            
            <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
              We're Currently Offline
            </h3>
            
            <div className="flex items-center justify-center text-amber-600 mb-3">
              <Clock className="h-5 w-5 mr-2" />
              <p className="text-sm font-medium">Outside Working Hours</p>
            </div>
            
            <p className="text-gray-600 mb-4">
              Our support team is available Monday to Friday, 9 AM to 5 PM IST. Please check back during working hours.
            </p>
            
            <div className="space-y-3">
              <p className="text-sm text-gray-500">
                Meanwhile, you can:
              </p>
              <Button 
                variant="outline" 
                className="w-full border-eclinic-600 text-eclinic-600 hover:bg-eclinic-50"
              >
                Email Us
              </Button>
              <Button 
                className="w-full bg-eclinic-600 hover:bg-eclinic-700"
              >
                Leave a Message
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ChatUnavailable;
