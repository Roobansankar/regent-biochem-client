"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CTA from "@/components/CTA";
import Link from "next/link";
import { API, imageUrl } from "@/lib/api";

const sortOptions = ["Featured", "Newest", "Name (A-Z)"];

function FilterDropdown({
  group,
  selectedOptions,
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeCount = selectedOptions.length;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-bold tracking-wide transition-all whitespace-nowrap
          ${activeCount > 0
            ? "border-green bg-green text-white shadow-md"
            : "border-brand-border bg-white text-brand-black hover:border-green hover:text-green"
          }`}
      >
        {activeCount > 0 ? `${group.title} (${activeCount})` : group.title}
        <i className={`fas fa-chevron-down text-xs transition-transform ${isOpen ? "rotate-180" : ""}`}></i>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 z-50 bg-white border border-brand-border rounded-2xl shadow-xl min-w-[220px] p-3">
          <p className="text-[10px] font-black uppercase tracking-widest text-green mb-2 px-1 border-b border-brand-border pb-2">
            Select {group.title}
          </p>
          <div className="space-y-1 max-h-60 overflow-y-auto pr-1 tabs-scroll">
            {group.options.map((option, idx) => {
              const checked = selectedOptions.includes(option);
              return (
                <label
                  key={idx}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg cursor-pointer hover:bg-green/5 group transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => onChange(option)}
                    className="w-4 h-4 rounded border-brand-border text-green focus:ring-green accent-green"
                  />
                  <span
                    className={`text-sm transition-colors ${
                      checked ? "text-green font-bold" : "text-brand-body group-hover:text-green"
                    }`}
                  >
                    {option}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [activeFilters, setActiveFilters] = useState({});
  const [sortBy, setSortBy] = useState("Featured");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterGroups, setFilterGroups] = useState([]);

  useEffect(() => {
    fetch(`${API}/products/all`)
      .then(r => r.json())
      .then(d => {
        const mapped = (d.products || []).map(p => ({ ...p, desc: p.description || p.desc || "", img: imageUrl(p.images?.[0] || p.img) }));
        setProducts(mapped);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetch(`${API}/product-filters`)
      .then(r => r.json())
      .then(d => setFilterGroups(d.groups || []))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const search = searchParams.get("search") || "";
    const brand = searchParams.get("brand") || "";
    setSearchQuery(search);
    if (brand) {
      setActiveFilters({ "Product Brand": [brand] });
    }
  }, [searchParams]);

  function toggleFilter(groupTitle, option) {
    setActiveFilters((prev) => {
      const current = prev[groupTitle] || [];
      const updated = current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option];
      return { ...prev, [groupTitle]: updated };
    });
  }

  const totalActiveFilters = Object.values(activeFilters).flat().length;

  function clearAllFilters() {
    setActiveFilters({});
    setSearchQuery("");
  }

  const fieldMap = {
    "Application": "application",
    "Industry": "industry",
    "Contamination Type": "contamination_type",
    "Product Brand": "product_brand",
    "Cleaner Base": "cleaner_base",
    "Material": "material",
    "Quality Seal": "quality_seal",
  };

  const filteredProducts = products
    .filter((p) => !p.products || p.products.length === 0)
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.desc.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) => {
      for (const [groupTitle, options] of Object.entries(activeFilters)) {
        const field = fieldMap[groupTitle];
        if (!field) continue;
        const productVal = product[field];
        if (!productVal) return false;
        const vals = productVal.split(",").map(v => v.trim());
        if (!options.some(opt => vals.includes(opt))) return false;
      }
      return true;
    });

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
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">

          {/* Top Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 mb-6 pb-6 border-b border-brand-border">
            {/* Filter pills */}
            <div className="flex flex-wrap items-center gap-2 flex-grow">
              {/* All button */}
              <button
                onClick={() => setActiveFilters({})}
                className={`px-4 py-2.5 rounded-full border text-sm font-bold tracking-wide transition-all whitespace-nowrap ${
                  totalActiveFilters === 0
                    ? "border-green bg-green text-white shadow-md"
                    : "border-brand-border bg-white text-brand-black hover:border-green hover:text-green"
                }`}
              >
                All
              </button>
              {filterGroups.map((group, i) => (
                <FilterDropdown
                  key={i}
                  group={group}
                  selectedOptions={activeFilters[group.title] || []}
                  onChange={(option) => toggleFilter(group.title, option)}
                />
              ))}

              {/* Clear all */}
              {totalActiveFilters > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="flex items-center gap-1.5 text-xs font-bold text-brand-muted hover:text-green transition-colors ml-1"
                >
                  <i className="fas fa-times-circle"></i>
                  Clear all ({totalActiveFilters})
                </button>
              )}
            </div>

          </div>

          {/* Active filter chips (optional visible tags) */}
          {totalActiveFilters > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.entries(activeFilters).flatMap(([group, opts]) =>
                opts.map((opt) => (
                  <span
                    key={`${group}-${opt}`}
                    className="inline-flex items-center gap-1.5 bg-green/10 text-green text-xs font-bold px-3 py-1.5 rounded-full"
                  >
                    {opt}
                    <button
                      onClick={() => toggleFilter(group, opt)}
                      className="hover:text-green-dark transition-colors"
                    >
                      <i className="fas fa-times text-[10px]"></i>
                    </button>
                  </span>
                ))
              )}
            </div>
          )}

          {/* Count row */}
          <p className="text-sm font-bold text-brand-muted mb-6">
            Showing <span className="text-brand-black">{filteredProducts.length}</span> high-performance products
          </p>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group border border-brand-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col"
                >
                  <div className="dot-bg bg-brand-bg3 aspect-[1/1] flex items-center justify-center p-6 relative overflow-hidden">
                    {product.img ? (
                      <img src={product.img} alt={product.title} className="w-full h-full object-contain" />
                    ) : (
                      <div className="w-20 h-20 bg-green-light group-hover:bg-green transition-colors rounded-2xl flex items-center justify-center">
                        <i className={`fas ${product.icon} text-green group-hover:text-white transition-colors text-2xl`}></i>
                      </div>
                    )}
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
                onClick={clearAllFilters}
                className="mt-6 text-green font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
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
