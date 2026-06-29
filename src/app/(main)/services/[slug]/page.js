import { services } from "@/data/services";
import CTA from "@/components/CTA";
import { notFound } from "next/navigation";
import CTA2 from "@/components/CTA2";
import ImageSlider from "@/components/ImageSlider";
import pipe1 from "@/assets/service/Pipeline/pipeline1.png";
import pipe2 from "@/assets/service/Pipeline/pipeline2.png";
import pipe3 from "@/assets/service/Pipeline/pipeline3.png";
import pipe4 from "@/assets/service/Pipeline/pipeline4.png";
import pipe5 from "@/assets/service/Pipeline/pipeline5.png";

const pipelineImages = [pipe1, pipe2, pipe3, pipe4, pipe5];

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
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-black">Fre Flo</h2>
              </div>
              <div className="shrink-0">
                <img
                  src="/freeflo.png"
                  alt="Fre Flo"
                  className="h-12 sm:h-20 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-sm sm:text-base text-brand-body leading-relaxed w-full">
FreFlo is our comprehensive industrial cleaning service that helps industries unlock the full potential of their equipment and processes. Combining advanced cleaning chemistry with expert application, FreFlo service eliminates performance-robbing contaminants and restores critical systems to optimal operating conditions. Whether supporting routine preventive maintenance or resolving complex fouling challenges, FreFlo service improves equipment reliability, enhances process throughput, reduces energy consumption, and minimizes costly downtime. With a focus on operational efficiency, asset longevity, and sustainability, FreFlo service enables manufacturers to maintain peak performance while reducing the total cost of maintenance.
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
                  src={service.heroImage?.src ?? service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-3 lg:col-start-3 max-w-3xl">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-black mb-4 leading-[1.1]">
                {service.title}
              </h1>
              <p className="text-sm sm:text-base text-brand-body leading-relaxed max-w-3xl">
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
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-black mb-4">
   Critical Problems We Resolve
      </h2>

      <p className="text-sm sm:text-base text-brand-text">
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
            <h3 className="text-lg sm:text-xl font-bold text-brand-black mb-4">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-brand-text leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    )}
  </div>
</section>

      {/* Pipeline Image Slider */}
      {slug === "pipeline" && (
        <section className="py-6 sm:py-8 bg-white border-b border-brand-border">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <ImageSlider images={pipelineImages} />
          </div>
        </section>
      )}

      {/* Contaminants Removed Section */}
     {service.contaminantsRemoved && (
  <section className="py-6 sm:py-8 bg-white border-b border-brand-border">
    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-black mb-3">
          Contaminants Removed
        </h2>

        <p className="text-sm sm:text-base text-brand-text">
          Comprehensive cleaning across all industrial residue types.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {service.contaminantsRemoved.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-white border border-brand-border rounded-2xl px-5 py-4 hover:border-green-mid hover:bg-green-light/20 transition-all duration-300"
          >
            <div className="flex-shrink-0 text-green mt-1">
              <i className="fas fa-circle-check text-base"></i>
            </div>

            <span className="font-semibold text-sm sm:text-base text-brand-black">
              {item}
            </span>
          </div>
        ))}
      </div>

    </div>
  </section>
)}

      {service.industries?.length > 0 && (
        <section className="py-6 sm:py-8 bg-white border-b border-brand-border">
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-black mb-3 tracking-tight">Industries We Serve</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {service.industries.map((item, index) => (
                <div key={index} className="px-6 py-3 rounded-2xl bg-green-light border border-green-mid/50 transition-all duration-300 group shadow-sm">
                  <span className="text-xs sm:text-sm font-bold text-green">{item}</span>
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
                { num: "01", title: "Discovery &<br/>Diagnosis", icon: "fa-search", desc: "Understand system conditions, operational challenges, and performance requirements" },
                { num: "02", title: "Solution &<br/>Proposal", icon: "fa-file-alt", desc: "Develop tailored solutions aligned with operational requirements" },
                { num: "03", title: "Execution <br/>Preparation", icon: "fa-clipboard-list", desc: "Prepare resources, safety measures, and detailed execution plans" },
                { num: "04", title: "Service <br/>Execution", icon: "fa-cogs", desc: "Execute approved solutions safely, efficiently, and with precision" },
                { num: "05", title: "Performance<br/> Validation", icon: "fa-check-circle", desc: "Validate outcomes against defined operational performance objectives" },
                { num: "06", title: "After <br/>Support", icon: "fa-headset", desc: "Provide ongoing guidance for sustained system performance" }
              ].map((step, i, arr) => (
                <div key={i} className="relative group">
                  {i < arr.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-green group-hover:bg-green-dark transition-colors -z-0"></div>
                  )}
                  <div className="bg-white border border-brand-border rounded-lg p-4 xl:p-5 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative z-10 h-full flex flex-col">
                    <div className="w-9 h-9 xl:w-10 xl:h-10 bg-green rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md shadow-green/20 shrink-0">
                      <i className={`fas ${step.icon} text-white text-xs xl:text-sm`}></i>
                    </div>
                    <div className="text-[13px] font-black text-green/40 mb-1 leading-none">{step.num}</div>
                    {/* <h3 className="text-[13px] xl:text-[14px] font-bold text-brand-black leading-snug tracking-tight mb-2 min-h-[2.5rem] flex items-center justify-center" style={{ textWrap: "balance" }} dangerouslySetInnerHTML={{ __html: step.title }}></h3> */}
                    {/* <p className="text-[12px] xl:text-[14px] text-brand-body leading-relaxed flex-1">{step.desc}</p> */}
                     <h3
  className="text-sm lg:text-[13px] xl:text-[14px] font-bold text-brand-black leading-snug tracking-tight mb-3 h-[56px] flex items-center justify-center"
  dangerouslySetInnerHTML={{ __html: step.title }}
></h3>

<p className="text-sm lg:text-[12px] xl:text-[14px] text-brand-body leading-relaxed flex-1">
  {step.desc}
</p>
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
