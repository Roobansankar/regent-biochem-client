"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// Import logos
import ashokLeyland from "@/assets/customer/ASHOK LEYLAND.webp";
import bangaloreMetro from "@/assets/customer/BANGALORE METRO.webp";
import bosch from "@/assets/customer/BOSCH.webp";
import daimlerIndustrial from "@/assets/customer/DAIMLER INDUSTRIAL.webp";
import delhiMetro from "@/assets/customer/DELHI METRO.webp";
import indianRailways from "@/assets/customer/INDIAN RAILWAYS.webp";
import jcb from "@/assets/customer/JCB.webp";
import knorrBremse from "@/assets/customer/KNORR-BREMSE.webp";
import lt from "@/assets/customer/L&T.webp";
import nsk from "@/assets/customer/NSK.webp";
import royalEnfield from "@/assets/customer/ROYAL ENFIELD.webp";
import sewEuroDrive from "@/assets/customer/SEW EURO-DRIVE.webp";
import suzuki from "@/assets/customer/SUZUKI.webp";
import tataSteel from "@/assets/customer/TATA STEEL.webp";
import toyota from "@/assets/customer/TOYOTA.webp";
import veCommercial from "@/assets/customer/VE COMMERCIAL.webp";
import wheelsIndia from "@/assets/customer/WHEELS INDIA.webp";

const customers = [
  { name: "Bosch", logo: bosch },
  { name: "Knorr Bremse", logo: knorrBremse },
  { name: "Royal Enfield", logo: royalEnfield },
  { name: "Suzuki", logo: suzuki },
  { name: "Ashok Leyland", logo: ashokLeyland },
  { name: "Delhi Metro", logo: delhiMetro },
  { name: "Bangalore Metro", logo: bangaloreMetro },
  { name: "Indian Railways", logo: indianRailways },
  { name: "JCB", logo: jcb },
  { name: "Daimler Industrial", logo: daimlerIndustrial },
  { name: "L&T", logo: lt },
  { name: "NSK", logo: nsk },
  { name: "SEW Euro-drive", logo: sewEuroDrive },
  { name: "Tata Steel", logo: tataSteel },
  { name: "Wheels India", logo: wheelsIndia },
  { name: "VE Commercial", logo: veCommercial },
  { name: "Toyota", logo: toyota },
];

export default function EsteemedCustomers() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animationId;
    const scroll = () => {
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0;
      } else {
        el.scrollLeft += 0.5; // Slower scroll for better visibility
      }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="bg-brand-bg2 py-12 sm:py-16 overflow-hidden border-t border-brand-border">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm sm:text-sm font-black uppercase tracking-[0.3em] text-green mb-4">Trusted by</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-black">
            Our Esteemed <span className="text-green">Customers</span>
          </h2>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-hidden gap-12 sm:gap-20 items-center"
        style={{ scrollBehavior: "auto" }}
      >
        {[...customers, ...customers].map((c, i) => (
          <div
            key={i}
            className="flex-shrink-0 transition-all duration-300"
          >
            <Image
              src={c.logo}
              alt={c.name}
              height={48}
              className={`w-auto object-contain ${
                ["Indian Railways", "JCB", "NSK", "VE Commercial", "Toyota", "Knorr Bremse", "Royal Enfield", "Wheels India"].includes(c.name)
                  ? "h-10 sm:h-12"
                  : c.name === "Daimler Industrial"
                  ? "h-4 sm:h-6"
                  : "h-7 sm:h-9"
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
