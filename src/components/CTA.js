export default function CTA() {
  return (
    <section className="bg-green py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-white/70 mb-4">
            <span className="w-8 h-px bg-white/30"></span> GREEN WAY TO GROWTH
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-3">
            Ready to Modernize
            <br />
            Your Process?
          </h2>
          <p className="text-white/85 text-base leading-relaxed">
            Consult with our application engineers to find the ideal cleaning or surface protection configuration for
            your facility.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 sm:max-w-xs bg-white/20 border border-white/35 text-white placeholder-white/60 px-4 py-3 rounded text-sm outline-none focus:border-white focus:bg-white/25 transition-colors font-sans"
          />
          <button className="bg-white text-green font-bold text-sm px-6 py-3 rounded hover:-translate-y-0.5 transition-transform whitespace-nowrap">
            Request Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
