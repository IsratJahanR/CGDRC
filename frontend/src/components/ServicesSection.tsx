import { Card } from "@/components/ui/card";
import { Heart, Baby, MessageCircle, Calendar } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Our Services</h2>
        <p className="text-center text-muted-foreground mb-12">Comprehensive care for expecting mothers and children</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-healthcare-pink/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-healthcare-pink" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Pregnancy Care</h3>
            <p className="text-sm text-muted-foreground">Comprehensive prenatal counselling and emotional support</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-healthcare-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Baby className="w-6 h-6 text-healthcare-blue" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Child Development</h3>
            <p className="text-sm text-muted-foreground">Expert guidance on child growth and developmental milestones</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-healthcare-teal/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-healthcare-teal" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Counselling</h3>
            <p className="text-sm text-muted-foreground">Professional counselling for mothers and children</p>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-healthcare-green/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-healthcare-green" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Appointments</h3>
            <p className="text-sm text-muted-foreground">Easy scheduling with certified healthcare professionals</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;