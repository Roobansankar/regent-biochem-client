"use client";

import BlogForm from "@/components/admin/BlogForm";

export default function NewBlogPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Create Blog Article</h1>
        <p className="text-sm text-slate-500 mt-1">Fill in the details below to publish a new blog post.</p>
      </div>
      
      <BlogForm />
    </div>
  );
}
