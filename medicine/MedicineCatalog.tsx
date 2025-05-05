
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { medicineData } from '@/data/medicineData';
import { Star, ShoppingCart, TruckIcon } from 'lucide-react';

const MedicineCatalog = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredMedicines = activeCategory === "all" 
    ? medicineData 
    : medicineData.filter(medicine => medicine.category === activeCategory);

  const handleBuyNow = (medicineId: string) => {
    navigate(`/medicine/checkout/${medicineId}`);
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100 dark:bg-gray-800">
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="pills">Pills</TabsTrigger>
              <TabsTrigger value="syrup">Syrups</TabsTrigger>
              <TabsTrigger value="antibiotics">Antibiotics</TabsTrigger>
              <TabsTrigger value="vitamins">Vitamins</TabsTrigger>
              <TabsTrigger value="tablets">Tablets</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMedicines.map((medicine) => (
                <Card key={medicine.id} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="aspect-video w-full overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800 mb-4">
                      <img 
                        src={medicine.image} 
                        alt={medicine.name}
                        className="h-full w-full object-cover object-center"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80";
                        }}
                      />
                    </div>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-heading">{medicine.name}</CardTitle>
                      <Badge variant="outline" className="bg-eclinic-50 text-eclinic-700 border-eclinic-200">
                        {medicine.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{medicine.description}</p>
                    <div className="flex items-center gap-1 mb-2">
                      {Array(5).fill(0).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < medicine.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                        />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">({medicine.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center mt-4">
                      <TruckIcon className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-sm text-gray-500">
                        {medicine.inStock ? "In Stock - Free Delivery" : "Out of Stock"}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2 flex justify-between items-center">
                    <div className="text-xl font-bold text-eclinic-700 dark:text-eclinic-400">₹{medicine.price.toLocaleString()}</div>
                    <Button 
                      onClick={() => handleBuyNow(medicine.id)}
                      className="bg-eclinic-600 hover:bg-eclinic-700"
                      disabled={!medicine.inStock}
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Buy Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MedicineCatalog;
