import { services } from "@/data/services";
import Navbar from "@/components/Navbar";
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
                <span className="w-8 h-px bg-green"></span> Professional Services
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-black mb-6 leading-[1.1]">
                {service.title}
              </h1>
              <p className="text-lg sm:text-xl text-brand-body leading-relaxed mb-8 border-l-4 border-green-light pl-6">
                <span className="font-bold text-brand-black">{service.subtitle}.</span> {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-10 py-3.5 bg-green text-white font-bold rounded-xl hover:bg-green-dark transition-all transform hover:-translate-y-1 shadow-xl shadow-green/20"
                >
                  Get a Quote
                </Link>
                <button className="px-10 py-3.5 border-2 border-brand-border text-brand-black font-bold rounded-xl hover:bg-brand-bg2 transition-all">
                  Technical Specs
                </button>
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
                    <p className="text-[10px] font-black uppercase tracking-widest text-green">Certified Solution</p>
                    <p className="text-sm font-bold text-brand-black">Industrial Grade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-brand-bg2">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-green mb-2">Capabilities</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-black">Key Features & Technology</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-brand-border hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-green-light rounded-2xl flex items-center justify-center text-green text-lg mb-5">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3">{feature.title}</h3>
                <p className="text-brand-body leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Image Section */}
      <section className="py-16">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={service.heroImage} 
                alt="Benefit focus" 
                className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-bold tracking-widest uppercase text-green mb-2">Why it matters</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-black mb-6">
                Strategic Benefits for Your Operations
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-check text-green text-xs"></i>
                    </div>
                    <p className="text-brand-body font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Modern ZigZag Timeline */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-widest uppercase text-green mb-2">Implementation</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-black">Our Deployment Process</h2>
          </div>

          <div className="relative">
            {/* Vertical Line - Desktop Only */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-brand-border -translate-x-1/2"></div>

            <div className="space-y-12 lg:space-y-0">
              {service.process.map((step, index) => (
                <div key={index} className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content Box */}
                  <div className="w-full lg:w-1/2 px-0 lg:px-12 mb-6 lg:mb-0">
                    <div className={`p-8 rounded-[2rem] bg-brand-bg2 border border-brand-border transition-all duration-500 hover:shadow-2xl hover:bg-white group ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <span className="inline-block text-xs font-black text-green tracking-[0.2em] uppercase mb-3 opacity-50">Step {step.step}</span>
                      <h3 className="text-2xl lg:text-3xl font-extrabold text-brand-black mb-3 group-hover:text-green transition-colors">{step.title}</h3>
                      <p className="text-brand-body leading-relaxed text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon/Number */}
                  <div className="absolute left-1/2 top-0 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 z-10 hidden lg:flex">
                    <div className="w-12 h-12 rounded-2xl bg-white border-4 border-brand-bg2 flex items-center justify-center shadow-xl">
                      <span className="text-lg font-black text-green">{step.step}</span>
                    </div>
                  </div>

                  {/* Spacer for other side on desktop */}
                  <div className="hidden lg:block lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
