import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Finding elegant solutions to complex technical challenges",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Quickly adapting to new technologies and methodologies",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating effectively in agile development environments",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm mb-4 block">
              // About Me
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Passionate About{" "}
              <span className="text-gradient">Technology</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a software engineer with over 2 years of experience building web and
              mobile applications for real business needs. My journey started with a
              strong interest in technology and system development during my studies, and
              it has evolved into a passion for creating efficient and impactful digital
              solutions.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently, I work as an Application Developer Analyst at PT Mitra Pinasthika
              Mulia (MPM Honda Jatim), where I develop and maintain enterprise applications
              to support business operations. Previously, I gained hands-on experience as
              a Software Engineer Intern at Astra Honda Motor, contributing to system
              analysis, database design, and high-standard application development.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in application development, system analysis, and database-driven
              solutions using .NET, Java Spring Boot, SQL Server, and modern web technologies.
              I believe in writing clean, efficient code and following best practices to
              deliver scalable and reliable software solutions.
            </p>
          </div>


            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4 group-hover:shadow-glow transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
