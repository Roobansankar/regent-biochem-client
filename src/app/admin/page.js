"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { API } from "@/lib/api";

const cardMeta = [
  { label: "Messages", key: "messages", icon: "fa-envelope", href: "/admin/messages", bg: "bg-emerald-50", color: "text-emerald-600" },
  { label: "Blog Posts", key: "blogs", icon: "fa-newspaper", href: "/admin/blog", bg: "bg-sky-50", color: "text-sky-600" },
  { label: "Jobs", key: "jobs", icon: "fa-briefcase", href: "/admin/jobs", bg: "bg-violet-50", color: "text-violet-600" },
  { label: "Case Studies", key: "caseStudies", icon: "fa-book-open", href: "/admin/case-studies", bg: "bg-amber-50", color: "text-amber-600" },
  { label: "CTA Submissions", key: "cta", icon: "fa-bullhorn", href: "/admin/cta", bg: "bg-rose-50", color: "text-rose-600" },
  { label: "Products (Machines)", key: "products", icon: "fa-box", href: "/admin/products", bg: "bg-indigo-50", color: "text-indigo-600" },
  { label: "Products (Liquids)", key: "liquidProducts", icon: "fa-flask", href: "/admin/liquid-products", bg: "bg-cyan-50", color: "text-cyan-600" },
  { label: "Product Filters", key: "productFilters", icon: "fa-filter", href: "/admin/product-filters", bg: "bg-orange-50", color: "text-orange-600" },
  { label: "Blog Subscribers", key: "subscribers", icon: "fa-users", href: "/admin/subscribers", bg: "bg-teal-50", color: "text-teal-600" },
];

export default function AdminDashboard() {
  const [counts, setCounts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`${API}/products?limit=1`).then(r => r.json()),
      fetch(`${API}/contact?limit=1`).then(r => r.json()),
      fetch(`${API}/jobs?limit=1`).then(r => r.json()),
      fetch(`${API}/blogs?limit=1`).then(r => r.json()),
      fetch(`${API}/case-studies?limit=1`).then(r => r.json()),
      fetch(`${API}/cta?limit=1`).then(r => r.json()),
      fetch(`${API}/product-filters?raw=1`).then(r => r.json()),
      fetch(`${API}/products/all`).then(r => r.json()),
      fetch(`${API}/subscribers`).then(r => r.json()),
    ]).then(([prod, msg, jobs, blog, cs, cta, pf, all, subs]) => {
      const allProducts = all.products || [];
      const liquidCats = ["Cleaners", "Safeweld"];
      const liquidCount = allProducts.filter(p => liquidCats.includes(p.category)).length;
      const machineCount = allProducts.length - liquidCount;
      setCounts({
        products: machineCount,
        liquidProducts: liquidCount,
        messages: msg.total || 0,
        jobs: jobs.total || 0,
        blogs: blog.total || 0,
        caseStudies: cs.total || 0,
        cta: cta.total || 0,
        productFilters: (pf.options || []).length || 0,
        subscribers: subs.activeCount || 0,
      });
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-brand-black tracking-tight">Dashboard</h1>
          <p className="text-sm text-brand-muted mt-1">Welcome back, Admin. Here&apos;s your business overview.</p>
        </div>
        <div className="flex items-center gap-2 text-xs text-brand-muted">
          <i className="fas fa-sync-alt"></i>
          <span className="font-medium">Live</span>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20">
          <div className="animate-spin w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full mx-auto"></div>
          <p className="text-xs font-bold text-slate-400 uppercase mt-4">Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cardMeta.map((card) => (
            <Link key={card.key} href={card.href}>
              <div className="bg-white rounded-2xl border border-brand-border p-5 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer group">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-11 h-11 ${card.bg} rounded-xl flex items-center justify-center`}>
                    <i className={`fas ${card.icon} ${card.color} text-lg`}></i>
                  </div>
                  <span className="text-[10px] font-bold text-brand-muted uppercase tracking-wider flex items-center gap-1 group-hover:text-indigo-600 transition-colors">
                    View <i className="fas fa-arrow-right text-[8px]"></i>
                  </span>
                </div>
                <p className="text-2xl font-black text-brand-black">{counts[card.key] ?? "—"}</p>
                <p className="text-xs text-brand-muted mt-0.5 font-medium">{card.label}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
