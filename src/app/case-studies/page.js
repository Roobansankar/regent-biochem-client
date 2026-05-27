"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
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

      {/* ─── PAGE HERO (Contact Style) ─── */}
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
              <span className="text-green font-bold uppercase tracking-widest">Case Studies</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-black leading-tight tracking-tight mb-6 reveal">
              Industrial <span className="text-green">Success Stories</span>
            </h1>
            
            <p className="text-base sm:text-lg text-brand-body leading-relaxed max-w-2xl mx-auto reveal">
              Explore how our technical expertise and sustainable technologies deliver measurable results for global industrial leaders.
            </p>
          </div>
        </section>
      </div>

      {/* Professional Case Studies Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[1600px] mx-auto space-y-32">
          {caseStudies.map((study, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center reveal ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-green/5 rounded-[2.5rem] group-hover:bg-green/10 transition-colors -z-10"></div>
                  <div className="aspect-[16/10] rounded-[2rem] overflow-hidden border border-brand-border shadow-float">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {/* Category Badge Floating */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-white text-brand-black text-[10px] font-black uppercase tracking-[2px] px-4 py-2 rounded-lg shadow-sm border border-brand-border">
                      {study.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div>
                  <div className="text-green font-black uppercase tracking-widest text-[11px] mb-3">{study.product}</div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black leading-tight tracking-tight mb-4">
                    {study.title}
                  </h2>
                  <div className="text-brand-muted font-bold text-sm italic">Project for: {study.client}</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-y border-brand-border">
                  <div className="space-y-3">
                    <h4 className="text-xs font-black uppercase tracking-widest text-brand-black flex items-center gap-2">
                      <span className="w-4 h-0.5 bg-brand-muted"></span> The Challenge
                    </h4>
                    <p className="text-sm text-brand-body leading-relaxed">{study.problem}</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xs font-black uppercase tracking-widest text-brand-black flex items-center gap-2">
                      <span className="w-4 h-0.5 bg-green"></span> The Solution
                    </h4>
                    <p className="text-sm text-brand-body leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-brand-black">Key Results</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {study.results.map((result, rIndex) => (
                      <li key={rIndex} className="flex items-center gap-3 text-sm font-bold text-brand-black">
                        <div className="w-6 h-6 bg-green-light rounded-lg flex items-center justify-center text-green text-[10px]">
                          <i className="fas fa-check"></i>
                        </div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest text-brand-black group"
                  >
                    Discuss a similar project
                    <div className="w-10 h-10 bg-brand-bg2 rounded-full flex items-center justify-center group-hover:bg-green group-hover:text-white transition-all">
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
