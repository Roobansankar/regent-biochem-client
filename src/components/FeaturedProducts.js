"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { API, imageUrl } from "@/lib/api";

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/products/flagship`)
      .then(r => r.json())
      .then(d => {
        const list = d.products || [];
        setProducts(list);
        if (list.length > 0) setActiveTab(list[0].slug);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return null;
  if (products.length === 0) return null;

  const product = products.find(p => p.slug === activeTab) || products[0];
  if (!product) return null;

  const imgSrc = imageUrl(product.images?.[0]);

  return (
    <section className="bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8 sm:pt-6 sm:pb-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-sm sm:text-sm font-black uppercase tracking-[0.3em] text-green mb-4">GREEN WAY TO GROWTH</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-black">
              Flagship products, <span className="text-green">field-proven globally.</span>
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-green border border-green rounded px-5 py-2.5 hover:bg-green hover:text-white transition-colors whitespace-nowrap self-start sm:self-auto"
          >
            View All Products <i className="fas fa-arrow-right text-sm lg:text-xs"></i>
          </Link>
        </div>

        {products.length > 1 && (
          <div className="flex tabs-scroll overflow-x-auto border border-brand-border rounded-lg bg-white w-fit mb-8 max-w-full">
            {products.map(p => (
              <button
                key={p.slug}
                className={`px-5 py-2.5 text-sm lg:text-xs cursor-pointer font-semibold whitespace-nowrap border-r border-brand-border last:border-r-0 transition-colors ${
                  activeTab === p.slug ? "bg-green text-white" : "text-brand-muted hover:text-green"
                }`}
                onClick={() => setActiveTab(p.slug)}
              >
                {p.title}
              </button>
            ))}
          </div>
        )}

        <div className="bg-brand-bg3 rounded-2xl p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-2">
            <Link
              href={`/products/${product.slug}`}
              className="bg-white rounded-2xl border border-brand-border overflow-hidden relative group shadow-sm group/img aspect-square"
            >
              {imgSrc ? (
                <img src={imgSrc} alt={product.title} className="w-full h-full object-cover transition-all duration-500 group-hover/img:scale-105" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <i className={`fas ${product.icon || "fa-box"} text-5xl sm:text-6xl text-green/40 transition-all duration-500 group-hover/img:scale-105`}></i>
                </div>
              )}
            </Link>
            </div>

            <div className="lg:col-span-3">
              <Link href={`/products/${product.slug}`} className="block group/title">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-brand-black mb-4 leading-tight group-hover/title:text-green transition-colors">
                  {product.title}
                </h3>
              </Link>
              <p className="text-sm text-brand-body leading-relaxed mb-6">{product.description || product.desc}</p>
              {product.features && product.features.length > 0 && (
                <ul className="flex flex-col gap-2.5 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-brand-body">
                      <span className="w-2 h-2 rounded-full bg-green flex-shrink-0"></span> {feature}
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`/products/${product.slug}`}
                  className="text-center bg-green text-white font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-green-dark transition-all transform hover:-translate-y-0.5 shadow-lg shadow-green/20"
                >
                  View Product Details
                </Link>
                <Link
                  href="/contact"
                  className="text-center border-2 border-brand-border text-brand-black font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-brand-bg2 transition-all"
                >
                  Request Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
