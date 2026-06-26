
import { timeline, values } from "@/data/about";
import Link from "next/link";
import aboutus from "@/assets/aboutus.png";
import frefloLogo from "@/assets/freeflo.png";

export const dynamic = "force-static";
export const revalidate = false;

export default function About() {
  const productCategories = [
    {
      title: "CleanTech",
      desc: "Advanced aqueous cleaning systems and bio-active fluids for precision industrial parts washing.",
      icon: "fa-broom",
      link: "/products?search=CleanTech"
    },
    {
      title: "SafeWeld",
      desc: "High-performance, eco-friendly anti-spatter and surface protection solutions for welding operations.",
      icon: "fa-shield-halved",
      link: "/products?search=SafeWeld"
    },
    {
      title: "Freflo",
      desc: "Specialized chemical technologies for industrial pipeline cleaning and flow restoration.",
      icon: frefloLogo,
      link: "/products?search=Freflo"
    }
  ];

  return (
    <main className="flex flex-col min-h-screen">
      {/* ─── PAGE HERO ─── */}
      <section className="relative pt-10 pb-8 lg:pt-16 lg:pb-12 bg-green overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-10"></div>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight reveal">
              About <span className="text-green-mid">Regent Biochem</span>
            </h1>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed reveal">
              Empowering industrial efficiency through sustainable surface technology and precision engineering.Optimizing industrial maintenance through specialized chemical engineering and high-efficiency cleaning solutions.
            </p>
          </div>
        </div>
      </section>

      {/* ─── COMPANY OVERVIEW ─── */}
      <section id="our-story" className="pt-12 pb-8 sm:pt-16 sm:pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image block */}
          <div className="reveal relative">
            <div className="rounded-3xl h-72 sm:h-96 border border-green-100 overflow-hidden shadow-card">
              <img src={aboutus.src} alt="Company Overview" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Text */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[2.5px] uppercase text-green-600 mb-4">
              <span className="w-6 h-0.5 bg-green-500 rounded-sm"></span> Our Story
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
              Driving Efficiency<br/><span className="text-green-600">Green Way to Growth</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-4">Regent BioChem is a CleanTech and Surface Technology company focused on providing innovative industrial cleaning, surface technology, and maintenance solutions to a wide range of manufacturing industries across India and South Asia.</p>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-4">Driven by a commitment to operational excellence, we help manufacturers enhance productivity, improve asset reliability, and sustain process performance through advanced cleaning technologies, specialty chemical formulations, and deep application knowledge. Our solutions are designed to support cleaner, safer, and more efficient operations while addressing evolving industrial challenges.</p>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-8">With a customer-centric approach, we work closely with businesses to understand their unique requirements, deliver practical and effective solutions, and provide ongoing technical support that enables long-term efficiency, reliability, and sustainable growth.</p>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── */}
      <section className="bg-gray-50 pt-8 pb-12 sm:pt-10 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-8 reveal">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[2.5px] uppercase text-green-600 mb-4">
              <span className="w-6 h-0.5 bg-green-500 rounded-sm"></span> Vision &amp; Mission
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              Our Purpose &amp; <span className="text-green-600">Direction</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Vision */}
            <div className="mission-bar relative bg-white border border-gray-100 rounded-2xl p-8 sm:p-10 hover:-translate-y-1 hover:shadow-card transition-all duration-300 reveal">
              <div className="w-14 h-14 bg-green-light rounded-2xl flex items-center justify-center text-green text-2xl mb-6 shadow-sm">
                <i className="fas fa-eye"></i>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-sm text-gray-500 leading-relaxed">To be a trusted leader in sustainable cleaning technology and eco-friendly specialty chemicals, enabling industries to achieve superior performance and responsible growth—the green way to growth.</p>
            </div>
            {/* Mission */}
            <div className="vision-bar relative bg-white border border-gray-100 rounded-2xl p-8 sm:p-10 hover:-translate-y-1 hover:shadow-card transition-all duration-300 reveal">
              <div className="w-14 h-14 bg-green-light rounded-2xl flex items-center justify-center text-green text-2xl mb-6 shadow-sm">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-sm text-gray-500 leading-relaxed">To design and deliver innovative cleaning machines and environmentally responsible specialty chemicals that improve industrial efficiency, protect surfaces and components, reduce environmental impact, and create lasting value for customers and stakeholders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCT CATEGORIES ─── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-10 reveal">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[2.5px] uppercase text-green-600 mb-4">
              <span className="w-6 h-0.5 bg-green-500 rounded-sm"></span> Our Expertise
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              Product <span className="text-green-600">Categories</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCategories.map((cat, i) => (
              <div key={i} className="reveal bg-brand-bg2 border border-brand-border rounded-[2rem] p-8 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="flex items-center justify-center mb-6">
                  {typeof cat.icon === "string" ? (
                    cat.icon.startsWith("text:") ? (
                      <span className="w-14 h-14 bg-green-light rounded-2xl flex items-center justify-center text-green text-2xl shadow-sm text-[10px] font-black uppercase tracking-[0.12em] text-center leading-tight">
                        {cat.icon.replace("text:", "")}
                      </span>
                    ) : (
                      <i className={`w-14 h-14 bg-green-light rounded-2xl flex items-center justify-center text-green text-2xl shadow-sm fas ${cat.icon}`}></i>
                    )
                  ) : (
                    <img src={cat.icon.src} alt={cat.title} className="h-16 w-auto object-contain" />
                  )}
                </div>
                <h3 className="text-xl font-extrabold text-brand-black mb-3">{cat.title}</h3>
                <p className="text-sm text-brand-body leading-relaxed mb-8 flex-grow">
                  {cat.desc}
                </p>
                <Link 
                  href={cat.link}
                  className="inline-flex items-center justify-center w-full bg-green text-white text-xs font-extrabold uppercase tracking-widest py-3.5 rounded-xl hover:bg-green-dark transition-all shadow-md shadow-green/20"
                >
                  View More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ─── */}
      <section id="quality" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-brand-border">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-10 reveal">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[2.5px] uppercase text-green-600 mb-4">
              <span className="w-6 h-0.5 bg-green-500 rounded-sm"></span> Core Values
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              What <span className="text-green-600">We Stand For</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="reveal bg-white border border-gray-100 rounded-2xl p-8 text-center hover:shadow-card hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mx-auto mb-5 text-green-600 text-2xl">
                  <i className={`fas ${v.icon}`}></i>
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-2">{v.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section id="commitment" className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 reveal">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[2.5px] uppercase text-green-600 mb-4">
              <span className="w-6 h-0.5 bg-green-500 rounded-sm"></span> Company History
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
              Our Growth <span className="text-green-600">Timeline</span>
            </h2>
          </div>

          <div className="tl-line relative py-8">
            {timeline.map((item, i) => (
              <div key={i} className={`reveal grid items-start mb-12 ${i % 2 === 0 ? 'grid-cols-[1fr_64px_1fr] max-md:grid-cols-[40px_1fr]' : 'grid-cols-[1fr_64px_1fr] max-md:grid-cols-[40px_1fr]'}`}>
                {/* Left side for even items (desktop) */}
                <div className={`max-md:hidden text-right pr-10 ${i % 2 !== 0 ? 'invisible' : ''}`}>
                  <div className="text-2xl font-extrabold text-green-600 mb-1">{item.year}</div>
                  <div className="text-base font-bold text-gray-900 mb-1">{item.title}</div>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
                </div>
                
                {/* Center dot */}
                <div className="flex items-start justify-center z-10 pt-1">
                  <div className={`w-11 h-11 border-[3px] rounded-full flex items-center justify-center text-sm font-extrabold transition-all duration-300 flex-shrink-0 ${
                    i === timeline.length - 1 
                      ? 'bg-green-500 border-green-500 text-white' 
                      : 'bg-white border-green-400 text-green-600 hover:bg-green-500 hover:text-white hover:border-green-500'
                  }`}>
                    {item.num}
                  </div>
                </div>

                {/* Right side for odd items (desktop) + all items (mobile) */}
                <div className={`pl-6 md:pl-10 ${i % 2 === 0 ? 'max-md:block md:invisible' : ''}`}>
                  <div className="text-2xl font-extrabold text-green-600 mb-1">{item.year}</div>
                  <div className="text-base font-bold text-gray-900 mb-1">{item.title}</div>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
