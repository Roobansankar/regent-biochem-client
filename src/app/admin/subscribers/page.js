"use client";

import { useEffect, useState } from "react";
import { API } from "@/lib/api";

export default function AdminSubscribers() {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/subscribers`);
      const data = await res.json();
      setSubscribers(Array.isArray(data.subscribers) ? data.subscribers : []);
    } catch {
      setSubscribers([]);
    } finally {
      setLoading(false);
    }
  };

  const activeSubs = subscribers.filter(s => !s.unsubscribed_at);
  const unsubscribedSubs = subscribers.filter(s => s.unsubscribed_at);

  const filtered = subscribers.filter(s =>
    !search || s.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Blog Subscribers</h1>
          <p className="text-sm text-slate-500 mt-1">Manage your blog subscribers.</p>
        </div>
        <button onClick={fetchSubscribers}
          className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all">
          <i className="fas fa-sync-alt"></i> Refresh
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Total</p>
          <p className="text-3xl font-bold text-slate-800">{subscribers.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-green-500 mb-1">Active</p>
          <p className="text-3xl font-bold text-green-600">{activeSubs.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">Unsubscribed</p>
          <p className="text-3xl font-bold text-slate-500">{unsubscribedSubs.length}</p>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-64 bg-white rounded-xl border border-slate-200">
          <div className="animate-spin w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full"></div>
        </div>
      ) : subscribers.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 bg-white rounded-xl border border-slate-200 text-slate-400">
          <i className="fas fa-users text-4xl mb-3 opacity-20"></i>
          <p>No subscribers yet.</p>
        </div>
      ) : (
        <>
          <div className="relative w-72">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
            <input type="text" placeholder="Search by email..." value={search} onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" />
          </div>

          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-4 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500 w-16 text-center">#</th>
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500">Email</th>
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500">Subscribed</th>
                    <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filtered.map((sub, i) => (
                    <tr key={sub.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-4 py-4 text-center text-xs font-medium text-slate-400">{i + 1}</td>
                      <td className="px-6 py-4">
                        <p className="font-semibold text-slate-800 text-sm">{sub.email}</p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-xs text-slate-500">{new Date(sub.subscribed_at).toLocaleDateString()}</p>
                      </td>
                      <td className="px-6 py-4">
                        {sub.unsubscribed_at ? (
                          <span className="inline-flex px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                            Unsubscribed
                          </span>
                        ) : (
                          <span className="inline-flex px-2 py-0.5 rounded-md bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wider">
                            Active
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
