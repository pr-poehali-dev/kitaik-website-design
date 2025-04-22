
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CourseSection from '@/components/CourseSection';
import FeatureSection from '@/components/FeatureSection';
import TestimonialSection from '@/components/TestimonialSection';
import LanguageDemo from '@/components/LanguageDemo';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add event listener for scroll
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <CourseSection />
      <FeatureSection />
      <LanguageDemo />
      <TestimonialSection />
      <Footer />
      
      {/* Scroll to top button with animation */}
      <Button 
        className={`fixed bottom-6 right-6 rounded-full p-3 shadow-lg transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        onClick={scrollToTop}
        aria-label="Наверх"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Index;
