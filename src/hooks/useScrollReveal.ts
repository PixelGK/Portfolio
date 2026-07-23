import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "./useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

type RevealOptions = {
  y?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
};

/**
 * Fades + lifts direct children of the returned ref into view on scroll.
 * Falls back to a plain, instant-visible render when motion is reduced.
 */
export function useScrollReveal<T extends HTMLElement>(
  selector = "[data-reveal]",
  { y = 28, duration = 0.9, stagger = 0.12, delay = 0 }: RevealOptions = {}
) {
  const ref = useRef<T | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = container.querySelectorAll(selector);
    if (!targets.length) return;

    if (reduced) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 82%",
            once: true,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, [selector, y, duration, stagger, delay, reduced]);

  return ref;
}
