
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DentalPage from "./pages/DentalPage";
import CardiologyPage from "./pages/CardiologyPage";
import ENTPage from "./pages/ENTPage";
import EmergencyPage from "./pages/EmergencyPage";
import DoctorsPage from "./pages/DoctorsPage";
import AmbulancePage from "./pages/AmbulancePage";
import HelpPage from "./pages/HelpPage";
import AppointmentPage from "./pages/AppointmentPage";
import ConsultationPage from "./pages/ConsultationPage";
import PaymentPage from "./pages/PaymentPage";
import DirectionsPage from "./pages/DirectionsPage";
import NeurologistPage from "./pages/NeurologistPage";
import OrthopedicPage from "./pages/OrthopedicPage";
import DermatologyPage from "./pages/DermatologyPage";
import GastroenterologyPage from "./pages/GastroenterologyPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import SitemapPage from "./pages/SitemapPage";
import DoctorCallPage from "./pages/DoctorCallPage";
import LoginPage from "./pages/LoginPage";
import VideoConsultationPage from "./pages/VideoConsultationPage";
import EmergencyVideoConsultationPage from "./pages/EmergencyVideoConsultationPage";
import MedicinePage from "./pages/MedicinePage";
import TabletCheckoutPage from "./pages/TabletCheckoutPage";
import OrderTrackingPage from "./pages/OrderTrackingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dental" element={<DentalPage />} />
          <Route path="/cardiology" element={<CardiologyPage />} />
          <Route path="/ent" element={<ENTPage />} />
          <Route path="/emergency" element={<EmergencyPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/ambulance" element={<AmbulancePage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/directions" element={<DirectionsPage />} />
          <Route path="/neurologist" element={<NeurologistPage />} />
          <Route path="/orthopedic" element={<OrthopedicPage />} />
          <Route path="/dermatology" element={<DermatologyPage />} />
          <Route path="/gastroenterology" element={<GastroenterologyPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/doctor-call/:id" element={<DoctorCallPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/video-consultation/:id" element={<VideoConsultationPage />} />
          <Route path="/video-consultation/emergency" element={<EmergencyVideoConsultationPage />} />
          {/* Medicine routes */}
          <Route path="/medicine" element={<MedicinePage />} />
          <Route path="/medicine/checkout/:medicineId" element={<TabletCheckoutPage />} />
          <Route path="/medicine/order-tracking/:trackingId" element={<OrderTrackingPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
