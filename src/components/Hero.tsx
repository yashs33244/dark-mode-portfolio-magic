import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Code2, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      url: "https://github.com/yashs33244/",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/yash-singh-2757aa1b4/",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: "Twitter",
      url: "https://x.com/Yash_s33244",
    },
  ];

  const codingProfiles = [
    {
      icon: <Code2 className="w-6 h-6" />,
      label: "LeetCode",
      stats: "450+ Problems",
      url: "https://leetcode.com/u/yashs33244/",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      label: "CodeForces",
      stats: "Specialist (1400+)",
      url: "https://codeforces.com/profile/yourusername",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/50 z-0" />

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
            Full Stack Developer & ML Enthusiast
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-foreground/60 mb-8">
              Building high-impact web applications serving 1000+ monthly users
              | Combining modern web technologies with AI/ML expertise
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-8">
              <div className="p-4 rounded-lg bg-card/50 card-hover">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-foreground/60">Monthly Users</div>
              </div>
              <div className="p-4 rounded-lg bg-card/50 card-hover">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-foreground/60">
                  Paying Customers
                </div>
              </div>
              <div className="p-4 rounded-lg bg-card/50 card-hover">
                <div className="text-2xl font-bold text-primary">450+</div>
                <div className="text-sm text-foreground/60">
                  LeetCode Problems
                </div>
              </div>
              <div className="p-4 rounded-lg bg-card/50 card-hover">
                <div className="text-2xl font-bold text-primary">8.3</div>
                <div className="text-sm text-foreground/60">CGPA</div>
              </div>
            </div>

            {/* Coding Profiles */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {codingProfiles.map((profile, index) => (
                <motion.a
                  key={profile.label}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg bg-card/50 hover:bg-card/70 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="text-primary">{profile.icon}</div>
                  <div className="flex-1 text-left">
                    <div className="font-semibold">{profile.label}</div>
                    <div className="text-sm text-foreground/60">
                      {profile.stats}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-foreground/40" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 hover:bg-card/70 transition-colors"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <span className="text-foreground/60 group-hover:text-primary transition-colors">
                  {link.icon}
                </span>
                <span className="text-sm font-medium">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-8"
          >
            <Button
              variant="default"
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More About Me
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
