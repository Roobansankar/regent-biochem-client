"use client";

import { useEffect, useState } from "react";
import { apiUrl } from "@/lib/api";

const API = apiUrl("/product-filters");

export default function AdminProductFilters() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newGroup, setNewGroup] = useState("");
  const [newOption, setNewOption] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const fetchFilters = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}?raw=1`);
      const data = await res.json();
      const rows = data.options || [];
      const map = {};
      for (const row of rows) {
        if (!map[row.group_name]) map[row.group_name] = [];
        map[row.group_name].push({ id: row.id, value: row.option_value });
      }
      const result = Object.entries(map).map(([title, options]) => ({ title, options }));
      setGroups(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchFilters(); }, []);

  const handleAdd = async () => {
    if (!newGroup || !newOption) return;
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ group_name: newGroup, option_value: newOption }),
      });
      if (res.ok) {
        setNewOption("");
        fetchFilters();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdate = async (id) => {
    if (!editValue) return;
    try {
      const res = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ option_value: editValue }),
      });
      if (res.ok) {
        setEditingId(null);
        setEditValue("");
        fetchFilters();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this filter option?")) return;
    try {
      const res = await fetch(`${API}/${id}`, { method: "DELETE" });
      if (res.ok) fetchFilters();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Product Filters</h1>
          <p className="text-sm text-slate-500 mt-1">Manage filter options shown in admin product form and products page.</p>
        </div>
      </div>

      {/* Add new option */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
        <div className="flex items-end gap-3 flex-wrap">
          <div>
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">Group</label>
            <select value={newGroup} onChange={e => setNewGroup(e.target.value)}
              className="px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none">
              <option value="">Select group</option>
              {["Application","Industry","Contamination Type","Product Brand","Cleaner Base","Material","Quality Seal"].map(g => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5 block">Option Value</label>
            <input value={newOption} onChange={e => setNewOption(e.target.value)}
              className="px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none"
              placeholder="e.g. Ultrasonic Cleaning" />
          </div>
          <button onClick={handleAdd}
            className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-black uppercase tracking-widest rounded-xl hover:bg-indigo-700 transition-all shadow-md">
            <i className="fas fa-plus text-xs mr-1.5"></i> Add
          </button>
        </div>
      </div>

      {/* Filter groups */}
      {loading ? (
        <div className="text-center py-20">
          <div className="animate-spin w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full mx-auto"></div>
          <p className="text-xs font-bold text-slate-400 uppercase mt-4">Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {groups.map(group => (
            <div key={group.title} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="px-4 py-3 bg-slate-50 border-b border-slate-200">
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-600">{group.title}</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">{group.options.length} options</p>
              </div>
              <div className="p-4 space-y-2">
                {group.options.map(opt => (
                  <div key={opt.id} className="flex items-center justify-between group/opt">
                    {editingId === opt.id ? (
                      <div className="flex items-center gap-2 flex-1">
                        <input value={editValue} onChange={e => setEditValue(e.target.value)}
                          className="flex-1 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500" />
                        <button onClick={() => handleUpdate(opt.id)} className="text-xs font-bold text-indigo-600 hover:text-indigo-800">
                          <i className="fas fa-check"></i>
                        </button>
                        <button onClick={() => setEditingId(null)} className="text-xs font-bold text-slate-400 hover:text-slate-600">
                          <i className="fas fa-times"></i>
                        </button>
                      </div>
                    ) : (
                      <>
                        <span className="text-sm font-semibold text-slate-700">{opt.value}</span>
                        <div className="flex items-center gap-1.5">
                          <button onClick={() => { setEditingId(opt.id); setEditValue(opt.value); }}
                            className="w-7 h-7 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center hover:bg-sky-600 hover:text-white text-[10px]">
                            <i className="fas fa-edit"></i>
                          </button>
                          <button onClick={() => handleDelete(opt.id)}
                            className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center hover:bg-rose-600 hover:text-white text-[10px]">
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
