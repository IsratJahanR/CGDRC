import { Card } from "@/components/ui/card";
import { Heart, Users, Award } from "lucide-react";

const FeedbackSection = () => {
  return (
    <section className="py-12 px-6 bg-healthcare-blue text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Impact & Success</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 text-center bg-white/10 border-white/20 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Happy Families</h3>
            <p className="text-3xl font-bold mb-2">2,500+</p>
            <p className="text-sm text-white/80">Families we've supported through their journey</p>
          </Card>
          
          <Card className="p-6 text-center bg-white/10 border-white/20 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Success Rate</h3>
            <p className="text-3xl font-bold mb-2">96%</p>
            <p className="text-sm text-white/80">Client satisfaction and positive outcomes</p>
          </Card>
          
          <Card className="p-6 text-center bg-white/10 border-white/20 text-white">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Expert Care</h3>
            <p className="text-3xl font-bold mb-2">15+</p>
            <p className="text-sm text-white/80">Certified healthcare professionals</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;