
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowRight, CreditCard } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import UpiPaymentForm from '../medicine/UpiPaymentForm';

interface CheckoutFormProps {
  medicine: {
    id: string;
    name: string;
  };
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ medicine }) => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("upi");
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate order placement
    const trackingId = `TR${Math.floor(Math.random() * 10000000)}`;
    
    // Navigate to the order tracking page
    navigate(`/medicine/order-tracking/${trackingId}`);
  };
  
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Delivery Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" required />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john.doe@example.com" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" placeholder="+91 98765 43210" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Full Address</Label>
              <Textarea id="address" placeholder="1234 Main St, Apartment 56, City, State, Pincode" required />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Payment Method</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <RadioGroup defaultValue="upi" onValueChange={setPaymentMethod} className="space-y-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="upi" id="upi" />
                <Label htmlFor="upi" className="flex-1 cursor-pointer">
                  <div className="flex items-center">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/2560px-UPI-Logo-vector.svg.png" 
                      alt="UPI" 
                      className="h-5 mr-2"
                    />
                    <span>UPI Payment</span>
                  </div>
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cod" id="cod" />
                <Label htmlFor="cod" className="flex-1 cursor-pointer">Cash on Delivery</Label>
              </div>
            </RadioGroup>
            
            <Separator className="my-4" />
            
            {paymentMethod === 'upi' && (
              <UpiPaymentForm />
            )}
            
            {paymentMethod === 'cod' && (
              <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-md">
                <p className="text-sm text-yellow-800 dark:text-yellow-400">
                  Please have the exact amount ready at the time of delivery. Our delivery agent will provide you with a receipt.
                </p>
              </div>
            )}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-eclinic-600 hover:bg-eclinic-700">
              Place Order
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </form>
  );
};

export default CheckoutForm;
