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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-light border border-green-mid mb-8">
                <span className="w-2 h-2 rounded-full bg-green"></span>
                <span className="text-[10px] font-black uppercase tracking-widest text-green">
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-brand-black mb-6 leading-[1.1]">
                {product.title}
              </h1>
              
              <p className="text-xl font-bold text-green mb-8 uppercase tracking-[0.2em]">
                {product.subtitle || "Industrial Engineering Excellence"}
              </p>

              <p className="text-lg text-brand-body leading-relaxed mb-12 border-l-4 border-green pl-8 max-w-2xl text-justify">
                {product.desc}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-10 py-4 bg-green text-white font-black rounded-2xl hover:bg-green-dark transition-all transform hover:-translate-y-1 shadow-xl shadow-green/20 uppercase tracking-widest text-xs"
                >
                  Request Technical Quote
                </Link>
                <button
                  className="px-10 py-4 border-2 border-brand-border text-brand-black font-bold rounded-2xl hover:bg-brand-bg2 transition-all uppercase tracking-widest text-xs"
                >
                  Download Data Sheet
                </button>
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

      {/* ─── TECHNICAL OVERVIEW ─── */}
      <section className="py-24 bg-white border-t border-brand-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-16">
            
            {/* Narrative Content (8 cols) */}
            <div className="xl:col-span-8">
              <div className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-10 h-px bg-green/30"></span>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green">Theoretical Deep Dive</span>
                </div>
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-brand-black prose-p:text-brand-body prose-strong:text-green"
                  dangerouslySetInnerHTML={{ __html: product.fullDescription || "<p>Detailed technical documentation for this product is currently being updated. Please contact our engineering department for full specifications.</p>" }}
                />
              </div>

              {/* Key Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {product.features && product.features.map((feature, i) => (
                  <div key={i} className="flex gap-6 p-8 bg-brand-bg2 rounded-[2.5rem] border border-brand-border hover:bg-white hover:shadow-xl transition-all group">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-green shadow-sm group-hover:bg-green group-hover:text-white transition-all shrink-0">
                      <i className="fas fa-check"></i>
                    </div>
                    <p className="text-base font-black text-brand-black uppercase tracking-tight leading-tight pt-1">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar: Technical Specs (4 cols) */}
            <div className="xl:col-span-4">
              <div className="sticky top-24">
                <div className="bg-brand-black rounded-[2.5rem] p-10 text-white overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black mb-10 uppercase tracking-tight">Technical<br/>Specifications</h3>
                    
                    <div className="space-y-6">
                      {product.technicalSpecs ? product.technicalSpecs.map((spec, i) => (
                        <div key={i} className="flex justify-between items-end border-b border-white/10 pb-4 group">
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-green mb-1">{spec.label}</p>
                            <p className="text-lg font-bold text-white/90">{spec.value}</p>
                          </div>
                          <div className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-green transition-colors"></div>
                        </div>
                      )) : (
                        <p className="text-sm text-white/50 italic">Technical datasheet pending.</p>
                      )}
                    </div>

                    <div className="mt-12 p-8 rounded-3xl bg-white/5 border border-white/10">
                       <i className="fas fa-headset text-2xl text-green mb-4"></i>
                       <p className="text-sm font-bold text-white mb-2">Need a Custom Config?</p>
                       <p className="text-xs text-white/50 leading-relaxed mb-6">Our engineers can customize the {product.title} to fit your specific production line requirements.</p>
                       <Link href="/contact" className="text-xs font-black text-green uppercase tracking-widest hover:text-white transition-colors">
                          Speak with an expert →
                       </Link>
                    </div>
                  </div>
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
