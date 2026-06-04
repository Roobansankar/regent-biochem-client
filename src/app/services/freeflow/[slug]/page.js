import { services } from "@/data/services";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-3 pb-12 lg:pt-4 lg:pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg2 via-white to-white"></div>
        </div>
        
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 items-center">
            <div className="lg:col-span-3 max-w-3xl">
              <p className="text-xs font-semibold text-green mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-green"></span> Free Flow
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-black mb-4 leading-[1.1]">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-brand-body leading-relaxed mb-6 text-justify">
                {service.description}
              </p>
            </div>

            <div className="lg:col-span-2 relative group">
              <div className="absolute -inset-4 bg-green/10 rounded-[2.5rem] blur-2xl group-hover:bg-green/20 transition-all duration-500"></div>
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems Addressed */}
      <section className="py-12 sm:py-16 bg-brand-bg2/50 border-y border-brand-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-black mb-3 tracking-tight">Common Problems Addressed</h2>
          </div>
          {service.commonProblems && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {service.commonProblems.map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-brand-border shadow-sm hover:shadow-md hover:border-green-mid transition-all">
                <div className="w-10 h-10 rounded-xl bg-green-light flex items-center justify-center text-green flex-shrink-0">
                  <i className="fas fa-check-circle text-lg"></i>
                </div>
                <span className="text-sm sm:text-base text-brand-body">{item}</span>
              </div>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* Contaminants Removed Section */}
      {service.contaminantsRemoved && (
      <section className="py-12 sm:py-16 bg-white border-b border-brand-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-black mb-3 tracking-tight">Contaminants That Can Be Removed</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {service.contaminantsRemoved.map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-brand-border shadow-sm hover:shadow-md hover:border-green-mid transition-all">
                <div className="w-10 h-10 rounded-xl bg-green-light flex items-center justify-center text-green flex-shrink-0">
                  <i className="fas fa-check-circle text-lg"></i>
                </div>
                <span className="text-sm sm:text-base text-brand-body">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Information We Need Section */}
      {service.infoNeeded && (
      <section className="py-12 sm:py-16 bg-brand-bg2/50 border-b border-brand-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-black mb-3 tracking-tight">Information We Need From You</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {service.infoNeeded.map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-brand-border shadow-sm hover:shadow-md hover:border-green-mid transition-all">
                <div className="w-10 h-10 rounded-xl bg-green-light flex items-center justify-center text-green flex-shrink-0">
                  <i className="fas fa-check-circle text-lg"></i>
                </div>
                <span className="text-sm sm:text-base text-brand-body">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Industries We Serve Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-brand-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-black mb-3 tracking-tight">Industries We Serve</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {service.industries.map((industry, index) => (
              <div key={index} className="px-6 py-3 rounded-2xl bg-green-light border border-green-mid/50 hover:bg-white hover:border-green/30 transition-all duration-300 group shadow-sm">
                <span className="text-xs sm:text-sm font-bold text-green group-hover:text-green-dark">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Used RWR Section */}
      <section className="py-12 sm:py-16 bg-brand-bg2/50 border-b border-brand-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="aspect-video rounded-2xl sm:rounded-[2.5rem] overflow-hidden bg-white flex items-center justify-center border border-brand-border shadow-sm">
              <div className="text-center">
                <i className="fas fa-image text-4xl sm:text-5xl text-brand-border mb-3"></i>
                <p className="text-brand-muted text-xs sm:text-sm font-medium">RWR Machine Image</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-black mb-4 tracking-tight">Machine Used <span className="text-green">RWR</span></h2>
              <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-6">
                Our advanced RWR (Reverse Water Recovery) mobile flushing system is engineered for high-performance pipeline cleaning without dismantling.
              </p>
              <Link
                href="/products"
                className="inline-flex px-8 py-3 bg-green text-white font-bold rounded-xl hover:bg-green-dark transition-all transform hover:-translate-y-1 shadow-xl shadow-green/20"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Cleaners Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-brand-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-black mb-3 tracking-tight">Recommended Cleaner</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-brand-bg2/50 p-6 sm:p-10 rounded-2xl sm:rounded-[2.5rem] border border-brand-border shadow-sm">
            {[
              { name: "Power Cleaner DB", slug: "power-cleaner-db" }
            ].map((cleaner, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-full sm:w-48 aspect-video sm:aspect-square rounded-xl sm:rounded-2xl bg-white flex items-center justify-center border border-brand-border flex-shrink-0">
                  <div className="text-center">
                    <i className="fas fa-image text-4xl text-brand-border mb-2"></i>
                    <p className="text-brand-muted text-xs font-medium">{cleaner.name} Image</p>
                  </div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-black mb-3">{cleaner.name}</h3>
                  <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-5">
                    High-performance cleaning solution designed for industrial pipeline systems.
                  </p>
                  <Link
                    href={`/products/${cleaner.slug}`}
                    className="inline-flex px-6 py-2.5 bg-green text-white font-bold rounded-xl hover:bg-green-dark transition-all shadow-lg shadow-green/20"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Approach */}
      <section id="details" className="py-12 sm:py-16 bg-brand-bg2/50 border-b border-brand-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-black mb-3 tracking-tight">Our Service Approach</h2>
          </div>
          
          <div className="relative max-w-[1400px] mx-auto">
            <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-brand-border hidden lg:block z-0"></div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-6 relative z-10">
              {[
                { title: "Discovery & Diagnosis" },
                { title: "Solution & Proposal" },
                { title: "Execution Preparation" },
                { title: "Service Execution" },
                { title: "Performance Validation" },
                { title: "After Support" }
              ].map((step, index) => {
                return (
                  <div key={index} className="flex flex-col items-center text-center group">
                    <div className="relative mb-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-[1.25rem] bg-green border-4 border-white flex items-center justify-center text-white shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 relative z-10 text-base sm:text-xl font-bold">
                        {index + 1}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-brand-black text-[11px] sm:text-xs leading-tight">
                        {step.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How We Deliver Section */}
      <section className="py-12 sm:py-16 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-green/5 rounded-[3rem] blur-3xl group-hover:bg-green/10 transition-all duration-500"></div>
              <div className="relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3-qykdqq-UvLJBnT4rPxUc6-uzwMM1lcFaA&s" 
                  alt="Industrial Technology" 
                  className="w-full h-64 sm:h-80 lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-1/2 -right-8 w-24 h-24 bg-green/10 rounded-full blur-2xl hidden lg:block"></div>
            </div>

            <div className="lg:pl-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-black mb-5 tracking-tight leading-tight">
                How <span className="text-green">We Do It</span>
              </h2>
              <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-8 text-justify">
                Our approach integrates advanced chemical engineering with precision mechanical systems. We don't just provide a cleaning service; we deploy specialized technology designed to restore your infrastructure to peak operational efficiency. By utilizing eco-friendly, bio-active agents and automated delivery systems, we ensure zero-residue results while significantly reducing environmental impact and facility downtime.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="px-8 py-3 bg-brand-black text-white font-bold rounded-xl hover:bg-green transition-all transform hover:-translate-y-1 shadow-xl shadow-black/10 flex items-center gap-3 group"
                >
                  View Product Details
                  <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      {service.beforeAfter && (
        <section className="py-12 sm:py-16 bg-brand-bg2/50">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-brand-black">Proven Results</h2>
                <p className="text-sm sm:text-base text-brand-body mt-2">Visual evidence of our cleaning effectiveness</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-brand-border">
                  <img src={service.beforeAfter.before} alt="Before cleaning" className="w-full h-64 object-cover" />
                  <div className="absolute top-4 left-4 bg-brand-black/70 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold">BEFORE</div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-brand-border">
                  <img src={service.beforeAfter.after} alt="After cleaning" className="w-full h-64 object-cover" />
                  <div className="absolute top-4 left-4 bg-green/90 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold">AFTER</div>
                </div>
             </div>
          </div>
        </section>
      )}

      <CTA />
    </main>
  );
}