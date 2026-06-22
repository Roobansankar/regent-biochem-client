"use client";

import { useEffect, useState } from "react";

export default function AdminCTA() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 10;

  useEffect(() => {
    fetchSubmissions();
  }, [page]);

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/cta?page=${page}&limit=${limit}`);
      const data = await res.json();
      setSubmissions(data.submissions || []);
      setTotal(data.total || 0);
    } catch {
      setSubmissions([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this submission?")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/cta/${id}`, { method: "DELETE" });
      if (res.ok) fetchSubmissions();
    } catch {}
  };

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">CTA Submissions</h1>
          <p className="text-sm text-slate-500 mt-1">Emails collected from the consultation CTA form.</p>
        </div>
        <button
          onClick={() => fetchSubmissions()}
          className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50"
        >
          <i className="fas fa-sync-alt"></i> Refresh
        </button>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64 bg-white rounded-xl border border-slate-200">
          <div className="animate-spin w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full"></div>
        </div>
      ) : submissions.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 bg-white rounded-xl border border-slate-200 text-slate-400">
          <i className="fas fa-inbox text-4xl mb-3 opacity-20"></i>
          <p>No submissions yet.</p>
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-4 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-16 text-center">S.No</th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500">Email</th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500">Date</th>
                <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {submissions.map((s, i) => (
                <tr key={s.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-4 py-4 text-center text-xs font-medium text-slate-400">
                    {(page - 1) * limit + i + 1}
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-slate-800 text-sm">{s.email}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="text-[11px] text-slate-500 font-medium">
                      {new Date(s.created_at).toLocaleDateString()} {new Date(s.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDelete(s.id)}
                      className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center hover:bg-rose-100 transition-all"
                    >
                      <i className="fas fa-trash-alt text-xs"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200">
          <p className="text-xs text-slate-500">
            Showing {(page - 1) * limit + 1} to {Math.min(page * limit, total)} of {total}
          </p>
          <div className="flex items-center gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium disabled:opacity-50 hover:bg-slate-50"
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-8 h-8 rounded-lg text-xs font-bold ${page === i + 1 ? "bg-indigo-600 text-white" : "hover:bg-slate-100 text-slate-600"}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-medium disabled:opacity-50 hover:bg-slate-50"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
