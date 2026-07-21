import CTA from "@/components/CTA";
import CategoryTabs from "@/components/CategoryTabs";
import ProductGallery from "@/components/ProductGallery";
import ProductFAQ from "@/components/ProductFAQ";
import { notFound } from "next/navigation";
import Link from "next/link";
import { API, imageUrl } from "@/lib/api";
import safeweldLogo from "@/assets/safeweld.webp";
import { products as localProducts } from "@/data/products";

async function fetchAllProducts() {
  try {
    const res = await fetch(`${API}/products/all`, { cache: "no-store" });
    const data = await res.json();
    return data.products || [];
  } catch {
    return [];
  }
}

export async function generateStaticParams() {
  const products = await fetchAllProducts();
  const productSlugs = products.map((product) => ({ slug: product.slug }));
  const virtualSlugs = Object.keys(CATEGORY_SLUG_MAP).map((slug) => ({ slug }));
  return [...productSlugs, ...virtualSlugs];
}

function mapApiProduct(p) {
  const toAbs = (path) => imageUrl(path);
  return {
    ...p,
    desc: p.description || p.desc || "",
    img: toAbs(p.images?.[0] || p.img) || null,
    images: p.images?.length > 0 ? p.images.map(toAbs) : (p.img ? [toAbs(p.img)] : []),
    badgeImages: (p.badgeImages || []).map(toAbs),
  };
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

const CATEGORY_SLUG_MAP = {
  "general-cleaners": "Cleaners",
  "bio-circle-cleaners": "Cleaners",
  "acidic-cleaners": "Cleaners",
  "finishers": "Cleaners",
  "anti-spatters": "Safeweld",
  "weld-cleaners": "Safeweld",
  "surface-protectors": "Safeweld",
};

const CATEGORY_DESCRIPTIONS = {
  "general-cleaners": "Our General Cleaners are engineered to address a broad spectrum of industrial cleaning challenges, from routine maintenance to demanding production environments. Designed to effectively remove oils, greases, machining residues, and process contaminants, these formulations support equipment reliability, process efficiency, and surface readiness. Suitable for a variety of metallic substrates, they deliver consistent cleaning performance while aligning with modern environmental and workplace safety standards. Our general cleaners are formulated to tackle a wide range of industrial soils including oils, greases, and machining residues. Suitable for both ferrous and non-ferrous metals, these solvent-free, VOC-free formulations deliver consistent cleaning performance while ensuring workplace safety and environmental compliance.",
  "bio-circle-cleaners": "Bio-Circle Cleaners combine advanced cleaning chemistry with biological regeneration technology to provide long-lasting and environmentally responsible cleaning performance. Utilizing naturally occurring microorganisms, these solutions continuously degrade oils and contaminants, significantly extending bath life and reducing waste generation. Ideal for maintenance workshops, manufacturing facilities, and production operations, Bio-Circle technology helps organizations improve sustainability while lowering operating costs and enhancing process efficiency. These bio-active formulations harness the power of beneficial microorganisms to continuously break down oils and hydrocarbons during the cleaning process. The result is a self-regenerating cleaning bath that extends fluid life, reduces waste, and lowers operational costs — all while maintaining exceptional cleaning performance.",
  "acidic-cleaners": "Our Acidic Cleaners are specifically formulated to remove oxidation, scale, mineral deposits, and other inorganic contaminants that compromise equipment performance and system efficiency. Developed for demanding industrial applications, these solutions restore heat transfer efficiency, improve fluid flow, and support asset longevity across pipelines, cooling systems, heat exchangers, and process equipment. Their targeted action ensures effective contaminant removal while maintaining operational integrity. Engineered for heavy-duty descaling and de-rusting applications, our acidic cleaners penetrate and dissolve stubborn inorganic deposits including limescale, rust, and mineral buildup. Ideal for heat exchangers, cooling systems, and metal components requiring deep restoration.",
  "finishers": "Our Finisher solutions are designed to enhance surface quality and prepare components for subsequent manufacturing, assembly, coating, or storage processes. From residue-free cleaning and flash-drying applications to corrosion protection and surface conditioning, these products help maintain appearance, functionality, and long-term performance. By ensuring clean, protected, and process-ready surfaces, they contribute to improved product quality and operational consistency. Our finishers deliver the final touch to your cleaning process, providing surface brightening, passivation, and temporary corrosion protection. These advanced formulations ensure components emerge with a pristine, presentation-ready finish that meets the highest quality standards.",
  "anti-spatters": "Our Anti-Spatter Solutions are designed to prevent welding spatter from adhering to workpieces, fixtures, nozzles, and surrounding equipment during welding operations. By creating a protective barrier, these formulations help minimize cleaning requirements, improve surface quality, extend equipment life, and enhance overall productivity. Suitable for a wide range of welding applications, they support cleaner processes and more efficient manufacturing operations. Our anti-spatter formulations create a protective barrier on workpiece surfaces and MIG/TIG nozzles, preventing weld spatter from adhering. This extends consumable life, reduces post-weld cleanup time, and maintains consistent weld quality across production runs.",
  "weld-cleaners": "Our Weld Cleaners are engineered to remove weld discoloration, oxidation, heat tint, and process residues from stainless steel and other metallic surfaces. Designed to restore the original appearance and corrosion resistance of welded components, these solutions help ensure compliance with quality standards while improving surface finish and long-term performance. Ideal for fabrication, process equipment, architectural structures, and precision manufacturing applications. Specially formulated to remove heat discoloration, oxidation layers, and welding residues from stainless steel and other alloys. Our weld cleaners restore the original surface finish and prepare welds for passivation or further processing without mechanical abrasion.",
  "surface-protectors": "Our Surface Protection Solutions help safeguard metal surfaces against corrosion, environmental exposure, and handling-related contamination. Developed to maintain surface integrity after cleaning, finishing, or welding operations, these products provide a protective barrier that supports product quality, extends service life, and reduces maintenance requirements. Ideal for components requiring storage, transportation, or extended operational durability. Our surface protectors provide a durable, temporary barrier against corrosion, moisture, and mechanical damage during storage, transport, and inter-process handling. Available in film-forming and oil-based variants for different protection requirements and removal preferences.",
};

function titleFromSlug(slug) {
  return slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const parentCategory = CATEGORY_SLUG_MAP[slug];
  if (parentCategory) {
    const title = titleFromSlug(slug);
    return {
      title: `${title} | Regent Biochem`,
      description: CATEGORY_DESCRIPTIONS[slug] || `${title} products from Regent Biochem`,
      alternates: {
        canonical: `/products/${slug}`,
      },
    };
  }

  try {
    const res = await fetch(`${API}/products/slug/${slug}`, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data.product) {
        const p = data.product;
        return {
          title: p.meta_title || `${p.title} | Regent Biochem`,
          description: p.meta_description || p.description || "",
          keywords: p.meta_keywords || "",
          alternates: {
            canonical: `/products/${slug}`,
          },
        };
      }
    }
  } catch {}

  return {
    title: "Product | Regent Biochem",
    alternates: {
      canonical: `/products/${slug}`,
    },
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;

  // 1) Check virtual category slugs FIRST (e.g. general-cleaners) so they
  //    always take precedence over a DB product with the same slug.
  const parentCategory = CATEGORY_SLUG_MAP[slug];
  if (parentCategory) {
    const allItems = (await fetchAllProducts()).map(mapApiProduct);
    let subProducts = allItems.filter(p => p.subcategory === slug);

    if (subProducts.length === 0) {
      const parent = localProducts.find(p => p.slug === slug);
      if (parent?.products?.length > 0) {
        subProducts = parent.products
          .map(id => {
            const apiItem = allItems.find(p => p.id === id || p.slug === id || String(p.id) === String(id));
            if (apiItem) return apiItem;
            const localItem = localProducts.find(p => p.id === id || p.slug === id);
            return localItem ? mapApiProduct(localItem) : null;
          })
          .filter(Boolean);
      }
    }

    const categoryTitle = titleFromSlug(slug);

    return (
      <main className="flex flex-col min-h-screen bg-white">
        <section className="relative pt-10 pb-12 lg:pt-12 lg:pb-14 overflow-hidden bg-brand-bg3">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white -z-10"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-green-50/20 blur-[120px] -z-10"></div>
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="w-full">
              <div className="flex items-center justify-between gap-4">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-black mb-4 leading-tight">
                  {categoryTitle}
                </h1>
                {parentCategory === "Safeweld" && (
                  <img src={safeweldLogo.src} alt="SafeWeld" className="h-12 sm:h-16 w-auto object-contain mb-4" />
                )}
              </div>
              <p className="text-sm text-brand-body leading-relaxed pl-0 w-full text-justify">
                {CATEGORY_DESCRIPTIONS[slug] || `Browse our range of ${parentCategory.toLowerCase()} products.`}
              </p>
            </div>
          </div>
        </section>
        {subProducts.length > 0 && (
          <CategoryTabs products={subProducts} category={categoryTitle} allProducts={allItems} />
        )}
        <CTA />
      </main>
    );
  }

  // 2) Try to fetch product by slug from API
  const res = await fetch(`${API}/products/slug/${slug}`, { cache: "no-store" });
  let product = null;
  if (res.ok) {
    const data = await res.json();
    if (data.product) product = mapApiProduct(data.product);
  }

  // 3) Product not found at all
  if (!product) {
    notFound();
  }

  const allItems = (await fetchAllProducts()).map(mapApiProduct);

  // ─── CATEGORY PAGE (only for system-grouping products that have sub-products in DB) ───
  const isLiquidCategory = product.category === "Cleaners" || product.category === "Safeweld";
  if (!isLiquidCategory && product.products && product.products.length > 0) {
    const subProducts = product.products
      .map((id) => allItems.find((p) => p.id === id || String(p.id) === String(id)))
      .filter(Boolean);

    if (subProducts.length > 0) {
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

              <p className="text-sm text-brand-body leading-relaxed pl-0 w-full text-justify">
                {product.desc} {product.extraDesc}
              </p>
            </div>
          </div>
        </section>

        {/* ─── TABBED PRODUCT SHOWCASE ─── */}
        {subProducts.length > 0 && (
          <CategoryTabs products={subProducts} category={product.title} allProducts={allItems} />
        )}

        <CTA />
      </main>
    );
    }
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

              <p className="text-sm text-brand-body  pl-0 sm:pl-0 max-w-2xl">
                {product.desc}
              </p>

              {/* Badge Images */}
              {product.badgeImages && product.badgeImages.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mb-4 mt-4">
                  {product.badgeImages.map((src, i) => (
                    <img key={i} src={src} alt={`Badge ${i + 1}`} className="h-12 sm:h-14 w-auto object-contain rounded-lg border border-brand-border bg-white" />
                  ))}
                </div>
              )}

              {/* Available Models */}
              {product.availableModels && product.availableModels.length > 0 && (
                <div className="mt-6 mb-4">
                  <p className="text-sm font-black uppercase tracking-[0.3em] text-green mb-4">Available Models</p>
                  <div className="grid grid-cols-2 gap-3">
                    {product.availableModels.map((m, i) => (
                      <span key={i} className="text-center px-4 py-2 rounded-full border border-green/30 text-sm font-semibold text-brand-black">
                        {m.model}
                      </span>
                    ))}
                  </div>
                </div>
              )}

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

            {/* ─── RIGHT SIDEBAR (rendered first so it appears on top on mobile) ─── */}
            <div className="lg:col-span-4 lg:order-2">
              <div className="lg:sticky lg:top-24 space-y-5">

                {/* Highlights */}
                {product.technicalSpecs && (
                  <div className="bg-gradient-to-br from-green to-emerald-600 rounded-2xl p-6 sm:p-7 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="relative z-10">
                      <h3 className="text-sm font-bold mb-5">Highlights</h3>
                      <div className="space-y-3.5">
                        {product.technicalSpecs.map((spec, i) => (
                          <div key={i} className="flex justify-between items-end border-b border-white/15 pb-3">
                            <div>
                              <p className="text-sm font-bold text-white/60 mb-0.5">{spec.label}</p>
                              <p className="text-sm font-bold text-white">{spec.value}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Recommended Cleaner (desktop only - shown inline on mobile) */}
                <div className="hidden lg:block">
                {(() => {
                  const rcs = product.recommendedCleaner
                    ? (Array.isArray(product.recommendedCleaner) ? product.recommendedCleaner : [product.recommendedCleaner])
                    : [];
                  if (rcs.length === 0) return null;
                  return (
                    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-brand-border shadow-sm">
                      <div className="flex items-center gap-2 mb-4">
                        <i className="fas fa-flask text-green text-xs"></i>
                        <span className="text-sm font-bold text-green uppercase tracking-wider">Recommended Cleaner</span>
                      </div>
                      <div className="space-y-4">
                        {rcs.map((slug, idx) => {
                          const match = allItems.find(p => p.slug === slug);
                          if (!match) return null;
                          return (
                            <div key={idx} className="flex items-start gap-3 sm:gap-4">
                              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shrink-0 border border-green/20 bg-brand-bg3">
                                <img
                                  src={match.img || "/placeholder.png"}
                                  alt={match.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="min-w-0">
                                <h5 className="text-sm font-bold text-brand-black mb-1">{match.title}</h5>
                                <Link href={`/products/${slug}`} className="inline-flex items-center gap-1.5 text-sm font-bold text-green hover:text-green-dark transition-colors">
                                  View Product <i className="fas fa-arrow-right text-[10px]"></i>
                                </Link>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}
                </div>

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
                      <p className="text-sm font-bold text-brand-black whitespace-pre-line">{product.recommendedWith}</p>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* ─── LEFT COLUMN ─── */}
            <div className="lg:col-span-8 lg:order-1 space-y-10 sm:space-y-12">

              {/* Is This Product Right for You? */}
              {product.isThisRightFor && (
                <div>
                  <h3 className="text-sm font-black uppercase tracking-[0.3em] text-green mb-4">Is This Product Right for You?</h3>
                   <div className="p-5 sm:p-6 bg-gradient-to-br from-brand-bg2 to-white rounded-2xl border border-brand-border">
                  <p className="text-sm text-brand-body leading-relaxed" style={{ whiteSpace: "pre-line" }} dangerouslySetInnerHTML={{ __html: product.isThisRightFor }} />
                  </div>
                </div>
              )}

              {/* Application */}
              {product.application && (
                <div>
                  <h3 className="text-sm font-black uppercase tracking-[0.3em] text-green mb-4">Application</h3>
                  <div className="p-5 sm:p-6 bg-gradient-to-br from-brand-bg2 to-white rounded-2xl border border-brand-border">
                    <p className="text-sm text-brand-body leading-relaxed" style={{ whiteSpace: "pre-line" }} dangerouslySetInnerHTML={{ __html: product.application }} />
                  </div>
                </div>
              )}

              {/* Specification Table (system categories only) */}
              {["Cleaning Systems", "Paint Removal Systems", "Descaling Systems"].includes(product.category) && (() => {
                const sd = product.specData;
                if (sd && sd.headers && sd.headers.length > 0 && sd.rows && sd.rows.length > 0) {
                  return (
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-[0.3em] text-green mb-4">Specification</h3>
                      <div className="overflow-x-auto rounded-2xl border border-brand-border">
                        <table className="text-sm w-full lg:table-fixed">
                          <thead>
                            <tr className="bg-gradient-to-r from-green to-emerald-600">
                              <th className="text-left px-2 sm:px-4 py-3 font-bold text-white whitespace-nowrap min-w-[160px] lg:w-56 lg:min-w-0 lg:whitespace-normal">Parameter</th>
                              {sd.headers.map((h, i) => (
                                <th key={i} className="px-2 sm:px-4 py-3 font-bold text-white text-center whitespace-nowrap min-w-[120px] lg:min-w-0 lg:whitespace-normal">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {sd.rows.map((row, i) => (
                              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-brand-bg2"}>
                                <td className="px-2 sm:px-4 py-2.5 font-semibold text-brand-black border-r border-brand-border whitespace-nowrap lg:whitespace-normal">{row.label}</td>
                                {row.values.map((v, j) => (
                                  <td key={j} className="px-2 sm:px-4 py-2.5 text-brand-body text-center border-r border-brand-border last:border-r-0 whitespace-nowrap lg:whitespace-normal">{v}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  );
                }
                if (product.availableModels && product.specificationFields && product.availableModels.length > 0) {
                  return (
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-[0.3em] text-green mb-4">Specification</h3>
                      <div className="overflow-x-auto rounded-2xl border border-brand-border">
                        <table className="text-sm w-full lg:table-fixed">
                          <thead>
                            <tr className="bg-gradient-to-r from-green to-emerald-600">
                              <th className="text-left px-2 sm:px-4 py-3 font-bold text-white whitespace-nowrap min-w-[160px] lg:w-56 lg:min-w-0 lg:whitespace-normal">Parameter</th>
                              {product.availableModels.map((m, i) => (
                                <th key={i} className="px-2 sm:px-4 py-3 font-bold text-white text-center whitespace-nowrap min-w-[120px] lg:min-w-0 lg:whitespace-normal">{m.model}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {product.specificationFields.map((field, i) => (
                              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-brand-bg2"}>
                                <td className="px-2 sm:px-4 py-2.5 font-semibold text-brand-black border-r border-brand-border whitespace-nowrap lg:whitespace-normal">{field.label}</td>
                                {product.availableModels.map((m, j) => (
                                  <td key={j} className="px-2 sm:px-4 py-2.5 text-brand-body text-center border-r border-brand-border last:border-r-0 whitespace-nowrap lg:whitespace-normal">{m[field.key]}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  );
                }
                return null;
              })()}

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

              {/* Mobile: Recommended Cleaner (after Why Choose) */}
              <div className="lg:hidden">
                {(() => {
                  const rcs = product.recommendedCleaner
                    ? (Array.isArray(product.recommendedCleaner) ? product.recommendedCleaner : [product.recommendedCleaner])
                    : [];
                  if (rcs.length === 0) return null;
                  return (
                    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-brand-border shadow-sm">
                      <div className="flex items-center gap-2 mb-4">
                        <i className="fas fa-flask text-green text-xs"></i>
                        <span className="text-sm font-bold text-green uppercase tracking-wider">Recommended Cleaner</span>
                      </div>
                      <div className="space-y-4">
                        {rcs.map((slug, idx) => {
                          const match = allItems.find(p => p.slug === slug);
                          if (!match) return null;
                          return (
                            <div key={idx} className="flex items-start gap-3 sm:gap-4">
                              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shrink-0 border border-green/20 bg-brand-bg3">
                                <img
                                  src={match.img || "/placeholder.png"}
                                  alt={match.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="min-w-0">
                                <h5 className="text-sm font-bold text-brand-black mb-1">{match.title}</h5>
                                <Link href={`/products/${slug}`} className="inline-flex items-center gap-1.5 text-sm font-bold text-green hover:text-green-dark transition-colors">
                                  View Product <i className="fas fa-arrow-right text-[10px]"></i>
                                </Link>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Mobile: FAQ (after Recommended Cleaner) */}
              <div className="lg:hidden">
                {product.faq && product.faq.length > 0 && (
                  <ProductFAQ faq={product.faq} />
                )}
              </div>

              {/* Mobile: Similar Products (after FAQ) */}
              <div className="lg:hidden">
                {product.similarProducts && product.similarProducts.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-green">Similar Products</p>
                      <Link href="/products" className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-green px-4 py-2 rounded-lg hover:bg-green-dark transition-colors">
                        View All Products <i className="fas fa-arrow-right text-[10px]"></i>
                      </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {product.similarProducts
                        .map((ref) => allItems.find((p) => p.title === ref || p.slug === ref || p.id === ref))
                        .filter(Boolean)
                        .map((similarProd, i) => (
                          <Link key={i} href={`/products/${similarProd.slug}`} className="group block border border-brand-border rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 bg-white">
                            <div className="aspect-[4/3] overflow-hidden bg-brand-bg3">
                              <img
                                src={similarProd.img || similarProd.images?.[0] || "/placeholder.png"}
                                alt={similarProd.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <div className="p-4 sm:p-5">
                              <span className="text-xs font-bold text-green">{similarProd.category}</span>
                              <h4 className="text-sm font-bold text-brand-black mt-1 mb-1 leading-snug">{similarProd.title}</h4>
                              <p className="text-xs text-brand-body leading-relaxed line-clamp-2">{similarProd.desc}</p>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </div>
                )}
              </div>

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

              {/* Similar Products (desktop only) */}
              <div className="hidden lg:block">
              {product.similarProducts && product.similarProducts.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-green">Similar Products</p>
                    <Link href="/products" className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-green px-4 py-2 rounded-lg hover:bg-green-dark transition-colors">
                      View All Products <i className="fas fa-arrow-right text-[10px]"></i>
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {product.similarProducts
                      .map((ref) => allItems.find((p) => p.title === ref || p.slug === ref || p.id === ref))
                      .filter(Boolean)
                      .map((similarProd, i) => (
                        <Link key={i} href={`/products/${similarProd.slug}`} className="group block border border-brand-border rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 bg-white">
                          <div className="aspect-[4/3] overflow-hidden bg-brand-bg3">
                            <img
                              src={similarProd.img || similarProd.images?.[0] || "/placeholder.png"}
                              alt={similarProd.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-4 sm:p-5">
                            <span className="text-xs font-bold text-green">{similarProd.category}</span>
                            <h4 className="text-sm font-bold text-brand-black mt-1 mb-1 leading-snug">{similarProd.title}</h4>
                            <p className="text-xs text-brand-body leading-relaxed line-clamp-2">{similarProd.desc}</p>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              )}
              </div>

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

              {/* FAQ (desktop only) */}
              <div className="hidden lg:block">
              {product.faq && product.faq.length > 0 && (
                <ProductFAQ faq={product.faq} />
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



