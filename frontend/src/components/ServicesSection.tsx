import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Baby, MessageCircle, Calendar, Coffee, Book, Users } from "lucide-react";

const ServicesSection = () => {
  const packages = [
    { name: "Weaning Master", icon: Coffee, description: "Nutrition guidance for your child", price: "❖ Package price", validity: "❖ Package validity" },
    { name: "Grow-up Guide", icon: Book, description: "Step-by-step growth & learning guide", price: "❖ Package price", validity: "❖ Package validity" },
    { name: "Mom’s Guide", icon: Users, description: "Support and tips for mothers", price: "❖ Package price", validity: "❖ Package validity" },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Our Services</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Comprehensive care and guidance for expecting mothers and children
        </p>

        {/* Icon Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="p-6 text-center hover:shadow-xl transition-shadow rounded-2xl">
            <div className="w-14 h-14 bg-healthcare-pink/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-healthcare-pink" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Pregnancy Care</h3>
            <p className="text-sm text-muted-foreground">Comprehensive prenatal counselling and emotional support</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-xl transition-shadow rounded-2xl">
            <div className="w-14 h-14 bg-healthcare-blue/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Baby className="w-6 h-6 text-healthcare-blue" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Child Development</h3>
            <p className="text-sm text-muted-foreground">Expert guidance on child growth and developmental milestones</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-xl transition-shadow rounded-2xl">
            <div className="w-14 h-14 bg-healthcare-teal/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-healthcare-teal" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Counselling</h3>
            <p className="text-sm text-muted-foreground">Professional counselling for mothers and children</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-xl transition-shadow rounded-2xl">
            <div className="w-14 h-14 bg-healthcare-green/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-healthcare-green" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Appointments</h3>
            <p className="text-sm text-muted-foreground">Easy scheduling with certified healthcare professionals</p>
          </Card>
        </div>

        {/* Package Cards */}
        <h3 className="text-2xl font-bold text-healthcare-blue mb-6 text-center">Care Packages</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <Card key={pkg.name} className="p-6 text-center hover:shadow-xl transition-shadow rounded-2xl">
                <div className="w-12 h-12 bg-healthcare-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-healthcare-blue" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{pkg.name}</h4>
                <p className="text-sm mb-2">{pkg.description}</p>
                <p className="text-sm mb-2">{pkg.price}</p>
                <p className="text-sm mb-4">{pkg.validity}</p>
                <Button className="w-full bg-healthcare-blue text-white hover:bg-healthcare-teal">
                  Buy Now
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
