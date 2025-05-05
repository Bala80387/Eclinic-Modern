
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Map, ArrowRight, FileText, Phone, Calendar, CreditCard, Users, User, Brain, Bone, Sun, Utensils } from 'lucide-react';

const SitemapPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sitemapSections = [
    {
      title: "Main Pages",
      icon: <Map className="h-5 w-5 text-eclinic-600" />,
      links: [
        { name: "Home", path: "/" },
        { name: "Doctors", path: "/doctors" },
        { name: "Book Appointment", path: "/appointment" },
        { name: "Online Consultation", path: "/consultation" },
        { name: "Emergency Services", path: "/emergency" },
        { name: "Ambulance Service", path: "/ambulance" },
        { name: "Help Center", path: "/help" },
      ]
    },
    {
      title: "Medical Departments",
      icon: <Users className="h-5 w-5 text-eclinic-600" />,
      links: [
        { name: "Dental Care", path: "/dental", icon: <User className="h-4 w-4" /> },
        { name: "Cardiology", path: "/cardiology", icon: <User className="h-4 w-4" /> },
        { name: "ENT Services", path: "/ent", icon: <User className="h-4 w-4" /> },
        { name: "Neurology", path: "/neurologist", icon: <Brain className="h-4 w-4" /> },
        { name: "Orthopedic Surgery", path: "/orthopedic", icon: <Bone className="h-4 w-4" /> },
        { name: "Dermatology", path: "/dermatology", icon: <Sun className="h-4 w-4" /> },
        { name: "Gastroenterology", path: "/gastroenterology", icon: <Utensils className="h-4 w-4" /> },
      ]
    },
    {
      title: "Patient Services",
      icon: <Calendar className="h-5 w-5 text-eclinic-600" />,
      links: [
        { name: "Book Appointment", path: "/appointment" },
        { name: "Online Consultation", path: "/consultation" },
        { name: "Doctor Call", path: "/doctor-call/1" },
        { name: "Payment", path: "/payment" },
        { name: "Directions", path: "/directions" },
      ]
    },
    {
      title: "Legal Information",
      icon: <FileText className="h-5 w-5 text-eclinic-600" />,
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
      ]
    },
    {
      title: "Contact Us",
      icon: <Phone className="h-5 w-5 text-eclinic-600" />,
      links: [
        { name: "Help Center", path: "/help" },
        { name: "Ambulance Service", path: "/ambulance" },
      ]
    },
  ];

  return (
    <div className="page-transition animate-fade-in">
      <Navbar />
      <main className="min-h-screen">
        <section className="pt-32 pb-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Map className="h-12 w-12 text-eclinic-600 mx-auto mb-4" />
              <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">Sitemap</h1>
              <p className="text-lg text-gray-600">
                Find all the pages on our website organized in one place.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sitemapSections.map((section, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 animate-fade-up" style={{animationDelay: `${index * 100}ms`}}>
                  <div className="flex items-center mb-4">
                    {section.icon}
                    <h2 className="ml-2 text-xl font-heading font-bold text-gray-900">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="hover:text-eclinic-600 transition-colors">
                        <Link to={link.path} className="flex items-center group">
                          {link.icon && <span className="mr-2">{link.icon}</span>}
                          <span>{link.name}</span>
                          <ArrowRight className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SitemapPage;
