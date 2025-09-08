import Header from "@/components/Header";
import MainTitle from "@/components/MainTitle";
import ServicesSection from "@/components/ServicesSection";
import ConsultantsSection from "@/components/ConsultantsSection";
import PackagesSection from "@/components/PackagesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FeedbackSection from "@/components/FeedbackSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MainTitle />
      <ServicesSection />
      <ConsultantsSection />
      <PackagesSection />
      <TestimonialsSection />
      <FeedbackSection />
      <FooterSection />
    </div>
  );
};

export default Index;
