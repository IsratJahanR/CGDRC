import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      role: "First-time Mother",
      rating: 5,
      text: "The support I received during my pregnancy was incredible. Dr. Johnson helped me navigate all my anxieties and prepared me for motherhood beautifully.",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Jennifer L.",
      role: "Mother of Two",
      rating: 5,
      text: "When my 5-year-old started showing behavioral issues, Dr. Chen provided amazing guidance. The progress we've seen has been remarkable.",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Maria R.",
      role: "Expecting Mother",
      rating: 5,
      text: "As someone with high-risk pregnancy, having 24/7 support through the premium plan gave me so much peace of mind. Highly recommend!",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-12 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Families Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real stories from mothers and families who have experienced our compassionate care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 relative">
              <Quote className="w-8 h-8 text-healthcare-pink/30 mb-4" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-healthcare-pink/20 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-healthcare-pink">
                    {testimonial.name.split(' ')[0][0]}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Join thousands of satisfied families who trust MomCare for their healthcare needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;