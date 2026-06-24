"use client";

import { useState, useCallback } from "react";

export default function ProductGallery({ product }) {
  const images = product.images || (product.img ? [product.img] : []);
  const count = images.length;

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
    setActiveIndex((p) => (p === 0 ? count - 1 : p - 1));
    setSlideKey((k) => k + 1);
  }, [count]);

  const next = useCallback(() => {
    setDirection(1);
    setActiveIndex((p) => (p + 1) % count);
    setSlideKey((k) => k + 1);
  }, [count]);

  const currentImg = images[activeIndex] || null;

  return (
    <div className="flex gap-4">
      {/* Thumbnails */}
      <div className="flex flex-col gap-2 sm:gap-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl border-2 overflow-hidden transition-all duration-300 shrink-0 ${
              i === activeIndex
                ? "border-green shadow-md ring-2 ring-green/20 scale-105"
                : "border-brand-border opacity-60 hover:opacity-100 hover:border-green/50"
            }`}
          >
            <img
              src={src}
              alt={`${product.title} ${i + 1}`}
              className="w-full h-full object-contain p-1"
            />
          </button>
        ))}
        {images.length === 0 && (
          <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl border-2 border-brand-border bg-brand-bg2 flex items-center justify-center">
            <i className={`fas ${product.icon || "fa-box"} text-brand-muted text-sm sm:text-base`}></i>
          </div>
        )}
      </div>

      {/* Main Image */}
      <div className="flex-1 aspect-square rounded-2xl bg-white border border-brand-border overflow-hidden relative group shadow-sm min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
        <div className="w-full h-full overflow-hidden">
          <div
            key={slideKey}
            className="w-full h-full"
            style={{
              animation: count > 1 ? `slideIn 0.35s ease-out` : "none",
              "--slide-from": direction > 0 ? "30px" : "-30px",
            }}
          >
            {currentImg ? (
              <img
                src={currentImg}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-brand-bg2 flex flex-col items-center justify-center gap-2 sm:gap-4 p-6 sm:p-8">
                <i className={`fas ${product.icon || "fa-box"} text-4xl sm:text-6xl lg:text-7xl text-brand-muted`}></i>
                <span className="text-[10px] sm:text-xs lg:text-sm font-bold text-brand-muted">Product Image</span>
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

        {/* Arrow navigation */}
        {count > 1 && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}
