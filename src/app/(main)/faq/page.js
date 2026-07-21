"use client";

import { useState } from "react";
import CTA from "@/components/CTA";
import Link from "next/link";
import { faqs } from "@/data/faq";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState("0-0");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-3 sm:pt-4 pb-5 lg:pt-10 lg:pb-8 bg-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Frequently Asked <span className="text-green-mid">Questions</span>
            </h1>
            <p className="text-sm text-white/90 leading-relaxed">
            Find quick answers to common questions about our chemical solutions, pipeline cleaning, and ordering.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar with Categories (optional layout shift) */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-black mb-4">Knowledge Base</h2>
                <div className="w-16 h-1 bg-green rounded-full mb-6"></div>
                <p className="text-sm text-brand-body leading-relaxed mb-6">
                  Browse our categorized help articles to find answers quickly. If you can&apos;t find what you&apos;re looking for, our technical team is ready to assist.
                </p>
                <div className="hidden lg:flex flex-col gap-3">
                  {faqs.map((cat, i) => (
                    <a
                      key={i}
                      href={`#faq-${i}`}
                      onClick={(e) => { e.preventDefault(); document.getElementById(`faq-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                      className="flex items-center gap-3 text-sm text-brand-muted hover:text-green cursor-pointer transition-colors font-semibold"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-green"></div>
                      {cat.category}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 space-y-12">
              {faqs.map((category, catIndex) => (
                <div key={catIndex} id={`faq-${catIndex}`} className="scroll-mt-24">
                  <h3 className="text-xl font-bold text-green uppercase tracking-wider mb-6 flex items-center gap-3">
                    {category.category}
                  </h3>
                  <div className="space-y-4">
                    {category.items.map((faq, itemIndex) => {
                      const currentIndex = `${catIndex}-${itemIndex}`;
                      const isOpen = openIndex === currentIndex;
                      
                      return (
                        <div 
                          key={itemIndex} 
                          className={`border rounded-xl transition-all duration-300 ${
                            isOpen ? "border-green shadow-sm bg-green-50/20" : "border-brand-border hover:border-green/30 bg-white"
                          }`}
                        >
                          <button
                            onClick={() => toggleFAQ(currentIndex)}
                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                          >
                            <span className={`text-sm font-bold transition-colors ${isOpen ? "text-green" : "text-brand-black"}`}>
                              {faq.question}
                            </span>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? "sm:bg-green sm:text-white rotate-180" : "sm:bg-brand-bg2 sm:text-brand-muted bg-transparent text-green"}`}>
                              <i className="fas fa-chevron-down text-[10px]"></i>
                            </div>
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px]" : "max-h-0"}`}>
                            <div className="p-6 pt-0 border-t border-brand-border/10">
                              <p className="text-brand-body leading-relaxed text-sm">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Still have questions? */}
          <div className="mt-12 sm:mt-16 max-w-4xl mx-auto text-center">
            <div className="bg-green-light p-8 md:p-12 rounded-[32px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-green/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              <h2 className="text-2xl font-bold text-brand-black mb-4 relative z-10">Still have questions?</h2>
              <p className="text-sm text-brand-body mb-6 relative z-10">
                Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                <Link 
                  href="/contact" 
                  className="bg-green text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-green-dark transition-all"
                >
                  Contact Support
                </Link>
                <Link 
                  href="mailto:support@regentbiochem.com" 
                  className="bg-white text-brand-black border border-brand-border font-bold px-8 py-4 rounded-xl hover:bg-brand-bg2 transition-all"
                >
                  Email us directly
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
