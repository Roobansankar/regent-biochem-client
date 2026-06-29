"use client";

import { useState } from "react";
import Link from "next/link";

const GREEN_DARK = "#1a4d2e";
const GREEN_MID = "#2d7a4f";
const GREEN_LIGHT = "#e8f5ee";

const products = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="18" width="24" height="14" rx="2" stroke="white" strokeWidth="2"/>
        <path d="M14 18V14a6 6 0 0112 0v4" stroke="white" strokeWidth="2"/>
        <circle cx="20" cy="25" r="3" stroke="white" strokeWidth="2"/>
        <path d="M20 28v4" stroke="white" strokeWidth="2"/>
      </svg>
    ),
    title: "CleanTech",
    href: "/products?brand=CleanTech",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 30L20 10l10 20" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M14 22h12" stroke="white" strokeWidth="2"/>
        <circle cx="20" cy="10" r="2" fill="white"/>
      </svg>
    ),
    title: "SafeWeld",
    href: "/products?brand=SafeWeld",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 20h24M8 14h8M24 14h8M8 26h8M24 26h8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="16" cy="14" r="2" fill="white"/>
        <circle cx="24" cy="26" r="2" fill="white"/>
      </svg>
    ),
    title: "FreFlo",
  },
];

const whyReasons = [
  "Sustainable & environmentally responsible solutions",
  "Safer alternatives to hazardous solvents",
  "Improved operational efficiency",
  "Reduced downtime & maintenance costs",
  "Expert application support",
  "Customized solutions for diverse industrial challenges",
];

const resources = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="18" height="24" rx="2" stroke="white" strokeWidth="2"/>
        <path d="M14 12h8M14 17h8M14 22h5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="28" cy="28" r="5" stroke="white" strokeWidth="2"/>
        <path d="M32 32l3 3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Case Studies",
    href: "/case-studies",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="13" height="14" rx="1" stroke="white" strokeWidth="2"/>
        <rect x="21" y="6" width="13" height="14" rx="1" stroke="white" strokeWidth="2"/>
        <rect x="6" y="24" width="13" height="10" rx="1" stroke="white" strokeWidth="2"/>
        <rect x="21" y="24" width="13" height="10" rx="1" stroke="white" strokeWidth="2"/>
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 7l10 7 10-7"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919843406642",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.529 5.856L.057 23.882l6.19-1.624A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.802a9.77 9.77 0 01-4.988-1.366l-.358-.213-3.714.974.992-3.622-.234-.373A9.775 9.775 0 012.198 12C2.198 6.58 6.58 2.198 12 2.198S21.802 6.58 21.802 12 17.42 21.802 12 21.802z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/regent-biochem/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@regentbio-chem?si=yOEOWQuYKA7JCwUa",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M22.54 6.42A2.78 2.78 0 0020.59 4.5C18.88 4 12 4 12 4s-6.88 0-8.59.5A2.78 2.78 0 001.46 6.42 29.94 29.94 0 001 12a29.94 29.94 0 00.46 5.58A2.78 2.78 0 003.41 19.5C5.12 20 12 20 12 20s6.88 0 8.59-.5a2.78 2.78 0 001.95-1.92A29.94 29.94 0 0023 12a29.94 29.94 0 00-.46-5.58z"/>
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/regent_biochem/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
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
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
];

function SectionDivider({ title }) {
  return (
    <div className="flex items-center gap-3 my-3 md:my-4">
      <div className="flex-1 flex items-center gap-1">
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN_MID }} />
        <div className="flex-1 h-px" style={{ background: GREEN_MID }} />
      </div>
      <h2 className="text-xs md:text-lg font-bold whitespace-nowrap" style={{ color: GREEN_DARK }}>
        {title}
      </h2>
      <div className="flex-1 flex items-center gap-1">
        <div className="flex-1 h-px" style={{ background: GREEN_MID }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: GREEN_MID }} />
      </div>
    </div>
  );
}

function MiniCard({ icon, title, href }) {
  const content = (
    <div className="flex flex-col items-center gap-1.5 bg-white rounded-2xl py-3 px-1 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer text-center" style={{ color: GREEN_DARK }}>
      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: GREEN_DARK }}>
        {icon}
      </div>
      <span className="text-xs font-medium text-gray-700">{title}</span>
    </div>
  );
  if (href) return <Link href={href}>{content}</Link>;
  return content;
}

function RowCard({ icon, title, desc, href }) {
  const content = (
    <div className="flex items-center gap-4 bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100 mb-3 cursor-pointer hover:shadow-md transition-shadow">
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: GREEN_DARK }}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-gray-900 text-sm md:text-base leading-tight">{title}</p>
        <p className="text-gray-500 text-xs md:text-sm mt-0.5 leading-snug">{desc}</p>
      </div>
      <div className="text-gray-400 flex-shrink-0">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 md:w-5 md:h-5">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </div>
    </div>
  );
  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return content;
}

export default function Links() {
  return (
    <div className="min-h-screen flex flex-col items-center" style={{ background: "#f6f8f6" }}>
      <div className="w-full flex flex-col">

        {/* ─── PAGE HERO ─── */}
        <section className="relative pt-4 pb-4 lg:pt-16 lg:pb-12 bg-green overflow-hidden">
          <div className="absolute inset-0 hero-pattern opacity-10"></div>
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <img src="/logo.png" alt="Bio-Chem Logo" className="h-10 w-auto brightness-0 invert mx-auto mb-2" />

              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-medium">
                Green Way to Growth
              </p>
            </div>
          </div>
        </section>

        <div className="px-3 md:px-6 lg:px-8 mt-1">
          {/* Our Solutions */}
          <SectionDivider title="Our Solutions" />
          <div className="grid grid-cols-3 gap-2">
            {products.map((p) => (
              <MiniCard key={p.title} icon={p.icon} title={p.title} href={p.href} />
            ))}
          </div>

          {/* Resources */}
          <SectionDivider title="Resources" />
          <div className="grid grid-cols-3 gap-2">
            {resources.map((r) => (
              <MiniCard key={r.title} icon={r.icon} title={r.title} href={r.href} />
            ))}
          </div>

          {/* Stay Connected */}
          <SectionDivider title="Stay Connected" />
          <div className="grid grid-cols-3 md:grid-cols-7 gap-1.5 md:gap-3 mb-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-1.5 bg-white rounded-2xl py-3 md:py-4 px-1 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
                style={{ color: GREEN_DARK }}
              >
                {s.icon}
                <span className="text-xs font-medium text-gray-700">{s.label}</span>
              </a>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}
