import { industries } from "@/data/industries";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Link from "next/link";
 not 
export default function IndustriesIndex() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero Section - Clean, Airy, and Professional */}
      <section className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        {/* Soft Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-green-50 to-transparent -z-10"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-green-50 rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-light border border-green-mid mb-6">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-green">Market Sectors</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-brand-black leading-[1.05] tracking-tight mb-8">
              Industries We <br/> <span className="text-green">Serve</span>
            </h1>
            <p className="text-lg sm:text-xl text-brand-body leading-relaxed border-l-4 border-green-mid pl-8">
              From high-precision medical engineering to heavy industrial manufacturing, we provide the specialized chemistry and machinery that drives modern industry forward.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Showcase - Staggered Unique Layout */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
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
                
                <div className="p-10 lg:p-12">
                  <h3 className="text-3xl font-black text-brand-black mb-6 group-hover:text-green transition-colors">{industry.title}</h3>
                  <p className="text-brand-body leading-relaxed mb-10 line-clamp-3">
                    {industry.description}
                  </p>
                  
                  {/* Tags Preview */}
                  <div className="flex flex-wrap gap-2 mb-10">
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
      <section className="py-24 bg-brand-bg2 border-t border-b border-brand-border">
         <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
               <h2 className="text-4xl font-black text-brand-black mb-4">Precision Engineering</h2>
               <p className="text-brand-body max-w-2xl mx-auto">Our multi-disciplinary approach combines chemical innovation with mechanical excellence.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: "Custom Formulation", desc: "Bespoke chemistry for unique metallurgy.", icon: "fa-flask" },
                 { title: "Scaleable Systems", desc: "Machinery that grows with your production.", icon: "fa-cogs" },
                 { title: "Pure Compliance", desc: "Exceeding global environmental standards.", icon: "fa-leaf" }
               ].map((item, i) => (
                 <div key={i} className="bg-white p-10 rounded-[2rem] border border-brand-border shadow-sm hover:shadow-lg transition-all">
                    <div className="w-14 h-14 bg-green-light rounded-2xl flex items-center justify-center text-green mb-8">
                       <i className={`fas ${item.icon} text-xl`}></i>
                    </div>
                    <h4 className="text-xl font-black text-brand-black mb-4">{item.title}</h4>
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
