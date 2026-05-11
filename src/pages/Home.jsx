import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection.jsx';

import ServicesSection from '../components/ServicesSection.jsx';
import PricingSection from '../components/PricingSection.jsx';
import WhyUsSection from '../components/WhyUsSection.jsx';
import ProcessSection from '../components/ProcessSection.jsx';

import LicenseSection from '../components/LicenseSection.jsx';
import ContactSection from '../components/ContactSection.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <WhyUsSection />
      <ProcessSection />

      <LicenseSection />
      <ContactSection />
      <Footer />
    </div>
  );
}