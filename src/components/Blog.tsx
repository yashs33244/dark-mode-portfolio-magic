import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export const Blog = () => {
  const { data: posts } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(3);
      
      if (error) throw error;
      return data;
    },
  });

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
          {posts?.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-hover"
            >
              <Link to={`/blog/${post.slug}`}>
                <Card className="h-full bg-card">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-foreground/60 mb-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.created_at).toLocaleDateString()}
                    </div>
                    <CardTitle className="text-xl font-semibold">{post.title}</CardTitle>
                    <CardDescription className="text-foreground/60">
                      {post.content.slice(0, 150)}...
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-primary">Read more →</span>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link 
            to="/blogs"
            className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
};