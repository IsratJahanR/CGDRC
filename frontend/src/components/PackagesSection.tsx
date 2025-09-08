import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, UserPlus } from "lucide-react";

const PackagesSection = () => {
  return (
    <section className="py-8 px-6 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Care Plans</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Premium Care */}
          <Card className="p-6 bg-healthcare-pink-light border-healthcare-pink">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-healthcare-pink" />
              <h2 className="text-xl font-bold text-healthcare-pink">Premium Care</h2>
            </div>
            <p className="text-healthcare-pink mb-4">Comprehensive support package</p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-healthcare-pink rounded-full"></div>
                <span className="text-sm">24/7 counsellor support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-healthcare-pink rounded-full"></div>
                <span className="text-sm">Weekly check-ins</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-healthcare-pink rounded-full"></div>
                <span className="text-sm">Personalized care plans</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-healthcare-pink rounded-full"></div>
                <span className="text-sm">Emergency consultations</span>
              </div>
            </div>
            
            <Button className="w-full bg-healthcare-pink hover:bg-healthcare-pink/90 text-white">
              Subscribe Now
            </Button>
          </Card>
          
          {/* Basic Care */}
          <Card className="p-6 bg-healthcare-teal-light border-healthcare-teal">
            <div className="flex items-center gap-3 mb-4">
              <UserPlus className="w-6 h-6 text-healthcare-teal" />
              <h2 className="text-xl font-bold text-healthcare-teal">Basic Care</h2>
            </div>
            <p className="text-healthcare-teal mb-4">Essential support for new mothers</p>
            
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-healthcare-teal rounded-full"></div>
                <span className="text-sm">Monthly consultations</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-healthcare-teal rounded-full"></div>
                <span className="text-sm">Resource library access</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-healthcare-teal rounded-full"></div>
                <span className="text-sm">Community support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-healthcare-teal rounded-full"></div>
                <span className="text-sm">Progress tracking</span>
              </div>
            </div>
            
            <Button className="w-full bg-healthcare-teal hover:bg-healthcare-teal/90 text-white">
              Get Started
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;