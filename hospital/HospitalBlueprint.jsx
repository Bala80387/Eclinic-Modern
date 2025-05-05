
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Landmark, ParkingCircle, BedDouble, Circle, CircleDot } from 'lucide-react';

const HospitalBlueprint = () => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-eclinic-600/20 to-dental-light/20">
        <CardTitle className="flex items-center text-2xl">
          <Building className="mr-2 h-5 w-5" />
          Hospital Layout
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <Tabs defaultValue="ground">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="ground">Ground Floor</TabsTrigger>
            <TabsTrigger value="first">First Floor</TabsTrigger>
            <TabsTrigger value="second">Second Floor</TabsTrigger>
          </TabsList>
          
          <TabsContent value="ground" className="mt-4">
            <div className="relative w-full aspect-[16/9] bg-gray-100 rounded-md overflow-hidden">
              {/* Blueprint SVG */}
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 800 450"
                className="blueprint"
              >
                {/* Outer walls */}
                <rect x="50" y="50" width="700" height="350" fill="white" stroke="#333" strokeWidth="3" />
                
                {/* Main entrance */}
                <rect x="375" y="50" width="50" height="10" fill="#8B5CF6" stroke="#333" strokeWidth="2" />
                <text x="400" y="40" textAnchor="middle" fill="#333">Main Entrance</text>
                
                {/* Reception area */}
                <rect x="325" y="100" width="150" height="80" fill="#D1D5DB" stroke="#333" strokeWidth="2" />
                <text x="400" y="140" textAnchor="middle" fill="#333">Reception</text>
                
                {/* Waiting area */}
                <rect x="150" y="100" width="150" height="150" fill="#E5DEFF" stroke="#333" strokeWidth="2" />
                <text x="225" y="175" textAnchor="middle" fill="#333">Waiting Area</text>
                
                {/* Emergency */}
                <rect x="500" y="100" width="180" height="120" fill="#FEC6A1" stroke="#333" strokeWidth="2" />
                <text x="590" y="160" textAnchor="middle" fill="#333">Emergency Department</text>
                
                {/* Pharmacy */}
                <rect x="150" y="275" width="150" height="100" fill="#D3E4FD" stroke="#333" strokeWidth="2" />
                <text x="225" y="325" textAnchor="middle" fill="#333">Pharmacy</text>
                
                {/* Cafeteria */}
                <rect x="325" y="275" width="150" height="100" fill="#FDE1D3" stroke="#333" strokeWidth="2" />
                <text x="400" y="325" textAnchor="middle" fill="#333">Cafeteria</text>
                
                {/* Restrooms */}
                <rect x="500" y="275" width="75" height="50" fill="#F1F0FB" stroke="#333" strokeWidth="2" />
                <text x="537" y="300" textAnchor="middle" fill="#333">Restrooms</text>
                
                {/* Parking */}
                <rect x="600" y="275" width="80" height="100" fill="#F2FCE2" stroke="#333" strokeWidth="2" />
                <text x="640" y="325" textAnchor="middle" fill="#333">Parking</text>
              </svg>
              
              {/* Legend */}
              <div className="absolute bottom-2 right-2 bg-white/90 p-2 rounded-md text-xs">
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 bg-[#E5DEFF] mr-1"></div>
                  <span>Waiting Area</span>
                </div>
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 bg-[#FEC6A1] mr-1"></div>
                  <span>Emergency</span>
                </div>
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 bg-[#D3E4FD] mr-1"></div>
                  <span>Pharmacy</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#FDE1D3] mr-1"></div>
                  <span>Cafeteria</span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="first" className="mt-4">
            <div className="relative w-full aspect-[16/9] bg-gray-100 rounded-md overflow-hidden">
              {/* Blueprint SVG */}
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 800 450"
                className="blueprint"
              >
                {/* Outer walls */}
                <rect x="50" y="50" width="700" height="350" fill="white" stroke="#333" strokeWidth="3" />
                
                {/* Specialty departments */}
                <rect x="100" y="100" width="180" height="120" fill="#D6BCFA" stroke="#333" strokeWidth="2" />
                <text x="190" y="160" textAnchor="middle" fill="#333">Cardiology</text>
                
                <rect x="310" y="100" width="180" height="120" fill="#FFDEE2" stroke="#333" strokeWidth="2" />
                <text x="400" y="160" textAnchor="middle" fill="#333">Dental</text>
                
                <rect x="520" y="100" width="180" height="120" fill="#D3E4FD" stroke="#333" strokeWidth="2" />
                <text x="610" y="160" textAnchor="middle" fill="#333">ENT</text>
                
                {/* Examination rooms */}
                <rect x="100" y="250" width="100" height="80" fill="#F2FCE2" stroke="#333" strokeWidth="2" />
                <text x="150" y="290" textAnchor="middle" fill="#333">Exam 1</text>
                
                <rect x="220" y="250" width="100" height="80" fill="#F2FCE2" stroke="#333" strokeWidth="2" />
                <text x="270" y="290" textAnchor="middle" fill="#333">Exam 2</text>
                
                <rect x="340" y="250" width="100" height="80" fill="#F2FCE2" stroke="#333" strokeWidth="2" />
                <text x="390" y="290" textAnchor="middle" fill="#333">Exam 3</text>
                
                <rect x="460" y="250" width="100" height="80" fill="#F2FCE2" stroke="#333" strokeWidth="2" />
                <text x="510" y="290" textAnchor="middle" fill="#333">Exam 4</text>
                
                <rect x="580" y="250" width="100" height="80" fill="#F2FCE2" stroke="#333" strokeWidth="2" />
                <text x="630" y="290" textAnchor="middle" fill="#333">Exam 5</text>
              </svg>
              
              {/* Legend */}
              <div className="absolute bottom-2 right-2 bg-white/90 p-2 rounded-md text-xs">
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 bg-[#D6BCFA] mr-1"></div>
                  <span>Cardiology</span>
                </div>
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 bg-[#FFDEE2] mr-1"></div>
                  <span>Dental</span>
                </div>
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 bg-[#D3E4FD] mr-1"></div>
                  <span>ENT</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#F2FCE2] mr-1"></div>
                  <span>Exam Rooms</span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="second" className="mt-4">
            <div className="relative w-full aspect-[16/9] bg-gray-100 rounded-md overflow-hidden">
              {/* Blueprint SVG */}
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 800 450"
                className="blueprint"
              >
                {/* Outer walls */}
                <rect x="50" y="50" width="700" height="350" fill="white" stroke="#333" strokeWidth="3" />
                
                {/* Operation theaters */}
                <rect x="100" y="100" width="200" height="150" fill="#FEF7CD" stroke="#333" strokeWidth="2" />
                <text x="200" y="175" textAnchor="middle" fill="#333">Operation Theater 1</text>
                
                <rect x="320" y="100" width="200" height="150" fill="#FEF7CD" stroke="#333" strokeWidth="2" />
                <text x="420" y="175" textAnchor="middle" fill="#333">Operation Theater 2</text>
                
                <rect x="540" y="100" width="150" height="150" fill="#FFDEE2" stroke="#333" strokeWidth="2" />
                <text x="615" y="175" textAnchor="middle" fill="#333">Recovery</text>
                
                {/* ICU and patient rooms */}
                <rect x="100" y="270" width="250" height="100" fill="#E5DEFF" stroke="#333" strokeWidth="2" />
                <text x="225" y="320" textAnchor="middle" fill="#333">Intensive Care Unit</text>
                
                {/* Patient rooms */}
                <rect x="370" y="270" width="80" height="60" fill="#F1F0FB" stroke="#333" strokeWidth="2" />
                <text x="410" y="300" textAnchor="middle" fill="#333">Room 1</text>
                
                <rect x="460" y="270" width="80" height="60" fill="#F1F0FB" stroke="#333" strokeWidth="2" />
                <text x="500" y="300" textAnchor="middle" fill="#333">Room 2</text>
                
                <rect x="550" y="270" width="80" height="60" fill="#F1F0FB" stroke="#333" strokeWidth="2" />
                <text x="590" y="300" textAnchor="middle" fill="#333">Room 3</text>
                
                <rect x="370" y="340" width="80" height="60" fill="#F1F0FB" stroke="#333" strokeWidth="2" />
                <text x="410" y="370" textAnchor="middle" fill="#333">Room 4</text>
                
                <rect x="460" y="340" width="80" height="60" fill="#F1F0FB" stroke="#333" strokeWidth="2" />
                <text x="500" y="370" textAnchor="middle" fill="#333">Room 5</text>
                
                <rect x="550" y="340" width="80" height="60" fill="#F1F0FB" stroke="#333" strokeWidth="2" />
                <text x="590" y="370" textAnchor="middle" fill="#333">Room 6</text>
              </svg>
              
              {/* Legend */}
              <div className="absolute bottom-2 right-2 bg-white/90 p-2 rounded-md text-xs">
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 bg-[#FEF7CD] mr-1"></div>
                  <span>Operation Theaters</span>
                </div>
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 bg-[#FFDEE2] mr-1"></div>
                  <span>Recovery</span>
                </div>
                <div className="flex items-center mb-1">
                  <div className="w-3 h-3 bg-[#E5DEFF] mr-1"></div>
                  <span>ICU</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#F1F0FB] mr-1"></div>
                  <span>Patient Rooms</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-4 flex items-center text-sm text-gray-500">
          <Landmark className="h-4 w-4 mr-1" />
          <span>Navigate through floors to explore our hospital layout</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default HospitalBlueprint;
