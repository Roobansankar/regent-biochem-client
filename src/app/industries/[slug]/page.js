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
              
              <p className="text-lg sm:text-xl text-brand-body leading-relaxed mb-12 border-l-4 border-green pl-8 max-w-2xl justify-content">
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

      {/* Materials Overview Bar */}
      <section id="overview" className="py-16 bg-white border-t border-brand-border">
         <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-bg2 rounded-[3rem] p-10 lg:p-16">
               <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="lg:w-1/4 text-center lg:text-left">
                     <h3 className="text-2xl font-black text-brand-black mb-2 uppercase tracking-tight">Core Materials</h3>
                     <p className="text-sm text-brand-muted">Technical handling overview.</p>
                  </div>
                  <div className="lg:w-3/4 flex flex-wrap justify-center lg:justify-start gap-4">
                     {industry.handles.map((item, index) => {
                       const isObject = typeof item === 'object';
                       const title = isObject ? item.title : item;
                       const description = isObject ? item.description : null;

                       return (
                        <div key={index} className="px-6 py-4 bg-white border border-brand-border rounded-2xl shadow-sm flex flex-col gap-2 hover:border-green-mid transition-all group/mat max-w-[320px]">
                           <div className="flex items-center gap-3">
                              <i className="fas fa-microchip text-xs text-green group-hover/mat:scale-110 transition-transform"></i>
                              <span className="text-xs font-black text-brand-black uppercase tracking-wider">
                                {title}
                              </span>
                           </div>
                           {description && (
                             <p className="text-xs text-brand-muted leading-tight line-clamp-1 pl-6 font-medium italic">
                               {description}
                             </p>
                           )}
                        </div>
                       );
                     })}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Narrative Technical Content */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Row: Challenges & Applications */}
          <div className="mb-24">
            {/* Challenges Section */}
            <div className="mb-24">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-px bg-green/30"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green">Engineering Challenges</span>
              </div>
              <h2 className="text-3xl font-black text-brand-black mb-12 uppercase tracking-tight">Critical Market Painpoints</h2>

              <div className="space-y-12">
                {industry.commonChallenges.map((item, index) => (
                  <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-6 group">
                    <div className="lg:col-span-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-brand-bg2 flex items-center justify-center text-green group-hover:bg-green group-hover:text-white transition-all duration-500 shrink-0">
                          <i className={`fas ${item.icon} text-sm`}></i>
                        </div>
                        <h3 className="text-lg font-black text-brand-black uppercase tracking-tight">{item.category}</h3>
                      </div>
                    </div>
                    <div className="lg:col-span-8">
                      {item.description ? (
                        <p className="text-base text-brand-body leading-relaxed text-justify border-l-2 border-brand-bg2 pl-6 group-hover:border-green transition-colors duration-500">
                          {item.description}
                        </p>
                      ) : (
                        <div className="grid grid-cols-1 gap-3 border-l-2 border-brand-bg2 pl-6">
                          {item.challenges.map((challenge, cIndex) => (
                            <div key={cIndex} className="flex gap-3 items-center text-sm font-bold text-brand-body uppercase tracking-wide">
                              <span className="w-1.5 h-1.5 rounded-full bg-green/40"></span>
                              {challenge}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications Section */}
            <div className="mb-24">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-px bg-green/30"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-green">Technical Response</span>
              </div>
              <h2 className="text-3xl font-black text-brand-black mb-12 uppercase tracking-tight">Key Applications & Outcomes</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industry.applications.map((app, index) => {
                  const isObject = typeof app === 'object';
                  const title = isObject ? app.title : app;
                  const description = isObject ? app.description : null;

                  return (
                    <div key={index} className="p-8 bg-brand-bg2 rounded-[2rem] border border-brand-border hover:bg-white hover:shadow-xl transition-all duration-500 group">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-2xl font-black text-green/20 group-hover:text-green transition-colors">0{index + 1}</span>
                        <h4 className="text-sm font-black text-brand-black uppercase tracking-widest">{title}</h4>
                      </div>
                      {description && (
                        <p className="text-sm text-brand-body leading-relaxed text-justify line-clamp-4 group-hover:line-clamp-none transition-all">
                          {description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Section: Material Specialization (Full Width) */}
          <div className="bg-brand-bg2 rounded-[3rem] p-10 lg:p-16 border border-brand-border relative overflow-hidden group">
            {/* Decorative accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-green/10 transition-all duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
                <div>
                  <div className="inline-flex items-center gap-2 text-green font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                    <span className="w-8 h-px bg-green"></span> Engineering Focus
                  </div>
                  <h2 className="text-4xl font-black text-brand-black uppercase tracking-tight">Material Specialization</h2>
                </div>
                <Link 
                  href="/contact"
                  className="px-10 py-4 bg-green text-white font-black rounded-2xl hover:bg-green-dark transition-all block text-xs uppercase tracking-widest shadow-lg shadow-green/20 w-fit"
                >
                  Request Technical Data Sheet
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                {industry.handles.map((item, index) => {
                  const isObject = typeof item === 'object';
                  const title = isObject ? item.title : item;
                  const description = isObject ? item.description : null;

                  return (
                    <div key={index} className="bg-white p-8 rounded-[2rem] border border-brand-border hover:shadow-xl transition-all duration-500 group/item">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-green-light flex items-center justify-center text-green shrink-0">
                          <i className="fas fa-microchip text-xs"></i>
                        </div>
                        <h4 className="text-sm font-black uppercase tracking-widest text-brand-black group-hover/item:text-green transition-colors">{title}</h4>
                      </div>
                      {description && (
                        <p className="text-xs text-brand-body leading-relaxed text-justify">
                          {description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Methodology Section - Vertical Narrative Timeline */}
      <section className="py-24 bg-brand-bg2 border-t border-brand-border">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-20">
              <div className="inline-flex items-center gap-2 text-green font-black uppercase tracking-[0.3em] text-[10px] mb-4">
                <span className="w-8 h-px bg-green"></span> Strategic Process
              </div>
              <h2 className="text-4xl font-black text-brand-black uppercase tracking-tight">Our Service Approach</h2>
           </div>
           
           <div className="relative space-y-12">
              {/* Vertical Connecting Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-border z-0"></div>
              
              {industry.howWeWork.map((step, index) => (
                <div key={index} className="relative flex items-center group">
                  {/* Number Badge */}
                  <div className="w-16 h-16 rounded-2xl bg-white border-4 border-brand-bg2 shadow-sm flex items-center justify-center text-xl font-black text-brand-muted group-hover:bg-green group-hover:text-white group-hover:scale-110 transition-all duration-500 relative z-10">
                    {index + 1}
                  </div>
                  
                  {/* Content Module */}
                  <div className="ml-12 flex-grow p-8 bg-white rounded-[2.5rem] border border-brand-border hover:border-green-mid hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <h4 className="text-xl font-black text-brand-black uppercase tracking-tight group-hover:text-green transition-colors">
                        {step}
                      </h4>
                      <p className="text-sm text-brand-muted mt-2 font-medium">Phase {index + 1} of our specialized industrial implementation.</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <div className="w-10 h-1 bg-green-light rounded-full group-hover:bg-green transition-colors duration-500"></div>
                      <div className="w-2 h-1 bg-brand-border rounded-full group-hover:bg-green/40 transition-colors duration-500"></div>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
