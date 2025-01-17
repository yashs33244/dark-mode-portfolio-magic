import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Code2,
  ExternalLink,
  MousePointer2,
} from "lucide-react";
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
      stats: "Rating (1100+)",
      url: "https://codeforces.com/profile/yashs3324",
    },
  ];

  const nameAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        bounce: 0.4,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: Math.random() * 400 + 50,
              height: Math.random() * 400 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 360],
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/40 z-0" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container relative z-10"
      >
        <div className="text-center space-y-8">
          {/* Enhanced name animation */}
          <motion.div
            variants={nameAnimation}
            initial="hidden"
            animate="visible"
            className="relative inline-block"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient relative">
                Yash Singh
                <motion.div
                  className="absolute -right-8 top-0 text-primary/60"
                  animate={{
                    y: [-5, 5, -5],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <MousePointer2 className="w-6 h-6" />
                </motion.div>
              </span>
            </h1>
          </motion.div>

          <motion.h2
            className="text-2xl md:text-3xl text-foreground/80 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="font-semibold">Full Stack Developer</span> &{" "}
            <span className="font-semibold">ML Enthusiast</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg text-foreground/60 mb-12">
              Building high-impact web applications serving 1000+ monthly users
              | Combining modern web technologies with AI/ML expertise
            </p>

            {/* Enhanced stats cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { value: "1000+", label: "Monthly Users" },
                { value: "10+", label: "Paying Customers" },
                { value: "450+", label: "LeetCode Problems" },
                { value: "8.3", label: "CGPA" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="p-6 rounded-xl bg-card/50 backdrop-blur-sm card-hover transform-gpu"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    className="text-3xl font-bold text-primary"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced coding profiles */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {codingProfiles.map((profile, index) => (
                <motion.a
                  key={profile.label}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 rounded-xl bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px -15px rgba(0,0,0,0.2)",
                  }}
                >
                  <motion.div
                    className="text-primary"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {profile.icon}
                  </motion.div>
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

          {/* Enhanced social links */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px -15px rgba(0,0,0,0.2)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1 }}
              >
                <motion.span
                  className="text-foreground/60 group-hover:text-primary transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {link.icon}
                </motion.span>
                <span className="text-sm font-medium">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="default"
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 text-lg px-8 py-6"
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More About Me
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
