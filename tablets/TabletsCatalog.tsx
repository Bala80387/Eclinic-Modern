
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { tabletsData } from '@/data/tabletsData';
import { Star, ShoppingCart, TruckIcon } from 'lucide-react';

const TabletsCatalog = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredTablets = activeCategory === "all" 
    ? tabletsData 
    : tabletsData.filter(tablet => tablet.category === activeCategory);

  const handleBuyNow = (tabletId: string) => {
    navigate(`/tablets/checkout/${tabletId}`);
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100 dark:bg-gray-800">
              <TabsTrigger value="all">All Devices</TabsTrigger>
              <TabsTrigger value="medical">Medical Tablets</TabsTrigger>
              <TabsTrigger value="monitoring">Monitoring Devices</TabsTrigger>
              <TabsTrigger value="diagnostic">Diagnostic Tools</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTablets.map((tablet) => (
                <Card key={tablet.id} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="aspect-video w-full overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800 mb-4">
                      <img 
                        src={tablet.image} 
                        alt={tablet.name}
                        className="h-full w-full object-cover object-center"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80";
                        }}
                      />
                    </div>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-heading">{tablet.name}</CardTitle>
                      <Badge variant="outline" className="bg-eclinic-50 text-eclinic-700 border-eclinic-200">
                        {tablet.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{tablet.description}</p>
                    <div className="flex items-center gap-1 mb-2">
                      {Array(5).fill(0).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < tablet.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                        />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">({tablet.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center mt-4">
                      <TruckIcon className="h-4 w-4 mr-2 text-green-500" />
                      <span className="text-sm text-gray-500">
                        {tablet.inStock ? "In Stock - Free Delivery" : "Out of Stock"}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2 flex justify-between items-center">
                    <div className="text-xl font-bold text-eclinic-700 dark:text-eclinic-400">₹{tablet.price.toLocaleString()}</div>
                    <Button 
                      onClick={() => handleBuyNow(tablet.id)}
                      className="bg-eclinic-600 hover:bg-eclinic-700"
                      disabled={!tablet.inStock}
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

export default TabletsCatalog;
