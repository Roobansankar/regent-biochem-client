import Link from "next/link";

export default function Philosophy() {
  return (
    <section className="border-t border-b border-brand-border bg-white">
      {/* Mobile Header (hidden on lg) */}
      <div className="lg:hidden px-6 pt-8 pb-2">
        <p className="text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-green mb-3">Our Philosophy</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-black leading-tight uppercase">
          GREEN WAY
          <br />
          TO GROWTH
        </h2>
      </div>

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="order-1 lg:order-2 min-h-64 lg:min-h-0 overflow-hidden flex items-center justify-center p-6 sm:p-10">
          <img
            src="https://www.zeta.com/wp-content/uploads/2025/05/Loba-630_1800x755px-1800x690.jpg"
            alt="Industrial Technology"
            className="w-full h-full object-cover rounded-2xl shadow-lg max-h-80 lg:max-h-full"
          />
        </div>
        {/* Text Content */}
        <div className="order-2 lg:order-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-8 lg:py-12">
          {/* Laptop Header (hidden on mobile/tab) */}
          <div className="hidden lg:block">
            <p className="text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-green mb-3">Our Philosophy</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-black leading-tight mb-4 uppercase">
              GREEN WAY
              <br />
              TO GROWTH
            </h2>
          </div>
          <p className="text-base text-brand-body leading-relaxed max-w-md mb-6">
            At Bio-Chem, sustainability isn't just a goal — it's the architecture of our engineering. We believe
            industrial power and ecological responsibility can co-exist through the science of bio-remediation and
            solvent-free chemistry.
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-sm font-bold text-green hover:text-green-dark transition-colors"
          >
            Learn more <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
