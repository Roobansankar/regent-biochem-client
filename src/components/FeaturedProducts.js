"use client";

import { useState } from "react";
import Link from "next/link";

const products = {
  "max-eco": {
    slug: "htw-ii-max-eco",
    title: "HTW - II - Max ECO",
    desc: "Powerful and easy to operate, these hot-water parts washers are designed for efficient single-stage cleaning and degreasing. A rotating basket and high spray pressure ensure optimal cleaning performance with Bio-Chem cleaners.",
    features: [
      "Single-stage precision spray cleaning",
      "Rotating basket for uniform coverage",
      "High spray pressure for stubborn soils",
      "Compatible with Bio-Chem cleaners",
    ],
    img: "/htw-ii-max-eco.jpg",
    icon: "fa-shower",
  },
  "hp-vigo": {
    slug: "hp-vigo",
    title: "HP VIGO",
    desc: "High-pressure precision cleaning system for complex industrial parts and specialized manufacturing components. Designed for deep cleaning of intricate geometries and hard-to-reach surfaces.",
    features: [
      "High-pressure cleaning capability",
      "Precision cleaning for complex parts",
      "Industrial-grade construction",
      "Suitable for specialized components",
    ],
    img: "/hp-vigo.jpg",
    icon: "fa-water",
  },
  "anti-spatter": {
    slug: "anti-spatters",
    title: "Anti-spatters",
    desc: "Advanced anti-spatter solutions to prevent weld dross adhesion and protect workpieces and equipment. Extends consumable life and reduces post-weld cleanup time.",
    features: [
      "Prevents weld spatter adhesion",
      "Extends MIG/TIG consumable life",
      "Reduces post-weld cleanup time",
      "Protects workpiece surfaces",
    ],
    img: "/SafeWeld.jpg",
    icon: "fa-shield",
  },
};

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState("max-eco");

  const product = products[activeTab];

  if (!product) return null;

  return (
    <section className="bg-[#f7f7f5]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8 sm:pt-6 sm:pb-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-green mb-2">GREEN WAY TO GROWTH</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-black">
              Flagship products, <span className="text-green">field-proven globally.</span>
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex  cursor-pointer items-center gap-2 text-sm font-bold text-green border border-green rounded px-5 py-2.5 hover:bg-green hover:text-white transition-colors whitespace-nowrap self-start sm:self-auto"
          >
            View All Products <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
        {/* Tabs */}
        <div className="flex tabs-scroll overflow-x-auto border border-brand-border rounded-lg bg-white w-fit mb-8 max-w-full">
          <button
            className={`px-5 py-2.5 text-xs cursor-pointer  sm:text-sm font-semibold whitespace-nowrap border-r border-brand-border transition-colors ${
              activeTab === "max-eco" ? "bg-green text-white" : "text-brand-muted hover:text-green"
            }`}
            onClick={() => setActiveTab("max-eco")}
          >
            Max ECO
          </button>
          <button
            className={`px-5 py-2.5 text-xs cursor-pointer sm:text-sm font-semibold whitespace-nowrap border-r border-brand-border transition-colors ${
              activeTab === "hp-vigo" ? "bg-green text-white" : "text-brand-muted hover:text-green"
            }`}
            onClick={() => setActiveTab("hp-vigo")}
          >
            HP VIGO
          </button>
          <button
            className={`px-5 py-2.5 text-xs cursor-pointer sm:text-sm font-semibold whitespace-nowrap transition-colors ${
              activeTab === "anti-spatter" ? "bg-green text-white" : "text-brand-muted hover:text-green"
            }`}
            onClick={() => setActiveTab("anti-spatter")}
          >
            Anti-Spatter
          </button>
        </div>

        {/* Product Showcase */}
        <div className="bg-white border border-brand-border rounded-2xl p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            {/* Image */}
            <Link 
              href={`/products/${product.slug}`}
              className="dot-bg bg-brand-bg3 rounded-xl aspect-[4/3] flex items-center justify-center relative overflow-hidden p-6 group/img"
            >
              <i className={`fas ${product.icon} text-5xl sm:text-6xl text-green/40 relative z-10 transition-all duration-500 group-hover/img:scale-105`}></i>
            </Link>
            {/* Info */}
            <div>
              <Link href={`/products/${product.slug}`} className="block group/title">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-brand-black mb-4 leading-tight group-hover/title:text-green transition-colors">
                  {product.title}
                </h3>
              </Link>
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
                  href={`/products/${product.slug}`}
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
