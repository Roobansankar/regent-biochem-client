"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { API, imageUrl } from "@/lib/api";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API}/products?limit=100`);
      const data = await response.json();
      setProducts((data.products || []).filter(p => ["Cleaning Systems", "Paint Removal Systems", "Descaling Systems"].includes(p.category)));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product? This action cannot be undone.")) return;
    try {
      const response = await fetch(`${API}/products/${id}`, { method: "DELETE" });
      if (response.ok) {
        fetchProducts();
      } else {
        alert("Failed to delete product.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Manage Products</h1>
          <p className="text-sm text-slate-500 mt-1">Add, edit, and manage products displayed in the navbar.</p>
        </div>
        <Link
          href="/admin/products/new"
          className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-indigo-700 transition-all flex items-center gap-2 shadow-lg shadow-indigo-600/20 active:scale-[0.98]"
        >
          <i className="fas fa-plus text-xs"></i>
          Add New Product
        </Link>
      </div>

      <div className="relative w-72">
        <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
        <input type="text" placeholder="Search products..." value={search} onChange={e => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" />
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-500 w-20">S.No</th>
                <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-500">Product</th>
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
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Loading Products...</p>
                    </div>
                  </td>
                </tr>
              ) : products.length === 0 ? (
                <tr>
                  <td colSpan="4" className="px-6 py-20 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300">
                        <i className="fas fa-box text-xl"></i>
                      </div>
                      <p className="text-sm font-bold text-slate-500">No products found</p>
                      <Link href="/admin/products/new" className="text-xs font-bold text-indigo-600 hover:underline">Add your first product</Link>
                    </div>
                  </td>
                </tr>
              ) : (
                products.filter(p => !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase()) || p.slug.toLowerCase().includes(search.toLowerCase())).map((product, index) => (
                  <tr key={product.id} className="hover:bg-slate-50/50 transition-colors group">
                    <td className="px-6 py-4 text-xs font-bold text-slate-400">
                      {String(index + 1).padStart(2, '0')}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                          {product.images && product.images.length > 0 ? (
                            <img
                              src={imageUrl(product.images[0])}
                              className="w-full h-full object-cover"
                              alt=""
                              onError={(e) => { e.target.style.display = 'none'; }}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-300">
                              <i className="fas fa-image text-lg"></i>
                            </div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <span className="text-sm font-bold text-slate-800 block truncate group-hover:text-indigo-600 transition-colors">{product.title}</span>
                          <span className="text-[11px] font-medium text-slate-500">/{product.slug}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[10px] font-black uppercase tracking-wider">
                        {product.category || 'Uncategorized'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/products/edit/${product.id}`}
                          className="w-9 h-9 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all shadow-sm"
                          title="Edit"
                        >
                          <i className="fas fa-edit text-xs"></i>
                        </Link>
                        <button
                          onClick={() => handleDelete(product.id)}
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
