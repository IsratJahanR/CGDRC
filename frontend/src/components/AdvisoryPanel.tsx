import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, ExternalLink, User, Mail, Phone, Briefcase, Users, Quote } from "lucide-react";
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
    ],
    message:
      "At Child Growth & Development Research Centre, our mission is to inspire research, innovation, and collaboration to improve child nutrition and overall well-being. Together, we can build a healthier and smarter generation."
  };

  const professors = [
    {
      name: "Md. Altaf Hossain",
      role: "Associate Professor",
      expertise: "Department of Applied Food Science and Nutrition",
      credentials:
        "BSc (Hons) in Food Science and Technology, MSc in Applied Human Nutrition and Dietetics",
      research:
        "Food safety, maternal perinatal and pediatric nutrition, metabolic disorder, community and public health nutrition, dietary bioactive components, nutritional epidemiology",
      link: "https://www.researchgate.net/profile/Md-Hossain-110"
    },
    {
      name: "Mohammad Mozibul Haque",
      role: "Assistant Professor",
      expertise: "Department of Applied Food Science and Nutrition",
      credentials:
        "B.Sc. (Hon's) in Food Science and Technology, MS in Applied Human Nutrition and Dietetics",
      research:
        "Applied Human Nutrition and Dietetics, Food Science and Technology",
      link: "https://www.researchgate.net/profile/Mohammad-Hauqe"
    }
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
    <section id="team" className="py-24 bg-gradient-to-b from-secondary/40 to-background">
      <div className="container mx-auto px-4 space-y-24">
        {/* CEO Section */}
        <div className="space-y-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Message from Our CEO</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leadership with vision and dedication to building a healthier generation.
          </p>
        </div>

        <Card className="max-w-6xl mx-auto border-2 hover:shadow-xl transition-all duration-300 p-8 md:p-12">
          <CardContent className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left: CEO Profile */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/3">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4 shadow-lg">
                <User className="h-16 w-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold">{ceo.name}</h3>
              <p className="text-accent font-semibold mb-4">{ceo.title}</p>

              <div className="flex flex-col gap-3 w-full">
                <Button variant="outline" size="sm" className="justify-start">
                  <Phone className="h-4 w-4 mr-2" />
                  {ceo.contact.phone}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="justify-start"
                  onClick={() => (window.location.href = `mailto:${ceo.contact.email}`)}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  {ceo.contact.email}
                </Button>
              </div>
            </div>

            {/* Right: Message */}
            <div className="flex-1 space-y-6">
              <div className="relative p-6 bg-accent/5 rounded-2xl shadow-sm">
                <Quote className="absolute top-4 left-4 text-accent/30 w-8 h-8" />
                <p className="text-lg leading-relaxed italic">{ceo.message}</p>
                <div className="mt-4 text-right font-semibold text-accent">
                  — {ceo.name}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Education</h4>
                  {ceo.education.map((edu, i) => (
                    <p key={i}>• {edu}</p>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Key Achievements</h4>
                  {ceo.achievements.slice(0, 3).map((ach, i) => (
                    <p key={i}>• {ach}</p>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advisory Panel Section */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Advisory Panel</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our advisory board includes distinguished academicians and professionals who provide
            strategic direction and expert insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {professors.map((professor, index) => (
            <Card
              key={index}
              className="hover:shadow-lg border-2 transition-all duration-300 rounded-2xl"
            >
              <CardContent className="p-6">
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
                  className="p-0 h-auto text-primary"
                  onClick={() => window.open(professor.link, "_blank")}
                >
                  View Research Profile
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Members Section */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the passionate team members driving research, innovation, and community impact.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="hover:shadow-lg border transition-all duration-300 rounded-2xl"
            >
              <CardContent className="pt-8 text-center">
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
                      onClick={() => (window.location.href = `mailto:${member.contact.email}`)}
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
                      onClick={() => window.open(member.contact.linkedin, "_blank")}
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
