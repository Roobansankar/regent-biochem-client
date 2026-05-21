import { services } from "@/data/services";
import Navbar from "@/components/Navbar";
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
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-6 pb-12 lg:pt-8 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg2 via-white to-white"></div>
        </div>
        
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-green mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-green"></span> Professional Services
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-black mb-6 leading-[1.1]">
                {service.title}
              </h1>
              <p className="text-lg sm:text-xl text-brand-body leading-relaxed mb-8 border-l-4 border-green-light pl-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-10 py-3.5 bg-green text-white font-bold rounded-xl hover:bg-green-dark transition-all transform hover:-translate-y-1 shadow-xl shadow-green/20"
                >
                  Request Support
                </Link>
                <Link
                  href="#details"
                  className="px-10 py-3.5 border-2 border-brand-border text-brand-black font-bold rounded-xl hover:bg-brand-bg2 transition-all"
                >
                  View Details
                </Link>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-green/10 rounded-[2.5rem] blur-2xl group-hover:bg-green/20 transition-all duration-500"></div>
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-brand-border hidden sm:block animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green rounded-xl flex items-center justify-center text-white">
                    <i className={`fas ${service.icon} text-lg`}></i>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-green">Specialized Service</p>
                    <p className="text-sm font-bold text-brand-black">Industrial Grade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section id="details" className="py-16 bg-brand-bg2">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Challenges & Solutions */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Problems Addressed */}
              {service.problems && (
                <div className="bg-white p-8 sm:p-10 rounded-[2rem] border border-brand-border shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500">
                      <i className="fas fa-exclamation-triangle"></i>
                    </div>
                    <h3 className="text-xl font-bold text-brand-black">Common Problems Addressed</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.problems.map((problem, index) => (
                      <span key={index} className="px-4 py-2 bg-red-50 text-red-600 rounded-full text-xs font-bold border border-red-100">
                        {problem}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Contaminants */}
              {service.contaminants && (
                <div className="bg-white p-8 sm:p-10 rounded-[2rem] border border-brand-border shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green">
                      <i className="fas fa-vial"></i>
                    </div>
                    <h3 className="text-xl font-bold text-brand-black">Contaminants Removed</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.contaminants.map((item, index) => (
                      <span key={index} className="px-4 py-2 bg-green-50 text-green rounded-full text-xs font-bold border border-green-100">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Service Approach */}
              <div className="bg-white p-8 sm:p-10 rounded-[2rem] border border-brand-border shadow-sm">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-10 bg-brand-bg2 rounded-lg flex items-center justify-center text-brand-black">
                    <i className="fas fa-stream"></i>
                  </div>
                  <h3 className="text-xl font-bold text-brand-black">Service Approach</h3>
                </div>
                
                <div className="relative">
                  <div className="hidden sm:block absolute left-4 top-0 bottom-0 w-0.5 bg-brand-border"></div>
                  <div className="space-y-8">
                    {service.process.map((step, index) => (
                      <div key={index} className="relative flex items-start gap-6">
                        <div className="w-8 h-8 rounded-full bg-green text-white flex items-center justify-center text-xs font-bold z-10 shrink-0 shadow-lg shadow-green/20">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-bold text-brand-black mb-1">{step.title}</h4>
                          <p className="text-sm text-brand-body leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Info & Industries */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Information Required */}
              {service.infoNeeded && (
                <div className="bg-brand-black p-8 rounded-[2rem] text-white">
                  <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                    <i className="fas fa-info-circle text-green"></i> Information Needed
                  </h3>
                  <ul className="space-y-4">
                    {service.infoNeeded.map((item, index) => (
                      <li key={index} className="flex gap-3 text-sm text-white/70">
                        <i className="fas fa-check text-green mt-1"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Industries Served */}
              {service.industries && (
                <div className="bg-white p-8 rounded-[2rem] border border-brand-border">
                  <h3 className="text-lg font-bold text-brand-black mb-6">Industries We Serve</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {service.industries.map((industry, index) => (
                      <div key={index} className="flex items-center gap-2 text-xs font-bold text-brand-body bg-brand-bg2 p-3 rounded-xl border border-brand-border">
                        <i className="fas fa-check-circle text-green"></i>
                        {industry}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section (Placeholder if images exist) */}
      {service.beforeAfter && (
        <section className="py-16 bg-white">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12">
                <h2 className="text-3xl font-extrabold text-brand-black">Proven Results</h2>
                <p className="text-brand-body mt-2">Visual evidence of our cleaning effectiveness</p>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-brand-border">
                  <img src={service.beforeAfter.before} alt="Before cleaning" className="w-full h-80 object-cover" />
                  <div className="absolute top-4 left-4 bg-brand-black/70 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold">BEFORE</div>
                </div>
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-brand-border">
                  <img src={service.beforeAfter.after} alt="After cleaning" className="w-full h-80 object-cover" />
                  <div className="absolute top-4 left-4 bg-green/90 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold">AFTER</div>
                </div>
             </div>
          </div>
        </section>
      )}

      <CTA />
      <Footer />
    </main>
  );
}
