
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import CheckoutForm from '@/components/tablets/CheckoutForm';
import OrderSummary from '@/components/tablets/OrderSummary';
import { medicineData } from '@/data/medicineData';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const TabletCheckoutPage = () => {
  const { medicineId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [medicine, setMedicine] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the medicine with the matching ID
    const selectedMedicine = medicineData.find(m => m.id === medicineId);
    
    if (selectedMedicine) {
      setMedicine(selectedMedicine);
    } else {
      toast({
        title: "Product Not Found",
        description: "The requested medicine could not be found.",
        variant: "destructive"
      });
      navigate('/medicine');
    }
  }, [medicineId, navigate, toast]);

  if (!medicine) {
    return (
      <div className="page-transition min-h-screen">
        <Navbar />
        <main className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page-transition">
      <Navbar />
      <main className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/medicine')}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Medicines
          </Button>
          
          <h1 className="text-3xl font-heading font-bold text-gray-900 dark:text-white mb-4">
            Checkout: {medicine.name}
          </h1>
          
          <Separator className="my-6" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CheckoutForm medicine={medicine} />
            </div>
            <div>
              <OrderSummary medicine={medicine} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TabletCheckoutPage;
