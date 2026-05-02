"use client";

import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit = {
    threshold: 0.12,
    rootMargin: "0px 0px -60px 0px",
  },
) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || isInView) return;

    if (!("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) return;
      setIsInView(true);
      observer.unobserve(entry.target);
    }, options);

    observer.observe(element);

    return () => observer.disconnect();
  }, [isInView, options]);

  return { ref, isInView };
}
