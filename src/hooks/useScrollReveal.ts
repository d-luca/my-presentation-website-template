"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      el.classList.add("visible");
      return;
    }

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.15,
      ...options,
    };

    el.classList.add("reveal-pending");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(el);

    return () => observer.disconnect();
  }, [options]);

  return ref;
}
