"use client";

import { useState } from "react";

export default function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  const prev = () => setCurrent(c => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent(c => (c === images.length - 1 ? 0 : c + 1));

  const currentImg = images[current];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="aspect-[16/7] rounded-2xl overflow-hidden shadow-xl border border-brand-border bg-brand-bg3 relative">
        <div className="w-full h-full relative">
          {images.map((img, i) => (
            <img
              key={i}
              src={img.src || img}
              alt={`Slide ${i + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
              }`}
            />
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-green hover:bg-green hover:text-white transition-all z-10"
      >
        <i className="fas fa-chevron-left text-sm"></i>
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-green hover:bg-green hover:text-white transition-all z-10"
      >
        <i className="fas fa-chevron-right text-sm"></i>
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? "bg-green w-6" : "bg-brand-border hover:bg-green/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
