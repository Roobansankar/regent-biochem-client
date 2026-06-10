import { products } from "@/data/products";
import CTA from "@/components/CTA";
import CategoryTabs from "@/components/CategoryTabs";
import ProductGallery from "@/components/ProductGallery";
import ProductFAQ from "@/components/ProductFAQ";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // ─── CATEGORY PAGE (if product has `products` array, it's a category overview) ───
  if (product.products) {
    const subProducts = product.products
      .map((id) => products.find((p) => p.id === id))
      .filter(Boolean);

    return (
      <main className="flex flex-col min-h-screen bg-white">

        {/* ─── CATEGORY HERO ─── */}
        <section className="relative pt-10 pb-12 lg:pt-12 lg:pb-14 overflow-hidden bg-brand-bg3">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white -z-10"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-green-50/20 blur-[120px] -z-10"></div>

          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="w-full">
              {/* Removed {product.category} as requested */}

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-black mb-4 leading-tight">
                {product.title}
              </h1>

              <p className="text-sm sm:text-base text-brand-body leading-relaxed pl-0 w-full text-justify">
                {product.desc} {product.extraDesc}
              </p>
            </div>
          </div>
        </section>

        {/* ─── TABBED PRODUCT SHOWCASE ─── */}
        {subProducts.length > 0 && (
          <CategoryTabs products={subProducts} category={product.title} />
        )}

        <CTA />
      </main>
    );
  }

  return (
    <main className="flex flex-col min-h-screen bg-white">

      {/* ─── PRODUCT HERO ─── */}
      <section className="relative pt-6 pb-10 lg:pt-10 lg:pb-16 overflow-hidden bg-brand-bg3">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white -z-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-green-50/20 blur-[120px] -z-10"></div>

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">

            {/* Gallery Side */}
            <div className="lg:col-span-6 lg:sticky lg:top-24">
              <ProductGallery product={product} />
            </div>

            {/* Text Side */}
            <div className="lg:col-span-6">
              <p className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-green mb-4">
                {product.category}
              </p>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-black mb-2 leading-[1.15]">
                {product.title}
              </h1>

              {product.subtitle && (
                <p className="text-xs sm:text-sm font-bold text-green mb-4">
                  {product.subtitle}
                </p>
              )}

              <p className="text-sm sm:text-base text-brand-body  pl-0 sm:pl-0 max-w-2xl">
                {product.desc}
              </p>

              {product.descBullets && product.descBullets.length > 0 && (
                <ul className="mb-5 space-y-1.5">
                  {product.descBullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-brand-body leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green shrink-0"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {/* Available Pack Sizes */}
              {![
                "Cleaning Systems",
                "Paint Removal Systems",
                "Descaling Systems",
              ].includes(product.category) && (
                <div className="mt-6 mb-6">
                  <p className="text-xs font-bold text-green uppercase tracking-wider mb-3">
                    Available Pack Sizes
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        name: `${product.title} - PET (recycled) bottle 500ml with sprayer`,
                        img: "500ml",
                      },
                      {
                        name: `${product.title} - PET (recycled) bottle 1L with sprayer`,
                        img: "1L",
                      },
                      { name: `${product.title} - Jerry Can 1L`, img: "JC1L" },
                      { name: `${product.title} - Jerry Can 5L`, img: "JC5L" },
                      { name: `${product.title} - Jerry Can 25L`, img: "JC25L" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 border border-brand-border rounded-lg p-3"
                      >
                        <div className="w-14 h-14 rounded-lg bg-brand-bg3 border border-brand-border shrink-0 flex items-center justify-center overflow-hidden">
                          <img
                            src={`https://placehold.co/80x80/e2e8f0/3D8A4B?text=${item.img}`}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-xs font-semibold text-brand-black leading-snug">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {product.labels && product.labels.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {product.labels.map((label, i) => {
                    const isVocFree = label.toLowerCase() === "voc free" || label.toLowerCase() === "voc-free";
                    if (isVocFree) {
                      return (
                        <img key={i} src="https://c8.alamy.com/comp/2JBE5TW/voc-free-volatile-organic-compounds-free-abstract-vector-stock-illustration-2JBE5TW.jpg" alt="VOC Free" className="h-8 sm:h-10 w-auto object-contain rounded-lg border border-brand-border bg-white" />
                      );
                    }
                    return (
                      <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-green-mid text-xs font-bold text-green shadow-sm">
                        {label}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ─── DETAIL SECTION (2-column) ─── */}
      <section className="py-10 sm:py-14 lg:py-16 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* ─── LEFT COLUMN ─── */}
            <div className="lg:col-span-8 space-y-10 sm:space-y-12">

              {/* Is This Product Right for You? */}
              {product.isThisRightFor && (
                <div>
                  <h3 className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-green mb-4">Is This Product Right for You?</h3>
                   <div className="p-5 sm:p-6 bg-gradient-to-br from-brand-bg2 to-white rounded-2xl border border-brand-border">
                  <p className="text-sm text-brand-body leading-relaxed" style={{ whiteSpace: "pre-line" }}>{product.isThisRightFor}</p>
                  </div>
                </div>
              )}

              {/* Application */}
              {product.application && (
                <div>
                  <h3 className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-green mb-4">Application</h3>
                  <div className="p-5 sm:p-6 bg-gradient-to-br from-brand-bg2 to-white rounded-2xl border border-brand-border">
                    <p className="text-sm sm:text-base text-brand-body leading-relaxed" style={{ whiteSpace: "pre-line" }}>{product.application}</p>
                  </div>
                </div>
              )}

              {/* Why Choose */}
              {product.whyChoose && (
                <div>
                  <div className="mb-4">
                    <p className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-green">Why Choose the {product.title}?</p>
                  </div>
                  <div className="space-y-2.5">
                    {product.whyChoose.split("\n").map((point, i) => (
                      <div key={i} className="flex gap-3 p-4 sm:p-5 bg-white rounded-xl border border-brand-border">
                        <div className="w-2 h-2 rounded-full bg-green shrink-0 mt-2"></div>
                        <p className="text-sm text-brand-body leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Available Models */}
              {product.availableModels && product.availableModels.length > 0 && (
                <div>
                  <div className="mb-4">
                    <p className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-green">Available Models</p>
                  </div>
                  <div className="overflow-x-auto rounded-xl border border-brand-border">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-green text-white">
                          <th className="text-left px-3 sm:px-4 py-2.5 sm:py-3 font-bold text-xs sm:text-sm">Specifications</th>
                          {product.availableModels.map((m, i) => (
                            <th key={i} className="text-left px-3 sm:px-4 py-2.5 sm:py-3 font-bold text-xs sm:text-sm">{m.model}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { key: "dimensions", label: "Overall width x overall depth (mm)" },
                          { key: "height", label: "Height with lid closed/open with angled exhaust duct (mm)" },
                          { key: "rackDiameter", label: "Inner diameter of rack, approx. (mm)" },
                          { key: "usefulHeight", label: "Useful height max. (mm)" },
                          { key: "payload", label: "Payload max. (kg)" },
                          { key: "tankCapacity", label: "Washing tank capacity (L)" },
                          { key: "weight", label: "Total weight of the cleaning device (kg)" },
                          { key: "connectedLoad", label: "Connected value total (kW) excl. supplementary equipment approx." },
                          { key: "powerSupply", label: "Power supply" },
                          { key: "pumpFlow", label: "Pump – automatic cleaning: flow rate (m³/h / bar)" },
                          { key: "heatingPower", label: "Electric heating in the washing tank (kW)" },
                          { key: "treatmentTemp", label: "Treatment temperature (guide value) (°C)" },
                          { key: "oxygenCompressor", label: "Oxygen membrane compressor" },
                        ].map((spec, rowIndex) => (
                          <tr key={spec.key} className={`border-t border-brand-border ${rowIndex % 2 === 0 ? "bg-white" : "bg-brand-bg2"}`}>
                            <td className="px-3 sm:px-4 py-2.5 sm:py-3 font-bold text-brand-black text-xs sm:text-sm">{spec.label}</td>
                            {product.availableModels.map((m, i) => (
                              <td key={i} className="px-3 sm:px-4 py-2.5 sm:py-3 text-brand-body text-xs sm:text-sm">{m[spec.key]}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Full Description */}
              {product.fullDescription && (
                <div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-green-light border border-green/20 text-xs sm:text-sm font-bold text-green">Description</span>
                  </div>
                  <div
                    className="prose prose-sm sm:prose-base max-w-none prose-headings:text-brand-black prose-p:text-brand-body prose-strong:text-green prose-headings:font-bold"
                    dangerouslySetInnerHTML={{ __html: product.fullDescription }}
                  />
                </div>
              )}

              {/* Packaging Details */}
              {product.packaging && (
                <div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-green-light border border-green/20 text-xs sm:text-sm font-bold text-green">Packaging Details</span>
                  </div>
                  <div
                    className="prose prose-sm sm:prose-base max-w-none prose-headings:text-brand-black prose-p:text-brand-body prose-strong:text-green prose-headings:font-bold"
                    dangerouslySetInnerHTML={{ __html: product.packaging }}
                  />
                </div>
              )}

              {/* Similar Products */}
              {product.similarProducts && product.similarProducts.length > 0 && (
                <div>
                  <div className="mb-4">
                    <p className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-green">Similar Solutions</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {product.similarProducts.map((ref, i) => {
                      const similarProd = products.find(p => p.title === ref || p.slug === ref || p.id === ref);
                      if (!similarProd) return null;
                      return (
                        <Link key={i} href={`/products/${similarProd.slug}`} className="group block border border-brand-border rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 bg-white">
                          <div className="bg-gradient-to-br from-brand-bg3 to-white aspect-[4/3] flex items-center justify-center p-6">
                            <div className="w-full h-full flex items-center justify-center text-green/60 group-hover:text-green group-hover:scale-110 transition-all duration-500">
                              <i className={`fas ${similarProd.icon || "fa-box"} text-4xl sm:text-5xl`}></i>
                            </div>
                          </div>
                          <div className="p-4 sm:p-5">
                            <span className="text-xs font-bold text-green">{similarProd.category}</span>
                            <h4 className="text-sm font-bold text-brand-black mt-1 mb-1 leading-snug">{similarProd.title}</h4>
                            <p className="text-xs text-brand-body leading-relaxed line-clamp-2">{similarProd.desc}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Case Studies */}
              {product.caseStudies && product.caseStudies.length > 0 && (
                <div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-green-light border border-green/20 text-xs sm:text-sm font-bold text-green">Case Studies</span>
                  </div>
                  <div className="space-y-3">
                    {product.caseStudies.map((cs, i) => (
                      <Link key={i} href={cs.href} className="flex items-center justify-between p-4 sm:p-5 bg-white rounded-xl border border-brand-border hover:border-green/30 hover:shadow-sm transition-all group">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-green-light flex items-center justify-center text-green shrink-0">
                            <i className="fas fa-file-alt text-xs"></i>
                          </div>
                          <span className="text-sm font-bold text-brand-black group-hover:text-green transition-colors">{cs.title}</span>
                        </div>
                        <i className="fas fa-arrow-right text-green text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"></i>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ */}
              {product.faq && product.faq.length > 0 && (
                <ProductFAQ faq={product.faq} />
              )}

            </div>

            {/* ─── RIGHT SIDEBAR ─── */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-5">

                {/* Technical Specifications */}
                {product.technicalSpecs && (
                  <div className="bg-gradient-to-br from-green to-emerald-600 rounded-2xl p-6 sm:p-7 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-5">
                        <i className="fas fa-microchip text-white/60 text-xs"></i>
                        <span className="text-xs sm:text-sm font-bold text-white/60 uppercase tracking-wider">Specifications</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold mb-5">Technical Specifications</h3>
                      <div className="space-y-3.5">
                        {product.technicalSpecs.map((spec, i) => (
                          <div key={i} className="flex justify-between items-end border-b border-white/15 pb-3">
                            <div>
                              <p className="text-xs sm:text-sm font-bold text-white/60 mb-0.5">{spec.label}</p>
                              {spec.value.toLowerCase() === "voc-free" || spec.value.toLowerCase() === "voc free" ? (
                                <img src="https://c8.alamy.com/comp/2JBE5TW/voc-free-volatile-organic-compounds-free-abstract-vector-stock-illustration-2JBE5TW.jpg" alt="VOC Free" className="h-10 sm:h-12 w-auto object-contain bg-white rounded p-0.5 mt-1" />
                              ) : (
                                <p className="text-xs sm:text-sm font-bold text-white">{spec.value}</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Recommended Cleaner */}
                {product.recommendedCleaner && (
                  <div className="bg-white rounded-2xl p-5 sm:p-6 border border-brand-border shadow-sm">
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <i className="fas fa-flask text-green text-xs"></i>
                      <span className="text-xs sm:text-sm font-bold text-green uppercase tracking-wider">Recommended Cleaner</span>
                    </div>
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-green-light to-white flex items-center justify-center shrink-0 border border-green/20">
                        <i className={`fas ${products.find(p => p.slug === product.recommendedCleaner.slug)?.icon || "fa-flask"} text-lg sm:text-xl text-green`}></i>
                      </div>
                      <div className="min-w-0">
                        <h5 className="text-sm font-bold text-brand-black mb-1">{product.recommendedCleaner.name}</h5>
                        <p className="text-xs text-brand-body leading-relaxed mb-3">{product.recommendedCleaner.desc}</p>
                        <Link href={`/products/${product.recommendedCleaner.slug}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-green hover:text-green-dark transition-colors">
                          View Product <i className="fas fa-arrow-right text-[10px]"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Recommended With */}
                {product.recommendedWith && (
                  <div className="bg-white rounded-2xl p-5 sm:p-6 border border-brand-border shadow-sm">
                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                      <i className="fas fa-link text-green text-xs"></i>
                      <span className="text-xs sm:text-sm font-bold text-green uppercase tracking-wider">Recommended With</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-light to-white flex items-center justify-center shrink-0 border border-green/20">
                        <i className="fas fa-link text-green text-sm"></i>
                      </div>
                      <p className="text-sm font-bold text-brand-black">{product.recommendedWith}</p>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}



