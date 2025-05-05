
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, Check, AlertTriangle, HelpCircle } from 'lucide-react';

const TermsOfServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition animate-fade-in">
      <Navbar />
      <main>
        <section className="pt-32 pb-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <FileText className="h-12 w-12 text-eclinic-600 mx-auto mb-4" />
              <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">Terms of Service</h1>
              <p className="text-lg text-gray-600">
                Please read these terms carefully before using our services.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="flex items-center mb-6">
                <Check className="h-6 w-6 text-eclinic-600 mr-3" />
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-0 mb-0">Acceptance of Terms</h2>
              </div>
              <p>
                By accessing or using the eClinic service, website, or any applications (collectively, the "Service") made available by eClinic, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service.
              </p>

              <div className="flex items-center mb-6 mt-10">
                <FileText className="h-6 w-6 text-eclinic-600 mr-3" />
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-0 mb-0">Description of Service</h2>
              </div>
              <p>
                eClinic provides an online platform for scheduling medical appointments, accessing telehealth services, and managing health information. The Service may include, but is not limited to:
              </p>
              <ul>
                <li>Scheduling appointments with healthcare providers</li>
                <li>Telehealth consultations</li>
                <li>Accessing medical information</li>
                <li>Communication with healthcare providers</li>
                <li>Payment processing for medical services</li>
              </ul>
              <p>
                The Service is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>

              <div className="flex items-center mb-6 mt-10">
                <AlertTriangle className="h-6 w-6 text-eclinic-600 mr-3" />
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-0 mb-0">Medical Disclaimer</h2>
              </div>
              <p>
                The content provided through the Service is for informational purposes only. The information provided is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Never disregard professional medical advice or delay in seeking it because of something you have read on our website or app.
              </p>
              <p>
                In case of a medical emergency, call your doctor or emergency services immediately. eClinic does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on the Service.
              </p>

              <h2 className="text-2xl font-heading font-bold text-gray-900 mt-10 mb-4">User Accounts</h2>
              <p>
                When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
              </p>
              <p>
                You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. We encourage you to use a "strong" password (passwords that use a combination of upper and lower case letters, numbers, and symbols) for your account.
              </p>

              <h2 className="text-2xl font-heading font-bold text-gray-900 mt-10 mb-4">Payment Terms</h2>
              <p>
                By providing a credit card or other payment method accepted by eClinic, you represent and warrant that you are authorized to use the designated payment method. You authorize eClinic to charge your payment method for the total amount of your appointment or service fees.
              </p>
              <p>
                Payment for services is due at the time of booking unless otherwise specified. Cancellation policies may apply and are determined by individual healthcare providers.
              </p>

              <h2 className="text-2xl font-heading font-bold text-gray-900 mt-10 mb-4">Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, in no event shall eClinic, its affiliates, directors, employees, agents, or licensors be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data, or other intangible losses.
              </p>

              <h2 className="text-2xl font-heading font-bold text-gray-900 mt-10 mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. It is your responsibility to review these Terms periodically for changes. Your continued use of the Service following the posting of any changes to these Terms constitutes acceptance of those changes.
              </p>

              <div className="flex items-center mb-6 mt-10">
                <HelpCircle className="h-6 w-6 text-eclinic-600 mr-3" />
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-0 mb-0">Contact Us</h2>
              </div>
              <p>
                If you have any questions about these Terms, please contact us:
              </p>
              <ul>
                <li><strong>By email:</strong> legal@eclinic.com</li>
                <li><strong>By phone:</strong> +91 98765 43210</li>
                <li><strong>By mail:</strong> 123 Healthcare Avenue, Chennai, Tamil Nadu, India 600001</li>
              </ul>
              
              <p className="text-sm text-gray-500 mt-10">Last Updated: July 1, 2023</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
