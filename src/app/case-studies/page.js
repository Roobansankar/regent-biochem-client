"use client";

import React from 'react';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';

const caseStudies = [
  {
    title: "85% Reduction in Solvent Waste for Automotive Assembly",
    client: "Tier-1 Automotive Manufacturer",
    category: "Automotive",
    product: "Bio-Washer System",
    problem: "The client was struggling with high hazardous waste disposal costs and operator exposure to toxic VOCs from traditional solvent tanks.",
    solution: "Implementation of 12 Bio-Washer units utilizing bio-remediation technology to break down oils in-situ.",
    results: [
      "85% reduction in annual hazardous waste",
      "90% decrease in VOC emissions",
      "Payback period achieved in 14 months"
    ],
    image: "https://www.eieprocess.se/media/jdnlnbhi/eie-process_detaljtvattar_bio-circle.jpg?width=1140&height=640&format=webp&quality=80&v=1db72f771808be0"
  },
  {
    title: "Aerospace-Grade Precision Cleaning with Zero Rejects",
    client: "Precision Aerospace Machining Ltd.",
    category: "Aerospace",
    product: "GT Parts Washer",
    problem: "Stringent NADCAP cleanliness requirements meant even microscopic residue led to rejected high-value engine components.",
    solution: "Transition to GT Parts Washer with custom spray pressure profiles and specialized aqueous chemistry.",
    results: [
      "Reduced reject rate from 4.2% to 0%",
      "Faster cleaning cycle times (by 30%)",
      "Full compliance with aerospace standards"
    ],
    image: "https://images.kkeu.de/is/image/BEG/Environment/Hazardous_goods_handling/Parts_cleaners_cleaning_tables/GT_Maxi_parts_washer_pdplarge-mrd--688866_AAS_00_00_00_19525793.jpg"
  },
  {
    title: "Automating Fluid Health in Heavy Metal Forging",
    client: "Global Forging Group",
    category: "Heavy Industry",
    product: "Pro AutoPurge System",
    problem: "Frequent manual cleaning of large tanks caused 48 hours of production downtime every month.",
    solution: "Installation of the Pro AutoPurge System to automate the removal of sludge and maintain chemistry balance.",
    results: [
      "Eliminated 100% of manual tank clean-outs",
      "Increased production uptime by 48 hours/month",
      "Extended chemistry life by 4x"
    ],
    image: "https://www.dentsplysirona.com/en-hr/discover/discover-by-brand/intego/_jcr_content/root/container/slider_1227234030/parsys_1/quicknavigationtile_/image.coreimg.70.1100.png/1763479159560/tre-image-teaser-axano-pure-full.png"
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <ScrollReveal />

      {/* ─── PAGE HERO ─── */}
      <section className="relative pt-6 pb-5 lg:pt-10 lg:pb-8 bg-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight reveal">
              Industrial <span className="text-green-mid">Success Stories</span>
            </h1>
            <p className="text-base text-white/90 leading-relaxed reveal">
              Explore how our technical expertise and sustainable technologies deliver measurable results for global industrial leaders.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CASE STUDIES GRID ─── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <article
                key={index}
                className="group reveal bg-white border border-brand-border rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-green text-[10px] font-bold uppercase tracking-wider rounded-lg border border-green/20">
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-brand-muted text-[10px] font-bold uppercase tracking-widest mb-4">
                    <i className="fas fa-industry text-green"></i>
                    {study.product}
                  </div>
                  <h2 className="text-xl font-bold text-brand-black mb-4 leading-tight group-hover:text-green transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-sm text-brand-body leading-relaxed flex-1">
                    {study.problem}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-green uppercase tracking-widest hover:gap-3 transition-all mt-6"
                  >
                    Discuss Similar Project <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
