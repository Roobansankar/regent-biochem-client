"use client";


import Link from "next/link";
import { useEffect, useState } from "react";

const fallbackImg = (w, h) => `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect fill="#e2e8f0" width="${w}" height="${h}"/><text fill="#64748b" font-family="Arial" font-size="${Math.min(w,h)/8}" font-weight="bold" x="${w/2}" y="${h/2}" text-anchor="middle" dominant-baseline="middle">No Image</text></svg>`)}`;

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      console.log("Fetching blogs from API...");
      try {
        const response = await fetch("http://localhost:5000/api/blogs");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        console.log("Data received in BlogPage:", data);
        const blogArray = Array.isArray(data.blogs) ? data.blogs : [];
        console.log("Setting posts state with:", blogArray);
        setPosts(blogArray);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  console.log("Current posts state during render:", posts);
  console.log("Loading state:", loading);

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* ─── BLOG HERO ─── */}
      <section className="relative pt-6 pb-5 lg:pt-10 lg:pb-8 bg-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Our <span className="text-green-mid">Blog</span>
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              Practical field guides, technical advice, and updates on the chemical cleaning standards shaping modern plant maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* ─── ARTICLES GRID ─── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin w-10 h-10 border-4 border-green border-t-transparent rounded-full"></div>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <i className="fas fa-newspaper text-4xl text-slate-200 mb-4 block"></i>
              <p className="text-brand-body">No blog posts found yet.</p>
              <Link href="/" className="text-green font-bold text-xs uppercase tracking-widest mt-4 inline-block">Return Home</Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {posts.map((post) => (
                <article 
                  key={post.id} 
                  className="group bg-white border border-brand-border rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden relative bg-slate-100">
                    <img 
                      src={post.image || fallbackImg(800, 500)} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      onError={(e) => { e.target.src = fallbackImg(800, 500); }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-green text-[10px] font-bold uppercase tracking-wider rounded-lg border border-green/20">
                        {post.category || "Technical"}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-brand-muted text-[10px] font-bold uppercase tracking-widest mb-4">
                      <i className="far fa-calendar-alt text-green"></i>
                      {new Date(post.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </div>
                    <h2 className="text-lg font-bold text-brand-black mb-3 leading-tight group-hover:text-green transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-sm text-brand-body leading-relaxed mb-8 flex-1 line-clamp-3">
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
          )}
        </div>
      </section>

      {/* ─── NEWSLETTER CTA ─── */}
      <section className="bg-brand-bg2 py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-brand-border">
        <div className="max-w-4xl mx-auto text-center reveal">
          <div className="w-12 h-12 bg-green-light rounded-2xl flex items-center justify-center mx-auto mb-4 text-green text-xl">
            <i className="fas fa-envelope-open-text"></i>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-black mb-2">Stay Updated</h2>
          <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-6 max-w-xl mx-auto">
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

    </main>
  );
}
