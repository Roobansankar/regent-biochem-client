export default function Stats() {
  return (
    <section className="bg-white border-b border-brand-border">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-green mb-3">Established 1984</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-brand-black mb-4">
            40+ Years of
            <br />
            German <em className="text-green not-italic">Engineering</em>
            <br />
            Excellence
          </h2>
          <p className="text-base text-brand-body leading-relaxed max-w-md">
            Precision engineered components and chemical formulations developed in our R&D labs since 1984.
          </p>
        </div>
        {/* Numbers */}
        <div className="bg-brand-bg2 border border-brand-border rounded-2xl p-8 sm:p-10 grid grid-cols-3 gap-4 sm:gap-8 text-center">
          <div>
            <span className="block text-4xl sm:text-5xl font-bold text-green tracking-tight leading-none">500+</span>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-brand-muted mt-2">
              Global Partners
            </span>
          </div>
          <div>
            <span className="block text-4xl sm:text-5xl font-bold text-green tracking-tight leading-none">12K</span>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-brand-muted mt-2">
              Installations
            </span>
          </div>
          <div>
            <span className="block text-4xl sm:text-5xl font-bold text-green tracking-tight leading-none">3</span>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-brand-muted mt-2">
              ISO Certifications
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
