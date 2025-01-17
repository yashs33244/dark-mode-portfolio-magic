import { motion } from "framer-motion";
import { Code2, Database, Brain } from "lucide-react";

export const About = () => {
  const skills = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Next.js, React, TypeScript, Node.js",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "DevOps & Cloud",
      description: "Docker, AWS, GCP, CI/CD",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Machine Learning",
      description: "Python, Deep Learning, NLP",
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-foreground/80 leading-relaxed">
              I'm a BTech student at IIIT Una and the founder of FinalCV.com, where I'm revolutionizing how professionals create ATS-optimized resumes. My experience spans from building production-ready SaaS applications to implementing cutting-edge ML models.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ul className="space-y-2 text-foreground/80">
              <li>• Founded and scaled FinalCV.com to 1000+ monthly active users</li>
              <li>• Research Assistant at IIT Mandi working on AI/ML projects</li>
              <li>• Full-stack developer specializing in Next.js and TypeScript</li>
              <li>• Currently pursuing BTech with 8.3/10.0 CGPA</li>
            </ul>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="p-6 rounded-lg bg-card card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-primary mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-foreground/60">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};