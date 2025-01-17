import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function stripHtmlTags(html: string) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}

const BlogList = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setCurrentUser(session?.user?.email || null);
    };
    getUser();
  }, []);

  const { data: blogs, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from("blogs").delete().match({ id });

      if (error) throw error;

      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  if (isLoading) {
    return <div className="container mx-auto p-6">Loading...</div>;
  }

  const isAdmin = currentUser === "yashs3324@gmail.com";

  return (
    <section className="container mx-auto p-6">
      <a
        href="/"
        className="py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
      >
        Home
      </a>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Blog Posts</h1>
        <Link
          to="/post-blog"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
        >
          Create New Post
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs?.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow relative">
              {isAdmin && (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete(post.id);
                  }}
                  className="absolute top-2 right-2 p-2 text-red-500 hover:text-red-700 z-10"
                  aria-label="Delete post"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              )}
              <Link to={`/blog/${post.slug}`}>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.created_at).toLocaleDateString()}
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription className="text-foreground/60">
                    {stripHtmlTags(post.content).slice(0, 150)}...
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-primary text-sm">Read more →</span>
                </CardContent>
              </Link>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogList;
