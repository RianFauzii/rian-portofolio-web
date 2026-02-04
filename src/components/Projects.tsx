import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
const featuredProjects = [
  {
    title: "MindCare – Mood Tracker Android & Web Application",
    description:
      "A full-stack mood tracking platform developed for Politeknik Astra students to monitor emotional well-being and deliver personalized recommendations including music, videos, and articles based on user mood analytics.",
    tags: ["Java Android", "Spring Boot", "REST API", "Web Application", "Data Processing"],
    github: "#",
    live: "#",
    image: "bg-gradient-to-br from-primary/20 to-secondary/20",
  },
  {
    title: "Project Based Learning Monitoring System",
    description:
      "A web-based enterprise-style system to manage and monitor all project-based learning activities at Politeknik Astra, featuring role-based access control, project workflows, and structured reporting dashboards.",
    tags: ["ASP.NET MVC", "SQL Server", "System Design", "Role-Based Access"],
    github: "#",
    live: "#",
    image: "bg-gradient-to-br from-secondary/20 to-accent/20",
  },
  {
    title: "P5M Attendance & Discipline Management System",
    description:
      "A web application integrated with attendance machines via REST API to record attendance data and manage student discipline violations, improving monitoring efficiency for academic staff.",
    tags: ["PHP", "CodeIgniter 3", "REST API", "MySQL", "Integration System"],
    github: "#",
    live: "#",
    image: "bg-gradient-to-br from-accent/20 to-primary/20",
  },
];

const otherProjects = [
  // {
  //   title: "RT/RW Net Community Network Infrastructure Design",
  //   description:
  //     "Designed and simulated a full community network system including topology planning, bandwidth analysis, and hardware selection using Cisco Packet Tracer and GNS3.",
  //   tags: ["Network Design", "Cisco Packet Tracer", "GNS3", "Infrastructure Planning"],
  // },
  {
    title: "Enterprise Database System Architecture",
    description:
      "Designed normalized relational database schemas for multiple academic and enterprise-style systems with performance and scalability considerations.",
    tags: ["SQL Server", "MySQL", "Oracle", "Database Design"],
  },
  {
    title: "System Analysis & Technical Documentation",
    description:
      "Produced comprehensive system analysis diagrams including use case, ERD, and process flows for software development projects.",
    tags: ["Visual Paradigm", "System Analysis", "ERD", "UML"],
  },
  {
    title: "Internal Business Process Automation Tools",
    description:
      "Developed internal automation scripts and small applications to support business processes and improve operational efficiency in enterprise environment.",
    tags: [".NET", "SQL Server", "Process Automation", "API Integration"],
  },
];


  return (
    <section id="projects" className="py-20 md:py-32 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary font-mono text-sm mb-4 block">
              // Featured Work
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Things I've <span className="text-gradient">Built</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of real-world and academic projects that reflect my
              experience in software development and system design
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-16 mb-20">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div
                  className={`w-full lg:w-1/2 aspect-video ${project.image} rounded-xl border border-border flex items-center justify-center`}
                >
                  <span className="text-4xl">💻</span>
                </div>
                <div className="w-full lg:w-1/2 space-y-4">
                  <span className="text-primary font-mono text-sm">
                    Featured Project
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm font-mono text-primary bg-primary/10 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-2">
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.live}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={22} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">
              Other Noteworthy Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div
                  key={project.title}
                  className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <Folder className="text-primary" size={32} />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Projects;
