import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export const Projects = () => {
  const projects = [
    {
      title: "FinalCV.com",
      description: "AI-powered resume builder trusted by professionals from Flipkart, Uber, Amazon",
      stack: "Next.js, TypeScript, Prisma, PostgreSQL, Docker, Turborepo, Recoil, Gemini API",
      liveLink: "https://finalcv.com",
      github: "#",
      metrics: [
        "1000+ monthly active users",
        "10+ paying customers",
        "90% user satisfaction rate",
      ]
    },
    {
      title: "AI Surveillance System",
      description: "Enterprise-level surveillance system with real-time monitoring and AI capabilities",
      stack: "Python, TensorFlow, AWS, OpenCV",
      liveLink: "https://surv.yashprojects.online",
      github: "#",
      metrics: [
        "Advanced AI-powered monitoring",
        "AWS-deployed scalable architecture",
        "Real-time alert system"
      ]
    },
    {
      title: "IIITU-Today",
      description: "Campus-wide social media platform with optimized performance",
      stack: "Next.js, Prisma, PostgreSQL, Redis, Tailwind CSS",
      liveLink: "#",
      github: "#",
      metrics: [
        "40% faster page loads with Redis",
        "Efficient Prisma ORM queries",
        "Next.js SSR/SSG optimization"
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                  <CardDescription className="text-foreground/60">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-sm text-foreground/60">
                      <strong>Tech Stack:</strong> {project.stack}
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-sm text-foreground/80">
                      {project.metrics.map((metric, i) => (
                        <li key={i}>{metric}</li>
                      ))}
                    </ul>
                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};