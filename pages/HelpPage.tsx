
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LiveChat from '@/components/chat/LiveChat';
import { Button } from '@/components/ui/button';
import { ChevronRight, Headphones, HelpCircle, Phone, Mail, MessageSquare } from 'lucide-react';

const HelpPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqData = [
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment through our website by visiting the Appointment page, or by calling our helpline at +91 98765 43210. You can also use our mobile app."
    },
    {
      question: "What insurance plans do you accept?",
      answer: "We accept most major insurance plans and government health schemes. Please contact our administrative office for specific details about your insurance coverage."
    },
    {
      question: "How can I get my medical records?",
      answer: "You can request your medical records by filling out a form at our reception or by sending an email to records@eclinic.com with your details."
    },
    {
      question: "Are your doctors available for online consultation?",
      answer: "Yes, many of our doctors offer online consultations. You can book a virtual appointment through our Consultation page or mobile app."
    },
    {
      question: "What are your working hours?",
      answer: "Our regular hours are Monday to Friday: 8:00 AM - 8:00 PM, Saturday: 9:00 AM - 5:00 PM, and Sunday: Emergency services only."
    }
  ];

  return (
    <div className="page-transition">
      <Navbar />
      <main>
        <section className="pt-32 pb-16 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">
                How Can We <span className="text-eclinic-600">Help You?</span>
              </h1>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Find answers to your questions and get the support you need regarding our medical services and facilities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center border border-gray-100">
                <Phone className="h-12 w-12 text-eclinic-600 mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">
                  Speak directly with our support team
                </p>
                <p className="text-eclinic-600 font-medium">+91 98765 43210</p>
              </div>

              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center border border-gray-100">
                <Mail className="h-12 w-12 text-eclinic-600 mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">
                  Send us your queries anytime
                </p>
                <p className="text-eclinic-600 font-medium">support@eclinic.com</p>
              </div>

              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 text-center border border-gray-100">
                <MessageSquare className="h-12 w-12 text-eclinic-600 mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold mb-2">Live Chat</h3>
                <p className="text-gray-600 mb-4">
                  Chat with our representatives
                </p>
                <Button size="sm" className="bg-eclinic-600 hover:bg-eclinic-700">
                  Start Chat
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Find quick answers to common questions about our services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-heading font-medium text-gray-900 mb-3 flex items-start">
                      <HelpCircle className="h-6 w-6 text-eclinic-600 mr-2 flex-shrink-0 mt-0.5" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 ml-8">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="text-center mt-10">
                <p className="text-gray-600 mb-4">
                  Didn't find what you were looking for?
                </p>
                <Button className="bg-eclinic-600 hover:bg-eclinic-700">
                  <Headphones className="mr-2 h-5 w-5" />
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <LiveChat />
    </div>
  );
};

export default HelpPage;
