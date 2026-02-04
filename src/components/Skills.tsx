const levelMap = {
  Junior: 50,
  Intermediate: 75,
  Expert: 100,
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Intermediate" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "HTML & CSS", level: "Expert" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "C# (.NET / ASP.NET MVC)", level: "Expert" },
        { name: "SQL Server", level: "Expert" },
        { name: "REST API Development", level: "Expert" },
        { name: "Java Spring Boot", level: "Intermediate" },
        { name: "PHP (CodeIgniter 3)", level: "Intermediate" },
      ],
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Git Version Control", level: "Expert" },
        { name: "Linux Server", level: "Intermediate" },
        { name: "Windows Server", level: "Intermediate" },
        { name: "Docker (Basic)", level: "Junior" },
        { name: "CI/CD (Basic)", level: "Junior" },
      ],
    },
    {
      title: "Database & Networking",
      skills: [
        { name: "MySQL", level: "Intermediate" },
        { name: "Oracle Database", level: "Intermediate" },
        { name: "Database Design", level: "Expert" },
        { name: "Network Design & Troubleshooting", level: "Intermediate" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm mb-4 block">
              // Skills & Technologies
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Technical Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I use in real-world projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="p-6 bg-card border border-border rounded-xl"
              >
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const width = levelMap[skill.level];

                    return (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}
                          </span>
                        </div>

                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${width}%`,
                              animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
