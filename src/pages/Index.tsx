import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { PlatformIcons } from "@/components/landing/PlatformIcons";
import { AboutSection } from "@/components/landing/AboutSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { ConversionBlockers } from "@/components/landing/ConversionBlockers";
import { WhyChooseSection } from "@/components/landing/WhyChooseSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { ROICalculator } from "@/components/landing/ROICalculator";
import { PortfolioSection } from "@/components/landing/PortfolioSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PlatformIcons />
        <AboutSection />
        <ServicesSection />
        <ConversionBlockers />
        <WhyChooseSection />
        <ProcessSection />
        <ROICalculator />
        <PortfolioSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
