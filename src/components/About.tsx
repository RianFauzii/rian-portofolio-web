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
                I'm a full-stack developer with 5+ years of experience building
                web applications that users love. My journey started with
                curiosity about how things work on the internet, and it has
                evolved into a passion for creating impactful digital products.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in React, TypeScript, Node.js, and cloud
                technologies. I believe in writing clean, efficient code and
                following best practices to deliver robust solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
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
