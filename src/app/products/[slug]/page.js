// import { products } from "@/data/products";
// import CTA from "@/components/CTA";
// import { notFound } from "next/navigation";
// import Link from "next/link";

// export async function generateStaticParams() {
//   return products.map((product) => ({
//     slug: product.slug,
//   }));
// }

// export default async function ProductDetailPage({ params }) {
//   const { slug } = await params;
//   const product = products.find((p) => p.slug === slug);

//   if (!product) {
//     notFound();
//   }

//   return (
//     <main className="flex flex-col min-h-screen bg-white">
//       {/* ─── PRODUCT HERO ─── */}
//       <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-brand-bg3">
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white -z-10"></div>
//         <div className="absolute top-0 right-0 w-1/2 h-full bg-green-50/20 blur-[120px] -z-10"></div>
        
//         <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
//             {/* Text Side */}
//             <div className="lg:col-span-7">
//               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-light border border-green-mid mb-8">
//                 <span className="w-2 h-2 rounded-full bg-green"></span>
//                 <span className="text-[10px] font-black uppercase tracking-widest text-green">
//                   {product.category}
//                 </span>
//               </div>
              
//               <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-brand-black mb-6 leading-[1.1]">
//                 {product.title}
//               </h1>
              
//               <p className="text-xl font-bold text-green mb-8 uppercase tracking-[0.2em]">
//                 {product.subtitle || "Industrial Engineering Excellence"}
//               </p>

//               <p className="text-lg text-brand-body leading-relaxed mb-12 border-l-4 border-green pl-8 max-w-2xl text-justify">
//                 {product.desc}
//               </p>
              
<div className="flex flex-wrap gap-4">
  <Link
    href="/contact"
    className="px-10 py-4 bg-green text-white font-black rounded-2xl hover:bg-green-dark transition-all transform hover:-translate-y-1 shadow-xl shadow-green/20 uppercase tracking-widest text-xs"
  >
    Request Technical Quote
  </Link>
</div>
//             </div>

//             {/* Image Side */}
//             <div className="lg:col-span-5">
//               <div className="relative aspect-square rounded-[3.5rem] bg-white shadow-2xl border-[12px] border-white overflow-hidden flex items-center justify-center p-8 group">
//                 <img
//                   src={product.img}
//                   alt={product.title}
//                   className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
//                 />
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ─── TECHNICAL OVERVIEW ─── */}
//       <section className="py-24 bg-white border-t border-brand-border">
//         <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 xl:grid-cols-12 gap-16">
            
//             {/* Narrative Content (8 cols) */}
//             <div className="xl:col-span-8">
//               <div className="mb-20">
//                 <div className="flex items-center gap-3 mb-8">
//                   <span className="w-10 h-px bg-green/30"></span>
//                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green">Theoretical Deep Dive</span>
//                 </div>
//                 <div 
//                   className="prose prose-lg max-w-none prose-headings:text-brand-black prose-p:text-brand-body prose-strong:text-green"
//                   dangerouslySetInnerHTML={{ __html: product.fullDescription || "<p>Detailed technical documentation for this product is currently being updated. Please contact our engineering department for full specifications.</p>" }}
//                 />
//               </div>

//               {/* Key Features Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {product.features && product.features.map((feature, i) => (
//                   <div key={i} className="flex gap-6 p-8 bg-brand-bg2 rounded-[2.5rem] border border-brand-border hover:bg-white hover:shadow-xl transition-all group">
//                     <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-green shadow-sm group-hover:bg-green group-hover:text-white transition-all shrink-0">
//                       <i className="fas fa-check"></i>
//                     </div>
//                     <p className="text-base font-black text-brand-black uppercase tracking-tight leading-tight pt-1">{feature}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Sidebar: Technical Specs (4 cols) */}
//             <div className="xl:col-span-4">
//               <div className="sticky top-24">
//                 <div className="bg-brand-black rounded-[2.5rem] p-10 text-white overflow-hidden relative">
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-green/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  
//                   <div className="relative z-10">
//                     <h3 className="text-2xl font-black mb-10 uppercase tracking-tight">Technical<br/>Specifications</h3>
                    
//                     <div className="space-y-6">
//                       {product.technicalSpecs ? product.technicalSpecs.map((spec, i) => (
//                         <div key={i} className="flex justify-between items-end border-b border-white/10 pb-4 group">
//                           <div>
//                             <p className="text-[10px] font-black uppercase tracking-widest text-green mb-1">{spec.label}</p>
//                             <p className="text-lg font-bold text-white/90">{spec.value}</p>
//                           </div>
//                           <div className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-green transition-colors"></div>
//                         </div>
//                       )) : (
//                         <p className="text-sm text-white/50 italic">Technical datasheet pending.</p>
//                       )}
//                     </div>

//                     <div className="mt-12 p-8 rounded-3xl bg-white/5 border border-white/10">
//                        <i className="fas fa-headset text-2xl text-green mb-4"></i>
//                        <p className="text-sm font-bold text-white mb-2">Need a Custom Config?</p>
//                        <p className="text-xs text-white/50 leading-relaxed mb-6">Our engineers can customize the {product.title} to fit your specific production line requirements.</p>
//                        <Link href="/contact" className="text-xs font-black text-green uppercase tracking-widest hover:text-white transition-colors">
//                           Speak with an expert →
//                        </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       <CTA />
//     </main>
//   );
// }


import { products } from "@/data/products";
import CTA from "@/components/CTA";
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

  return (
    <main className="flex flex-col min-h-screen bg-white">

      {/* ─── PRODUCT HERO ─── */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-brand-bg3">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white -z-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-green-50/20 blur-[120px] -z-10"></div>

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Text Side */}
            <div className="lg:col-span-7">
              {/* Category badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-light border border-green-mid mb-4">
                <span className="w-2 h-2 rounded-full bg-green"></span>
                <span className="text-[10px] font-black uppercase tracking-widest text-green">
                  {product.category}
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-brand-black mb-4 leading-[1.1]">
                {product.title}
              </h1>

              <p className="text-xl font-bold text-green mb-8 uppercase tracking-[0.2em]">
                {product.subtitle || "Industrial Engineering Excellence"}
              </p>

              {/* Description */}
              <p className="text-lg text-brand-body leading-relaxed mb-6 border-l-4 border-green pl-8 max-w-2xl text-justify">
                {product.desc}
              </p>

              {/* Bullet points */}
              {product.descBullets && product.descBullets.length > 0 && (
                <ul className="mb-10 pl-8 space-y-3">
                  {product.descBullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-brand-body text-base leading-relaxed">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-green shrink-0"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {/* Labels / Badges */}
              {product.labels && product.labels.length > 0 && (
                <div className="flex flex-wrap items-center gap-3 mb-10">
                  {product.labels.map((label, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-green-mid text-xs font-black uppercase tracking-widest text-green shadow-sm"
                    >
                      <i className="fas fa-certificate text-green"></i>
                      {label}
                    </span>
                  ))}
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-10 py-4 bg-green text-white font-black rounded-2xl hover:bg-green-dark transition-all transform hover:-translate-y-1 shadow-xl shadow-green/20 uppercase tracking-widest text-xs"
                >
                  Enquire Now
                </Link>
               
              </div>
            </div>

            {/* Image Side */}
            <div className="lg:col-span-5">
              <div className="relative aspect-square rounded-[3.5rem] bg-white shadow-2xl border-[12px] border-white overflow-hidden flex items-center justify-center p-8 group">
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
        <section className="py-16 bg-green-light border-t border-green-mid">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-green flex items-center justify-center shadow-lg">
                <i className="fas fa-check-circle text-white text-xl"></i>
              </div>
              <div>
                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-green mb-2">
                  Is This Product Right for You?
                </h2>
                <p className="text-brand-body text-lg leading-relaxed max-w-4xl">
                  {product.isThisRightFor}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── TECHNICAL OVERVIEW ─── */}
      <section className="py-24 bg-white border-t border-brand-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-16">

            {/* Left: Narrative + Features + Application */}
            <div className="xl:col-span-8 space-y-20">

              {/* Full Description */}
              {product.fullDescription && (
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-10 h-px bg-green/30"></span>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green">
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
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-10 h-px bg-green/30"></span>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green">
                      Application
                    </span>
                  </div>
                  <div className="p-8 bg-brand-bg2 rounded-[2.5rem] border border-brand-border">
                    <p className="text-brand-body text-base leading-relaxed">{product.application}</p>
                  </div>
                </div>
              )}

              {/* Key Features */}
              {product.features && product.features.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <span className="w-10 h-px bg-green/30"></span>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green">
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
                        <p className="text-sm font-black text-brand-black uppercase tracking-tight leading-tight pt-2">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Similar Products */}
              {product.similarProducts && product.similarProducts.length > 0 && (
                <div>
                  <div className="flex items-center gap-3 mb-10">
                    <span className="w-10 h-px bg-green/30"></span>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green">
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
                             {similarProd.img ? (
                               <img src={similarProd.img} alt={similarProd.title} className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-110" />
                             ) : (
                               <div className="w-16 h-16 bg-green-light rounded-2xl flex items-center justify-center text-green group-hover:bg-green group-hover:text-white transition-all">
                                 <i className={`fas ${similarProd.icon} text-2xl`}></i>
                               </div>
                             )}
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
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green">
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
              <div className="sticky top-24 space-y-6">

                {/* Technical Specifications */}
                <div className="bg-brand-black rounded-[2.5rem] p-10 text-white overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black mb-10 uppercase tracking-tight">
                      Technical<br />Specifications
                    </h3>
                    <div className="space-y-6">
                      {product.technicalSpecs ? (
                        product.technicalSpecs.map((spec, i) => (
                          <div
                            key={i}
                            className="flex justify-between items-end border-b border-white/10 pb-4 group"
                          >
                            <div>
                              <p className="text-[10px] font-black uppercase tracking-widest text-green mb-1">
                                {spec.label}
                              </p>
                              <p className="text-base font-bold text-white/90">{spec.value}</p>
                            </div>
                            <div className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-green transition-colors"></div>
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-white/50 italic">Technical datasheet pending.</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Recommended With */}
                {product.recommendedWith && (
                  <div className="bg-green-light border border-green-mid rounded-[2rem] p-8">
                    <p className="text-[10px] font-black uppercase tracking-widest text-green mb-3">
                      Recommended With
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-green flex items-center justify-center shrink-0">
                        <i className="fas fa-link text-white text-sm"></i>
                      </div>
                      <p className="text-xl font-black text-brand-black">{product.recommendedWith}</p>
                    </div>
                  </div>
                )}

                {/* Enquire / CTA card */}
                <div className="p-8 rounded-[2rem] bg-white border-2 border-brand-border shadow-sm">
                  <i className="fas fa-headset text-2xl text-green mb-4"></i>
                  <p className="text-sm font-bold text-brand-black mb-2">Need a Custom Config?</p>
                  <p className="text-xs text-brand-body leading-relaxed mb-6">
                    Our engineers can tailor {product.title} to your specific production line requirements.
                  </p>
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 bg-green text-white text-xs font-black rounded-xl hover:bg-green-dark transition-all uppercase tracking-widest shadow-lg shadow-green/20"
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