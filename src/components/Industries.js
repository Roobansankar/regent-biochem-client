"use client";

import Link from "next/link";

const industries = [
  {
    title: "Automotive",
    icon: "fa-car",
    desc: "Precision cleaning solutions for engine components and high-volume assembly lines.",
    slug: "automotive"
  },
  {
    title: "CNC Machining",
    icon: "fa-microchip",
    desc: "Advanced degreasing and surface preparation for high-accuracy machined parts.",
    slug: "cnc-machining"
  },
  {
    title: "Railways",
    icon: "fa-train",
    desc: "Heavy-duty maintenance and cleaning for rolling stock and industrial infrastructure.",
    slug: "railways"
  },
  {
    title: "Manufacturing",
    icon: "fa-industry",
    desc: "End-to-end surface technology solutions for diverse production environments.",
    slug: "manufacturing"
  },
  {
    title: "Aerospace",
    icon: "fa-plane",
    desc: "Specialized cleaning agents meeting the rigorous safety standards of aviation.",
    slug: "aerospace"
  },
  {
    title: "Forging",
    icon: "fa-hammer",
    desc: "Heavy-duty descaling and die cleaning for hot and cold forging operations.",
    slug: "forging"
  },
  {
    title: "Oil & Gas",
    icon: "fa-oil-can",
    desc: "Specialized cleaning for pipelines, vessels, and offshore equipment.",
    slug: "oil-gas"
  },
  {
    title: "Food & Beverage",
    icon: "fa-utensils",
    desc: "Food-safe cleaning and CIP solutions for processing and packaging lines.",
    slug: "food-beverage"
  },
  {
    title: "Textile Industry",
    icon: "fa-tshirt",
    desc: "Specialized cleaning for spinning, weaving, dyeing, and finishing machinery.",
    slug: "textile-industry"
  },
  {
    title: "Energy & Power",
    icon: "fa-bolt",
    desc: "Non-corrosive maintenance for power generation and heat exchange systems.",
    slug: "energy-power"
  }
];

const left   = industries.filter((_, i) => i % 3 === 0); // 0, 3
const middle = industries.filter((_, i) => i % 3 === 1); // 1, 4
const right  = industries.filter((_, i) => i % 3 === 2); // 2, 5

export default function Industries() {
  return (
    <section className="bg-brand-bg2 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-green mb-2">Our Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-black mb-4">
            Industries We Serve
          </h2>
          <p className="text-base text-brand-body max-w-xl mx-auto leading-relaxed">
            Scalable technology modules designed for seamless integration into specific industrial workflows.
          </p>
        </div>

        {/* Staggered 3-column layout */}
        <div className="flex gap-5 items-start">

          {/* Left column — starts at top */}
          <div className="flex flex-col gap-5 flex-1">
            {left.map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>

          {/* Middle column — pushed down to stagger */}
          <div className="flex flex-col gap-5 flex-1 mt-10">
            {middle.map((item, i) => (
              <Card key={i} item={item} green />
            ))}
          </div>

          {/* Right column — pushed down more */}
          <div className="flex flex-col gap-5 flex-1 mt-20">
            {right.map((item, i) => (
              <Card key={i} item={item} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

function Card({ item, green = false }) {
  return (
    <div
      className={`
        rounded-2xl p-8 border transition-all duration-300
        hover:-translate-y-1 hover:shadow-lg cursor-default
        ${green
          ? "bg-green text-white border-green"
          : "bg-white text-brand-black border-brand-border shadow-sm"
        }
      `}
    >
      {/* Icon circle */}
      <div
        className={`
          w-14 h-14 rounded-xl flex items-center justify-center mb-6
          ${green ? "bg-white/20" : "bg-green-light"}
        `}
      >
        <i
          className={`fas ${item.icon} text-xl ${green ? "text-white" : "text-green"}`}
        />
      </div>

      {/* Title */}
      <h3
        className={`text-lg font-bold mb-3 ${green ? "text-white" : "text-brand-black"}`}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed ${green ? "text-white/80" : "text-brand-body"}`}
      >
        {item.desc}
      </p>
    </div>
  );
}