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
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 via-white to-white -z-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-green-50/30 blur-3xl -z-10"></div>
        
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-8">
                 <div className="w-10 h-10 bg-green-light rounded-xl flex items-center justify-center text-green border border-green-mid">
                    <i className={`fas ${industry.icon} text-sm`}></i>
                 </div>
                 <p className="text-[10px] font-black tracking-[0.4em] uppercase text-green">
                   Industry Specialist / {industry.slug}
                 </p>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-brand-black mb-8 leading-[1.1]">
                {industry.title}
              </h1>
              
              <p className="text-lg sm:text-xl text-brand-body leading-relaxed mb-12 border-l-4 border-green pl-8 max-w-2xl italic">
                {industry.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-10 py-4 bg-green text-white font-black rounded-2xl hover:bg-green-dark transition-all transform hover:-translate-y-1 shadow-xl shadow-green/20"
                >
                  Technical Inquiry
                </Link>
                <Link
                  href="#overview"
                  className="px-10 py-4 border-2 border-brand-border text-brand-black font-bold rounded-2xl hover:bg-brand-bg2 transition-all"
                >
                  View Details
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white">
                <img
                  src={industry.heroImage}
                  alt={industry.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Performance Tag - Light version */}
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2.5rem] shadow-2xl text-brand-black border border-brand-border hidden xl:block">
                 <div className="flex items-center gap-6">
                    <div className="text-center">
                       <p className="text-4xl font-black text-green leading-none">ISO</p>
                       <p className="text-[10px] font-black uppercase tracking-widest text-brand-muted mt-2">Certified</p>
                    </div>
                    <div className="w-px h-12 bg-brand-border"></div>
                    <div className="text-center">
                       <p className="text-4xl font-black text-brand-black leading-none">99%</p>
                       <p className="text-[10px] font-black uppercase tracking-widest text-brand-muted mt-2">Efficacy</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Bar - Distinct from services */}
      <section id="overview" className="py-16 bg-white border-t border-brand-border">
         <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-bg2 rounded-[3rem] p-10 lg:p-16">
               <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="lg:w-1/4 text-center lg:text-left">
                     <h3 className="text-2xl font-black text-brand-black mb-2">Core Materials</h3>
                     <p className="text-sm text-brand-muted">Precision handling of critical components.</p>
                  </div>
                  <div className="lg:w-3/4 flex flex-wrap justify-center lg:justify-start gap-3">
                     {industry.handles.map((item, index) => (
                       <div key={index} className="px-6 py-3 bg-white border border-brand-border rounded-2xl text-xs font-bold text-brand-black shadow-sm flex items-center gap-3">
                          <i className="fas fa-microchip text-[10px] text-green"></i>
                          {item}
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Challenges & Applications - Distinct Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
             
             {/* Challenges */}
             <div>
                <div className="inline-flex items-center gap-2 text-green font-black uppercase tracking-[0.3em] text-xs mb-6">
                   <span className="w-8 h-px bg-green"></span> Market Painpoints
                </div>
                <h2 className="text-4xl font-black text-brand-black mb-12">Critical Challenges</h2>

                <div className="space-y-6">
                   {industry.commonChallenges.map((item, index) => (
                     <div key={index} className="p-8 bg-white border border-brand-border rounded-[2.5rem] hover:shadow-xl transition-all">
                        <h3 className="text-xl font-black text-brand-black mb-6 uppercase tracking-tight flex items-center gap-4">
                           <div className="w-10 h-10 bg-green-light rounded-xl flex items-center justify-center text-green">
                              <i className={`fas ${item.icon}`}></i>
                           </div>
                           {item.category}
                        </h3>
                        <div className="grid grid-cols-1 gap-4">
                          {item.challenges.map((challenge, cIndex) => (
                            <div key={cIndex} className="flex gap-4 items-start p-4 bg-brand-bg2 rounded-2xl group/item hover:bg-white hover:shadow-sm transition-all">
                              <div className="w-5 h-5 rounded-md bg-green-light flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-green group-hover/item:text-white transition-colors">
                                <i className="fas fa-diamond text-[6px]"></i>
                              </div>
                              <p className="text-brand-body text-sm font-medium">{challenge}</p>
                            </div>
                          ))}
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             {/* Applications - One by One with Hover Effect */}
             <div>
                <div className="inline-flex items-center gap-2 text-green font-black uppercase tracking-[0.3em] text-xs mb-6">
                   <span className="w-8 h-px bg-green"></span> Our Response
                </div>
                <h2 className="text-4xl font-black text-brand-black mb-12">Key Applications</h2>

                <div className="space-y-4">
                  {industry.applications.map((app, index) => (
                    <div key={index} className="group flex items-center justify-between p-6 bg-brand-bg2 rounded-[2rem] border border-brand-border hover:border-green hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-green shadow-sm group-hover:bg-green group-hover:text-white transition-colors">
                          <i className="fas fa-check text-sm"></i>
                        </div>
                        <span className="text-lg font-black text-brand-black transition-colors group-hover:text-green">{app}</span>
                      </div>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-brand-border group-hover:text-green group-hover:bg-green-light transition-all">
                        <i className="fas fa-arrow-right text-xs transform group-hover:translate-x-1 transition-transform"></i>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Methodology Section - Light & Clean */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-brand-black">Our Methodology</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {industry.howWeWork.map((step, index) => (
                <div key={index} className="p-8 bg-brand-bg2 rounded-[2rem] border border-brand-border flex flex-col items-center text-center group hover:bg-white hover:border-green-mid hover:shadow-xl transition-all">
                   <div className="w-10 h-10 rounded-full bg-white border border-brand-border flex items-center justify-center text-xs font-black text-brand-muted mb-6 group-hover:bg-green group-hover:text-white group-hover:border-green transition-all">
                      {index + 1}
                   </div>
                   <span className="text-xs font-black text-brand-black uppercase tracking-tight">{step}</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
