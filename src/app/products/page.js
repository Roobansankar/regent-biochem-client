"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Link from "next/link";
import { products } from "@/data/products";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-brand-bg2 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-brand-border">
        <div className="max-w-[1600px] mx-auto text-center">
          <p className="text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-green mb-3">Our Catalog</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-black mb-6">
            All <em className="text-green">Products</em>
          </h1>
          <p className="text-lg text-brand-body max-w-2xl mx-auto mb-10">
            Explore our comprehensive range of industrial cleaning systems, chemicals, and automation solutions designed for performance and sustainability.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <i className="fas fa-search text-brand-muted"></i>
            </div>
            <input
              type="text"
              placeholder="Search products by name, category, or description..."
              className="block w-full pl-11 pr-4 py-4 border border-brand-border rounded-2xl bg-white focus:ring-2 focus:ring-green focus:border-green transition-all shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="max-w-[1600px] mx-auto">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group border border-brand-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col"
                >
                  <div className="dot-bg bg-brand-bg3 aspect-[4/3] flex items-center justify-center p-8 relative">
                    <div className="w-24 h-24 bg-green-light group-hover:bg-green transition-colors rounded-3xl flex items-center justify-center">
                      <i className={`fas ${product.icon} text-green group-hover:text-white transition-colors text-3xl`}></i>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-green bg-green/10 px-2.5 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-brand-black mb-2 leading-tight">
                      {product.title}
                    </h3>
                    <p className="text-sm text-brand-body leading-relaxed mb-6 line-clamp-3">
                      {product.desc}
                    </p>
                    <div className="mt-auto">
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center justify-center w-full bg-green text-white text-xs font-extrabold uppercase tracking-widest py-3.5 rounded-xl hover:bg-green-dark transition-all shadow-md group-hover:shadow-lg"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-brand-bg2 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-search text-brand-muted text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-brand-black mb-2">No products found</h3>
              <p className="text-brand-body">
                We couldn't find any products matching "{searchQuery}". Try a different search term.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-6 text-green font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
