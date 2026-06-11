import { services } from "@/data/services";
import CTA from "@/components/CTA";
import { notFound } from "next/navigation";
import Link from "next/link";
import CTA2 from "@/components/CTA2";

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
      <section className="relative pt-10 pb-12 lg:pt-12 lg:pb-14 overflow-hidden bg-brand-bg3">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white -z-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-green-50/20 blur-[120px] -z-10"></div>
        
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-green mb-4">Services</p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-black">Free Flo</h2>
              </div>
              <div className="shrink-0">
                <img
                  src="/logo.png"
                  alt="Regent Biochem Logo"
                  className="h-12 sm:h-16 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-sm sm:text-base text-brand-body leading-relaxed max-w-none">
              The FreeFlow™ system is the sector&apos;s premier industrial pipeline cleaning solution. Engineered for maximum flow restoration, it stands alone as the ultimate combination of advanced chemical technology and eco-friendly sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Service Title Section - image left, content right */}
      <section className="py-6 sm:py-8 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-12 items-center">
            <div className="lg:col-span-2 lg:col-start-1 relative group">
              <div className="absolute -inset-4 bg-green/10 rounded-[2.5rem] blur-2xl group-hover:bg-green/20 transition-all duration-500"></div>
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-3 lg:col-start-3 max-w-3xl">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-black mb-4 leading-[1.1]">
                {service.title}
              </h1>
              <p className="text-sm sm:text-base text-brand-body leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Problems We Resolve */}
    
      <section className="py-6 sm:py-8 bg-[#F6F8F6] border-y border-brand-border">
  <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">
   Critical Problems We Resolve
      </h2>

      <p className="text-brand-text text-base sm:text-lg">
      Solving critical pipeline performance issues.
      </p>
    </div>

    {/* Cards */}
    {service.commonProblems && (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {service.commonProblems.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-brand-border rounded-xl p-6
            hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-lg bg-green-light flex items-center justify-center mb-6">
              <i
                className={`fas ${item.icon} text-green text-lg`}
              ></i>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-brand-black mb-4">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-brand-text leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    )}
  </div>
</section>

      {/* Contaminants Removed Section */}
     {service.contaminantsRemoved && (
  <section className="py-6 sm:py-8 bg-white border-b border-brand-border">
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-3">
          Contaminants Removed
        </h2>

        <p className="text-brand-text text-base sm:text-lg">
          Comprehensive cleaning across all industrial residue types.
        </p>
      </div>

      {/* Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {service.contaminantsRemoved.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-white border border-brand-border
            rounded-2xl px-5 py-4 hover:border-green-mid hover:bg-green-light/20
            transition-all duration-300"
          >
            <div className="flex-shrink-0 text-green">
              <i className="fas fa-circle-check text-base"></i>
            </div>

            <span className="font-semibold text-sm text-brand-black">
              {item}
            </span>
          </div>
        ))}
      </div>

    </div>
  </section>
)}

      {/* How We Do It Section */}
      <section className="py-6 sm:py-8 bg-white border-b border-brand-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-3">
                How <span className="text-green">We Do It</span>
              </h2>
            </div>

            <div className="bg-brand-bg2 rounded-[2rem] border border-brand-border overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-96 h-64 lg:h-auto flex-shrink-0">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3-qykdqq-UvLJBnT4rPxUc6-uzwMM1lcFaA&s" 
                    alt="How We Do It" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-10 flex-1 flex flex-col justify-center">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-light rounded-xl flex items-center justify-center text-green text-xl mx-auto mb-3">
                        <i className="fas fa-industry"></i>
                      </div>
                      <h4 className="font-bold text-brand-black text-sm mb-2">Machine</h4>
                      <p className="text-xs text-brand-body leading-relaxed">Advanced precision equipment for consistent cleaning results.</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-light rounded-xl flex items-center justify-center text-green text-xl mx-auto mb-3">
                        <i className="fas fa-flask"></i>
                      </div>
                      <h4 className="font-bold text-brand-black text-sm mb-2">Chemistry</h4>
                      <p className="text-xs text-brand-body leading-relaxed">Eco-friendly bio-active agents for effective contaminant removal.</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-light rounded-xl flex items-center justify-center text-green text-xl mx-auto mb-3">
                        <i className="fas fa-chart-line"></i>
                      </div>
                      <h4 className="font-bold text-brand-black text-sm mb-2">Output</h4>
                      <p className="text-xs text-brand-body leading-relaxed">Zero-residue results with restored operational efficiency.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-6 sm:py-8 bg-white border-b border-brand-border">
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

      {/* Recommended Cleaners */}
      {service.recommendedCleaners && (
        <section className="py-6 sm:py-8 bg-white border-b border-brand-border">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-black mb-3 tracking-tight">Recommended Cleaners</h2>
              <p className="text-brand-text text-base sm:text-lg">Optimized chemistry for maximum cleaning performance.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {service.recommendedCleaners.map((cleaner, index) => (
                <div key={index} className="px-6 py-4 rounded-2xl bg-green-light border border-green-mid/50 shadow-sm flex items-center gap-3">
                  <i className="fas fa-vial text-green text-sm"></i>
                  <span className="font-bold text-sm text-green-dark">{cleaner}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Approach */}
      <section id="details" className="py-6 sm:py-8 bg-brand-bg2/50 border-b border-brand-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="text-center mb-10 sm:mb-12">
              <p className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-green mb-4">How We Add Value</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-black">
                From Insight to <span className="text-green">Impact</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {[
                { num: "01", title: "Discovery & Diagnosis", icon: "fa-search", desc: "Understand system conditions, operational challenges, and performance requirements." },
                { num: "02", title: "Solution & Proposal", icon: "fa-file-alt", desc: "Develop tailored solutions aligned with operational requirements." },
                { num: "03", title: "Execution Preparation", icon: "fa-clipboard-list", desc: "Prepare resources, safety measures, and detailed execution plans." },
                { num: "04", title: "Service Execution", icon: "fa-cogs", desc: "Execute approved solutions safely, efficiently, and with precision." },
                { num: "05", title: "Performance Validation", icon: "fa-check-circle", desc: "Validate outcomes against defined operational performance objectives." },
                { num: "06", title: "After Support", icon: "fa-headset", desc: "Provide ongoing guidance for sustained system performance." }
              ].map((step, i, arr) => (
                <div key={i} className="relative group">
                  {i < arr.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-green/20 group-hover:bg-green/40 transition-colors -z-0"></div>
                  )}
                  <div className="bg-white border border-brand-border rounded-lg p-4 xl:p-5 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative z-10 h-full flex flex-col">
                    <div className="w-9 h-9 xl:w-10 xl:h-10 bg-green rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md shadow-green/20 shrink-0">
                      <i className={`fas ${step.icon} text-white text-xs xl:text-sm`}></i>
                    </div>
                    <div className="text-[13px] font-black text-green/40 mb-1 leading-none">{step.num}</div>
                    <h3 className="text-[13px] xl:text-[14px] font-bold text-brand-black leading-snug tracking-tight mb-2 min-h-[2.5rem] flex items-center justify-center" style={{ textWrap: "balance" }}>{step.title}</h3>
                    <p className="text-[12px] xl:text-[14px] text-brand-body leading-relaxed flex-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Before & After Section */}
      {service.beforeAfter && (
        <section className="py-6 sm:py-8 bg-brand-bg2/50">
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

      <CTA2 variant={service.slug} />
    </main>
  );
}
