"use client";

import { useState } from "react";
import CTA from "@/components/CTA";
import Link from "next/link";

const faqs = [
  {
    category: "Solution & Application ",
    items: [
      {
        question: "How do I determine the right cleaning solution for my application?",
        answer: "The right solution depends on the type of contaminant, component material, cleaning method, and production requirements. Our team evaluates your application and recommends the most suitable cleaner and cleaning system for optimal results."
      },
      {
        question: "Can your solutions remove heavy oil, grease, carbon deposits, and industrial residues?",
        answer: "Yes. Our cleaning solutions are designed to remove a wide range of industrial contaminants, including oils, greases, carbon deposits, machining residues, and other process-related contaminants commonly found in manufacturing environments."
      },
      {
        question: "Which cleaning system is suitable for my production environment?",
        answer: "The ideal system depends on factors such as component size, contamination level, cleaning frequency, and workflow requirements. We help identify the most effective solution based on your operational needs."
      },
      {
        question: "Can the same cleaning solution be used across multiple applications?",
        answer: "Some cleaning solutions are versatile and can support multiple cleaning tasks, while others are designed for specific applications. Our team can recommend the most suitable option based on your requirements."
      }
    ]
  },
  {
    category: "Performance & Operational ",
    items: [
      {
        question: "How can industrial cleaning improve equipment performance?",
        answer: "Effective cleaning removes contaminants that can impact efficiency, heat transfer, component movement, and overall equipment reliability. Regular cleaning helps maintain consistent operational performance."
      },
      {
        question: "Will the cleaning process affect the surface quality of components?",
        answer: "Our solutions are selected based on the material and cleaning requirement of the application. When properly applied, they effectively remove contaminants while maintaining component integrity."
      },
      {
        question: "Can your solutions help reduce maintenance downtime?",
        answer: "The benefits will vary by application; however, compared to conventional cleaning processes, our solutions are designed to enhance cleaning efficiency and process consistency, which may contribute to shorter maintenance cycles and improved equipment readiness."
      },
      {
        question: "How often should cleaning systems be serviced or maintained?",
        answer: "Maintenance requirements vary depending on usage, contamination levels, and operating conditions. We provide a detailed SOP that includes recommended maintenance practices, inspection schedules, and service checklists to help ensure consistent performance and long-term system reliability."
      },
      {
        question: "What factors influence cleaning effectiveness?",
        answer: "Cleaning effectiveness can depend on contaminant type, surface material, temperature, cleaning method, contact time, and the selected cleaning chemistry."
      }
    ]
  },
  {
    category: "Safety & Sustainability ",
    items: [
      {
        question: "Are your cleaning solutions environmentally responsible?",
        answer: "Many of our solutions are designed to support environmentally responsible cleaning practices while maintaining effective industrial cleaning performance."
      },
      {
        question: "Can your products help reduce solvent usage?",
        answer: "Yes. Several of our cleaning solutions are developed as alternatives to conventional solvent-based cleaning methods, helping reduce solvent dependence in industrial applications."
      },
      {
        question: "Are your solutions suitable for workplaces with strict safety requirements?",
        answer: "Our product portfolio includes solutions designed to support safe handling and efficient cleaning across a variety of industrial environments and operational requirements."
      },
      {
        question: "How do biological cleaning solutions work?",
        answer: "Biological cleaning solutions use naturally occurring microorganisms that continuously break down oils and greases during the cleaning process, helping maintain cleaning effectiveness over extended periods."
      },
      {
        question: "Are your products safe for operators and industrial environments?",
        answer: "Product suitability depends on the specific application and operating conditions. Appropriate handling procedures and recommended usage guidelines should always be followed."
      }
    ]
  },
  {
    category: "Support & Service ",
    items: [
      {
        question: "Do you provide technical support for solution selection?",
        answer: "Yes. Our technical team works closely with customers to understand their cleaning challenges and recommend the most suitable cleaning chemistry and equipment."
      },
      {
        question: "Can your team conduct on-site evaluations or trials?",
        answer: "Yes. We can assess cleaning requirements, review application conditions, and support trials to validate the effectiveness of the proposed solution."
      },
      {
        question: "Do you offer installation and commissioning support?",
        answer: "Yes. We provide installation, commissioning, and operational guidance to help customers achieve optimal performance from their cleaning systems."
      },
      {
        question: "What after-sales support is available?",
        answer: "Our team provides technical assistance, application support, maintenance guidance, and service support to help ensure long-term system performance."
      },
      {
        question: "Can you help optimize existing cleaning processes?",
        answer: "Yes. We evaluate current cleaning methods and identify opportunities to improve efficiency, cleaning quality, and overall operational performance."
      }
    ]
  },
  {
    category: "Commercial & Implementation ",
    items: [
      {
        question: "How can I request a product demonstration or trial?",
        answer: "Selecting the right cleaning solution starts with understanding your application. Our technical specialists can review your requirements and recommend a suitable demonstration, trial, or proof-of-concept approach based on your operational needs. For enquiries, contact us at info@bio-chem.in"
      },
      {
        question: "How do you recommend the right machine and cleaner combination?",
        answer: "Our recommendations are based on contamination type, component material, production requirements, cleaning frequency, and operational objectives."
      },
      {
        question: "Can your solutions be implemented across multiple facilities?",
        answer: "Yes. Our solutions can be deployed across single or multiple manufacturing locations, helping maintain consistency in cleaning processes and performance."
      },
      {
        question: "What information is required before recommending a solution?",
        answer: "Typical information includes the component material, contaminant type, cleaning objective, production volume, existing cleaning process, and application requirements."
      },
      {
        question: "Can your solutions scale as production requirements grow?",
        answer: "Yes. Our range of cleaning systems and chemical solutions can support changing operational requirements and growing production demands."
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
                <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-6">
                  Browse our categorized help articles to find answers quickly. If you can&apos;t find what you&apos;re looking for, our technical team is ready to assist.
                </p>
                <div className="hidden lg:flex flex-col gap-3">
                  {faqs.map((cat, i) => (
                    <a
                      key={i}
                      href={`#faq-${i}`}
                      onClick={(e) => { e.preventDefault(); document.getElementById(`faq-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                      className="flex items-center gap-3 text-brand-muted hover:text-green cursor-pointer transition-colors font-semibold"
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
