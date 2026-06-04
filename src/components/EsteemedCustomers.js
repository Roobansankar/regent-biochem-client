"use client";

import { useEffect, useRef } from "react";

const customers = [
  "Bosch",
  "Knorr Bremse",
  "Royal Enfield",
  "Suzuki Motorcycle",
  "Ashok Leyland",
  "Delhi Metro",
  "Bangalore Metro",
  "Indian Railways",
  "JCB",
  "Daymor Industrial",
  "L&T",
  "NSK",
  "SCW",
  "Tata Steel",
  "Wheels India",
  "VE Commercial",
  "Toyota",
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
        el.scrollLeft += 1;
      }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="bg-brand-bg2 py-12 sm:py-16 overflow-hidden border-t border-brand-border">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-green mb-2">Our Partners</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-black">
            Our Esteemed <span className="text-green">Customers</span>
          </h2>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-hidden gap-16 items-center px-8"
        style={{ scrollBehavior: "auto" }}
      >
        {[...customers, ...customers].map((c, i) => (
          <div
            key={i}
            className="flex-shrink-0 text-lg font-bold text-brand-muted whitespace-nowrap hover:text-green transition-colors"
          >
            {c}
          </div>
        ))}
      </div>
    </section>
  );
}
