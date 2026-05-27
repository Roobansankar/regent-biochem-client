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
      <section className="relative pt-6 pb-12 lg:pt-8 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg2 via-white to-white"></div>
        </div>
        
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-green mb-4 flex items-center gap-3">
                <span className="w-8 h-px bg-green"></span> Free Flow
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

      {/* Key Features Section - Now Critical Problems */}
      <section className="py-20 bg-brand-bg2/50 border-y border-brand-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-black mb-4 uppercase tracking-tight">Critical Problems We Resolve</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Limescale Buildup",
                description: "Hard mineral deposits that restrict flow rates and increase energy consumption across the entire network.",
                icon: "fa-tint-slash"
              },
              {
                title: "Corrosion & Rust",
                description: "Oxidation that compromises structural integrity, leading to leaks, safety hazards, and product contamination.",
                icon: "fa-exclamation-triangle"
              },
              {
                title: "Flow Blockages",
                description: "Accumulated debris and biological growth that cause sudden pressure drops and system failures.",
                icon: "fa-stream"
              }
            ].map((feature, index) => (
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

      {/* Industries We Serve Section */}
      <section className="py-20 bg-brand-bg2/50 border-b border-brand-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-black mb-4 uppercase tracking-tight">Industries We Serve</h2>
            <p className="text-brand-body text-lg">Our solutions are engineered for high-performance cleaning across diverse industrial sectors.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Automotive",
              "CNC Machining",
              "Fabrication",
              "MRO",
              "Oil and Gas",
              "Food & Beverage",
              "Textile"
            ].map((industry, index) => (
              <div key={index} className="px-8 py-4 rounded-2xl bg-green-light border border-green-mid/50 hover:bg-white hover:border-green/30 transition-all duration-300 group shadow-sm">
                <span className="text-sm font-black uppercase tracking-widest text-green group-hover:text-green-dark">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section id="details" className="py-24 bg-brand-bg2">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section 1: Challenges & Requirements */}
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

            {/* Project Requirements (Moved & Enhanced) */}
            <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] border border-brand-border shadow-sm flex flex-col h-full">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green">
                  <i className="fas fa-clipboard-list text-xl"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-black uppercase tracking-tight">Project Requirements</h3>
                  <p className="text-sm text-brand-body">Information we need</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5">
                {[
                  {
                    title: "Type of System",
                    description: "Specify if it's a cooling loop, heat exchanger, or other industrial infrastructure."
                  },
                  {
                    title: "Pipe/Exchanger Size",
                    description: "Provide accurate dimensions and volume to calculate chemical and flow needs."
                  },
                  {
                    title: "Material of System",
                    description: "List all metals involved to ensure safe and compatible chemical selection."
                  },
                  {
                    title: "Type of Contamination",
                    description: "Identify deposits like limescale, rust, or bio-matter for targeted cleaning."
                  },
                  {
                    title: "Current Cleaning Method",
                    description: "Describe your existing process to help us propose a more efficient solution."
                  },
                  {
                    title: "Photos if Available",
                    description: "Share images of the system and access points for better technical assessment."
                  },
                  {
                    title: "Downtime Availability",
                    description: "Specify your preferred service window to ensure minimal production disruption."
                  },
                  {
                    title: "Cleaning Frequency",
                    description: "Indicate how often maintenance is needed for effective long-term planning."
                  },
                  {
                    title: "Site Location",
                    description: "Provide the facility address to coordinate logistics and technician travel."
                  },
                  {
                    title: "Contact Details",
                    description: "Include the project lead's name and info for seamless communication."
                  }
                ].map((item, index) => (
                  <div key={index} className="group">
                    <h4 className="font-bold text-brand-black mb-1 flex items-center gap-2 text-[15px]">
                      <span className="w-1.5 h-1.5 bg-green rounded-full group-hover:scale-150 transition-transform"></span>
                      {item.title}
                    </h4>
                    <p className="text-sm text-brand-body leading-relaxed pl-4 border-l border-brand-border ml-[3px]">{item.description}</p>
                  </div>
                ))}
              </div>

              <Link 
                href="/contact"
                className="mt-10 w-full py-4 bg-green text-white font-bold rounded-xl text-center hover:bg-green-dark transition-all shadow-lg shadow-green/20"
              >
                Send Requirements
              </Link>
            </div>
          </div>

          {/* Section 2: Service Approach (Timeline) */}
          <div className="mb-24 mt-8">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h3 className="text-3xl font-bold text-brand-black mb-4 uppercase tracking-tight">Our Service Approach</h3>
              <p className="text-brand-body">A systematic, data-driven methodology to ensure project success and safety.</p>
            </div>
            
            <div className="relative px-4 max-w-[1400px] mx-auto">
              {/* Connecting Line (Desktop) */}
              <div className="absolute top-10 left-[8%] right-[8%] h-0.5 bg-brand-border hidden lg:block z-0"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-y-16 gap-x-4 relative z-10">
                {service.process.map((step, index) => {
                  return (
                    <div key={index} className="flex flex-col items-center text-center group">
                      {/* Step Indicator */}
                      <div className="relative mb-6">
                        <div className="w-16 h-16 rounded-[1.25rem] bg-green border-4 border-white flex items-center justify-center text-white shadow-lg group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 relative z-10 text-xl font-black">
                          {index + 1}
                        </div>
                      </div>
                      
                      <div className="px-2">
                        <h4 className="font-extrabold text-brand-black mb-3 text-sm uppercase tracking-widest leading-tight h-12 flex items-center justify-center">
                          {step.title}
                        </h4>
                      
                        <p className="text-xs text-brand-body leading-relaxed max-w-[200px] mx-auto">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Deliver Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-green/5 rounded-[3rem] blur-3xl group-hover:bg-green/10 transition-all duration-500"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3-qykdqq-UvLJBnT4rPxUc6-uzwMM1lcFaA&s" 
                  alt="Industrial Technology" 
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute top-1/2 -right-8 w-24 h-24 bg-green/10 rounded-full blur-2xl hidden lg:block"></div>
            </div>

            {/* Content Side */}
            <div className="lg:pl-8">
              <div className="inline-flex items-center gap-2 text-green font-black uppercase tracking-[0.3em] text-[10px] mb-6">
                <span className="w-8 h-px bg-green"></span> Engineering Excellence
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-brand-black mb-8 uppercase tracking-tight leading-tight">
                How <span className="text-green">We Do It</span>
              </h2>
              <p className="text-lg text-brand-body leading-relaxed mb-10 text-justify">
                Our approach integrates advanced chemical engineering with precision mechanical systems. We don't just provide a cleaning service; we deploy specialized technology designed to restore your infrastructure to peak operational efficiency. By utilizing eco-friendly, bio-active agents and automated delivery systems, we ensure zero-residue results while significantly reducing environmental impact and facility downtime.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="px-10 py-4 bg-brand-black text-white font-bold rounded-2xl hover:bg-green transition-all transform hover:-translate-y-1 shadow-xl shadow-black/10 flex items-center gap-3 group"
                >
                  View Product Details
                  <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                </Link>
              </div>
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
    </main>
  );
}
