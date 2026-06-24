"use client";

import React, { useState, useEffect } from 'react';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { API } from '@/lib/api';

const fallbackImg = (w, h) => `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect fill="#e2e8f0" width="${w}" height="${h}"/><text fill="#64748b" font-family="Arial" font-size="${Math.min(w,h)/8}" font-weight="bold" x="${w/2}" y="${h/2}" text-anchor="middle" dominant-baseline="middle">No Image</text></svg>`)}`;

export default function CaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API}/case-studies`);
        const data = await res.json();
        setCaseStudies(data.caseStudies || []);
      } catch (err) {
        console.error("Failed to fetch case studies:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* ─── PAGE HERO ─── */}
      <section className="relative pt-6 pb-5 lg:pt-10 lg:pb-8 bg-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight reveal">
              Industrial <span className="text-green-mid">Success Stories</span>
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed reveal">
              See how we help manufacturing plants solve tough maintenance challenges, cut down on downtime, and improve floor safety.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CASE STUDIES GRID ─── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin w-8 h-8 border-4 border-green border-t-transparent rounded-full"></div>
            </div>
          ) : caseStudies.length === 0 ? (
            <p className="text-center text-brand-muted py-20">No case studies available yet.</p>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {caseStudies.map((study, index) => (
              <article
                key={index}
                className="group reveal bg-white border border-brand-border rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={study.image || fallbackImg(600, 400)}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = fallbackImg(600, 400); }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-green text-[10px] font-bold uppercase tracking-wider rounded-lg border border-green/20">
                      {study.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-brand-muted text-[10px] font-bold uppercase tracking-widest mb-4">
                    <i className="fas fa-tag text-green"></i>
                    {study.product}
                  </div>
                  <h2 className="text-lg font-bold text-brand-black mb-3 leading-tight group-hover:text-green transition-colors">
                    {study.title}
                  </h2>

                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-green uppercase tracking-widest hover:gap-3 transition-all mt-6"
                  >
                    View More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          )}
        </div>
      </section>

      <CTA />
    </main>
  );
}
