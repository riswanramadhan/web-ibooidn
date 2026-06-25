"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";

const aboutObserverOptions: IntersectionObserverInit = {
  threshold: 0.18,
  rootMargin: "0px 0px -100px 0px",
};

export function About() {
  const { ref, isInView } = useInView<HTMLElement>(aboutObserverOptions);
  const [isImagePopped, setIsImagePopped] = useState(false);
  const popTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (popTimer.current) window.clearTimeout(popTimer.current);
    };
  }, []);

  const popImage = () => {
    setIsImagePopped(true);
    if (popTimer.current) window.clearTimeout(popTimer.current);
    popTimer.current = window.setTimeout(() => setIsImagePopped(false), 180);
  };

  return (
    <section
      className={cn(
        "bg-light-sage dark:bg-primary-dark/10 py-24 overflow-hidden",
        isInView && "about-in-view",
      )}
      id="tentang"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 about-text-col">
            <div>
              <span className="inline-block px-4 py-1.5 bg-accent-orange text-white font-bold rounded-full text-base mb-6">
                CERITA KAMI
              </span>
              <h2 className="text-4xl font-extrabold text-primary-dark dark:text-white mb-6 leading-tight">
                Lahir dari Luka,{" "}
                <span className="text-accent-orange">
                  Tumbuh Menjadi Ikhtiar Cinta pada Tubuh
                </span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Iboo.idn lahir dari pengalaman nyata menghadapi gangguan
                hormonal, pencernaan, dan kelelahan akibat gaya hidup yang
                tidak selaras dengan kebutuhan tubuh perempuan.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Sebagai ikhtiar sadar, Iboo.idn menghadirkan{" "}
                <span className="font-bold text-primary-dark">
                  wellness shot berbahan ekstrak alami
                </span>{" "}
                untuk mendukung keseimbangan tubuh, membantu pencernaan,
                menjaga energi, dan menemani perempuan merawat dirinya secara
                konsisten.
              </p>
            </div>
          </div>
          <div className="relative about-image-col">
            <div className="absolute -inset-4 bg-accent-orange/10 rounded-3xl blur-2xl" />
            <Image
              alt="Bahan buah, sayur, dan rempah untuk wellness shot Iboo.idn"
              className={cn(
                "relative rounded-large shadow-2xl w-11/12 mx-auto aspect-[4/3] object-cover object-[center_80%] scale-105 image-pop",
                isImagePopped && "is-pop",
              )}
              height={900}
              id="story-main-image"
              onClick={popImage}
              quality={80}
              sizes="(min-width: 1024px) 520px, 90vw"
              src="/images/about-iboo.jpg.PNG"
              width={1200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
