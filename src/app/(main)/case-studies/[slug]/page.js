"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import CTA from "@/components/CTA";
import { API } from "@/lib/api";

const fallbackImg = (w, h) => `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect fill="#e2e8f0" width="${w}" height="${h}"/><text fill="#64748b" font-family="Arial" font-size="${Math.min(w,h)/8}" font-weight="bold" x="${w/2}" y="${h/2}" text-anchor="middle" dominant-baseline="middle">No Image</text></svg>`)}`;

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const [study, setStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    const fetchCaseStudy = async () => {
      try {
        const res = await fetch(`${API}/case-studies/${slug}`);
        const data = await res.json();
        if (data.caseStudy) {
          setStudy(data.caseStudy);
        } else {
          notFound();
        }
      } catch (err) {
        console.error("Failed to fetch case study:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCaseStudy();
  }, [slug]);

  useEffect(() => {
    if (!study) return;
    document.title = study.meta_title || `${study.title} | Regent Biochem`;
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement('meta');
      desc.name = 'description';
      document.head.appendChild(desc);
    }
    desc.content = study.meta_description || study.industry || "";
    let kw = document.querySelector('meta[name="keywords"]');
    if (!kw) {
      kw = document.createElement('meta');
      kw.name = 'keywords';
      document.head.appendChild(kw);
    }
    kw.content = study.meta_keywords || "";
  }, [study]);

  if (loading) {
    return (
      <main className="flex flex-col min-h-screen bg-white items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-green border-t-transparent rounded-full"></div>
      </main>
    );
  }

  if (!study) return notFound();

  return (
    <main className="flex flex-col min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[264px] md:min-h-[304px] lg:min-h-[364px] flex items-start pt-14 lg:pt-[72px]" style={{
        backgroundImage: study.hero_image ? `url('${study.hero_image}')` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
        {study.hero_image && <div className="hero-overlay absolute inset-0 z-10"></div>}
        <div className="flex-1 px-8 lg:px-12 py-8 relative z-20">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-green/60 hover:text-green transition-colors mb-4"
          >
            <i className="fas fa-arrow-left text-xs" />
            Back to Case Studies
          </Link>
          <h1 className="text-3xl lg:text-4xl font-bold text-brand-black leading-tight max-w-3xl">
            {study.title}
          </h1>
        </div>
      </section>

      {/* Meta Details */}
      <section className="py-8 bg-brand-bg2 border-b border-brand-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
            <div className="bg-white rounded-2xl border border-brand-border p-5">
              <div className="flex items-center gap-2 text-green text-sm mb-2">
                <i className="fas fa-building"></i>
                <span className="font-bold uppercase tracking-wider text-brand-muted">Industry</span>
              </div>
              <div className="text-sm font-semibold text-brand-black">{study.industry}</div>
            </div>
            <div className="bg-white rounded-2xl border border-brand-border p-5">
              <div className="flex items-center gap-2 text-green text-sm mb-2">
                <i className="fas fa-industry"></i>
                <span className="font-bold uppercase tracking-wider text-brand-muted">Sub Industry</span>
              </div>
              <div className="text-sm font-semibold text-brand-black">{study.subindustry}</div>
            </div>
            <div className="bg-white rounded-2xl border border-brand-border p-5">
              <div className="flex items-center gap-2 text-green text-sm mb-2">
                <i className="fas fa-wrench"></i>
                <span className="font-bold uppercase tracking-wider text-brand-muted">Application</span>
              </div>
              <div className="text-sm font-semibold text-brand-black">{study.application}</div>
            </div>
            <div className="bg-white rounded-2xl border border-brand-border p-5">
              <div className="flex items-center gap-2 text-green text-sm mb-2">
                <i className="fas fa-tag"></i>
                <span className="font-bold uppercase tracking-wider text-brand-muted">Product</span>
              </div>
              <div className="text-sm font-semibold text-brand-black">{study.product}</div>
              {study.ref && <div className="text-[10px] font-bold text-green/60 uppercase tracking-wider mt-1">Ref: {study.ref}</div>}
            </div>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="pt-10 sm:pt-14 pb-16">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">

            {/* ── Left — main content ── */}
            <div className="lg:col-span-2 space-y-10">

              {/* Customer background */}
              <div>
                <SectionLabel>Customer background</SectionLabel>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{study.customerBackground}</p>
                {study.customerBackgroundPoints && study.customerBackgroundPoints.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {study.customerBackgroundPoints.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                        <i className="fas fa-circle text-green/40 text-[7px] mt-1.5 flex-shrink-0"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {study.businessChallengesDescription && (
                  <div className="mt-8">
                    <SectionLabel>Business Challenges</SectionLabel>
                    <p className="text-sm text-brand-black leading-relaxed mb-3 font-semibold">{study.businessChallengesDescription}</p>
                  </div>
                )}
                {study.businessChallenges && study.businessChallenges.length > 0 && (
                  <ul className="space-y-3">
                    {study.businessChallenges.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                        <i className="fas fa-circle text-green/40 text-[7px] mt-1.5 flex-shrink-0"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {study.businessChallengesQuote && (
                  <p className="text-sm text-brand-black italic font-medium leading-relaxed mt-4 border-l-2 border-green/30 pl-4">&ldquo;{study.businessChallengesQuote}&rdquo;</p>
                )}
              </div>

              <Divider />

              {/* Before / After snapshot */}
              {study.operationalSnapshot && study.operationalSnapshot.length > 0 && (
              <div>
                <SectionLabel>Before vs after snapshot</SectionLabel>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                  <SnapshotCard title="Operational impact" stats={study.operationalSnapshot} />
                  {study.costSnapshot && study.costSnapshot.length > 0 && (
                    <SnapshotCard title="Cost savings" stats={study.costSnapshot} />
                  )}
                </div>
              </div>
              )}

              {study.operationalSnapshot && study.operationalSnapshot.length > 0 && <Divider />}

              {/* Product */}
              <div>
                <SectionLabel>Product</SectionLabel>
                <div className="bg-brand-bg2 rounded-2xl border border-brand-border overflow-hidden mt-3">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-56 h-48 sm:h-auto flex-shrink-0">
                      <img src={study.image || fallbackImg(400, 300)} alt={study.product} className="w-full h-full object-cover" onError={(e) => { e.target.src = fallbackImg(400, 300); }} />
                    </div>
                    <div className="p-6 flex flex-col justify-center flex-1">
                      <h3 className="text-xl font-bold text-brand-black mb-2">{study.product}</h3>
                      <p className="text-sm text-brand-body leading-relaxed mb-4">{study.solution}</p>
                      <Link href="/products" className="inline-flex items-center gap-2 text-sm font-bold text-green hover:text-green-dark transition-colors">
                        View More <i className="fas fa-arrow-right text-xs"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* ── Right — sidebar ── */}
            <div className="lg:col-span-1 sticky top-24 space-y-4">

              {/* Key takeaways */}
              {study.takeaways && study.takeaways.length > 0 && (
              <div className="bg-green/5 rounded-2xl border border-green/20 p-5">
                <SectionLabel>Key takeaways</SectionLabel>
                {study.takeawaysDescription && (
                  <p className="text-sm text-green-900 leading-relaxed mt-2 mb-3" dangerouslySetInnerHTML={{ __html: study.takeawaysDescription }}></p>
                )}
                <ul className="space-y-2">
                  {study.takeaways.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-green-900">
                      <i className="fas fa-circle-check text-green text-xs mt-0.5 flex-shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              )}

              {/* Ideal use cases */}
              {study.idealUseCases && study.idealUseCases.length > 0 && (
              <div className="bg-brand-bg2 rounded-2xl border border-brand-border p-5">
                <SectionLabel>Ideal use cases</SectionLabel>
                <ul className="space-y-2 mt-2">
                  {study.idealUseCases.map((u, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-brand-body">
                      <i className="fas fa-circle text-green/40 text-[7px] mt-1.5 flex-shrink-0" />
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
              )}

              {/* CTA */}
              <div className="bg-green rounded-[2rem] p-8 text-white">
                <i className="fas fa-headset text-3xl mb-6"></i>
                <h3 className="text-xl font-bold mb-4">Discuss a similar project</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-8">Speak with our engineers about your specific application requirements.</p>
                <Link href="/contact" className="inline-block bg-white text-green font-bold px-6 py-3 rounded-xl hover:-translate-y-1 transition-all">
                  Contact Us
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}

/* ── Small reusable pieces ── */

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[2.5px] uppercase text-green-600 mb-4">
      <span className="w-5 h-0.5 bg-green-500 rounded-sm"></span> {children}
    </div>
  );
}

function Divider({ tight = false }) {
  return <hr className={`border-brand-border ${tight ? "my-0" : ""}`} />;
}

function SnapshotCard({ title, stats }) {
  return (
    <div className="bg-brand-bg2 rounded-xl border border-brand-border p-4">
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-body/60 mb-3">
        {title}
      </p>
      <div className="space-y-3">
        {stats.map((s, i) => (
          <div key={i}>
            <p className="text-2xl font-bold text-green leading-none">{s.value}</p>
            <p className="text-xs text-brand-body mt-0.5 leading-snug">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
