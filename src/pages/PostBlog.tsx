import { useState, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Bold, Italic, List, ListOrdered } from "lucide-react";

const AUTHORIZED_EMAIL = "yashs3324@gmail.com"; // Your email address

const PostBlog = () => {
  const [title, setTitle] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAuthorization();
  }, []);

  const checkAuthorization = async () => {
    const session = await supabase.auth.getSession();
    if (session.data.session?.user.email === AUTHORIZED_EMAIL) {
      setIsAuthorized(true);
    } else {
      navigate("/blogs");
      toast({
        title: "Unauthorized",
        description: "Only the site owner can create blog posts",
        variant: "destructive",
      });
    }
  };

  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none",
      },
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const session = await supabase.auth.getSession();
    if (
      !session.data.session ||
      session.data.session.user.email !== AUTHORIZED_EMAIL
    ) {
      toast({
        title: "Unauthorized",
        description: "Only the site owner can create blog posts",
        variant: "destructive",
      });
      return;
    }

    const content = editor?.getHTML() || "";

    const { error } = await supabase.from("blogs").insert({
      title,
      content,
      author_id: session.data.session.user.id,
    });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to create blog post",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Success",
      description: "Blog post created successfully",
    });
    navigate("/blogs");
  };

  if (!isAuthorized) {
    return null; // Don't render anything if not authorized
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Create New Blog Post</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            type="text"
            placeholder="Post Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-2xl font-bold"
            required
          />
        </div>

        <div className="border rounded-lg overflow-hidden">
          <div className="bg-muted p-2 border-b flex gap-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => editor?.chain().focus().toggleBold().run()}
              className={editor?.isActive("bold") ? "bg-accent" : ""}
            >
              <Bold className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => editor?.chain().focus().toggleItalic().run()}
              className={editor?.isActive("italic") ? "bg-accent" : ""}
            >
              <Italic className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => editor?.chain().focus().toggleBulletList().run()}
              className={editor?.isActive("bulletList") ? "bg-accent" : ""}
            >
              <List className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => editor?.chain().focus().toggleOrderedList().run()}
              className={editor?.isActive("orderedList") ? "bg-accent" : ""}
            >
              <ListOrdered className="h-4 w-4" />
            </Button>
          </div>
          <EditorContent editor={editor} className="min-h-[400px] p-4" />
        </div>

        <Button type="submit" className="w-full">
          Publish Post
        </Button>
      </form>
    </div>
  );
};

export default PostBlog;
