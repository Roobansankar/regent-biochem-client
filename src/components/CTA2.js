"use client";

import { useState } from "react";

const faqSets = {
  pipeline: [
    {
      title: "Process & System Overview",
      icon: "fa-cogs",
      items: ["Pipeline application", "Process media handled", "Operational environment"]
    },
    {
      title: "Network Specifications",
      icon: "fa-ruler",
      items: ["Pipe diameter", "Total pipeline length", "Material composition"]
    },
    {
      title: "Deposit Characteristics",
      icon: "fa-chart-bar",
      items: ["Type of buildup", "Severity of blockage", "Affected sections"]
    },
    {
      title: "Previous Treatment History",
      icon: "fa-history",
      items: ["Cleaning methods used", "Chemicals previously applied", "Frequency of maintenance"]
    }
  ],
  "cooling-tower": [
    {
      title: "Cooling System Profile",
      icon: "fa-cogs",
      items: ["Cooling tower type", "System capacity", "Operating conditions"]
    },
    {
      title: "Water Quality Parameters",
      icon: "fa-tint",
      items: ["Water source", "Scaling tendency", "Biological activity"]
    },
    {
      title: "Performance Challenges",
      icon: "fa-exclamation-triangle",
      items: ["Heat transfer inefficiencies", "Reduced circulation performance", "Operational abnormalities"]
    },
    {
      title: "Existing Treatment Program",
      icon: "fa-history",
      items: ["Water treatment methods", "Maintenance practices", "Persistent issues"]
    }
  ],
  "mould-injection": [
    {
      title: "Mould Configuration",
      icon: "fa-cogs",
      items: ["Mould type", "Production application", "Critical surfaces"]
    },
    {
      title: "Contamination Assessment",
      icon: "fa-flask",
      items: ["Residue type", "Carbon deposits", "Release agent accumulation"]
    },
    {
      title: "Surface Protection Requirements",
      icon: "fa-shield-alt",
      items: ["Coatings present", "Sensitive areas", "Finish requirements"]
    },
    {
      title: "Production Considerations",
      icon: "fa-clock",
      items: ["Acceptable downtime window", "Production quality concerns", "Critical delivery schedules"]
    }
  ],
  "heat-exchanger": [
    {
      title: "Equipment Identification",
      icon: "fa-cogs",
      items: ["Heat exchanger type", "Process application", "Operating conditions"]
    },
    {
      title: "Thermal Performance Review",
      icon: "fa-temperature-high",
      items: ["Efficiency loss", "Pressure drop", "Temperature variations"]
    },
    {
      title: "Fouling Evaluation",
      icon: "fa-flask",
      items: ["Deposit composition", "Severity of scaling", "Areas affected"]
    },
    {
      title: "Maintenance Background",
      icon: "fa-history",
      items: ["Previous cleaning activities", "Inspection findings", "Maintenance frequency"]
    }
  ],
  "impact-assessment": [
    {
      title: "Operational Objectives",
      icon: "fa-bullseye",
      items: ["Desired outcomes", "Performance expectations", "Improvement priorities"]
    },
    {
      title: "Current Operational Challenges",
      icon: "fa-exclamation-triangle",
      items: ["Productivity concerns", "Reliability issues", "Resource inefficiencies"]
    },
    {
      title: "Asset & Process Review",
      icon: "fa-industry",
      items: ["Key equipment involved", "Process operating conditions", "Operational dependencies"]
    },
    {
      title: "Historical Performance Insights",
      icon: "fa-chart-line",
      items: ["Previous optimization efforts", "Performance trends", "Existing initiatives"]
    }
  ]
};

export default function CTA2({ variant = "pipeline" }) {
  const [openIndex, setOpenIndex] = useState(null);
  const data = faqSets[variant] || faqSets.pipeline;

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative bg-gradient-to-br from-white via-white to-green-50/30 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-y border-brand-border overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-50/50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start relative z-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-black mb-3 tracking-tight">What we need from you</h2>
          <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-6">
            To provide an accurate assessment and quote, please have the following
            technical details ready for our engineers:
          </p>
          <div className="space-y-3">
            {data.map((faq, i) => (
              <div key={i} className="bg-white border border-brand-border rounded-xl overflow-hidden">
                <button
                  onClick={() => toggle(i)}
                  className="flex items-center justify-between w-full px-5 py-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green flex items-center justify-center text-white">
                      <i className={`fas ${faq.icon} text-xs`}></i>
                    </div>
                    <span className="text-sm font-bold text-brand-black">{faq.title}</span>
                  </div>
                  <i className={`fas fa-chevron-down text-xs text-green transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}></i>
                </button>
                {openIndex === i && (
                  <div className="px-5 pb-4 pt-0 border-t border-brand-border">
                    <ul className="space-y-2 mt-3">
                      {faq.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-brand-body">
                          <i className="fas fa-circle text-[6px] text-green mt-1.5"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:ml-auto lg:max-w-md w-full lg:sticky lg:top-24">
          <div className="bg-[#f7f7f5] border border-brand-border rounded-2xl p-8 sm:p-10">
            <div className="w-12 h-12 rounded-xl bg-green-light flex items-center justify-center mb-5">
              <i className="fas fa-rocket text-green text-lg"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-brand-black mb-3 tracking-tight">Ready to Optimize Your Flow?</h3>
            <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-6">
              Our specialists are ready to discuss your specific infrastructure
               needs and provide a customized cleaning solution.
            </p>
            <a
              href="#"
              className="flex items-center justify-center gap-2 w-full bg-green text-white font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-green-dark transition-all hover:-translate-y-0.5 shadow-lg shadow-green/20"
            >
              Request Support
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <p className="text-xs text-brand-muted text-center mt-4">
              Response guaranteed within 24 business hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
