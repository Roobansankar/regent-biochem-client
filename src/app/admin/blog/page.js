"use client";

import { useEffect, useState, dynamic } from "react";
import "react-quill-new/dist/quill.snow.css";

// Dynamic import for ReactQuill to avoid SSR issues
const ReactQuill = typeof window !== 'undefined' ? require('react-quill-new').default : () => null;

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "",
    author: "Admin",
    read_time: "5 min read",
    tags: ""
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/blogs");
      const data = await response.json();
      setBlogs(data.blogs || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      if (name === "title" && !editingId) {
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
    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `http://localhost:5000/api/blogs/${editingId}` : "http://localhost:5000/api/blogs";

    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    if (imageFile) {
      data.append('image', imageFile);
    }

    try {
      const response = await fetch(url, {
        method,
        body: data // Use FormData for file uploads
      });
      if (response.ok) {
        setShowModal(false);
        setEditingId(null);
        setImageFile(null);
        setImagePreview(null);
        setFormData({ title: "", slug: "", excerpt: "", content: "", category: "", author: "Admin", read_time: "5 min read", tags: "" });
        fetchBlogs();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this blog?")) return;
    try {
      await fetch(`http://localhost:5000/api/blogs/${id}`, { method: "DELETE" });
      fetchBlogs();
    } catch (err) {
      console.error(err);
    }
  };

  const openEdit = async (blog) => {
    setLoading(true);
    try {
      // Fetch full blog details to get the 'content' field which might be missing in the list
      const response = await fetch(`http://localhost:5000/api/blogs/${blog.slug}`);
      const data = await response.json();
      
      if (data.blog) {
        setEditingId(data.blog.id);
        setFormData({ ...data.blog });
        setImagePreview(data.blog.image);
        setShowModal(true);
      }
    } catch (err) {
      console.error("Failed to fetch blog for editing:", err);
      alert("Error loading blog details");
    } finally {
      setLoading(false);
    }
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

  const loadTemplate = () => {
    const template = `
      <p class="text-lg text-brand-body leading-relaxed mb-6">
        Write a powerful introduction here to hook your readers...
      </p>
      
      <h2 class="text-2xl font-bold text-brand-black mt-12 mb-6">First Key Point</h2>
      <p class="text-brand-body leading-relaxed mb-6">
        Describe your technology or solution here. Explain the benefits in detail...
      </p>

      <blockquote class="border-l-4 border-green bg-green-light/30 p-8 my-10 rounded-r-2xl italic text-brand-black">
        "Add an inspiring quote or a key takeaway from your technical experts here."
      </blockquote>

      <h2 class="text-2xl font-bold text-brand-black mt-12 mb-6">Second Key Point</h2>
      <p class="text-brand-body leading-relaxed mb-6">
        Continue your explanation. Use bullet points below to list features:
      </p>

      <ul class="list-disc pl-6 space-y-2 text-brand-body mb-6">
        <li>Feature 1: Explain the technical benefit...</li>
        <li>Feature 2: Explain the environmental impact...</li>
        <li>Feature 3: Explain the cost savings...</li>
      </ul>

      <h2 class="text-2xl font-bold text-brand-black mt-12 mb-6">Conclusion</h2>
      <p class="text-brand-body leading-relaxed mb-6">
        Wrap up your article with a final thought and a call to action.
      </p>
    `;
    setFormData(prev => ({ ...prev, content: template }));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">Manage Blogs</h1>
        <button 
          onClick={() => { setEditingId(null); setShowModal(true); setImagePreview(null); setImageFile(null); setFormData({ title: "", slug: "", excerpt: "", content: "", category: "", author: "Admin", read_time: "5 min read", tags: "" }); }}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-700 transition-all"
        >
          Add New Blog
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-4 text-[11px] font-bold uppercase text-slate-500">Title</th>
              <th className="px-6 py-4 text-[11px] font-bold uppercase text-slate-500">Category</th>
              <th className="px-6 py-4 text-[11px] font-bold uppercase text-slate-500 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {blogs.map((blog) => (
              <tr key={blog.id} className="hover:bg-slate-50/50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={blog.image} className="w-10 h-10 rounded-lg object-cover bg-slate-100" alt="" />
                    <span className="text-sm font-semibold text-slate-800">{blog.title}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-xs font-medium text-slate-600">{blog.category}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button onClick={() => openEdit(blog)} className="p-2 text-sky-600 hover:bg-sky-50 rounded-lg"><i className="fas fa-edit"></i></button>
                    <button onClick={() => handleDelete(blog.id)} className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg"><i className="fas fa-trash"></i></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
              <div className="flex items-center gap-4">
                <h3 className="font-bold text-slate-800">{editingId ? "Edit Blog" : "Add New Blog"}</h3>
                {!editingId && (
                  <button 
                    type="button"
                    onClick={loadTemplate}
                    className="text-[10px] uppercase tracking-widest font-extrabold bg-green-50 text-green-700 px-3 py-1.5 rounded-lg border border-green-100 hover:bg-green-100 transition-all flex items-center gap-2"
                  >
                    <i className="fas fa-magic"></i> Load Template
                  </button>
                )}
              </div>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600"><i className="fas fa-times"></i></button>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500">Title</label>
                  <input name="title" value={formData.title} onChange={handleInputChange} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" required />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500">Slug (URL)</label>
                  <input name="slug" value={formData.slug} onChange={handleInputChange} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" required />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500">Category</label>
                  <input name="category" value={formData.category} onChange={handleInputChange} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500">Author</label>
                  <input name="author" value={formData.author} onChange={handleInputChange} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-500">Read Time</label>
                  <input name="read_time" value={formData.read_time} onChange={handleInputChange} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500">Blog Featured Image</label>
                <div className="flex items-center gap-4 p-4 bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl">
                  {imagePreview && (
                    <img src={imagePreview} className="w-24 h-24 object-cover rounded-lg shadow-sm" alt="Preview" />
                  )}
                  <div className="flex-1">
                    <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" id="blog-image" />
                    <label htmlFor="blog-image" className="cursor-pointer inline-flex items-center gap-2 bg-white px-4 py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all">
                      <i className="fas fa-upload"></i> {imagePreview ? "Change Image" : "Upload Image"}
                    </label>
                    <p className="text-[10px] text-slate-400 mt-2">Recommended size: 1200x800px. JPG, PNG or WebP.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500">Short Excerpt (Brief description for list view)</label>
                <textarea name="excerpt" value={formData.excerpt} onChange={handleInputChange} rows="2" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm resize-none" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-500">Main Content</label>
                <div className="bg-white rounded-lg border border-slate-200 overflow-hidden quill-editor-container">
                  <ReactQuill 
                    theme="snow" 
                    value={formData.content} 
                    onChange={handleContentChange}
                    modules={quillModules}
                    placeholder="Start writing your blog content here..."
                    className="h-[300px] mb-[45px]"
                  />
                </div>
                <style jsx global>{`
                  .quill-editor-container .ql-container {
                    font-family: inherit;
                    font-size: 14px;
                  }
                  .quill-editor-container .ql-editor {
                    min-height: 300px;
                  }
                  .quill-editor-container .ql-toolbar {
                    border-top: none !important;
                    border-left: none !important;
                    border-right: none !important;
                    border-bottom: 1px solid #e2e8f0 !important;
                    background: #f8fafc;
                  }
                  .quill-editor-container .ql-container {
                    border: none !important;
                  }
                `}</style>
              </div>

              <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/20">
                {editingId ? "Save Changes" : "Publish Blog Post"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
