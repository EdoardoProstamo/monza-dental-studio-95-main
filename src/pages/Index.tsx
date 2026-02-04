import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { StrengthsSection } from "@/components/home/StrengthsSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { SEO_CONFIG } from "@/config/siteConfig";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = SEO_CONFIG.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", SEO_CONFIG.description);
    }
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StrengthsSection />
      <ReviewsSection />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default Index;
