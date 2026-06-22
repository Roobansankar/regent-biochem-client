"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminCaseStudies() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchCaseStudies(); }, []);

  const fetchCaseStudies = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/case-studies");
      const data = await res.json();
      setCaseStudies(data.caseStudies || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (slug) => {
    if (!window.confirm("Delete this case study? This cannot be undone.")) return;
    try {
      const res = await fetch(`http://localhost:5000/api/case-studies/${slug}`, { method: "DELETE" });
      if (res.ok) fetchCaseStudies();
      else alert("Failed to delete");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Case Studies</h1>
          <p className="text-sm text-slate-500 mt-1">Manage your case study articles.</p>
        </div>
        <Link href="/admin/case-studies/new"
          className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/20 active:scale-[0.98]"
        >
          <i className="fas fa-plus text-xs"></i> Add New
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-500 w-16">S.No</th>
                <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-500">Title</th>
                <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-500">Category</th>
                <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-500">Product</th>
                <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr><td colSpan="5" className="px-6 py-20 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="animate-spin w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full"></div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Loading...</p>
                  </div>
                </td></tr>
              ) : caseStudies.length === 0 ? (
                <tr><td colSpan="5" className="px-6 py-20 text-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300">
                      <i className="fas fa-book-open text-xl"></i>
                    </div>
                    <p className="text-sm font-bold text-slate-500">No case studies found</p>
                    <Link href="/admin/case-studies/new" className="text-xs font-bold text-indigo-600 hover:underline">Create your first case study</Link>
                  </div>
                </td></tr>
              ) : (
                caseStudies.map((cs, i) => (
                  <tr key={cs.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4 text-xs font-bold text-slate-400">{String(i + 1).padStart(2, '0')}</td>
                    <td className="px-6 py-4"><span className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">{cs.title}</span></td>
                    <td className="px-6 py-4"><span className="inline-flex px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-wider">{cs.category || 'N/A'}</span></td>
                    <td className="px-6 py-4 text-xs font-semibold text-slate-600">{cs.product}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/admin/case-studies/edit/${cs.slug}`}
                          className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all shadow-sm" title="Edit"
                        ><i className="fas fa-edit text-xs"></i></Link>
                        <button onClick={() => handleDelete(cs.slug)}
                          className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center hover:bg-rose-600 hover:text-white transition-all shadow-sm" title="Delete"
                        ><i className="fas fa-trash-alt text-xs"></i></button>
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
