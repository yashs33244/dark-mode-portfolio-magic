import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 z-0" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container relative z-10"
      >
        <div className="text-center space-y-6">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
              Yash Singh
            </span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl text-foreground/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Full Stack Developer & ML Engineer
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-foreground/60 mb-4">
              Building high-impact web applications serving 1000+ monthly users | Combining modern web technologies with AI/ML expertise
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-lg bg-card/50">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-foreground/60">Monthly Users</div>
              </div>
              <div className="p-4 rounded-lg bg-card/50">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-foreground/60">Paying Customers</div>
              </div>
              <div className="p-4 rounded-lg bg-card/50">
                <div className="text-2xl font-bold text-primary">450+</div>
                <div className="text-sm text-foreground/60">LeetCode Problems</div>
              </div>
              <div className="p-4 rounded-lg bg-card/50">
                <div className="text-2xl font-bold text-primary">8.3</div>
                <div className="text-sm text-foreground/60">CGPA</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="flex justify-center gap-6 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};