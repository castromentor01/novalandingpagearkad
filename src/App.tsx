import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import MentorsSection from './components/MentorsSection';
import TestimonialsSection from './components/TestimonialsSection';
import BonusSection from './components/BonusSection';
import CTASection from './components/CTASection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "Arkad Select | Mentoria de Tráfego Pago";
  }, []);

  return (
    <div className="font-[Montserrat] text-gray-800">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <MentorsSection />
      <TestimonialsSection />
      <BonusSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;