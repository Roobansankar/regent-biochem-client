import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      title: "Maximizing Efficiency with the GT Parts Washer Pro",
      slug: "maximizing-efficiency-with-the-gt-parts-washer-pro",
      excerpt: "Discover how the latest advancements in bench-top aqueous cleaning are streamlining precision engineering workflows and reducing downtime.",
      category: "Equipment",
      date: "May 10, 2026",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "The Environmental Benefits of Bio-Active Cleaning",
      slug: "the-environmental-benefits-of-bio-active-cleaning",
      excerpt: "How bio-remediation technology is helping industries eliminate hazardous solvent waste while maintaining superior cleaning performance.",
      category: "Sustainability",
      date: "May 05, 2026",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Understanding the AutoPurge System for Zero-Residue Changeovers",
      slug: "understanding-the-autopurge-system-for-zero-residue-changeovers",
      excerpt: "A deep dive into automated pipeline purging and how it prevents cross-contamination in complex chemical manufacturing processes.",
      category: "Automation",
      date: "April 28, 2026",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Why SafeWeld is Changing Fabrication Standards",
      slug: "why-safeweld-is-changing-fabrication-standards",
      excerpt: "Explore the impact of water-based anti-spatter solutions on weld quality, operator safety, and long-term tool protection.",
      category: "Welding",
      date: "April 22, 2026",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Aqueous vs. Solvent Cleaning: Making the Right Choice",
      slug: "aqueous-vs-solvent-cleaning-making-the-right-choice",
      excerpt: "We compare traditional solvent cleaning with modern aqueous systems to help you decide which is best for your specific application.",
      category: "Technical",
      date: "April 15, 2026",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Best Practices for Maintaining Your HTW II Bio Washer",
      slug: "best-practices-for-maintaining-your-htw-ii-bio-washer",
      excerpt: "Expert tips on oxygen membrane compressor maintenance and bio-active fluid management to ensure your system runs at peak efficiency.",
      category: "Maintenance",
      date: "April 08, 2026",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <ScrollReveal />

      {/* ─── BLOG HERO ─── */}
      <div className="px-4 sm:px-6 lg:px-10 pt-8 pb-4">
        <section className="bg-brand-bg3 py-16 md:py-24 relative overflow-hidden rounded-[2.5rem] shadow-sm border border-brand-border hero-pattern">
          <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-light rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-green-mid rounded-full blur-[100px]"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <div className="flex items-center justify-center gap-2 text-[10px] text-brand-muted mb-8 reveal">
              <Link href="/" className="hover:text-green transition-colors uppercase tracking-widest font-bold">Home</Link>
              <i className="fas fa-chevron-right text-[7px]"></i>
              <span className="text-green font-bold uppercase tracking-widest">Insights & News</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-black leading-tight tracking-tight mb-6 reveal">
              Our <span className="text-green">Blog</span>
            </h1>
            
            <p className="text-base sm:text-lg text-brand-body leading-relaxed max-w-2xl mx-auto reveal">
              Expert insights on industrial cleaning technology, sustainable chemistry, and the future of surface engineering.
            </p>
          </div>
        </section>
      </div>

      {/* ─── ARTICLES GRID ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article 
                key={index} 
                className="group reveal bg-white border border-brand-border rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-green text-[10px] font-bold uppercase tracking-wider rounded-lg border border-green/20">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-brand-muted text-[10px] font-bold uppercase tracking-widest mb-4">
                    <i className="far fa-calendar-alt text-green"></i>
                    {post.date}
                  </div>
                  <h2 className="text-xl font-bold text-brand-black mb-4 leading-tight group-hover:text-green transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-sm text-brand-body leading-relaxed mb-8 flex-1">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-green uppercase tracking-widest hover:gap-3 transition-all"
                  >
                    Read Article <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Placeholder */}
          <div className="mt-16 flex justify-center reveal">
            <nav className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-xl border border-brand-border flex items-center justify-center text-brand-muted hover:border-green hover:text-green transition-colors disabled:opacity-50" disabled>
                <i className="fas fa-chevron-left text-xs"></i>
              </button>
              <button className="w-10 h-10 rounded-xl bg-green text-white flex items-center justify-center text-xs font-bold shadow-lg shadow-green/20">1</button>
              <button className="w-10 h-10 rounded-xl border border-brand-border flex items-center justify-center text-xs font-bold text-brand-muted hover:border-green hover:text-green transition-colors">2</button>
              <button className="w-10 h-10 rounded-xl border border-brand-border flex items-center justify-center text-xs font-bold text-brand-muted hover:border-green hover:text-green transition-colors">3</button>
              <button className="w-10 h-10 rounded-xl border border-brand-border flex items-center justify-center text-brand-muted hover:border-green hover:text-green transition-colors">
                <i className="fas fa-chevron-right text-xs"></i>
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER CTA ─── */}
      <section className="bg-brand-bg2 py-20 px-4 sm:px-6 lg:px-8 border-t border-brand-border">
        <div className="max-w-4xl mx-auto text-center reveal">
          <div className="w-20 h-20 bg-green-light rounded-[2rem] flex items-center justify-center mx-auto mb-8 text-green text-3xl">
            <i className="fas fa-envelope-open-text"></i>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-black mb-4">Stay Updated</h2>
          <p className="text-brand-body leading-relaxed mb-10 max-w-xl mx-auto">
            Get the latest technical insights and industry news delivered directly to your inbox. No spam, just pure engineering value.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="form-input flex-1"
              required
            />
            <button type="submit" className="bg-green text-white font-bold px-8 py-3 rounded-xl hover:bg-green-dark transition-all shadow-lg shadow-green/20">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
