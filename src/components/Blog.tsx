import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Calendar } from "lucide-react";

export const Blog = () => {
  const posts = [
    {
      title: "System Design Deep Dive: Building Scalable Distributed Systems",
      date: "March 15, 2024",
      description: "Exploring the fundamentals of distributed systems, CAP theorem, and practical implementation strategies.",
      category: "System Design"
    },
    {
      title: "Computer Networks: Understanding TCP/IP Protocol Suite",
      date: "March 10, 2024",
      description: "A comprehensive guide to TCP/IP, including packet routing, congestion control, and network security.",
      category: "Computer Networks"
    },
    {
      title: "Optimizing Database Performance in Distributed Systems",
      date: "March 5, 2024",
      description: "Best practices for database sharding, replication, and query optimization in large-scale applications.",
      category: "System Design"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-card/50">
      <div className="container">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center gradient-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Latest Insights
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-hover"
            >
              <Card className="h-full bg-card">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-foreground/60 mb-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <CardTitle className="text-xl font-semibold">{post.title}</CardTitle>
                  <CardDescription className="text-foreground/60">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {post.category}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};