"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CTA from "@/components/CTA";
import Link from "next/link";
import { products } from "@/data/products";

const filterGroups = [
  {
    title: "Application",
    options: [
      "Parts Washing Systems",
      "Degreasing Solutions",
      "Paint Removal Systems",
      "Descaling Solutions",
      "Finishing Solutions",
      "Anti-Spatter Solutions",
      "Weld Cleaning Solutions",
      "Surface Protection Solutions",
    ],
  },
  {
    title: "Industry",
    options: [
      "Automotive",
      "CNC & Precision Manufacturing",
      "Fabrication",
      "Railways",
      "General Manufacturing",
      "Heavy Engineering",
    ],
  },
  {
    title: "Contamination Type",
    options: [
      "Oil & Grease",
      "Coolant Residue",
      "Carbon Deposits",
      "Rust & Oxidation",
      "Scale & Mineral Deposits",
      "Paint & Coatings",
      "Adhesives & Sealants",
      "Dust & Fingerprints",
      "Welding Spatter",
      "Weld Discoloration",
    ],
  },
  {
    title: "Product Brand",
    options: ["CleanTech", "SafeWeld"],
  },
  {
    title: "Cleaner Base",
    options: [
      "Neutral",
      "Alkaline",
      "Acidic",
      "Water-Based",
      "Bio-Based",
      "Solvent-Free",
    ],
  },
  {
    title: "Material",
    options: [
      "Steel",
      "Stainless Steel",
      "Aluminum",
      "Brass",
      "Copper",
      "Cast Iron",
      "Galvanized Surfaces",
      "Painted Surfaces",
      "Mixed Metals",
    ],
  },
  {
    title: "Quality seal",
    options: [
      "VOC Free",
      "VOC Reduced",
      "Ready to Use",
      "Clean Blue",
      "Nature Boost",
    ],
  },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    setSearchQuery(searchParams.get("search") || "");
  }, [searchParams]);

  const filteredProducts = products
    .filter((p) => !p.products)
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <main className="flex flex-col min-h-screen bg-white">
      
      {/* Header Section */}
      <section className="bg-brand-bg2 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-brand-border">
        <div className="max-w-[1600px] mx-auto text-center">
          <p className="text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-green mb-3">Our Catalog</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-black mb-4">
            All <span className="text-green">Products</span>
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative mt-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <i className="fas fa-search text-brand-muted"></i>
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="block w-full pl-11 pr-4 py-3 border border-brand-border rounded-2xl bg-white focus:ring-2 focus:ring-green focus:border-green transition-all shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="flex-grow">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Filter Toggle (Mobile) */}
            <div className="lg:hidden flex justify-between items-center mb-4">
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 bg-green text-white px-4 py-2 rounded-lg font-bold text-sm"
              >
                <i className={`fas ${isFilterOpen ? 'fa-times' : 'fa-filter'}`}></i>
                {isFilterOpen ? 'Close Filters' : 'Filter Products'}
              </button>
              <p className="text-sm font-bold text-brand-muted">
                {filteredProducts.length} Products
              </p>
            </div>

            {/* Sidebar (Desktop) / Dropdown (Mobile) */}
            <aside className={`${isFilterOpen ? 'block' : 'hidden'} lg:block lg:w-72 shrink-0`}>
              <div className="sticky top-24 space-y-8">
                <div className="flex items-center justify-between lg:hidden mb-6">
                  <h2 className="text-lg font-bold text-brand-black">Filters</h2>
                  <button onClick={() => setIsFilterOpen(false)} className="text-brand-muted">
                    <i className="fas fa-times"></i>
                  </button>
                </div>

                {filterGroups.map((group, i) => (
                  <div key={i} className="border-b border-brand-border pb-6 last:border-0">
                    <h3 className="text-xs font-black uppercase tracking-widest text-green mb-4">
                      {group.title}
                    </h3>
                    <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                      {group.options.map((option, idx) => (
                        <label key={idx} className="flex items-center gap-3 group cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="w-4 h-4 rounded border-brand-border text-green focus:ring-green cursor-pointer"
                          />
                          <span className="text-sm text-brand-body group-hover:text-green transition-colors">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-grow">
              <div className="hidden lg:flex justify-between items-center mb-8 pb-4 border-b border-brand-border">
                <p className="text-sm font-bold text-brand-muted tracking-wide">
                  Showing <span className="text-brand-black">{filteredProducts.length}</span> high-performance products
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-brand-muted uppercase tracking-widest">Sort by:</span>
                  <select className="text-sm font-bold text-brand-black bg-transparent border-none focus:ring-0 cursor-pointer">
                    <option>Featured</option>
                    <option>Newest</option>
                    <option>Name (A-Z)</option>
                  </select>
                </div>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group border border-brand-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col"
                    >
                      <div className="dot-bg bg-brand-bg3 aspect-[4/3] flex items-center justify-center p-8 relative">
                        <div className="w-20 h-20 bg-green-light group-hover:bg-green transition-colors rounded-2xl flex items-center justify-center">
                          <i className={`fas ${product.icon} text-green group-hover:text-white transition-colors text-2xl`}></i>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="mb-4">
                          <span className="text-[10px] font-black uppercase tracking-[0.15em] text-green bg-green/10 px-2.5 py-1 rounded-full">
                            {product.category}
                          </span>
                        </div>
                        <h3 className="text-base font-bold text-brand-black mb-2 leading-tight">
                          {product.title}
                        </h3>
                        <p className="text-xs text-brand-body leading-relaxed mb-6 line-clamp-2">
                          {product.desc}
                        </p>
                        <div className="mt-auto">
                          <Link
                            href={`/products/${product.slug}`}
                            className="inline-flex items-center justify-center w-full bg-green text-white text-[10px] font-black uppercase tracking-widest py-3.5 rounded-xl hover:bg-green-dark transition-all shadow-md group-hover:shadow-lg"
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
                    We couldn&apos;t find any products matching &quot;{searchQuery}&quot;. Try a different search term.
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

          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <ProductsContent />
    </Suspense>
  );
}
