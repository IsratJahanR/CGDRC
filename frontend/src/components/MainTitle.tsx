import { Button } from "@/components/ui/button";
import { User, LogIn, FileDown, Package, Stethoscope } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-20">

      {/* Hero Section */}
      <section className="min-h-screen flex-1 bg-gradient-to-r from-healthcare-blue to-healthcare-teal text-white flex flex-col items-center justify-center text-center px-6 py-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Helping Mother, Caring Child
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mb-8 opacity-90">
          Trusted guidance for pregnancy, weaning, child growth, and school readiness.  
          Access personalized care packages and expert advice.
        </p>
        <div className="flex gap-4">
          <Button size="lg" className="bg-white text-healthcare-blue hover:bg-gray-100">
            <Stethoscope className="w-5 h-5 mr-2" /> Find a Counsellor
          </Button>
          <Button size="lg" className="border-white text-white hover:bg-white hover:text-healthcare-blue">
            <Package className="w-5 h-5 mr-2" /> Buy Package
          </Button>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
