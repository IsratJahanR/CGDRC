import { Brain, Users, LineChart, Shield } from "lucide-react";
import researchImage from "@/assets/research.jpg";

const Approach = () => {
  const approaches = [
    {
      icon: Brain,
      title: "Evidence-Based Research",
      description:
        "Our methodologies are grounded in rigorous scientific research and validated through comprehensive studies.",
    },
    {
      icon: Users,
      title: "Child-Centered Focus",
      description:
        "Every program and initiative is designed with the child's individual needs, interests, and development stages in mind.",
    },
    {
      icon: LineChart,
      title: "Continuous Monitoring",
      description:
        "We track developmental milestones and progress through systematic data collection and analysis.",
    },
    {
      icon: Shield,
      title: "Holistic Care",
      description:
        "Addressing physical, cognitive, emotional, and social aspects of child development in an integrated manner.",
    },
  ];

  return (
    <section id="approach" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We employ a comprehensive, research-driven methodology that combines cutting-edge
              scientific insights with compassionate, individualized care to support optimal child
              development.
            </p>

            <div className="space-y-6">
              {approaches.map((approach, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <approach.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{approach.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {approach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={researchImage}
              alt="Research approach"
              className="rounded-2xl shadow-[var(--shadow-soft)] w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
