
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Package, MapPin, CheckCircle, Truck, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import DeliveryMap from '@/components/tablets/DeliveryMap';

const OrderTrackingPage = () => {
  const { trackingId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [order, setOrder] = useState(null);
  const [currentStatus, setCurrentStatus] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // In a real app, this would be an API call
    // For now, we'll use localStorage as a mock database
    const savedOrder = localStorage.getItem('lastOrder');
    
    if (savedOrder) {
      const parsedOrder = JSON.parse(savedOrder);
      if (parsedOrder.trackingId === trackingId) {
        setOrder(parsedOrder);
        
        // Set the current status based on the order status
        const statusMap = {
          'Processing': 0,
          'Shipped': 1,
          'Out for Delivery': 2,
          'Delivered': 3
        };
        
        setCurrentStatus(statusMap[parsedOrder.status] || 0);
        
        // Simulate order progress
        const timer = setTimeout(() => {
          if (currentStatus < 3) {
            setCurrentStatus(prev => prev + 1);
            
            const newStatusArray = ['Processing', 'Shipped', 'Out for Delivery', 'Delivered'];
            const newStatus = newStatusArray[currentStatus + 1];
            
            const updatedOrder = {
              ...parsedOrder,
              status: newStatus
            };
            
            localStorage.setItem('lastOrder', JSON.stringify(updatedOrder));
            setOrder(updatedOrder);
            
            toast({
              title: `Order ${newStatus}`,
              description: `Your order status has been updated to ${newStatus}`,
            });
          }
        }, 30000); // Update status every 30 seconds for demo
        
        return () => clearTimeout(timer);
      } else {
        toast({
          title: "Tracking ID Not Found",
          description: "The requested tracking ID does not match any recent orders.",
          variant: "destructive"
        });
      }
    } else {
      toast({
        title: "Order Not Found",
        description: "No recent order information available.",
        variant: "destructive"
      });
    }
  }, [trackingId, navigate, toast, currentStatus]);

  if (!order) {
    return (
      <div className="page-transition">
        <Navbar />
        <main className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>Loading order information...</p>
            <Button 
              variant="outline" 
              onClick={() => navigate('/tablets')}
              className="mt-4"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Tablets
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const statusSteps = [
    { label: 'Order Processing', icon: Package, date: new Date(order.orderDate) },
    { label: 'Shipped', icon: Truck, date: new Date(Date.parse(order.orderDate) + 24 * 60 * 60 * 1000) },
    { label: 'Out for Delivery', icon: MapPin, date: new Date(Date.parse(order.orderDate) + 3 * 24 * 60 * 60 * 1000) },
    { label: 'Delivered', icon: CheckCircle, date: new Date(Date.parse(order.orderDate) + 4 * 24 * 60 * 60 * 1000) }
  ];

  return (
    <div className="page-transition">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/tablets')}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Tablets
          </Button>
          
          <div className="text-center mb-10">
            <h1 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Track Your Order
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <div className="flex items-center">
                <span className="text-gray-500 dark:text-gray-400 mr-2">Tracking ID:</span>
                <Badge variant="outline" className="text-lg font-mono">{order.trackingId}</Badge>
              </div>
              <div className="flex items-center">
                <span className="text-gray-500 dark:text-gray-400 mr-2">Order ID:</span>
                <Badge variant="outline" className="text-lg font-mono">{order.orderId}</Badge>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-500 dark:text-gray-400">
                  {new Date(order.orderDate).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Order Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                    
                    <div className="space-y-8">
                      {statusSteps.map((step, index) => {
                        const StepIcon = step.icon;
                        const isCompleted = index <= currentStatus;
                        const isCurrent = index === currentStatus;
                        
                        return (
                          <div key={index} className="relative pl-10 pb-1">
                            <div className={`absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full z-10 
                              ${isCompleted 
                                  ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300' 
                                  : 'bg-gray-100 text-gray-400 dark:bg-gray-800'
                              }
                              ${isCurrent ? 'ring-2 ring-offset-2 ring-green-500 dark:ring-offset-gray-900' : ''}
                            `}>
                              <StepIcon className="h-4 w-4" />
                            </div>
                            
                            <div>
                              <h3 className={`font-medium ${isCompleted ? 'text-green-600 dark:text-green-400' : 'text-gray-500'}`}>
                                {step.label}
                              </h3>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {isCurrent ? 'Current status' : isCompleted ? 'Completed' : 'Pending'}
                              </p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {isCompleted || isCurrent 
                                  ? (index < 3 ? step.date.toLocaleString() : 'Expected by ' + step.date.toLocaleDateString()) 
                                  : 'Expected by ' + step.date.toLocaleDateString()
                                }
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Live Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <DeliveryMap status={currentStatus} />
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-20 h-20 rounded bg-gray-100 dark:bg-gray-800 overflow-hidden flex-shrink-0">
                      <img 
                        src={order.tablet.image} 
                        alt={order.tablet.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80";
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{order.tablet.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Category: {order.tablet.category}
                      </p>
                      <div className="mt-1 font-medium text-eclinic-600">
                        ₹{order.tablet.price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div>
                    <h3 className="font-medium mb-2">Shipping Address</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {order.customer.fullName}<br />
                      {order.customer.address}<br />
                      {order.customer.city}, {order.customer.state} {order.customer.pincode}<br />
                      Phone: {order.customer.phone}
                    </p>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div>
                    <h3 className="font-medium mb-2">Payment Information</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Method: {order.paymentMethod === 'upi' ? 'UPI' : 'Cash on Delivery'}<br />
                      Status: <span className="text-green-600 dark:text-green-400 font-medium">Paid</span><br />
                      Date: {new Date(order.orderDate).toLocaleDateString()}
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-4 text-center">
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/tablets')}
                >
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderTrackingPage;
