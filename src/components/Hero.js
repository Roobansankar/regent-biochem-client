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
    bg: "",
    bgColor: "linear-gradient(135deg, #0f3d2e 0%, #1e5f47 100%)",
    label: "GREEN WAY TO GROWTH",
    title: (
      <>
        Precision Engineered
        <br />
        <span className="text-green">Chemical</span>
        <br />
        Solutions
      </>
    ),
    desc: "High-performance industrial chemicals developed for cleaning, degreasing, corrosion protection, and process optimization.",
  },
  {
    bg: "",
    bgColor: "linear-gradient(135deg, #1a1f36 0%, #2b5876 100%)",
    label: "GREEN WAY TO GROWTH",
    title: (
      <>
        German Technology
        <br />
        <span className="text-green">Indian</span>
        <br />
        Excellence
      </>
    ),
    desc: "Delivering innovative cleaning systems and sustainable surface treatment technologies through global expertise.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(id);
  }, []);

  const slide = slides[current];

  return (
    <section
      className="relative h-[380px] md:h-[450px] lg:h-[520px] flex items-center overflow-hidden transition-all duration-700 bg-cover bg-center"
      style={{
        backgroundImage: slide.bg
          ? `url('${slide.bg}')`
          : slide.bgColor,
      }}
    >
      {/* Original Overlay */}
      <div className="hero-overlay absolute inset-0 z-10"></div>

      {/* Left Arrow */}
      {/* <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-xl bg-white/80 backdrop-blur-sm border border-green/20 flex items-center justify-center text-green hover:bg-green hover:text-white transition-all shadow-md"
      >
        <i className="fas fa-chevron-left text-sm"></i>
      </button>

  
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-xl bg-white/80 backdrop-blur-sm border border-green/20 flex items-center justify-center text-green hover:bg-green hover:text-white transition-all shadow-md"
      >
        <i className="fas fa-chevron-right text-sm"></i>
      </button> */}

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

      <div className="relative z-20 w-full max-w-[1600px]  mx-auto px-4 sm:px-6 lg:px-8 ml-10">
        <div className="max-w-2xl">
          <div className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-green mb-4 animate-fade-up-1">
            {slide.label}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-brand-black mb-4 animate-fade-up-2">
            {slide.title}
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-brand-body leading-relaxed max-w-xl mb-6 animate-fade-up-3">
            {slide.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 animate-fade-up-4">
            <Link
              href="#"
              className="text-center bg-green text-white font-bold text-sm px-6 py-3 rounded hover:bg-green-dark transition-colors"
            >
              Explore Solutions
            </Link>

            <Link
              href="#"
              className="text-center border border-gray-300 text-brand-black font-medium text-sm px-6 py-3 rounded hover:border-green hover:text-green transition-colors"
            >
              Request Consultation
            </Link>
          </div>

          {/* Slider Dots */}
          {/* <div className="flex gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-green w-6"
                    : "bg-green/30 hover:bg-green/50"
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
} 