"use client";

import { useState } from "react";
import Link from "next/link";

const products = {
  htw: {
    title: "HTW II Bio",
    desc: "Hot-water, single-stage spray cleaning with rotating basket and oxygen membrane compressor — engineered for continuous duty in production lines.",
    features: [
      "Oxygen membrane compressor",
      "Bio-active cleaner compatible",
      "Continuous duty rated",
      "Single-stage precision spray",
    ],
    img: "/HTW-1200-Max-Eco-1200x1200.jpg",
  },
  gt: {
    title: "GT Parts Washer",
    desc: "Compact yet powerful bench-top aqueous washer designed for precision machined components. Adjustable spray pressure and temperature control.",
    features: ["Adjustable spray pressure", "Stainless steel tank", "Low water consumption", "Ergonomic lid design"],
    img: "/GT Parts Washer.webp",
  },
  safe: {
    title: "SafeWeld System",
    desc: "Anti-spatter, weld cleaning and passivation system that extends tool life and consistently elevates weld quality across production.",
    features: [
      "Water-based formula",
      "Anti-spatter protection",
      "Passivation capability",
      "Compatible with all MIG/TIG setups",
    ],
    img: "/SafeWeld.jpg",
  },
};

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("htw");

  const product = products[activeTab];

  return (
    <section className="bg-brand-bg2">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8 sm:pt-8 sm:pb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-green mb-2">Featured Products</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-black">
              Flagship products, <em className="text-green">field-proven globally.</em>
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-green border border-green rounded px-5 py-2.5 hover:bg-green hover:text-white transition-colors whitespace-nowrap self-start sm:self-auto"
          >
            View All Products <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
        {/* Tabs */}
        <div className="flex tabs-scroll overflow-x-auto border border-brand-border rounded-lg bg-white w-fit mb-8 max-w-full">
          <button
            className={`px-5 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap border-r border-brand-border transition-colors ${
              activeTab === "htw" ? "bg-green text-white" : "text-brand-muted hover:text-green"
            }`}
            onClick={() => setActiveTab("htw")}
          >
            HTW II Bio
          </button>
          <button
            className={`px-5 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap border-r border-brand-border transition-colors ${
              activeTab === "gt" ? "bg-green text-white" : "text-brand-muted hover:text-green"
            }`}
            onClick={() => setActiveTab("gt")}
          >
            GT Parts Washer
          </button>
          <button
            className={`px-5 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
              activeTab === "safe" ? "bg-green text-white" : "text-brand-muted hover:text-green"
            }`}
            onClick={() => setActiveTab("safe")}
          >
            SafeWeld
          </button>
        </div>

        {/* Product Showcase */}
        <div className="bg-white border border-brand-border rounded-2xl p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            {/* Image */}
            <div className="dot-bg bg-brand-bg3 rounded-xl aspect-[4/3] flex items-center justify-center relative overflow-hidden p-6">
              <img
                src={product.img}
                alt={product.title}
                className="max-w-full max-h-full object-contain relative z-10 drop-shadow-2xl transition-all duration-500"
              />
            </div>
            {/* Info */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-black mb-4 leading-tight">
                {product.title}
              </h3>
              <p className="text-base text-brand-body leading-relaxed mb-6">{product.desc}</p>
              <ul className="flex flex-col gap-2.5 mb-8">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-brand-body">
                    <span className="w-2 h-2 rounded-full bg-green flex-shrink-0"></span> {feature}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="#"
                  className="text-center bg-green text-white font-bold text-sm px-6 py-3 rounded hover:bg-green-dark transition-colors"
                >
                  Request Inquiry
                </Link>
                <Link
                  href="#"
                  className="text-center border border-gray-300 text-brand-black font-medium text-sm px-6 py-3 rounded hover:border-green hover:text-green transition-colors"
                >
                  Download Spec Sheet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
