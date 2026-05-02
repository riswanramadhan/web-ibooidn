"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

const heroSlides = [
  {
    src: "/images/hero-banner.jpg.PNG",
    alt: "Fresh Wellness Shot Ingredients and Vitality",
    objectPosition: "center 62%",
  },
  {
    src: "/images/hero-banner2.jpg.PNG",
    alt: "Fresh Wellness Shot Ingredients and Vitality 2",
    objectPosition: "center 72%",
  },
  {
    src: "/images/hero-banner1.jpg.PNG",
    alt: "Fresh Wellness Shot Ingredients and Vitality 3",
    objectPosition: "center 62%",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const touchStartX = useRef(0);

  const changeSlide = useCallback((direction: number) => {
    setCurrentSlide((current) => {
      const next = current + direction + heroSlides.length;
      return next % heroSlides.length;
    });
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = window.setInterval(() => changeSlide(1), 1800);

    return () => window.clearInterval(timer);
  }, [changeSlide, isAutoPlaying]);

  return (
    <section
      className="relative w-full h-[600px] overflow-hidden"
      id="beranda"
      onMouseEnter={() => setIsAutoPlaying(true)}
      onMouseLeave={() => setIsAutoPlaying(false)}
      onTouchEnd={(event) => {
        const deltaX = event.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(deltaX) < 40) return;
        changeSlide(deltaX < 0 ? 1 : -1);
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.changedTouches[0].clientX;
      }}
    >
      {heroSlides.map((slide, index) => (
        <Image
          alt={slide.alt}
          className={cn(
            "hero-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
            index === currentSlide ? "opacity-100" : "opacity-0",
          )}
          fill
          key={slide.src}
          priority={index === 0}
          sizes="100vw"
          src={slide.src}
          style={{ objectPosition: slide.objectPosition }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/50 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center justify-center">
        <div className="max-w-xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full text-white text-sm mb-6 badge-bounce">
            <span className="w-2 h-2 bg-green-400 rounded-full" />
            Immune Booster Indonesia
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Wellness Drinks <br />
            <span className="text-accent-orange">Guilt-free Meals</span>
          </h1>

          <p className="text-slate-200 text-lg mb-8">
            Wellness Shot 70 ml berbahan buah, sayur, dan rempah alami. Tanpa
            gula & air tambahan, kaya nutrisi, dan mudah diserap tubuh.
          </p>

          <div className="flex items-center justify-center">
            <a
              className="relative bg-accent-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition shadow-md shadow-orange-500/20 overflow-visible"
              href="#partner"
            >
              LEARN MORE
              <span className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-orange-300/80 blur-md pointer-events-none" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
