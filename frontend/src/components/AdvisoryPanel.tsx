import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  ExternalLink,
  User,
  Mail,
  Phone,
  Briefcase,
  Users,
  Quote,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const AdvisoryPanel = () => {
  const ceo = {
    name: "MD. ABDULAZIZ",
    title: "Chief Executive Officer & Founder",
    image: "/images/ceo.jpg", // 👉 Replace with actual image path
    contact: {
      phone: "+8801682250051",
      email: "aziz.fst93@gmail.com",
      linkedin: "https://www.linkedin.com/in/abdulaziz", // optional
    },
    message:
      "At Child Growth & Development Research Centre, our mission is to inspire research, innovation, and collaboration to improve child nutrition and overall well-being. Together, we can build a healthier and smarter generation.",
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
      link: "https://www.researchgate.net/profile/Md-Hossain-110",
    },
    {
      name: "Mohammad Mozibul Haque",
      role: "Assistant Professor",
      expertise: "Department of Applied Food Science and Nutrition",
      credentials:
        "B.Sc. (Hon's) in Food Science and Technology, MS in Applied Human Nutrition and Dietetics",
      research: "Applied Human Nutrition and Dietetics, Food Science and Technology",
      link: "https://www.researchgate.net/profile/Mohammad-Hauqe",
    },
  ];

  const teamMembers = [
    {
      name: "Israt Jahan Reshma",
      role: "Junior Researcher",
      icon: Users,
      contact: {
        email: "israt.gstu@gmail.com",
        linkedin: "https://www.linkedin.com/in/israt-jahan-788a0619a/",
      },
    },
    {
      name: "Yeasin Arafat",
      role: "IT Executive",
      icon: Briefcase,
      contact: {
        email: "mdarafat1819@gmail.com",
        linkedin: "https://www.linkedin.com/in/md-yeasin-arafat",
      },
    },
    {
      name: "Ariful Islam Saikot",
      role: "Office Executive",
      icon: Briefcase,
      contact: {
        email: "ariful.soikot@gmail.com",
        linkedin: "https://www.linkedin.com/in/mohammad-ariful-islam-saikot/",
      },
    },
    {
      name: "Md. Abbas Uddin",
      role: "Sales & Marketing Executive",
      icon: Briefcase,
      contact: {
        email: "abbas.uddin12@gmail.com",
        linkedin: "https://www.linkedin.com/in/md-abbas-uddin",
      },
    },
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

        <Card className="max-w-5xl mx-auto border-2 hover:shadow-xl transition-all duration-300 p-8 md:p-12">
          <CardContent className="flex flex-col md:flex-row items-center gap-10">
            {/* Left: CEO Picture */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/3">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl mb-6">
                <img
                  src={ceo.image}
                  alt={ceo.name}
                  className="object-cover w-full h-full"
                />
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
                {ceo.contact.linkedin && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="justify-start"
                    onClick={() => window.open(ceo.contact.linkedin, "_blank")}
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </Button>
                )}
              </div>
            </div>

            {/* Right: CEO Message */}
            <div className="flex-1 space-y-6">
              <div className="relative p-6 bg-accent/5 rounded-2xl shadow-sm">
                <Quote className="absolute top-4 left-4 text-accent/30 w-8 h-8" />
                <p className="text-lg leading-relaxed italic">{ceo.message}</p>
                <div className="mt-4 text-right font-semibold text-accent">
                  — {ceo.name}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advisory Panel */}
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
                <p className="text-sm text-muted-foreground mb-2 font-medium">
                  {professor.expertise}
                </p>
                <p className="text-xs text-muted-foreground italic mb-3">
                  {professor.credentials}
                </p>
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

        {/* Team Members */}
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

                <div className="flex flex-col items-center gap-2">
                  {member.contact.email && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4 text-accent" />
                      <span>{member.contact.email}</span>
                    </div>
                  )}
                  {member.contact.linkedin && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2"
                      onClick={() => window.open(member.contact.linkedin, "_blank")}
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
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
