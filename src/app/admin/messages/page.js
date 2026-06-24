"use client";

import { useEffect, useState } from "react";
import { API } from "@/lib/api";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  
  // Pagination state
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);

  // Edit state
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  useEffect(() => {
    console.log("AdminMessages component mounted");
    fetchMessages();
  }, [page, limit]);

  const fetchMessages = async () => {
    console.log("Fetching messages for page:", page, "limit:", limit);
    setLoading(true);
    try {
      const url = `${API}/contact?page=${page}&limit=${limit}`;
      console.log("Request URL:", url);
      const response = await fetch(url);
      console.log("Response status:", response.status);
      if (!response.ok) throw new Error("Failed to fetch messages");
      const data = await response.json();
      console.log("Full data received:", data);
      setMessages(Array.isArray(data.messages) ? data.messages : []);
      setTotal(data.total || 0);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    try {
      const response = await fetch(`${API}/contact/${id}`, { method: "DELETE" });
      if (response.ok) {
        fetchMessages();
      } else {
        alert("Failed to delete message");
      }
    } catch (err) {
      alert("Error deleting message");
    }
  };

  const startEdit = (msg) => {
    setEditingId(msg.id);
    setEditForm({ ...msg });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/contact/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm),
      });
      if (response.ok) {
        setEditingId(null);
        fetchMessages();
      } else {
        alert("Failed to update message");
      }
    } catch (err) {
      alert("Error updating message");
    }
  };

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Contact Messages</h1>
          <p className="text-sm text-slate-500 mt-1">View and manage inquiries from your website.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-lg">
            <span className="text-xs font-medium text-slate-500">Show:</span>
            <select 
              value={limit} 
              onChange={(e) => { setLimit(parseInt(e.target.value)); setPage(1); }}
              className="text-xs font-bold text-slate-700 focus:outline-none bg-transparent cursor-pointer"
            >
              <option value="5">5 rows</option>
              <option value="10">10 rows</option>
              <option value="20">20 rows</option>
              <option value="50">50 rows</option>
            </select>
          </div>
          <button 
            onClick={() => { setPage(1); fetchMessages(); }}
            className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all"
          >
            <i className="fas fa-sync-alt"></i>
            Refresh
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64 bg-white rounded-xl border border-slate-200">
          <div className="animate-spin w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-xl text-sm">
          {error}
        </div>
      ) : (
        <>
          <div className="relative w-72">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
            <input type="text" placeholder="Search messages..." value={search} onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" />
          </div>

          {(() => {
            const filtered = messages.filter(m => !search || m.name?.toLowerCase().includes(search.toLowerCase()) || m.email?.toLowerCase().includes(search.toLowerCase()) || m.subject?.toLowerCase().includes(search.toLowerCase()) || m.message?.toLowerCase().includes(search.toLowerCase()));
            if (messages.length === 0) return (
              <div className="flex flex-col items-center justify-center h-64 bg-white rounded-xl border border-slate-200 text-slate-400">
                <i className="fas fa-envelope-open text-4xl mb-3 opacity-20"></i>
                <p>No messages yet.</p>
              </div>
            );
            if (filtered.length === 0) return (
              <div className="flex flex-col items-center justify-center h-64 bg-white rounded-xl border border-slate-200 text-slate-400">
                <i className="fas fa-envelope-open text-4xl mb-3 opacity-20"></i>
                <p>No messages match your search.</p>
              </div>
            );
            return (
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-4 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-16 text-center">S.No</th>
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500">Sender</th>
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500">Subject</th>
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500">Message</th>
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500">Date</th>
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filtered.map((msg, index) => (
                    <tr key={msg.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-4 py-4 text-center text-xs font-medium text-slate-400">
                        {(page - 1) * limit + index + 1}
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-semibold text-slate-800 text-sm">{msg.name}</p>
                        <p className="text-[11px] text-slate-500">{msg.email}</p>
                        <p className="text-[10px] text-slate-400">{msg.phone}</p>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase tracking-wider">
                          {msg.subject || 'No Subject'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-xs text-slate-600 line-clamp-2 max-w-xs">{msg.message}</p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <p className="text-[11px] text-slate-500 font-medium">
                          {new Date(msg.created_at).toLocaleDateString()}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button 
                            onClick={() => startEdit(msg)}
                            className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center hover:bg-sky-100 transition-all"
                          >
                            <i className="fas fa-edit text-xs"></i>
                          </button>
                          <button 
                            onClick={() => handleDelete(msg.id)}
                            className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center hover:bg-rose-100 transition-all"
                          >
                            <i className="fas fa-trash-alt text-xs"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
            );
          })()}

          {/* Pagination Controls */}
          <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200">
            <p className="text-xs text-slate-500">
              Showing <span className="font-semibold">{(page - 1) * limit + 1}</span> to <span className="font-semibold">{Math.min(page * limit, total)}</span> of <span className="font-semibold">{total}</span> messages
            </p>
            <div className="flex items-center gap-2">
              <button 
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium disabled:opacity-50 hover:bg-slate-50 transition-all"
              >
                Previous
              </button>
              <div className="flex items-center gap-1">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${page === i + 1 ? 'bg-indigo-600 text-white' : 'hover:bg-slate-100 text-slate-600'}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button 
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium disabled:opacity-50 hover:bg-slate-50 transition-all"
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}

      {/* Edit Modal */}
      {editingId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-800">Edit Message</h3>
              <button onClick={() => setEditingId(null)} className="text-slate-400 hover:text-slate-600">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <form onSubmit={handleUpdate} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Name</label>
                  <input 
                    type="text" 
                    value={editForm.name} 
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email</label>
                  <input 
                    type="email" 
                    value={editForm.email} 
                    onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Phone</label>
                  <input 
                    type="text" 
                    value={editForm.phone} 
                    onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Subject</label>
                  <input 
                    type="text" 
                    value={editForm.subject} 
                    onChange={(e) => setEditForm({ ...editForm, subject: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Message</label>
                <textarea 
                  rows="4"
                  value={editForm.message} 
                  onChange={(e) => setEditForm({ ...editForm, message: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 resize-none"
                ></textarea>
              </div>
              <div className="pt-2 flex gap-3">
                <button 
                  type="button"
                  onClick={() => setEditingId(null)}
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-all"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 transition-all"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
