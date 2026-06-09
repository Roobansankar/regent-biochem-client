"use client";

import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogPost() {
  const { slug } = useParams();

  // Mock data fetching based on slug
  const post = {
    title: slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : "Technical Insight",
    category: "Technical Insight",
    date: "May 10, 2026",
    author: "Dr. Elena Schmidt",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop",
    content: `
      <p class="text-lg text-brand-body leading-relaxed mb-6">
        Industrial cleaning is undergoing a radical transformation. As global standards for environmental safety and operational efficiency tighten, companies like Regent Biochem are at the forefront of developing solutions that don't just meet these requirements but redefine what's possible in a modern facility.
      </p>
      
      <h2 class="text-2xl font-bold text-brand-black mt-12 mb-6">The Shift to Aqueous Systems</h2>
      <p class="text-brand-body leading-relaxed mb-6">
        For decades, solvent-based cleaning was the industry standard. However, the high VOC emissions and hazardous waste profiles have made them increasingly liabilities. Modern aqueous systems, like those found in the GT Parts Washer Pro, utilize high-temperature water and specialized bio-active fluids to achieve superior results without the chemical baggage.
      </p>

      <blockquote class="border-l-4 border-green bg-green-light/30 p-8 my-10 rounded-r-2xl italic text-brand-black">
        "The goal isn't just to clean a part; it's to integrate cleaning into the production cycle as a value-added step, not a bottleneck."
      </blockquote>

      <h2 class="text-2xl font-bold text-brand-black mt-12 mb-6">Maximizing Throughput with Automation</h2>
      <p class="text-brand-body leading-relaxed mb-6">
        One of the biggest challenges in precision engineering is downtime during changeovers. Our AutoPurge System was designed specifically to address this. By automating the flushing of complex manifolds and pipelines, we reduce manual labor and ensure zero-residue quality, which is critical for aerospace and medical device manufacturing.
      </p>

      <div class="my-12 rounded-[2rem] overflow-hidden border border-brand-border shadow-sm">
        <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop" alt="Industrial Laboratory" class="w-full h-auto" />
        <div class="p-4 bg-brand-bg2 text-[10px] text-brand-muted uppercase font-bold text-center tracking-widest">
          Testing high-performance fluids at the Bio-Chem R&D Center in Germany
        </div>
      </div>

      <h2 class="text-2xl font-bold text-brand-black mt-12 mb-6">Sustainability as a Competitive Edge</h2>
      <p class="text-brand-body leading-relaxed mb-6">
        Finally, sustainability is no longer just about compliance; it's a competitive advantage. Reducing waste streams and lowering energy consumption directly impacts the bottom line. Bio-active cleaning fluids, which 'eat' oils and greases using natural microorganisms, allow the cleaning fluid to last much longer, significantly reducing the cost per cleaned part.
      </p>
    `,
  };

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <ScrollReveal />

      {/* ─── ARTICLE HERO ─── */}
      <div className="px-4 sm:px-6 lg:px-6 pt-6 pb-4">
        <section className="relative h-[300px] md:h-[400px] lg:h-[480px] overflow-hidden rounded-[2rem] shadow-lg">
          <img 
            src={post.image} 
            alt={post.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
            <div className="max-w-[1600px] mx-auto">
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-[10px] font-bold uppercase tracking-widest mb-6">
                <span className="px-3 py-1 bg-green text-white rounded-lg">{post.category}</span>
                <span className="flex items-center gap-1.5">
                  <i className="far fa-calendar-alt text-green"></i> {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="far fa-clock text-green"></i> {post.readTime}
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-4xl">
                {post.title}
              </h1>
            </div>
          </div>
        </section>
      </div>

      {/* ─── ARTICLE CONTENT ─── */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-10 pb-10 border-b border-brand-border">
              <div className="w-14 h-14 rounded-2xl bg-green-light flex items-center justify-center text-green text-xl font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="text-brand-black font-bold text-lg">{post.author}</div>
                <div className="text-brand-muted text-xs uppercase tracking-widest font-bold">Chief Innovation Officer</div>
              </div>
            </div>

            <article 
              className="prose prose-lg max-w-none prose-headings:text-brand-black prose-p:text-brand-body prose-blockquote:border-green"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags & Share */}
            <div className="mt-16 pt-10 border-t border-brand-border flex flex-wrap items-center justify-between gap-6">
              <div className="flex flex-wrap gap-2">
                {["Aqueous Cleaning", "Automation", "Sustainability", "Regent Biochem"].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-brand-bg2 text-brand-muted text-xs font-bold rounded-xl border border-brand-border">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-brand-muted uppercase tracking-widest">Share Article:</span>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-xl border border-brand-border flex items-center justify-center text-brand-muted hover:text-green hover:border-green transition-all">
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                  <button className="w-10 h-10 rounded-xl border border-brand-border flex items-center justify-center text-brand-muted hover:text-green hover:border-green transition-all">
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button className="w-10 h-10 rounded-xl border border-brand-border flex items-center justify-center text-brand-muted hover:text-green hover:border-green transition-all">
                    <i className="fas fa-link"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-12">
            
            {/* Newsletter Card */}
            <div className="bg-brand-bg2 rounded-[2rem] p-8 border border-brand-border">
              <h3 className="text-xl font-bold text-brand-black mb-4">Stay in the Loop</h3>
              <p className="text-sm text-brand-body leading-relaxed mb-6">Get the latest technical insights and project updates delivered to your inbox.</p>
              <form className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-5 py-3 rounded-xl border border-brand-border focus:border-green outline-none text-sm transition-all"
                />
                <button className="w-full bg-green text-white font-bold py-3 rounded-xl hover:bg-green-dark transition-all shadow-lg shadow-green/20">
                  Subscribe
                </button>
              </form>
            </div>

            {/* Related Posts */}
            <div>
              <h3 className="text-xl font-bold text-brand-black mb-8">Related Insights</h3>
              <div className="flex flex-col gap-8">
                {[
                  { title: "The Environmental Benefits of Bio-Active Cleaning", date: "May 05, 2026", img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=200&auto=format&fit=crop" },
                  { title: "Understanding the AutoPurge System", date: "April 28, 2026", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=200&auto=format&fit=crop" },
                  { title: "Aqueous vs. Solvent Cleaning", date: "April 15, 2026", img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=200&auto=format&fit=crop" }
                ].map((item, i) => (
                  <Link key={i} href="#" className="group flex gap-4">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                      <img src={item.img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-black leading-tight mb-2 group-hover:text-green transition-colors line-clamp-2">{item.title}</h4>
                      <div className="text-[10px] font-bold text-brand-muted uppercase tracking-widest">{item.date}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Consultation Card */}
            <div className="bg-green rounded-[2rem] p-8 text-white">
              <i className="fas fa-headset text-3xl mb-6"></i>
              <h3 className="text-xl font-bold mb-4">Need Expert Advice?</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-8">Speak with our engineers about your specific application requirements.</p>
              <Link href="/contact" className="inline-block bg-white text-green font-bold px-6 py-3 rounded-xl hover:-translate-y-1 transition-all">
                Contact Us
              </Link>
            </div>

          </aside>
        </div>
      </section>

    </main>
  );
}
