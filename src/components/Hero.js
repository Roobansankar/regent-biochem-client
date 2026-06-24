// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";

// const slides = [
//   {
//     bg: "/hero.png",
//     label: "GREEN WAY TO GROWTH",
//     title: (
//       <>
//         Advanced Industrial
//         <br />
//         <span className="text-green">Cleaning &amp;</span>
//         <br />
//         Surface Technology
//       </>
//     ),
//     desc: "Revolutionizing surface engineering with eco-conscious chemical solutions and precision-grade German machinery for global enterprise.",
//   },
//   {
//     bg: "https://placehold.co/1200x400/1a3a2a/ffffff?text=Slide+2++",
//     label: "GREEN WAY TO GROWTH",
//     title: (
//       <>
//         Precision Engineered
//         <br />
//         <span className="text-green">Chemical</span>
//         <br />
//         Formulations
//       </>
//     ),
//     desc: "Specialty chemicals designed for industrial cleaning, surface protection, and process optimization across manufacturing sectors.",
//   },
//   {
//     bg: "https://placehold.co/1200x400/2d4a3a/ffffff?text=Slide+3",
//     label: "GREEN WAY TO GROWTH",
//     title: (
//       <>
//         German Engineering
//         <br />
//         <span className="text-green">Indian</span>
//         <br />
//         Expertise
//       </>
//     ),
//     desc: "Strategic partnership with Bio-Circle Surface Technology GmbH, bringing world-class cleaning systems to Indian industries.",
//   },
// ];

// export default function Hero() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(id);
//   }, []);

//   const slide = slides[current];

//   return (
//     <section className="relative min-h-[260px] md:min-h-[320px] flex items-center overflow-hidden bg-cover bg-center transition-all duration-700"
//       style={{ backgroundImage: `url('${slide.bg}')` }}
//     >
//       <div className="hero-overlay absolute inset-0 z-10"></div>
//       <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
//         <div className="max-w-xl">
//           <div className="inline-flex items-center gap-2 text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-green mb-6 animate-fade-up-1">
//             <span>—</span> {slide.label}
//           </div>
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-brand-black mb-5 animate-fade-up-2">
//             {slide.title}
//           </h1>
//           <p className="text-base sm:text-lg text-brand-body leading-relaxed max-w-md mb-8 animate-fade-up-3">
//             {slide.desc}
//           </p>
//           <div className="flex flex-col sm:flex-row gap-3 animate-fade-up-4">
//             <Link
//               href="#"
//               className="text-center bg-green text-white font-bold text-sm px-7 py-3.5 rounded hover:bg-green-dark transition-colors"
//             >
//               Explore Solutions
//             </Link>
//             <Link
//               href="#"
//               className="text-center border border-gray-300 text-brand-black font-medium text-sm px-7 py-3.5 rounded hover:border-green hover:text-green transition-colors"
//             >
//               Request Consultation
//             </Link>
//           </div>
//           {/* Dots */}
//           <div className="flex gap-2 mt-8">
//             {slides.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrent(i)}
//                 className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
//                   i === current ? "bg-green w-6" : "bg-green/30 hover:bg-green/50"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";

// const slides = [
//   {
//     bg: "/hero.png",
//     label: "GREEN WAY TO GROWTH",
//     title: (
//       <>
//         Advanced Industrial
//         <br />
//         <span className="text-green">Cleaning &amp;</span>
//         <br />
//         Surface Technology
//       </>
//     ),
//     desc: "Revolutionizing surface engineering with eco-conscious chemical solutions and precision-grade German machinery for global enterprise.",
//   },
//   {
//     bg: "/slide2.jpg",
//     label: "GREEN WAY TO GROWTH",
//     title: (
//       <>
//         Precision Engineered
//         <br />
//         <span className="text-green">Chemical</span>
//         <br />
//         Solutions
//       </>
//     ),
//     desc: "High-performance industrial chemicals developed for cleaning, degreasing, corrosion protection, and process optimization.",
//   },
//   {
//     bg: "/slide3.jpg",
//     label: "GREEN WAY TO GROWTH",
//     title: (
//       <>
//         German Technology
//         <br />
//         <span className="text-green">Indian</span>
//         <br />
//         Excellence
//       </>
//     ),
//     desc: "Delivering innovative cleaning systems and sustainable surface treatment technologies through global expertise.",
//   },
// ];

// export default function Hero() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(id);
//   }, []);

//   const slide = slides[current];

//   return (
//     <section
//       className="relative h-[380px] md:h-[450px] lg:h-[520px] flex items-center overflow-hidden bg-cover bg-center transition-all duration-700"
//       style={{ backgroundImage: `url('${slide.bg}')` }}
//     >
//       <div className="hero-overlay absolute inset-0 z-10"></div>

//       <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="max-w-2xl">
//           <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-green mb-4 animate-fade-up-1">
//             <span>—</span> {slide.label}
//           </div>

//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-brand-black mb-4 animate-fade-up-2">
//             {slide.title}
//           </h1>

//           <p className="text-sm sm:text-base lg:text-lg text-brand-body leading-relaxed max-w-xl mb-6 animate-fade-up-3">
//             {slide.desc}
//           </p>

//           <div className="flex flex-col sm:flex-row gap-3 animate-fade-up-4">
//             <Link
//               href="#"
//               className="text-center bg-green text-white font-bold text-sm px-6 py-3 rounded hover:bg-green-dark transition-colors"
//             >
//               Explore Solutions
//             </Link>

//             <Link
//               href="#"
//               className="text-center border border-gray-300 text-brand-black font-medium text-sm px-6 py-3 rounded hover:border-green hover:text-green transition-colors"
//             >
//               Request Consultation
//             </Link>
//           </div>

//           <div className="flex gap-2 mt-6">
//             {slides.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrent(i)}
//                 aria-label={`Go to slide ${i + 1}`}
//                 className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
//                   i === current
//                     ? "bg-green w-6"
//                     : "bg-green/30 hover:bg-green/50"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import hero2 from "@/assets/hero2.png";
import hero3 from "@/assets/hero3.png";

const slides = [
  {
    bg: "/hero.png",
    label: "GREEN WAY TO GROWTH",
    title: (
      <>
        Advanced Industrial
        <br />
        <span className="text-green">Cleaning &amp;</span>
        <br />
        Surface Technology
      </>
    ),
    desc: "Revolutionizing surface engineering with eco-conscious chemical solutions and precision-grade German machinery for global enterprise.",
  },
  {
    bg: hero2,
    label: "GREEN WAY TO GROWTH",
    title: (
      <>
        <span className="text-green">Global Expertise.</span>
        <br />
        Local Commitment.
      </>
    ),
    desc: "Backed by German expertise, we help industries solve operational challenges through practical and reliable solutions.",
  },
  {
    bg: hero3,
    label: "GREEN WAY TO GROWTH",
    title: (
      <>
        <span className="text-green">Driven by Innovation.</span>
        <br />
        Defined by Purpose.
      </>
    ),
    desc: "By combining technical expertise with a customer-focused approach, we help industries improve efficiency and achieve sustainable growth.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(id);
  }, []);

  const goTo = (index) => setCurrent(index);

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[300px] md:h-[380px] lg:h-[450px]">
        {/* Slides track */}
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="relative w-full h-full shrink-0 flex items-center"
              style={{
                backgroundImage: `url('${slide.bg.src || slide.bg}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="hero-overlay absolute inset-0 z-10"></div>

              <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pl-10 lg:pl-16">
                <div className="max-w-2xl">
                  <div className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-green mb-4">
                    {slide.label}
                  </div>

                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-black mb-3">
                    {slide.title}
                  </h1>

                  <p className="text-sm sm:text-base text-brand-body leading-relaxed max-w-xl mb-5">
                    {slide.desc}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/products"
                      className="text-center bg-green text-white font-bold text-sm px-6 py-3 rounded hover:bg-green-dark transition-colors"
                    >
                      Explore Solutions
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-green/20 flex items-center justify-center text-green hover:bg-green hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
        >
          <i className="fas fa-chevron-left text-xs"></i>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-green/20 flex items-center justify-center text-green hover:bg-green hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
        >
          <i className="fas fa-chevron-right text-xs"></i>  
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-green w-6" : "bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 