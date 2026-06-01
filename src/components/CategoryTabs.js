"use client";

import { useState } from "react";
import Link from "next/link";

export default function CategoryTabs({ products, category }) {
  const [activeTab, setActiveTab] = useState(products[0]?.id || null);
  const active = products.find((p) => p.id === activeTab);

  if (!active || products.length === 0) return null;

  return (
    <section className="bg-brand-bg2">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8 sm:pt-8 sm:pb-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="w-10 h-px bg-green/30"></span>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green">
            {category}
          </span>
        </div>

        {/* Tabs */}
        <div className="flex tabs-scroll overflow-x-auto border border-brand-border rounded-lg bg-white w-fit mb-8 max-w-full">
          {products.map((p, i) => (
            <button
              key={p.id}
              className={`px-5 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                i < products.length - 1 ? "border-r border-brand-border" : ""
              } ${
                activeTab === p.id ? "bg-green text-white" : "text-brand-muted hover:text-green"
              }`}
              onClick={() => setActiveTab(p.id)}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Product Showcase */}
        <div className="bg-white border border-brand-border rounded-2xl p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            {/* Image */}
            <Link
              href={`/products/${active.slug}`}
              className="dot-bg bg-brand-bg3 rounded-xl aspect-[4/3] flex items-center justify-center relative overflow-hidden p-6 group/img"
            >
              <img
                src={active.img || "/placeholder.jpg"}
                alt={active.title}
                className="max-w-full max-h-full object-contain relative z-10 drop-shadow-2xl transition-all duration-500 group-hover/img:scale-105"
              />
            </Link>
            {/* Info */}
            <div>
              <Link href={`/products/${active.slug}`} className="block group/title">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-black mb-4 leading-tight group-hover/title:text-green transition-colors">
                  {active.title}
                </h3>
              </Link>
              <p className="text-base text-brand-body leading-relaxed mb-6">{active.desc}</p>
              {active.features && active.features.length > 0 && (
                <ul className="flex flex-col gap-2.5 mb-8">
                  {active.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-brand-body">
                      <span className="w-2 h-2 rounded-full bg-green flex-shrink-0"></span> {feature}
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/products/${active.slug}`}
                  className="text-center bg-green text-white font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-green-dark transition-all transform hover:-translate-y-0.5 shadow-lg shadow-green/20"
                >
                  View Product Details
                </Link>
                <Link
                  href="/contact"
                  className="text-center border-2 border-brand-border text-brand-black font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-brand-bg2 transition-all"
                >
                  Request Technical Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
