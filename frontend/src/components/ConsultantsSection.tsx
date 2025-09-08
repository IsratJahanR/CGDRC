import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock } from "lucide-react";

const ConsultantsSection = () => {
  const consultants = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Pregnancy Counselling",
      rating: 4.9,
      reviews: 127,
      location: "New York, NY",
      experience: "8 years",
      image: "/placeholder.svg",
      available: true,
      tags: ["Prenatal Care", "Emotional Support", "High-Risk Pregnancy"]
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Child Development",
      rating: 4.8,
      reviews: 94,
      location: "Los Angeles, CA",
      experience: "12 years",
      image: "/placeholder.svg",
      available: true,
      tags: ["Behavioral Issues", "Learning Disabilities", "Family Therapy"]
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      specialty: "Pediatric Psychology",
      rating: 4.9,
      reviews: 156,
      location: "Chicago, IL",
      experience: "10 years",
      image: "/placeholder.svg",
      available: false,
      tags: ["Anxiety Disorders", "ADHD", "Autism Spectrum"]
    }
  ];

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Certified Consultants</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team of experienced healthcare professionals is here to support you through 
            every stage of pregnancy and child development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {consultants.map((consultant) => (
            <Card key={consultant.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-healthcare-blue/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-healthcare-blue">
                      {consultant.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{consultant.name}</h3>
                    <p className="text-healthcare-blue font-medium">{consultant.specialty}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{consultant.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">({consultant.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{consultant.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{consultant.experience} experience</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {consultant.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button 
                    className="flex-1" 
                    disabled={!consultant.available}
                    variant={consultant.available ? "default" : "secondary"}
                  >
                    {consultant.available ? "Book Consultation" : "Currently Unavailable"}
                  </Button>
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View All Consultants
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConsultantsSection;