import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import VisionMission from "@/components/VisionMission";
import Approach from "@/components/Approach";
import AdvisoryPanel from "@/components/AdvisoryPanel";
import Publications from "@/components/Publications";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <VisionMission />
      <Approach />
      <AdvisoryPanel />
      <Publications />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
