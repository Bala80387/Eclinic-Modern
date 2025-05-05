
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, LockKeyhole, Eye, FileText } from 'lucide-react';

const PrivacyPolicyPage = () => {
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
              <Shield className="h-12 w-12 text-eclinic-600 mx-auto mb-4" />
              <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">Privacy Policy</h1>
              <p className="text-lg text-gray-600">
                Your privacy matters to us. This policy outlines how we collect, use, and protect your personal information.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div className="flex items-center mb-6">
                <LockKeyhole className="h-6 w-6 text-eclinic-600 mr-3" />
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-0 mb-0">Information We Collect</h2>
              </div>
              <p>
                We collect personal information that you voluntarily provide to us when you register on our website, express interest in obtaining information about us or our services, when you participate in activities on the website, or otherwise when you contact us.
              </p>
              <p>
                The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use. The personal information we collect may include:
              </p>
              <ul>
                <li><strong>Personal Information:</strong> Name, email address, phone number, and other similar contact data.</li>
                <li><strong>Health Information:</strong> Medical history, treatment records, and other health-related information necessary for your care.</li>
                <li><strong>Payment Information:</strong> Credit card details, banking information, and billing address.</li>
              </ul>

              <div className="flex items-center mb-6 mt-10">
                <Eye className="h-6 w-6 text-eclinic-600 mr-3" />
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-0 mb-0">How We Use Your Information</h2>
              </div>
              <p>
                We use the information we collect in various ways, including to:
              </p>
              <ul>
                <li>Provide, operate, and maintain our website and services</li>
                <li>Improve, personalize, and expand our website and services</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you, either directly or through one of our partners, for customer service, updates, and other information relating to the website</li>
                <li>Process your transactions</li>
                <li>Send you emails and text messages for appointment reminders</li>
                <li>Find and prevent fraud</li>
              </ul>

              <div className="flex items-center mb-6 mt-10">
                <FileText className="h-6 w-6 text-eclinic-600 mr-3" />
                <h2 className="text-2xl font-heading font-bold text-gray-900 mt-0 mb-0">Information Security</h2>
              </div>
              <p>
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
              </p>

              <h2 className="text-2xl font-heading font-bold text-gray-900 mt-10 mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date at the top of this privacy policy.
              </p>

              <h2 className="text-2xl font-heading font-bold text-gray-900 mt-10 mb-4">Contact Us</h2>
              <p>
                If you have any questions about our privacy policy, please contact us:
              </p>
              <ul>
                <li><strong>By email:</strong> privacy@eclinic.com</li>
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

export default PrivacyPolicyPage;
