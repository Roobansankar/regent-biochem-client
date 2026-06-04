import { industries } from "@/data/industries";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Elegant Light Hero Section */}
      <section className="relative pt-6 pb-6 lg:pt-10 lg:pb-10 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 via-white to-white -z-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-green-50/30 blur-3xl -z-10"></div>
        
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6"> 
              <div className="flex items-center gap-3 mb-8">
                 <p className="text-sm font-black tracking-[0.4em] uppercase text-green">
                   Manufacturing Industries / {industry.slug}
                 </p>
              </div>
              
               <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-brand-black mb-4 leading-[1.1]">
                {industry.title}
              </h1>
              
               <div className="max-w-2xl space-y-3 mb-8">
                {industry.description.split('\n\n').map((para, i) => (
                  <p key={i} className="text-sm sm:text-base text-brand-body leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: para }} style={{ fontWeight: 400 }} />
                ))}
              </div>
              
              
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-white">
                <img
                  src="https://placehold.co/800x600/E5E7EB/9CA3AF?text=Industry+Image"
                  alt={industry.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* What This Industry Produces / Handles */}
      <section className="pt-0 pb-10 sm:pb-12 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-10 h-px bg-green/30"></span>
               <span className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-green">What This Industry Produces / Handles</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {industry.handles.map((item, i) => (
              <span key={i} className="px-5 py-2.5 bg-brand-bg2 border border-brand-border rounded-xl text-sm font-semibold text-brand-body hover:bg-green hover:text-white hover:border-green transition-colors">
                {typeof item === 'object' ? item.title : item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Technical Content */}
      <section className="pt-4 sm:pt-6 pb-14 sm:pb-16 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Row: Challenges & Applications */}
          <div className="mb-12">
            {/* Challenges Section */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-px bg-green/30"></span>
                  <span className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-green">The Challenges</span>
              </div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-black text-brand-black mb-6 tracking-tight">Operational Challenges</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {industry.commonChallenges.map((item, index) => (
                  <div key={index} className="bg-white border border-brand-border rounded-2xl p-6 hover:shadow-lg hover:border-green-mid transition-all duration-300 group">
                    <div className="flex items-center gap-3 mb-5 pb-4 border-b border-brand-border/50">
                      <div className="w-11 h-11 rounded-xl bg-green/10 flex items-center justify-center text-green group-hover:bg-green group-hover:text-white transition-all duration-500 shrink-0">
                        <i className={`fas ${item.icon} text-base`}></i>
                      </div>
                      <h3 className="text-base font-bold text-brand-black">{item.category}</h3>
                    </div>
                    {item.description ? (
                      <p className="text-sm text-brand-body leading-relaxed">{item.description}</p>
                    ) : (
                      <ul className="space-y-3">
                        {item.challenges.map((challenge, cIndex) => (
                          <li key={cIndex} className="flex gap-3 text-sm text-brand-body leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-green mt-2 shrink-0"></span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Applications Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-px bg-green/30"></span>
                 <span className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-green">Technical Response</span>
              </div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-black text-brand-black mb-6 tracking-tight">Applications</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industry.applications.map((app, index) => {
                  const isObject = typeof app === 'object';
                  const title = isObject ? app.title : app;
                  const description = isObject ? app.description : null;

                  return (
                    <div key={index} className="p-4 sm:p-5 bg-brand-bg2 rounded-2xl border border-brand-border hover:bg-white hover:shadow-xl transition-all duration-500 group">
                      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                         <span className="text-lg sm:text-xl lg:text-2xl font-black text-brand-muted group-hover:text-green transition-colors">0{index + 1}</span>
                          <h4 className="text-sm sm:text-base font-bold text-brand-black">{title}</h4>
                       </div>
                       {description && (
                          <p className="text-sm sm:text-base text-brand-body leading-relaxed text-justify line-clamp-4 group-hover:line-clamp-none transition-all">
                          {description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Workflow Process */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-px bg-green/30"></span>
               <span className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-green">Our Workflow Process</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { num: "01", title: "Discovery & Diagnosis", icon: "fa-search" },
                { num: "02", title: "Solutioning & Proposal", icon: "fa-file-alt" },
                { num: "03", title: "Order Execution & Delivery", icon: "fa-truck" },
                { num: "04", title: "Installation & Commissioning", icon: "fa-cogs" },
                { num: "05", title: "Product Lifecycle Support", icon: "fa-headset" }
              ].map((step, i, arr) => (
                <div key={i} className="relative group">
                  {i < arr.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-green/20 group-hover:bg-green/40 transition-colors -z-0"></div>
                  )}
                  <div className="bg-brand-bg2 border border-brand-border rounded-lg p-5 text-center hover:bg-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative z-10 h-full flex flex-col items-center">
                    <div className="w-10 h-10 bg-green rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md shadow-green/20">
                      <i className={`fas ${step.icon} text-white text-sm`}></i>
                    </div>
                    <div className="text-[10px] font-black text-green/40 mb-1">{step.num}</div>
                    <h3 className="text-sm font-medium text-brand-black leading-snug tracking-tight">{step.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CTA />
    </main>
  );
}
