import { industries } from "@/data/industries";
import Navbar from "@/components/Navbar";
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
                <span className="w-8 h-px bg-green"></span> Industry Specialization
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-black mb-6 leading-[1.1]">
                {industry.title}
              </h1>
              <p className="text-lg sm:text-xl text-brand-body leading-relaxed mb-8 border-l-4 border-green-light pl-6">
                <span className="font-bold text-brand-black">{industry.subtitle}.</span> {industry.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-10 py-3.5 bg-green text-white font-bold rounded-xl hover:bg-green-dark transition-all transform hover:-translate-y-1 shadow-xl shadow-green/20"
                >
                  Consult an Expert
                </Link>
                <Link
                  href="/case-studies"
                  className="px-10 py-3.5 border-2 border-brand-border text-brand-black font-bold rounded-xl hover:bg-brand-bg2 transition-all"
                >
                  View Case Studies
                </Link>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-green/10 rounded-[2.5rem] blur-2xl group-hover:bg-green/20 transition-all duration-500"></div>
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src={industry.heroImage}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-brand-border hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green rounded-xl flex items-center justify-center text-white">
                    <i className={`fas ${industry.icon} text-lg`}></i>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-green">Sector Specialist</p>
                    <p className="text-sm font-bold text-brand-black">Global Standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 bg-brand-bg2">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-green mb-2">Technical Insight</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-black">Challenges & Solutions</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Challenges */}
            <div className="bg-white p-8 sm:p-10 rounded-[2rem] border border-brand-border shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500">
                  <i className="fas fa-exclamation-triangle"></i>
                </div>
                <h3 className="text-xl font-bold text-brand-black">Sector Challenges</h3>
              </div>
              <ul className="space-y-4">
                {industry.challenges.map((challenge, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] text-red-500 font-bold">
                      {index + 1}
                    </div>
                    <p className="text-brand-body text-sm leading-relaxed">{challenge}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="bg-white p-8 sm:p-10 rounded-[2rem] border border-brand-border shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h3 className="text-xl font-bold text-brand-black">Bio-Chem Solutions</h3>
              </div>
              <ul className="space-y-4">
                {industry.solutions.map((solution, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] text-green font-bold">
                      <i className="fas fa-check"></i>
                    </div>
                    <p className="text-brand-body text-sm leading-relaxed">{solution}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="lg:w-1/2">
              <p className="text-xs font-bold tracking-widest uppercase text-green mb-2">Operations Map</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-black mb-6">Where We Apply Our Technology</h2>
              <div className="space-y-6">
                {industry.applicationAreas.map((item, index) => (
                  <div key={index} className="group flex gap-5 items-start p-5 rounded-2xl hover:bg-brand-bg2 transition-colors border border-transparent hover:border-brand-border">
                    <div className="w-10 h-10 rounded-xl bg-green-light flex items-center justify-center text-green font-bold shrink-0">
                      0{index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-black mb-1">{item.area}</h4>
                      <p className="text-sm text-brand-body leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-green-light rounded-[2.5rem] rotate-3 scale-105 opacity-50"></div>
              <img 
                src={industry.heroImage} 
                alt="Application context" 
                className="relative z-10 rounded-[2.5rem] shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="py-16 bg-brand-bg2">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 border border-brand-border shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-green mb-2">Quality Assurance</p>
                <h2 className="text-3xl font-extrabold tracking-tight text-brand-black">Regulatory & Safety Standards</h2>
                <p className="text-brand-body mt-2 max-w-xl">Our solutions for the {industry.title} are fully compliant with relevant international and regional safety and environmental benchmarks.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {industry.standards.map((standard, index) => (
                  <span key={index} className="px-5 py-2.5 bg-brand-bg2 border border-brand-border rounded-full text-xs font-bold text-brand-black whitespace-nowrap">
                    <i className="fas fa-certificate text-green mr-2"></i> {standard}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Benefits */}
      <section className="py-16">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green rounded-[2.5rem] p-10 sm:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2"></div>
            <div className="relative z-10">
              <div className="max-w-3xl">
                <p className="text-xs font-bold tracking-widest uppercase text-white/70 mb-3">The Advantage</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-8">Strategic Impact on Operations</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {industry.benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4 items-center bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20">
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-white text-xs">
                        <i className="fas fa-star"></i>
                      </div>
                      <p className="text-white font-bold text-sm leading-tight">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-green mb-2">Technical Alignment</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-black">Recommended Solutions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industry.featuredProducts.map((product, index) => (
              <div key={index} className="bg-brand-bg2 border border-brand-border rounded-[2rem] p-8 flex flex-col sm:flex-row items-center gap-8 hover:shadow-xl transition-all duration-500">
                <div className="w-full sm:w-40 aspect-square bg-white rounded-2xl flex items-center justify-center p-4 shadow-sm shrink-0">
                  {product.img ? (
                    <img src={product.img} alt={product.title} className="max-w-full max-h-full object-contain" />
                  ) : (
                    <i className={`fas ${product.icon} text-4xl text-green`}></i>
                  )}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-brand-black mb-2">{product.title}</h4>
                  <p className="text-sm text-brand-body leading-relaxed mb-6">{product.desc}</p>
                  <Link href="#" className="text-xs font-bold uppercase tracking-widest text-green hover:text-green-dark inline-flex items-center gap-2">
                    Product Details <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
