import { products } from "@/data/products";
import CTA from "@/components/CTA";
import CategoryTabs from "@/components/CategoryTabs";
import ProductGallery from "@/components/ProductGallery";
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
        <section className="relative pt-8 pb-12 lg:pt-12 lg:pb-16 overflow-hidden bg-brand-bg3">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white -z-10"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-green-50/20 blur-[120px] -z-10"></div>

          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-light border border-green-mid mb-4">
                  <span className="text-xs sm:text-sm font-bold text-green">
                    {product.category}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-black mb-4 leading-[1.1]">
                  {product.title}
                </h1>

                <p className="text-sm sm:text-base text-brand-body leading-relaxed border-l-4 border-green pl-4 sm:pl-6 max-w-2xl text-justify mb-4">
                  {product.desc}
                </p>

                {product.extraDesc && (
                  <p className="text-sm sm:text-base text-brand-body leading-relaxed pl-4 sm:pl-6 max-w-2xl text-justify">
                    {product.extraDesc}
                  </p>
                )}

                <div className="flex flex-wrap gap-4 mt-8">
                  <Link
                    href="/contact"
                    className="px-8 py-3.5 bg-green text-white font-bold rounded-2xl hover:bg-green-dark transition-all transform hover:-translate-y-1 shadow-xl shadow-green/20 text-xs"
                  >
                  Enquire Now
                </Link>
                </div>
              </div>

              {product.img && (
                <div className="relative aspect-square rounded-[3.5rem] bg-white shadow-2xl border-[12px] border-white overflow-hidden flex items-center justify-center p-8 group">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              )}
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
      <section className="relative pt-8 pb-14 lg:pt-14 lg:pb-20 overflow-hidden bg-brand-bg3">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white -z-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-green-50/20 blur-[120px] -z-10"></div>

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

            {/* Gallery Side */}
            <div className="lg:col-span-6 lg:sticky lg:top-24">
              <ProductGallery product={product} />
            </div>

            {/* Text Side */}
            <div className="lg:col-span-6">
              {/* Category badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-light border border-green-mid mb-4">
               
                <span className="text-xs sm:text-sm font-bold text-green">
                  {product.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-black mb-3 leading-[1.1]">
                {product.title}
              </h1>

              <p className="text-sm sm:text-base font-bold text-green mb-6">
                {product.subtitle || "Industrial Engineering Excellence"}
              </p>

              {/* Description */}
              <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-5 border-l-4 border-green pl-4 sm:pl-6 max-w-2xl text-justify">
                {product.desc}
              </p>

              {/* Bullet points */}
              {product.descBullets && product.descBullets.length > 0 && (
                <ul className="mb-8 pl-4 sm:pl-6 space-y-2">
                  {product.descBullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-brand-body leading-relaxed">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-green shrink-0"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {/* Labels / Badges */}
              {product.labels && product.labels.length > 0 && (
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  {product.labels.map((label, i) => {
                    const isVocFree = label.toLowerCase() === "voc free" || label.toLowerCase() === "voc-free";
                    if (isVocFree) {
                      return (
                        <img
                          key={i}
                          src="https://c8.alamy.com/comp/2JBE5TW/voc-free-volatile-organic-compounds-free-abstract-vector-stock-illustration-2JBE5TW.jpg"
                          alt="VOC Free"
                          className="h-10 w-auto object-contain rounded-lg border border-brand-border bg-white"
                        />
                      );
                    }
                    return (
                      <span
                        key={i}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border-2 border-green-mid text-[10px] font-bold text-green shadow-sm"
                      >
                      
                        {label}
                      </span>
                    );
                  })}
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-green text-white font-bold rounded-2xl hover:bg-green-dark transition-all transform hover:-translate-y-1 shadow-xl shadow-green/20 text-xs"
                >
                  Enquire Now
                </Link>
               
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── IS THIS PRODUCT RIGHT FOR YOU? ─── */}
      {product.isThisRightFor && (
        <section className="py-12 sm:py-14 bg-gradient-to-r from-green-50 to-emerald-50 border-t border-b border-green/10">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-green flex items-center justify-center shadow-sm">
                <i className="fas fa-check-circle text-white text-sm"></i>
              </div>
              <div>
                <span className="text-[10px] font-bold text-green/60 uppercase tracking-wider mb-0.5 block">Why Choose This</span>
                <h2 className="text-sm sm:text-base font-bold text-brand-black mb-1">
                  Is This Product Right for You?
                </h2>
                <p className="text-sm text-brand-body leading-relaxed max-w-4xl">
                  {product.isThisRightFor}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── TECHNICAL OVERVIEW ─── */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-16">

            {/* Left: Narrative + Features + Application */}
            <div className="xl:col-span-8 space-y-14">

              {/* Full Description */}
              {product.fullDescription && (
                <div>
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-green-light border border-green/20 text-[10px] font-bold text-green">Description</span>
                  </div>
                  <div
                    className="prose prose-base max-w-none prose-headings:text-brand-black prose-p:text-brand-body prose-strong:text-green prose-headings:font-bold"
                    dangerouslySetInnerHTML={{ __html: product.fullDescription }}
                  />
                </div>
              )}

              {/* Application */}
              {product.application && (
                <div>
                  <div className="mb-5">
                    <span className="inline-block px-3 py-1 rounded-full bg-green-light border border-green/20 text-[10px] font-bold text-green">Application</span>
                  </div>
                  <div className="p-6 sm:p-8 bg-gradient-to-br from-brand-bg2 to-white rounded-2xl border border-brand-border">
                    <p className="text-sm sm:text-base text-brand-body leading-relaxed">{product.application}</p>
                  </div>
                </div>
              )}

              {/* Key Features */}
              {product.features && product.features.length > 0 && (
                <div>
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-green-light border border-green/20 text-[10px] font-bold text-green">Key Features</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex gap-4 p-5 bg-white rounded-xl border border-brand-border hover:border-green/30 hover:shadow-sm transition-all group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-green-light flex items-center justify-center text-green shrink-0 mt-0.5">
                          <i className="fas fa-check text-xs"></i>
                        </div>
                        <p className="text-sm text-brand-body leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Packaging Details */}
              {product.packaging && (
                <div>
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-green-light border border-green/20 text-[10px] font-bold text-green">Packaging Details</span>
                  </div>
                  <div
                    className="prose prose-base max-w-none prose-headings:text-brand-black prose-p:text-brand-body prose-strong:text-green prose-headings:font-bold"
                    dangerouslySetInnerHTML={{ __html: product.packaging }}
                  />
                </div>
              )}

              {/* Similar Products */}
              {product.similarProducts && product.similarProducts.length > 0 && (
                <div>
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-green-light border border-green/20 text-[10px] font-bold text-green">Similar Solutions</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {product.similarProducts.map((ref, i) => {
                      const similarProd = products.find(p => p.title === ref || p.slug === ref || p.id === ref);
                      if (!similarProd) return null;

                      return (
                        <Link
                          key={i}
                          href={`/products/${similarProd.slug}`}
                          className="group block border border-brand-border rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 bg-white"
                        >
                          <div className="bg-gradient-to-br from-brand-bg3 to-white aspect-[4/3] flex items-center justify-center p-6">
                            <div className="w-full h-full flex items-center justify-center text-green/60 group-hover:text-green group-hover:scale-110 transition-all duration-500">
                              <i className={`fas ${similarProd.icon || "fa-box"} text-5xl`}></i>
                            </div>
                          </div>
                          <div className="p-5">
                            <span className="text-[10px] font-bold text-green">{similarProd.category}</span>
                            <h4 className="text-sm font-bold text-brand-black mt-1 mb-1.5 leading-snug">{similarProd.title}</h4>
                            <p className="text-xs text-brand-body leading-relaxed line-clamp-2">{similarProd.desc}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Case Study Links */}
              {product.caseStudies && product.caseStudies.length > 0 && (
                <div>
                  <div className="mb-5">
                    <span className="inline-block px-3 py-1 rounded-full bg-green-light border border-green/20 text-[10px] font-bold text-green">Case Studies</span>
                  </div>
                  <div className="space-y-3">
                    {product.caseStudies.map((cs, i) => (
                      <Link
                        key={i}
                        href={cs.href}
                        className="flex items-center justify-between p-5 bg-white rounded-xl border border-brand-border hover:border-green/30 hover:shadow-sm transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-green-light flex items-center justify-center text-green shrink-0">
                            <i className="fas fa-file-alt text-xs"></i>
                          </div>
                          <span className="text-sm font-bold text-brand-black group-hover:text-green transition-colors">
                            {cs.title}
                          </span>
                        </div>
                        <i className="fas fa-arrow-right text-green text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"></i>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Sidebar: Specs + Recommend With + Enquire */}
            <div className="xl:col-span-4">
                <div className="sticky top-24 space-y-5">

                {/* Technical Specifications */}
                <div className="bg-gradient-to-br from-green to-emerald-600 rounded-2xl p-7 text-white overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-6">
                      <i className="fas fa-microchip text-white/60 text-xs"></i>
                      <span className="text-[10px] font-bold text-white/60 uppercase tracking-wider">Specifications</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-6">
                      Technical<br />Specifications
                    </h3>
                    <div className="space-y-4">
                      {product.technicalSpecs ? (
                        product.technicalSpecs.map((spec, i) => (
                          <div
                            key={i}
                            className="flex justify-between items-end border-b border-white/15 pb-3 group"
                          >
                            <div>
                              <p className="text-[10px] font-bold text-white/60 mb-0.5">
                                {spec.label}
                              </p>
                              {spec.value.toLowerCase() === "voc-free" || spec.value.toLowerCase() === "voc free" ? (
                                <img
                                  src="https://c8.alamy.com/comp/2JBE5TW/voc-free-volatile-organic-compounds-free-abstract-vector-stock-illustration-2JBE5TW.jpg"
                                  alt="VOC Free"
                                  className="h-12 w-auto object-contain bg-white rounded p-0.5 mt-1"
                                />
                              ) : (
                                <p className="text-xs sm:text-sm font-bold text-white">{spec.value}</p>
                              )}
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-white/50 italic">Technical datasheet pending.</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Recommended Cleaner */}
                {product.recommendedCleaner && (
                  <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <i className="fas fa-flask text-green text-xs"></i>
                      <span className="text-[10px] font-bold text-green uppercase tracking-wider">Recommended Cleaner</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-light to-white flex items-center justify-center shrink-0 border border-green/20">
                        <i className={`fas ${products.find(p => p.slug === product.recommendedCleaner.slug)?.icon || "fa-flask"} text-xl text-green`}></i>
                      </div>
                      <div className="min-w-0">
                        <h5 className="text-sm font-bold text-brand-black mb-1">
                          {product.recommendedCleaner.name}
                        </h5>
                        <p className="text-xs text-brand-body leading-relaxed mb-3">
                          {product.recommendedCleaner.desc}
                        </p>
                        <Link
                          href={`/products/${product.recommendedCleaner.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-green hover:text-green-dark transition-colors"
                        >
                          View Product <i className="fas fa-arrow-right text-[10px]"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Recommended With */}
                {product.recommendedWith && (
                  <div className="bg-white rounded-2xl p-6 border border-brand-border shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <i className="fas fa-link text-green text-xs"></i>
                      <span className="text-[10px] font-bold text-green uppercase tracking-wider">Recommended With</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-light to-white flex items-center justify-center shrink-0 border border-green/20">
                        <i className="fas fa-link text-green text-sm"></i>
                      </div>
                      <p className="text-sm font-bold text-brand-black">{product.recommendedWith}</p>
                    </div>
                  </div>
                )}

                {/* Enquire / CTA card */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-bg2 to-white border border-brand-border shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-green flex items-center justify-center mb-4 shadow-sm">
                    <i className="fas fa-headset text-white text-sm"></i>
                  </div>
                  <p className="text-sm font-bold text-brand-black mb-1">Need a Custom Config?</p>
                  <p className="text-xs text-brand-body leading-relaxed mb-5">
                    Our engineers can tailor {product.title} to your specific production line requirements.
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full text-center px-5 py-3 bg-green text-white text-xs font-bold rounded-xl hover:bg-green-dark transition-all shadow-sm"
                  >
                    Speak with an Expert →
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}



