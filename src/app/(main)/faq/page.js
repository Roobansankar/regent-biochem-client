"use client";

import { useState } from "react";
import CTA from "@/components/CTA";
import Link from "next/link";

const faqs = [
  {
    category: "General Information",
    items: [
      {
        question: "What makes Regent Biochem systems different from traditional solvent washers?",
        answer: "Our systems, like the Bio-Washer and GT Parts Washer, utilize bio-remediation and aqueous-based cleaning technologies. Unlike traditional solvent washers that use harsh chemicals, our solutions are non-flammable, pH-neutral, and environmentally friendly, while delivering superior degreasing performance."
      },
      {
        question: "How does the 'Bio-Remediation' process work?",
        answer: "Bio-remediation uses naturally occurring microbes (microorganisms) to break down oils and greases into water and carbon dioxide. This process keeps the cleaning fluid clean and effective for longer periods, significantly reducing waste disposal costs."
      }
    ]
  },
  {
    category: "Products & Systems",
    items: [
      {
        question: "What is the primary application for the GT Parts Washer?",
        answer: "The GT Parts Washer is a bench-top aqueous unit designed for precision cleaning of machined components. It features adjustable spray pressure and temperature control, making it ideal for delicate parts that require thorough degreasing without the risk of damage from harsh solvents."
      },
      {
        question: "How does the AutoPurge System improve efficiency?",
        answer: "The AutoPurge System is an automated maintenance module that monitors and manages fluid health in our cleaning systems. It ensures optimal chemistry balance and removes contaminants automatically, minimizing downtime and manual intervention."
      },
      {
        question: "Is the HTW II Bio suitable for heavy-duty production lines?",
        answer: "Yes, the HTW II Bio is specifically engineered for continuous duty in high-volume production environments. It features a rotating basket, single-stage precision spray, and an oxygen membrane compressor to handle heavy grease and oil loads efficiently."
      }
    ]
  },
  {
    category: "Maintenance & Support",
    items: [
      {
        question: "How often do I need to replace the cleaning fluid?",
        answer: "Thanks to our bio-remediation technology, the cleaning fluid remains effective much longer than traditional solvents. Typically, you only need to top up the fluid and occasionally replace the filter pads. The AutoPurge System further extends the life of the fluid by maintaining optimal conditions."
      },
      {
        question: "Does Regent Biochem provide on-site service and training?",
        answer: "Absolutely. We offer comprehensive support, including site assessments, professional installation, operator training, and scheduled maintenance services to ensure your cleaning systems operate at peak performance."
      }
    ]
  },
  {
    category: "Safety & Sustainability",
    items: [
      {
        question: "Are your cleaning chemicals safe for operators?",
        answer: "Yes, our Bio-Chem range of chemicals is designed with operator safety as a priority. They are non-toxic, non-flammable, and free from VOCs (Volatile Organic Compounds), reducing the need for specialized PPE and ventilation systems."
      },
      {
        question: "How do your systems help in achieving sustainability goals?",
        answer: "By eliminating solvents, reducing hazardous waste, and lowering energy consumption, our systems significantly reduce your environmental footprint. They help companies comply with environmental regulations while providing a safer, 'green' workspace."
      }
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState("0-0");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-6 pb-5 lg:pt-10 lg:pb-8 bg-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Frequently Asked <span className="text-green-mid">Questions</span>
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed">
              Everything you need to know about our bio-remediation technology and parts washers.
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
                <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-6">
                  Browse our categorized help articles to find answers quickly. If you can&apos;t find what you&apos;re looking for, our technical team is ready to assist.
                </p>
                <div className="hidden lg:flex flex-col gap-3">
                  {faqs.map((cat, i) => (
                    <div key={i} className="flex items-center gap-3 text-brand-muted hover:text-green cursor-pointer transition-colors font-semibold">
                      <div className="w-1.5 h-1.5 rounded-full bg-green"></div>
                      {cat.category}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8 space-y-12">
              {faqs.map((category, catIndex) => (
                <div key={catIndex}>
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
                            <span className={`text-base font-bold transition-colors ${isOpen ? "text-green" : "text-brand-black"}`}>
                              {faq.question}
                            </span>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-green text-white rotate-180" : "bg-brand-bg2 text-brand-muted"}`}>
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
              <p className="text-sm sm:text-base text-brand-body mb-6 relative z-10">
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
