// "use client";

// import { useEffect } from "react";
// import Link from "next/link";
// import safeweldLogo from "@/assets/safeweld.webp";
// import cleanTecLogo from "@/assets/CleanTec.webp";
// import frefloLogo from "@/assets/freeflo.webp";
// import { API } from "@/lib/api";

// const GREEN_DARK = "#1a4d2e";
// const GREEN_MID = "#2d7a4f";
// const GREEN_LIGHT = "#e8f5ee";

// const products = [
//   {
//     icon: (
//       <img src={cleanTecLogo.src} alt="CleanTec" className="w-full h-full object-contain p-2" />
//     ),
//     title: "CleanTec",
//     href: "/products?brand=CleanTec",
//     noIconBg: true,
//     iconHeight: "h-9",
//   },
//   {
//     icon: (
//       <img src={safeweldLogo.src} alt="SafeWeld" className="w-full h-full object-contain p-2" />
//     ),
//     title: "SafeWeld",
//     href: "/products?brand=SafeWeld",
//     noIconBg: true,
//   },
// ];

// const services = [
//   {
//     icon: (
//       <img src={frefloLogo.src} alt="FreFlo" className="w-full h-full object-contain p-2" />
//     ),
//     title: "FreFlo",
//     href: "/services/pipeline",
//     noIconBg: true,
//   },
// ];

// const whyReasons = [
//   "Sustainable & environmentally responsible solutions",
//   "Safer alternatives to hazardous solvents",
//   "Improved operational efficiency",
//   "Reduced downtime & maintenance costs",
//   "Expert application support",
//   "Customized solutions for diverse industrial challenges",
// ];

// const resources = [
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
//         <rect x="3" y="2" width="13" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
//         <path d="M3 8h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//         <path d="M8 13h8M8 17h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//         <circle cx="19" cy="19" r="4" stroke="currentColor" strokeWidth="2"/>
//         <path d="M22 22l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//       </svg>
//     ),
//     title: "Case Studies",
//     href: "/case-studies",
//   },
//   {
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
//         <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="2"/>
//         <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="2"/>
//         <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="2"/>
//         <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="2"/>
//       </svg>
//     ),
//     title: "Blogs",
//     href: "/blog",
//   },
// ];

// const socials = [
//   {
//     label: "Email",
//     href: "mailto:info@bio-chem.in",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
//         <rect x="2" y="4" width="20" height="16" rx="2"/>
//         <path d="M2 7l10 7 10-7"/>
//       </svg>
//     ),
//   },
//   {
//     label: "WhatsApp",
//     href: "https://wa.me/919843406642",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
//         <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.529 5.856L.057 23.882l6.19-1.624A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.802a9.77 9.77 0 01-4.988-1.366l-.358-.213-3.714.974.992-3.622-.234-.373A9.775 9.775 0 012.198 12C2.198 6.58 6.58 2.198 12 2.198S21.802 6.58 21.802 12 17.42 21.802 12 21.802z"/>
//       </svg>
//     ),
//   },
//   {
//     label: "LinkedIn",
//     href: "https://www.linkedin.com/company/regent-biochem/",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//         <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
//         <circle cx="4" cy="4" r="2"/>
//       </svg>
//     ),
//   },
//   {
//     label: "YouTube",
//     href: "https://youtube.com/@regentbio-chem?si=yOEOWQuYKA7JCwUa",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//         <path d="M22.54 6.42A2.78 2.78 0 0020.59 4.5C18.88 4 12 4 12 4s-6.88 0-8.59.5A2.78 2.78 0 001.46 6.42 29.94 29.94 0 001 12a29.94 29.94 0 00.46 5.58A2.78 2.78 0 003.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.5a2.78 2.78 0 001.95-1.92A29.94 29.94 0 0023 12a29.94 29.94 0 00-.46-5.58z"/>
//         <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
//       </svg>
//     ),
//   },
//   {
//     label: "Instagram",
//     href: "https://www.instagram.com/regent_biochem/",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
//         <rect x="2" y="2" width="20" height="20" rx="5"/>
//         <circle cx="12" cy="12" r="4"/>
//         <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
//       </svg>
//     ),
//   },
//   {
//     label: "Facebook",
//     href: "https://www.facebook.com/profile.php?id=61591484781451",
//     icon: (
//       <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
//         <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
//       </svg>
//     ),
//   },
// ];

// function SectionDivider({ title }) {
//   return (
//     <div className="flex items-center gap-2 my-1.5 md:my-3">
//       <div className="flex-1 flex items-center gap-1">
//         <div className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN_MID }} />
//         <div className="flex-1 h-px" style={{ background: GREEN_MID }} />
//       </div>
//       <h2 className="text-[10px] sm:text-xs md:text-lg font-bold whitespace-nowrap" style={{ color: GREEN_DARK }}>
//         {title}
//       </h2>
//       <div className="flex-1 flex items-center gap-1">
//         <div className="flex-1 h-px" style={{ background: GREEN_MID }} />
//         <div className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN_MID }} />
//       </div>
//     </div>
//   );
// }

// function MiniCard({ icon, title, href, className = "", noIconBg = false, iconHeight = "h-9", hideTitle = false }) {
//   const content = (
//     <div className={`flex flex-col items-center gap-1 bg-white rounded-2xl py-1.5 px-2 sm:px-1 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer text-center ${className}`} style={{ color: GREEN_DARK }}>
//       {noIconBg ? (
//         <div className={`flex items-center justify-center w-full ${iconHeight}`}>
//           {icon}
//         </div>
//       ) : (
//         <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: GREEN_DARK }}>
//           {icon}
//         </div>
//       )}
//       {!hideTitle && <span className="text-[11px] sm:text-xs font-medium text-gray-700">{title}</span>}
//     </div>
//   );
//   if (href) return <Link href={href}>{content}</Link>;
//   return content;
// }

// function RowCard({ icon, title, desc, href }) {
//   const content = (
//     <div className="flex items-center gap-4 bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100 mb-3 cursor-pointer hover:shadow-md transition-shadow">
//       <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: GREEN_DARK }}>
//         {icon}
//       </div>
//       <div className="flex-1 min-w-0">
//         <p className="font-bold text-gray-900 text-sm md:text-base leading-tight">{title}</p>
//         <p className="text-gray-500 text-xs md:text-sm mt-0.5 leading-snug">{desc}</p>
//       </div>
//       <div className="text-gray-400 flex-shrink-0">
//         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 md:w-5 md:h-5">
//           <path d="M9 18l6-6-6-6"/>
//         </svg>
//       </div>
//     </div>
//   );
//   if (href) {
//     return <Link href={href}>{content}</Link>;
//   }
//   return content;
// }

// export default function Links() {
//   // This is a standalone "fit one mobile screen" page. The site-wide
//   // html font-size is 110%, which inflates every rem-based Tailwind
//   // spacing/size utility beyond what the class names imply. Reset it
//   // to 100% only while this page is mounted so our sizing is accurate.
//   useEffect(() => {
//     const original = document.documentElement.style.fontSize;
//     document.documentElement.style.fontSize = "100%";
//     return () => {
//       document.documentElement.style.fontSize = original;
//     };
//   }, []);

//   return (
//     <div className="h-dvh flex flex-col items-center w-full overflow-hidden" style={{ background: "#f6f8f6" }}>
//       <div className="w-full flex flex-col max-w-[780px] mx-auto flex-1 justify-between">

//         {/* ─── PAGE HERO ─── */}
//         <section className="relative pt-2 pb-2 lg:pt-4 lg:pb-3 bg-green overflow-hidden">
//           <div className="absolute inset-0 hero-pattern opacity-10"></div>
//           <div className="w-full mx-auto px-3 sm:px-4 relative z-10">
//             <div className="text-center mx-auto">
//               <img src="/logo-header.webp" alt="Bio-Chem Logo" className="w-20 sm:w-24 brightness-0 invert mx-auto" />
//             </div>
//           </div>
//         </section>

//         <div className="px-3 md:px-6 lg:px-8">
//           {/* Our Products */}
//           <SectionDivider title="Our Products" />
//           <div className="flex justify-center flex-wrap gap-1 mt-1 mb-1">
//             {products.map((p) => (
//               <MiniCard key={p.title} icon={p.icon} title={p.title} href={p.href} noIconBg={p.noIconBg} iconHeight={p.iconHeight} hideTitle className="w-[90px] sm:w-[110px]" />
//             ))}
//           </div>

//           {/* Our Services */}
//           <SectionDivider title="Our Services" />
//           <div className="flex justify-center items-center mt-1 mb-1">
//             <div className="w-fit mx-auto">
//               {services.map((s) => (
//                 <MiniCard key={s.title} icon={s.icon} title={s.title} href={s.href} noIconBg={s.noIconBg} hideTitle className="w-[90px] sm:w-[110px] mx-auto" />
//               ))}
//             </div>
//           </div>

//           {/* Resources */}
//           <SectionDivider title="Resources" />
//           <div className="flex justify-center flex-wrap gap-1 mt-1 mb-1">
//             {resources.map((r) => (
//               <Link key={r.title} href={r.href} className="flex flex-col items-center gap-1 bg-white rounded-2xl py-1.5 px-2 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer w-[90px] sm:w-[110px]" style={{ color: GREEN_DARK }}>
//                 {r.icon}
//                 <span className="text-[10px] sm:text-[11px] font-medium text-gray-700">{r.title}</span>
//               </Link>
//             ))}
//           </div>

//           {/* Stay Connected */}
//           <SectionDivider title="Stay Connected" />
//           <div className="flex justify-center flex-wrap gap-1 mt-1 mb-1">
//             {socials.map((s) => (
//               <a
//                 key={s.label}
//                 href={s.href}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="flex flex-col items-center gap-1 bg-white rounded-2xl py-1.5 px-2 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer w-[90px] sm:w-[110px]"
//                 style={{ color: GREEN_DARK }}
//               >
//                 {s.icon}
//                 <span className="text-[10px] sm:text-[11px] font-medium text-gray-700">{s.label}</span>
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* ─── FOOTER TAGLINE ─── */}
//         <section className="bg-green py-2">
//           <div className="text-center">
//             <p className="text-sm sm:text-base text-white/90 leading-relaxed font-medium">
//               Green Way to Growth
//             </p>
//           </div>
//         </section>

//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect } from "react";
import Link from "next/link";
import safeweldLogo from "@/assets/safeweld.webp";
import cleanTecLogo from "@/assets/CleanTec.webp";
import frefloLogo from "@/assets/freeflo.webp";
import { API } from "@/lib/api";

const GREEN_DARK = "#1a4d2e";
const GREEN_MID = "#2d7a4f";
const GREEN_LIGHT = "#e8f5ee";

const products = [
  {
    icon: (
      <img src={cleanTecLogo.src} alt="CleanTec" className="w-full h-full object-contain p-1.5" />
    ),
    title: "CleanTec",
    href: "/products?brand=CleanTec",
    noIconBg: true,
    iconHeight: "h-8",
  },
  {
    icon: (
      <img src={safeweldLogo.src} alt="SafeWeld" className="w-full h-full object-contain p-1.5" />
    ),
    title: "SafeWeld",
    href: "/products?brand=SafeWeld",
    noIconBg: true,
  },
];

const services = [
  {
    icon: (
      <img src={frefloLogo.src} alt="FreFlo" className="w-full h-full object-contain p-1.5" />
    ),
    title: "FreFlo",
    href: "/services/pipeline",
    noIconBg: true,
  },
];

const resources = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="2" width="13" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M3 8h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 13h8M8 17h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="19" cy="19" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M22 22l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Case Studies",
    href: "/case-studies",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="2"/>
        <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="2"/>
        <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="2"/>
        <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    title: "Blogs",
    href: "/blog",
  },
];

const socials = [
  {
    label: "Email",
    href: "mailto:info@bio-chem.in",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 7l10 7 10-7"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919843406642",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.529 5.856L.057 23.882l6.19-1.624A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.802a9.77 9.77 0 01-4.988-1.366l-.358-.213-3.714.974.992-3.622-.234-.373A9.775 9.775 0 012.198 12C2.198 6.58 6.58 2.198 12 2.198S21.802 6.58 21.802 12 17.42 21.802 12 21.802z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/regent-biochem/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@regentbio-chem?si=yOEOWQuYKA7JCwUa",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22.54 6.42A2.78 2.78 0 0020.59 4.5C18.88 4 12 4 12 4s-6.88 0-8.59.5A2.78 2.78 0 001.46 6.42 29.94 29.94 0 001 12a29.94 29.94 0 00.46 5.58A2.78 2.78 0 003.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.5a2.78 2.78 0 001.95-1.92A29.94 29.94 0 0023 12a29.94 29.94 0 00-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/regent_biochem/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61591484781451",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
];

function SectionDivider({ title }) {
  return (
    <div className="flex items-center gap-2 my-1">
      <div className="flex-1 flex items-center gap-1">
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN_MID }} />
        <div className="flex-1 h-px" style={{ background: GREEN_MID }} />
      </div>
      <h2 className="text-[11px] sm:text-xs md:text-sm font-bold whitespace-nowrap" style={{ color: GREEN_DARK }}>
        {title}
      </h2>
      <div className="flex-1 flex items-center gap-1">
        <div className="flex-1 h-px" style={{ background: GREEN_MID }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN_MID }} />
      </div>
    </div>
  );
}

function MiniCard({ icon, title, href, className = "", noIconBg = false, iconHeight = "h-8", hideTitle = false }) {
  const content = (
    <div className={`flex flex-col items-center justify-center gap-1 bg-white rounded-2xl py-2 px-2 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer text-center ${className}`} style={{ color: GREEN_DARK }}>
      {noIconBg ? (
        <div className={`flex items-center justify-center w-full ${iconHeight}`}>
          {icon}
        </div>
      ) : (
        <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: GREEN_DARK }}>
          {icon}
        </div>
      )}
      {!hideTitle && <span className="text-[10px] sm:text-xs font-medium text-gray-700">{title}</span>}
    </div>
  );
  if (href) return <Link href={href}>{content}</Link>;
  return content;
}

export default function Links() {
  useEffect(() => {
    const original = document.documentElement.style.fontSize;
    document.documentElement.style.fontSize = "100%";
    return () => {
      document.documentElement.style.fontSize = original;
    };
  }, []);

  return (
    <div className="h-dvh flex flex-col items-center w-full overflow-hidden" style={{ background: "#f6f8f6" }}>
      <div className="w-full flex flex-col max-w-[780px] mx-auto h-full justify-between">

        {/* ─── PAGE HERO ─── */}
        <section className="relative py-2.5 bg-green overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 hero-pattern opacity-10"></div>
          <div className="w-full mx-auto px-3 sm:px-4 relative z-10">
            <div className="text-center mx-auto">
              <img src="/logo-header.webp" alt="Bio-Chem Logo" className="w-20 sm:w-24 brightness-0 invert mx-auto" />
            </div>
          </div>
        </section>

        {/* ─── MAIN CONTENT AREA ─── */}
        <div className="px-3 sm:px-6 flex-1 flex flex-col justify-evenly py-1">
          {/* Our Products */}
          <div>
            <SectionDivider title="Our Products" />
            <div className="flex justify-center flex-wrap gap-2 mt-1">
              {products.map((p) => (
                <MiniCard key={p.title} icon={p.icon} title={p.title} href={p.href} noIconBg={p.noIconBg} iconHeight={p.iconHeight} hideTitle className="w-[100px] sm:w-[120px]" />
              ))}
            </div>
          </div>

          {/* Our Services */}
          <div>
            <SectionDivider title="Our Services" />
            <div className="flex justify-center items-center mt-1">
              <div className="w-fit mx-auto">
                {services.map((s) => (
                  <MiniCard key={s.title} icon={s.icon} title={s.title} href={s.href} noIconBg={s.noIconBg} hideTitle className="w-[100px] sm:w-[120px] mx-auto" />
                ))}
              </div>
            </div>
          </div>

          {/* Resources */}
          <div>
            <SectionDivider title="Resources" />
            <div className="flex justify-center flex-wrap gap-2 mt-1">
              {resources.map((r) => (
                <Link key={r.title} href={r.href} className="flex flex-col items-center justify-center gap-1 bg-white rounded-2xl py-2 px-2 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer w-[100px] sm:w-[120px]" style={{ color: GREEN_DARK }}>
                  {r.icon}
                  <span className="text-[10px] sm:text-[11px] font-medium text-gray-700">{r.title}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Stay Connected */}
          <div>
            <SectionDivider title="Stay Connected" />
            <div className="grid grid-cols-3 gap-2 mt-1 max-w-[360px] mx-auto w-full">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center gap-1 bg-white rounded-2xl py-2 px-1 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer w-full"
                  style={{ color: GREEN_DARK }}
                >
                  {s.icon}
                  <span className="text-[10px] sm:text-[11px] font-medium text-gray-700">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ─── FOOTER TAGLINE ─── */}
        <section className="bg-green py-2 flex-shrink-0">
          <div className="text-center">
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium">
              Green Way to Growth
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}