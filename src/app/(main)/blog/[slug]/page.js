"use client";


import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const fallbackImg = (w, h) => `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect fill="#e2e8f0" width="${w}" height="${h}"/><text fill="#64748b" font-family="Arial" font-size="${Math.min(w,h)/8}" font-weight="bold" x="${w/2}" y="${h/2}" text-anchor="middle" dominant-baseline="middle">No Image</text></svg>`)}`;

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    
    const fetchPost = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/blogs/${slug}`);
        const data = await response.json();
        setPost(data.blog);
        setRelated(data.related || []);
      } catch (err) {
        console.error("Failed to fetch blog post:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-10 h-10 border-4 border-green border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">Post not found</h1>
        <Link href="/blog" className="text-green font-bold uppercase tracking-widest text-xs">Back to Blog</Link>
      </div>
    );
  }

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* ─── ARTICLE HERO ─── */}
      <div className="px-4 sm:px-6 lg:px-6 pt-6 pb-4">
        <section className="relative h-[300px] md:h-[400px] lg:h-[480px] overflow-hidden rounded-[2rem] shadow-lg">
          <img 
            src={post.image || fallbackImg(1600, 480)} 
            alt={post.title} 
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => { e.target.src = fallbackImg(1600, 480); }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
            <div className="max-w-[1600px] mx-auto">
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-[10px] font-bold uppercase tracking-widest mb-6">
                <span className="px-3 py-1 bg-green text-white rounded-lg">{post.category}</span>
                <span className="flex items-center gap-1.5">
                  <i className="far fa-calendar-alt text-green"></i> {new Date(post.created_at).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-1.5">
                  <i className="far fa-clock text-green"></i> {post.read_time}
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
                <div className="text-brand-muted text-xs uppercase tracking-widest font-bold">Technical Expert</div>
              </div>
            </div>

            <article 
              className="prose prose-lg max-w-none prose-headings:text-brand-black prose-p:text-brand-body prose-p:mb-6 prose-p:leading-relaxed prose-blockquote:border-green break-words overflow-hidden blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <style jsx global>{`
              .blog-content p {
                margin-bottom: 1rem !important;
                line-height: 1.6 !important;
                color: #4b5563 !important; /* Tailwind gray-600 */
                word-wrap: break-word;
                overflow-wrap: break-word;
              }
              .blog-content p:last-child {
                margin-bottom: 0 !important;
              }
              .blog-content ul {
                list-style-type: disc !important;
                padding-left: 1.5rem !important;
                margin-bottom: 1.5rem !important;
                color: #4b5563 !important;
              }
              .blog-content ol {
                list-style-type: decimal !important;
                padding-left: 1.5rem !important;
                margin-bottom: 1.5rem !important;
                color: #4b5563 !important;
              }
              .blog-content li {
                margin-bottom: 0.5rem !important;
              }
              .blog-content blockquote {
                border-left-width: 4px !important;
                border-left-color: #22c55e !important; /* Tailwind green-500 */
                background-color: rgba(34, 197, 94, 0.1) !important;
                padding: 2rem !important;
                margin-top: 2.5rem !important;
                margin-bottom: 2.5rem !important;
                border-top-right-radius: 1rem !important;
                border-bottom-right-radius: 1rem !important;
                font-style: italic !important;
                color: #1f2937 !important; /* Tailwind gray-800 */
              }
            `}</style>
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
                {related.map((item, i) => (
                  <Link key={i} href={`/blog/${item.slug}`} className="group flex gap-4">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-slate-100">
                      <img src={item.image || fallbackImg(80, 80)} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => { e.target.src = fallbackImg(80, 80); }} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-black leading-tight mb-2 group-hover:text-green transition-colors line-clamp-2">{item.title}</h4>
                      <div className="text-[10px] font-bold text-brand-muted uppercase tracking-widest">{new Date(item.created_at).toLocaleDateString()}</div>
                    </div>
                  </Link>
                ))}
                {related.length === 0 && <p className="text-xs text-brand-muted">No related posts found.</p>}
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
