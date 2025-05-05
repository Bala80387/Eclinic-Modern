
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import QRCode from '@/components/medicine/QRCode';

const UpiPaymentForm = () => {
  const [upiId, setUpiId] = useState('');
  const [showQr, setShowQr] = useState(false);
  
  const handleVerify = () => {
    if (upiId.includes('@')) {
      setShowQr(true);
    }
  };
  
  return (
    <div className="space-y-4">
      {!showQr ? (
        <>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="upiId">Enter UPI ID</Label>
            <div className="flex space-x-2">
              <Input 
                id="upiId"
                placeholder="username@upi" 
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
              <Button 
                onClick={handleVerify}
                disabled={!upiId.includes('@')}
              >
                Verify
              </Button>
            </div>
            {upiId && !upiId.includes('@') && (
              <p className="text-sm text-red-500 mt-1">
                Please enter a valid UPI ID (e.g., name@upi)
              </p>
            )}
          </div>
          
          <div className="flex items-center gap-2 mt-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/2560px-UPI-Logo-vector.svg.png" 
                alt="UPI" 
                className="h-6" 
              />
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/2560px-Google_Pay_Logo.svg.png" 
                alt="Google Pay" 
                className="h-6" 
              />
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PhonePe_Logo.svg/1200px-PhonePe_Logo.svg.png" 
                alt="PhonePe" 
                className="h-6" 
              />
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/2560px-Paytm_Logo_%28standalone%29.svg.png" 
                alt="Paytm" 
                className="h-6" 
              />
            </div>
          </div>
        </>
      ) : (
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md flex flex-col items-center">
            <p className="text-sm text-center mb-4">Scan this QR code with your UPI app to proceed with payment</p>
            <QRCode />
            <p className="text-sm text-center mt-4">UPI ID: hospital@eclinic</p>
          </div>
          <div className="text-center">
            <Button 
              variant="outline"
              onClick={() => setShowQr(false)}
              className="mt-2"
            >
              Back to UPI ID
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpiPaymentForm;
