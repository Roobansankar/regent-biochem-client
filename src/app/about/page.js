import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { timeline, values } from "@/data/about";

export const dynamic = "force-static";
export const revalidate = false;

export default function About() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <ScrollReveal />

      {/* ─── PAGE HERO (Landscape Card - Light Theme) ─── */}
      <div className="px-4 sm:px-6 lg:px-10 pt-8 pb-4">
        <section className="bg-brand-bg3 py-12 md:py-16 relative overflow-hidden rounded-[2.5rem] shadow-sm border border-brand-border hero-pattern">
          {/* Decorative background effects */}
          <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-light rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-green-mid rounded-full blur-[100px]"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-[10px] text-brand-muted mb-8 reveal">
              <Link href="/" className="hover:text-green transition-colors uppercase tracking-widest font-bold">Home</Link>
              <i className="fas fa-chevron-right text-[7px]"></i>
              <span className="text-green font-bold uppercase tracking-widest">Our Legacy</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-black leading-tight tracking-tight mb-6 reveal">
              About <span className="text-green">Regent Biochem</span>
            </h1>
            
            <p className="text-base sm:text-lg text-brand-body leading-relaxed max-w-2xl mx-auto reveal">
              Regent Biochem is the architect of industrial purity, bridging the gap between high-performance engineering and ecological responsibility.
            </p>
          </div>
        </section>
      </div>

      {/* ─── COMPANY OVERVIEW ─── */}
      <section id="our-story" className="pt-12 pb-8 sm:pt-16 sm:pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image block */}
          <div className="reveal relative">
            <div className="rounded-3xl h-72 sm:h-96 border border-green-100 overflow-hidden shadow-card">
              <img src="https://i.pinimg.com/736x/2d/76/fd/2d76fd55699341142a0ab75391688c86.jpg" alt="Company Overview" className="w-full h-full object-cover" />
            </div>
            {/* Float badge */}
            <div className="absolute -bottom-5 -right-4 sm:-bottom-6 sm:-right-6 bg-white border border-gray-100 rounded-2xl px-6 py-4 shadow-float text-center">
              <div className="text-3xl sm:text-4xl font-extrabold text-green-600 leading-none">25+</div>
              <div className="text-xs text-gray-500 font-semibold mt-1">Years in Industry</div>
            </div>
          </div>

          {/* Text */}
          <div className="reveal">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[2.5px] uppercase text-green-600 mb-4">
              <span className="w-6 h-0.5 bg-green-500 rounded-sm"></span> Company Overview
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-5">
              Built on Chemistry.<br/><span className="text-green-600">Driven by Innovation.</span>
            </h2>
            <p className="text-base text-gray-500 leading-relaxed mb-4">Founded in 1999, Regent Biochem has grown from a regional supplier into one of India's most respected manufacturers of machine cleaning liquids and industrial chemicals.</p>
            <p className="text-sm text-gray-500 leading-relaxed mb-8">Our state-of-the-art manufacturing facility in Coimbatore houses advanced blending equipment and a dedicated R&D laboratory, where our team of expert chemists continuously develop and refine formulations that set industry benchmarks.</p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
                <div className="text-2xl font-extrabold text-green-600 mb-1">ISO 9001:2015</div>
                <div className="text-xs text-gray-500 font-semibold">Quality Certified</div>
              </div>
              <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
                <div className="text-2xl font-extrabold text-green-600 mb-1">Pan-India</div>
                <div className="text-xs text-gray-500 font-semibold">Distribution Network</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ─── */}
      <section className="bg-gray-50 pt-8 pb-12 sm:pt-10 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-8 reveal">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[2.5px] uppercase text-green-600 mb-4">
              <span className="w-6 h-0.5 bg-green-500 rounded-sm"></span> Mission &amp; Vision
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Our Purpose &amp; <span className="text-green-600">Direction</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="mission-bar relative bg-white border border-gray-100 rounded-2xl p-8 sm:p-10 hover:-translate-y-1 hover:shadow-card transition-all duration-300 reveal">
              <div className="text-4xl mb-5">🎯</div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-sm text-gray-500 leading-relaxed">To manufacture and deliver superior-grade industrial cleaning chemicals and machine maintenance solutions that enhance operational efficiency, uphold safety standards, and support sustainable industrial practices across every client facility we serve.</p>
            </div>
            {/* Vision */}
            <div className="vision-bar relative bg-white border border-gray-100 rounded-2xl p-8 sm:p-10 hover:-translate-y-1 hover:shadow-card transition-all duration-300 reveal">
              <div className="text-4xl mb-5">🔭</div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-sm text-gray-500 leading-relaxed">To be the most trusted industrial chemical company in South Asia — recognized for uncompromising quality, continuous innovation, and a deep commitment to building long-term partnerships with every manufacturer we support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ─── */}
      <section id="quality" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-10 reveal">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[2.5px] uppercase text-green-600 mb-4">
              <span className="w-6 h-0.5 bg-green-500 rounded-sm"></span> Core Values
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              What <span className="text-green-600">We Stand For</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="reveal bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center hover:bg-white hover:shadow-card hover:-translate-y-1 transition-all duration-300">
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
      <section id="commitment" className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 reveal">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-[2.5px] uppercase text-green-600 mb-4">
              <span className="w-6 h-0.5 bg-green-500 rounded-sm"></span> Company History
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
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

      <Footer />
    </main>
  );
}
