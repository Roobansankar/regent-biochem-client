"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "react-quill-new/dist/quill.snow.css";

// Dynamic import for ReactQuill to avoid SSR issues
const ReactQuill = typeof window !== 'undefined' ? require('react-quill-new').default : () => null;

export default function BlogForm({ initialData = null, isEditing = false }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(initialData?.image || null);
  
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    excerpt: initialData?.excerpt || "",
    content: initialData?.content || "",
    category: initialData?.category || "",
    author: initialData?.author || "Admin",
    read_time: initialData?.read_time || "5 min read",
    tags: initialData?.tags || ""
  });

  // Sync formData with initialData when it changes
  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        slug: initialData.slug || "",
        excerpt: initialData.excerpt || "",
        content: initialData.content || "",
        category: initialData.category || "",
        author: initialData.author || "Admin",
        read_time: initialData.read_time || "5 min read",
        tags: initialData.tags || ""
      });
      setImagePreview(initialData.image || null);
    }
  }, [initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      if (name === "title" && !isEditing) {
        newData.slug = value.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
      }
      return newData;
    });
  };

  const handleContentChange = (content) => {
    setFormData(prev => ({ ...prev, content }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const method = isEditing ? "PUT" : "POST";
    const url = isEditing ? `http://localhost:5000/api/blogs/${initialData.id}` : "http://localhost:5000/api/blogs";

    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    if (imageFile) {
      data.append('image', imageFile);
    }

    try {
      const response = await fetch(url, {
        method,
        body: data
      });
      if (response.ok) {
        router.push("/admin/blog");
        router.refresh();
      } else {
        alert("Error saving blog");
      }
    } catch (err) {
      console.error(err);
      alert("Error saving blog");
    } finally {
      setLoading(false);
    }
  };

  const loadTemplate = () => {
    const template = `
<p>Industrial cleaning is no longer just about removing dirt; it is about doing so sustainably and efficiently. At Regent Biochem, we have developed a range of bio&#8209;active cleaning fluids that utilize natural microorganisms to break down oils and greases.</p>
<h2><strong>The Science Behind Bio&#8209;Active Cleaning</strong></h2>
<p>Unlike traditional solvents that simply dissolve grease and create hazardous waste, our bio&#8209;active fluids contain specialized microbes that literally "eat" the oil. This process, known as bio&#8209;remediation, turns contaminants into water and carbon dioxide.</p>
<blockquote>"Our mission is to provide high-performance cleaning solutions that protect both the operator and the environment."</blockquote>
<h2><strong>Key Benefits</strong></h2>
<ul>
  <li><strong>Eco-Friendly:</strong> Zero VOC emissions and non-toxic formulations.</li>
  <li><strong>Cost-Effective:</strong> The fluid lasts longer as the microbes constantly clean it.</li>
  <li><strong>Safety:</strong> Safe for skin contact and non-flammable.</li>
</ul>
<p>Explore our GT Parts Washer Pro range to see these fluids in action!</p>
    `.trim();
    setFormData(prev => ({ ...prev, content: template }));
  };

  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
      ['clean']
    ],
  };

  return (
    <div className="bg-white rounded-2xl w-full shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
        <div className="flex items-center gap-4">
          <h3 className="font-bold text-slate-800">{isEditing ? "Edit Blog Post" : "Create New Blog Post"}</h3>
          <button 
            type="button"
            onClick={loadTemplate}
            className="text-[10px] uppercase tracking-widest font-extrabold bg-green-50 text-green-700 px-3 py-1.5 rounded-lg border border-green-100 hover:bg-green-100 transition-all flex items-center gap-2"
          >
            <i className="fas fa-magic"></i> Load Template
          </button>
        </div>
        <button onClick={() => router.push("/admin/blog")} className="text-slate-400 hover:text-slate-600 flex items-center gap-2 text-sm font-bold">
          <i className="fas fa-arrow-left text-xs"></i> Back to List
        </button>
      </div>
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Title</label>
            <input 
              name="title" 
              value={formData.title} 
              onChange={handleInputChange} 
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all outline-none" 
              placeholder="Enter blog title"
              required 
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Slug (URL)</label>
            <input 
              name="slug" 
              value={formData.slug} 
              onChange={handleInputChange} 
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all outline-none" 
              placeholder="blog-post-url-slug"
              required 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Category</label>
            <input 
              name="category" 
              value={formData.category} 
              onChange={handleInputChange} 
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all outline-none" 
              placeholder="e.g. Technology"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Author</label>
            <input 
              name="author" 
              value={formData.author} 
              onChange={handleInputChange} 
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all outline-none" 
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Read Time</label>
            <input 
              name="read_time" 
              value={formData.read_time} 
              onChange={handleInputChange} 
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all outline-none" 
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Blog Featured Image</label>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl transition-colors hover:border-indigo-300">
            {imagePreview && (
              <div className="relative group">
                <img src={imagePreview} className="w-40 h-24 object-cover rounded-xl shadow-md border border-white" alt="Preview" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                  <i className="fas fa-eye text-white"></i>
                </div>
              </div>
            )}
            <div className="flex-1">
              <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" id="blog-image" />
              <label htmlFor="blog-image" className="cursor-pointer inline-flex items-center gap-2 bg-indigo-600 px-6 py-2.5 rounded-xl text-xs font-bold text-white hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20">
                <i className="fas fa-upload"></i> {imagePreview ? "Change Image" : "Upload Featured Image"}
              </label>
              <p className="text-[11px] text-slate-400 mt-3 font-medium">Recommended size: 1200x800px. Supports JPG, PNG or WebP.</p>
            </div>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Short Excerpt</label>
          <textarea 
            name="excerpt" 
            value={formData.excerpt} 
            onChange={handleInputChange} 
            rows="3" 
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white transition-all outline-none resize-none" 
            placeholder="Write a brief summary of the article..."
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Main Content</label>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden quill-editor-container focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:border-indigo-500 transition-all">
            <ReactQuill 
              theme="snow" 
              value={formData.content} 
              onChange={handleContentChange}
              modules={quillModules}
              placeholder="Start writing your masterpiece here..."
              className="h-[400px] mb-[45px]"
            />
          </div>
          <style jsx global>{`
            .quill-editor-container .ql-container {
              font-family: inherit;
              font-size: 15px;
            }
            .quill-editor-container .ql-editor {
              min-height: 400px;
              padding: 24px;
            }
            .quill-editor-container .ql-editor p {
              margin-bottom: 1rem !important;
              line-height: 1.6 !important;
            }
            .quill-editor-container .ql-toolbar {
              border-top: none !important;
              border-left: none !important;
              border-right: none !important;
              border-bottom: 1px solid #e2e8f0 !important;
              background: #f8fafc;
              padding: 12px !important;
            }
            .quill-editor-container .ql-container {
              border: none !important;
            }
          `}</style>
        </div>

        <div className="pt-4 flex items-center gap-4">
          <button 
            type="submit" 
            disabled={loading}
            className="flex-1 bg-indigo-600 text-white font-black uppercase tracking-widest text-sm py-4 rounded-xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/25 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <i className="fas fa-spinner fa-spin"></i> Processing...
              </span>
            ) : (
              isEditing ? "Update Blog Post" : "Publish Blog Post"
            )}
          </button>
          <button 
            type="button"
            onClick={() => router.push("/admin/blog")}
            className="px-8 py-4 bg-slate-100 text-slate-600 font-black uppercase tracking-widest text-sm rounded-xl hover:bg-slate-200 transition-all"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
