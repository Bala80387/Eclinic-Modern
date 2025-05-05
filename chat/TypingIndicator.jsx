
import React from 'react';

const TypingIndicator = () => {
  return (
    <div className="flex space-x-2 p-2">
      <div className="w-2 h-2 bg-eclinic-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
      <div className="w-2 h-2 bg-eclinic-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
      <div className="w-2 h-2 bg-eclinic-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
    </div>
  );
};

export default TypingIndicator;
