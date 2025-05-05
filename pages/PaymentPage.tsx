
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { CheckCircle, CreditCard, Calendar, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  // Format card number with spaces every 4 digits
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];

    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  // Format expiry date as MM/YY
  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    
    return value;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentComplete(true);
      
      // Redirect to home page after showing success message
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 2000);
  };

  const consultationPrice = 999;

  return (
    <div className="page-transition">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-r from-blue-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">
                Payment for <span className="text-eclinic-600">Online Consultation</span>
              </h1>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Complete your payment details to proceed with your virtual consultation.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {paymentComplete ? (
              <div className="text-center py-12 animate-fade-up">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-heading font-bold mb-4">Payment Successful!</h2>
                <p className="text-gray-600 mb-8">
                  Your online consultation has been booked. You will receive a confirmation email with the details shortly.
                </p>
                <Button onClick={() => navigate('/')} className="bg-eclinic-600 hover:bg-eclinic-700">
                  Return to Home
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <CreditCard className="mr-2 h-5 w-5 text-eclinic-600" />
                        Payment Information
                      </CardTitle>
                      <CardDescription>Enter your card details to complete the payment.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit}>
                        <div className="grid gap-6">
                          <div className="grid gap-2">
                            <Label htmlFor="cardName">Name on card</Label>
                            <Input 
                              id="cardName" 
                              placeholder="John Smith"
                              value={cardName}
                              onChange={(e) => setCardName(e.target.value)}
                              required
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="cardNumber">Card number</Label>
                            <div className="relative">
                              <Input 
                                id="cardNumber" 
                                placeholder="1234 5678 9012 3456"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                                maxLength={19}
                                required
                              />
                              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <svg className="h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
                                  <path d="M2 10H22" stroke="currentColor" strokeWidth="2" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="expiry">Expiry date</Label>
                              <div className="relative">
                                <Input 
                                  id="expiry" 
                                  placeholder="MM/YY"
                                  value={expiry}
                                  onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                                  maxLength={5}
                                  required
                                />
                                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                              </div>
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="cvv">CVV</Label>
                              <div className="relative">
                                <Input 
                                  id="cvv" 
                                  placeholder="123"
                                  value={cvv}
                                  onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                                  maxLength={3}
                                  required
                                />
                                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-end mt-4">
                            <Button 
                              type="submit" 
                              className="bg-eclinic-600 hover:bg-eclinic-700"
                              disabled={isProcessing}
                            >
                              {isProcessing ? 'Processing...' : 'Pay Now'}
                            </Button>
                          </div>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Online Consultation</span>
                          <span className="font-medium">₹{consultationPrice}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">GST (18%)</span>
                          <span className="font-medium">₹{Math.round(consultationPrice * 0.18)}</span>
                        </div>
                        <div className="border-t border-gray-200 pt-4 flex justify-between items-center font-bold">
                          <span>Total</span>
                          <span className="text-lg">₹{consultationPrice + Math.round(consultationPrice * 0.18)}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-gray-50 rounded-b-lg text-sm text-gray-600">
                      <div className="flex items-center">
                        <Lock className="h-4 w-4 mr-2 text-eclinic-600" />
                        <span>Secure 256-bit SSL encrypted payment</span>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentPage;
