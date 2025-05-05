
import React from 'react';
import { MapPin, Navigation, Home } from 'lucide-react';

const DeliveryMap = ({ status }) => {
  // In a real app, this would be an actual map component with real GPS data
  // For this demo, we'll create a simple visual representation
  
  return (
    <div className="relative h-60 bg-gray-100 dark:bg-gray-800 rounded-md overflow-hidden">
      {/* Simple map background pattern */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 opacity-30">
        {Array(48).fill(0).map((_, i) => (
          <div key={i} className="border border-gray-200 dark:border-gray-700"></div>
        ))}
      </div>
      
      {/* Warehouse location */}
      <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-blue-100 dark:bg-blue-900 p-1 rounded-full">
          <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <p className="text-xs font-medium mt-1 text-center">Warehouse</p>
      </div>
      
      {/* Delivery location */}
      <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
        <div className="bg-green-100 dark:bg-green-900 p-1 rounded-full">
          <Home className="h-6 w-6 text-green-600 dark:text-green-400" />
        </div>
        <p className="text-xs font-medium mt-1 text-center">Your Location</p>
      </div>
      
      {/* Delivery vehicle that moves based on status */}
      {status > 0 && status < 3 && (
        <div className={`absolute transition-all duration-1000 ease-in-out
          ${status === 1 ? 'top-1/3 left-1/3' : status === 2 ? 'bottom-1/3 right-1/3' : ''}
        `}>
          <div className="bg-red-100 dark:bg-red-900 p-1 rounded-full animate-pulse">
            <Navigation className="h-6 w-6 text-red-600 dark:text-red-400" />
          </div>
          <p className="text-xs font-medium mt-1 text-center">Delivery</p>
        </div>
      )}
      
      {/* Path line */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M25,40 Q50,60 75,80 T150,120"
          fill="none"
          stroke="#9CA3AF"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
      </svg>
      
      {/* Map information overlay */}
      <div className="absolute bottom-2 left-2 right-2 bg-white dark:bg-gray-900 bg-opacity-70 dark:bg-opacity-70 p-2 rounded-md text-xs">
        {status === 0 && "Order is being processed at our warehouse"}
        {status === 1 && "Your order has been shipped and is on its way"}
        {status === 2 && "Your order is out for delivery and will arrive soon"}
        {status === 3 && "Your order has been delivered successfully"}
      </div>
    </div>
  );
};

export default DeliveryMap;
