import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { data: post, isLoading } = useQuery({
    queryKey: ["blog", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*")
        .eq("slug", slug)
        .single();
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return <div className="container mx-auto p-6">Loading...</div>;
  }

  if (!post) {
    return <div className="container mx-auto p-6">Post not found</div>;
  }

  return (
    <article className="container mx-auto p-6 max-w-4xl">
      <Button
        variant="ghost"
        className="mb-8"
        onClick={() => navigate("/blogs")}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blogs
      </Button>

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      
      <div className="flex items-center gap-4 text-muted-foreground mb-8">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          {new Date(post.created_at).toLocaleDateString()}
        </div>
        <div className="flex items-center gap-2">
          <User className="w-4 h-4" />
          Author
        </div>
      </div>

      <div 
        className="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
};

export default BlogPost;