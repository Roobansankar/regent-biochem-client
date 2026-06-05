const industries = [
  "Automotive", "CNC Machining", "Railways", "Manufacturing",
  "Aerospace", "Forging", "Oil & Gas", "Food & Beverage",
  "Textile Industry", "Energy & Power"
];

export default function Industries() {
  return (
    <section className="bg-bg-[#f7f7f5] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">

        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-green mb-4">Our Expertise</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-black mb-4">
            Industries We Serve
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, index) => (
            <div key={index} className="px-8 py-4 rounded-2xl bg-green-light border border-green-mid/50 hover:bg-white hover:border-green/30 transition-all duration-300 group shadow-sm">
              <span className="text-sm font-bold text-green group-hover:text-green-dark">{industry}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}