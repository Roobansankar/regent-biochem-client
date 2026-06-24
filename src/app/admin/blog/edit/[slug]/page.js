"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BlogForm from "@/components/admin/BlogForm";
import { API } from "@/lib/api";

export default function EditBlogPage() {
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`${API}/blogs/${params.slug}`);
        const data = await response.json();
        if (data.blog) {
          setBlog(data.blog);
        }
      } catch (err) {
        console.error("Failed to fetch blog:", err);
      } finally {
        setLoading(false);
      }
    };

    if (params.slug) {
      fetchBlog();
    }
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center space-y-4">
        <p className="text-slate-500 font-bold">Blog not found</p>
        <button 
          onClick={() => window.history.back()}
          className="text-indigo-600 font-bold hover:underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Edit Blog Article</h1>
        <p className="text-sm text-slate-500 mt-1">Update the content and settings for this blog post.</p>
      </div>
      
      <BlogForm initialData={blog} isEditing={true} />
    </div>
  );
}
