import Link from "next/link";
import { products } from "@/data/products";

export default function ProductGrid() {
  const displayProducts = products.slice(0, 7);

  return (
    <section className="bg-white py-12 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-green mb-2">Our Range</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-black">All Products</h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-green border border-green rounded px-5 py-2.5 hover:bg-green hover:text-white transition-colors whitespace-nowrap self-start sm:self-auto"
          >
            View All Products <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {displayProducts.map((product, i) => (
            <div
              key={i}
              className="group border border-brand-border rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white cursor-pointer"
            >
              <div className="dot-bg bg-brand-bg3 aspect-[4/3] flex items-center justify-center p-6">
                <div className="w-20 h-20 bg-green-light group-hover:bg-green transition-colors rounded-2xl flex items-center justify-center">
                  <i className={`fas ${product.icon} text-green group-hover:text-white transition-colors text-2xl`}></i>
                </div>
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-green">{product.category}</span>
                <h3 className="text-base font-bold text-brand-black mt-1 mb-2 leading-snug">{product.title}</h3>
                <p className="text-xs text-brand-body leading-relaxed mb-4">{product.desc}</p>
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center justify-center w-full bg-green text-white text-[10px] font-extrabold uppercase tracking-widest py-2.5 rounded-lg hover:bg-green-dark transition-all shadow-sm"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}

          {/* View All CTA */}
          <div className="group border-2 border-dashed border-green-mid rounded-2xl flex items-center justify-center p-8 bg-green-light/30 hover:bg-green-light transition-colors cursor-pointer min-h-[200px]">
            <div className="text-center">
              <div className="w-14 h-14 bg-green-light group-hover:bg-green transition-colors rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-th-large text-green group-hover:text-white transition-colors text-xl"></i>
              </div>
              <p className="text-sm font-bold text-green mb-1">Explore More</p>
              <p className="text-xs text-brand-muted mb-4">{products.length}+ products across all categories</p>
              <Link
                href="/products"
                className="inline-block bg-green text-white font-bold text-xs px-5 py-2.5 rounded-lg hover:bg-green-dark transition-colors"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
