import { products } from "@/data/products";
import CTA from "@/components/CTA";
import CategoryTabs from "@/components/CategoryTabs";
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
                  <span className="text-sm font-black uppercase tracking-widest text-green">
                    {product.category}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-brand-black mb-4 leading-[1.1]">
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
                    className="px-8 py-3.5 bg-green text-white font-black rounded-2xl hover:bg-green-dark transition-all transform hover:-translate-y-1 shadow-xl shadow-green/20 uppercase tracking-widest text-xs"
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

            {/* Text Side */}
            <div className="lg:col-span-7">
              {/* Category badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-light border border-green-mid mb-4">
               
                <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-green">
                  {product.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-brand-black mb-3 leading-[1.1]">
                {product.title}
              </h1>

              <p className="text-sm sm:text-base font-bold text-green mb-6 uppercase tracking-[0.2em]">
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
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border-2 border-green-mid text-[10px] font-black uppercase tracking-widest text-green shadow-sm"
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
                  className="px-8 py-3 bg-green text-white font-black rounded-2xl hover:bg-green-dark transition-all transform hover:-translate-y-1 shadow-xl shadow-green/20 uppercase tracking-widest text-xs"
                >
                  Enquire Now
                </Link>
               
              </div>
            </div>

            {/* Image Side */}
            <div className="lg:col-span-5">
              <div className="relative aspect-square rounded-[2.5rem] bg-white shadow-2xl border-8 border-white overflow-hidden flex items-center justify-center p-6 group">
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── IS THIS PRODUCT RIGHT FOR YOU? ─── */}
      {product.isThisRightFor && (
        <section className="py-12 sm:py-14 bg-green-light border-t border-green-mid">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-green flex items-center justify-center shadow-lg">
                <i className="fas fa-check-circle text-white text-lg"></i>
              </div>
              <div>
                <h2 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-green mb-1">
                  Is This Product Right for You?
                </h2>
                <p className="text-sm sm:text-base text-brand-body leading-relaxed max-w-4xl">
                  {product.isThisRightFor}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── TECHNICAL OVERVIEW ─── */}
      <section className="py-16 sm:py-20 bg-white border-t border-brand-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-16">

            {/* Left: Narrative + Features + Application */}
            <div className="xl:col-span-8 space-y-16">

              {/* Full Description */}
              {product.fullDescription && (
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-10 h-px bg-green/30"></span>
                    <span className="text-sm font-black uppercase tracking-[0.3em] text-green">
                      Theoretical Deep Dive
                    </span>
                  </div>
                  <div
                    className="prose prose-lg max-w-none prose-headings:text-brand-black prose-p:text-brand-body prose-strong:text-green"
                    dangerouslySetInnerHTML={{ __html: product.fullDescription }}
                  />
                </div>
              )}

              {/* Application */}
              {product.application && (
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-10 h-px bg-green/30"></span>
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-green">
                      Application
                    </span>
                  </div>
                  <div className="p-6 sm:p-8 bg-brand-bg2 rounded-[2rem] border border-brand-border">
                    <p className="text-sm sm:text-base text-brand-body leading-relaxed">{product.application}</p>
                  </div>
                </div>
              )}

              {/* Key Features */}
              {product.features && product.features.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-10 h-px bg-green/30"></span>
                    <span className="text-sm font-black uppercase tracking-[0.3em] text-green">
                      Key Features
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex gap-5 p-7 bg-brand-bg2 rounded-[2rem] border border-brand-border hover:bg-white hover:shadow-xl transition-all group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-green shadow-sm group-hover:bg-green group-hover:text-white transition-all shrink-0 mt-0.5">
                          <i className="fas fa-check text-sm"></i>
                        </div>
                        <p className="text-xs sm:text-sm text-brand-body leading-relaxed pt-2">
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
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-10 h-px bg-green/30"></span>
                    <span className="text-sm font-black uppercase tracking-[0.3em] text-green">
                      Packaging Details
                    </span>
                  </div>
                  <div
                    className="prose prose-lg max-w-none prose-headings:text-brand-black prose-p:text-brand-body prose-strong:text-green"
                    dangerouslySetInnerHTML={{ __html: product.packaging }}
                  />
                </div>
              )}

              {/* Similar Products */}
              {product.similarProducts && product.similarProducts.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-10">
                    <span className="w-10 h-px bg-green/30"></span>
                    <span className="text-sm font-black uppercase tracking-[0.3em] text-green">
                      Similar Solutions
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {product.similarProducts.map((ref, i) => {
                      // Find the actual product object by title or slug
                      const similarProd = products.find(p => p.title === ref || p.slug === ref || p.id === ref);
                      
                      // If not found, skip or show placeholder (here we skip if not found in real data to keep it clean)
                      if (!similarProd) return null;

                      return (
                        <div
                          key={i}
                          className="group border border-brand-border rounded-[2rem] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 bg-white"
                        >
                          <div className="dot-bg bg-brand-bg3 aspect-[4/3] flex items-center justify-center p-6 relative">
                             <div className="w-full h-full flex items-center justify-center text-green group-hover:scale-110 transition-transform duration-500">
                                <i className={`fas ${similarProd.icon || "fa-box"} text-6xl`}></i>
                              </div>
                          </div>
                          <div className="p-6">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-green">{similarProd.category}</span>
                            <h4 className="text-base font-black text-brand-black mt-1 mb-2 leading-snug uppercase tracking-tight line-clamp-1">{similarProd.title}</h4>
                            <p className="text-[11px] text-brand-body leading-relaxed mb-4 line-clamp-2 h-8">{similarProd.desc}</p>
                            <Link
                              href={`/products/${similarProd.slug}`}
                              className="inline-flex items-center justify-center w-full bg-brand-black text-white text-[10px] font-black uppercase tracking-widest py-3 rounded-xl hover:bg-green transition-all shadow-sm"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Case Study Links */}
              {product.caseStudies && product.caseStudies.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-10 h-px bg-green/30"></span>
                    <span className="text-sm font-black uppercase tracking-[0.3em] text-green">
                      Case Studies
                    </span>
                  </div>
                  <div className="space-y-4">
                    {product.caseStudies.map((cs, i) => (
                      <Link
                        key={i}
                        href={cs.href}
                        className="flex items-center justify-between p-6 bg-brand-bg2 rounded-2xl border border-brand-border hover:border-green hover:bg-green-light transition-all group"
                      >
                        <span className="font-bold text-brand-black group-hover:text-green transition-colors">
                          {cs.title}
                        </span>
                        <i className="fas fa-arrow-right text-green opacity-0 group-hover:opacity-100 transition-opacity"></i>
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
                <div className="bg-green rounded-[2rem] p-8 text-white overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-black mb-8 uppercase tracking-tight">
                      Technical<br />Specifications
                    </h3>
                    <div className="space-y-5">
                      {product.technicalSpecs ? (
                        product.technicalSpecs.map((spec, i) => (
                          <div
                            key={i}
                            className="flex justify-between items-end border-b border-white/20 pb-4 group"
                          >
                            <div>
                              <p className="text-[10px] font-black uppercase tracking-widest text-white/70 mb-1">
                                {spec.label}
                              </p>
                              {spec.value.toLowerCase() === "voc-free" || spec.value.toLowerCase() === "voc free" ? (
                                <img
                                  src="https://c8.alamy.com/comp/2JBE5TW/voc-free-volatile-organic-compounds-free-abstract-vector-stock-illustration-2JBE5TW.jpg"
                                  alt="VOC Free"
                                  className="h-14 w-auto object-contain bg-white rounded p-0.5 mt-1"
                                />
                              ) : (
                                <p className="text-xs sm:text-sm font-bold text-white">{spec.value}</p>
                              )}
                            </div>
                            <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-white transition-colors"></div>
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
                  <div className="bg-green-light border border-green-mid rounded-[2rem] p-6">
                    <p className="text-[10px] font-black uppercase tracking-widest text-green mb-3">
                      Recommended Cleaner
                    </p>
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center p-3 mb-3 shadow-sm border border-green-mid">
                        <i className={`fas ${products.find(p => p.slug === product.recommendedCleaner.slug)?.icon || "fa-flask"} text-2xl text-green`}></i>
                      </div>
                      <h5 className="text-sm font-black text-brand-black mb-2 uppercase tracking-tight">
                        {product.recommendedCleaner.name}
                      </h5>
                      <p className="text-xs text-brand-body leading-relaxed mb-4">
                        {product.recommendedCleaner.desc}
                      </p>
                      <Link
                        href={`/products/${product.recommendedCleaner.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2 bg-green text-white text-[10px] font-black rounded-xl hover:bg-green-dark transition-all uppercase tracking-widest shadow-lg shadow-green/20"
                      >
                        View Product <i className="fas fa-arrow-right text-[10px]"></i>
                      </Link>
                    </div>
                  </div>
                )}

                {/* Recommended With */}
                {product.recommendedWith && (
                  <div className="bg-green-light border border-green-mid rounded-[2rem] p-6">
                    <p className="text-[10px] font-black uppercase tracking-widest text-green mb-3">
                      Recommended With
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-green flex items-center justify-center shrink-0">
                        <i className="fas fa-link text-white text-sm"></i>
                      </div>
                      <p className="text-base sm:text-lg font-black text-brand-black">{product.recommendedWith}</p>
                    </div>
                  </div>
                )}

                {/* Enquire / CTA card */}
                <div className="p-6 rounded-[2rem] bg-white border-2 border-brand-border shadow-sm">
                  <i className="fas fa-headset text-xl text-green mb-3"></i>
                  <p className="text-xs sm:text-sm font-bold text-brand-black mb-1">Need a Custom Config?</p>
                  <p className="text-xs text-brand-body leading-relaxed mb-5">
                    Our engineers can tailor {product.title} to your specific production line requirements.
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full text-center px-5 py-2.5 bg-green text-white text-[10px] font-black rounded-xl hover:bg-green-dark transition-all uppercase tracking-widest shadow-lg shadow-green/20"
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

