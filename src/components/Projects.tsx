import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with React, Node.js, and PostgreSQL.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      github: "https://github.com",
      live: "https://example.com",
      image: "bg-gradient-to-br from-primary/20 to-secondary/20",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tags: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
      github: "https://github.com",
      live: "https://example.com",
      image: "bg-gradient-to-br from-secondary/20 to-accent/20",
    },
    {
      title: "AI Content Generator",
      description:
        "An AI-powered application that generates marketing content, blog posts, and social media captions using OpenAI's GPT API.",
      tags: ["React", "Python", "FastAPI", "OpenAI"],
      github: "https://github.com",
      live: "https://example.com",
      image: "bg-gradient-to-br from-accent/20 to-primary/20",
    },
  ];

  const otherProjects = [
    {
      title: "Weather Dashboard",
      description: "Real-time weather app with location-based forecasts",
      tags: ["React", "API"],
    },
    {
      title: "Portfolio Generator",
      description: "CLI tool to generate developer portfolios from config",
      tags: ["Node.js", "CLI"],
    },
    {
      title: "Chat Application",
      description: "Real-time messaging with Socket.io",
      tags: ["Socket.io", "Express"],
    },
    {
      title: "Budget Tracker",
      description: "Personal finance management with charts",
      tags: ["React", "Chart.js"],
    },
    {
      title: "URL Shortener",
      description: "Custom link shortening service with analytics",
      tags: ["Go", "Redis"],
    },
    {
      title: "Markdown Editor",
      description: "Live preview markdown editor with syntax highlighting",
      tags: ["React", "Prism.js"],
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
              A selection of projects that showcase my skills and passion for
              development
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
                  <span className="text-4xl">🚀</span>
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={22} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
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
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
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
