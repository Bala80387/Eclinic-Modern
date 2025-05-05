
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MedicineCatalog from '@/components/medicine/MedicineCatalog';
import { Separator } from '@/components/ui/separator';

const MedicinePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-r from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                Medical <span className="text-eclinic-600">Medicines & Healthcare Products</span>
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Browse our selection of high-quality medicines, pills, and syrups. 
                Order online with secure UPI payment and track your delivery in real-time.
              </p>
            </div>
          </div>
        </section>
        
        <Separator className="my-2" />
        
        <MedicineCatalog />
      </main>
      <Footer />
    </div>
  );
};

export default MedicinePage;
