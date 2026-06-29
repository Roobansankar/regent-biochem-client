"use client";

import { useState } from "react";

export default function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  const prev = () => setCurrent(c => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent(c => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="aspect-[16/7] rounded-2xl overflow-hidden shadow-xl border border-brand-border bg-brand-bg3">
        <img
          src={images[current].src || images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-green hover:bg-green hover:text-white transition-all"
      >
        <i className="fas fa-chevron-left text-sm"></i>
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-green hover:bg-green hover:text-white transition-all"
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
