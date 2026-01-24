import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: [
        "Lead development of microservices architecture serving 1M+ users",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Built real-time collaboration features using WebSocket technology",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Solutions Ltd.",
      location: "New York, NY",
      period: "2020 - 2022",
      description: [
        "Developed and maintained multiple React applications",
        "Designed RESTful APIs using Node.js and Express",
        "Optimized database queries improving performance by 40%",
        "Collaborated with UX team to implement responsive designs",
      ],
    },
    {
      title: "Frontend Developer",
      company: "StartUp Hub",
      location: "Austin, TX",
      period: "2018 - 2020",
      description: [
        "Built interactive dashboards using React and D3.js",
        "Implemented state management solutions with Redux",
        "Created reusable component libraries for design consistency",
        "Participated in agile sprints and daily standups",
      ],
    },
    {
      title: "Junior Developer",
      company: "Web Agency Pro",
      location: "Remote",
      period: "2017 - 2018",
      description: [
        "Developed responsive websites for various clients",
        "Worked with WordPress and custom PHP solutions",
        "Gained experience in JavaScript and jQuery",
        "Learned version control best practices with Git",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm mb-4 block">
              // Work Experience
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Professional <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My career path through various roles and companies, building expertise in modern web development.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow z-10" />

                {/* Content Card */}
                <div
                  className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 group">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Briefcase size={18} />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span>{exp.location}</span>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
