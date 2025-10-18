import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Apple, Dumbbell, ArrowRight } from "lucide-react";
import nutricareImage from "@/assets/nutricare.jpg";
import gymcenterImage from "@/assets/gymcenter.jpg";

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products & Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive programs designed to support every aspect of your child's health,
            nutrition, and physical development.
          </p>
        </div>

        <div className="space-y-16">
          {/* NutriCare Service */}
          <Card className="overflow-hidden border-2 hover:shadow-[var(--shadow-soft)] transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={nutricareImage}
                  alt="NutriCare Service"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Apple className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  NutriCare: Nourishing & Caring Future Generations
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our specialized nutrition program provides comprehensive dietary guidance,
                  personalized meal plans, and nutritional counseling to ensure optimal growth and
                  development. We work closely with families to address specific nutritional needs
                  and establish healthy eating habits for life.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Personalized nutrition assessments and meal planning</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Growth monitoring and nutritional intervention programs</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Family education workshops on child nutrition</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                    <span>Specialized support for dietary concerns and allergies</span>
                  </li>
                </ul>
                <Button variant="accent" size="lg">
                  Learn More About NutriCare
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </div>
          </Card>

          {/* GymCenter Service */}
          <Card className="overflow-hidden border-2 hover:shadow-[var(--shadow-soft)] transition-all duration-300">
            <div className="grid lg:grid-cols-2 gap-0">
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Dumbbell className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  GymCenter: Fitness & Wellness for Boys and Girls
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our state-of-the-art fitness center offers age-appropriate exercise programs
                  designed to promote physical development, build strength, improve coordination,
                  and foster a lifelong love of physical activity in a safe, supportive
                  environment.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Age-specific fitness programs for all development stages</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Professional coaching and movement skill development</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Fun group activities and team sports programs</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Physical assessment and progress tracking</span>
                  </li>
                </ul>
                <Button size="lg">
                  Learn More About GymCenter
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
              <div className="relative h-64 lg:h-auto order-1 lg:order-2">
                <img
                  src={gymcenterImage}
                  alt="GymCenter Service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
