
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TruckIcon } from 'lucide-react';

interface OrderSummaryProps {
  medicine: {
    name: string;
    price: number;
    image: string;
  };
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ medicine }) => {
  // Calculate additional costs
  const deliveryFee = 0; // Free delivery
  const tax = Math.round(medicine.price * 0.18); // 18% GST
  const total = medicine.price + tax + deliveryFee;

  return (
    <Card className="sticky top-32">
      <CardHeader>
        <CardTitle className="text-xl">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="h-16 w-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0">
            <img 
              src={medicine.image} 
              alt={medicine.name} 
              className="h-full w-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80";
              }}
            />
          </div>
          <div>
            <p className="font-medium text-gray-900 dark:text-gray-100">{medicine.name}</p>
            <p className="text-gray-600 dark:text-gray-400">₹{medicine.price.toLocaleString()}</p>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
            <span>₹{medicine.price.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">GST (18%)</span>
            <span>₹{tax.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Delivery Fee</span>
            <span className="text-green-600">{deliveryFee === 0 ? 'Free' : `₹${deliveryFee}`}</span>
          </div>
        </div>

        <Separator />

        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>₹{total.toLocaleString()}</span>
        </div>

        <div className="bg-green-50 dark:bg-green-950 p-2 rounded-md flex items-center mt-2">
          <TruckIcon className="h-4 w-4 mr-2 text-green-600 dark:text-green-400" />
          <span className="text-sm text-green-800 dark:text-green-400">Free delivery within 24-48 hours</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderSummary;
