"use client";

import { useState } from "react";

export default function ProductFAQ({ faq }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faq || faq.length === 0) return null;

  return (
    <div>
      <div className="mb-5">
        <span className="inline-block px-3 py-1 rounded-full bg-green-light border border-green/20 text-xs sm:text-sm font-bold text-green">FAQ</span>
      </div>
      <div className="space-y-3">
        {faq.map((item, i) => (
          <div key={i} className="border border-brand-border rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex items-start sm:items-center justify-between w-full p-4 sm:p-5 bg-white hover:bg-brand-bg2 transition-colors text-left"
            >
              <span className="text-sm font-bold text-brand-black pr-4 flex-1 min-w-0">
                {item.q}
              </span>
              <span className="flex items-center justify-center w-9 h-9 text-green text-[11px] sm:text-xs shrink-0 transition-all duration-300">
                <i className={`fas fa-chevron-down transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}></i>
              </span>
            </button>
            {openIndex === i && (
              <div className="px-4 sm:px-5 pb-4 sm:pb-5 border-t border-brand-border pt-3">
                <p className="text-sm text-brand-body leading-relaxed">{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
