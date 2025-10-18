import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, ExternalLink, User, Mail, Phone, Briefcase, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const AdvisoryPanel = () => {
  const ceo = {
    name: "MD. ABDULAZIZ",
    title: "Chief Executive Officer & Founder",
    education: [
      "M.Sc. in Applied Human Nutrition and Dietetics, CVASU (CGPA: 3.77/4.00)",
      "B.Sc. (Hons.) in Food Science and Technology, CVASU (CGPA: 3.85/4.00)"
    ],
    contact: {
      phone: "+8801682250051",
      email: "aziz.fst93@gmail.com"
    },
    experience: [
      "Junior Teacher, Chattogram Cantonment Board High School (April 2023)",
      "Research and Development Officer, Abul Khair Consumer Goods Limited (Oct 2022 - Mar 2023)",
      "Technical Expert (Nutrition), NutriCare International Limited (July 2020 - Sep 2022)",
      "Nutrition Consultant, Medical Centre for the Poorest of the Poor, Caritas Bangladesh (July 2018 - May 2020)",
      "Research Assistant, Department of Applied Food Science and Nutrition, CVASU (Jan 2018 - June 2019)"
    ],
    achievements: [
      "Founded NutriCare School in 2018",
      "Published 7+ research papers in international journals",
      "Completed international internship at Universiti Malaysia Terengganu",
      "Workshop Organizer for BOOTCAMP: With Good Nutrition She'll Grow into it"
    ]
  };

  const professors = [
    {
      name: "Md. Altaf Hossain",
      role: "Associate Professor",
      expertise: "Department of Applied Food Science and Nutrition",
      credentials: "BSc (Hons) in Food Science and Technology, MSc in Applied Human Nutrition and Dietetics",
      research: "Food safety, maternal perinatal and pediatric nutrition, metabolic disorder, community and public health nutrition, dietary bioactive components, nutritional epidemiology",
      link: "https://www.researchgate.net/profile/Md-Hossain-110",
    },
    {
      name: "Mohammad Mozibul Haque",
      role: "Assistant Professor",
      expertise: "Department of Applied Food Science and Nutrition",
      credentials: "B.Sc. (Hon's) in Food Science and Technology, MS in Applied Human Nutrition and Dietetics",
      research: "Applied Human Nutrition and Dietetics, Food Science and Technology",
      link: "https://www.researchgate.net/profile/Mohammad-Hauqe",
    },
  ];

  const teamMembers = [
    {
      name: "Israt Jahan Reshma",
      role: "Founder & Research Lead",
      icon: Users,
      contact: {
        email: "israt.gstu@gmail.com",
        linkedin: "https://www.linkedin.com/in/israt-jahan-788a0619a/"
      }
    },
    {
      name: "Yeasin Arafat",
      role: "IT Executive",
      icon: Briefcase,
      contact: {
        email: "mdarafat1819@gmail.com"
      }
    },
    {
      name: "Mohammad Ariful Islam Saikot",
      role: "Office Executive",
      icon: Briefcase,
      contact: {
        linkedin: "https://www.linkedin.com/in/mohammad-ariful-islam-saikot/"
      }
    },
    {
      name: "Md. Abbas Uddin",
      role: "Sales & Marketing Executive",
      icon: Briefcase,
      contact: {}
    }
  ];

  return (
    <section id="team" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated team of experts, researchers, and professionals behind Child Growth & Development Research Centre.
          </p>
        </div>

        {/* CEO Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-2 hover:shadow-[var(--shadow-soft)] transition-all duration-300">
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <User className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{ceo.name}</h3>
                  <p className="text-accent font-semibold mb-4">{ceo.title}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Education</h4>
                      {ceo.education.map((edu, index) => (
                        <p key={index} className="text-sm text-muted-foreground mb-1">{edu}</p>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button variant="outline" size="sm" className="justify-start">
                        <Phone className="h-4 w-4 mr-2" />
                        {ceo.contact.phone}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="justify-start"
                        onClick={() => window.location.href = `mailto:${ceo.contact.email}`}
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        {ceo.contact.email}
                      </Button>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Professional Experience</h4>
                      <ul className="space-y-1">
                        {ceo.experience.map((exp, index) => (
                          <li key={index} className="text-sm text-muted-foreground">• {exp}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Key Achievements</h4>
                      <ul className="space-y-1">
                        {ceo.achievements.map((achievement, index) => (
                          <li key={index} className="text-sm text-muted-foreground">• {achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Professors Row */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {professors.map((professor, index) => (
            <Card
              key={index}
              className="hover:shadow-[var(--shadow-soft)] transition-all duration-300"
            >
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-1">{professor.name}</h3>
                <p className="text-accent font-semibold mb-2">{professor.role}</p>
                <p className="text-sm text-muted-foreground mb-2 font-medium">{professor.expertise}</p>
                <p className="text-xs text-muted-foreground italic mb-3">{professor.credentials}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  <span className="font-semibold">Research Focus:</span> {professor.research}
                </p>
                <Button 
                  variant="link" 
                  className="p-0 h-auto"
                  onClick={() => window.open(professor.link, '_blank')}
                >
                  View Research Profile
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Members Row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="hover:shadow-[var(--shadow-soft)] transition-all duration-300"
            >
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <member.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-accent font-semibold mb-4">{member.role}</p>
                
                <div className="space-y-2">
                  {member.contact.email && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full text-xs"
                      onClick={() => window.location.href = `mailto:${member.contact.email}`}
                    >
                      <Mail className="h-3 w-3 mr-2" />
                      Email
                    </Button>
                  )}
                  {member.contact.linkedin && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full text-xs"
                      onClick={() => window.open(member.contact.linkedin, '_blank')}
                    >
                      <ExternalLink className="h-3 w-3 mr-2" />
                      LinkedIn
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisoryPanel;
