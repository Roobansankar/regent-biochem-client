import { industries } from "@/data/industries";
import CTA from "@/components/CTA";
import Link from "next/link";

export default function IndustriesIndex() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Section - Clean, Airy, and Professional */}
      <section className="relative pt-12 pb-10 lg:pt-20 lg:pb-16 overflow-hidden">
        {/* Soft Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-50 to-transparent -z-10"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-50 rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-light border border-green-mid mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-green">Market Sectors</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-brand-black leading-[1.05] tracking-tight mb-6">
              Industries We <br/> <span className="text-green">Serve</span>
            </h1>
            <p className="text-base sm:text-lg text-brand-body leading-relaxed border-l-4 border-green-mid pl-6">
              From high-precision medical engineering to heavy industrial manufacturing, we provide the specialized chemistry and machinery that drives modern industry forward.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Showcase - Staggered Unique Layout */}
      <section className="pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {industries.map((industry, index) => (
              <Link 
                key={index} 
                href={`/industries/${industry.slug}`}
                className={`group relative flex flex-col bg-white rounded-[2.5rem] border border-brand-border overflow-hidden transition-all duration-700 hover:shadow-2xl hover:border-green-mid ${index % 2 !== 0 ? 'md:mt-16' : ''}`}
              >
                {/* Image Container with unique aspect ratio */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={industry.heroImage} 
                    alt={industry.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60"></div>
                  
                  {/* Floating Icon Box */}
                  <div className="absolute top-8 left-8 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-green shadow-xl border border-brand-border group-hover:bg-green group-hover:text-white transition-all duration-500">
                    <i className={`fas ${industry.icon} text-2xl`}></i>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8 lg:p-10">
                  <h3 className="text-2xl sm:text-3xl font-black text-brand-black mb-4 group-hover:text-green transition-colors">{industry.title}</h3>
                  <p className="text-sm sm:text-base text-brand-body leading-relaxed mb-6 line-clamp-3">
                    {industry.description}
                  </p>
                  
                  {/* Tags Preview */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {industry.handles.slice(0, 3).map((item, i) => (
                      <span key={i} className="px-4 py-2 bg-brand-bg2 rounded-xl text-[10px] font-bold text-brand-muted uppercase tracking-wider">
                        {typeof item === 'object' ? item.title : item}
                      </span>
                    ))}
                    <span className="px-4 py-2 bg-green-light rounded-xl text-[10px] font-bold text-green uppercase tracking-wider">
                      +{industry.handles.length - 3} More
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-sm font-black text-brand-black uppercase tracking-widest group-hover:gap-5 transition-all">
                    Explore Solutions <i className="fas fa-arrow-right text-green"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section - Minimal Light Design */}
      <section className="py-16 sm:py-20 bg-brand-bg2 border-t border-b border-brand-border">
         <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
               <h2 className="text-2xl sm:text-3xl font-black text-brand-black mb-3">Precision Engineering</h2>
               <p className="text-sm sm:text-base text-brand-body max-w-2xl mx-auto">Our multi-disciplinary approach combines chemical innovation with mechanical excellence.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: "Custom Formulation", desc: "Bespoke chemistry for unique metallurgy.", icon: "fa-flask" },
                 { title: "Scaleable Systems", desc: "Machinery that grows with your production.", icon: "fa-cogs" },
                 { title: "Pure Compliance", desc: "Exceeding global environmental standards.", icon: "fa-leaf" }
               ].map((item, i) => (
                  <div key={i} className="bg-white p-6 sm:p-8 rounded-[2rem] border border-brand-border shadow-sm hover:shadow-lg transition-all">
                     <div className="w-12 h-12 bg-green-light rounded-2xl flex items-center justify-center text-green mb-6">
                        <i className={`fas ${item.icon} text-lg`}></i>
                     </div>
                     <h4 className="text-lg font-black text-brand-black mb-3">{item.title}</h4>
                     <p className="text-sm text-brand-body leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      <CTA />
    </main>
  );
}
