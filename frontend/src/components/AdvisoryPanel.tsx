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
    name: "Md. Abdul Aziz",
    title: "CEO & Founder",
    image: "https://raw.githubusercontent.com/IsratJahanR/CGDRC/refs/heads/main/frontend/src/assets/team-members/aziz.jpg", // Replace with actual CEO image
    contact: {
      phone: "+8801682250051",
      email: "aziz.fst93@gmail.com",
      linkedin: "https://www.linkedin.com/in/md-abdul-aziz-60383b113/",
    },
    message:
      "At Child Growth & Development Research Centre, our mission is to inspire research, innovation, and collaboration to improve child nutrition and overall well-being. Together, we can build a healthier and smarter generation.",
  };

  const professors = [
    {
      name: "Md. Altaf Hossain",
      role: "Associate Professor",
      image: "/images/advisor1.jpg", // Dummy image
      expertise: "Applied Food Science and Nutrition",
      credentials:
        "BSc (Hons) in Food Science and Technology, MSc in Applied Human Nutrition and Dietetics",
      research:
        "Food safety, maternal perinatal and pediatric nutrition, metabolic disorder, and nutritional epidemiology",
      link: "https://www.researchgate.net/profile/Md-Hossain-110",
    },
    {
      name: "Mohammad Mozibul Haque",
      role: "Assistant Professor",
      image: "/images/advisor2.jpg", // Dummy image
      expertise: "Applied Human Nutrition and Dietetics",
      credentials:
        "B.Sc. (Hons) in Food Science and Technology, MS in Applied Human Nutrition and Dietetics",
      research: "Applied Human Nutrition, Food Science and Technology",
      link: "https://www.researchgate.net/profile/Mohammad-Hauqe",
    },
  ];

  const teamMembers = [
    {
      name: "Israt Jahan Reshma",
      role: "Junior Researcher",
      image: "https://raw.githubusercontent.com/IsratJahanR/CGDRC/refs/heads/main/frontend/src/assets/team-members/israt.png", // Dummy image
      contact: {
        email: "israt.gstu@gmail.com",
        linkedin: "https://www.linkedin.com/in/israt-jahan-788a0619a/",
      },
    },
    {
      name: "Yeasin Arafat",
      role: "IT Executive",
      image: "/images/team2.jpg",
      contact: {
        email: "mdarafat1819@gmail.com",
        linkedin: "https://www.linkedin.com/in/md-yeasin-arafat",
      },
    },
    {
      name: "Ariful Islam Saikot",
      role: "Office Executive",
      image: "/images/team3.jpg",
      contact: {
        email: "ariful.soikot@gmail.com",
        linkedin: "https://www.linkedin.com/in/mohammad-ariful-islam-saikot/",
      },
    },
    {
      name: "Md. Abbas Uddin",
      role: "Sales & Marketing Executive",
      image: "/images/team4.jpg",
      contact: {
        email: "abbas.uddin12@gmail.com",
        linkedin: "https://www.linkedin.com/in/md-abbas-uddin",
      },
    },
  ];

  return (
    <section id="team" className="py-16 bg-gradient-to-b from-secondary/40 to-background">
      <div className="container mx-auto px-4 space-y-16">
        
        {/* CEO Section */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visionary leadership fostering research and growth.
          </p>
        </div>

        <Card className="max-w-5xl mx-auto border hover:shadow-lg transition-all duration-300">
          <CardContent className="flex flex-col md:flex-row items-center md:items-start gap-8 p-8">
            {/* Left: CEO Info */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/3">
              <div className="w-50 h-50 rounded-full overflow-hidden shadow-lg mb-4">
                <img src={ceo.image} alt={ceo.name} className="object-cover w-full h-full" />
              </div>
              <h3 className="text-2xl font-bold">{ceo.name}</h3>
              <p className="text-accent font-medium mb-4">{ceo.title}</p>

              <div className="space-y-2 w-full">
                <Button variant="outline" size="sm" className="justify-start w-full">
                  <Phone className="h-4 w-4 mr-2" /> {ceo.contact.phone}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="justify-start w-full"
                  onClick={() => (window.location.href = `mailto:${ceo.contact.email}`)}
                >
                  <Mail className="h-4 w-4 mr-2" /> {ceo.contact.email}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="justify-start w-full"
                  onClick={() => window.open(ceo.contact.linkedin, "_blank")}
                >
                  <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                </Button>
              </div>
            </div>

            {/* Right: CEO Message */}
            <div className="flex-1 bg-accent/5 rounded-2xl p-6 relative">
              <Quote className="absolute top-4 left-4 text-accent/30 w-8 h-8" />
              <h3 className="text-2xl font-semibold mb-4 text-accent px-10">Message from Our CEO</h3>
              <p className="text-lg leading-relaxed italic">{ceo.message}</p>
              <div className="mt-4 text-right font-semibold text-accent">— {ceo.name}</div>
            </div>
          </CardContent>
        </Card>

        {/* Advisory Panel */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">Advisory Panel</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Distinguished academicians guiding our strategic vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {professors.map((prof, index) => (
            <Card key={index} className="hover:shadow-md border transition-all duration-300 rounded-xl">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img src={prof.image} alt={prof.name} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-xl font-bold">{prof.name}</h3>
                <p className="text-accent font-semibold">{prof.role}</p>
                <p className="text-sm text-muted-foreground mt-2 mb-1">{prof.expertise}</p>
                <p className="text-xs text-muted-foreground italic">{prof.credentials}</p>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  <span className="font-semibold">Research Focus:</span> {prof.research}
                </p>
                <Button
                  variant="link"
                  className="mt-3 text-primary p-0 h-auto"
                  onClick={() => window.open(prof.link, "_blank")}
                >
                  View Research Profile <ExternalLink className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Members */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">Operation and Research Squad</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate individuals driving research and innovation forward.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border hover:shadow-md transition-all duration-300 rounded-xl">
              <CardContent className="p-4 text-center">
                <div className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-4">
                  <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
                </div>
                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-accent font-semibold mb-3">{member.role}</p>
                <div className="space-y-2 text-sm">
                  {member.contact.email && (
                    <div className="flex justify-center items-center gap-2 text-muted-foreground">
                      <Mail className="h-4 w-4 text-accent" />
                      <span>{member.contact.email}</span>
                    </div>
                  )}
                  {member.contact.linkedin && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(member.contact.linkedin, "_blank")}
                    >
                      <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
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
