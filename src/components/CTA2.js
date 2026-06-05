"use client";

const checklistItems = [
  "System Type & Functionality",
  "Pipeline Size & Total Length",
  "Material Composition (Carbon steel, PVC, etc.)",
  "History of Previous Treatments",
];

export default function CTA2() {
  return (
    <section className="relative bg-gradient-to-br from-white via-white to-green-50/30 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-y border-brand-border overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-50/50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        {/* Left */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-black mb-3 tracking-tight">What we need from you</h2>
          <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-6">
            To provide an accurate assessment and quote, please have the following
            technical details ready for our engineers:
          </p>
          <ul className="space-y-2.5">
            {checklistItems.map((item, i) => (
              <li key={i} className="flex items-center gap-3 bg-white border border-brand-border rounded-lg px-4 py-3 hover:border-green-mid hover:bg-green-light/30 transition-all shadow-sm">
                <span className="shrink-0">
                  <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="11" fill="#3D8A4B" />
                    <path d="M6.5 11.5L9.5 14.5L15.5 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-brand-black">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Card */}
        <div className="relative lg:ml-auto lg:max-w-md w-full">
          <div className="absolute -inset-6 bg-gradient-to-br from-green/5 via-transparent to-green/5 rounded-[3rem] blur-2xl"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-50/60 rounded-full blur-2xl"></div>
          <div className="relative bg-white border border-brand-border rounded-2xl p-8 sm:p-10 shadow-xl overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #3D8A4B, #3D8A4B 1px, transparent 1px, transparent 24px)" }}></div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-green/5 rounded-full blur-3xl"></div>
            <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-green-light flex items-center justify-center mb-5">
              <i className="fas fa-rocket text-green text-lg"></i>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-brand-black mb-3 tracking-tight">Ready to Optimize Your Flow?</h3>
            <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-6">
              Our specialists are ready to discuss your specific infrastructure
              needs and provide a customized RWR cleaning solution.
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
      </div>
    </section>
  );
}