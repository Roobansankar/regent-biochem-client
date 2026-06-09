"use client";

import { useState, useEffect, useCallback } from "react";

const views = [
  { label: "Product View", icon: "fa-box" },
  { label: "Front Angle", icon: "fa-camera" },
  { label: "Side Profile", icon: "fa-arrows-left-right" },
  { label: "Top Down", icon: "fa-arrow-down" },
  { label: "Close Up", icon: "fa-search-plus" },
];

export default function ProductGallery({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [slideKey, setSlideKey] = useState(0);

  const goTo = useCallback((i) => {
    setDirection(i > activeIndex ? 1 : -1);
    setActiveIndex(i);
    setSlideKey((k) => k + 1);
  }, [activeIndex]);

  const prev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? views.length - 1 : prev - 1));
    setSlideKey((k) => k + 1);
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % views.length);
    setSlideKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-2 sm:gap-3">
        {views.map((view, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl border-2 overflow-hidden transition-all duration-300 shrink-0 ${
              i === activeIndex
                ? "border-green shadow-md ring-2 ring-green/20 scale-105"
                : "border-brand-border opacity-60 hover:opacity-100 hover:border-green/50"
            }`}
          >
            {i === 0 && product.img ? (
              <img
                src={product.img}
                alt={view.label}
                className="w-full h-full object-contain p-1"
              />
            ) : (
              <div className="w-full h-full bg-brand-bg2 flex items-center justify-center">
                <i className={`fas ${product.icon || view.icon} text-brand-muted text-sm sm:text-base`}></i>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 aspect-square rounded-2xl bg-white border border-brand-border overflow-hidden relative group shadow-sm min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
        <div className="w-full h-full overflow-hidden">
          <div
            key={slideKey}
            className="w-full h-full"
            style={{
              animation: `slideIn 0.35s ease-out`,
              "--slide-from": direction > 0 ? "30px" : "-30px",
            }}
          >
            {activeIndex === 0 && product.img ? (
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-contain p-4 sm:p-8 lg:p-10 transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full bg-brand-bg2 flex flex-col items-center justify-center gap-2 sm:gap-4 p-6 sm:p-8">
                <i className={`fas ${product.icon || views[activeIndex].icon} text-4xl sm:text-6xl lg:text-7xl text-brand-muted`}></i>
                <span className="text-[10px] sm:text-xs lg:text-sm font-bold text-brand-muted">{views[activeIndex].label}</span>
              </div>
            )}
          </div>
        </div>

        <style jsx>{`
          @keyframes slideIn {
            from {
              transform: translateX(var(--slide-from, 30px));
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}</style>

        {/* Label overlay */}
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 px-2.5 sm:px-3 py-1 bg-white/80 backdrop-blur-sm rounded-lg text-[10px] font-bold text-green shadow-xs border border-green/10">
          {views[activeIndex].label}
        </div>

        {/* Navigation dots */}
        <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 flex gap-1.5">
          {views.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-green w-4 sm:w-5" : "bg-green/30 hover:bg-green/50"
              }`}
            />
          ))}
        </div>

        {/* Arrow navigation */}
        <button
          onClick={prev}
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-green hover:text-green-dark p-1"
        >
          <i className="fas fa-chevron-left text-sm sm:text-base"></i>
        </button>
        <button
          onClick={next}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-green hover:text-green-dark p-1"
        >
          <i className="fas fa-chevron-right text-sm sm:text-base"></i>
        </button>
      </div>
    </div>
  );
}
