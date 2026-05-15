import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[520px] md:min-h-[580px] flex items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="hero-overlay absolute inset-0 z-10"></div>
      <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-green mb-6 animate-fade-up-1">
            <span>—</span> Green Way to Growth
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-brand-black mb-5 animate-fade-up-2">
            Advanced Industrial
            <br />
            <em className="text-green not-italic">Cleaning &amp;</em>
            <br />
            Surface Technology
          </h1>
          <p className="text-base sm:text-lg text-brand-body leading-relaxed max-w-md mb-8 animate-fade-up-3">
            Revolutionizing surface engineering with eco-conscious chemical solutions and precision-grade German
            machinery for global enterprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-up-4">
            <Link
              href="#"
              className="text-center bg-green text-white font-bold text-sm px-7 py-3.5 rounded hover:bg-green-dark transition-colors"
            >
              Explore Solutions
            </Link>
            <Link
              href="#"
              className="text-center border border-gray-300 text-brand-black font-medium text-sm px-7 py-3.5 rounded hover:border-green hover:text-green transition-colors"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
