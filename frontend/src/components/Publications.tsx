import { Card, CardContent } from "@/components/ui/card";
import { FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Publications = () => {
  const publications = [
    {
      title: "Longitudinal Study on Early Childhood Nutrition and Cognitive Development",
      journal: "Journal of Child Development Research",
      year: "2024",
      authors: "Mitchell, S., Chen, J., et al.",
      summary:
        "A comprehensive 5-year study examining the correlation between nutritional interventions and cognitive milestone achievement in children aged 2-7.",
    },
    {
      title: "The Impact of Physical Activity on Social-Emotional Growth in School-Age Children",
      journal: "International Journal of Pediatric Research",
      year: "2023",
      authors: "Roberts, M., Thompson, L., et al.",
      summary:
        "Research findings on how structured physical activity programs influence emotional regulation and social skills development.",
    },
    {
      title: "Early Intervention Strategies for Developmental Delays: A Meta-Analysis",
      journal: "Child Health & Development Quarterly",
      year: "2023",
      authors: "Hassan, A., Sharma, P., et al.",
      summary:
        "Systematic review of 150+ studies evaluating effectiveness of various early intervention approaches for children with developmental concerns.",
    },
    {
      title: "Holistic Assessment Frameworks for Child Growth Monitoring",
      journal: "Pediatric Care Journal",
      year: "2023",
      authors: "Chen, J., Mitchell, S., et al.",
      summary:
        "Development and validation of integrated assessment tools measuring physical, cognitive, and socio-emotional development simultaneously.",
    },
    {
      title: "Parent-Child Interaction Patterns and Their Effect on Language Acquisition",
      journal: "Developmental Psychology Review",
      year: "2022",
      authors: "Sharma, P., Thompson, L., et al.",
      summary:
        "Analysis of communication patterns between parents and children and their relationship to language development milestones.",
    },
    {
      title: "Nutrition Guidelines for Optimal Growth in Early Childhood",
      journal: "Journal of Pediatric Nutrition",
      year: "2022",
      authors: "Chen, J., Roberts, M., et al.",
      summary:
        "Evidence-based dietary recommendations for supporting healthy growth patterns in children from infancy through preschool years.",
    },
  ];

  return (
    <section id="publications" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Research Publications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to advancing child development science through rigorous research and
            published findings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((pub, index) => (
            <Card
              key={index}
              className="hover:shadow-[var(--shadow-soft)] transition-all duration-300"
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 leading-tight">{pub.title}</h3>
                    <p className="text-sm text-accent font-semibold mb-1">
                      {pub.journal} ({pub.year})
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">{pub.authors}</p>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {pub.summary}
                    </p>
                    <Button variant="link" className="p-0 h-auto">
                      Read Full Paper
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
