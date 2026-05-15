import { industries } from "@/data/industries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import Link from "next/link";

export default function IndustriesIndex() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-brand-bg3 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-light rounded-full blur-[100px]"></div>
        </div>
        
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-green mb-4">Market Expertise</p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-brand-black leading-tight tracking-tight mb-6">
            Industries We <span className="text-green">Serve</span>
          </h1>
          <p className="text-base sm:text-lg text-brand-body leading-relaxed max-w-2xl mx-auto">
            From precision medical components to heavy offshore infrastructure, we provide the specialized chemistry and machinery that drives modern industry.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Link 
                key={index} 
                href={`/industries/${industry.slug}`}
                className="group relative bg-white border border-brand-border rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={industry.heroImage} 
                    alt={industry.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <div className="w-12 h-12 bg-green rounded-xl flex items-center justify-center text-white mb-4 shadow-lg transform group-hover:rotate-12 transition-transform">
                    <i className={`fas ${industry.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-2">{industry.title}</h3>
                  <p className="text-white/70 text-sm line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {industry.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-green font-bold text-xs uppercase tracking-widest translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    Explore Solutions <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="py-16 bg-brand-bg2 border-t border-b border-brand-border">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-4xl text-green mb-4"><i className="fas fa-microscope"></i></div>
              <h4 className="text-lg font-bold text-brand-black mb-3">Custom Formulation</h4>
              <p className="text-sm text-brand-body leading-relaxed">Our R&D labs develop bespoke chemical solutions tailored to the unique metallurgy and contaminants of your specific sector.</p>
            </div>
            <div>
              <div className="text-4xl text-green mb-4"><i className="fas fa-cogs"></i></div>
              <h4 className="text-lg font-bold text-brand-black mb-3">Modular Machinery</h4>
              <p className="text-sm text-brand-body leading-relaxed">We engineer cleaning systems that integrate seamlessly into existing production lines, regardless of industry scale.</p>
            </div>
            <div>
              <div className="text-4xl text-green mb-4"><i className="fas fa-leaf"></i></div>
              <h4 className="text-lg font-bold text-brand-black mb-3">Global Compliance</h4>
              <p className="text-sm text-brand-body leading-relaxed">Every solution is designed to meet or exceed the world's strictest environmental and safety standards (ISO, NSF, REACH).</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
