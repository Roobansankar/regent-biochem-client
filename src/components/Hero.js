"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import hero2 from "@/assets/hero2.webp";
import hero3 from "@/assets/hero3.webp";

const slides = [
  {
    bg: "/hero.webp",
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
    bg: hero2,
    label: "GREEN WAY TO GROWTH",
    title: (
      <>
        <span className="text-green">Global Expertise.</span>
        <br />
        Local Commitment.
      </>
    ),
    desc: "Backed by German expertise, we help industries solve operational challenges through practical and reliable solutions.",
  },
  {
    bg: hero3,
    label: "GREEN WAY TO GROWTH",
    title: (
      <>
        <span className="text-green">Driven by Innovation.</span>
        <br />
        Defined by Purpose.
      </>
    ),
    desc: "By combining technical expertise with a customer-focused approach, we help industries improve efficiency and achieve sustainable growth.",
  },
];

const totalSlides = slides.length;
const extendedSlides = [slides[totalSlides - 1], ...slides, slides[0]];
const lastIndex = extendedSlides.length - 1;

export default function Hero() {
  const [current, setCurrent] = useState(1);
  const [transition, setTransition] = useState(true);
  const timerRef = useRef(null);
  const snapTimeoutRef = useRef(null);

  const clearTimers = useCallback(() => {
    clearTimeout(timerRef.current);
    if (snapTimeoutRef.current) {
      clearTimeout(snapTimeoutRef.current);
      snapTimeoutRef.current = null;
    }
  }, []);

  const startAutoPlay = useCallback((initialDelay = 4000) => {
    clearTimeout(timerRef.current);
    const tick = () => {
      setCurrent((prev) => {
        const next = prev + 1;
        return next > lastIndex ? lastIndex : next;
      });
      timerRef.current = setTimeout(tick, 4000);
    };
    timerRef.current = setTimeout(tick, initialDelay);
  }, []);

  useEffect(() => {
    // Delay the first auto-advance so it lands safely after initial
    // load/LCP measurement, avoiding a late-arriving slide image
    // becoming a new (slower) Largest Contentful Paint candidate.
    startAutoPlay(7000);
    return () => {
      clearTimeout(timerRef.current);
      clearTimeout(snapTimeoutRef.current);
    };
  }, [startAutoPlay]);

  useEffect(() => {
    if (!transition) return;
    if (current === 0) {
      snapTimeoutRef.current = setTimeout(() => {
        setTransition(false);
        setCurrent(totalSlides);
      }, 500);
    } else if (current === lastIndex) {
      snapTimeoutRef.current = setTimeout(() => {
        setTransition(false);
        setCurrent(1);
      }, 500);
    }
    return () => {
      if (snapTimeoutRef.current) {
        clearTimeout(snapTimeoutRef.current);
        snapTimeoutRef.current = null;
      }
    };
  }, [current, transition, totalSlides]);

  useEffect(() => {
    if (transition) return;
    const id = requestAnimationFrame(() => setTransition(true));
    return () => cancelAnimationFrame(id);
  }, [current, transition]);

  const goTo = useCallback((index) => {
    clearTimers();
    setCurrent(index + 1);
    startAutoPlay();
  }, [clearTimers, startAutoPlay]);

  const prev = useCallback(() => {
    clearTimers();
    setCurrent((p) => Math.max(p - 1, 0));
    startAutoPlay();
  }, [clearTimers, startAutoPlay]);

  const next = useCallback(() => {
    clearTimers();
    if (current >= lastIndex) {
      setTransition(false);
      setCurrent(1);
    } else {
      setCurrent((p) => p + 1);
    }
    startAutoPlay();
  }, [clearTimers, startAutoPlay, current, lastIndex]);

  const realIndex = current === 0 ? totalSlides - 1 : current === lastIndex ? 0 : current - 1;

  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);

  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  }, []);

  const handleTouchMove = useCallback((e) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const SWIPE_THRESHOLD = 40;
    if (touchDeltaX.current > SWIPE_THRESHOLD) {
      prev();
    } else if (touchDeltaX.current < -SWIPE_THRESHOLD) {
      next();
    }
    touchDeltaX.current = 0;
  }, [prev, next]);

  return (
    <section className="relative overflow-hidden bg-brand-bg3">
      <div className="relative h-[360px] md:h-[440px] lg:h-[450px]">
        <div
          className="flex h-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: transition ? 'transform 500ms ease-in-out' : 'none',
          }}
        >
          {extendedSlides.map((slide, i) => (
            <div
              key={i}
              className="relative w-full h-full shrink-0 flex items-center bg-brand-bg3"
            >
              <Image
                src={slide.bg}
                alt=""
                fill
                priority={i === 1}
                fetchPriority={i === 1 ? "high" : "auto"}
                sizes="100vw"
                quality={70}
                className="object-cover"
              />
              <div className="hero-overlay absolute inset-0 z-10"></div>

              <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pl-10 lg:pl-16">
                <div className="max-w-2xl">
                  <div className="text-sm sm:text-sm font-black uppercase tracking-[0.3em] text-green mb-4">
                    {slide.label}
                  </div>

                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-[1.1] tracking-tight text-brand-black mb-3">
                    {slide.title}
                  </h1>

                  <p className="text-sm text-brand-body leading-relaxed max-w-xl mb-5">
                    {slide.desc}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/products"
                      className="text-center bg-green text-white font-bold text-sm px-6 py-3 rounded hover:bg-green-dark transition-colors"
                    >
                      Explore Solutions
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-green/20 items-center justify-center text-green hover:bg-green hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
        >
          <i className="fas fa-chevron-left text-xs"></i>
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md border border-green/20 items-center justify-center text-green hover:bg-green hover:text-white transition-all duration-300 shadow-lg hover:scale-110"
        >
          <i className="fas fa-chevron-right text-xs"></i>
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === realIndex ? "bg-green w-6" : "bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
