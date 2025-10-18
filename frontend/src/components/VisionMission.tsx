import { Target, Eye, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const VisionMission = () => {
  return (
    <section id="vision" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision & Mission</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The first innovative research-based StartUp in Bangladesh focusing on nutrition and food safety sector since 2018.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 hover:shadow-[var(--shadow-soft)] transition-all duration-300">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                Ensuring proper nutrition & care for future generation to reform nation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-[var(--shadow-soft)] transition-all duration-300">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                Nourishing and Caring Every Child to Build Healthy Nation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-[var(--shadow-soft)] transition-all duration-300">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Motto</h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                Nourishing & Caring Future Generation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
