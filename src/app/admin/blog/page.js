"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { API } from "@/lib/api";

export default function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API}/blogs`);
      const data = await response.json();
      setBlogs(data.blogs || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog post? This action cannot be undone.")) return;
    try {
      const response = await fetch(`${API}/blogs/${id}`, { method: "DELETE" });
      if (response.ok) {
        fetchBlogs();
      } else {
        alert("Failed to delete the blog post.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Manage Blogs</h1>
          <p className="text-sm text-slate-500 mt-1">Create, edit, and manage your website articles.</p>
        </div>
        <Link 
          href="/admin/blog/new"
          className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/20 active:scale-[0.98]"
        >
          <i className="fas fa-plus text-xs"></i>
          Add New Blog
        </Link>
      </div>

      <div className="relative w-72">
        <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
        <input type="text" placeholder="Search blogs..." value={search} onChange={e => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" />
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-500 w-20">S.No</th>
                <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-500">Article</th>
                <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-500">Category</th>
                <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan="4" className="px-6 py-20 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="animate-spin w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full"></div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Loading Blogs...</p>
                    </div>
                  </td>
                </tr>
              ) : blogs.length === 0 ? (
                <tr>
                  <td colSpan="4" className="px-6 py-20 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300">
                        <i className="fas fa-newspaper text-xl"></i>
                      </div>
                      <p className="text-sm font-bold text-slate-500">No blog posts found</p>
                      <Link href="/admin/blog/new" className="text-xs font-bold text-indigo-600 hover:underline">Create your first post</Link>
                    </div>
                  </td>
                </tr>
              ) : (
                blogs.filter(b => !search || b.title?.toLowerCase().includes(search.toLowerCase()) || b.category?.toLowerCase().includes(search.toLowerCase()) || b.author?.toLowerCase().includes(search.toLowerCase())).map((blog, index) => (
                  <tr key={blog.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4 text-xs font-bold text-slate-400">
                      {String(index + 1).padStart(2, '0')}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                          <img 
                            src={blog.image || 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><rect fill="#e2e8f0" width="48" height="48"/><text fill="#64748b" font-family="Arial" font-size="8" font-weight="bold" x="24" y="24" text-anchor="middle" dominant-baseline="middle">No Image</text></svg>')} 
                            className="w-full h-full object-cover" 
                            alt="" 
                            onError={(e) => { e.target.src = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><rect fill="#e2e8f0" width="48" height="48"/><text fill="#64748b" font-family="Arial" font-size="8" font-weight="bold" x="24" y="24" text-anchor="middle" dominant-baseline="middle">No Image</text></svg>'); }}
                          />
                        </div>
                        <div className="min-w-0">
                          <span className="text-sm font-bold text-slate-800 block truncate group-hover:text-indigo-600 transition-colors">{blog.title}</span>
                          <span className="text-[11px] font-medium text-slate-500 flex items-center gap-2">
                            <i className="fas fa-user text-[9px]"></i> {blog.author} 
                            <span className="text-slate-300">|</span>
                            <i className="fas fa-clock text-[9px]"></i> {blog.read_time}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-wider">
                        {blog.category || 'Uncategorized'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link 
                          href={`/admin/blog/edit/${blog.slug}`}
                          className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all shadow-sm"
                          title="Edit"
                        >
                          <i className="fas fa-edit text-xs"></i>
                        </Link>
                        <button 
                          onClick={() => handleDelete(blog.id)} 
                          className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center hover:bg-rose-600 hover:text-white transition-all shadow-sm"
                          title="Delete"
                        >
                          <i className="fas fa-trash-alt text-xs"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
