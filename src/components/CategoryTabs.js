"use client";

import { useState } from "react";
import Link from "next/link";
import ProductGallery from "./ProductGallery";
import ProductFAQ from "./ProductFAQ";

export default function CategoryTabs({ products, category }) {
  const [activeTab, setActiveTab] = useState(products[0]?.id || null);
  const active = products.find((p) => p.id === activeTab);

  if (!active || products.length === 0) return null;

  return (
    <section className="bg-white">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs - Restored Original Style */}
        <div className="flex tabs-scroll overflow-x-auto border border-brand-border rounded-lg bg-white w-fit mb-10 max-w-full shadow-sm">
          {products.map((p, i) => (
            <button
              key={p.id}
              className={`px-6 py-3 text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                i < products.length - 1 ? "border-r border-brand-border" : ""
              } ${
                activeTab === p.id 
                  ? "bg-green text-white" 
                  : "text-brand-muted hover:text-green hover:bg-green-light/30"
              }`}
              onClick={() => setActiveTab(p.id)}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* ─── ACTIVE PRODUCT DETAIL (HTW-II Bio Style) ─── */}
        
        {/* Product Hero */}
        <section className="relative pb-12 sm:pb-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Gallery Side */}
            <div className="lg:col-span-6 lg:sticky lg:top-24 w-full pl-2 sm:pl-4">
              <ProductGallery product={active} />
            </div>

            {/* Text Side */}
            <div className="lg:col-span-6 w-full">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-black mb-3 leading-[1.2]">
                {active.title}
              </h2>

              {active.subtitle && (
                <p className="text-xs sm:text-sm font-bold text-green mb-5">
                  {active.subtitle}
                </p>
              )}

              <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-6 max-w-2xl">
                {active.desc}
              </p>

              {active.descBullets && active.descBullets.length > 0 && (
                <ul className="mb-6 space-y-2">
                  {active.descBullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-brand-body leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green shrink-0"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {/* Labels / Nature BOOST Badge */}
              <div className="flex flex-wrap items-center gap-2 mb-6 mt-6">
                {active.id === "cb-100" ? (
                  <>
                    <img src="/nature-boost.webp" alt="Nature BOOST" className="h-16 sm:h-20 w-auto object-contain rounded-lg" />
                    <img src="/VOCFree.webp" alt="VOC Free" className="h-8 sm:h-10 w-auto object-contain rounded-lg border border-brand-border bg-white" />
                    <img src="/Clean-Blue.webp" alt="Clean Blue" className="h-16 sm:h-20 w-auto object-contain rounded-lg" />
                  </>
                ) : active.id === "uno-s" ? (
                  <div className="flex flex-wrap items-center justify-start gap-1 w-full">
                    <img src="/VOCFree.webp" alt="VOC Free" className="h-10 sm:h-12 w-auto object-contain rounded-lg border border-brand-border bg-white" />
                    <img src="/H20.png" alt="H2O" className="h-12 sm:h-14 w-auto object-contain rounded-lg" />
                    <img src="/ready.png" alt="Ready" className="h-12 sm:h-14 w-auto object-contain rounded-lg" />
                  </div>
                ) : (
                  active.labels && active.labels.length > 0 && active.labels.map((label, i) => {
                    const isVocFree = label.toLowerCase() === "voc free" || label.toLowerCase() === "voc-free";
                    if (isVocFree) {
                      return (
                        <img key={i} src="/VOCFree.webp" alt="VOC Free" className="h-8 sm:h-10 w-auto object-contain rounded-lg border border-brand-border bg-white" />
                      );
                    }
                    return (
                      <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-green-mid text-xs font-bold text-green shadow-sm">
                        {label}
                      </span>
                    );
                  })
                )}
              </div>

              {/* Badge Images */}
              {active.badgeImages && active.badgeImages.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mb-4 mt-4">
                  {active.badgeImages.map((src, i) => (
                    <img key={i} src={src} alt={`Badge ${i + 1}`} className="h-12 sm:h-14 w-auto object-contain rounded-lg border border-brand-border bg-white" />
                  ))}
                </div>
              )}

              {/* Available Pack Sizes */}
              {active.availableModels && active.availableModels.length > 0 && (
                <div className="mt-6 mb-8">
                  <p className="text-xs font-bold text-green uppercase tracking-wider mb-4">
                    Available Pack Sizes
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {active.availableModels.map((m, i) => (
                      <span key={i} className="text-center px-4 py-2 rounded-full border border-green/30 text-sm font-semibold text-brand-black">
                        {m.model || m.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Detailed Sections */}
        <section className="py-12 border-t border-brand-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-10">
              {active.isThisRightFor && (
                <div>
                  <h3 className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-green mb-4">Is This Product Right for You?</h3>
                  <div className="p-5 sm:p-6 bg-gradient-to-br from-brand-bg2 to-white rounded-2xl border border-brand-border">
                    <p className="text-sm text-brand-body leading-relaxed whitespace-pre-line">{active.isThisRightFor}</p>
                  </div>
                </div>
              )}

              {active.application && (
                <div>
                  <h3 className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-green mb-4">Application</h3>
                  <div className="p-5 sm:p-6 bg-gradient-to-br from-brand-bg2 to-white rounded-2xl border border-brand-border">
                    <p className="text-sm text-brand-body leading-relaxed whitespace-pre-line">{active.application}</p>
                  </div>
                </div>
              )}

              {active.whyChoose && (
                <div>
                  <div className="mb-4">
                    <p className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-green">Why Choose the {active.title}?</p>
                  </div>
                  <div className="space-y-2.5">
                    {active.whyChoose.split("\n").map((point, i) => (
                      <div key={i} className="flex gap-3 p-4 sm:p-5 bg-white rounded-xl border border-brand-border">
                        <div className="w-1.5 h-1.5 rounded-full bg-green shrink-0 mt-2"></div>
                        <p className="text-sm text-brand-body leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {active.faq && active.faq.length > 0 && (
                <ProductFAQ faq={active.faq} />
              )}
            </div>

            {/* Right Column / Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {!["Cleaning Systems", "Paint Removal Systems", "Descaling Systems"].includes(active.category) && active.technicalSpecs && (
                <div className="bg-green rounded-[2rem] p-8 sm:p-10 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-8 uppercase tracking-tight">Technical Specifications</h3>
                  <div className="space-y-6">
                    {active.technicalSpecs.map((spec, i) => (
                      <div key={i} className="border-b border-white/20 pb-4">
                        <p className="text-xs font-black uppercase tracking-widest text-white/60 mb-1">{spec.label}</p>
                        <p className="text-sm sm:text-base font-bold text-white">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {(() => {
                const rcs = active.recommendedCleaner
                  ? (Array.isArray(active.recommendedCleaner) ? active.recommendedCleaner : [active.recommendedCleaner])
                  : [];
                if (rcs.length === 0) return null;
                return (
                  <div className="p-6 sm:p-8 rounded-[2rem] bg-white border border-brand-border shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                      <i className="fas fa-flask text-green text-xs"></i>
                      <span className="text-xs sm:text-sm font-bold text-green uppercase tracking-wider">Recommended Cleaner</span>
                    </div>
                    <div className="space-y-6">
                      {rcs.map((rc, idx) => (
                        <div key={idx} className="flex flex-col gap-4">
                          <h5 className="text-base font-bold text-brand-black">{rc.name}</h5>
                          <p className="text-xs sm:text-sm text-brand-body leading-relaxed">{rc.desc}</p>
                          <Link href={`/products/${rc.slug}`} className="text-sm font-bold text-green hover:underline">
                            View Product →
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {active.recommendedWith && (
                <div className="p-6 sm:p-8 rounded-[2rem] bg-white border border-brand-border shadow-sm">
                  <div className="flex items-center gap-2 mb-6">
                    <i className="fas fa-link text-green text-xs"></i>
                    <span className="text-xs sm:text-sm font-bold text-green uppercase tracking-wider">Recommended With</span>
                  </div>
                  <div className="space-y-4">
                    {active.recommendedWith.split("\n").map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-light to-white flex items-center justify-center shrink-0 border border-green/20">
                          <i className="fas fa-flask text-green text-lg"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-sm font-bold text-brand-black">{item.replace("• ", "")}</h5>
                          <p className="text-xs text-brand-body leading-relaxed mt-0.5">Industrial cleaner for heavy-duty applications</p>
                        </div>
                        <Link href={`/products/${item.replace("• ", "").toLowerCase().replace(/\s+/g, "-")}`} className="text-xs font-bold text-green hover:underline shrink-0">
                          View More →
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
