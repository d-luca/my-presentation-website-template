"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.15,
      ...options,
    };

    if ("IntersectionObserver" in window) {
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
    } else {
      el.classList.add("visible");
    }
  }, [options]);

  return ref;
}
