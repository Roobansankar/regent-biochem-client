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
              <p className="text-lg sm:text-xl text-brand-body leading-relaxed mb-8 border-l-4 border-green-light pl-6 text-justify">
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

      {/* Key Features Section */}
      {service.keyFeatures && (
        <section className="py-16 bg-brand-bg2/50 border-y border-brand-border">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.keyFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-[2rem] border border-brand-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-2xl bg-brand-bg2 flex items-center justify-center text-green mb-6 group-hover:bg-green group-hover:text-white transition-colors duration-500">
                    <i className={`fas ${feature.icon} text-2xl`}></i>
                  </div>
                  <h4 className="text-lg font-bold text-brand-black mb-3">{feature.title}</h4>
                  <p className="text-sm text-brand-body leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content Sections */}
      <section id="details" className="py-24 bg-brand-bg2">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1: Challenges & Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Problems Addressed */}
            {service.problems && (
              <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] border border-brand-border shadow-sm flex flex-col h-full">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600">
                    <i className="fas fa-exclamation-triangle text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-black uppercase tracking-tight">Common Problems</h3>
                    <p className="text-sm text-brand-body">Critical issues we resolve</p>
                  </div>
                </div>
                
                {typeof service.problems[0] === 'string' ? (
                  <div className="flex flex-wrap gap-3">
                    {service.problems.map((problem, index) => (
                      <span key={index} className="px-5 py-2.5 bg-red-50 text-red-700 rounded-xl text-xs font-bold border border-red-100 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>
                        {problem}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {service.problems.map((problem, index) => (
                      <div key={index} className="group">
                        <h4 className="font-bold text-brand-black mb-1 flex items-center gap-2 text-base">
                          <span className="w-1.5 h-1.5 bg-red-400 rounded-full group-hover:scale-150 transition-transform"></span>
                          {problem.title}
                        </h4>
                        <p className="text-sm text-brand-body leading-relaxed pl-4 border-l border-brand-border ml-[3px]">{problem.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Contaminants */}
            {service.contaminants && (
              <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] border border-brand-border shadow-sm flex flex-col h-full">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green">
                    <i className="fas fa-vial text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-black uppercase tracking-tight">Contaminants Removed</h3>
                    <p className="text-sm text-brand-body">Substances we eliminate</p>
                  </div>
                </div>

                {typeof service.contaminants[0] === 'string' ? (
                  <div className="flex flex-wrap gap-3">
                    {service.contaminants.map((item, index) => (
                      <span key={index} className="px-5 py-2.5 bg-green-50 text-green rounded-xl text-xs font-bold border border-green-100 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                        {item}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {service.contaminants.map((item, index) => (
                      <div key={index} className="group">
                        <h4 className="font-bold text-brand-black mb-1 flex items-center gap-2 text-base">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full group-hover:scale-150 transition-transform"></span>
                          {item.title}
                        </h4>
                        <p className="text-sm text-brand-body leading-relaxed pl-4 border-l border-brand-border ml-[3px]">{item.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Section 2: Service Approach (Full Width Cards) */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h3 className="text-3xl font-bold text-brand-black mb-4 uppercase tracking-tight">Our Service Approach</h3>
              <p className="text-brand-body">A systematic, data-driven methodology to ensure project success and safety.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.process.map((step, index) => {
                // Map icons based on common titles (using standard Font Awesome Free icons)
                const getIcon = (title) => {
                  const t = title.toLowerCase();
                  if (t.includes('consultation')) return 'fa-comments';
                  if (t.includes('assessment') || t.includes('inspection')) return 'fa-microscope';
                  if (t.includes('selection') || t.includes('solution')) return 'fa-flask';
                  if (t.includes('execution') || t.includes('cleaning')) return 'fa-cogs';
                  if (t.includes('review') || t.includes('verification')) return 'fa-chart-bar';
                  if (t.includes('follow-up') || t.includes('support')) return 'fa-headset';
                  return 'fa-check-circle';
                };

                return (
                  <div key={index} className="bg-white p-8 rounded-[2rem] border border-brand-border hover:border-green/30 hover:shadow-xl transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-brand-bg2 text-green flex items-center justify-center mb-6 group-hover:bg-green group-hover:text-white transition-all duration-500">
                      <i className={`fas ${getIcon(step.title)} text-xl`}></i>
                    </div>
                    <h4 className="font-bold text-brand-black mb-3 text-lg tracking-tight">{step.title}</h4>
                    <p className="text-sm text-brand-body leading-relaxed">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 3: Industries & Requirements (Split) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Industries Served (Span 2) */}
            <div className="lg:col-span-2 bg-white p-8 sm:p-12 rounded-[2.5rem] border border-brand-border shadow-sm">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-brand-bg2 rounded-2xl flex items-center justify-center text-brand-black">
                  <i className="fas fa-industry text-xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-brand-black uppercase tracking-tight">Industries Served</h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {service.industries.map((industry, index) => (
                  <div key={index} className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-brand-border hover:bg-brand-bg2/50 transition-all text-center group">
                    <div className="w-10 h-10 rounded-full bg-green/10 flex items-center justify-center text-green group-hover:bg-green group-hover:text-white transition-all">
                      <i className="fas fa-check text-xs"></i>
                    </div>
                    <span className="text-xs font-bold text-brand-black uppercase tracking-wider">{industry}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Information Required */}
            <div className="bg-brand-black p-8 sm:p-12 rounded-[2.5rem] text-white flex flex-col">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-green">
                  <i className="fas fa-clipboard-list text-xl"></i>
                </div>
                <h3 className="text-xl font-bold uppercase tracking-tight">Project Requirements</h3>
              </div>
              
              <p className="text-sm text-white/50 mb-8">To provide an accurate assessment, please prepare the following details:</p>
              
              <ul className="space-y-4 flex-grow">
                {service.infoNeeded.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-white/80">
                    <i className="fas fa-chevron-right text-green mt-1 text-[10px]"></i>
                    {item}
                  </li>
                ))}
              </ul>

              <Link 
                href="/contact"
                className="mt-10 w-full py-4 bg-green text-white font-bold rounded-xl text-center hover:bg-green-dark transition-all"
              >
                Send Requirements
              </Link>
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
