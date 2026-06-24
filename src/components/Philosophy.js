import Link from "next/link";
// import homeabout from "@assets/homeabout.png";
import homeabout from "@/assets/homeabout.png";
// import heroslide3 from "@/assets/heroslide3.webp";

export default function Philosophy() {
  return (
    <section className="relative  border-b border-brand-border bg-[#f7f7f5] py-8 lg:py-0">
      {/* Continuity Gradient Flare */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-60 z-10 pointer-events-none"></div>
      
      {/* Mobile Header (hidden on lg) */}
      <div className="lg:hidden px-6 pt-8 pb-2">
        <p className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-green mb-4">About Regent Biochem</p>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-black leading-tight uppercase">
          <span className="text-green">GREEN</span> WAY
          <br />
          <span className="text-green">TO GROWTH</span>
        </h2>
      </div>

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-3">
        {/* Image */}
        <div className="order-1 lg:order-1 lg:col-span-1 min-h-48 lg:min-h-0 overflow-hidden flex items-center justify-center p-4 sm:p-6">
          <img
            src={homeabout.src}
            alt="Industrial Technology"
            className="w-full h-full object-cover rounded-2xl shadow-lg max-h-72 lg:max-h-96"
          />
        </div>
        {/* Text Content */}
        <div className="order-2 lg:order-2 lg:col-span-2 flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-6 lg:py-10">
          {/* Laptop Header (hidden on mobile/tab) */}
          <div className="hidden lg:block">
            <p className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-green mb-4 mt-8">About Regent Biochem</p>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-brand-black leading-tight mb-4 uppercase">
              <span className="text-green">GREEN</span> WAY TO
            <span className="text-green"> GROWTH</span> 
            </h2>
          </div>
          <p className="text-base text-brand-body leading-relaxed mb-6 text-justify">
            At Regent BioChem, we deliver industrial cleaning systems, specialty chemicals, and surface technology solutions for manufacturing industries across India through our <b>CleanTech, SafeWeld, and FreeFlow solutions. </b>
            In strategic partnership with Bio-Circle Surface Technology GmbH, Germany, we combine proven German engineering with application-focused expertise to provide performance-driven solutions that enhance efficiency, reliability, and operational productivity.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-bold text-green hover:text-green-dark transition-colors"
          >
            About Regent Biochem <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
